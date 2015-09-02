test( 'percentPosition', function() {
  'use strict';

  var CellsByRow = window.CellsByRow;

  var gridElem = document.querySelector('#percent-position');
  var layout = new CellsByRow( gridElem, {
    percentPosition: true,
    columnWidth: 50,
    rowHeight: 50,
    transitionDuration: 0
  });

  var itemElems = gridElem.querySelectorAll('.item');

  equal( itemElems[0].style.left, '0%', 'first item left 0%' );
  equal( itemElems[1].style.left, '25%', '2nd item left 25%' );
  equal( itemElems[2].style.left, '50%', 'first item left 50%' );
  equal( itemElems[3].style.left, '75%', 'first item left 75%' );

  // set top
  gridElem.style.height = '200px';
  layout.options.isHorizontal = true
  layout.layout();

  equal( itemElems[0].style.top, '0%', 'first item top 0%' );
  equal( itemElems[1].style.top, '25%', 'second item top 25%' );
  equal( itemElems[2].style.top, '50%', 'first item top 50%' );
  equal( itemElems[3].style.top, '75%', 'first item top 75%' );

});
