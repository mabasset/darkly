# Bruteforce

### Walkthrough

http://VM_IP/?page=signin

1. Run this command replacing YOUR_VM_IP:
    ```bash
    docker run --rm -i -e VM_IP=YOUR_VM_IP node:26.1.0-slim node -e "$(cat bruteforce/Resources/script.js)"
    ```
2. Wait until it finds the credentials
3. Use the credentials in the signin page: http://VM_IP/?page=signin

---

### Explanation

https://owasp.org/www-community/attacks/Brute_force_attack

---

### Prevention

1. Enforce password policies

    - Minimum 12–16 characters
    - Mix of uppercase, lowercase, digits, and symbols
    - Ban known weak passwords
    - Prohibit reuse of recent passwords

2. Limit login attempts

    Limit how many attempts an attacker can make in a given time window.

3. Require multi-factor authentication

    Enforce the use of two-factor authentication. 2FA adds an extra layer of security by requiring users to provide two different authentication factors.

4. Utilize CAPTCHA

    Implement CAPTCHA to differentiate between human and automated login attempts.

5. Use an Identity provider (like KeyCloak) instead of creating custom auth logic
