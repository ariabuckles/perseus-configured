import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import mathquill from "mathquill";
import katex from "katex";
import classnames from "classnames";
import _ from "underscore";

// NOTE: We don't import the CSS here. Instead, applications can do it separately:
//       import "perseus-configured/lib/khan-exercises.css";
//       import "perseus-configured/lib/perseus.css";
// TODO: Consider a build step to make it one CSS file, and include Mathquill too?

// Add some backfills to make React 17 behave like old-style React.
// TODO: Update Perseus to use these libraries directly, instead. They're not perfect
//       backfills and I'm not sure how reliable this is!
React.createClass = createReactClass;
React.PropTypes = PropTypes;
React.DOM = {
  span: (props) => React.createElement("span", props),
  input: (props) => React.createElement("input", props),
};

window.jQuery = window.$ = $;
window.katex = katex;
window.mathquill = mathquill;
window.classnames = classnames;
window._ = _;

// Perseus bundles its own copy of Raphael but throws if Raphael isn't already
// defined, because Raphael does a global `Raphael = ...` assignment but we
// load it in strict mode
window.Raphael = undefined;

const PureRenderMixin = require("react-addons-pure-render-mixin");
const CSSTransitionGroup = require("react-addons-css-transition-group");
const CreateFragment = require("react-addons-create-fragment");

window.React = React;
window.ReactDOM = ReactDOM;

window.React.__internalAddons = {
  createFragment: CreateFragment,
};

window["underscore"] = window._;
window["react"] = window.React;
window["react-dom"] = window.ReactDOM;
window["classnames"] = window.classNames;
window["jquery"] = window.jQuery;
window["react-addons-pure-render-mixin"] = PureRenderMixin;
window["react-addons-css-transition-group"] = CSSTransitionGroup;

/**
 * Sets up the basic environment for running Perseus in.
 */

window.icu = {
  getDecimalFormatSymbols: function () {
    return {
      decimal_separator: ".",
      grouping_separator: ",",
      minus: "-",
    };
  },
};

window.KhanUtil = {
  debugLog: function () {},
  localeToFixed: function (num, precision) {
    return num.toFixed(precision);
  },
};

window.Exercises = {
  localMode: true,

  useKatex: true,
  khanExercisesUrlBase: "../",

  getCurrentFramework: function () {
    return "khan-exercises";
  },
  PerseusBridge: {
    cleanupProblem: function () {
      return false;
    },
  },
};

window.Khan = {
  Util: window.KhanUtil,
  error: function () {},
  query: { debug: "" },
  imageBase: "/images/",
};
