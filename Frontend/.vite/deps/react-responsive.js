import {
  require_prop_types
} from "./chunk-X3MDYGI3.js";
import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  __commonJS,
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/css-mediaquery/index.js
var require_css_mediaquery = __commonJS({
  "node_modules/css-mediaquery/index.js"(exports) {
    "use strict";
    exports.match = matchQuery;
    exports.parse = parseQuery;
    var RE_MEDIA_QUERY = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i;
    var RE_MQ_EXPRESSION = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/;
    var RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/;
    var RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?$/;
    var RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
    function matchQuery(mediaQuery, values) {
      return parseQuery(mediaQuery).some(function(query) {
        var inverse = query.inverse;
        var typeMatch = query.type === "all" || values.type === query.type;
        if (typeMatch && inverse || !(typeMatch || inverse)) {
          return false;
        }
        var expressionsMatch = query.expressions.every(function(expression) {
          var feature = expression.feature, modifier = expression.modifier, expValue = expression.value, value = values[feature];
          if (!value) {
            return false;
          }
          switch (feature) {
            case "orientation":
            case "scan":
              return value.toLowerCase() === expValue.toLowerCase();
            case "width":
            case "height":
            case "device-width":
            case "device-height":
              expValue = toPx(expValue);
              value = toPx(value);
              break;
            case "resolution":
              expValue = toDpi(expValue);
              value = toDpi(value);
              break;
            case "aspect-ratio":
            case "device-aspect-ratio":
            case /* Deprecated */
            "device-pixel-ratio":
              expValue = toDecimal(expValue);
              value = toDecimal(value);
              break;
            case "grid":
            case "color":
            case "color-index":
            case "monochrome":
              expValue = parseInt(expValue, 10) || 1;
              value = parseInt(value, 10) || 0;
              break;
          }
          switch (modifier) {
            case "min":
              return value >= expValue;
            case "max":
              return value <= expValue;
            default:
              return value === expValue;
          }
        });
        return expressionsMatch && !inverse || !expressionsMatch && inverse;
      });
    }
    function parseQuery(mediaQuery) {
      return mediaQuery.split(",").map(function(query) {
        query = query.trim();
        var captures = query.match(RE_MEDIA_QUERY), modifier = captures[1], type2 = captures[2], expressions = captures[3] || "", parsed = {};
        parsed.inverse = !!modifier && modifier.toLowerCase() === "not";
        parsed.type = type2 ? type2.toLowerCase() : "all";
        expressions = expressions.match(/\([^\)]+\)/g) || [];
        parsed.expressions = expressions.map(function(expression) {
          var captures2 = expression.match(RE_MQ_EXPRESSION), feature = captures2[1].toLowerCase().match(RE_MQ_FEATURE);
          return {
            modifier: feature[1],
            feature: feature[2],
            value: captures2[2]
          };
        });
        return parsed;
      });
    }
    function toDecimal(ratio) {
      var decimal = Number(ratio), numbers;
      if (!decimal) {
        numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/);
        decimal = numbers[1] / numbers[2];
      }
      return decimal;
    }
    function toDpi(resolution) {
      var value = parseFloat(resolution), units = String(resolution).match(RE_RESOLUTION_UNIT)[1];
      switch (units) {
        case "dpcm":
          return value / 2.54;
        case "dppx":
          return value * 96;
        default:
          return value;
      }
    }
    function toPx(length) {
      var value = parseFloat(length), units = String(length).match(RE_LENGTH_UNIT)[1];
      switch (units) {
        case "em":
          return value * 16;
        case "rem":
          return value * 16;
        case "cm":
          return value * 96 / 2.54;
        case "mm":
          return value * 96 / 2.54 / 10;
        case "in":
          return value * 96;
        case "pt":
          return value * 72;
        case "pc":
          return value * 72 / 12;
        default:
          return value;
      }
    }
  }
});

