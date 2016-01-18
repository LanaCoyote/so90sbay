app.factory('OrderFactory', function ( $http ) {

  var OrderFactory = {};

  OrderFactory.fetchAll = function() {

    return $http.get('/api/orders')
      .then( function( res ) { 
        return res.data;
      })
      .then( null, function( err ) {

        console.log( err );

      });

  }

  return OrderFactory;

});