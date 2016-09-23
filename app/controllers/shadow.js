import Ember from 'ember';

export default Ember.Controller.extend({
  user: Ember.inject.service('myModel'),

  name: Ember.computed('user.model.name', {
    get() {
      return this.get('user.model.name');
    },

    set(_, value) {
      return value;
    }
  }),

  actions: {
    save() {
      let newValue = this.get('name')
      this.set('user.model.name', newValue);
    },

    reset() {
      this.notifyPropertyChange('name');
    }
  }
});
