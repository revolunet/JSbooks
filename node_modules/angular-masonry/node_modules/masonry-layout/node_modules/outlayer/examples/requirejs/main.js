requirejs.config({
  baseUrl: '../../bower_components'
  // OR
  // paths: {
  //   eventie: 'bower_components/eventie',
  //   'doc-ready': 'bower_components/doc-ready',
  //   eventEmitter: 'bower_components/eventEmitter',
  //   'get-style-property': 'bower_components/get-style-property',
  //   'get-size': 'bower_components/get-size',
  //   'matches-selector': 'bower_components/matches-selector'
  // }
});

requirejs( [ '../examples/cells-by-row' ], function( CellsByRow ) {
  new CellsByRow( document.querySelector('#basic') );
});
