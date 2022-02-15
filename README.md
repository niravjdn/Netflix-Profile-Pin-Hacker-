# Netflix-Profile-Pin-Hacker-
This is a simple javascript solution to attempt all possible 4 digit passcode from 0 to 9999 and find a correct one. 

## Steps to follow:

1. Open Netflix and login until you see this screen profiles
2. Click on profile you want to hack
3. Open Chrome developer tools
4. Open network tab
5. try to enter any random password and see network tab request
6. copy the blurred field and replace in script.js

[2022-02-15-at-3-20-PM.png](https://postimg.cc/Y4FDyqGp)

7. copy the request parameter guid and authURL and replace in script.js on first few lines
8. Paster script on console and run it by calling bruteForceLogin() function and wait until it cracks profile pin
9. At end, it will show profile pin in last log like Got into account - 1234 and also in local storage




