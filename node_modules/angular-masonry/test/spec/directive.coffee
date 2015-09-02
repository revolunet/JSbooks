describe 'angular-masonry', ->

  controllerProvider = null

  beforeEach module('wu.masonry')
  beforeEach module((_$controllerProvider_) ->
    controllerProvider = _$controllerProvider_
    null
  )

  beforeEach inject(($rootScope) =>
    @scope = $rootScope.$new()
    $.fn.masonry.reset()
  )

  it 'should initialize', inject(($compile) =>
    element = angular.element '<masonry></masonry>'
    element = $compile(element)(@scope)
  )

  it 'should call masonry on init', inject(($compile) =>
    element = angular.element '<div masonry></div>'
    element = $compile(element)(@scope)

    expect($.fn.masonry).toHaveBeenCalled()
  )

  it 'should pass on the column-width attribute', inject(($compile) =>
    element = angular.element '<masonry column-width="200"></masonry>'
    element = $compile(element)(@scope)

    expect($.fn.masonry).toHaveBeenCalledOnce()
    call = $.fn.masonry.firstCall
    expect(call.args[0].columnWidth).toBe 200
  )

  it 'should pass on the item-selector attribute', inject(($compile) =>
    element = angular.element '<masonry item-selector=".mybrick"></masonry>'
    element = $compile(element)(@scope)

    expect($.fn.masonry).toHaveBeenCalled()
    call = $.fn.masonry.firstCall
    expect(call.args[0].itemSelector).toBe '.mybrick'
  )

  it 'should pass on any options provided via `masonry-options`', inject(($compile) =>
    element = angular.element '<masonry masonry-options="{ isOriginLeft: true }"></masonry>'
    element = $compile(element)(@scope)

    expect($.fn.masonry).toHaveBeenCalled()
    call = $.fn.masonry.firstCall
    expect(call.args[0].isOriginLeft).toBeTruthy()
  )

  it 'should pass on any options provided via `masonry`', inject(($compile) =>
    element = angular.element '<div masonry="{ isOriginLeft: true }"></div>'
    element = $compile(element)(@scope)

    expect($.fn.masonry).toHaveBeenCalled()
    call = $.fn.masonry.firstCall
    expect(call.args[0].isOriginLeft).toBeTruthy()
  )

  it 'should setup a $watch when the reload-on-show is present', inject(($compile) =>
    sinon.spy(@scope, '$watch')
    element = angular.element '<masonry reload-on-show></masonry>'
    element = $compile(element)(@scope)

    expect(@scope.$watch).toHaveBeenCalled()
  )

  it 'should not setup a $watch when the reload-on-show is missing', inject(($compile) =>
    sinon.spy(@scope, '$watch')
    element = angular.element '<masonry></masonry>'
    element = $compile(element)(@scope)

    expect(@scope.$watch).not.toHaveBeenCalled()
  )

  describe 'MasonryCtrl', =>
    beforeEach inject(($controller, $compile) =>
      @element = angular.element '<div></div>'
      @ctrl = $controller 'MasonryCtrl', {
        $scope: @scope
        $element: @element
      }
    )

    it 'should not remove after destruction', =>
      @ctrl.destroy()
      @ctrl.removeBrick()

      expect($.fn.masonry).not.toHaveBeenCalled()

    it 'should not add after destruction', =>
      @ctrl.destroy()
      @ctrl.appendBrick()

      expect($.fn.masonry).not.toHaveBeenCalled()


  describe 'masonry-brick', =>
    beforeEach =>
      self = this
      @appendBrick = sinon.spy()
      @removeBrick = sinon.spy()
      @scheduleMasonry = sinon.spy()
      @scheduleMasonryOnce = sinon.spy()

      controllerProvider.register('MasonryCtrl', ->
        @appendBrick = self.appendBrick
        @removeBrick = self.removeBrick
        @scheduleMasonry = self.scheduleMasonry
        @scheduleMasonryOnce = self.scheduleMasonryOnce
        this
      )

    it 'should register an element in the parent controller', inject(($compile) =>
      element = angular.element '''
        <masonry>
          <div class="masonry-brick"></div>
        </masonry>
      '''
      element = $compile(element)(@scope)

      expect(@appendBrick).toHaveBeenCalledOnce()
    )

    it 'should remove an element in the parent controller if destroyed', inject(($compile) =>
      @scope.bricks = [1, 2, 3]
      element = angular.element '''
        <masonry>
          <div class="masonry-brick" ng-repeat="brick in bricks"></div>
        </masonry>
      '''
      element = $compile(element)(@scope)
      @scope.$digest() # Needed for initial ng-repeat

      @scope.$apply(=>
        @scope.bricks.splice(0, 1)
      )

      expect(@appendBrick).toHaveBeenCalledThrice()
      expect(@removeBrick).toHaveBeenCalledOnce()
    )

  describe 'masonry-brick internals', =>
    beforeEach ->
      $.fn.imagesLoaded = (cb) -> cb()

    afterEach ->
      delete $.fn.imagesLoaded

    it 'should append three elements to the controller', inject(($compile) =>
      element = angular.element '''
        <masonry>
          <div class="masonry-brick"></div>
          <div class="masonry-brick"></div>
          <div class="masonry-brick"></div>
        </masonry>
      '''
      element = $compile(element)(@scope)
      @scope.$digest()
      # 2 is resize and one layout, 3 for the elements
      expect($.fn.masonry.callCount).toBe(2 + 3)
    )

    it 'should append before imagesLoaded when preserve-order is set', inject(($compile) =>
      element = angular.element '''
        <masonry preserve-order>
          <div class="masonry-brick"></div>
        </masonry>
      '''
      imagesLoadedCb = undefined
      $.fn.imagesLoaded = (cb) -> imagesLoadedCb = cb
      element = $compile(element)(@scope)
      @scope.$digest()
      expect($.fn.masonry.calledWith('appended', sinon.match.any, sinon.match.any)).toBe(true)
    )

    it 'should call layout after imagesLoaded when preserve-order is set', inject(($compile, $timeout) =>
      element = angular.element '''
        <masonry preserve-order>
          <div class="masonry-brick"></div>
        </masonry>
      '''
      imagesLoadedCb = undefined
      $.fn.imagesLoaded = (cb) -> imagesLoadedCb = cb
      element = $compile(element)(@scope)
      @scope.$digest()
      expect($.fn.masonry.calledWith('layout', sinon.match.any, sinon.match.any)).toBe(false)
      imagesLoadedCb()
      $timeout.flush()
      expect($.fn.masonry.calledWith('layout', sinon.match.any, sinon.match.any)).toBe(true)
    )

    it 'should append before imagesLoaded when load-images is set to "false"', inject(($compile) =>
      element = angular.element '''
        <masonry load-images="false">
          <div class="masonry-brick"></div>
        </masonry>
      '''
      imagesLoadedCb = undefined
      $.fn.imagesLoaded = (cb) -> imagesLoadedCb = cb
      element = $compile(element)(@scope)
      @scope.$digest()
      expect($.fn.masonry.calledWith('appended', sinon.match.any, sinon.match.any)).toBe(true)
    )

    it 'should call layout before imagesLoaded when load-images is set to "false"', inject(($compile, $timeout) =>
      element = angular.element '''
        <masonry load-images="false">
          <div class="masonry-brick"></div>
        </masonry>
      '''
      imagesLoadedCb = undefined
      $.fn.imagesLoaded = (cb) -> imagesLoadedCb = cb
      element = $compile(element)(@scope)
      @scope.$digest()
      $timeout.flush()
      expect($.fn.masonry.calledWith('layout', sinon.match.any, sinon.match.any)).toBe(true)
    )
