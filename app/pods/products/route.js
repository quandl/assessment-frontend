import Ember from 'ember';
import EmberObject from '@ember/object';
import Route from '@ember/routing/route';
import sampleData from 'assessment-frontend/models/fixtures/sample-data';

let Product = EmberObject.extend({
  name: null,
  data: [],
  productDataSubset: Ember.computed('data', function() {
    return this.get('data').slice(0, 7);
  })
})

export default Route.extend({
  model() {
    return EmberObject.create({
      products: [
        Product.create({
          id: 'abc',
          name: 'Product ABC',
          categories: [
            "m_ticker",
            "ticker",
            "comp_name",
            "comp_name_2",
            "exchange",
            "currency_code",
            "per_end_date",
            "per_type",
            "per_code",
            "per_fisc_year",
            "per_fisc_qtr",
            "per_cal_year",
            "per_cal_qtr",
            "rev_type",
            "rev_type_desc",
            "broker_name",
            "analyst_name",
            "eps_rev_date",
            "eps_rev_est",
            "eps_rev_date_prev",
            "eps_rev_est_prev"
          ],
          data: sampleData.map(o => EmberObject.create(o))
        }),
        Product.create({
          id: '123',
          name: 'Product 123',
          categories: [
            "m_ticker",
            "ticker",
            "comp_name",
            "comp_name_2",
            "exchange",
            "currency_code",
            "per_end_date",
            "per_type",
            "per_code",
            "per_fisc_year",
            "per_fisc_qtr",
            "per_cal_year",
            "per_cal_qtr",
            "rev_type",
            "rev_type_desc",
            "broker_name",
            "analyst_name",
            "eps_rev_date",
            "eps_rev_est",
            "eps_rev_date_prev",
            "eps_rev_est_prev"
          ],
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
