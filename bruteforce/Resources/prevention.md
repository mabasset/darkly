# Bruteforce attack prevention

### 1. Enforce password policies

- Minimum 12–16 characters
- Mix of uppercase, lowercase, digits, and symbols
- Ban known weak passwords
- Prohibit reuse of recent passwords

### 2. Limit login attempts

Limit how many attempts an attacker can make in a given time window.

### 3. Require multi-factor authentication

Enforce the use of two-factor authentication. 2FA adds an extra layer of security by requiring users to provide two different authentication factors.

### 4. Utilize CAPTCHA

Implement CAPTCHA to differentiate between human and automated login attempts.

### 5. Use an Identity provider (like KeyCloak) instead of creating custom auth logic