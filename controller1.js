window.onload = function () {
    
    let images = document.getElementById('getImage');
   
     images.addEventListener('mouseover', imageClicked);



}
function imageClicked(event) {
    let target = event.currentTarget;

    if (target.classList.match("sup.jpeg")) {
        target.classList ="mypic.jpeg";
    } else {
        target.classList = ("sup.jpeg");
    }
}

