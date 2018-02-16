import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('publisher-info', 'Integration | Component | publisher info', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{publisher-info}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#publisher-info}}
      template block text
    {{/publisher-info}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
