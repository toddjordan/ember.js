import isEmpty from './is_empty';
/**
@module @ember.utils
 */

/**
  A value is blank if it is empty or a whitespace string.

  ```javascript
  Ember.isBlank();                // true
  Ember.isBlank(null);            // true
  Ember.isBlank(undefined);       // true
  Ember.isBlank('');              // true
  Ember.isBlank([]);              // true
  Ember.isBlank('\n\t');          // true
  Ember.isBlank('  ');            // true
  Ember.isBlank({});              // false
  Ember.isBlank('\n\t Hello');    // false
  Ember.isBlank('Hello world');   // false
  Ember.isBlank([1,2,3]);         // false
  ```

  @method isBlank
  @for utils
  @namespace @ember
  @static
  @param {Object} obj Value to test
  @return {Boolean}
  @since 1.5.0
  @public
*/
export default function isBlank(obj) {
  return isEmpty(obj) || (typeof obj === 'string' && /\S/.test(obj) === false);
}
