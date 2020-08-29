import { writable } from 'svelte/store';

const state = writable(0);

state.subscribe(value => {
    console.log(`State switched to ${value}`);
});

const subscribe = state.subscribe;

function setInitial() {
    state.set(0);
}

function setRunning() {
    state.set(1);
}

export default { setInitial, setRunning, subscribe }