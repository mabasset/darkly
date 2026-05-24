# Brute Force Attack Prevention

### 1. Strong Password Policies

Enforce complexity requirements at the application level.

- Minimum 12–16 characters
- Mix of uppercase, lowercase, digits, and symbols
- Ban known weak passwords
- Prohibit reuse of recent passwords

### 2. Account Lockout & Rate Limiting

Limit how many attempts an attacker can make in a given time window.

### 3. Multi-Factor Authentication (MFA)

Even if an attacker guesses the correct password, MFA adds a second barrier.

- **TOTP** (Time-based One-Time Password) — Google Authenticator, Authy
- **Hardware tokens** — YubiKey (FIDO2/WebAuthn)
- **Push notifications** — Duo Security
- **SMS codes** — convenient but weakest MFA option (susceptible to SIM swapping)

MFA is one of the single most effective controls against brute force and credential stuffing.

### 5. IP Allowlisting and Geo-Blocking

For sensitive systems (admin panels, SSH, VPNs):

- Restrict access to known IP ranges
- Block or flag login attempts from unexpected geographies
- Use a VPN or jump host to limit the exposed attack surface

### 6. Intrusion Detection and Monitoring

Detect brute force attempts in real time.

- **Log and alert** on repeated failed logins (e.g., >10 failures in 60 seconds)
- Use a **SIEM** (Security Information and Event Management) system — Splunk, Elastic SIEM, Wazuh
- Deploy a **WAF** (Web Application Firewall) to block automated traffic — Cloudflare, AWS WAF
- Monitor for unusual patterns: logins at odd hours, new devices, impossible travel

### 7. Secure SSH and Remote Access

SSH is a common brute force target. Harden it:

```bash
# /etc/ssh/sshd_config recommended settings

PermitRootLogin no           # Never allow root login via SSH
PasswordAuthentication no    # Disable passwords, use key-based auth only
MaxAuthTries 3               # Limit attempts per connection
LoginGraceTime 20            # Disconnect unauthenticated sessions quickly
AllowUsers youruser          # Whitelist specific users
```

Also consider tools like **Fail2ban** to automatically ban IPs with too many failures.

```bash
# Fail2ban bans an IP after 5 failed SSH attempts within 10 minutes
# /etc/fail2ban/jail.local
[sshd]
enabled  = true
maxretry = 5
findtime = 600
bantime  = 3600
```
