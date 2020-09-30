import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  publisher: alias('model.publisher'),
  products: alias('model.products')
});
