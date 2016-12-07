import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('artists', function() {
    this.route('artist', {path: '/:term'});
  });
  this.route('search');
});

export default Router;
