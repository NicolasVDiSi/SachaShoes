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


function mostrarCategorias() {
    let display = document.getElementById("popover-menu");
    display.style.removeProperty("display");
    display.style.setProperty("display", "block");
}

