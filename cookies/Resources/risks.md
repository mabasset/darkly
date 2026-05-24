# Cookie Security Risks

### 1. Cross-Site Scripting (XSS)

**Condition:** `HttpOnly` flag is absent.

An attacker injects malicious JavaScript into a page. The script reads `document.cookie`

---

### 2. Man-in-the-Middle (MITM) Interception

**Condition:** `Secure` flag is absent, or the site allows HTTP.

If a cookie is transmitted over plain HTTP, anyone on the same network (coffee shop Wi-Fi, a compromised router) can capture it with a packet sniffer such as Wireshark.

```
GET /dashboard HTTP/1.1
Host: example.com
Cookie: session=abc123secret   ← visible in cleartext
```

**Impact:** Token theft without any interaction on the target server.

---

### 3.3 Cross-Site Request Forgery (CSRF)

**Condition:** `SameSite` is set to `None` or omitted (legacy default).

The browser automatically attaches cookies to any request matching the cookie's domain — including requests triggered by a third-party page.

```html
<!-- Malicious page visited by the victim -->
<img src="https://bank.example/transfer?to=attacker&amount=5000" />
```

**Impact:** Authenticated actions performed without user consent.

---

### 3.4 Session Fixation

**Condition:** The server reuses a session ID across authentication state changes.

An attacker sets a known session ID on the victim's browser before login. After the victim authenticates, the attacker uses the same ID.

**Impact:** Account takeover without ever stealing a token post-login.

---

### 3.5 Cookie Theft via Subdomain Takeover

**Condition:** `Domain=.example.com` set too broadly + an abandoned subdomain.

If `old.example.com` is not claimed but the cookie scope covers all subdomains, an attacker who takes control of that subdomain receives the cookie on every request.

**Impact:** Session token leakage through a seemingly unrelated subdomain.

---

### 3.6 Browser Storage Inspection / DevTools Exposure

**Condition:** Any cookie without `HttpOnly`.

A cookie visible in the browser's DevTools (Application → Cookies) can be copied by anyone with physical or remote access to the browser session (shared computers, screen sharing, malware with UI access).

**Impact:** Direct credential theft without a network attack.

---

### 3.7 Log & Referrer Leakage

**Condition:** Session IDs embedded in URLs rather than cookies, or verbose server logging.

```
GET /app?session=abc123secret HTTP/1.1
Referer: https://other-site.com/page
```

URLs end up in server logs, browser history, and `Referer` headers sent to third parties.

**Impact:** Passive leakage of session tokens across systems.

---

## 4. Realistic Attack Scenario (End-to-End)

```
1. Victim connects to a public Wi-Fi hotspot.
2. Attacker runs ARP spoofing → becomes the gateway (MITM).
3. Target site allows HTTP fallback → Secure flag absent.
4. Attacker captures HTTP traffic → extracts session cookie.
5. Attacker replays the cookie in their own browser.
6. Server accepts it → attacker is now logged in as the victim.
```

No vulnerability in application code required — only a missing `Secure` flag.

---

## 5. Defences & Best Practices

```http
Set-Cookie: session=<token>;
  HttpOnly;
  Secure;
  SameSite=Strict;
  Path=/;
  Max-Age=3600
```

| Defence                 | What it mitigates            |
| ----------------------- | ---------------------------- |
| `HttpOnly`              | XSS-based theft              |
| `Secure`                | MITM interception            |
| `SameSite=Strict`       | CSRF                         |
| Short `Max-Age`         | Reduces breach window        |
| Token rotation on login | Session fixation             |
| HTTPS everywhere (HSTS) | Downgrade attacks            |
| Narrow `Domain` scope   | Subdomain takeover           |
| CSP headers             | Limits XSS payload execution |

---

## 6. Tools Used in Cookie Attacks (Know Your Enemy)

| Tool                 | Usage                                  |
| -------------------- | -------------------------------------- |
| **Wireshark**        | Packet capture, MITM analysis          |
| **Burp Suite**       | HTTP interception, cookie manipulation |
| **OWASP ZAP**        | Automated scanning for missing flags   |
| **Browser DevTools** | Manual inspection of cookie attributes |
| **BeEF**             | Browser exploitation via XSS hooks     |

---

## 7. Key Takeaways

- A cookie is only as secure as its **flags and transport layer**.
- Missing `HttpOnly` + any XSS = instant session hijack.
- Missing `Secure` + HTTP = passive interception with no exploit needed.
- Missing `SameSite` = CSRF risk on any authenticated action.
- Always audit cookies with **DevTools** or **Burp** during a pentest — they are a primary target.
