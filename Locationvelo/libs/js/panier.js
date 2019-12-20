let prix_total = $("#prix_total");
prix_total = prix_total.html(localStorage.getItem("prix"));

console.log(localStorage.getItem("prix"));

let sous_total = $("#prix_ht");
let calcul_ht = parseFloat(localStorage.getItem("prix")*0.8).toFixed(2);
sous_total = sous_total.html(calcul_ht);
console.log(sous_total);


let tva = $("#prix_tva");
let calcul_tva = parseFloat((localStorage.getItem("prix")-(localStorage.getItem("prix")*0.8))).toFixed(2);
tva = tva.html(calcul_tva);

$.post("tableau_panier.html").done(function(resp){
    $('#formRecap').html(resp);
    let elt = $('[data-model="panier"]').clone(true);
    $(elt).removeAttr('data-model="panier"');
    $(elt).find('[data-field]').each(function(){
        let name = $(this).attr('data-field');
        $(this).text(localStorage.getItem(name));
    })
    $('[data-display="panier"]').append($(elt));
});