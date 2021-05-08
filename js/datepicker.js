/* ********************************************************************************* */
  // DATEPICKER POUR LA PAGE RESERVATION 
//   le date picker crée une erreur sur la page script.js donc creation d'une page script2.js pour ne pas gener au fonctionnement de la page script.js

  $(function () {
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

});
