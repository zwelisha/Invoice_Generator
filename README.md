# Invoice Creator
## Task Description
#### Generate a pdf invoice and email it to the recipient (the owner of the company being invoiced). The details of the recipient to consider are as follows: 
1. Name - e.g Adriano
2. Surname - e.g Iorio
3. Company Name - e.g Turati Software
4. Company Address - e.g Turati Software, 67 The Trails, 127 Linden Street, Sandown
5. Date - the date in which the invoice was sent - e.g 29 June 2020
6. Email - e.g adriano@turati.co.za

        
In addition, consider the details of the invoice sender. 
#### The  details to consider are as follows
1. Name
2. Surname
3. Email

### The body of the email should have
1. Invoice sender name and surname
2. Service description : e.g Internship n to date (for example 30 June 2020), where n is the sart date.
3. The quantity
4. The daily rate 
5. The amount for the line item
6. Total at the bottom
7.  ### individual banking details
    1. bank name
    2. bank account number
    3. reference to use



## Requirements
1. flask
2. python3

## Setup
### 1. Clone Repo
```
https://bitbucket.org/turati_software/invoice-creator.git
```

### 2. Start Up Node Server
Goto `server` directory and fire-up server by running the following command:
```
npm install

// then
nodemon index.js
```

### 3. Run React App
Open another tab on your terminal and `cd` into client:
```
npm install

// then 
npm run start
```

## Authors
[Turati Software Developers](https://turati.co.za)