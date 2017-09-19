import { inspect } from 'ember-utils';
import Adapter from './adapter';

/**
  This class implements the methods defined by Ember.Test.Adapter for the
  QUnit testing framework.

  @module @ember.testing
  @class qunit_adapter
  @namespace @ember.testing
  @extends @ember.testing.adapter
  @public
*/
export default Adapter.extend({
  asyncStart() {
    QUnit.stop();
  },
  asyncEnd() {
    QUnit.start();
  },
  exception(error) {
    ok(false, inspect(error));
  }
});
