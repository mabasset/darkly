# Reset password

### Walkthrough

http://VM_IP/?page=recover

1. Open DevTools and search for submit form
2. Remove the hidden email input
3. Change default email and submit the form

---

### Explanation

https://owasp.org/www-community/attacks/Web_Parameter_Tampering

### Prevention

1. Validate everything server-side: never trust hidden fields, cookies, or other client-supplied values.
2. Keep sensitive data (price, role, email) out of the client: derive it from the session/database instead.
3. Use session-based authorization: base permissions on the authenticated session, not submitted form data.
4. Sign or encrypt any value that must round-trip through the client: so tampering is detectable.
5. Allow-list expected values: reject anything outside the expected format/range.
