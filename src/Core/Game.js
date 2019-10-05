import * as Constants from "../Constants";
import { AssetManager } from "./AssetManager";
import { Canvas } from './Canvas';
import { Skier } from "../Entities/Skier";
import { ObstacleManager } from "../Entities/Obstacles/ObstacleManager";
import { Rect } from './Utils';
import { Rhino } from "../Entities/Rhino";

export class Game {
    gameWindow = null;
    score = 0;
    gameOver = false;

    constructor() {
        this.assetManager = new AssetManager();
        this.canvas = new Canvas(Constants.GAME_WIDTH, Constants.GAME_HEIGHT);
        this.skier = new Skier(0, 0);
        this.rhino = new Rhino();
        this.obstacleManager = new ObstacleManager();

        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    init() {
        this.obstacleManager.placeInitialObstacles();
    }

    async load() {
        await this.assetManager.loadAssets(Constants.ASSETS);
    }

    run() {
        this.canvas.clearCanvas();

        this.updateGameWindow();
        this.drawGameWindow();

        requestAnimationFrame(this.run.bind(this));
    }

    updateGameWindow() {
        this.skier.move();
        this.rhino.chase(this.skier);

        const previousGameWindow = this.gameWindow;
        this.calculateGameWindow();
        this.calculateScore();

        this.obstacleManager.placeNewObstacle(this.gameWindow, previousGameWindow);

        this.skier.checkIfSkierHitObstacle(this.obstacleManager, this.assetManager);
        this.rhino.checkIfRhinoCaughtSkier(this.skier, this.assetManager, this);
    }
    
    drawGameWindow() {
        this.canvas.setDrawOffset(this.gameWindow.left, this.gameWindow.top);
        this.canvas.drawScore(this.score);
        
        if (!this.gameOver) {
            this.skier.draw(this.canvas, this.assetManager);
        }
        this.rhino.draw(this.canvas, this.assetManager);

        this.obstacleManager.drawObstacles(this.canvas, this.assetManager);
    }

    calculateGameWindow() {
        const skierPosition = this.skier.getPosition();
        const left = skierPosition.x - (Constants.GAME_WIDTH / 2);
        const top = skierPosition.y - (Constants.GAME_HEIGHT / 2);

        this.gameWindow = new Rect(left, top, left + Constants.GAME_WIDTH, top + Constants.GAME_HEIGHT);
    }

    calculateScore() {
        const skierDistance = this.skier.getPosition().y * Constants.SCORE_MULTIPLIER;
        if (skierDistance > this.score) {
            this.score +=  Math.floor(skierDistance - this.score);
        }
    }
    
    endGame() {
        setTimeout(() => {
            this.gameOver = true;
            this.rhino.eatSkier();
        }, 500);
        this.skier.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
        this.canvas.drawGameOver();
    }

    handleKeyDown(event) {
        if (!this.skier.isJumping() && !this.gameOver) {
            switch(event.code) {
                case Constants.KEYS.LEFT:
                case Constants.KEYS.A:
                    this.skier.turnLeft();
                    break;
                case Constants.KEYS.RIGHT:
                case Constants.KEYS.D:
                    this.skier.turnRight();
                    break;
                case Constants.KEYS.UP:
                case Constants.KEYS.W:
                    this.skier.turnUp();
                    break;
                case Constants.KEYS.DOWN:
                case Constants.KEYS.S:
                    this.skier.turnDown();
                    break;
                case Constants.KEYS.SPACE:
                    this.skier.jump();
                    break;
                case Constants.KEYS.F:
                    this.skier.speedUp();
                    break;
            }
        }
    }
}