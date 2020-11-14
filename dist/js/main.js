$(function(){
    'use strict';
    $('.toggle-sidebar').on('click', function(){
        $('.content-area, .sidebar').toggleClass('no-sidebar');
    })
});

// Toggle Submenu
$(".toggle-submenu").on('click', function(){
    $(this).find(".fa-angle-right").toggleClass("down");
    $(this).next(".child-links").slideToggle();
});

// Open / Close Fullscreen
$('.toggle-fullscreen').on('click', function(){
    $(this).toggleClass("full-screen");
    if($(this).hasClass('full-screen')){
        openFullscreen()
    }else{
        closeFullscreen()
    }
});

var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
    }
}

/* Close fullscreen */
function closeFullscreen() {
if (document.exitFullscreen) {
    document.exitFullscreen();
} else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
} else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
}
        }
const myMap = new Map();
const mySet = new Set();