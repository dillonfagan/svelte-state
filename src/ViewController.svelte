<script>
    import { onDestroy } from 'svelte';
    import State from './state';
    import InitialView from './InitialView.svelte';
    import RunningView from './RunningView.svelte';

    let active;

    const unsubscribe = State.subscribe(state => {
        console.log(`ViewController detected state ${state}`);
        switch (state) {
            case 0:
                active = InitialView;
            case 1:
                active = RunningView;
        }
    });

    onDestroy(unsubscribe);
</script>

<svelte:component this={active} />