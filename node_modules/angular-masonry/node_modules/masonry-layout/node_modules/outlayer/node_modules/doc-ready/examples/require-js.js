/*global requirejs: false*/

requirejs.config({
  baseUrl: '../bower_components'
  // OR
  // paths: {
  //   eventie: '../bower_components/eventie'
  // }
});

requirejs( [ '../doc-ready' ], function( docReady ) {

  docReady( function() {
    document.body.innerHTML += '\<p>okay ready now\</p>';
  });

});
