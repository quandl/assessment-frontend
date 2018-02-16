import Ember from 'ember';

export default Ember.Controller.extend({
  publisher: Ember.computed.alias('model.publisher'),
  product: Ember.computed.alias('model.product'),
  productData: Ember.computed.alias('product.data'),
  actions: {
    tab() {
      console.log('tab pressed');
    }
  }
});
