import { writable } from 'svelte/store';
import LockedView from './LockedView.svelte';
import UnlockedView from './UnlockedView.svelte';
import OpenView from './OpenView.svelte';

const state = writable(LockedView);

state.subscribe(view => {
    console.log(`State switched to ${view.name}`);
});

const subscribe = state.subscribe;

function lock() {
    state.set(LockedView);
}

function unlock() {
    state.set(UnlockedView);
}

function open() {
    state.set(OpenView);
}

function close() {
    state.set(UnlockedView);
}

export default {
    lock,
    unlock,
    open,
    close,
    subscribe
}