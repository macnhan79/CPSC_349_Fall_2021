var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';

var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = "hidden-detail";
var TINY_EFFECT_CLASS = "is-tiny";
var ESC_KEY = 27;

function setDetails(imageUrl, titleText) {
  "use strict";

  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumb) {
  "use strict";
  return thumb.getAttribute("data-image-url");
  // eslint-disable-next-line linebreak-style
}

function titleFromThumb(thumb) {
  "use strict";
  return thumb.getAttribute("data-image-title");
}

function setDetailsFromThumb(thumb) {
  setDetails(imageFromThumb(thumb), titleFromThumb(thumb));
}

function addThumbClickHandler(thumb) {
  "use strict";
  thumb.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    setDetailsFromThumb(thumb);
    //console.log(thumb);
    showDetails();
  });
}

function getThumbnailsArray() {
  "use strict";
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function hideDetails() {
  "use strict";
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
  "use strict";

  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function () {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
}

function addKeyPressHandler() {
  "use strict";
  document.body.addEventListener("keyup", function (event) {
    event.preventDefault();
    console.log(event.keyCode);
    if (event.keyCode === ESC_KEY) {
      hideDetails();
    }
  });
}


function initializeEvents() {
  "use strict";

  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);


  const buttonNext = document.querySelector(THUMBNAIL_NEXT_SELECTOR);

  buttonNext.addEventListener('click', event => {
    console.log("CLick Next");
    var title = document.querySelector(DETAIL_TITLE_SELECTOR).textContent;
    console.log(title);
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);

    for (let i = 0; i < thumbnails.length; i++) {
      console.log(thumbnails[i].getAttribute("data-image-title"));
      if (thumbnails[i].getAttribute("data-image-title") === title) {
        if (i === thumbnails.length - 1) {
          i = 0;
        } else {
          i++;
        }
        thumbnails[i].parentElement.focus();
        setDetailsFromThumb(thumbnails[i]);
        break;
      }

    }

  });


  const buttonPrev = document.querySelector(THUMBNAIL_PREV_SELECTOR);

  buttonPrev.addEventListener('click', event => {
    console.log("CLick Prev");
    var title = document.querySelector(DETAIL_TITLE_SELECTOR).textContent;
    console.log(title);
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);

    for (let i = 0; i < thumbnails.length; i++) {
      console.log(thumbnails[i].getAttribute("data-image-title"));
      if (thumbnails[i].getAttribute("data-image-title") === title) {
        if (i === 0) {
          i = thumbnails.length - 1;
        } else {
          i--;
        }
        thumbnails[i].parentElement.focus();
        setDetailsFromThumb(thumbnails[i]);
        break;
      }

    }

  });




  addKeyPressHandler();
}





var THUMBNAIL_NEXT_SELECTOR = '[class="detail-image-next"]';
var THUMBNAIL_PREV_SELECTOR = '[class="detail-image-previous"]';
initializeEvents();