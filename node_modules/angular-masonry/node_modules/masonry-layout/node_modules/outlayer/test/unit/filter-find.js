( function() {

'use strict';

test( 'filter find item elements', function() {

  ( function() {
    var olayer = new Outlayer( document.querySelector('#children') );
    equal( olayer.items.length, 3, 'no itemSeletor, gets all children' );
  })();

  ( function() {
    var olayer = new Outlayer( document.querySelector('#filtered'), {
      itemSelector: '.item'
    });
    equal( olayer.items.length, 6, 'filtered, itemSelector = .item, not all children' );
  })();

  ( function() {
    var olayer = new Outlayer( document.querySelector('#found'), {
      itemSelector: '.item'
    });
    equal( olayer.items.length, 4, 'found itemSelector = .item, querySelectoring' );
  })();

  ( function() {
    var olayer = new Outlayer( document.querySelector('#filter-found'), {
      itemSelector: '.item'
    });
    equal( olayer.items.length, 5, 'filter found' );
  })();

});

})();
