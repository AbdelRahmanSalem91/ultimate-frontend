$(function(){
    'use strict';
    $('.toggle-sidebar').on('click', function(){
        $('.content-area, .sidebar').toggleClass('no-sidebar');
    })
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

    // Toggle Settings
    $('.toggle-settings').on('click', function(){
        $(this).find('i').toggleClass('fa-spin');
        $(this).parent().toggleClass('hide-settings');
    });

    // Switch Colors Theme
    var themesClasses = [];
    $(".color-options li").each(function(){
        themesClasses.push($(this).data("theme"));
    });
    $(".color-options li").on('click', function(){
        $(this).addClass("active").siblings().removeClass("active");
        $("body").removeClass(themesClasses.join(" "))
        .addClass($(this).data("theme"));
    })
    // Switch Fot Family
    var fontsClasses = [];
    $(".font-option select option").each(function(){
        fontsClasses.push($(this).val());
    });
    $(".font-option select").on('change', function(){
        $(this).addClass("active").siblings().removeClass("active");
        $("body").removeClass(fontsClasses.join(" "))
        .addClass($(this).find("option:selected").val());
    })
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

