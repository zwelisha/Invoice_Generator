// Validate the form
jQuery().ready(function() {
    var validateForm = jQuery("#invoiceData").validate({
        rules: {
            toFirstName: {
                required: true,
                minlength: 4,
                maxlength: 20
            },
            toLastName: {
                required: true,
                minlength: 4,
                maxlength: 20
            }
        },
        errorElement: "span",
        errorClass: "help-inline",
    });

    // Binding previous and next event and form submission
    // Binding next button on first step
    $(".open1").click(function() {
        if(validateForm.form()) {
            $(".frm").hide("fast");
            $("#step2").show("slow");
        }
    });

    // Binding next button on second step
    $(".open2").click(function() {
        if(validateForm.form()) {
            $(".frm").hide("fast");
            $("#step3").show("slow");
        }
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

    var server = "http://localhost:5000";
    var total = 0;

    $(".open3").click(function() {
        if (validateForm.form()) {
            // optional
            // used delay form submission for a seccond and show a loader image
            $("#loader").show();
            setTimeout(function(){
                $("#basicform").html('<h2>Your Data have been submitted.</h2>');
            }, 1000);
            
            $.ajax({
                type: "POST",
                url: server,
                data: JSON.stringify(),
                dataType: 'json'
            }).done(function(data){
                console.log(data);
            });
        }
    });
});