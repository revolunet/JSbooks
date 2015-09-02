( function() {

'use strict';

test( 'options', function() {
  var container = document.querySelector('#options');
  var olayer = new Outlayer( container, {
    isInitLayout: false,
    transitionDuration: '600ms'
  });

  var item = olayer.items[0];

  ok( !olayer._isLayoutInited, 'olayer is not layout initialized' );
  equal( olayer.options.transitionDuration, '600ms', 'transition option set');

});

})();
