import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | data-publisher', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`{{data-publisher}}`);

    assert.equal(this.element.textContent.trim(), '');
    this.set('publisher', {
      title: 'XYZ Corp'
    });
    await render(hbs`
      {{data-publisher publisher=this.publisher}}
    `);

    assert.equal(this.element.textContent.trim(), 'XYZ Corp');
  });
});