$(document).ready(function() {
    // var validateForm = $("#invoiceData").validate({
    //     rules: {
    //         toFirstName: {
    //             required: true,
    //             minlength: 4,
    //             maxlength: 20
    //         },
    //         toLastName: {
    //             required: true,
    //             minlength: 4,
    //             maxlength: 20
    //         }
    //     },
    //     errorElement: "span",
    //     errorClass: "help-inline",
    // });

    // Binding previous and next event and form submission
    // Binding next button on first step
    $(".open1").click(function() {
        $(".frm").hide("fast");
        $("#step2").show("slow");
    });

    // Binding next button on second step
    $(".open2").click(function() {
        $(".frm").hide("fast");
        $("#step3").show("slow");
    });

     // Binding back button on second step
    $(".back2").click(function() {
        $(".frm").hide("fast");
        $("#step1").show("slow");
    });

    // Binding back button on third step
    $(".back3").click(function() {
        $(".frm").hide("fast");
        $("#step2").show("slow");
    });

    var apiUrl = "http://127.0.0.1:5000/api/send_email";
    var invoiceData = {
        'toFirstName': $('#toFirstName').val(),
        'toLastName': $('#toLastName').val(),
        'companyName': $('#companyName').val(),
        'companyAddress': $('companyAddress').val(),
        'sentDate': $('#sentDate').val(),
        'toEmail': $('#toEmail').val(),
        'fromFirstName': $('#fromFirstName').val(),
        'fromLastName': $('#fromLastName').val(),
        'fromEmail': $('#fromEmail').val(),
        'password': $('#password').val(),
        'bankName': $('#bankName').val(),
        'accNumber': $('#accNumber').val(),
        'reference': $('#reference').val(),
        'dailyRate': $('#dailyRate').val(),
        'quantity': $('#quantity').val(),
        'description': $('#description').val(),
        'startedOn': $('#started').val(),
        'completedOn': $('#completed').val(),
    };

    // invoiceData['total'] = invoiceData.dailyRate * invoiceData.quantity;

    $('form').submit(function(event) {
        // optional
        // used delay form submission for a seccond and show a loader image
        $("#loader").show();
        setTimeout(function(){
            $("#invoiceData").html('<div class="alert alert-success"><strong>Success!</strong> Your data have successfully been sent.</div>');
        }, 1000);
        
        // Process the form
        $.ajax({
            type: "POST",
            url: apiUrl,
            data: invoiceData,
            dataType: 'json',
            encode: true
        }).done(function(data){
            console.log(data);
        });

        event.preventDefault();
    });
});