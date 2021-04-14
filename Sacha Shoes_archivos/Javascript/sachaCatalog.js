function mostrarGrid() {
    document.getElementById("cardProducto").classList.replace('ui-search-layout--stack', 'ui-search-layout--grid');
    document.getElementById("rows").classList.remove('ui-search-view-change__link--active');
    document.getElementById('grid').classList.add('ui-search-view-change__link--active');

    /* ocultar dropdown color*/
    document.querySelector('.ui-search-result__content-column--right').style.setProperty("display", "none");
}

function mostrarFilas() {
    document.getElementById("cardProducto").classList.replace('ui-search-layout--grid', 'ui-search-layout--stack');
    document.getElementById("rows").classList.add('ui-search-view-change__link--active');
    document.getElementById('grid').classList.remove('ui-search-view-change__link--active');

    /* mostrar dropdown color*/
    document.querySelector('.ui-search-result__content-column--right').style.setProperty("display", "block");

}

function mostrarInputSearch() {
    document.getElementById("search-input").style.setProperty("visibility", "visible");
    document.getElementById("search-input").style.setProperty("opacity", "1");
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
$(".filterbtn").click(function () {
    let x = document.getElementById("filterNav");
    if (x.classList.contains("active")) {
        x.classList.remove("active")
        x.style.height = "100%";
    } else {
        x.classList.add("active");
        x.style.height = "0%";
    }

});

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

function selecionar(e) {
    let active = document.querySelector(".ui-search-variations-picker__variation--selected");
    active.classList.remove('ui-search-variations-picker__variation--selected');
    e.classList.add('ui-search-variations-picker__variation--selected');
}