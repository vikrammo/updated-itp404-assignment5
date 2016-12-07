import Ember from 'ember';

export default Ember.Route.extend({


  model: function(params) {

    var id = params.term;
    console.log(id);
    console.log(params);

    return $.ajax({

       url: 'http://itp-api.herokuapp.com/api/artists/'  + id + '/songs',
       type: 'get'


    }).then(function(json) {
      console.log(json.songs);
      return json.songs;
    });
  }

});
