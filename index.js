/*global window, global*/

const root = typeof window !== 'undefined' ?
    window : typeof global !== 'undefined' ?
    global : {};

export function Individual(key, value) {
    if (key in root) {
        return root[key];
    }

    root[key] = value;

    return value;
}
