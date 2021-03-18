//cambiar vista del catalogo
function mobile() {
    let w_w = window.innerWidth;
    let check = 0;
  if (w_w < 510) {
        document.getElementById("cardProducto").classList.replace('ui-search-layout--stack', 'ui-search-layout--grid');
        document.getElementById("active").style.display = "none";
      document.getElementById("dactive").style.display = "none";
      check = 1;
  } else if (w_w > 510) {
      document.getElementById("dactive").style.display = "flex";
      document.getElementById("active").style.display = "flex";
      while (check == 1) {
        document.getElementById("cardProducto").classList.replace('ui-search-layout--grid', 'ui-search-layout--stack');
          check = 0;
      }
    }
     
}
 
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

function mostrarMenuResponsive() {
    let visible = document.getElementById("responsive-menu").style.setProperty("visibility", "visible");
/*
    if (visible === "hidden") {
        menuResponsive.style.removeProperty("visibility");
        menuResponsive.style.setProperty("visibility", "visible");
    } else {
        menuResponsive.style.removeProperty("visibility");
        menuResponsive.style.setProperty("visibility", "hidden");
    }*/
}

function mostrarSubcategorias(elemento) {
    document.getElementById("popover-menu").style.setProperty("display", "block");
    elemento.style.removeProperty("display");
    elemento.style.setProperty("display", "flex");
}

function ocultarSubcategorias(elemento) {
    document.getElementById("popover-menu").style.setProperty("display", "none");
    elemento.style.removeProperty("display");
    elemento.style.setProperty("display", "none");
}