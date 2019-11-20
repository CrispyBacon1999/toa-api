"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StreamType;
(function (StreamType) {
    StreamType[StreamType["Unknown"] = -1] = "Unknown";
    StreamType[StreamType["YouTube"] = 0] = "YouTube";
    StreamType[StreamType["Twitch"] = 1] = "Twitch";
    StreamType[StreamType["Custom"] = 3] = "Custom";
})(StreamType || (StreamType = {}));
exports.default = StreamType;
