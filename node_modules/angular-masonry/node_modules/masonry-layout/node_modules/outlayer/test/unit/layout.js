( function() {

'use strict';

var CellsByRow = window.CellsByRow;

test( 'layout', function() {

  var cellsLayout = new CellsByRow( document.querySelector('#layout') );
  var items = cellsLayout.items;
  ok( cellsLayout._isLayoutInited, '_isLayoutInited' );

  cellsLayout.once( 'layoutComplete', function onLayout( layoutItems ) {
    ok( true, 'layoutComplete event did fire' );
    equal( layoutItems.length, items.length, 'event-emitted items matches layout items length' );
    strictEqual( layoutItems[0], items[0], 'event-emitted items has same first item' );
    var len = layoutItems.length - 1;
    strictEqual( layoutItems[ len ], items[ len ], 'event-emitted items has same last item' );
    start();
  });

  stop();
  cellsLayout.options.columnWidth = 60;
  cellsLayout.options.rowHeight = 60;
  cellsLayout.layout();

});

})();
