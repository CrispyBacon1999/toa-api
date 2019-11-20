"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RefStatus;
(function (RefStatus) {
    RefStatus[RefStatus["Unknown"] = -1] = "Unknown";
    RefStatus[RefStatus["NoAction"] = 0] = "NoAction";
    RefStatus[RefStatus["NoShow"] = 1] = "NoShow";
    RefStatus[RefStatus["YellowCard"] = 2] = "YellowCard";
    RefStatus[RefStatus["RedCard"] = 3] = "RedCard";
})(RefStatus || (RefStatus = {}));
exports.default = RefStatus;
