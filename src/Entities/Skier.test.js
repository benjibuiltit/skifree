import "babel-polyfill";
import { Skier } from './Skier';
import * as Constants from "../Constants";

const skier = new Skier(0, 0);

describe('skier', () => {
    it('has a default direction of down', () => {
        expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.DOWN);
    });
    
    it('keeps direction in range', () => {
        const minDirection = Math.min(...Object.values(Constants.SKIER_DIRECTIONS));
        const maxDirection = Math.max(...Object.values(Constants.SKIER_DIRECTIONS));
    
        for (let direction in Constants.SKIER_DIRECTIONS) {
            skier.turnLeft();
        }

        for (let direction in Constants.SKIER_DIRECTIONS) {
            skier.turnRight();
        }

        expect(skier.direction > minDirection && skier.direction < maxDirection).toBe(true);
    });
    
    it('moves in correct direction', () => {
        skier.moveSkierDown = jest.fn();
        skier.moveSkierLeftDown = jest.fn();
        skier.moveSkierRightDown = jest.fn();

        Object.values(Constants.SKIER_DIRECTIONS).forEach(direction => {
            skier.setDirection(direction);
            skier.move();
        });

        expect(skier.moveSkierDown).toHaveBeenCalledTimes(2);
        expect(skier.moveSkierLeftDown).toHaveBeenCalledTimes(1);
        expect(skier.moveSkierRightDown).toHaveBeenCalledTimes(1);
    })
})