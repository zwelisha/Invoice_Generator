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
3. pip or pip3
4. gunicorn

## Setup
### 1. Clone Repo
```
https://github.com/zwelisha/Invoice_Generator.git
```

### 2. Create a python3 virtual environment in your projects folder
```
python3 -m venv invoice_env
```

### 3. Install requirements on your virtual env (invoice_env)
cd into your projects folder and run run the following commands
```
source invoice_env/bin/activate
```

```
pip install -r requirements.txt
```
OR (if you are using pip3)
```
pip3 install -r requirements.txt
```

### 4. Running the app
1. ```export FLASK_DEBUG=1``` this allows you to make changes without restarting the server
2. ```export FLASK_APP=app.py```
3. ```flask run```

## Authors
[Turati Software Developers](https://turati.co.za)