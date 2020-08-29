import { writable } from 'svelte/store';

const Initial = 0;
const Running = 1;

const state = writable(Initial);

state.subscribe(value => {
    console.log(`State switched to ${value}`);
});

const subscribe = state.subscribe;

function toInitial() {
    state.set(Initial);
}

function toRunning() {
    state.set(Running);
}

export default {
    Initial,
    Running,
    toInitial, 
    toRunning, 
    subscribe
}