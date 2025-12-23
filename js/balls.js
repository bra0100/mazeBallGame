export function createBallStates(positions, cell) {
    return positions.map(({ column, row }) => ({
        x: column * cell + cell / 2,
        y: row * cell + cell / 2,
        velocityX: 0,
        velocityY: 0,
    }));
}

export function renderBalls(states, container) {
    const items = [];
    for (const state of states) {
        const el = document.createElement('div');
        el.classList.add('ball');
        el.style.left = `${state.x}px`;
        el.style.top = `${state.y}px`;

        container.appendChild(el);
        items.push({ el, state });
    }
    return items;
}