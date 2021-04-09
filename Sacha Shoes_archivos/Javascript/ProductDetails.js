let w_w = window.innerWidth;

function cantidad() {
    let p2 = document.getElementById("cantidad");
    if (window.innerWidth < 766) {
        if (p2.classList.contains("active")) {
            p2.classList.remove("active");
            p2.style.height = "100%";
        } else {
            p2.classList.add("active");
            p2.style.height = "0%";
        }
    }
}

$(document).ready(function () {
    if (w_w < 766) {
        $("#sliderControl").appendTo("#carousel-mb");
        $("#accordion").appendTo("#descripcion-mb");
    } else {
        $("#carousel-mb").appendTo("slider");
        $("#accordion").appendTo("#descripcion-desk");
    }

});
$(window).resize(function () {
    let w_w = window.innerWidth;
    if (w_w < 766) {
        $("#sliderControl").appendTo("#carousel-mb");
        $("#accordion").appendTo("#descripcion-mb");
    }
    if (w_w > 766) {
        $("#sliderControl").appendTo("#sliderReplace");
        $("#accordion").appendTo("#descripcion-desk");
    }
});