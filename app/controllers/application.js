import Ember from 'ember';

export default Ember.Controller.extend({
  user: Ember.inject.service('myModel')
});
