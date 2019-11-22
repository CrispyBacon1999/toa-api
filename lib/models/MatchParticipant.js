"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MatchParticipant {
    constructor() {
        this._matchParticipantKey = "";
        this._matchKey = "";
        this._teamKey = "";
        this._teamNumber = -1;
        this._station = 0;
        this._stationStatus = 0;
        this._refStatus = 0;
    }
    toJSON() {
        return {
            match_participant_key: this.matchParticipantKey,
            match_key: this.matchKey,
            team_key: this.teamKey,
            team_number: this.teamNumber,
            station: this.station,
            station_status: this.stationStatus,
            ref_status: this.refStatus
        };
    }
    fromJSON(json) {
        const participant = new MatchParticipant();
        participant.matchParticipantKey = json.match_participant_key;
        participant.matchKey = json.match_key;
        participant.teamKey = json.team_key;
        participant.teamNumber = json.team_number;
        participant.station = json.station;
        participant.stationStatus = json.station_status;
        participant.refStatus = json.ref_status;
        return participant;
    }
    get matchParticipantKey() {
        return this._matchParticipantKey;
    }
    set matchParticipantKey(value) {
        this._matchParticipantKey = value;
    }
    get matchKey() {
        return this._matchKey;
    }
    set matchKey(value) {
        this._matchKey = value;
    }
    get teamKey() {
        return this._teamKey;
    }
    set teamKey(value) {
        this._teamKey = value;
    }
    get teamNumber() {
        return this._teamNumber;
    }
    set teamNumber(value) {
        this._teamNumber = value;
    }
    get station() {
        return this._station;
    }
    set station(value) {
        this._station = value;
    }
    get stationStatus() {
        return this._stationStatus;
    }
    set stationStatus(value) {
        this._stationStatus = value;
    }
    get refStatus() {
        return this._refStatus;
    }
    set refStatus(value) {
        this._refStatus = value;
    }
}
exports.default = MatchParticipant;