// node_modules/matchmediaquery/index.js
var require_matchmediaquery = __commonJS({
  "node_modules/matchmediaquery/index.js"(exports, module) {
    "use strict";
    var staticMatch = require_css_mediaquery().match;
    var dynamicMatch = typeof window !== "undefined" ? window.matchMedia : null;
    function Mql(query, values, forceStatic) {
      var self = this;
      var mql;
      if (dynamicMatch && !forceStatic) mql = dynamicMatch.call(window, query);
      if (mql) {
        this.matches = mql.matches;
        this.media = mql.media;
        mql.addListener(update);
      } else {
        this.matches = staticMatch(query, values);
        this.media = query;
      }
      this.addListener = addListener;
      this.removeListener = removeListener;
      this.dispose = dispose;
      function addListener(listener) {
        if (mql) {
          mql.addListener(listener);
        }
      }
      function removeListener(listener) {
        if (mql) {
          mql.removeListener(listener);
        }
      }
      function update(evt) {
        self.matches = evt.matches;
        self.media = evt.media;
      }
      function dispose() {
        if (mql) {
          mql.removeListener(update);
        }
      }
    }
    function matchMedia2(query, values, forceStatic) {
      return new Mql(query, values, forceStatic);
    }
    module.exports = matchMedia2;
  }
});

// node_modules/react-responsive/dist/esm/index.js
var import_react = __toESM(require_react());
var import_matchmediaquery = __toESM(require_matchmediaquery());

// node_modules/hyphenate-style-name/index.js
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};
function toHyphenLower(match) {
  return "-" + match.toLowerCase();
}
function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name];
  }
  var hName = name.replace(uppercasePattern, toHyphenLower);
  return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
}
var hyphenate_style_name_default = hyphenateStyleName;

// node_modules/shallow-equal/dist/index.modern.mjs
function shallowEqualObjects(objA, objB) {
  if (objA === objB) {
    return true;
  }
  if (!objA || !objB) {
    return false;
  }
  const aKeys = Object.keys(objA);
  const bKeys = Object.keys(objB);
  const len = aKeys.length;
  if (bKeys.length !== len) {
    return false;
  }
  for (let i = 0; i < len; i++) {
    const key = aKeys[i];
    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
      return false;
    }
  }
  return true;
}

