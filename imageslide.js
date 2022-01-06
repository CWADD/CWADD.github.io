
var slide_img = document.querySelector('.slide-img');
var images = ['imgslide1.jpg', 'imgslide2.jpeg', 'imgslide3.jpeg'];
var i= 0;

function next(){
    if (i >= images.length-1) i=-1;
    i++;
    return selectImg();
}

function prev(){
    if(i <= 0) i= images.length;
    i--;
    return selectImg();
}
function selectImg(){
    return slide_img.setAttribute('src', 'images/' + images[i]);
}