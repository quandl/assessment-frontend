import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model(params) {
    const productModel = this.modelFor('products');
    return EmberObject.create({
      product: productModel.get('products').findBy('id', params.id),
      publisher: productModel.get('publisher')
    })
  }
});
