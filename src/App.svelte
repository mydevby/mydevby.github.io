<script>
	let firstName = 'Nick';
	let lastName = 'Freeman';
	let color = '';
	let size = 18;

	const colorText = (e) => {
		color = e.target.value;
	};

	const firstNameText = (e) => {
		firstName = e.target.value;
	};

	const lastNameText = (e) => {
		lastName = e.target.value;
	};
</script>

<main>
	<h1 style="color: {color}; font-size: {size}px;">Hello {firstName} {lastName}!</h1>
	<form>
		<fieldset>
			<legend>Personal Data:</legend>
			<label>First name: 
				<input type="text" on:input={firstNameText} value={firstName}>
			</label>
			<label>Last name: 
				<input type="text" on:input={lastNameText} value={lastName}>
			</label>
		</fieldset>
		<fieldset>
			<legend>Style:</legend>
			<label>
				Color text:
				<input type="color" on:input={colorText} value={color}>
			</label>
			<label>
				Size text:
				<input type="range" bind:value={size} min="12" max="30">
			</label>
		</fieldset>
	</form>
</main>



<style lang="scss">
	* {
		font-family: Arial, Helvetica, sans-serif;
	}

	main {
		padding: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h1 {
		line-height: 30px;
		margin: 0 0 20px;
	}
	form {
		padding: 10px;
		background-color: lightgray;

		label {
			display: block;
			margin-bottom: 10px;

			&:last-child {
				margin-bottom: 0;
			}
		};
	}
</style>