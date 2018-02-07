import Ember from 'ember';
import EmberObject from '@ember/object';
import Route from '@ember/routing/route';
import sampleData from 'assessment-frontend/models/fixtures/sample-data';

let Product = EmberObject.extend({
  name: null,
  data: [],
  productDataSubset: Ember.computed('data', function() {
    return this.get('data').slice(0, 10);
  }),
  categories: Ember.computed(function() {
    return Object.keys(this.data[0]);
  }),
  categoriesSubset: Ember.computed(function() {
    var dataSubset = this.get('data')[0];
    return Object.keys(dataSubset).slice(0, 10);
  }),
  // get only first 10 entries per row provided
  // TODO: Can this be done in a component or more efficiently?
  productDataSubsetEntries: Ember.computed('data', function() {
    var productDataArray  = [];
    var productDataSubset = this.get('data').slice(0, 10);
    productDataSubset.forEach(function(row) {
      var rowData = [];
      rowData.push(Object.values(row).slice(0, 10));
      productDataArray.push(rowData);
    })
    return productDataArray;
  })
})

export default Route.extend({
  model() {
    return EmberObject.create({
      products: [
        Product.create({
          id: 'abc',
          name: 'Product ABC',
          data: sampleData.map(o => EmberObject.create(o))
        }),
        Product.create({
          id: '123',
          name: 'Product 123',
          data: sampleData.map(o => EmberObject.create(o))
        })
      ],
      publisher: EmberObject.create({
        title: 'XYZ Corp',
        deliveryFrequency: 'daily',
        dataFrequency: 'weekly',
        reportingLag: '12 hours',
        history: '2005-11-01',
        coverage: '5000+ companies, 59 indicators'
      })
    });
  }
});
