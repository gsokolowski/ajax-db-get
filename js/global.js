$('input#name-submit').on('click', function () {
   //alert('Grab button clicked');
   /*
   * Button Grub przekarze name tutaj
   * a raczej my sami sobie pociagniemy ta dana z formularza, post sie jeszcze nie odbyl.
   * Post na formularzu sie wogole nie odbedzie bo celem jest przekazanie danych z db bez przeladowywani strony
   * Na tym polega to zadanie i wyslemy to getem a nie postem
   */

    var name = $('input#name').val();
       // alert(name);

    // clear name-data in html from previous search
    $('div#name-data').empty();

    // now get data but not empty data to getName.php file
    if($.trim(name) != '') {
        // get to ajax getName.php a variable name with value name, last parameter is a callback function which gets data returned from getName.php
        //                          name : Greg
        $.get('ajax/getName.php', {name : name}, function (data) {
            //alert(data);
            $('div#name-data').append(data).css('color', 'red');
        })
    }

});
