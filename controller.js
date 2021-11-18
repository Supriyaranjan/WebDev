


 
  function myFunctionLinkedin() {
    alert("Navigating to Supriya's Linkedin Profile");
  }

  function myFunctionMedium() {
    alert("Navigating to Supriya's Medium Profile");
  }

  function myFunctionGithub() {
    alert("Navigating to Supriya's Github");
  }

  function myFunction() {

    var i = document.getElementById("Like").innerHTML;
    var j= parseInt(i);
    j=j+1;
    document.getElementById("Like").innerHTML=j+' Likes';
  
  }

  function imagefun() {
    var Image_Id = document.getElementById('getImage');
    if (Image_Id.src.match("sup.jpeg")) {
        Image_Id.src = "mypic.jpeg";
    }
    else {
        Image_Id.src = "sup.jpeg";
    }
}   
    