<script>
    import { onDestroy } from 'svelte';
    import State from './state';
    import LockedView from './LockedView.svelte';
    import UnlockedView from './UnlockedView.svelte';
    import OpenView from './OpenView.svelte';

    let active;

    const unsubscribe = State.subscribe(state => {
        console.log(`ViewController detected state ${state}`);
        active = update(state);
    });

    function update(state) {
        switch (state) {
            case State.Locked:
                return LockedView;
            case State.Unlocked:
                return UnlockedView;
            case State.Open:
                return OpenView;
        }
    }

    onDestroy(unsubscribe);
</script>

<svelte:component this={active} />