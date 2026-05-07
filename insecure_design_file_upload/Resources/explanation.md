# http://172.28.128.136/?page=upload

1. **Create a malevolous php file**
2. **Choose that file and upload it**
    - the request should print "Your image was not uploaded."
3. **Inspect the page and go to the Network section. 'Copy as fetch' the failed request**
4. **Paste the request in the Console section with ```const response = await```...**
5. **Await for reading the response html with ```const html = await response.text();```**
6. **Print response html with ```console.log(html);```**
7. **Search "The flag is" in the html body**
