# Bruteforce

### Walkthrough

http://172.28.128.136/?page=signin

Run this command:

`docker run --rm -i node:26.1.0-slim node -e "$(cat bruteforce/Resources/script.js)"`

It fetches a short list of the most common passwords and bruteforces the login page

---

### Explanation

https://owasp.org/www-community/attacks/Brute_force_attack