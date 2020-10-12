import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({
    actions: {
        clickButton(element) {
          Ember.Logger.info('A button has been clicked: ', element)
        },
      },
});