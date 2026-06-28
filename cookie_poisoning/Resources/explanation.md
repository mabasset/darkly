# Cookie poisoning

### Walkthrough

http://172.28.128.136/index.php?page=signin

1. Open DevTools -> Application section -> Cookies subsection
2. Take the 'I_am_admin' cookie value
3. Identify encrypting algorithm: `hashcat --identify`
4. Decrypt cookie value: https://md5decrypt.net/en/
5. Encrypt the string 'true' and paste result in the 'I_am_admin' cookie: https://md5decrypt.net/en/
6. Submit login form

---

### Explanation

https://www.techtarget.com/searchsecurity/definition/cookie-poisoning