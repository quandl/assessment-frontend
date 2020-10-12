import Model, { attr } from '@ember-data/model';

export default class PublisherModel extends Model {
    @attr title;
    @attr deliveryFrequency;
    @attr dataFrequency;
    @attr reportingLag;
    @attr history;
    @attr coverage;
}
