import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | sidebar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{sidebar}}`);
    const infoItems = this.element.querySelectorAll('.info-key');
    let infoItemRes = [];
    infoItems.forEach(element => {
      infoItemRes.push(element.textContent.trim());
    });
    assert.equal(infoItemRes.toString(), 'Delivery Frequency,Data Frequency,Reporting Lag,History,Coverage');
  });
});