
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").classList.add("border-bottom");
        document.getElementById("navbar").classList.add("sticky-top");
        //document.getElementById("navbar").classList.add("bg-psy_science");
        //document.getElementById("brand").classList.remove("text-white");
        //document.getElementById("brand").classList.add("text-black");
        //document.querySelectorAll('.px-lg-2').forEach(element => { element.classList.remove("text-white"); });
    } else {
        document.getElementById("navbar").classList.remove("border-bottom");
        document.getElementById("navbar").classList.remove("sticky-top");
        //document.getElementById("navbar").classList.remove("bg-science");
        //document.getElementById("brand").classList.add("text-white");
        //document.getElementById("brand").classList.remove("text-black");
        //document.querySelectorAll('.px-lg-2').forEach(element => { element.classList.add("text-white"); });
    }
}

var d = new Date();
var year = d.getFullYear();
document.getElementById("copy-year").innerHTML = year;

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

window.onload = (event) => {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    });
    toastList.forEach(toast => toast.show());
}

