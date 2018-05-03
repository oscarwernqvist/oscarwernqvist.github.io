$(document).ready(() => {


    $('.popdown, aside').hide()


    $('#butiker').on('click', () => {

        $('#kt_pd, #nh_pd').hide();
        $('#bt_pd').slideToggle(150);

    });


    $('.hamburger').on('click', () => {

        $('aside').slideToggle(300);
        $('.hamburger').toggleClass("is-active");

    });

    $('#kategorier').on('click', () => {
        $('#bt_pd, #nh_pd').hide();
        $('#kt_pd').slideToggle(150);

    });

    $('#nyheter').on('click', () => {
        $('#kt_pd, #bt_pd').hide();
        $('#nh_pd').slideToggle(150);

    });


});