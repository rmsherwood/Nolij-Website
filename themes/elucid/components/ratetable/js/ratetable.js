"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
  This module defines the React component that
  represents the homepage Connect block.

  Note: this module relies on the Contact
  Message REST module.
*/

/*
  A React component that accepts no properties
  and returns a JSX element that represents the
  Connect Form component.
*/
var RatetableComponent = function (_React$Component) {
  _inherits(RatetableComponent, _React$Component);

  function RatetableComponent(props) {
    _classCallCheck(this, RatetableComponent);

    return _possibleConstructorReturn(this, (RatetableComponent.__proto__ || Object.getPrototypeOf(RatetableComponent)).call(this, props));
  }

  /*
    Accepts no arguments and uses the Contact
    Message REST module to submit the Connect
    form.
  */


  _createClass(RatetableComponent, [{
    key: "submit",
    value: function submit() {}
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "TODO: Ratetable"
      );
    }
  }]);

  return RatetableComponent;
}(React.Component);

/*
  A React component that accepts no properties
  and returns a JSX element that represents the
  Connect block.
*/


function RatetableBlockComponent() {
  return React.createElement(
    "div",
    null,
    React.createElement(RatetableComponent, null)
  );
}

