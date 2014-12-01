/* jshint browser:true */
/* global Zepto */

;(function (window, $, undefined) {
    var IMAGE_PATH_PREFIX = '/images/background';
    var backgroundImages = [
        'newyork.jpg',
        'sf.jpg'
    ];

    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function getBackgroundURL() {
        return IMAGE_PATH_PREFIX + '/' + backgroundImages[getRandomInt(0, backgroundImages.length)];
    }

    $('.splash-container').css({
        'background-image': 'url(' + getBackgroundURL() + ')'
    });
})(window, Zepto);
