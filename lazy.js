const imageload = document.querySelectorAll('[data-src]'); //select everyting with the data-src tag

function preloadImage(img) {
  const src = img.getAttribute('data-src');
  if (!src) {
    return;
  }

  img.src = src;
}

function unloadImage(img) {
  const datasrc = img.getAttribute('src'); //get attribute from img
  if (!datasrc) {
    // if there is no src attribute go back
    return;
  } else {
    // if there is a src attribute then...
    img.removeAttribute('src'); //remove attricute src from imgage (so data-src is only remaining)
  }
}

const imgOptions = {
  root: null, //nul = equal to the viewport in this case
  threshold: 0, //how much is ON the page. 0 = as soon as it enters viewport, a little piece. 1 = 100% of the image on thepage.
  // rootMargin:"-200px -200px -200px -200px" // adss margin towards viewport
    rootMargin: '1000px',
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      // if element is not intersecting then...
      unloadImage(entry.target); //fire function unload
      // console.log(entry.target);
    } else {
      //if element IS intersecting then...
      preloadImage(entry.target); // fire function preload
      // console.log(entry.target);
    }
  });
}, imgOptions);

imageload.forEach((image) => {
  // for each image fire the intersection obserber and observe image
  imgObserver.observe(image);
});
