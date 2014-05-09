Patterns = Ember.Application.create();

Patterns.Router.map(function() {
  this.resource('index', { path: '/' });
  this.resource('week_two');
  this.resource('week_three');
  this.resource('week_four');
  this.resource('week_five');
  this.resource('week_one');
  this.resource('week_six');
  this.resource('week_seven');
  this.resource('week_8_week_10');
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
  this.resource('practice');
  this.resource('concrete_tools');
  this.resource('jquery_plugin');
});


Patterns.IndexRoute = Ember.Route.extend({
});


