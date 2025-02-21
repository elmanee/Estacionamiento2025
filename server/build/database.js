"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const Keys_1 = __importDefault(require("./Keys"));
const pool = promise_1.default.createPool(Keys_1.default.database);
pool.getConnection().then(connection => {
    pool.releaseConnection(connection);
    console.log('DB in Conected');
});
exports.default = pool;
