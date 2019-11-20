"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchType;
(function (MatchType) {
    MatchType[MatchType["Unknown"] = -1] = "Unknown";
    MatchType[MatchType["PracticeMatch"] = 0] = "PracticeMatch";
    MatchType[MatchType["QualificationMatch"] = 1] = "QualificationMatch";
    MatchType[MatchType["QuarterfinalSeries1"] = 21] = "QuarterfinalSeries1";
    MatchType[MatchType["QuarterfinalSeries2"] = 22] = "QuarterfinalSeries2";
    MatchType[MatchType["QuarterfinalSeries3"] = 23] = "QuarterfinalSeries3";
    MatchType[MatchType["QuarterfinalSeries4"] = 24] = "QuarterfinalSeries4";
    MatchType[MatchType["SemifinalsSeries1"] = 31] = "SemifinalsSeries1";
    MatchType[MatchType["SemifinalsSeries2"] = 32] = "SemifinalsSeries2";
    MatchType[MatchType["Finals"] = 4] = "Finals";
})(MatchType || (MatchType = {}));
exports.default = MatchType;
