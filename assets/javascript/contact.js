$(document).ready(function () {
    $("#submitContact").on("click", function (e) {
        e.preventDefault();

        var name = $("#formInputName").val();
        var email = $("#formInputEmail").val();
        var message = $("#formInputMessage").val();

        var FORM_URL = "https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLScRgYimYKfrEpWpO34P0hSBFjVUzkF1z2D-lArbH_F16LVtbQ/formResponse";

        // var formData = new formData();
        // formData.append('entry.147109363', name)
        // formData.append('entry.1088896327', email)
        // formData.append('entry.52438457', message)

        var formData = {
            'entry.147109363': name,
            'entry.1088896327': email,
            'entry.52438457': message
        };


        console.log(formData)
        // do form validation before sending values
       $.ajax({
           headers: {"Content-Type": "application/x-www-form-urlencoded"},
           url: FORM_URL,
           data: formData,
           type: "POST"
       }).then(function(res){
           console.log(res)
           // create a modal that shows and says thank you
       }).catch(function(err){
           console.log(err)
           // show modal with error and say try again
       })
    })


});