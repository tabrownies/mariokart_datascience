
// for the progress bar for the page
let progressBarElement = document.getElementById("progressBarImage");
let width = 0;

function move(loc) {
    // ensure that the position remains within the correct percentage
    if (loc >= 100){
        loc = 100
    }
    if (loc <= 0){
        loc = 0
    }
    // transform the percentage so that it doesn't go off the edge
    loc *= 9/10
    // set the element
    progressBarElement.style.marginLeft = loc + "%";            
}
