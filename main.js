let imgBox = document.querySelector("div");
let btn = document.querySelector("button");
let IMG = document.querySelector("img");
let n = 1;
function changeImg() {
  if (n === 1) {
    IMG.setAttribute("src", "./images/pexels-belle-co-99483-847393.jpg");
  } else if (n === 2) {
    IMG.setAttribute("src", "./images/pexels-chevanon-1108099.jpg");
  } else if (n === 3) {
    IMG.setAttribute("src", "./images/pexels-george-desipris-792381.jpg");
  } else if (n === 4) {
    IMG.setAttribute("src", "./images/pexels-pixabay-162140.jpg");
  } else if (n === 5) {
    IMG.setAttribute("src", "./images/pexels-pixabay-34231.jpg");
  } else if (n === 6) {
    IMG.setAttribute("src", "./images/pexels-pixabay-39857.jpg");
  } else if (n === 7) {
    IMG.setAttribute("src", "./images/pexels-pixabay-45853.jpg");
  } else if (n === 8) {
    IMG.setAttribute("src", "./images/pexels-pixabay-460775.jpg");
  } else if (n === 9) {
    IMG.setAttribute("src", "./images/pexels-pixabay-47547.jpg");
  } else if (n === 10) {
    IMG.setAttribute("src", "./images/pexels-siva301in-97533.jpg");
  } else {
    if (n === 11) {
      IMG.setAttribute("src", "./images/pexels-belle-co-99483-847393.jpg");
      n = 1;
    }
  }
  n++;
}
btn.addEventListener("click", changeImg);
