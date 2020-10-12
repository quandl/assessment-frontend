import Adapter from '@ember-data/adapter';
import { Promise } from 'rsvp';

export default class ApplicationAdapter extends Adapter {
  findRecord(id){
      return new Promise(function(resolve){
          resolve({
            id,
            title: "XYZ Corp",
            deliveryFrequency: "daily",
            dataFrequency: "weekly",
            reportingLag: "12 hours",
            history: "2005-11-01",
            coverage: "5000+ companies, 59 indicators",
          })
      })
  }
}