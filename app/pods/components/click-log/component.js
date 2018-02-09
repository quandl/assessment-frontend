import Component from '@ember/component';

export default Component.extend({
  click() {
    Ember.Logger.info("It was clicked!");
  }
});
