'use strict';
/**
 PART 1
 1. Create a function 'createImage' which receives imgPath as an input. This func returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading image ('error' event), reject the promise.

 PART 2
 2. Consume the promise using .then and also add an error handler
 
 3. After the image has loaded, pause an execution for 2 seconds using wait fucntion from erlier

4. After the 2 seconds have passed, hide the current image (set dispaly to none), and load a second image (use the image element returned by the createImage promise to hide the current image, You'll need a global variable for this)

5. After the second image has loaded, pause execution for 2 seconds again

6. After 2 seconds have passed, hide the current image

TEST DATA: Images in img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast
 */

const container = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      container.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('../../img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';

    return createImage('../../img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })

  .catch(err => {
    console.error(`${err.message}`);
  });
