# Survey

### Walkthrough

http://VM_IP/?page=recover

1. Open DevTools and select one input of type select under the 'Grade' column
2. Choose one of the select option's values and write a number greater than 10
3. Close DevTools and submit the modified input value by clicking on the altered select option

---

### Explanation

https://owasp.org/www-community/attacks/Web_Parameter_Tampering

---

### Prevention

Always re-validate every constraint the UI enforces, on the server. Never assume the client sent what the form expected. — they can be freely edited in DevTools before submission.

The server should check that values are the expected type, within an acceptable range, and not empty or malformed. If any check fails, reject the request immediately with a `400 Bad Request`

```go
grade, err := strconv.Atoi(r.FormValue("grade"))

if err != nil || grade < 1 || grade > 10 {
    http.Error(w, "Invalid grade", http.StatusBadRequest)
    return
}
```
