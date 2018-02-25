import Ember from 'ember';
import EmberObject from '@ember/object';
import Route from '@ember/routing/route';
import sampleData from 'assessment-frontend/models/fixtures/sample-data';

let Product = EmberObject.extend({
  name: null,
  data: [],
  productDataSubset: Ember.computed('data', function() {
    return this.get('data').slice(0, 7).map(row => Object.values(row));
  }),
  productData: Ember.computed('data', function() {
    return this.get('data').map(row => Object.values(row));
  }),
  columns: Ember.computed('data', function() {
    return Object.keys(this.get('data')[0]);
  }),
})

export default Route.extend({
  model() {
    return EmberObject.create({
      products: [
        Product.create({
          id: 'abc',
          name: 'Product ABC',
          data: sampleData
        }),
        Product.create({
          id: '123',
          name: 'Product 123',
          data: sampleData
        })
      ],
      publisher: EmberObject.create({
        title: 'XYZ Corp',
        deliveryFrequency: 'Daily',
        dataFrequency: 'Weekly',
        reportingLag: '12 hours',
        history: '2005-11-01',
        coverage: '5000+ companies, 59 indicators'
      })
    });
  }
});
