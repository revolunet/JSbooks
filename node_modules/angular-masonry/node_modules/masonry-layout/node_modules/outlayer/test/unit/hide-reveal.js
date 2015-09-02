test( 'hide/reveal', function() {

  'use strict';

  var CellsByRow = window.CellsByRow;
  var gridElem = document.querySelector('#hide-reveal');

  var layout = new CellsByRow( gridElem, {
    columnWidth: 60,
    rowHeight: 60,
    transitionDuration: '0.2s'
  });

  var hideElems = gridElem.querySelectorAll('.hideable');
  var hideItems = layout.getItems( hideElems );
  var lastIndex = hideItems.length - 1;
  var firstItemElem = hideItems[0].element;
  var lastItemElem = hideItems[ lastIndex ].element;

  layout.once( 'hideComplete', function( hideCompleteItems ) {
    ok( true, 'hideComplete event did fire' );
    equal( hideCompleteItems.length, hideItems.length, 'event-emitted items matches layout items length' );
    strictEqual( hideCompleteItems[0], hideItems[0], 'event-emitted items has same first item' );
    strictEqual( hideCompleteItems[ lastIndex ], hideItems[ lastIndex ], 'event-emitted items has same last item' );
    equal( firstItemElem.style.display, 'none', 'first item hidden' );
    equal( lastItemElem.style.display, 'none', 'last item hidden' );
    equal( firstItemElem.style.opacity, '', 'first item opacity not set' );
    equal( lastItemElem.style.opacity, '', 'last item opacity not set' );
    setTimeout( nextReveal );
    // start();
  });

  stop();

  layout.hide( hideItems );

  // --------------------------  -------------------------- //

  function nextReveal() {
    layout.once( 'revealComplete', function( revealCompleteItems ) {
      ok( true, 'revealComplete event did fire' );
      equal( revealCompleteItems.length, hideItems.length, 'event-emitted items matches layout items length' );
      strictEqual( revealCompleteItems[0], hideItems[0], 'event-emitted items has same first item' );
      strictEqual( revealCompleteItems[ lastIndex ], hideItems[ lastIndex ], 'event-emitted items has same last item' );
      equal( firstItemElem.style.display, '', 'first item no display' );
      equal( lastItemElem.style.display, '', 'last item no display' );
      equal( firstItemElem.style.opacity, '', 'first item opacity not set' );
      equal( lastItemElem.style.opacity, '', 'last item opacity not set' );
      setTimeout( nextHideNoTransition );
      // start();
    });

    layout.reveal( hideItems );
  }

  // --------------------------  -------------------------- //
  
  function nextHideNoTransition() {
    layout.once( 'hideComplete', function( hideCompleteItems ) {
      ok( true, 'hideComplete event did fire' );
      equal( hideCompleteItems.length, hideItems.length, 'event-emitted items matches layout items length' );
      strictEqual( hideCompleteItems[0], hideItems[0], 'event-emitted items has same first item' );
      strictEqual( hideCompleteItems[ lastIndex ], hideItems[ lastIndex ], 'event-emitted items has same last item' );
      equal( firstItemElem.style.display, 'none', 'first item hidden' );
      equal( lastItemElem.style.display, 'none', 'last item hidden' );
      equal( firstItemElem.style.opacity, '', 'first item opacity not set' );
      equal( lastItemElem.style.opacity, '', 'last item opacity not set' );
      setTimeout( nextRevealNoTransition );
      // start();
    });

    layout.transitionDuration = 0;
    layout.hide( hideItems );
  }

  // --------------------------  -------------------------- //

  function nextRevealNoTransition() {
    layout.once( 'revealComplete', function( revealCompleteItems ) {
      ok( true, 'revealComplete event did fire' );
      equal( revealCompleteItems.length, hideItems.length, 'event-emitted items matches layout items length' );
      strictEqual( revealCompleteItems[0], hideItems[0], 'event-emitted items has same first item' );
      strictEqual( revealCompleteItems[ lastIndex ], hideItems[ lastIndex ], 'event-emitted items has same last item' );
      equal( firstItemElem.style.display, '', 'first item no display' );
      equal( lastItemElem.style.display, '', 'last item no display' );
      equal( firstItemElem.style.opacity, '', 'first item opacity not set' );
      equal( lastItemElem.style.opacity, '', 'last item opacity not set' );
      setTimeout( nextHideNone );
      // start();
    });

    layout.reveal( hideItems );
  }

  function nextHideNone() {
    var emptyArray = [];
    layout.once( 'hideComplete', function( hideCompleteItems ) {
      ok( true, 'hideComplete event did fire with no items' );
      equal( hideCompleteItems, emptyArray, 'returns same object passed in' );
      setTimeout( nextRevealNone );
      // start();
    });
  
    layout.hide( emptyArray );
  }

  function nextRevealNone() {
    var emptyArray = [];
    layout.once( 'revealComplete', function( revealCompleteItems ) {
      ok( true, 'revealComplete event did fire with no items' );
      equal( revealCompleteItems, emptyArray, 'returns same object passed in' );
      setTimeout( nextHideItemElements );
      // start();
    });
  
    layout.reveal( emptyArray );
  }

  // --------------------------  -------------------------- //

  function nextHideItemElements() {
    layout.once( 'hideComplete', function( hideCompleteItems ) {
      ok( true, 'hideComplete event did fire after hideItemElements' );
      equal( hideCompleteItems.length, hideItems.length, 'event-emitted items matches layout items length' );
      strictEqual( hideCompleteItems[0], hideItems[0], 'event-emitted items has same first item' );
      strictEqual( hideCompleteItems[ lastIndex ], hideItems[ lastIndex ], 'event-emitted items has same last item' );
      equal( firstItemElem.style.display, 'none', 'first item hidden' );
      equal( lastItemElem.style.display, 'none', 'last item hidden' );
      equal( firstItemElem.style.opacity, '', 'first item opacity not set' );
      equal( lastItemElem.style.opacity, '', 'last item opacity not set' );
      setTimeout( nextRevealItemElements );
      // start();
    });

    layout.hideItemElements( hideElems );
  }

  function nextRevealItemElements() {
    layout.once( 'revealComplete', function( revealCompleteItems ) {
      ok( true, 'revealComplete event did fire after revealItemElements' );
      equal( revealCompleteItems.length, hideItems.length, 'event-emitted items matches layout items length' );
      strictEqual( revealCompleteItems[0], hideItems[0], 'event-emitted items has same first item' );
      strictEqual( revealCompleteItems[ lastIndex ], hideItems[ lastIndex ], 'event-emitted items has same last item' );
      equal( firstItemElem.style.display, '', 'first item no display' );
      equal( lastItemElem.style.display, '', 'last item no display' );
      equal( firstItemElem.style.opacity, '', 'first item opacity not set' );
      equal( lastItemElem.style.opacity, '', 'last item opacity not set' );
      // setTimeout( nextHideNoTransition );
      start();
    });

    layout.revealItemElements( hideElems );
  }

});
