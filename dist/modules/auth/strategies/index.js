"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH_STRATEGIES = void 0;
const jwt_strategy_1 = require("./jwt.strategy");
const local_strategy_1 = require("./local.strategy");
exports.AUTH_STRATEGIES = [jwt_strategy_1.JwtStrategy, local_strategy_1.LocalStrategy];
//# sourceMappingURL=index.js.map