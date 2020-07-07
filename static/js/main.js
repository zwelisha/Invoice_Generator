
console.log("The document is ready");
   
$('#sendDataBtn').click(function() {
    console.log("API button clicked");
    console.log("API call button clicked");
    var apiUrl = "/api/send_email";
    console.log(apiUrl);
    var invoiceData = {
        "toFirstName": "Adriano",
        "toLastName": "Iorio",
        "companyName": "Turati",
        "companyAddress": "123 Goku St",
        "sentDate": "27-11-2020",
        "toEmail": "zwelisha@turati.co.za",
        "fromFirstName": "Tshepo",
        "fromLastName": "Mohlatlole",
        "fromEmail": "zwescientist@gmail.com",
        "password": "testPass123",
        "bankName": "Standard Bank",
        "accNumber": 1234557890,
        "reference": "Turati",
        "dailyRate": 175,
        "quantity": 10,
        "description": "Turati Internship",
        "startedOn": "10-06-2020",
        "completedOn": "20-06-2020"
    };

    console.log(invoiceData);
    $.ajax({
        type: "POST",
        url: apiUrl,
        data: JSON.stringify(invoiceData),
        dataType: 'json'
    }).done(function(data){
        console.log(data);
    });
});


