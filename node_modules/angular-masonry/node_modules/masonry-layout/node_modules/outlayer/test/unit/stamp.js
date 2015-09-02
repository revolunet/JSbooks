( function() {

'use strict';

test( 'stamp selector string', function() {
  var container = document.querySelector('#stamps1');
  var stampElems = container.querySelectorAll('.stamp');
  var stamp1 = container.querySelector('.stamp1');
  var stamp2 = container.querySelector('.stamp2');

  var layout = new Outlayer( container, {
    stamp: '.stamp'
  });

  equal( layout.stamps.length, stampElems.length, 'lenght matches' );
  equal( layout.stamps[0], stamp1, 'stamp1 matches' );
  equal( layout.stamps[1], stamp2, 'stamp2 matches' );
  ok( !stamp1.style.left, 'stamp 1 has no left style' );
  ok( !stamp1.style.top, 'stamp 1 has no top style' );

  layout.destroy();
});

test( 'stamp with NodeList', function() {
  var container = document.querySelector('#stamps1');
  var stampElems = container.querySelectorAll('.stamp');
  var stamp1 = container.querySelector('.stamp1');
  var stamp2 = container.querySelector('.stamp2');

  var layout = new Outlayer( container, {
    stamp: stampElems
  });

  equal( layout.stamps.length, stampElems.length, 'lenght matches' );
  equal( layout.stamps[0], stamp1, 'stamp1 matches' );
  equal( layout.stamps[1], stamp2, 'stamp2 matches' );

  layout.destroy();
});

test( 'stamp with array', function() {
  var container = document.querySelector('#stamps1');
  var stampElems = container.querySelectorAll('.stamp');
  var stamp1 = container.querySelector('.stamp1');
  var stamp2 = container.querySelector('.stamp2');

  var layout = new Outlayer( container, {
    stamp: [ stamp1, stamp2 ]
  });

  equal( layout.stamps.length, stampElems.length, 'lenght matches' );
  equal( layout.stamps[0], stamp1, 'stamp1 matches' );
  equal( layout.stamps[1], stamp2, 'stamp2 matches' );

  layout.destroy();
});

test( 'stamp and unstamp method', function() {
  var container = document.querySelector('#stamps1');
  var stampElems = container.querySelectorAll('.stamp');
  var stamp1 = container.querySelector('.stamp1');
  var stamp2 = container.querySelector('.stamp2');

  var layout = new Outlayer( container );

  equal( layout.stamps.length, 0, 'start with 0 stamps' );

  layout.stamp( stamp1 );
  equal( layout.stamps.length, 1, 'stamp length = 1' );
  equal( layout.stamps[0], stamp1, 'stamp1 matches' );

  layout.stamp('.stamp2');
  equal( layout.stamps.length, 2, 'stamp length = 2' );
  equal( layout.stamps[0], stamp1, 'stamp1 matches' );
  equal( layout.stamps[1], stamp2, 'stamp2 matches' );

  layout.unstamp('.stamp1');
  equal( layout.stamps.length, 1, 'unstamped, and stamp length = 1' );
  equal( layout.stamps[0], stamp2, 'stamp2 matches' );
});

})();
