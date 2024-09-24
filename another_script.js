const head = document.querySelector('.head');
const snake = document.querySelector('.snake');
const curve = document.querySelector('.curve');
const body = document.querySelector('.body');
let count = 0, x, y, previousKey, xBod, yBod;
start();
another();
function start() {
    document.addEventListener('keydown', (Event) => {
        if (count == 0) {
            console.log(count);
            y = getPositionY();
            x = -getPositionX();
            xBod = -getPositionXbody() - 27.5;
            yBod = getPositionYbody() - 25;
            //if (count == 0) moveBody();
            //function moveBody() {
            if (Event.key === 's') {
                previousKey = Event.key;
                console.log('before s', x, y);
                anime({
                    targets: head,
                    rotate: '90deg',
                    translateY: x,
                    translateX: y,
                    duration: 10,
                    easing: 'easeInOutQuad',
                    complete: function () {
                        anime({
                            targets: head,
                            easing: 'easeInOutQuad',
                            duration: 6000,
                            translateX: 2000
                        });
                    }
                });
                anime({
                    targets: body,
                    rotate: '90deg',
                    translateY: xBod,
                    translateX: yBod,
                    duration: 10,
                    easing: 'easeInOutQuad',
                    complete: function () {
                        anime({
                            targets: body,
                            easing: 'easeInOutQuad',
                            duration: 6000,
                            translateX: 1973
                        });
                    }
                });
                console.log('after s', x, y);
                count++;
            }
            remover();
        }
    }
    );
}
function remover() {
    window.removeEventListener('keydown', () => {
        console.log("event removed");
    });
}
function another() {
    document.addEventListener('keydown', (Event) => {
        y = getPositionY();
        x = getPositionX();
        console.log('before d', x, y);
        if (count != 0) {
            if (Event.key === 'd') {
                if (previousKey === 's') {
                    previousKey = Event.key;
                    curving(x, y, 0, 60, 138);
                    filler(x, y, 180, 28, 75)
                    animating(0, x, y, x, y, 3);
                    console.log('after d', getPositionX(), getPositionY());
                }
                else if (previousKey === 'w') {
                    previousKey = Event.key;
                    curving(x, y, 0, 60, 150);
                    filler(x, y, 0, -70, 60)
                    animating(0, x, y, x, y, 3);
                }
            }
            else if (Event.key === 's') {
                if (previousKey === 'd') {
                    previousKey = Event.key;
                    curving(x, y, 90, 58, 155);
                    filler(x, y, 90, -18, 25);
                    animating(90, y, -x, y - 27, -x - 27.5, 28);

                }
                else if (previousKey === 'a') {
                    previousKey = Event.key;
                    curving(x, y, 90, 58, 155);
                    filler(x, y, 270, -33, 125);
                    animating(90, y, -x, y - 27, -x - 27.5, 28);

                }
            }
            else if (Event.key === 'a') {
                if (previousKey === 's') {
                    previousKey = Event.key;
                    curving(x, y, 180, 75, 155);
                    filler(x, y, 180, 30, 76.5);
                    animating(-180, -x, -y, -x - 57, -y, 50);
                }
                else if (previousKey === 'w') {
                    previousKey = Event.key;
                    curving(x, y, 180, 74, 150);
                    filler(x, y, 0, -80, 57);
                    animating(180, -x, -y, -x - 57, -y, 50);
                }
            }
            else if (Event.key === 'w') {
                if (previousKey === 'd') {
                    previousKey = Event.key;
                    curving(x, y, 270, 73, 140);
                    filler(x, y, 90, -18, 15);
                    animating(270, -y, x, -y - 27, x + 27.5, 28);
                }
                else if (previousKey === 'a') {
                    previousKey = Event.key;
                    curving(x, y, 270, 65, 140);
                    filler(x, y, 270, -24, 120);
                    animating(270, -y, x, -y - 70, -x, 28);
                }
            }
            remover();
        }
    });
}
function getPositionX() {
    const computedStyle = window.getComputedStyle(head);
    const matrix = new WebKitCSSMatrix(computedStyle.transform);
    const currentX = matrix.m41;
    return currentX;
}
function getPositionY() {
    const computedStyle = window.getComputedStyle(head);
    const matrix = new WebKitCSSMatrix(computedStyle.transform);
    const currentY = matrix.m42;
    return currentY;
}
function getPositionXbody() {
    const computedStyle = window.getComputedStyle(body);
    const matrix = new WebKitCSSMatrix(computedStyle.transform);
    const currentX = matrix.m41;
    return currentX;
}
function getPositionYbody() {
    const computedStyle = window.getComputedStyle(body);
    const matrix = new WebKitCSSMatrix(computedStyle.transform);
    const currentY = matrix.m42;
    return currentY;
}
function animating(angle, newX, newY, xB, yB, decrement) {
    angle = angle + "deg";
    decrement = 1500 - decrement;
    anime({
        targets: head,
        duration: 20,
        rotate: angle,
        translateY: newY,
        translateX: newX,
        easing: 'linear',
        complete: function () {
            anime({
                targets: head,
                easing: 'linear',
                duration: 17000,
                translateX: 1500
            })
        }
    });
    anime({
        targets: body,
        duration: 20,
        rotate: angle,
        translateY: yB,
        translateX: xB,
        easing: 'linear',
        complete: function () {
            anime({
                targets: body,
                easing: 'linear',
                duration: 17000,
                translateX: decrement
            })
        }
    });
}
function curving(newX, newY, angle, Ftop, Fside) {
    angle = angle + "deg";
    body.style.width = '0px';
    anime.remove(body);
    const newbody = document.createElement('div');
    newbody.className = 'newbody';
    document.body.appendChild(newbody);
    const newBody = document.querySelector('.newbody');
    newBody.style.width = '0px';
    newBody.style.height = '15px';
    newBody.style.position = 'absolute';
    newBody.style.top = newY + Ftop + 'px';
    newBody.style.left = newX + Fside + 'px';
    newBody.style.backgroundColor = 'blue';
    newBody.style.zIndex = '1';
    body.style.transformOrigin = 'top left';
    newBody.style.transformOrigin = 'top left';
    console.log(newBody);
    anime.remove(head);
    anime({
        targets: newBody,
        duration: '10',
        easing: 'linear',
        rotate: angle,
        complete: () => {
            anime({
                targets: newBody,
                easing: 'linear',
                duration: '760',
                width: '50px',
                complete: () => {
                    body.style = '';
                    head.style = '';
                    newBody.style.width = '0px';
                }
            })
        }
    });
}
function filler(newX, newY, angle, Ftop, Fside) {
    angle -= 90;
    angle = angle + "deg";
    let y = newY - Ftop;
    let x = newX + Fside;
    x = x + 'px';
    y = y + 'px';
    const newclass = document.createElement('div');
    curve.appendChild(newclass);
    curve.style.backgroundColor = 'blue';
    newclass.style.width = '0px';
    newclass.style.height = '15px';
    curve.style.width = '0px';
    newclass.style.backgroundColor = 'green';
    newclass.style.position = 'absolute';
    curve.style.position = 'absolute';
    curve.style.height = '15px';
    curve.style.left = x;
    curve.style.top = y;
    newclass.style.left = x - 70;
    newclass.style.top = y - 23;
    newclass.style.borderTopLeftRadius = '50%';
    newclass.style.borderBottomLeftRadius = '50%';
    newclass.style.transformOrigin = 'top left';
    curve.style.transformOrigin = 'top left';
    curve.style.borderTopLeftRadius = '50%';
    curve.style.borderBottomLeftRadius = '50%';
    curve.style.transform = `rotate(${angle})`;
    anime({
        targets: curve,
        easing: 'linear',
        duration: '20',
        width: '50px',
        complete: () => {
            anime({
                targets: newclass,
                easing: 'linear',
                duration: '700',
                width: '50px',
                complete: () => {
                    newclass.style = '';
                    curve.style = '';
                }
            })
        }
    })
};
const stopper = document.querySelector('.down');
stopper.addEventListener('click', () => {
    anime.remove(head);
    anime.remove(body);
})




