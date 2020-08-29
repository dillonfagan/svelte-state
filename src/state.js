import { writable } from 'svelte/store';

const Initial = 0;
const Running = 1;

const state = writable(Initial);

state.subscribe(value => {
    console.log(`State switched to ${value}`);
});

const subscribe = state.subscribe;

function setInitial() {
    state.set(Initial);
}

function setRunning() {
    state.set(Running);
}

export default {
    Initial,
    Running,
    setInitial, 
    setRunning, 
    subscribe
}