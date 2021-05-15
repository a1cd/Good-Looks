"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Initialize butotn with users's prefered color
var changeColor = document.getElementById("changeColor");
chrome.storage.sync.get("color", function (_ref) {
  var color = _ref.color;
  changeColor.style.backgroundColor = color;
}); // When the button is clicked, inject setPageBackgroundColor into current page

changeColor.addEventListener("click", function _callee() {
  var _ref2, _ref3, tab;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(chrome.tabs.query({
            active: true,
            currentWindow: true
          }));

        case 2:
          _ref2 = _context.sent;
          _ref3 = _slicedToArray(_ref2, 1);
          tab = _ref3[0];
          chrome.scripting.executeScript({
            target: {
              tabId: tab.id
            },
            "function": setPageBackgroundColor
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}); // The body of this function will be execuetd as a content script inside the
// current page

function setPageBackgroundColor() {
  chrome.storage.sync.get("color", function (_ref4) {
    var color = _ref4.color;
    document.body.style.backgroundColor = color;
  });
}