"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH_STRATEGIES = void 0;
const google_strategy_1 = require("./google.strategy");
const jwt_strategy_1 = require("./jwt.strategy");
const local_strategy_1 = require("./local.strategy");
exports.AUTH_STRATEGIES = [jwt_strategy_1.JwtStrategy, local_strategy_1.LocalStrategy, google_strategy_1.GoogleStrategy];
//# sourceMappingURL=index.js.map