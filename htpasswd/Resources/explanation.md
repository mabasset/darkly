# http://172.28.128.136/robots.txt/

1. Read robots.txt file to find the /whatever/ directory
2. Download the htpasswd file contained
   - There's what appears to be a login username:password
3. Do an hashcat --identify on the password to reveal that is md5 encrypted
   - Decrypt with: https://md5decrypt.net/en/
4. Go to http://172.28.128.136/admin to enter the Secured Area
5. Use the credentials on this form to retrieve the flag
