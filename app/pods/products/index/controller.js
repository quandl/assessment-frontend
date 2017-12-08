import Ember from 'ember';

export default Ember.Controller.extend({
  publisher: Ember.computed.alias('model.publisher'),
  products: Ember.computed.alias('model.products')
});
