// this module will prevent ui-router from working
describe('OrderFactory', function() {

  mod = angular.module('uiRouterNoop', [])
    .service('$state', function() { return {} })
    .service('$urlRouter', function() { return {} })

  beforeEach(module('FullstackGeneratedApp'));
  beforeEach(module('uiRouterNoop'));

  var $httpBackend;
  var $rootScope;
  beforeEach('Inject tools', inject( function (_$httpBackend_, _$rootScope_) {
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
  }));

  var OrderFactory;
  beforeEach('Inject factory', inject( function ( _OrderFactory_ ) {
    OrderFactory = _OrderFactory_;
  }));

  it('should be an object', function () {
    expect( OrderFactory ).to.be.an('object');
  });

  describe('API endpoints', function () {

    afterEach( function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should GET /api/orders when calling fetchAll', function(done) {

      $httpBackend.expectGET('/api/orders');
      $httpBackend.whenGET('/api/orders').respond([{ works: true }]);

      OrderFactory.fetchAll().then( function( orders ) {

        expect( orders[0].works ).to.be.true;
        done();

      });

      $httpBackend.flush();

    });

    it('should return undefined if it\'s unauthorized', function(done) {

      $httpBackend.expectGET('/api/orders');
      $httpBackend.whenGET('/api/orders').respond( 401, {} );

      OrderFactory.fetchAll().then( function( orders ) {

        expect( orders ).to.be.undefined;
        done();

      });

      $httpBackend.flush();

    });

  });

});