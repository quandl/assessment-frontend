import EmberObject from '@ember/object';
import Route from '@ember/routing/route';
import sampleData from 'assessment-frontend/models/fixtures/sample-data';
// import { computed } from '@ember/object';

export default Route.extend({
  model() {
    return EmberObject.create({
      products: [
        this.store.createRecord('product', {
          id: 'abc',
          name: 'Product ABC',
          data: sampleData.map(o => EmberObject.create(o))
        }),
        this.store.createRecord('product', {
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
