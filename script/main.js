(function() {

var theImages = document.querySelectorAll('.image-holder'),
    theHeading = document.querySelector('.heading'),
    theSubhead = document.querySelector('.main-copy h2'),
    theSeasonText = document.querySelector('.main-copy p'),
    appliedClass;

    //i want to change all the content on the page

    function changeElements() {
      //debugger; //this is a special term that stops code execution - HELLA IMPORTANTTTTTT
      let subImages = document.querySelector('.subImagesContainer');
      let objectIndex = dynamicContent[this.id];

      // remove duplicate images
      while (subImages.firstChild) {
        subImages.removeChild(subImages.firstChild);
      }

      //add images to the bottom of the page
      objectIndex.images.forEach(function(image, index) {
        //create an image element
        let newSubImg = document.createElement('img');
        //add a css class to it
        newSubImg.classList.add('thumb');
        //set the src
        newSubImg.src = "images/" + objectIndex.images[index];

        newSubImg.dataset.index = index; //custom data attribute

        //add an event handler to trigger a lightbox
        newSubImg.addEventListener('click', popLightBox, false);


        //add it to the page
        subImages.appendChild(newSubImg);
      })

      //remove the colours we applied on the last click
      theSubhead.classList.remove(appliedClass);
      theHeading.classList.remove(appliedClass);

      //change the text using the values of the properties in the object
      theSubhead.firstChild.nodeValue = objectIndex.headline;
      theSeasonText.firstChild.nodeValue = objectIndex.text;

      //add the color that corresponds to the seasonw e clicked on
      theSubhead.classList.add(this.id);
      theHeading.classList.add(this.id);

      appliedClass = this.id;

    }

    theImages.forEach(function(image, index){
      //add event handler to each image-holder
      image.addEventListener('click', changeElements, false);
    });

    // trigger the lightbox
    function popLightBox() {
      //debugger;
      //trigger the lightbox overlay so that we can see it!
      let lightbox = document.querySelector('.lightbox');

      lightbox.style.display = 'block';

    }
    //document.querySelector('#spring').click(); //making spring fire teh first thing when you come to the page, not the best way

    changeElements.call(document.querySelector('#spring'));
}) ();
