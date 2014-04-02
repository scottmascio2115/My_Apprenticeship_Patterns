Patterns = Ember.Application.create();

Patterns.Router.map(function() {
  this.resource('week_one');
  this.resource('week_two');
  this.resource('week_three');
  this.resource('week_four');
  this.resource('week_five');
});

Patterns.IndexRoute = Ember.Route.extend({
});
