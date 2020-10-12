import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | navigation', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{navigation}}`);
    const navItems = this.element.querySelectorAll('.icon-nav__nav');
    let navItemRes = [];
    navItems.forEach(element => {
      navItemRes.push(element.textContent);
    });
    assert.equal(navItemRes.toString(), 'Alternative Data,Core Financial Data');
  });
});