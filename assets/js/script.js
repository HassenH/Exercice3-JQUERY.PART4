 $(function(){
   $('#send').click(function() {
    var nameValue = $('#name').val();
    console.log(nameValue)
    var firstNameValue = $('#firstName').val();
    console.log(firstNameValue)
    var mailValue = $('#mail').val();
    console.log(mailValue)
    var numberValue = $('#number').val();
    console.log(numberValue)

    var checkFirstname = /([A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+)([- ]{1}[A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+){0,1}/;
    var checkLastname = /([A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+)([- ]{1}[A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+){0,1}/;
    var checkMail = /[a-z]+(.|)?([a-z0-9]+(.|)?)+?[a-z0-9]+@[a-z0-9]+_?[a-z0-9]+.[a-z]+/;
    var checkPhonenumber = /^(0|(00|\+)33)[67][0-9]{8}$/;

    if((nameValue.match(checkFirstname)) && (firstNameValue.match(checkLastname)) && (mailValue.match(checkMail)) && (numberValue.match(checkPhonenumber))) {
    $('#name').css('background-color','green');
    $('#firstName').css('background-color','green');
    $('#mail').css('background-color','green');
    $('#number').css('background-color','green');
    }
    else{
      alert('Veuillez entrer des valeurs valide')
    }
  });
});
