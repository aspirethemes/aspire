$(document).ready(function() {

  'use strict';

  // =====================
  // Instagram Feed
  // Get your userId and accessToken from the following URLs, then replace the new values with the
  // the current ones.
  // userId: https://smashballoon.com/instagram-feed/find-instagram-user-id/
  // accessToken: http://instagram.pixelunion.net/
  // =====================

  var instagramFeed = new Instafeed({
    get: 'user',
    limit: 9,
    resolution: 'thumbnail',
    userId: '441902919',
    accessToken: '441902919.1677ed0.b52ff944738c48e1b31ef92eb1c16377',
    template:
      '<div class="c-widget-instagram__item"><a href="{{link}}" aria-label="{{caption}}" target="_blank"><img src="{{image}}"></a></div>'
  });

  if ($('#instafeed').length) {
    instagramFeed.run();
  }
});