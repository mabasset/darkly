# Brute Force Attack Prevention

### 1. Strong Password Policies

Enforce complexity requirements at the application level.

- Minimum 12–16 characters
- Mix of uppercase, lowercase, digits, and symbols
- Ban known weak passwords
- Prohibit reuse of recent passwords

### 2. Account Lockout & Rate Limiting

Limit how many attempts an attacker can make in a given time window.

### 3. IP Allowlisting and Geo-Blocking

For sensitive systems (admin panels, SSH, VPNs):

- Restrict access to known IP ranges
- Block or flag login attempts from unexpected geographies
- Use a VPN or jump host to limit the exposed attack surface

### 4. Intrusion Detection and Monitoring

Detect brute force attempts in real time.

- **Log and alert** on repeated failed logins (e.g., >10 failures in 60 seconds)
- Monitor for unusual patterns: logins at odd hours, new devices, impossible travel

### 5. Secure SSH and Remote Access

SSH is a common brute force target. Harden it:

```bash
# /etc/ssh/sshd_config recommended settings

PermitRootLogin no           # Never allow root login via SSH
PasswordAuthentication no    # Disable passwords, use key-based auth only
MaxAuthTries 3               # Limit attempts per connection
LoginGraceTime 20            # Disconnect unauthenticated sessions quickly
AllowUsers youruser          # Whitelist specific users
```
