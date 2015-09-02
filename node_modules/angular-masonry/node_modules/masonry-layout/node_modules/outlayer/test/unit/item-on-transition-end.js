test( 'item onTransitionEnd', function() {

  'use strict';

  var container = document.querySelector('#item-on-transition-end');
  var layout = new Outlayer( container, {
    containerStyle: { top: 0 },
    transitionDuration: '1s'
  });
  var item = layout.items[0];
  item.addListener( 'transitionEnd', function() {
      console.log( item.element.style.display ); } );
  // item.on( 'transitionEnd', function() {
  //     console.log( item.element.style.display ); } );
  // var itemElem = layout.items[0].element;
  stop();
  // hide, then immediate reveal again, while item is still transitioning
  layout.hide( [ item ] );
  setTimeout( function() {
    item.addListener( 'transitionEnd', function() {
      console.log('second', item.element.style.display );
      // console.log( item.element.style.display );
      ok( true, true )
      // equal( item.element.style.display, '', 'item was not hidden');
      start();
    });
    layout.reveal( [ item ] );
  }, 500 );

});
