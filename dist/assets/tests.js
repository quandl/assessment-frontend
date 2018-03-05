'use strict';

define('assessment-frontend/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('models/fixtures/sample-data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/fixtures/sample-data.js should pass ESLint\n\n');
  });

  QUnit.test('pods/home/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/home/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/products/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/products/index/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/products/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/products/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/products/show/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/products/show/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/products/show/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/products/show/route.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define('assessment-frontend/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('assessment-frontend/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'assessment-frontend/tests/helpers/start-app', 'assessment-frontend/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('assessment-frontend/tests/helpers/start-app', ['exports', 'assessment-frontend/app', 'assessment-frontend/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('assessment-frontend/tests/test-helper', ['assessment-frontend/app', '@ember/test-helpers', 'ember-qunit'], function (_app, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create({ autoboot: false }));

  (0, _emberQunit.start)();
});
define('assessment-frontend/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/product/adapter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/product/adapter-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/product/model-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/product/model-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/product/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/product/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/products/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/products/route-test.js should pass ESLint\n\n');
  });
});
define('assessment-frontend/tests/unit/pods/product/adapter-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:product', 'Unit | Adapter | product', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('assessment-frontend/tests/unit/pods/product/model-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('product', 'Unit | Model | product', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('assessment-frontend/tests/unit/pods/product/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:product', 'Unit | Route | product', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('assessment-frontend/tests/unit/pods/products/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:products', 'Unit | Route | products', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('assessment-frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