// node_modules/react-responsive/dist/esm/index.js
var import_prop_types = __toESM(require_prop_types());
var stringOrNumber = import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]);
var types = {
  all: import_prop_types.default.bool,
  grid: import_prop_types.default.bool,
  aural: import_prop_types.default.bool,
  braille: import_prop_types.default.bool,
  handheld: import_prop_types.default.bool,
  print: import_prop_types.default.bool,
  projection: import_prop_types.default.bool,
  screen: import_prop_types.default.bool,
  tty: import_prop_types.default.bool,
  tv: import_prop_types.default.bool,
  embossed: import_prop_types.default.bool
};
var matchers = {
  orientation: import_prop_types.default.oneOf(["portrait", "landscape"]),
  scan: import_prop_types.default.oneOf(["progressive", "interlace"]),
  aspectRatio: import_prop_types.default.string,
  deviceAspectRatio: import_prop_types.default.string,
  height: stringOrNumber,
  deviceHeight: stringOrNumber,
  width: stringOrNumber,
  deviceWidth: stringOrNumber,
  color: import_prop_types.default.bool,
  colorIndex: import_prop_types.default.bool,
  monochrome: import_prop_types.default.bool,
  resolution: stringOrNumber,
  type: Object.keys(types)
};
var { type, ...featureMatchers } = matchers;
var features = {
  minAspectRatio: import_prop_types.default.string,
  maxAspectRatio: import_prop_types.default.string,
  minDeviceAspectRatio: import_prop_types.default.string,
  maxDeviceAspectRatio: import_prop_types.default.string,
  minHeight: stringOrNumber,
  maxHeight: stringOrNumber,
  minDeviceHeight: stringOrNumber,
  maxDeviceHeight: stringOrNumber,
  minWidth: stringOrNumber,
  maxWidth: stringOrNumber,
  minDeviceWidth: stringOrNumber,
  maxDeviceWidth: stringOrNumber,
  minColor: import_prop_types.default.number,
  maxColor: import_prop_types.default.number,
  minColorIndex: import_prop_types.default.number,
  maxColorIndex: import_prop_types.default.number,
  minMonochrome: import_prop_types.default.number,
  maxMonochrome: import_prop_types.default.number,
  minResolution: stringOrNumber,
  maxResolution: stringOrNumber,
  ...featureMatchers
};
var all = { ...types, ...features };
var mq = {
  all,
  types,
  matchers,
  features
};
var negate = (cond) => `not ${cond}`;
var keyVal = (k, v) => {
  const realKey = hyphenate_style_name_default(k);
  if (typeof v === "number") {
    v = `${v}px`;
  }
  if (v === true) {
    return realKey;
  }
  if (v === false) {
    return negate(realKey);
  }
  return `(${realKey}: ${v})`;
};
var join = (conds) => conds.join(" and ");
var toQuery = (obj) => {
  const rules = [];
  Object.keys(mq.all).forEach((k) => {
    const v = obj[k];
    if (v != null) {
      rules.push(keyVal(k, v));
    }
  });
  return join(rules);
};
var Context = (0, import_react.createContext)(void 0);
var makeQuery = (settings) => settings.query || toQuery(settings);
var hyphenateKeys = (obj) => {
  if (!obj)
    return void 0;
  const keys = Object.keys(obj);
  return keys.reduce((result, key) => {
    result[hyphenate_style_name_default(key)] = obj[key];
    return result;
  }, {});
};
var useIsUpdate = () => {
  const ref = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    ref.current = true;
  }, []);
  return ref.current;
};
var useDevice = (deviceFromProps) => {
  const deviceFromContext = (0, import_react.useContext)(Context);
  const getDevice = () => hyphenateKeys(deviceFromProps) || hyphenateKeys(deviceFromContext);
  const [device, setDevice] = (0, import_react.useState)(getDevice);
  (0, import_react.useEffect)(() => {
    const newDevice = getDevice();
    if (!shallowEqualObjects(device, newDevice)) {
      setDevice(newDevice);
    }
  }, [deviceFromProps, deviceFromContext]);
  return device;
};
var useQuery = (settings) => {
  const getQuery = () => makeQuery(settings);
  const [query, setQuery] = (0, import_react.useState)(getQuery);
  (0, import_react.useEffect)(() => {
    const newQuery = getQuery();
    if (query !== newQuery) {
      setQuery(newQuery);
    }
  }, [settings]);
  return query;
};
var useMatchMedia = (query, device) => {
  const getMatchMedia = () => (0, import_matchmediaquery.default)(query, device || {}, !!device);
  const [mq2, setMq] = (0, import_react.useState)(getMatchMedia);
  const isUpdate = useIsUpdate();
  (0, import_react.useEffect)(() => {
    if (isUpdate) {
      const newMq = getMatchMedia();
      setMq(newMq);
      return () => {
        if (newMq) {
          newMq.dispose();
        }
      };
    }
  }, [query, device]);
  return mq2;
};
var useMatches = (mediaQuery) => {
  const [matches, setMatches] = (0, import_react.useState)(mediaQuery.matches);
  (0, import_react.useEffect)(() => {
    const updateMatches = (ev) => {
      setMatches(ev.matches);
    };
    mediaQuery.addListener(updateMatches);
    setMatches(mediaQuery.matches);
    return () => {
      mediaQuery.removeListener(updateMatches);
    };
  }, [mediaQuery]);
  return matches;
};
var useMediaQuery = (settings, device, onChange) => {
  const deviceSettings = useDevice(device);
  const query = useQuery(settings);
  if (!query)
    throw new Error("Invalid or missing MediaQuery!");
  const mq2 = useMatchMedia(query, deviceSettings);
  const matches = useMatches(mq2);
  const isUpdate = useIsUpdate();
  (0, import_react.useEffect)(() => {
    if (isUpdate && onChange) {
      onChange(matches);
    }
  }, [matches]);
  (0, import_react.useEffect)(() => () => {
    if (mq2) {
      mq2.dispose();
    }
  }, []);
  return matches;
};
var MediaQuery = ({ children, device, onChange, ...settings }) => {
  const matches = useMediaQuery(settings, device, onChange);
  if (typeof children === "function") {
    return children(matches);
  }
  return matches ? children : null;
};
export {
  Context,
  MediaQuery as default,
  toQuery,
  useMediaQuery
};
//# sourceMappingURL=react-responsive.js.map
