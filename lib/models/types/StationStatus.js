"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StationStatus;
(function (StationStatus) {
    StationStatus[StationStatus["Unknown"] = -1] = "Unknown";
    StationStatus[StationStatus["Surrogate"] = 0] = "Surrogate";
    StationStatus[StationStatus["Normal"] = 1] = "Normal";
    StationStatus[StationStatus["SitOut"] = 2] = "SitOut";
})(StationStatus || (StationStatus = {}));
exports.default = StationStatus;
