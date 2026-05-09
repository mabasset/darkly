# http://172.28.128.136/?page=signin

1. We created a js script that fetches a short list of most common passwords and bruteforces the login page
   - run: docker run --rm -i node:26.1.0-slim node -e "$(cat bruteforce/Resources/script.js)"
