( function() {

'use strict';

var $ = window.jQuery;
var CellsByRow = window.CellsByRow;

test( 'declarative', function() {
  // no data-packery-options
  ( function() {
    var container = document.querySelector('#declarative');
    var cellsLayout = CellsByRow.data( container );
    ok( cellsLayout instanceof CellsByRow, '.data() works, retrieves instance' );
    deepEqual( cellsLayout.options, CellsByRow.defaults, 'options match defaults' );
    ok( cellsLayout._isLayoutInited, 'cellsLayout._isLayoutInited' );
    var itemElem = cellsLayout.items[0].element;
    equal( itemElem.style.left, '0px', 'first item style left set' );
    equal( itemElem.style.top, '0px', 'first item style top set' );
  })();

  // has data-cells-by-row-options, but bad JSON
  ( function() {
    var container = document.querySelector('#declarative-bad-json');
    var cellsLayout = CellsByRow.data( container );
    ok( !cellsLayout, 'bad JSON in data-cells-by-row-options does not init CellsByRow' );
    ok( !container.outlayerGUID, 'no expando property on element' );
  })();

  // has good data-packery-options
  ( function() {
    var container = document.querySelector('#declarative-good-json');
    var cellsLayout = CellsByRow.data( container );
    ok( cellsLayout instanceof CellsByRow, '.data() got CellByRow instance retrieved from element, with good JSON in data-cells-by-row-options' );
    strictEqual( cellsLayout.options.columnWidth, 25, 'columnWidth option was set' );
    strictEqual( cellsLayout.options.rowHeight, 30, 'rowHeight option was set' );
    strictEqual( cellsLayout.options.isResizable, false, 'isResizable option was set' );
    strictEqual( cellsLayout.options.foo, 'bar', 'foo option was set' );
  
    equal( $.data( container, 'cellsByRow' ), cellsLayout, 'jQuery.data( elem, "cellsByRow") returns CellsByRow instance' );
  })();

});

})();
