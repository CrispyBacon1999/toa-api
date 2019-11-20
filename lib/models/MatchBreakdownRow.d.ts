export declare class MatchBreakdownConstants {
    trueValue: number;
    falseValue: number;
}
export declare class MatchBreakdownRow {
    isTitle: boolean;
    name: string;
    red: number;
    blue: number;
    points: number;
    isVelocityVortexParking: boolean;
    isVelocityVortexCapBall: boolean;
    redIcon: string;
    blueIcon: string;
    constructor(isTitle: boolean, name: string, red: number, blue: number, points: number, velocityVortexParking: boolean, velocityVortexCapBall: boolean);
    getRedPoints(): string;
    getBluePoints(): string;
    getString(s: number): string;
    getVelocityVortexParkingString(key: number): "On Center Vortex (+5)" | "Completely On Center Vortex (+10)" | "On Corner Ramp (+5)" | "Completely On Corner Ramp (+10)" | "Not Parked";
    getVelocityVortexCapBallString(key: number): "Low (+10)" | "High (+20)" | "Capping (+40)" | "Not Scored";
}
export declare function MatchBreakdownTitle(name: string, redScore: number, blueScore: number): MatchBreakdownRow;
export declare function MatchBreakdownField(name: string, red: number, blue: number, points: number): MatchBreakdownRow;
export declare function MatchBreakdownVelocityVortexParkingField(name: string, red: number, blue: number): MatchBreakdownRow;
export declare function MatchBreakdownVelocityVortexCapBallField(name: string, red: number, blue: number): MatchBreakdownRow;
export declare function MatchBreakdownBoolField(name: string, red: boolean, blue: boolean, points: number): MatchBreakdownRow;
