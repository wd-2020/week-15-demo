document.querySelector('html').className = "js";

var slideshow = new SlideShow('.slides li');
slideshow.play();

var slides = document.querySelector('.slides');

slides.addEventListener('click', function(event) {
  if (event.target.tagName === 'IMG') {
    slideshow.nextItem();
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
