# Hidden file

### Walkthrough

http://VM_IP/robots.txt/

1. Read robots.txt file to find the /.hidden/ directory

    _NOTE:_ The README gives a hint that the flag is written somewhere in another README file

2. Run script.js - This script recursively reads the content of each README in each subdirectory starting from .hidden/

    `docker run --rm -i node:26.1.0-slim node -e "$(cat hidden_file/Resources/script.js)"`

---

### Explanation & Prevention

https://www.baeldung.com/cs/robots-txt-risk-threat
