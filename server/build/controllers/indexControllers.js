"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexController = void 0;
class IndexControllers {
    index(req, resp) {
        resp.send('Hello !!!');
    }
}
exports.IndexController = new IndexControllers();
