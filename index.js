// Shim the __defineGetter__ support for older browsers
// Code applied from: https://github.com/thenikso/angular-autolayout/issues/2
try {
  if (!Object.prototype.__defineGetter__) {
    Object.defineProperty(Object.prototype, "__defineGetter__", {
      enumerable: false,
      configurable: true,
      value: function(name, func) {
        Object.defineProperty(this, name, {
          get: func,
          enumerable: true,
          configurable: true
        });
      }
    });

    Object.defineProperty(Object.prototype, "__defineSetter__", {
      enumerable: false,
      configurable: true,
      value: function(name, func) {
        Object.defineProperty(this, name, {
          set: func,
          enumerable: true,
          configurable: true
        });
      }
    });
  }
} catch(defPropException) {
  /*Do nothing if an exception occurs*/
};


var Generators = require("./lib/generator.js");
var Transform = require("./lib/transform.js");
var Signal = require("./lib/signal.js");
var Processing = require("./lib/processing.js");

module.exports = {
  Processing: Processing,
  Generators: Generators,
  Transform: Transform,
  toSpectrum: Transform.toSpectrum,
  toSignal: Transform.toSignal,
  signal: Signal,
  sine: Generators.sine,
  sines: Generators.sines,
  convolve: Processing.convolve,
  version: "0.0.3"
}
