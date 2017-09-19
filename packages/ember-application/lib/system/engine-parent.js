/**
@module @ember.application
 */

import { symbol } from 'ember-utils';

export const ENGINE_PARENT = symbol('ENGINE_PARENT');

/**
  `getEngineParent` retrieves an engine instance's parent instance.

  @method getEngineParent
  @param {@ember.application.engine.instance} engine An engine instance.
  @return {@ember.application.engine.instance} The parent engine instance.
  @static
  @for engine
  @namespace @ember.application
  @public
*/
export function getEngineParent(engine) {
  return engine[ENGINE_PARENT];
}

/**
  `setEngineParent` sets an engine instance's parent instance.

  @method setEngineParent
  @param {@ember.application.engine.instance} engine An engine instance.
  @param {@ember.application.engine.instance} parent The parent engine instance.
  @static
  @for engine
  @private
*/
export function setEngineParent(engine, parent) {
  engine[ENGINE_PARENT] = parent;
}
