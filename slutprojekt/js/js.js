$(document).ready(() => {


    $('.popdown, aside, .search_results, #display_cart, #nyheter_ul, #kategorier_ul, #butiker_ul').hide()


    $('#butiker').on('click', () => {

        $('#kt_pd, #nh_pd, #display_cart').hide();
        $('#bt_pd').slideToggle(150);

    });


    $('.hamburger').on('click', () => {
        $('#display_cart').hide()
        $('aside').slideToggle(300);
        $('.hamburger').toggleClass("is-active");

    });

    $('#kategorier').on('click', () => {
        $('#bt_pd, #nh_pd, #display_cart').hide();
        $('#kt_pd').slideToggle(150);

    });

    $('#nyheter').on('click', () => {
        $('#kt_pd, #bt_pd, #display_cart').hide();
        $('#nh_pd').slideToggle(150);

    });

    $('#cart_icon').on('click', () => {
        $('.popdown, aside').hide()
        $('#display_cart').slideToggle(150);

    });

    // Aside-funktioner för mobil

    $('#nyheter_knapp').on('click', () => {
        $('#nyheter_ul').slideToggle(150)
    });

    $('#kategorier_knapp').on('click', () => {
        $('#kategorier_ul').slideToggle(150)
    });

    $('#butiker_knapp').on('click', () => {
        $('#butiker_ul').slideToggle(150)
    });



});

function SearchFunction() {
    var input, filter, ul, li, h3, i;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    ul = document.getElementById("productsUl");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        h3 = li[i].getElementsByTagName("h3")[0];
        if (h3.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

}

function initMap() {
    var uluru = { lat: 57.7, lng: 11.9 };

    var map = new google.maps.Map(document.getElementById('map1'), {
        zoom: 10,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: 'Gym 1'
    });
    marker.setMap(map);
}

