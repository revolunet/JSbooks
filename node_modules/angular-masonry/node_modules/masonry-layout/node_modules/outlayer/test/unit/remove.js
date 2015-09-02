( function() {

'use strict';

test( 'remove', function() {
  var container = document.querySelector('#remove');
  // packery starts with 4 items
  var olayer = new Outlayer( container, {
    itemSelector: '.item'
  });
  // remove .w2 items
  var w2Elems = container.querySelectorAll('.w2');
  var expectedRemovedCount = olayer.items.length - w2Elems.length;

  olayer.once( 'removeComplete', function( removedItems ) {
    ok( true, 'removeComplete event did fire' );
    equal( removedItems.length, w2Elems.length, 'remove elems length matches 2nd argument length' );
    for ( var i=0, len = removedItems.length; i < len; i++ ) {
      equal( removedItems[i].element, w2Elems[i], 'removedItems element matches' );
    }
    equal( container.children.length, expectedRemovedCount, 'elements removed from DOM' );
    equal( container.querySelectorAll('.w2').length, 0, 'matched elements were removed' );
    setTimeout( removeNoTransition, 20 );
    // start();
  });
  stop();
  olayer.remove( w2Elems );
  equal( olayer.items.length, expectedRemovedCount, 'items removed from Packery instance' );

  // check items are remove with no transition
  function removeNoTransition() {
    // disable transition by setting transition duration to 0
    olayer.options.transitionDuration = 0;
    var h2Elems = container.querySelectorAll('.h2');
    expectedRemovedCount -= h2Elems.length;

    olayer.once( 'removeComplete', function( removedItems ) {
      ok( true, 'no transition, removeComplete event did fire' );
      equal( h2Elems.length, removedItems.length, 'no transition, remove elems length matches argument length' );
      equal( container.children.length, expectedRemovedCount, 'no transition, elements removed from DOM' );
      equal( container.querySelectorAll('.h2').length, 0, 'no transition, matched elements were removed' );
      setTimeout( removeNone, 20 );
      // start();
    });

    olayer.remove( h2Elems );
  }

  function removeNone() {
    var noneItems = container.querySelector('.foo');
    olayer.remove( noneItems );
    ok( true, 'removing no items is cool' );
    start();
  }

});

})();
