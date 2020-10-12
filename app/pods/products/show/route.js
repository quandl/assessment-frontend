import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model(params) {
    return EmberObject.create({
      product: this.store.findRecord('product', params.id),
    })
  }
});
