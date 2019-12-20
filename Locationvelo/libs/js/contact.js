$('#boutonEnvoyer').on("click",function () {

    let lastName = $('#inputLastName');
    let firstName = $('#inputFirstName');
    let objet = $('#InputObjet');
    let message = $('#TextareaMsg');

    if (lastName[0].value == ""){
        document.getElementById("msgLastName").innerText="(Veuillez remplir ce champ)";
        $("#inputLastName").toggleClass("border-danger");
    }

    if (firstName[0].value == ""){
        document.getElementById("msgFirstName").innerText="(Veuillez remplir ce champ)";
        $("#inputFirstName").toggleClass("border-danger");
    }

    if (objet[0].value == ""){
        document.getElementById("msgObjet").innerText="(Veuillez remplir ce champ)";
        $("#InputObjet").toggleClass("border-danger");
    }

    if (message[0].value == ""){
        document.getElementById("msgTextarea").innerText="(Veuillez remplir ce champ)";
        $("#TextareaMsg").toggleClass("border-danger");
    }


    if ( verifMail() == false) {
        document.getElementById("msgEmail").innerText="(Veuillez remplir un email correct)";
        $("#InputEmail").toggleClass("border-danger");
    }


    function verifMail(){
        let mail = $('#InputEmail');
        var myRegex = /^[a-z0-9.-]+@[a-z0-9.-]+.[a-z]{2,6}$/;
        if(!myRegex.test(mail)){
            return false;
        } else {
            return true;
        }
    }




});