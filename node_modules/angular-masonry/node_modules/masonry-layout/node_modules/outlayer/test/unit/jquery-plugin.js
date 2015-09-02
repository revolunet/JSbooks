( function() {

'use strict';

var $ = window.jQuery;

test( 'jQuery plugin', function() {
  var $elem = $('#jquery');
  ok( $.fn.cellsByRow, '.cellsByRow is in jQuery.fn namespace' );
  equal( typeof $elem.cellsByRow, 'function', '.cellsByRow is a plugin' );
  $elem.cellsByRow();
  var layout = $elem.data('cellsByRow');
  ok( layout, 'CellsByRow instance via .data()' );
  equal( layout, CellsByRow.data( $elem[0] ), 'instance matches the same one via CellsByRow.data()' );

  // destroy and re-init
  $elem.cellsByRow('destroy');
  $elem.cellsByRow();
  notEqual( $elem.data('cellsByRow'), layout, 'new CellsByRow instance after destroy' );

});

})();