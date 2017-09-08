import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import mathquill from 'mathquill';
import katex from 'katex';
import classnames from 'classnames';
import './lib/khan-exercises.css';
import './lib/perseus.css';
import _ from 'underscore';

window.jQuery = (window.$ = $);
window.katex = katex;
window.mathquill = mathquill;
window.classnames = classnames;
window._ = _;

// Perseus bundles its own copy of Raphael but throws if Raphael isn't already
// defined, because Raphael does a global `Raphael = ...` assignment but we
// load it in strict mode
window.Raphael = undefined;

const PureRenderMixin = require('react-addons-pure-render-mixin');
const CSSTransitionGroup = require('react-addons-css-transition-group');
const CreateFragment = require('react-addons-create-fragment');

window.React = React;
window.ReactDOM = ReactDOM;

window.React.__internalAddons = {
  createFragment: CreateFragment,
};

window['underscore'] = window._;
window['react'] = window.React;
window['react-dom'] = window.ReactDOM;
window['classnames'] = window.classNames;
window['jquery'] = window.jQuery;
window['react-addons-pure-render-mixin'] = PureRenderMixin;
window['react-addons-css-transition-group'] = CSSTransitionGroup;

/**
 * Sets up the basic environment for running Perseus in.
 */

window.icu = {
  getDecimalFormatSymbols: function() {
    return {
      decimal_separator: '.',
      grouping_separator: ',',
      minus: '-',
    };
  },
};

window.KhanUtil = {
  debugLog: function() {},
  localeToFixed: function(num, precision) {
    return num.toFixed(precision);
  },
};

window.Exercises = {
  localMode: true,

  useKatex: true,
  khanExercisesUrlBase: '../',

  getCurrentFramework: function() {
    return 'khan-exercises';
  },
  PerseusBridge: {
    cleanupProblem: function() {
      return false;
    },
  },
};

window.Khan = {
    Util: window.KhanUtil,
    error: function() {},
    query: {debug: ""},
    imageBase: "/images/",
};

