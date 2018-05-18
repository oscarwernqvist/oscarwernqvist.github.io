$(document).ready(() => {


    $('.popdown, aside, .search_results, #display_cart').hide()


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
