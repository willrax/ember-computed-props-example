import Ember from 'ember';

export default Ember.Route.extend({
  user: Ember.inject.service('myModel'),

  setupController(controller) {
    let user = this.get('user');

    controller.set('shadowName', user.get('model.name'));
    controller.set('user', user);
  }
});
