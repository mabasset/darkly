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