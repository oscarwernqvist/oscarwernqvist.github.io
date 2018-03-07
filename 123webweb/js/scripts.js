$(document).ready(() => {
    
   /* function allamainforutom(main) {
        var allamain = ['.mgmain', '.g1main', '.mvmain', '.hgmain']
        var index = allamain.indexOf(main)
        if (index > -1) {
            allamain.splice(index, 1);
        }
        allamain.toString();
        return allamain
    }
    
    function allasakerforutom(main) {
        var allasaker = ['.hittagym', '.gym1', '.minavänner', '.hittagym']
        var index = allasaker.indexOf(main)
        if (index > -1) {
            allasaker.splice(index, 1);
        }
        allasaker.toString();
        return allasaker
    }
    */

    /* ALLT PÅ DE ANDRA UNDERSIDORNA SKA GÖMMAS HÄR */
    $('.minavanner').hide()
    $('.hittagym').hide()
    $('.gym1').hide()


    /* Hitta Hym (hg)  */
    $('#n1').on('click', () => {
        $('#n1').attr('class', 'active');
        $('#n2, #n3').attr('class', 'inactive');
        $('.hittagym').show();
      /*  $(allasakerforutom('.hittagym').hide(); */ 
        $('.minagym, .gym1, .minavanner').hide();
      /*  $(allamainforutom('.hgmain')).attr('class', 'hgmain'); */
        $('.mgmain, .g1main, .mvmain').attr('class', 'hgmain');
    });

    /* Mina Gym (mg) */

    $('#n2').on('click', () => {
        $('#n2').attr('class', 'active');
        $('#n1, #n3').attr('class', 'inactive');
        $('.minagym').show();
        $('.minavanner, .gym1, .hittagym').hide()
        $('.hgmain, .mvmain, .g1main').attr('class', 'mgmain');
    });

    /* Mina Vänner (mv) */

    $('#n3').on('click', () => {
        $('#n3').attr('class', 'active');
        $('#n1, #n2').attr('class', 'inactive');
        $('.minavanner').show();
        $('.minagym, .gym1, .hittagym').hide();
        $('.hgmain, .mgmain, .g1main').attr('class', 'mvmain');
       
    });


    /* Gym 1 */

    $('#merinfogym1, #a1d1').on('click' , () => {
        $('.minagym, .minavänner, .hittagym').hide();
        $('.gym1').show();
        $('.mgmain, .hgmain, .mvmain').attr('class', 'g1main');
    });



    /* Options2 slide down meny   */

    $('#options2menu').hide()
    
    $('#options2').on('click', () => {
        $('#options2menu').slideToggle(100)

    });

    /* Gömma desktopsaker */

    if ($(window).width() >= 600) {
        $('.desktop').hide();

    }



});