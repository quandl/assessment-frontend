import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr name;
  @attr data;

  get productDataSubset() {
    return this.data.slice(0,7);
  }
}
