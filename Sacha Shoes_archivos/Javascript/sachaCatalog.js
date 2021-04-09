function mostrarGrid() {
    document.getElementById("cardProducto").classList.replace('ui-search-layout--stack', 'ui-search-layout--grid');
    document.getElementById("active").classList.remove('ui-search-view-change__link--active');
    document.getElementById('dactive').classList.add('ui-search-view-change__link--active');
}

function mostrarFilas() {
    document.getElementById("cardProducto").classList.replace('ui-search-layout--grid', 'ui-search-layout--stack');
    document.getElementById("active").classList.add('ui-search-view-change__link--active');
    document.getElementById('dactive').classList.remove('ui-search-view-change__link--active');
}

function mostrarInputSearch() {
    document.getElementById("search-input").style.setProperty("visibility", "visible");
    document.getElementById("search-input").style.setProperty("opacity", "1");
}


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
/*Filter menu*/
function openFilter() {
    let x = document.getElementById("filterNav");

    if (x.classList.contains("active")) {
        x.classList.remove("active")
        x.style.width = "100%";
    } else {
        x.classList.add("active");
        x.style.width = "0%";
    }

}
function openFilter2() {
    let x2 = document.getElementById("filterNav2");

    if (x2.classList.contains("active")) {
        x2.classList.remove("active")
        x2.style.width = "100%";
    } else {
        x2.classList.add("active");
        x2.style.width = "0%";
    }
}
$(window).resize(function () {
    let w_w = window.innerWidth;
    let token = document.getElementById("grid");
    let token1 = document.getElementById("rows");
})
/* Cambiar icono del dropdown al hacer click*/
$(document).ready(function () {
    let w_w = window.innerWidth;
    let token = document.getElementById("grid");
    let token1 = document.getElementById("rows");
    if (w_w < 510) {
        document.getElementById("cardProducto").classList.replace('ui-search-layout--stack', 'ui-search-layout--grid');
        document.getElementById("rows").style.display = "none";
        document.getElementById("grid").style.display = "none";
    } else if (w_w > 510) {
        document.getElementById("grid").style.display = "flex";
        document.getElementById("rows").style.display = "flex";
        if (token.classList.contains('ui-search-view-change__link--active')) {
            document.getElementById('cardProducto').classList.replace('ui-search-layout--stack', 'ui-search-layout--grid');
        }
        if (token1.classList.contains('ui-search-view-change__link--active')) {
            document.getElementById('cardProducto').classList.replace('ui-search-layout--grid', 'ui-search-layout--stack');
        }

    }
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