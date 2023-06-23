
// Get the progress bar element
var progressBar = document.getElementById("myBar");

// When the user scrolls the page, execute scrollFunction
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    // Calculate the scroll position
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    // Calculate the total height of the page
    var totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Calculate the percentage of the page scrolled
    var percentageScrolled = (scrollPosition / totalHeight) * 100;

    // Set the width of the progress bar to the percentage scrolled
    progressBar.style.width = percentageScrolled + "%";
}

// for fixed progress bar

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('myBar').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('myBar').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
     } );
}); 


// for fixed navbar

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
}); 


