import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | product-table', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{product-table}}`);
    assert.equal(this.element.querySelectorAll('.product-name').length, 1 , '');
    this.set('productName', {
      name: 'Product ABC'
    });
    await render(hbs`{{product-table product=this.productName}}`);
    assert.equal(this.element.querySelector('.product-name').textContent, 'Product ABC');
  });
});