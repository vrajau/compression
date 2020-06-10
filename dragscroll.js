(function($) {
  $.dragScroll = function(options) {
    var settings = $.extend({
      scrollVertical: true,
      scrollHorizontal: true,
      cursor: null
    }, options);

    var clicked = false,
      clickY, clickX;

    var getCursor = function() {
      if (settings.cursor) return settings.cursor;
      if (settings.scrollVertical && settings.scrollHorizontal) return 'move';
      if (settings.scrollVertical) return 'row-resize';
      if (settings.scrollHorizontal) return 'col-resize';
    }

    var updateScrollPos = function(e, el) {
      $('html').css('cursor', getCursor());
      var $el = $(el);
      settings.scrollVertical && $el.scrollTop($el.scrollTop() + (clickY - e.pageY));
      settings.scrollHorizontal && $el.scrollLeft($el.scrollLeft() + (clickX - e.pageX));
      updateMinimap();
    }
      const totalWidth = document.querySelector('.layer-wrapper').scrollWidth;
      const totalHeight = document.querySelector('.layer-wrapper').scrollHeight; 
    
      const updateMinimap = function () {
      const cursorElement = document.querySelector('#minimap__cursor');
      const boundingBox = document.querySelector('.layer-wrapper').getBoundingClientRect();
      const minimapElement = document.querySelector('#minimap');
      const viewportWidth = document.documentElement.clientWidth;
      const viewportHeight = document.documentElement.clientHeight;
      const ratioWidth = minimapElement.offsetWidth / totalWidth;
      const ratioHeight = minimapElement.offsetHeight / totalHeight;

      cursorElement.style.width = `${ratioWidth * viewportWidth - 2}px`;
      cursorElement.style.height = `${ ratioHeight * viewportHeight - 2}px`;
      cursorElement.style.top = `${(-1 * boundingBox.top * ratioHeight)}px`;
      cursorElement.style.left = `${(-1 * boundingBox.left * ratioWidth)}px`;
    };
    // Make sure to update minimap on window resize
    window.onresize = updateMinimap;
    window.onload = updateMinimap;   
    
$('#controlarea').on({
      'mousemove': function(e) {
        clicked && updateScrollPos(e, $(document) );
      },
      'mousedown': function(e) {
        console.log('click')
        clicked = true;
        clickY = e.pageY;
        clickX = e.pageX;
      },
      'mouseup': function() {
        clicked = false;
        $('html').css('cursor', 'auto');
      }
    });
  }

}(jQuery))

$.dragScroll();

