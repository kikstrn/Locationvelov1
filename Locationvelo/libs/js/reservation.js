 //Initialisation prix
let prix = $("#prix_reservation");
 prix.html("0");
let borne = $("#borne").children("option:selected").text();



let bp;
//Verification date et heure
$('#boutonLouer').on("click",function (){

    let date = $("#date_retrait").val();
    let temps = date.split("-");
    date = temps[2]+"/"+temps[1]+"/"+temps[0];
    let horaire = $("#heure_retrait").val();

    if (date[0].value == ""){
        document.getElementById("msgDate").innerText="(Veuillez renseigner une date correcte)";
        $("#date_retrait").toggleClass("border-danger");
    }

    if (horaire[0].value == ""){
        document.getElementById("msgHeure").innerText="(Veuillez renseigner une heure correcte)";
        $("#heure_retrait").toggleClass("border-danger");
    }

    localStorage.setItem("prix",prix.html());
    localStorage.setItem("retrait", borne + " le " + date + " à " + horaire);
    localStorage.setItem("quantite",qt);
    localStorage.setItem("type",choix);
});


$('.verif').on("change", function () {
    let choix = $("#choix").children("option:selected").text();
    let choice = $("#choix").children("option:selected").val();

    if  (verification_and_affiche_prix() == true) {
        if (choice == "basic"){
            prix.html(calcul_prix_basic());
        }

        if (choice == "elec"){
            prix.html(calcul_prix_elec());
        }



    }
    calcul_prix_basic();
    calcul_prix_elec();
});

//Verification de tous les champs et insertion du prix
function verification_and_affiche_prix(){
    for (let i = 0; i <$('.verif').length; i++) {
        if ($('.verif')[i].value == ""){
            return false;
        }
    }
    return true;
}


 let qt;
 let choix;
function calcul_prix_basic(){
    let base;
    qt = $("#quantite")[0].value;
    choix = $("#choix").children("option:selected").text();
    let duree = $("#duree")[0].value;
    let periode = $("#periode")[0].value;
    let TVA = 1.2;
    console.log(choix);
    console.log(duree);
    console.log(periode);
    console.log(qt);

    base = 5;

    if (periode == "heure" && choix == "basic"){
        return parseFloat((((base*(duree/24))*qt)*TVA).toFixed(2));
    }else if(periode == "jours" && choix == "basic"){
        return parseFloat((((base*(duree))*qt)*TVA).toFixed(2));
    }else {
        return parseFloat(((base*(duree*30))*qt)*TVA).toFixed(2);
    }
}
calcul_prix_basic();
console.log(calcul_prix_basic());


function calcul_prix_elec(){

    let base;
    let qt = $("#quantite")[0].value;
    let choix = $("#choix").children("option:selected").text();
    let duree = $("#duree")[0].value;
    let periode = $("#periode")[0].value;
    let TVA = 1.2;
    base = 8;

    if (periode == "heure" && choix == "elec"){
        return parseFloat((((base*(duree/24))*qt)*TVA).toFixed(2));
    }else if(periode == "jours" && choix == "elec"){
         return parseFloat((((base*(duree))*qt)*TVA).toFixed(2));
    }else {
        return parseFloat(((base*(duree*30))*qt)*TVA).toFixed(2);
    }

 }

