/* ********************************************************************************* */
  // page avis 
//   Affichage des avis en fonction du choix du select

  $(function () {
    // ici le dom est chargé
  
  let btnValidationA = $(`.btnavis`);
  
  btnValidationA.on('click', validation);

  function validation(event) {
    event.preventDefault();
    let select = $(`.selecttype`).val();


    if(select==`chambresA`)
    {
      $(`.avisgeneral`).css('display', 'none');
      $(`.avissoins`).css('display', 'none');
      $(`.avisrestaurant`).css('display', 'none');
      $(`.avischambres`).css('display', 'block');
    }
    else if(select==`generalA`)
    {
      $(`.avischambres`).css('display', 'none');
      $(`.avissoins`).css('display', 'none');
      $(`.avisrestaurant`).css('display', 'none');
      $(`.avisgeneral`).css('display', 'block');
    }
    else if(select=="restaurantA")
    {
      $(`.avischambres`).css('display', 'none');
      $(`.avissoins`).css('display', 'none');
      $(`.avisgeneral`).css('display', 'none');
      $(`.avisrestaurant`).css('display', 'block');
    }
    else if(select=="soinsA")
    {
      $(`.avischambres`).css('display', 'none');
      $(`.avisrestaurant`).css('display', 'none');
      $(`.avisgeneral`).css('display', 'none');
      $(`.avissoins`).css('display', 'block');
    }
  };


// //  Envoi du formulaire avis

//   let btnEnvoiAvis = $(`.avisSend`);
  

//   btnEnvoiAvis.on('click', validation);

//   function validation(event) {
//     event.preventDefault();
//     $(`.envoiAvis`).css('display', 'none');
//     $(`.affichMessAvis`).css('display', 'block');
//     $(`.affichnomR`).text("Votre avis a bien été envoyé");
//   }
  

});///////////////////////////////////