import { Entity } from './Entity';
import * as Constants from "../Constants";

export class Rhino extends Entity {
    assetName = Constants.RHINO_RUN_LEFT;
    chaseDeficit = Constants.RHINO_STARTING_DEFICIT;
    skierPosition;
    runInterval;

    constructor(x = -1000, y = -1000) {
        super(x, y);
        this.runInterval = setInterval(() => {
            this.assetName = this.assetName === Constants.RHINO_RUN_LEFT_2 ? Constants.RHINO_RUN_LEFT : Constants.RHINO_RUN_LEFT_2;
        }, 250);
    }

    chase(skier) {
        this.skierPosition = skier.getPosition();
        this.calculatePosition();
    }

    calculatePosition() {
        if (this.skierPosition.y > Constants.RHINO_STARTING_HEIGHT && this.chaseDeficit > this.caughtDeficit) {
            this.x = this.skierPosition.x;
            this.y = this.skierPosition.y - this.chaseDeficit;
            this.chaseDeficit--;
        }
    }

    checkIfRhinoCaughtSkier(skier, assetManager, game) {
        const skierAsset = assetManager.getAsset(skier.assetName);
        this.caughtDeficit = skierAsset.height / 2;
        const rhinoCaughtSkier = this.chaseDeficit <= this.caughtDeficit;

        if (rhinoCaughtSkier) {
            game.endGame();
            clearInterval(this.runInterval);
        }
    }

    eatSkier() {
        const eatingSkier = Constants.RHINO_EAT_ASSETS.includes(this.assetName);
        if (!eatingSkier) {
            Constants.RHINO_EAT_ASSETS.forEach((asset, index) => {
                setTimeout(() => this.assetName = asset, 300 * index);
            })
        }
    }
}