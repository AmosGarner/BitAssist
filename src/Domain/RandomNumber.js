export function randomInt(max) {
    return Math.floor(Math.random() * (max));
}

export function randomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}