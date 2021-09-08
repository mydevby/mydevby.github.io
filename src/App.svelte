<script>
	let count = 1;

	// the `$:` means 're-run whenever these values change'
	$: doubled = count * 2;
	$: quadrupled = doubled * 2;

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	<span>Count: {count}</span>
</button>

<p>{count} * 2 = {doubled}</p>
<p>{doubled} * 2 = {quadrupled}</p>

<style lang="scss">
	$red: #f00;
	$blue: #f0f;
	button {
		background: #f0f;
		span {
			color: $red
		}
	}
</style>