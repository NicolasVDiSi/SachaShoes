//cambiar vista del catalogo
function mobile() {
    w_w = window.innerWidth;
  if (w_w < 510) {
        document.getElementById("cardProducto").classList.replace('ui-search-layout--stack', 'ui-search-layout--grid');
        document.getElementById("active").style.display = "none";
        document.getElementById("dactive").style.display = "none";
    }else if (w_w > 510) {
        document.getElementById("cardProducto").classList.replace('ui-search-layout--grid', 'ui-search-layout--stack');
        document.getElementById("dactive").style.display = "flex";
        document.getElementById("active").style.display = "flex";
    }
     
}
 
function mostrarGrid() {
    document.getElementById("cardProducto").classList.replace('ui-search-layout--stack', 'ui-search-layout--grid');
}

function mostrarFilas() {
    document.getElementById("cardProducto").classList.replace('ui-search-layout--grid', 'ui-search-layout--stack');
}

//------
