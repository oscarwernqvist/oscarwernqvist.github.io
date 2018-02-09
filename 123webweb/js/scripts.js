$(document).ready(() => {


    
    $('#n1').on('click', () => {
        $('#n1').attr('class', 'active')
        $('#n2').attr('class', 'inactive')
        $('#n3').attr('class', 'inactive')
    });

    $('#n2').on('click', () => {
        $('#n2').attr('class', 'active')
        $('#n1').attr('class', 'inactive')
        $('#n3').attr('class', 'inactive')
    });

    $('#n3').on('click', () => {
        $('#n3').attr('class', 'active')
        $('#n2').attr('class', 'inactive')
        $('#n1').attr('class', 'inactive')
    });


    /* $('.active').on('click', () => {
        $('.inactive').toggle();
      });
      */
});