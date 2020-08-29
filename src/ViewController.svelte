<script>
    import { onDestroy } from 'svelte';
    import State from './state';

    let active;

    const unsubscribe = State.subscribe(view => {
        console.log(`ViewController detected state ${view.name}`);
        active = view;
    });

    onDestroy(unsubscribe);
</script>

<svelte:component this={active} />