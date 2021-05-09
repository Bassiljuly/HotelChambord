
$(function () {
  // ici le dom est chargé


   
  /* ********************************************************************************* */
  /* SPA */
  // Effets sur les images de la page spa
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  

  /* ********************************************************************************* */
  // Panier
  // declaration des variables
  let articlepanier = $(`.nbnuit`);
  let plus = $(`.more`);
  let moins = $(`.less`);
  let i = 1;
  let prixtotal = 1700;

  // introduit le nombre de nuits 
  // incrementer le nombre de nuits et le prix en fonction
  $(`.nbnuit`).text(` ` + i + ` `);
  $(`.afficheprix`).text(` ` + prixtotal + ` `);


  $('.more').click(function () {
    i++;
    prixtotal = prixtotal + prixtotal;
    $(`.nbnuit`).text(` ` + i + ` `);
    $(`.afficheprix`).text(` ` + prixtotal + ` `);
  });

  $(`.less`).click(function () {
    i--;
    $(`.nbnuit`).text(` ` + i + ` `);

    prixtotal = prixtotal - 1700;
    $(`.afficheprix`).text(` ` + prixtotal + ` `);
  });

 

      /* ********************************************************************************* */
  // partage reseau : apparition des reseaux sociaux ou partgaer au click
 
  
   
$(`.share`).on(`click`, function() {
  $(`.reseaux`).toggleClass(`block`);
})

    
      // //  meme action pour le tactile sur tablette et mobile
      // $(`.share`).on('touchstart touchend', function () {
      //   $(`.reseaux`).toggleClass('block');
      // });

    
  
  //************************************************************************************** */
  // empecher le rechargement de la page lors de l'envoi du formulaire
  //formulaire reservation
  $(`.resabtn`).click(function (event) {

    event.preventDefault();
  });

  //formulaire du panier
  $(`.btnpanier`).click(function (event) {

    event.preventDefault();
  });

  //formulaire contact
  $(`.btnFormContact`).click(function (event) {

    event.preventDefault();
  });

  //formulaire recrutement
  $(`.btnrecrut`).click(function (event) {

    event.preventDefault();
  });

});///////////////////////////////////