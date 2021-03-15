//cambiar vista del catalogo
function mobile() {
    w_w = window.innerWidth;
    if (w_w < 510) {
        document.getElementById("cardProducto").classList.replace('ui-search-layout--stack', 'ui-search-layout--grid');
        document.getElementById("active").classList.remove("ui-search-view-change__link--active");
        document.getElementById("dactive").classList.add("ui-search-view-change__link--active");
    }else if (w_w > 510) {
        document.getElementById("cardProducto").classList.replace('ui-search-layout--grid', 'ui-search-layout--stack');
        document.getElementById("dactive").classList.remove("ui-search-view-change__link--active");
        document.getElementById("active").classList.add("ui-search-view-change__link--active");
    }
     
}
 
function mostrarGrid() {
    document.getElementById("cardProducto").classList.replace('ui-search-layout--stack', 'ui-search-layout--grid');
}

function mostrarFilas() {
    document.getElementById("cardProducto").classList.replace('ui-search-layout--grid', 'ui-search-layout--stack');
}

//------