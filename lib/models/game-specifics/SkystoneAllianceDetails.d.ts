import { ISerializable } from '../ISerializable';
export declare enum Stone {
    'NONE' = 0,
    'STONE' = 1,
    'SKYSTONE' = 2
}
export default class SkystoneAllianceDetails implements ISerializable {
    private _autoStone1;
    private _autoStone2;
    private _autoStone3;
    private _autoStone4;
    private _autoStone5;
    private _autoStone6;
    private _autoDeliveredSkystones;
    private _autoDeliveredStones;
    private _autoReturned;
    private _firstReturnedIsSkystone;
    private _autoPlaced;
    private _foundationRepositioned;
    private _teleDelivered;
    private _teleReturned;
    private _telePlaced;
    private _robot1Nav;
    private _robot2Nav;
    private _robot1Parked;
    private _robot2Parked;
    private _robot1CapLevel;
    private _robot2CapLevel;
    private _foundationMoved;
    private _autoTransportPts;
    private _autoPlacedPts;
    private _repositionPts;
    private _navPts;
    private _teleTransportPts;
    private _telePlacedPts;
    private _towerBonus;
    private _cappingBonus;
    private _levelBonus;
    private _endRobotsParked;
    private _autoPts;
    private _auto;
    private _tele;
    private _end;
    private _penalty;
    constructor();
    toJSON(): object;
    fromJSON(json: any): SkystoneAllianceDetails;
    intToStone(num: number): Stone;
    get autoStone1(): Stone;
    set autoStone1(value: Stone);
    get autoStone2(): Stone;
    set autoStone2(value: Stone);
    get autoStone3(): Stone;
    set autoStone3(value: Stone);
    get autoStone4(): Stone;
    set autoStone4(value: Stone);
    get autoStone5(): Stone;
    set autoStone5(value: Stone);
    get autoStone6(): Stone;
    set autoStone6(value: Stone);
    get autoDeliveredSkystones(): number;
    set autoDeliveredSkystones(value: number);
    get autoDeliveredStones(): number;
    set autoDeliveredStones(value: number);
    get autoReturned(): number;
    set autoReturned(value: number);
    get firstReturnedIsSkystone(): boolean;
    set firstReturnedIsSkystone(value: boolean);
    get autoPlaced(): number;
    set autoPlaced(value: number);
    get foundationRepositioned(): boolean;
    set foundationRepositioned(value: boolean);
    get teleDelivered(): number;
    set teleDelivered(value: number);
    get teleReturned(): number;
    set teleReturned(value: number);
    get telePlaced(): number;
    set telePlaced(value: number);
    get robot1Nav(): boolean;
    set robot1Nav(value: boolean);
    get robot2Nav(): boolean;
    set robot2Nav(value: boolean);
    get robot1Parked(): boolean;
    set robot1Parked(value: boolean);
    get robot2Parked(): boolean;
    set robot2Parked(value: boolean);
    get robot1CapLevel(): number;
    set robot1CapLevel(value: number);
    get robot2CapLevel(): number;
    set robot2CapLevel(value: number);
    get foundationMoved(): boolean;
    set foundationMoved(value: boolean);
    get autoTransportPts(): number;
    set autoTransportPts(value: number);
    get autoPlacedPts(): number;
    set autoPlacedPts(value: number);
    get repositionPts(): number;
    set repositionPts(value: number);
    get navPts(): number;
    set navPts(value: number);
    get teleTransportPts(): number;
    set teleTransportPts(value: number);
    get telePlacedPts(): number;
    set telePlacedPts(value: number);
    get towerBonus(): number;
    set towerBonus(value: number);
    get cappingBonus(): number;
    set cappingBonus(value: number);
    get levelBonus(): number;
    set levelBonus(value: number);
    get endRobotsParked(): number;
    set endRobotsParked(value: number);
    get autoPts(): number;
    set autoPts(value: number);
    get auto(): number;
    set auto(value: number);
    get tele(): number;
    set tele(value: number);
    get end(): number;
    set end(value: number);
    get penalty(): number;
    set penalty(value: number);
}
