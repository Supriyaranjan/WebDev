window.onload = function () {
    
  let images = document.getElementById('getImage');
  images.addEventListener('mouseover', imagefun, false);

  let likeBtn = document.getElementById('LikeBtn');
  likeBtn.addEventListener('click', myFunction, false);

let lnks = document.querySelectorAll('ul');
for(let lnk of lnks ){
lnk.addEventListener('click',lnkClicked, false);

}
}

  function myFunction(evt) {
    let i = evt.target.innerHTML;
    let j = parseInt(i);
    j = j + 1;
    document.getElementById("LikeBtn").innerHTML= j + ' Likes';
  }

  function imagefun(evt) {
    let Image_Id = evt.target;
    if (Image_Id.src.match("sup.jpeg")) {
        Image_Id.src = "mypic.jpeg";
    }
    else {
        Image_Id.src = "sup.jpeg";
    }
}   
    
function lnkClicked(evt) {
  let target = evt.target;
  if(target && target.nodeName == "A"){
  alert('Navigating to '+target.innerHTML);

  }

 
}