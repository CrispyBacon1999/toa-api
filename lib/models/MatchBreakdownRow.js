"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MatchBreakdownConstants {
    constructor() {
        this.trueValue = -1000;
        this.falseValue = -2000;
    }
}
exports.MatchBreakdownConstants = MatchBreakdownConstants;
class MatchBreakdownRow {
    constructor(isTitle, name, red, blue, points, velocityVortexParking, velocityVortexCapBall) {
        this.isTitle = isTitle;
        this.name = name;
        this.red = red;
        this.blue = blue;
        this.points = points;
        this.isVelocityVortexParking = velocityVortexParking;
        this.isVelocityVortexCapBall = velocityVortexCapBall;
        const constants = new MatchBreakdownConstants();
        this.redIcon = this.red === constants.trueValue ? 'check' : this.red === constants.falseValue ? 'close' : null;
        this.blueIcon = this.blue === constants.trueValue ? 'check' : this.blue === constants.falseValue ? 'close' : null;
    }
    getRedPoints() {
        if (this.isTitle) {
            return `${this.red} Points`;
        }
        else {
            return this.getString(this.red);
        }
    }
    getBluePoints() {
        if (this.isTitle) {
            return `${this.blue} Points`;
        }
        else {
            return this.getString(this.blue);
        }
    }
    getString(s) {
        if (this.isVelocityVortexParking) {
            return this.getVelocityVortexParkingString(s);
        }
        else if (this.isVelocityVortexCapBall) {
            return this.getVelocityVortexCapBallString(s);
        }
        else {
            const constants = new MatchBreakdownConstants();
            const isTrue = s === constants.trueValue;
            const isFalse = s === constants.falseValue;
            const isTrueFalse = isTrue || isFalse;
            const name = !isTrueFalse ? s : '';
            const pts = !isTrueFalse ? s * this.points : isTrue ? this.points : 0;
            return s !== 0 && !isFalse ? `${name} (${pts > 0 ? '+' : ''}${pts})` : isFalse ? '' : '0';
        }
    }
    getVelocityVortexParkingString(key) {
        switch (key) {
            case 1:
                return 'On Center Vortex (+5)';
            case 2:
                return 'Completely On Center Vortex (+10)';
            case 3:
                return 'On Corner Ramp (+5)';
            case 4:
                return 'Completely On Corner Ramp (+10)';
        }
        return 'Not Parked';
    }
    getVelocityVortexCapBallString(key) {
        switch (key) {
            case 1:
                return 'Low (+10)';
            case 2:
                return 'High (+20)';
            case 3:
                return 'Capping (+40)';
        }
        return 'Not Scored';
    }
}
exports.MatchBreakdownRow = MatchBreakdownRow;
function MatchBreakdownTitle(name, redScore, blueScore) {
    return new MatchBreakdownRow(true, name, redScore, blueScore, -1, false, false);
}
exports.MatchBreakdownTitle = MatchBreakdownTitle;
function MatchBreakdownField(name, red, blue, points) {
    return new MatchBreakdownRow(false, name, red, blue, points, false, false);
}
exports.MatchBreakdownField = MatchBreakdownField;
function MatchBreakdownVelocityVortexParkingField(name, red, blue) {
    return new MatchBreakdownRow(false, name, red, blue, -1, true, false);
}
exports.MatchBreakdownVelocityVortexParkingField = MatchBreakdownVelocityVortexParkingField;
function MatchBreakdownVelocityVortexCapBallField(name, red, blue) {
    return new MatchBreakdownRow(false, name, red, blue, -1, false, true);
}
exports.MatchBreakdownVelocityVortexCapBallField = MatchBreakdownVelocityVortexCapBallField;
function MatchBreakdownBoolField(name, red, blue, points) {
    const constants = new MatchBreakdownConstants();
    return new MatchBreakdownRow(false, name, red ? constants.trueValue : constants.falseValue, blue ? constants.trueValue : constants.falseValue, points, false, false);
}
exports.MatchBreakdownBoolField = MatchBreakdownBoolField;
