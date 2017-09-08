// @flow
// Hi! Import me instead of src/lib/perseus.js directly.

import './perseus-globals.js';
import './lib/i18n.js';
import './lib/kas.js';

const Perseus = require('./lib/perseus.js');

Perseus.init({
  skipMathJax: true,
});

export default Perseus;
