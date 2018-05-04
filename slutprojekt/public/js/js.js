$(document).ready(() => {


    $('.popdown, aside, #SearchBar').hide()


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

    $('#search_icon').on('click', () => {
       /* $('#kt_pd, #bt_pd').hide();  */
        $('#SearchBar').slideToggle(150);

    });

});

function SearchFunction() {
    var input, filter, ul, li, h3, i;
    input = document.getElementById('MVsearchBar');
    filter = input.value.toUpperCase();
    ul = document.getElementById("allul");
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
