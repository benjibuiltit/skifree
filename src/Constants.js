export const GAME_WIDTH = window.innerWidth;
export const GAME_HEIGHT = window.innerHeight;

export const SKIER_CRASH = 'skierCrash';
export const SKIER_LEFT = 'skierLeft';
export const SKIER_LEFTDOWN = 'skierLeftDown';
export const SKIER_DOWN = 'skierDown';
export const SKIER_RIGHTDOWN = 'skierRightDown';
export const SKIER_RIGHT = 'skierRight';
export const SKIER_JUMP = 'skierJump';

export const RHINO_RUN_LEFT = 'rhinoRunLeft';
export const RHINO_RUN_LEFT_2 = 'rhinoRunLeft2';
export const RHINO_LIFT = 'rhinoLift';
export const RHINO_LIFT_MOUTH_OPEN = 'rhinoLiftMouthOpen';
export const RHINO_LIFT_EAT_1 = 'rhinoLiftEat1';
export const RHINO_LIFT_EAT_2 = 'rhinoLiftEat2';
export const RHINO_LIFT_EAT_3 = 'rhinoLiftEat3';
export const RHINO_LIFT_EAT_4 = 'rhinoLiftEat4';
export const RHINO_EAT_ASSETS = [
    RHINO_LIFT,
    RHINO_LIFT_MOUTH_OPEN,
    RHINO_LIFT_EAT_1,
    RHINO_LIFT_EAT_2,
    RHINO_LIFT_EAT_3,
    RHINO_LIFT_EAT_4
];

export const TREE = 'tree';
export const TREE_CLUSTER = 'treeCluster';
export const ROCK1 = 'rock1';
export const ROCK2 = 'rock2';
export const JUMPABLE_OBSTACLES = [ROCK1, ROCK2];

export const SCORE_MULTIPLIER = .10;
export const SKIER_STARTING_SPEED = 10;
export const SKIER_MAX_SPEED = 20;
export const SKIER_DIAGONAL_SPEED_REDUCER = 1.4142;
export const RHINO_STARTING_DEFICIT = 500;
export const RHINO_STARTING_HEIGHT = 20000;

export const ASSETS = {
    [SKIER_CRASH]: 'img/skier_crash.png',
    [SKIER_LEFT]: 'img/skier_left.png',
    [SKIER_LEFTDOWN]: 'img/skier_left_down.png',
    [SKIER_DOWN]: 'img/skier_down.png',
    [SKIER_RIGHTDOWN]: 'img/skier_right_down.png',
    [SKIER_RIGHT]: 'img/skier_right.png',
    [SKIER_JUMP]: 'img/skier_jump_1.png',

    [RHINO_RUN_LEFT]: 'img/rhino_run_left.png',
    [RHINO_RUN_LEFT_2]: 'img/rhino_run_left_2.png',
    [RHINO_LIFT]: 'img/rhino_lift.png',
    [RHINO_LIFT_MOUTH_OPEN]: 'img/rhino_lift.png',
    [RHINO_LIFT_EAT_1]: 'img/rhino_lift_eat_1.png',
    [RHINO_LIFT_EAT_2]: 'img/rhino_lift_eat_2.png',
    [RHINO_LIFT_EAT_3]: 'img/rhino_lift_eat_3.png',
    [RHINO_LIFT_EAT_4]: 'img/rhino_lift_eat_4.png',

    [TREE] : 'img/tree_1.png',
    [TREE_CLUSTER] : 'img/tree_cluster.png',
    [ROCK1] : 'img/rock_1.png',
    [ROCK2] : 'img/rock_2.png'
};

export const SKIER_DIRECTIONS = {
    CRASH : 0,
    LEFT : 1,
    LEFT_DOWN : 2,
    DOWN : 3,
    RIGHT_DOWN : 4,
    RIGHT : 5,
    JUMP : 6
};

export const SKIER_DIRECTION_ASSET = {
    [SKIER_DIRECTIONS.CRASH] : SKIER_CRASH,
    [SKIER_DIRECTIONS.LEFT] : SKIER_LEFT,
    [SKIER_DIRECTIONS.LEFT_DOWN] : SKIER_LEFTDOWN,
    [SKIER_DIRECTIONS.DOWN] : SKIER_DOWN,
    [SKIER_DIRECTIONS.RIGHT_DOWN] : SKIER_RIGHTDOWN,
    [SKIER_DIRECTIONS.RIGHT] : SKIER_RIGHT,
    [SKIER_DIRECTIONS.JUMP] : SKIER_JUMP
};

export const KEYS = {
    LEFT : 'ArrowLeft',
    RIGHT : 'ArrowRight',
    UP : 'ArrowUp',
    DOWN : 'ArrowDown',
    W : 'KeyW',
    A : 'KeyA',
    S : 'KeyS',
    D : 'KeyD',
    F : 'KeyF',
    SPACE : 'Space'
};