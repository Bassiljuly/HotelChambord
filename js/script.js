
$(function(){
  // ici le dom est chargé


/* ********************************************************************************* */
/* SPA */
// Effets sur les images de la page spa
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );

/* ********************************************************************************* */
// DATEPICKER POUR LA PAGE RESERVATION 
    
  $("#dt1").datepicker({
      dateFormat: "dd-M-yy",
      minDate: 0,
      onSelect: function (date) {
          var date2 = $('#dt1').datepicker('getDate');
          date2.setDate(date2.getDate() + 1);
          $('#dt2').datepicker('setDate', date2);
          //sets minDate to dt1 date + 1
          $('#dt2').datepicker('option', 'minDate', date2);
      }
  });
  $('#dt2').datepicker({
      dateFormat: "dd-M-yy",
      onClose: function () {
          var dt1 = $('#dt1').datepicker('getDate');
          console.log(dt1);
          var dt2 = $('#dt2').datepicker('getDate');
          if (dt2 <= dt1) {
              var minDate = $('#dt2').datepicker('option', 'minDate');
              $('#dt2').datepicker('setDate', minDate);
          }
      }
  });



/* ********************************************************************************* */
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

//************************************************************************************** */
// empecher le rechargementd de la page lors de l'envoi du formulaire
//formulaire contact
$(`.resabtn`).click(function(event){
 
  event.preventDefault();
});

//formulaire choix avis
$(`.btnavis`).click(function(event){
 
  event.preventDefault();
});

//formulaire recrutement
$(`.btnrecrut`).click(function(event){
 
  event.preventDefault();
});

//formulaire du panier
$(`.btnpanier`).click(function(event){
 
  event.preventDefault();
});

/* ********************************************************************************* */
// page avis 

let select = $(`.selecttype`);

// if(select.val(`chambres`))
// {
//   $(`.avisgeneral`).addClass(`none`);
//   $(`.avischambre`).addClass(`block`);
// }

// if(select==`chambres`)
// $(`.avisgeneral`).addClass('block');





/* ********************************************************************************* */
// partage reseau : apparition des reseaux sociaux ou partgaer au click

$(`.share`).on(`click`, function() {
  $(`.reseaux`).toggleClass(`block`);
})

});///////////////////////////////////