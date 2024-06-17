const robot = require('robotjs');

console.log('请在 2 秒内将鼠标移到香蕉图片上');
robot.setMouseDelay(2000);

const mouse = robot.getMousePos();
console.log(`鼠标位置: x=${mouse.x}, y=${mouse.y}`);

while (true) {
    robot.mouseClick();
    console.log('Click Banana');
    robot.setMouseDelay(100);
}
