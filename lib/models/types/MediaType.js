"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MediaTypeTeam;
(function (MediaTypeTeam) {
    MediaTypeTeam[MediaTypeTeam["Unknown"] = -1] = "Unknown";
    MediaTypeTeam[MediaTypeTeam["Github"] = 0] = "Github";
    MediaTypeTeam[MediaTypeTeam["CAD"] = 1] = "CAD";
    MediaTypeTeam[MediaTypeTeam["EngNotebook"] = 2] = "EngNotebook";
    MediaTypeTeam[MediaTypeTeam["RobotReveal"] = 3] = "RobotReveal";
    MediaTypeTeam[MediaTypeTeam["RobotImage"] = 4] = "RobotImage";
    MediaTypeTeam[MediaTypeTeam["TeamLogo"] = 5] = "TeamLogo";
})(MediaTypeTeam || (MediaTypeTeam = {}));
exports.MediaTypeTeam = MediaTypeTeam;
var MediaTypeEvent;
(function (MediaTypeEvent) {
    MediaTypeEvent[MediaTypeEvent["Unknown"] = -1] = "Unknown";
    MediaTypeEvent[MediaTypeEvent["PitMap"] = 0] = "PitMap";
    MediaTypeEvent[MediaTypeEvent["Schedule"] = 1] = "Schedule";
    MediaTypeEvent[MediaTypeEvent["VenueMap"] = 2] = "VenueMap";
    MediaTypeEvent[MediaTypeEvent["EventPhoto"] = 6] = "EventPhoto";
})(MediaTypeEvent || (MediaTypeEvent = {}));
exports.MediaTypeEvent = MediaTypeEvent;
