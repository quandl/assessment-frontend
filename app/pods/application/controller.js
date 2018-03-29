import Ember from 'ember';

export default Ember.Controller.extend({
  isIndexRoute: Ember.computed.equal('currentRouteName', 'products.index'),
  actions: {
    toggleMenu: () => console.log('Menu is toggled!'),
  }
});
