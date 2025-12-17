/** @license Apache-2.0 */

'use strict';

/**
* Test if two single-precision floating-point numbers are approximately the same value within a specified number of ULPs (units in the last place).
*
* @module @stdlib/number-float32-base-assert-is-almost-same-value
*
* @example
* var EPS = require( '@stdlib/constants-float32-eps' );
* var isAlmostSameValue = require( '@stdlib/number-float32-base-assert-is-almost-same-value' );
*
* var bool = isAlmostSameValue( 1.0, 1.0+EPS, 1 );
* // returns true
*
* bool = isAlmostSameValue( 1.0+EPS, 1.0, 1 );
* // returns true
*
* bool = isAlmostSameValue( 1.0, 1.0+EPS+EPS, 1 );
* // returns false
*
* bool = isAlmostSameValue( 1.0, 1.0+EPS, 0 );
* // returns false
*
* bool = isAlmostSameValue( 0.0, -0.0, 0 );
* // returns false
*
* bool = isAlmostSameValue( 1.0, NaN, 1 );
* // returns false
*
* bool = isAlmostSameValue( NaN, NaN, 1 );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
