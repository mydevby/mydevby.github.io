<script>
	let colorSchemes = [
		{ id: 1, names: { nameSceme: 'Yellow and Blue', infoSceme: 'Playful and Authoritative'}, colors: { bgColor: '#f4b41a', textColor: '#143d59'} },
		{ id: 2, names: { nameSceme: 'Navy and Teal', infoSceme: 'Soothing or Striking'},  colors: { bgColor: '#220070', textColor: '#7ad9c4'} },
		{ id: 3, names: { nameSceme: 'Black and Orange', infoSceme: 'Lively and Powerful'}, colors: { bgColor: '#2f2f2f', textColor: '#fe6f27'} },
		{ id: 4, names: { nameSceme: 'Maroon and Peach', infoSceme: 'Elegant and Tranquil'}, colors: { bgColor: '#ffa67e', textColor: '#5a0f2e'} },
		{ id: 5, names: { nameSceme: 'Indigo and Lavender', infoSceme: 'Intuitive and Unique'}, colors: { bgColor: '#60067d', textColor: '#c699cf'} },
		{ id: 6, names: { nameSceme: 'Jungle Green and Turquoise', infoSceme: 'Renew and Open'}, colors: { bgColor: '#02886f', textColor: '#9bece1'} }
	];
</script>


<header>
	<div class="container">

	</div>
</header>
<main>
	<div class="container">
		<section>
			<h2>Step 1: Color Schemes</h2>
			<div class="card-wrapper">
				{#each colorSchemes as colorScheme }
				<div class="card">
					<div class="card-row" style="background-color: {colorScheme.colors.bgColor}">
						<h3 style="color: {colorScheme.colors.textColor}">{colorScheme.names.nameSceme}</h3>
						<p style="color: {colorScheme.colors.textColor}">Lorem ipsum <a href="/">dolor sit</a> amet consectetur adipisicing elit. Mollitia, officiis nisi explicabo quasi consequatur nesciunt quo eos doloribus quia. Eum sunt aut nulla vitae consequatur laudantium quo eos veritatis consectetur.</p>
						<button style="background-color: {colorScheme.colors.textColor}; color: {colorScheme.colors.bgColor}">Example</button>
					</div>
					<div class="card-row" style="background-color: {colorScheme.colors.textColor}">
						<h3 style="color: {colorScheme.colors.bgColor}">{colorScheme.names.infoSceme}</h3>
						<p style="color: {colorScheme.colors.bgColor}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officiis nisi explicabo quasi consequatur nesciunt quo eos doloribus quia. Eum sunt aut nulla vitae consequatur laudantium quo eos veritatis consectetur.</p>
						<button style="background-color: {colorScheme.colors.bgColor}; color: {colorScheme.colors.textColor}">Activate</button>
					</div>
				</div>
			{/each}
			</div>
		</section>
		<section>
			<h2>Step 2: Blocks</h2>
			<ul>
				<li>Banner</li>
				<li>About Us</li>
				<li>Discounts</li>
				<li>Menu</li>
				<li>Gallery</li>
				<li>Testimonials</li>
				<li>Contacts</li>
			</ul>
		</section>
		<section>
			<h2>Step 3: Options for blocks</h2>
		</section>
		<section>
			<h2>Step 4: Content for blocks</h2>
		</section>
	</div>
</main>
<footer>
	<div class="container">	
		
	</div>
</footer>



<style lang="scss">
	* {
		font-family: Arial, Helvetica, sans-serif;
		box-sizing: border-box;
		transition: .2s;
		margin: 0;
		padding: 0;
	}

	h2, h3, p {
		margin-bottom: .5em;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 10px 15px;
	}

	.card-wrapper {
		display: flex;
		flex-wrap: wrap;
	}

	.card {
		width: 50%;
		padding: 5px;

		.card-row {
			padding: 20px;
		}

		a {
			color: inherit;

			&:hover {
				opacity: .8;
			}
		}

		button {
			border: none;
			outline: none;
			padding: 5px 20px;
			text-transform: uppercase;
			font-weight: bold;
			cursor: pointer;

			&:hover {
				opacity: .8;
			}
		}
	}
</style>