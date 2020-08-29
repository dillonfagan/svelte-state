import { writable } from 'svelte/store';

const Locked = 0;
const Unlocked = 1;
const Open = 2;
const Closed = 3;

const state = writable(Locked);

state.subscribe(value => {
    console.log(`State switched to ${value}`);
});

const subscribe = state.subscribe;

function lock() {
    state.set(Locked);
}

function unlock() {
    state.set(Unlocked);
}

export default {
    Locked,
    Unlocked,
    Open,
    Closed,
    lock,
    unlock,
    subscribe
}