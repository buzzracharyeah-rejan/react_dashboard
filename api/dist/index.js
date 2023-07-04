"use strict";

var _express = _interopRequireDefault(require("express"));
var _helmet = _interopRequireDefault(require("helmet"));
var _morgan = _interopRequireDefault(require("morgan"));
var _configs = require("./src/configs");
var _routes = require("./src/routes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = app();
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _helmet.default)());
app.use((0, _helmet.default)({
  crossOriginResourcePolicy: {
    policy: 'cross-origin'
  }
}));
app.use((0, _morgan.default)('dev'));
app.use(cors());

/* ROUTES */
app.use('/client', _routes.clientRoutes);
app.use('/general', _routes.generalRoutes);
app.use('/management', _routes.managementRoutes);
app.use('/sales', _routes.salesRoutes);
app.listen(_configs.configs.port, () => {
  console.log(`app is listening to PORT: ${_configs.configs.port}`);
});