const head = document.querySelector('.head');
const tail = document.querySelector('.tail');
const snakeBody = document.querySelector('.body');
const snake = document.querySelector('.snake');
const root = document.documentElement;
let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
const twists = ['twist_down', 'twist_right', 'twist_slant_up', 'twist_slant_down',
    'twist_right', 'twist_curve', 'twist_left'
];
const moves = ['down', 'right', 'slantup', 'slantdown', 'right', 'curve', 'left'];

document.addEventListener('keyup', function (Event) {
    if (Event.key === "s") {
        head.style.animationName = 'twist_down';
        head.style.animationDuration = '1s';
        head.style.animtionIterationCount = '1';
        head.style.animationFillMode = 'forwards';
        document.addEventListener('keyup', (Event) => {
            count++;
            another(Event);
            return;
        });
        if (count === 0) { continue_down(); }
    }
    else if (Event.key === "w") {
        head.style.animationName = 'twist_up';
        head.style.animationDuration = '1s';
        head.style.animtionIterationCount = '1';
        head.style.animationFillMode = 'forwards';
        document.addEventListener('keyup', (Event) => {
            count2++;
            another(Event);
            return;
        });
        if (count2++) { continue_up(); }
        return;
    }
    else if (Event.key === "d") {
        head.style.animationName = 'twist_right';
        head.style.animationDuration = '1s';
        head.style.animtionIterationCount = '1';
        head.style.animationFillMode = 'forwards';
        document.addEventListener('keyup', (Event) => {
            count3++;
            another(Event);
            return;
        });
        if (count3 === 0) {
            continue_right();
        }
        return;
    }
    else if (Event.key === "a") {
        head.style.animationName = 'twist_left';
        head.style.animationDuration = '1s';
        head.style.animtionIterationCount = '1';
        head.style.animationFillMode = 'forwards';
        document.addEventListener('keyup', (Event) => {
            count4++;
            another(Event);
            return;

        });
        if (count4 == 0) {
            continue_left();
        }
        return;
    }
    else if (Event.key === "q") {
        head.style.animationName = 'twist_slant_up';
        head.style.animationDuration = '1s';
        head.style.animtionIterationCount = '1';
        head.style.animationFillMode = 'forwards';
        document.addEventListener('keyup', (Event) => {
            count5++;
            another(Event);
            return;
        });
        if (count5 === 0) {
            continue_slant();
        }
    }
});
function continue_slant() {
    head.addEventListener('animationend', () => {
        head.style.animationName = 'down';
        head.style.animationDuration = '10s';
        head.style.animtionIterationCount = '1';
        head.style.animationFillMode = 'forwards';
        return;
    })
};
function continue_down() {
    console.log("going down");
    head.addEventListener('animationend', () => {
        head.style.animationName = 'down';
        head.style.animationDuration = '10s';
        head.style.animtionIterationCount = '1';
        head.style.animationFillMode = 'forwards';
        return;
    })
}
function continue_right() {
    head.addEventListener('animationend', () => {
        head.style.animationName = 'right';
        head.style.animationDuration = '10s';
        head.style.animtionIterationCount = '1';
        head.style.animationFillMode = 'forwards';
        console.log("going right");
        return;
    })

};
function continue_left() {
    head.addEventListener('animationend', () => {
        head.style.animationName = 'left';
        head.style.animationDuration = '10s';
        head.style.animtionIterationCount = '1';
        head.style.animationFillMode = 'forwards';
        console.log("going left");
        return;
    })
}
function continue_up() {
    head.addEventListener('animationend', () => {
        head.style.animationName = 'up';
        head.style.animationDuration = '10s';
        head.style.animtionIterationCount = '1';
        head.style.animationFillMode = 'forwards';
        console.log("going up");
        return;
    })
}
function another(variable) {
    if (variable.key === "d") {
        console.log("Twisting right");
        head.style.animationName = 'twist_right';
        head.style.animationDuration = '1s';
        head.style.animtionIterationCount = '1';
        head.style.animationFillMode = 'forwards';
        continue_right();
        return;

    }
    else if (variable.key === "s") {
        console.log("Twisting down");
        head.style.animationName = 'twist_down';
        head.style.animationDuration = '1s';
        head.style.animtionIterationCount = '1';
        head.style.animationFillMode = 'forwards';
        continue_down();
        return;
    }
    else if (variable.key === "a") {
        console.log("Twisting left");
        head.style.animationName = 'twist_right';
        head.style.animationDuration = '1s';
        head.style.animtionIterationCount = '1';
        head.style.animationFillMode = 'forwards';
        continue_left();
        return;
    }
    else if (variable.key === "w") {
        //root.style.setProperty('--from-top', `${y}px`);
        console.log("Twisting up");
        head.style.animationName = 'twist_up';
        head.style.animationDuration = '1s';
        head.style.animtionIterationCount = '1';
        head.style.animationFillMode = 'forwards';
        continue_up();
        return;
    }
}