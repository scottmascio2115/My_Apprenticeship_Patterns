Patterns = Ember.Application.create();

Patterns.Router.map(function() {
  this.resource('index', { path: '/' });
  this.resource('week_two');
  this.resource('week_three');
  this.resource('week_four');
  this.resource('week_five');
  this.resource('week_one');
  this.resource('week_six');
  this.resource('growth_mindset');
  this.resource('emptying_the_cup');
  this.resource('construct_your_own_curriculm');
  this.resource('exposing_your_ignorance');
  this.resource('sweep_the_floor');
  this.resource('walking_the_long_road');
  this.resource('accurate_self_assessment');
  this.resource('perpetual_learning');
  this.resource('a_different_road');
  this.resource('draw_your_own_map');
  this.resource('confronting_your_ignorance');
  this.resource('all_posts');
});


Patterns.IndexRoute = Ember.Route.extend({
});


