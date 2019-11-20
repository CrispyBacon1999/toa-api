"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const api_endpoint = "https://theorangealliance.com/api";
class API {
    constructor(api_key, application_name) {
        this._api_key = api_key;
        this._app_name = application_name;
    }
    headers() {
        return {
            "Content-Type": "application/json",
            "X-TOA-Key": this._api_key,
            "X-Application-Origin": this._app_name
        };
    }
    fetch(url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (url.charAt(0) !== "/") {
                // If there is no leading slash, add one
                url = "/" + url;
            }
            return yield axios_1.default.get(api_endpoint + url, { headers: this.headers() });
        });
    }
    getAPI() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.fetch("/");
        });
    }
}
exports.default = API;
