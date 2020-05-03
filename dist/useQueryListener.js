"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var queryListener = function queryListener(mapQueryCallback) {
  return mapQueryCallback.map(function (queryCallbackObj) {
    var query = window.matchMedia(queryCallbackObj.mediaQuery);
    queryCallbackObj.callback(query);
    query.addEventListener('change', queryCallbackObj.callback);
    return {
      query: query,
      callback: queryCallbackObj.callback
    };
  });
};

function useRenderMediaQuery(mapQueryCallback) {
  (0, _react.useEffect)(function () {
    var queries = queryListener(mapQueryCallback);
    return function cleanup() {
      queries.map(function (_ref) {
        var query = _ref.query,
            callback = _ref.callback;
        return query.removeEventListener('change', callback);
      });
    };
  }, [mapQueryCallback]);
}

var _default = useRenderMediaQuery;
exports["default"] = _default;