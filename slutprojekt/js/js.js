$(document).ready(() => {


    $('.popdown').hide()


   $('#butiker').on('click', () => {
    
    $('#kt_pd, #nh_pd').hide();
    $('#bt_pd').slideToggle(100);
    
    });


    $('#kategorier').on('click', () => {
        $('#bt_pd, #nh_pd').hide();
        $('#kt_pd').slideToggle(100);
        
    });

    $('#nyheter').on('click', () => {
        $('#kt_pd, #bt_pd').hide();
        $('#nh_pd').slideToggle(100);
        
    });


});