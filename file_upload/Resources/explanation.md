# File upload

### Walkthrough

http://172.28.128.136/?page=upload

1. Create a malevolous php file (test.php)
2. Open DevTools -> Network section
3. Try to upload the php file
4. 'Copy and fetch' the failed request
5. Write to the browser console:

```javascript
const response = await //copied request
const html = await response.text();
console.log(html);
```

6. Search "The flag is" in the html body

---

### Explanation

https://www.techtarget.com/searchsecurity/definition/cookie-poisoning