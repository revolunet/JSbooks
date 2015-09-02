# Changelog

### v1.4.2

+ Added `parseFloat()` for percent values. Switched back to pixels for transform values. Fixed [#37](https://github.com/metafizzy/outlayer/issues/37), [isotope#948](https://github.com/metafizzy/isotope/issues/948)

### v1.4.1

+ Trigger jQuery Events. Fixed [#6](https://github.com/metafizzy/outlayer/issues/6)
+ Fix Safari `percentPosition` bug by checking and using percent values. Fixed [desandro/masonry#698](https://github.com/desandro/masonry/issues/698)
+ Fix Safari bug with appended/prepended methods. Fixed [metafizzy/isotope#945](https://github.com/metafizzy/isotope/issues/945).
+ Fixed sizing bug with `percentPosition` and border on container element

## v1.4.0

+ Added `revealComplete` and `hideComplete` events
+ Added `hideItemElements` and `revealItemElement` methods
+ Added `percentPosition` option
+ Removed `instance` argument from `layoutComplete` and `removeComplete` events
+ Changed `bower.json` `main` to just `outlayer.js`

## v1.3.0

+ add CommonJS support for [Browserify](http://browserify.org) [#17](https://github.com/metafizzy/outlayer/issues/17)
+ remove [jQuery Bridget](https://github.com/desandro/jquery-bridget) as an explicit dependency

## v1.2.0

+ Use `constructor.defaults` for default options
+ add `isResizingContainer` option and `resizeContainer` method
+ add `needsResizeLayout()` for [#9](https://github.com/metafizzy/outlayer/issues/9)
+ Fix [#5](https://github.com/metafizzy/outlayer/pull/5) IE8 bug with destroy and resize

### v1.1.10

+ Specify MIT license
+ Ignore other stuff for Bower package
+ add `Item.isLayoutInstant`
+ move `namespace` to `.constructor`

### v1.1.9

+ Removed `Layout.prototype.settings`. Broke backwards compatibility with Packery >=v1.2.0.

### v1.1.8

+ `.manageStamps()` when prepending. Fixed desandro/masonry#403

### v1.1.7

+ `.addItems()` returns empty array if no items. Fixed desandro/masonry#401

### v1.1.6

### v1.1.5

### v1.1.4

### v1.1.3

### v1.1.2

### v1.1.1

+ Fixed removing item when `transitionDuration` = 0

## v1.1.0

+ Add RequireJS / AMD support

## v1.0.0
