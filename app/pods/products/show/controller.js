import Controller from '@ember/controller';
import Ember from 'ember';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  publisher: alias('model.publisher'),
  product: alias('model.product'),
  productData: alias('product.data'),
  products: alias('model.products'),
  actions: {
    logClick(element) {
      Ember.Logger.info('An element has been clicked: ', element)
    },
  },
});
