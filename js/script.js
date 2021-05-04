
$(function(){
  // ici le dom est chargé



/* SPA */
// Effets sur les images de la page spa
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );


// JqueryUI datepicker

$( function() {
  $( "#datepicker" ).datepicker();
} );



// Panier


// declaration des variables
let articlepanier = $(`.nbnuit`);
let plus = $(`.more`);
let moins = $(`.less`);
let i= 1;
let prixtotal = 1700;


// introduit le nombre de nuits 
// incrementer le nombre de nuits et le prix en fonction
$(`.nbnuit`).text(` `+ i +` `);
$(`.afficheprix`).text(` `+ prixtotal +` `);


$('.more').click(function(){
    i ++ ;
    prixtotal = prixtotal + prixtotal;
    $(`.nbnuit`).text(` `+ i + ` `);
    $(`.afficheprix`).text(` `+ prixtotal +` `);
});

$(`.less`).click(function(){
    i --;
    $(`.nbnuit`).text(` `+ i + ` `);

    prixtotal = prixtotal - 1700;
    $(`.afficheprix`).text(` `+ prixtotal +` `);
  });


// page avis 

let select = $(`.selecttype`);

// if(select.val(`chambres`))
// {
//   $(`.avisgeneral`).addClass(`none`);
//   $(`.avischambre`).addClass(`block`);
// }

// if(select==`chambres`)
// $(`.avisgeneral`).addClass('block');






// partage reseau : apparition des reseaux sociaux ou partgaer au click


$(`.share`).on(`click`, function() {
  $(`.reseaux`).toggleClass(`block`);
})

});///////////////////////////////////