import Ember from 'ember';

export default Ember.Controller.extend({
  user: Ember.inject.service('myModel'),

  name: Ember.computed.alias('user.model.name'),

  actions: {
    save() {
      let newValue = this.get('name')
      this.set('user.model.name', newValue);
    },

    reset() {
      this.get('model').rollbackAtrributes();
    }
  }
});
