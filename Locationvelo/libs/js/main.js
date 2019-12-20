//Modale connexion

$('#boutonModal1').on("click",function (){

    let motdepasse = $('#InputPassword1');

    if (motdepasse[0].value == ""){
        document.getElementById("msgMdp").innerText="(Mot de passe erroné)";
        $("#InputPassword1").toggleClass("border-danger");
    }

    if ( verifMail() == false) {
        document.getElementById("msgEmail2").innerText="(Veuillez remplir un email correct)";
        $("#InputEmail2").toggleClass("border-danger");
    }


    function verifMail(){
        let mail = $('#InputEmail2');
        var myRegex = /^[a-z0-9.-]+@[a-z0-9.-]+.[a-z]{2,6}$/;
        if(!myRegex.test(mail)){
            return false;
        } else {
            return true;
        }
    }
});



//Modale inscription

$('#boutonModal2').on("click",function (){

    let motdepasse = $('#exampleInputPassword2');
    let confirmmotdepasse = $('#exampleInputPassword3');
    let nom = $("#exampleInputtext2");
    let prenom = $("#exampleInputtext3");
    let adresse = $("#exampleInputadresse");
    let ville = $("#exampleInputVille");


    if (motdepasse[0].value != confirmmotdepasse[0].value){
        document.getElementById("msgErrorMdp").innerText="Mot de passe incorrect";
        $("#exampleInputPassword2").toggleClass("border-danger");
        $("#exampleInputPassword3").toggleClass("border-danger");
    }

    if (nom[0].value == ""){
        document.getElementById("msgName").innerText="(Veuillez remplir ce champs)";
        $("#exampleInputtext2").toggleClass("border-danger");
    }

    if (prenom[0].value == ""){
        document.getElementById("msgnFirstame").innerText="(Veuillez remplir ce champs)";
        $("#exampleInputtext3").toggleClass("border-danger");
    }

    if ( verifMail() == false) {
        document.getElementById("msgnMailInscription").innerText="(Veuillez remplir un email correct)";
        $("#exampleInputEmail2").toggleClass("border-danger");
    }

    if (adresse[0].value == ""){
        document.getElementById("msgnAdresse").innerText="(Veuillez remplir ce champs)";
        $("#exampleInputadresse").toggleClass("border-danger");
    }

    if (ville[0].value == ""){
        document.getElementById("msgnVille").innerText="(Veuillez remplir ce champs)";
        $("#exampleInputVille").toggleClass("border-danger");
    }


    function verifMail(){
        let mail = $('#exampleInputEmail2');
        var myRegex = /^[a-z0-9.-]+@[a-z0-9.-]+.[a-z]{2,6}$/;
        if(!myRegex.test(mail)){
            return false;
        } else {
            return true;
        }
    }

    function gBox(nbCheck) {
        if($("#exampleCheck2").checked == true) {
            $("#formulaire_inscription").submit();
        }else {
            $("#msg_generale").html("Veuillez cocher les conditions générales");
            $("#exampleCheck2").toggleClass("border-danger");
        }

        if($("#exampleCheck3").checked == true) {
            $("#formulaire_inscription").submit();
        }else {
            $("#msg_utilisation").html("Veuillez cocher les conditions générales");
            $("#exampleCheck3").toggleClass("border-danger");
        }

    }



});