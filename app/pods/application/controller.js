import Ember from 'ember';

export default Ember.Controller.extend({
  isIndexRoute: Ember.computed.equal('currentRouteName', 'products.index'),
  isShowRoute: Ember.computed.equal('currentRouteName', 'products.show'),
  actions: {
    toggleMenu: () => console.log(`map is toggled!`),
  }
});
