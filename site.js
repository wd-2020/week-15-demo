document.querySelector('html').className = "js";

/*
  Set up, create, and append the HTML for controlling the slideshow...
*/
var buttons = [
  {
    id: 'prev',
    href: '#prev',
    text: 'Previous'
  },
  {
    id: 'play',
    href: '#play',
    text: 'Play'
  },
  {
    id: 'next',
    href: '#next',
    text: 'Next'
  },
];
var controls = document.createElement('nav');
controls.className = 'controls';
var controls_ul = document.createElement('ul');
var controls_li;
var controls_a;
for (var b of buttons) {
  controls_li = document.createElement('li');
  controls_a = document.createElement('a');
  controls_a.href = b.href;
  controls_a.id = b.id;
  controls_a.innerText = b.text;
  controls_li.appendChild(controls_a);
  controls_ul.appendChild(controls_li);
}
controls.appendChild(controls_ul);
var header = document.querySelector('header');
header.appendChild(controls);

/*
  Create the slideshow object...
*/

var slideshow = new SlideShow('.slides li');
// Uncomment this line to have the slideshow play automatically:
// slideshow.play();

// This references the controls object created above
controls.addEventListener('click', function(event) {
  if (event.target.id === 'prev') {
    event.preventDefault();
    if (slideshow.playing) {
      slideshow.pause();
    }
    slideshow.prevItem();
  }
  if (event.target.id === 'next') {
    event.preventDefault();
    if (slideshow.playing) {
      slideshow.pause();
    }
    slideshow.nextItem();
  }
  if (event.target.id === 'play') {
    event.preventDefault();
    slideshow.nextItem(); // do something right away
    slideshow.play();
    event.target.id = 'pause';
    event.target.innerText = 'Pause';
  }
  else if (event.target.id === 'pause') {
    event.preventDefault();
    slideshow.pause();
    event.target.id = 'play';
    event.target.innerText = 'Play';
  }
});

var slides = document.querySelector('.slides');

slides.addEventListener('click', function(event) {
  if (event.target.tagName === 'IMG') {
    if (slideshow.playing) {
      slideshow.pause();
    } else {
      slideshow.nextItem();
    }
  }
});



function SlideShow(elements_selector) {
  this.elements = document.querySelectorAll(elements_selector);
  this.count = this.elements.length;
  this.current = 0;
  this.playing = false;

  this.nextItem = function() {
    this.elements[this.current].className = "inactive";
    this.current++;
    if (this.current >= this.count) {
      this.current = 0;
    }
    this.elements[this.current].className = "active";
  }
  this.prevItem = function() {
    this.elements[this.current].className = "inactive";
    this.current--;
    if (this.current < 0) {
      this.current = this.count - 1;
    }
    this.elements[this.current].className = "active";
  }
  this.currItem = function() {
    this.elements[this.current].className = "active";
  }

  this.play = function() {
    this.playing = true;
    this.player = setInterval(function(that) {
      that.nextItem();
    }, 5000, this);
  }

  this.pause = function() {
    this.playing = false;
    clearInterval(this.player);
  }

}


// Code example for you to study!
/*
function FancyArray(arr) {
  this.arr = arr;
  this.count = this.arr.length;
  this.current = 0;

  this.countEm = function() {
    return this.count;
  }

  this.nextItem = function() {
    this.current++;
    if (this.current >= this.count) {
      this.current = 0;
    }
    return this.arr[this.current];
  }
  this.prevItem = function() {
    this.current--;
    if (this.current < 0) {
      this.current = this.count - 1;
    }
    return this.arr[this.current];
  }
  this.currItem = function() {
    return this.arr[this.current];
  }
}
*/
