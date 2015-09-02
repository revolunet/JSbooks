<a name="0.11.1"></a>
### 0.11.1 (2015-06-18)


#### Bug Fixes

* **app:** reset to correct data type (fix #90) ((dad67c82))


<a name="0.11.0"></a>
## 0.11.0 (2014-11-28)


#### Bug Fixes

* **deps:** update to masonry ~3.2 ((19ec6c4d))


<a name="0.10.0"></a>
## 0.10.0 (2014-11-18)


<a name="0.9.0"></a>
## 0.9.0 (2014-07-25)


#### Bug Fixes

* **deps:** upgrade jQuery and ImagesLoaded ((b9ee26c3), closes (#57))


#### Features

* **directive:** add `reload-on-show` option ((1b6e2b0b))


<a name="0.8.1"></a>
### 0.8.1 (2014-03-08)


#### Bug Fixes

* **directive:**
  * allow passing 'loadImages' ((3296b5a3))
  * allow selectors as columnWidth ((b5df5bbd))


<a name="0.8.0"></a>
## 0.8.0 (2014-03-02)


#### Bug Fixes

* **directive:**
  * re-layout on masonry.reload ([a522364e](passy/angular-masonry/commit/a522364e087c826e735a5e2ef7924ae76efe33e1))
  * allow overriding of options ([676823c6](passy/angular-masonry/commit/676823c6444019487c774df44a49199de568f073))


<a name="v0.7.0"></a>
## v0.7.0 (2013-12-09)


#### Features

* **directive:** add preserveLayout option ([a84e0aa0](http://github.com/passy/angular-masonry/commit/a84e0aa07cd30c0b9832d2ccdc72e5e99faf1f76))

<a name="v0.6.0"></a>
## v0.6.0 (2013-11-10)


#### Bug Fixes

* **test:** correct controller spy ([eddff777](http://github.com/passy/angular-masonry/commit/eddff7772baeb4750c73f67df9716d1d1530236f))

#### Features

* **deps:** Upgrade to Angular 1.2 ([191efb40](http://github.com/passy/angular-masonry/commit/191efb406e3ef1fb2d81b1739d71f26a8578a540))

<a name="v0.5.1"></a>
### v0.5.1 (2013-10-29)


#### Bug Fixes

* **build:** update build artifacts for v0.5.0 ([e84f99ed](http://github.com/passy/angular-masonry/commit/e84f99ed5035358643a52505f84701d6e0856900))

<a name="v0.5.0"></a>
## v0.5.0 (2013-10-11)


#### Bug Fixes

* **app:** watch $scope.$index and reloadItems ([44a9ca29](http://github.com/passy/angular-masonry/commit/44a9ca291d5a1ec96ae4c1b76bfb689add107060), closes [#21](http://github.com/passy/angular-masonry/issues/21))
* **directive:** name anonymous functions ([ca32c03f](http://github.com/passy/angular-masonry/commit/ca32c03f655f20f2b3e7efe9b812f69e76d1e757))


#### Features

* **app:** add masonry.reload event ([774f3fc0](http://github.com/passy/angular-masonry/commit/774f3fc0aad7fccd5f07ae6362926bc61ef435fb))

<a name="v0.4.0"></a>
## v0.4.0 (2013-09-03)


#### Features

* **app:** new options attribute ([ad9b92e5](http://github.com/passy/angular-masonry/commit/ad9b92e5d9254e273ac0810253fca23e6fe4b88b), closes [#10](http://github.com/passy/angular-masonry/issues/10))


#### Breaking Changes

* Options can no longer be specified via the `options` attribute.

Before:

    <masonry options="{my: 'option'}"></masonry>

After:

    <masonry masonry-options="{my: 'option'}"></masonry>

([ad9b92e5](http://github.com/passy/angular-masonry/commit/ad9b92e5d9254e273ac0810253fca23e6fe4b88b))

<a name="v0.3.6"></a>
### v0.3.6 (2013-09-03)


#### Bug Fixes

* **app:** pre-link instead of post-link ([7fe3e85f](http://github.com/passy/angular-masonry/commit/7fe3e85f678909d4b35901910dae0c4f59406c77), closes [#11](http://github.com/passy/angular-masonry/issues/11))


#### Features

* **app:** emit create/destroy events ([6adea921](http://github.com/passy/angular-masonry/commit/6adea921710113f1c0d86339fce919c09ea9c910))

<a name="v0.3.5"></a>
### v0.3.5 (2013-08-21)


#### Features

* **app:** emit create/destroy events ([6adea921](http://github.com/passy/angular-masonry/commit/6adea921710113f1c0d86339fce919c09ea9c910))

<a name="v0.3.4"></a>
### v0.3.4 (2013-08-20)


#### Features

* **build:** include DI annotations in build ([a1051997](http://github.com/passy/angular-masonry/commit/a1051997001c0791e6c3deff2cdee5ec4c2ebe96), closes [#6](http://github.com/passy/angular-masonry/issues/6))

<a name="v0.3.3"></a>
### v0.3.3 (2013-08-07)


#### Bug Fixes

* **app:** add explicit DI annotationss ([aea8e530](http://github.com/passy/angular-masonry/commit/aea8e53070942f5554bb9e1aaac22c3e57f3c08e))


#### Features

* **build:** use ngmin instead of annotations ([1eee22b9](http://github.com/passy/angular-masonry/commit/1eee22b9d2f9e0294c020d7fa8bd66dd8b91a465))

<a name="v0.3.2"></a>
### v0.3.2 (2013-08-04)


#### Bug Fixes

* **app:** enforce new scope for each brick ([ad854df4](http://github.com/passy/angular-masonry/commit/ad854df4e27e952535a0bca20686abaa6cf771db))

<a name="v0.3.1"></a>
### v0.3.1 (2013-08-04)


#### Features

* **app:** expose scheduleMasonry(Once) methods ([0fad6552](http://github.com/passy/angular-masonry/commit/0fad65527af6f1dd11ebc2b3bb2deb03ebaef34c))

<a name="v0.3.0"></a>
## v0.3.0 (2013-08-04)


#### Bug Fixes

* **app:**
  * column width is an integer ([f04d3a2e](http://github.com/passy/angular-masonry/commit/f04d3a2e1369b6aa1dfc84de02ba4ab6925968a6))
  * more careful relayout scheduling ([9b215d6f](http://github.com/passy/angular-masonry/commit/9b215d6f154567823c903319a75fbd13bbc628f9))


#### Features

* **app:** upgraded to masonry 3.1 ([e73c3e62](http://github.com/passy/angular-masonry/commit/e73c3e624fc5ef1a023747caffba5da3794abd8f))

<a name="v0.2.1"></a>
## v0.2.0 (2013-07-22)


#### Bug Fixes

* **app:** scheduled re-layout too early ([a10b6522](http://github.com/passy/angular-masonry/commit/a10b6522c373e0352f53c54bbbe1004ed1297434))

<a name="v0.2.1"></a>
## v0.2.0 (2013-07-17)


#### Bug Fixes

* **app:**
  * remove executions on uninitialized masonry ([ca961fec](http://github.com/passy/angular-masonry/commit/ca961fec27e6ad914eb002ff31a34b2a863b44f9), closes [#1](http://github.com/passy/angular-masonry/issues/1))
  * removed loaded option ([556af9f9](http://github.com/passy/angular-masonry/commit/556af9f945b70bd1c5c14d285ba0e4b29dcd0a60))


#### Features

* **app:** attributes for column-with, item-selector and options ([75b65231](http://github.com/passy/angular-masonry/commit/75b65231c3ec45a79224f46e51a0f58246b4436c))
