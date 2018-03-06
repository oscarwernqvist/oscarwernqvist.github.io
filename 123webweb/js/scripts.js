$(document).ready(() => {
    

    /* ALLT PÅ DE ANDRA UNDERSIDORNA SKA GÖMMAS HÄR */
    $('.minavanner').hide()
    $('.hittagym').hide()
    $('.gym1').hide()


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
        $('.g1main').attr('class', 'hgmain');
        $('.gym1').hide();
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
        $('.g1main').attr('class', 'mgmain');
        $('.gym1').hide();
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
        $('.g1main').attr('class', 'mvmain');
        $('.hittagym').hide()
        $('.gym1').hide();
    });


    /* Gym 1 */

    $('#merinfogym1, #a1d1').on('click' , () => {
        $('.minagym').hide();
        $('.minavänner').hide();   
        $('.hittagym').hide();
        $('.gym1').show();
        $('.mgmain').attr('class', 'g1main');
        $('.hgmain').attr('class', 'g1main');
        $('.mvmain').attr('class', 'g1main');
    });



    /* Options2 slide down meny   */

    $('#options2menu').hide()
    
    $('#options2').on('click', () => {
        $('#options2menu').slideToggle(100)

    });





});