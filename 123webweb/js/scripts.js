$(document).ready(() => {
    
    
    /* Förstasidan */
    var latestMain = '.mgmain'
    var latestSaker = '.minagym'

    /* ALLT PÅ DE ANDRA UNDERSIDORNA SKA GÖMMAS HÄR FÖRST*/
    $('.minavanner, .hittagym, .gym1, .gym2').hide()


    /* Hitta Hym (hg)  */
    $('#n1').on('click', () => {
        $('#n1').attr('class', 'active');
        $('#n2, #n3').attr('class', 'inactive');
        
        $(latestSaker).hide();
        $('.hittagym').show();  
        $(latestMain).attr('class', 'hgmain');
        latestSaker = '.hittagym'
        latestMain = '.hgmain' 
    });

    /* Mina Gym (mg) */

    $('#n2').on('click', () => {
        $('#n2').attr('class', 'active');
        $('#n1, #n3').attr('class', 'inactive');
        
        $(latestSaker).hide()
        $('.minagym').show();
        $(latestMain).attr('class', 'mgmain');
        latestSaker = '.minagym'
        latestMain = '.mgmain' 
    });

    /* Mina Vänner (mv) */

    $('#n3').on('click', () => {
        $('#n3').attr('class', 'active');
        $('#n1, #n2').attr('class', 'inactive');
        $(latestSaker).hide();
        $('.minavanner').show();
        $(latestMain).attr('class', 'mvmain');
        latestSaker = '.minavanner'
        latestMain = '.mvmain' 
    });


    /* Gym 1 */

    $('#merinfogym1, #a1d1').on('click' , () => {
        $(latestSaker).hide();
        $('.gym1').show();
        $(latestMain).attr('class', 'g1main');
        latestSaker = '.gym1'
        latestMain = '.g1main' 
    });

    /* Gym 2 */

    $('#merinfogym2, #a2d1').on('click' , () => {
        $(latestSaker).hide();
        $('.gym2').show();
        $(latestMain).attr('class', 'g2main');
        latestSaker = '.gym2'
        latestMain = '.g2main' 
    });

    /* Options2 slide down meny   */

    $('#options2menu').hide()
    
    $('#options2').on('click', () => {
        $('#options2menu').slideToggle(100)

    });

    /* Gömma desktopsaker */

   /* if ($(window).width() >= 600) {
        $('.desktop').hide();

    }
*/


});