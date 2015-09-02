test( 'origin', function() {

  'use strict';

  var CellsByRow = window.CellsByRow;
  var supportsTransition = !!window.getStyleProperty('transition');
  // triggering a layout call within a layout callback triggers
  // infinite loop
  function doNext( fn ) {
    // if ( supportsTransition ) {
    //   fn();
    // } else {
      setTimeout( fn );
    // }
  }

  var elem = document.querySelector('#origin');
  var layout = new CellsByRow( elem, {
    itemOptions: {
      transitionDuration: '0.1s'
    }
  });

  function checkItemPosition( itemIndex, x, y ) {
    var itemElem = layout.items[ itemIndex ].element;
    var message = 'item ' + itemIndex + ' ';
    var xProperty = layout.options.isOriginLeft ? 'left' : 'right';
    var yProperty = layout.options.isOriginTop ? 'top' : 'bottom';
    equal( itemElem.style[ xProperty ], x + 'px', message + xProperty + ' = ' + x );
    equal( itemElem.style[ yProperty ], y + 'px', message + yProperty + ' = ' + y );
  }

  // top left
  checkItemPosition( 0,   0,   0 );
  checkItemPosition( 1, 100,   0 );
  checkItemPosition( 2,   0, 100 );

  // top right
  layout.options.isOriginLeft = false;
  layout.once( 'layoutComplete', function() {
    checkItemPosition( 0,   0,   0 );
    checkItemPosition( 1, 100,   0 );
    checkItemPosition( 2,   0, 100 );
    doNext( testBottomRight );
    // start();
  });
  stop();
  layout.layout();

  // bottom right
  function testBottomRight() {
    layout.options.isOriginTop = false;
    layout.once( 'layoutComplete', function() {
      checkItemPosition( 0,   0,   0 );
      checkItemPosition( 1, 100,   0 );
      checkItemPosition( 2,   0, 100 );
      doNext( testBottomLeft );
    });
    layout.layout();
  }

  // bottom right
  function testBottomLeft() {
    layout.options.isOriginLeft = true;
    layout.once( 'layoutComplete', function() {
      checkItemPosition( 0,   0,   0 );
      checkItemPosition( 1, 100,   0 );
      checkItemPosition( 2,   0, 100 );
      start();
    });
    layout.layout();
  }

});
