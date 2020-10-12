import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({
  actions: {
    clickFinancialData(element) {
        Ember.Logger.info('A button has been clicked: ', element);
        this.set('focusedFinancialData', true);
        this.set('focusedAlternativeData', false);
      },
    clickAlternativeData(element) {
      Ember.Logger.info('A button has been clicked: ', element);
      this.set('focusedAlternativeData', true);
      this.set('focusedFinancialData', false);
    },
    clickButton(element) {
      Ember.Logger.info('A button has been clicked: ', element)
    },
  },
});