$(document).ready(() => {
    

    /* ALLT PÅ DE ANDRA UNDERSIDORNA SKA GÖMMAS HÄR */
    $('.minavanner').hide()
    
    $('#n1').on('click', () => {
        $('#n1').attr('class', 'active');
        $('#n2').attr('class', 'inactive');
        $('#n3').attr('class', 'inactive');
        
    });

    $('#n2').on('click', () => {
        $('#n2').attr('class', 'active');
        $('#n1').attr('class', 'inactive');
        $('#n3').attr('class', 'inactive');
        $('.minagym').show();
        $('.minavanner').hide()
        $('.mvmain').attr('class', 'main');
    });

    $('#n3').on('click', () => {
        $('#n3').attr('class', 'active');
        $('#n2').attr('class', 'inactive');
        $('#n1').attr('class', 'inactive');
        $('.minagym').hide();
        $('.minavanner').show()
        $('.main').attr('class', 'mvmain');
        
    });


    /* $('.active').on('click', () => {
        $('.inactive').toggle();
      });
      */
});