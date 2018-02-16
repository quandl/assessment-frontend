import Ember from 'ember';

export default Ember.Controller.extend({
  publisher: Ember.computed.alias('model.publisher'),
  products: Ember.computed.alias('model.products'),
  actions: {
    pricing() {
      console.log('pricing button clicked');
    },
    commercial() {
      console.log('commercial data button clicked');
    },
    menu() {
      console.log('menu hamburger button pressed');
    },
    logo() {
      console.log('logo pressed');
    },
    tab() {
      console.log('tab pressed');
    }
  }
});
