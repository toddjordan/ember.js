/**
@module @ember.routing
*/

/**
  Finds a controller instance.

  @for @ember.routing
  @static
  @method controllerFor
  @private
*/
export default function controllerFor(container, controllerName, lookupOptions) {
  return container.lookup(`controller:${controllerName}`, lookupOptions);
}
