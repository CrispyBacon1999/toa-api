"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Media {
    constructor() {
        this._mediaKey = "";
        this._eventKey = "";
        this._teamKey = "";
        this._mediaType = -1;
        this._isPrimary = false;
        this._mediaTitle = "";
        this._mediaLink = "";
    }
    toJSON() {
        return {
            media_key: this.mediaKey,
            event_key: this.eventKey,
            team_key: this.teamKey,
            media_type: this.mediaType,
            is_primary: this.isPrimary,
            title: this.mediaTitle,
            link: this.mediaLink
        };
    }
    fromJSON(json) {
        const award = new Media();
        award.mediaKey = json.media_key;
        award.eventKey = json.event_key;
        award.teamKey = json.team_key;
        award.mediaType = json.media_type;
        award.isPrimary = json.is_primary;
        award.mediaTitle = json.title;
        award.mediaLink = json.link;
        return award;
    }
    get mediaKey() {
        return this._mediaKey;
    }
    set mediaKey(value) {
        this._mediaKey = value;
    }
    get eventKey() {
        return this._eventKey;
    }
    set eventKey(value) {
        this._eventKey = value;
    }
    get teamKey() {
        return this._teamKey;
    }
    set teamKey(value) {
        this._teamKey = value;
    }
    get mediaType() {
        return this._mediaType;
    }
    set mediaType(value) {
        this._mediaType = value;
    }
    get isPrimary() {
        return this._isPrimary;
    }
    set isPrimary(value) {
        this._isPrimary = value;
    }
    get mediaTitle() {
        return this._mediaTitle;
    }
    set mediaTitle(value) {
        this._mediaTitle = value;
    }
    get mediaLink() {
        return this._mediaLink;
    }
    set mediaLink(value) {
        this._mediaLink = value;
    }
}
exports.default = Media;
