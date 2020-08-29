<script>
    import State from './state';
    import InitialView from './InitialView.svelte';
    import RunningView from './RunningView.svelte';

    $: ActiveView = update();

    function update() {
        return InitialView;
    }
</script>

<ActiveView />