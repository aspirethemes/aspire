$(document).ready(function() {

  'use strict';

  // =====================
  // Off Canvas Menu
  // =====================

  $('.js-off-canvas-toggle').click(function(e) {
    e.preventDefault();
    $('.js-off-canvas-content, .js-off-canvas-container').toggleClass('is-active');
  });

  // =====================
  // Homepage Layout
  // =====================

  // Make the second and third posts in homepage be 50% width
  $('.home-template .js-post-card-wrap:nth-of-type(2), .home-template .js-post-card-wrap:nth-of-type(3)')
  .addClass('o-grid__col--2-4-m o-grid__col--2-4-l');

  // =====================
  // Post Card Images Fade
  // =====================

  $('.js-fadein').viewportChecker({
    classToAdd: 'is-inview', // Class to add to the elements when they are visible
    offset: 100,
    removeClassAfterAnimation: true
  });

  // =====================
  // Responsive Videos
  // =====================

  $('.c-content').fitVids({
    'customSelector': ['iframe[src*="ted.com"]']
  });

  // =====================
  // Search
  // =====================

  var search_field = $('.js-search-input'),
      search_results = $('.js-search-result'),
      toggle_search = $('.js-search-toggle'),
      search_result_template = "\
        <div class='c-search-result__item'>\
          <a class='c-search-result__title' href='{{link}}'>{{title}}</a>\
          <span class='c-search-result__date'>{{pubDate}}</span>\
        </div>";

  toggle_search.click(function(e) {
    e.preventDefault();
    $('.js-search').addClass('is-active');

    // If off-canvas is active, just disable it
    $('.js-off-canvas-container').removeClass('is-active');

    setTimeout(function() {
      search_field.focus();
    }, 500);
  });

  $('.c-search, .js-search-close').on('click keyup', function(event) {
    if (event.target == this || event.target.className == 'js-search-close' || event.keyCode == 27) {
      $('.c-search').removeClass('is-active');
    }
  });

  search_field.ghostHunter({
    results: search_results,
    onKeyUp         : true,
    info_template   : "<h4 class='c-search-result__head'>Number of results found: {{amount}}</h4>",
    result_template : search_result_template,
    zeroResultsInfo : false,
    includepages 	: true,
    before: function() {
      search_results.fadeIn();
    }
  });
});