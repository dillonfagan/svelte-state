<script>
    import State from './state';
</script>

<p>The door is closed and unlocked.</p>
<button on:click={State.lock}>Lock</button>
<button on:click={State.open}>Open</button>