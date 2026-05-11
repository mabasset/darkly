# http://172.28.128.136/?page=signin

1. docker run --rm -i node:26.1.0-slim node -e "$(cat bruteforce/Resources/script.js)"
   - This js script fetches a short list of most common passwords and bruteforces the login page
