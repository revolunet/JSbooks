test( 'transition duration', function() {

  'use strict';

  var elem = document.querySelector('#transition-duration');
  var layout = new window.CellsByRow( elem, {
    transitionDuration: '0s'
  });

  layout.options.columnWidth = 75;
  layout.options.rowHeight = 120;
  layout.once( 'layoutComplete', function() {
    ok( true, 'layoutComplete triggered when transition duration = 0' );
    start();
  });

  stop();
  layout.layout();

});
