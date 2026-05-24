# Client-side Trust / Parameter Tampering Prevention

Best prevention is to apply each layer below:

### 1. Server-side validation

Always re-validate every constraint the UI enforces, on the server. Never assume the client sent what the form expected. — they can be freely edited in DevTools before submission.

The server should check that values are the expected type, within an acceptable range, and not empty or malformed. If any check fails, reject the request immediately with a `400 Bad Request`

```go
grade, err := strconv.Atoi(r.FormValue("grade"))

if err != nil || grade < 1 || grade > 10 {
    http.Error(w, "Invalid grade", http.StatusBadRequest)
    return
}
```
