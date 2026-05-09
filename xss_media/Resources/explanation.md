# http://172.28.128.136/?page=media&src=nsa

1. Inspect the nsa_prism.jpg image in the page
   - The image is identified by the src url param
   - Is served through the object html tag, which embeds resource data to be rendered
2. Change the url by removing nsa and adding "data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg=="
   - This makes the html object render inline html
   - base64 is used to encode <script>alert(1)</script> and successfully view the flag
