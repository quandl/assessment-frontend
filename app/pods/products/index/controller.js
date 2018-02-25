import Ember from 'ember';

export default Ember.Controller.extend({
  publisher: Ember.computed.alias('model.publisher'),
  products: Ember.computed.alias('model.products'),
  actions: {
    logClick(element) {
      Ember.Logger.info('An element has been clicked: ', element)
    }
  }
});
