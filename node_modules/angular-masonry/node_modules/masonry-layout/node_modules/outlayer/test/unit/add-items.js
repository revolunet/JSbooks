( function() {

'use strict';

var gimmeAnItemElement = window.gimmeAnItemElement;

test( 'addItems', function() {
  var container = document.querySelector('#add-items');
  var olayer = new Outlayer( container, {
    itemSelector: '.item'
  });

  var elem = gimmeAnItemElement();
  var expectedItemCount = olayer.items.length;
  var items = olayer.addItems( elem );

  equal( items.length, 1, 'method return array of 1' );
  equal( olayer.items[2].element, elem, 'item was added, element matches' );
  equal( items[0] instanceof Outlayer.Item, true, 'item is instance of Outlayer.Item' );
  expectedItemCount += 1;
  equal( olayer.items.length, expectedItemCount, 'item added to items' );

  // try it with an array
  var elems = [ gimmeAnItemElement(), gimmeAnItemElement(), document.createElement('div') ];
  items = olayer.addItems( elems );
  equal( items.length, 2, 'method return array of 2' );
  equal( olayer.items[3].element, elems[0], 'item was added, element matches' );
  expectedItemCount += 2;
  equal( olayer.items.length, expectedItemCount, 'two items added to items' );

  // try it with HTMLCollection / NodeList
  var fragment = document.createDocumentFragment();
  fragment.appendChild( gimmeAnItemElement() );
  fragment.appendChild( document.createElement('div') );
  fragment.appendChild( gimmeAnItemElement() );

  var divs = fragment.querySelectorAll('div');
  items = olayer.addItems( divs );
  equal( items.length, 2, 'method return array of 2' );
  equal( olayer.items[5].element, divs[0], 'item was added, element matches' );
  expectedItemCount += 2;
  equal( olayer.items.length, expectedItemCount, 'two items added to items' );

});

})();
