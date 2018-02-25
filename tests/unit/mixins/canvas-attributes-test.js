import EmberObject from '@ember/object';
import CanvasAttributesMixin from 'assessment-frontend/mixins/canvas-attributes';
import { module, test } from 'qunit';

module('Unit | Mixin | canvas attributes');

// Replace this with your real tests.
test('it works', function(assert) {
  let CanvasAttributesObject = EmberObject.extend(CanvasAttributesMixin);
  let subject = CanvasAttributesObject.create();
  assert.ok(subject);
});
