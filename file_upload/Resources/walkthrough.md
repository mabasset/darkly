# File upload exploit walkthrough

http://172.28.128.136/?page=upload

### 1. Create a malevolous php file (test.php)

---

### 2. Open DevTools -> Network section

---

### 3. Upload the php file

_NOTE:_ on page we should see "Your image was not uploaded."

---

### 4. 'Copy ad fetch' the failed request

---

### 5. Go to Console and write:

`const response = await` and paste the request

`const html = await response.text();`

`console.log(html);`

---

### 6. Search "The flag is" in the html body
