import { pathWidth, wallWidth, cell } from "./config";

const mazeElement = document.querySelector('.maze');

const walls = [
    { column: 0, row: 0, length: 8, horizontal: false },
    { column: 0, row: 0, length: 10, horizontal: true },
    { column: 9, row: 0, length: 9, horizontal: false },
    { column: 1, row: 8, length: 9, horizontal: true },
]