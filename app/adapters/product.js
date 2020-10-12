import Adapter from '@ember-data/adapter';
import { Promise } from 'rsvp';
import sampleData from "assessment-frontend/models/fixtures/sample-data"

export default class ApplicationAdapter extends Adapter {
  findRecord(id){
      return new Promise(function(resolve){
          resolve({id,name:"Product", data: sampleData})
      })
  }
  findAll(){
      return new Promise(function(resolve){
          const data = sampleData;
          resolve([
              { id:"abc", name:"Product ABC", data },
              { id:"123", name:"Product 123", data },
          ])
      })
  }
}