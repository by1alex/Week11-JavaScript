const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ['img1', 'img2', 'img3', 'img4'];

myButton.addEventListener('click', changeImage);

function changeImage(){
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = 'images/' + images[randomIndex] + '.jpg';
}