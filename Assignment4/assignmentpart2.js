const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pictures = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = {'pic.jpg' : 'Closeup Shot of Eye', 'pic2.jpg' : 'Waves', 'pic3.jpg' : 'Blue Flowers', 'pic4.jpg' : 'Ancient Drawing', 'pic5.jpg' : 'Butterfly'};

/* Looping through images */
for (const picture of pictures){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${picture}`);
    newImage.setAttribute('alt', altText[picture]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function(e){
        displayedImage.src = e.target.src;
    });

    newImage.addEventListener('click', function(e){
        displayedImage.alt = e.target.alt;
    });
}



/* Wiring up the Darken/Lighten button */
