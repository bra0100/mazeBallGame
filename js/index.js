import { pathWidth, wallWidth, cell } from "./config";


const mazeElement = document.getElementById('maze');
const ballElement = [];


const ballsPosition = [
    { column: 0, row: 0 },
    { column: 9, row: 0 },
    { column: 0, row: 8 },
    { column: 9, row: 8 },
].map((ball) => ({
    x: ball.column * cell + cell / 2,
    y: ball.row * cell + cell / 2,
    velocityX: 0,
    velocityY: 0,
}))

const balls = createBalls(positions, cell);

ballsPosition.forEach(({ x, y }) => {
    const ball = document.createElement('div');
    ball.setAttribute('class', 'ball');
    ball.style.cssText = `
        left: ${x}px;
        top: ${y}px;
    `;

    mazeElement.appendChild(ball);
    ballElement.push({ ball, speedX, speedY });
});