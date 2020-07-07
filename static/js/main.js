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
    // $(".open1").click(function() {
        // if(validateForm.form()) {
        //     $(".frm").hide("fast");
        //     $("#step2").show("slow");
    //     // }
    //     $(".frm").hide("fast");
    //     $("#step2").show("slow");
    // });

    // // Binding next button on second step
    // $(".open2").click(function() {
    //     // if(validateForm.form()) {
    //     //     $(".frm").hide("fast");
    //     //     $("#step3").show("slow");
    //     // }
    //     $(".frm").hide("fast");
    //     $("#step3").show("slow");
    // });

    //  // Binding back button on second step
    // $(".back2").click(function() {
    //     $(".frm").hide("fast");
    //     $("#step1").show("slow");
    // });

    // Binding back button on third step
    // $(".back3").click(function() {
    //     $(".frm").hide("fast");
    //     $("#step2").show("slow");
    // });

    // var server = "http://localhost:5000";
    
    // var invoiceData = {
    //     // toFirstName: $('#toFirstName').val(),
    //     // toLastName: $('#toLastName').val(),
    //     // companyName: $('#companyName').val(),
    //     // companyAddress: $('companyAddress').val(),
    //     // sentDate: $('#sentDate').val(),
    //     // toEmail: $('#toEmail').val(),
    //     // fromFirstName: $('#fromFirstName').val(),
    //     // fromLastName: $('#fromLastName').val(),
    //     // fromEmail: $('#fromEmail').val(),
    //     // password: $('#password').val(),
    //     // bankName: $('#bankName').val(),
    //     // accNumber: $('#accNumber').val(),
    //     // reference: $('#reference').val(),
    //     // dailyRate: $('#dailyRate').val(),
    //     // quantity: $('#quantity').val(),
    //     // description: $('#description').val(),
    //     // startedOn: $('#started').val(),
    //     // completedOn: $('#completed').val(),
        
        
        
    // };
    // Test API call
    $('#sendDataBtn').click(function() {
        console.log("API call button clicked");
        var apiUrl = "/api/send_email";
        console.log(apiUrl);
        var invoiceData = {
            toFirstName: 'Adriano',
            toLastName: 'Iorio',
            companyName: 'Turati',
            companyAddress: '123 Goku St',
            sentDate: '27-11-2020',
            toEmail: 'zwelisha@turati.co.za',
            fromFirstName: 'Tshepo',
            fromLastName: 'Mohlatlole',
            fromEmail: 'zwescientist@gmail.com',
            password: 'testPass123',
            bankName: 'Standard Bank',
            accNumber: 1234557890,
            reference: 'Turati',
            dailyRate: 175,
            quantity: 10,
            description: 'Turati Internship',
            startedOn: '10-06-2020',
            completedOn: '20-06-2020'
        };
        
            // optional
            // used delay form submission for a seccond and show a loader image
            // $("#loader").show();
            // setTimeout(function(){
            //     $("#invoiceData").html('<div class="alert alert-success"><strong>Success!</strong> Your data have successfully been sent.</div>');
            // }, 1000);
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

    // invoiceData['total'] = invoiceData.dailyRate * invoiceData.quantity;
    // $(function() {
        
    //     $(".open3").click(function() {
    //         if (validateForm.form()) {
    //             // optional
    //             // used delay form submission for a seccond and show a loader image
    //             $("#loader").show();
    //             setTimeout(function(){
    //                 $("#invoiceData").html('<div class="alert alert-success"><strong>Success!</strong> Your data have successfully been sent.</div>');
    //             }, 1000);
                
    //             $.ajax({
    //                 type: "POST",
    //                 url: apiUrl,
    //                 data: JSON.stringify(invoiceData),
    //                 dataType: 'json'
    //             }).done(function(data){
    //                 console.log(data);
    //             });
    //         }
    //     });
    // });
});