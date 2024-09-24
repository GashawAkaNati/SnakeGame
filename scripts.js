const head = document.querySelector('.head');
const tail = document.querySelector('.tail');
const snakeBody = document.querySelector('.body');
const snake = document.querySelector('.snake');
const rect = head.getBoundingClientRect();
let keyFramesArray = getAllKeyframes();
let keyrules;
let previousEvent;
document.documentElement.style.setProperty('--element-top', `${rect.top}px`);
document.documentElement.style.setProperty('--element-top-add', `${rect.top + 100}px`);
document.documentElement.style.setProperty('--element-left', `${rect.left}px`);
document.documentElement.style.setProperty('--element-left-add', `${rect.top + 100}px`);
document.documentElement.style.setProperty('--element-right', `${rect.right}px`);
document.documentElement.style.setProperty('--element-right-add', `${rect.top + 100}px`);
document.body.style.setProperty('--element-bottom', `${rect.top}px`);
document.body.style.setProperty('--element-bottom-add', `${rect.top + 100}px`);
document.body.style.setProperty('--element-width', `${rect.width}px`);
document.body.style.setProperty('--element-height', `${rect.height}px`);
start();
function start() {
    document.addEventListener('keyup', function (Event) {
        if (Event.key === "s") {
            logKeyframes(1);
            head.style.animationName = 'twist_down';
            head.style.animationDuration = '1s';
            head.style.animtionIterationCount = '1';
            head.style.animationFillMode = 'forwards';
            previousEvent = Event.key;
            document.addEventListener('keyup', (Event) => {
                another(Event, previousEvent);
                return;
            });
            continue_down(Event);
        }
    }
    );
}
function continue_down(variable) {
    head.addEventListener('animationend', () => {
        logKeyframes(11);
        head.style.animationName = 'down';
        head.style.animationDuration = '10s';
        head.style.animtionIterationCount = '1';
        head.style.animationFillMode = 'forwards';
        previousEvent = variable.key;
        document.addEventListener('keyup', (Event) => {
            another(Event, previousEvent);
            return;
        });
    })
}
function continue_right(variable) {
    head.addEventListener('animationend', () => {
        logKeyframes(12);
        head.style.animationName = 'right';
        head.style.animationDuration = '10s';
        head.style.animtionIterationCount = '1';
        head.style.animationFillMode = 'forwards';
        previousEvent = variable.key;
        document.addEventListener('keyup', (Event) => {
            another(Event, previousEvent);
            return;
        });
    })
}
function continue_left(variable) {
    head.addEventListener('animationend', () => {
        logKeyframes(13);
        head.style.animationName = 'left';
        head.style.animationDuration = '10s';
        head.style.animtionIterationCount = '1';
        head.style.animationFillMode = 'forwards';
        previousEvent = variable.key;
        document.addEventListener('keyup', (Event) => {
            another(Event, previousEvent);
            return;
        });
    })
}
function continue_up(variable) {
    head.addEventListener('animationend', () => {
        logKeyframes(14);
        head.style.animationName = 'up';
        head.style.animationDuration = '10s';
        head.style.animtionIterationCount = '1';
        head.style.animationFillMode = 'forwards';
        previousEvent = variable.key;
        document.addEventListener('keyup', (Event) => {
            another(Event, previousEvent);
            return;
        });
    })
}
function another(variable, previousVariable) {
    if (variable.key === "d") {
        console.log(variable.key, previousVariable);
        if (previousVariable === "s") {
            logKeyframes(21);
            head.style.animationName = 'twist_right';
            head.style.animationDuration = '1s';
            head.style.animtionIterationCount = '1';
            head.style.animationFillMode = 'forwards';
            continue_right(variable);
        }
        else if (previousVariable === "w") {
            logKeyframes(22);
            head.style.animationName = 'twist_right';
            head.style.animationDuration = '1s';
            head.style.animtionIterationCount = '1';
            head.style.animationFillMode = 'forwards';
            continue_right(variable);
        }
    }
    else if (variable.key === "s") {
        console.log(variable.key, previousVariable);
        if (previousVariable === "d") {
            logKeyframes(23);
            head.style.animationName = 'twist_down';
            head.style.animationDuration = '1s';
            head.style.animtionIterationCount = '1';
            head.style.animationFillMode = 'forwards';
            continue_down(variable);
        }
        else if (previousVariable === "a") {
            logKeyframes(24);
            head.style.animationName = 'twist_down';
            head.style.animationDuration = '1s';
            head.style.animtionIterationCount = '1';
            head.style.animationFillMode = 'forwards';
            continue_down(variable);
        }
    }
    else if (variable.key === "a") {
        console.log(variable.key, previousVariable);
        if (previousVariable === "s") {
            logKeyframes(25);
            head.style.animationName = 'twist_left';
            head.style.animationDuration = '1s';
            head.style.animtionIterationCount = '1';
            head.style.animationFillMode = 'forwards';
            continue_left(variable);
        }
        else if (previousVariable === "w") {
            logKeyframes(26);
            head.style.animationName = 'twist_left';
            head.style.animationDuration = '1s';
            head.style.animtionIterationCount = '1';
            head.style.animationFillMode = 'forwards';
            continue_left(variable);
        }
    }
    else if (variable.key === "w") {
        console.log(variable.key, previousVariable);
        if (previousVariable === "a") {
            logKeyframes(27);
            head.style.animationName = 'twist_up';
            head.style.animationDuration = '1s';
            head.style.animtionIterationCount = '1';
            head.style.animationFillMode = 'forwards';
            continue_up(variable);
        }
        else if (previousVariable === "d") {
            logKeyframes(28);
            head.style.animationName = 'twist_up';
            head.style.animationDuration = '1s';
            head.style.animtionIterationCount = '1';
            head.style.animationFillMode = 'forwards';
            continue_up(variable);
        }
    }
}
function getAllKeyframes() {
    const stylesheet = document.styleSheets[0];
    let keyFramesArray = [];
    for (let i = 0; i < stylesheet.cssRules.length; i++) {
        const rule = stylesheet.cssRules[i];
        if (rule instanceof CSSKeyframesRule) {
            keyFramesArray.push(rule);
        }
    }
    return keyFramesArray;
}
function logKeyframes(num) {
    keyFramesArray.forEach((keyframerule) => {
        rect.top; rect.bottom; rect.left; rect.right;
        if (keyframerule.name === "twist_down") {
            if (num == 1) {
                keyframerule.deleteRule('0%');
                keyframerule.appendRule('0%{transform: rotate(0deg);left:--element-left;top:--element-top; }');
                keyframerule.deleteRule('100%');
                keyframerule.appendRule('100%{transform: rotate(90deg);left:--element-left;top:--element-top;}');
            }
            else if (num == 23) {
                keyframerule.deleteRule('0%');
                keyframerule.appendRule('0%{transform: rotate(0deg);left:--element-left;top:--element-top; }');
                keyframerule.deleteRule('100%');
                keyframerule.appendRule('100%{transform: rotate(90deg);left:--element-left;top:--element-top;}');
            }
            else if (num = 24) {
                keyframerule.deleteRule('0%');
                keyframerule.appendRule('0%{transform: rotate(180deg);left:--element-left;top:--element-top; }');
                keyframerule.deleteRule('100%');
                keyframerule.appendRule('100%{transform: rotate(90deg);left:--element-left;top:--element-top;}');
            }
        }
        else if (keyframerule.name === "twist_up") {
            if (num == 3) {
                keyframerule.deleteRule('0%');
                keyframerule.appendRule('0%{transform: rotate(-90deg);left:--element-left;top:--element-top; }');
                keyframerule.deleteRule('100%');
                keyframerule.appendRule('100%{transform: rotate(90deg);left:--element-left;top:--element-top;}');
            }
            else if (num == 28) {
                keyframerule.deleteRule('0%');
                keyframerule.appendRule('0%{transform: rotate(0deg);left:--element-left;top:--element-top; }');
                keyframerule.deleteRule('100%');
                keyframerule.appendRule('100%{transform: rotate(-90deg);left:--element-left;top:--element-top;}');
            }
            else if (num == 27) {
                keyframerule.deleteRule('0%');
                keyframerule.appendRule('0%{transform: rotate(180deg);left:--element-left;top:--element-top; }');
                keyframerule.deleteRule('100%');
                keyframerule.appendRule('100%{transform: rotate(270deg);left:--element-left;top:--element-top;}');
            }
        }
        else if (keyframerule.name === "twist_left") {
            if (num == 26) {
                keyframerule.deleteRule('0%');
                keyframerule.appendRule('0%{transform: rotate(270deg);left:--element-left;top:--element-top; }');
                keyframerule.deleteRule('100%');
                keyframerule.appendRule('100%{transform: rotate(180deg);left:--element-left;top:--element-top;}');
            }
            if (num == 25) {
                keyframerule.deleteRule('0%');
                keyframerule.appendRule('0%{transform: rotate(90deg);left:--element-left;top:--element-top; }');
                keyframerule.deleteRule('100%');
                keyframerule.appendRule('100%{transform: rotate(180deg);left:--element-left;top:--element-top;}');
            }
        }
        else if (keyframerule.name === "twist_right") {
            if (num == 2) {
                keyframerule.deleteRule('0%');
                keyframerule.appendRule('0%{transform: left:--element-left;top:--element-top; }');
                keyframerule.deleteRule('100%');
                keyframerule.appendRule('100%{transform: left:--element-left;top:--element-top;}');
            }
            else if (num == 21) {
                keyframerule.deleteRule('0%');
                keyframerule.appendRule('0%{transform: rotate(90deg);left:--element-left;top:--element-top; }');
                keyframerule.deleteRule('100%');
                keyframerule.appendRule('100%{transform: rotate(0deg);left:--element-left-add;top:--element-top;}');
            }
            else if (num == 22) {
                keyframerule.deleteRule('0%');
                keyframerule.appendRule('0%{transform: rotate(270deg);left:--element-left;top:--element-top; }');
                keyframerule.deleteRule('100%');
                keyframerule.appendRule('100%{transform: rotate(0deg);left:--element-left-add;top:--element-top;}');
            }
        }
        if (keyframerule.name === "down") {
            if (num == 11) {
                keyframerule.deleteRule('0%');
                keyframerule.appendRule('0%{transform: rotate(90deg);left:--element-left;top:--element-top;}');
                keyframerule.deleteRule('100%');
                keyframerule.appendRule('100%{transform: rotate(90deg);left:--element-left;top:--element-top-add;}');
            }
        }
        else if (keyframerule.name === "up") {
            if (num == 14) {
                keyframerule.deleteRule('0%');
                keyframerule.appendRule('0%{transform: rotate(270deg);left:--element-left;top:--element-down;}');
                keyframerule.deleteRule('100%');
                keyframerule.appendRule('100%{transform: rotate(270deg);left:--element-left-add;top:--element-down-add;}');
            }
        }
        else if (keyframerule.name === "right") {
            if (num == 12) {
                keyframerule.deleteRule('0%');
                keyframerule.appendRule('0%{transform: rotate(90deg);left:--element-left;top:--element-top;}');
                keyframerule.deleteRule('100%');
                keyframerule.appendRule('100%{transform: rotate(90deg);left:--element-left-add;top:--element-top-add;}');
            }
        }
        else if (keyframerule.name === "left") {
            if (num == 13) {
                keyframerule.deleteRule('0%');
                keyframerule.appendRule('0%{transform: rotate(180deg);left:--element-right;top:--element-top;}');
                keyframerule.deleteRule('100%');
                keyframerule.appendRule('100%{transform: rotate(180deg);left:--element-right-add;top:--element-top;}');
            }
        }

    });
}


