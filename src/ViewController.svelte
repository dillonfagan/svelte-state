<script>
    import { onDestroy } from 'svelte';
    import State from './state';
    import InitialView from './InitialView.svelte';
    import RunningView from './RunningView.svelte';

    let active;

    const unsubscribe = State.subscribe(state => {
        console.log(`ViewController detected state ${state}`);
        active = update(state);
    });

    function update(state) {
        switch (state) {
            case State.Initial:
                return InitialView;
            case State.Running:
                return RunningView;
        }
    }

    onDestroy(unsubscribe);
</script>

<svelte:component this={active} />