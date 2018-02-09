$(document).ready(() => {
    

    /* ALLT PÅ DE ANDRA UNDERSIDORNA SKA GÖMMAS HÄR */
    $('.minavanner').hide()
    $('.hittagym').hide()
    


    /* Hitta Hym (hg)  */
    $('#n1').on('click', () => {
        $('#n1').attr('class', 'active');
        $('#n2').attr('class', 'inactive');
        $('#n3').attr('class', 'inactive');
        $('.hittagym').show()
        $('.minavanner').hide()
        $('.minagym').hide()
        $('.mgmain').attr('class', 'hgmain');
        $('.mvmain').attr('class', 'hgmain');
    });

    /* Mina Gym (mg) */

    $('#n2').on('click', () => {
        $('#n2').attr('class', 'active');
        $('#n1').attr('class', 'inactive');
        $('#n3').attr('class', 'inactive');
        $('.minagym').show();
        $('.minavanner').hide()
        $('.hittagym').hide()
        $('.hgmain').attr('class', 'mgmain');
        $('.mvmain').attr('class', 'mgmain');
    });

    /* Mina Vänner (mv) */

    $('#n3').on('click', () => {
        $('#n3').attr('class', 'active');
        $('#n2').attr('class', 'inactive');
        $('#n1').attr('class', 'inactive');
        $('.minagym').hide();
        $('.minavanner').show()
        $('.mgmain').attr('class', 'mvmain');
        $('.hgmain').attr('class', 'mvmain');
        $('.hittagym').hide()
    });


});