import Ember from 'ember';

const { Controller, computed, get, set } = Ember;

export default Controller.extend({
  shadowName: '',
  user: null,

  name: computed.readOnly('user.model.name'),

  actions: {
    save() {
      let newValue = get(this, 'shadowName')
      set(this, 'user.model.name', newValue);
    },

    reset() {
      let oldValue = get(this, 'name');
      set(this, 'shadowName', oldValue);
    }
  }
});
