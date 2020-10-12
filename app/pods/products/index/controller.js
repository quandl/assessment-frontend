import Controller from '@ember/controller';
import Ember from 'ember';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  publisher: alias('model.publisher'),
  products: alias('model.products'),
  actions: {
    clickButton(element) {
      Ember.Logger.info('A button has been clicked: ', element)
    },
  },
});
