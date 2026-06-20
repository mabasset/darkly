# htpasswd exploit walkthrough

## http://172.28.128.136/robots.txt/

### 1. Read robots.txt file to find the /whatever/ directory

---

### 2. Read the htpasswd file

There's what appears to be a login username:password

---

### 3. Identify 'password' encrypting algorithm:

`hashcat --identify`

---

### 4. Descrypt 'password' value:

https://md5decrypt.net/en/

---

### 5. Go to http://172.28.128.136/admin to enter the Secured Area

---

### 6. Use the credentials on this form to retrieve the flag
