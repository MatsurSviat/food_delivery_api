"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUBLIC_PATH = exports.ROOT = void 0;
const path_1 = require("path");
exports.ROOT = (0, path_1.resolve)(__dirname, '../'.repeat(3));
exports.PUBLIC_PATH = (0, path_1.resolve)(exports.ROOT, 'public');
//# sourceMappingURL=paths.js.map