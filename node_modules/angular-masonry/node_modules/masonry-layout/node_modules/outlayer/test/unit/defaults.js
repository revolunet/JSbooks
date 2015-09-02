( function() {

'use strict';

test( 'defaults', function() {
  var container = document.querySelector('#defaults');
  var olayer = new Outlayer( container );
  var item = olayer.items[0];
  deepEqual( olayer.options, Outlayer.defaults, 'default options match prototype' );
  equal( typeof olayer.items, 'object', 'items is object' );
  equal( olayer.items.length, 1, 'one item' );
  equal( Outlayer.data( container ), olayer, 'data method returns instance' );
  ok( olayer.isResizeBound, 'isResizeBound' );

  deepEqual( item.options, Outlayer.Item.prototype.options, 'default item options match Outlayer.Item' );

});

})();
