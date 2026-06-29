# File upload

### Walkthrough

http://VM_IP/?page=upload

1. Navigate to ?page=upload using FireFox
3. Inspect the page an go to the network section
2. Upload evil.jpeg
3. Right-click on the upload request to 'Edit and Resend'
4. Edit the request body to change the file extension into .php and click the 'send' button
5. Inspect the response html content to find the flag

---

### Explanation

https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html