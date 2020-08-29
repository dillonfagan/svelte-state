import { writable } from 'svelte/store';

const Locked = 0;
const Unlocked = 1;
const Open = 2;

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

function open() {
    state.set(Open);
}

function close() {
    state.set(Unlocked);
}

export default {
    Locked,
    Unlocked,
    Open,
    lock,
    unlock,
    open,
    close,
    subscribe
}