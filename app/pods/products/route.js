import EmberObject from '@ember/object';
import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return EmberObject.create({
      products: this.store.findAll('product'),
      publisher: this.store.findRecord('publisher', 'publisher_id'),
    });
  }
});
