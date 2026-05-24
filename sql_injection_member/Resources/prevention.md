# SQL injection Attack Prevention

### Parameterized queries

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
