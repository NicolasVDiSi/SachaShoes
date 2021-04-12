var w_w = window.innerWidth;
var p2 = document.getElementById("cantidad");
$(".ui-pdp-buybox__quantity").click(function () {
    if (window.innerWidth < 766) {
        $("body").css("overflow", "hidden");
        p2.style.height = "100vh";
        p2.classList.add("scale-in-ver-bottom");
        p2.classList.remove("scale-out-ver-bottom");
    } 
});
$(".closeoverlay").click(function () {
    p2.classList.remove("scale-in-ver-bottom");
    p2.classList.add("scale-out-ver-bottom");
    $("body").css("overflow", "scroll");
})
$(".closebtn").click(function () {
    p2.classList.remove("scale-in-ver-bottom");
        p2.classList.add("scale-out-ver-bottom");
    $("body").css("overflow", "scroll");
});

/* Moistrar/Ocultar subcategorias al pasar el mouse*/

function mostrarCategorias(elementId) {

    let display = document.getElementById("popover-menu");
    display.style.removeProperty("display");
    display.style.setProperty("display", "block");

    let submenu = document.getElementsByClassName(elementId);
    submenu[0].style.removeProperty("display");
    submenu[0].style.setProperty("display", "flex");
}

function ocultarCategorias(elementId) {
    let display = document.getElementById("popover-menu");
    display.style.removeProperty("display");
    display.style.setProperty("display", "none");

    let submenu = document.getElementsByClassName(elementId);
    submenu[0].style.removeProperty("display");
    submenu[0].style.setProperty("display", "none");
}

/*menu vertical*/
function mostrarSidebar() {
    let menu = document.getElementsByClassName("menu")[0];
    if (menu.classList.contains("active")) {
        menu.classList.remove(("active"));
    } else {
        menu.classList.add("active");
    }
}
function loadTemplate() {
    if (window.innerWidth < 766) {
        $("#sliderControl").appendTo("#carousel-mb");
        $("#accordion").appendTo("#descripcion-mb");
        $(".row--technical-specifications").appendTo("#info-mb");
    } else {
        $("#carousel-mb").appendTo("slider");
        $("#accordion").appendTo("#descripcion-desk");
        $("#info-mb").appendTo("#infoProducto")
    }
    if (window.innerWidth > 766) {
        $("#sliderControl").appendTo("#sliderReplace");
        $("#accordion").appendTo("#descripcion-desk");

        p2.classList.remove("scale-in-ver-bottom");
        p2.classList.add("scale-out-ver-bottom");
        $("body").css("overflow", "scroll");
    }
}
/*Cambios para movil*/
$(document).ready(function () {
    loadTemplate();

    $('.verMas').click(function () {

        var dropdown = $(this).parent().find('.dropdown-menu');

        if (dropdown.hasClass("show"))
            $(dropdown).removeClass("show")
        else
            $(dropdown).addClass("show");

        /*si no contiene la clase open quiere decir que el dropdown esta cerrado entonces remuevo la animacion para que se convierta en +*/
        if (!$(this).hasClass('open')) {
            $(this).addClass('open');
            var barra1 = $(this).parent().find('.barra1');
            var barra2 = $(this).parent().find('.barra2');
            /* Remuevo clases para que se convierta en + */
            barra1.removeClass('animated1');
            barra2.removeClass('animated2');
        }
        else {
            $(this).removeClass('open');
            var barra1 = $(this).parent().find('.barra1');
            var barra2 = $(this).parent().find('.barra2');
            /* Agrego clases para que se convierta en - */
            barra1.addClass('animated1');
            barra2.addClass('animated2');
        }
    });

});
$(window).resize(function () {
    loadTemplate();
    var w_w = window.innerWidth;
});