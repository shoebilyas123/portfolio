<script>
	import Icon from '@iconify/svelte';
	import { socialsData } from '../Store';
	import { fade, scale } from 'svelte/transition';
</script>

<div
	class="border border-red-400 flex items-center justify-center min-h-screen min-w-screen space-x-60"
>
	<div class="flex flex-col space-y-4">
		{#each $socialsData.list as { icon, href }, i}
			<div
				in:scale={{
					delay: 150 * i
				}}
				class="border border-red-400"
			>
				<a {href} target="_blank">
					<Icon {icon} {...$socialsData.commonProps} />
				</a>
			</div>
		{/each}
	</div>
	<div>
		<img src="/branding_image.png" alt="Shoeb Ilyas" id="branding_image" width="450em" />
		<div>
			<button>Let's Connect</button>
		</div>
		<div in:fade>
			<p>Hello! My name is</p>
			<h1>SHOEB ILYAS</h1>
			<span>MERN | DevOps | Open Source</span>
		</div>
	</div>
	<div>
		<div
			class="flex items-center justify-center hover:underline transition-all space-x-1 cursor-pointer"
		>
			Resume
			<Icon icon="ic:round-download" color="#ddd" />
		</div>
	</div>
</div>

<style>
	#branding_image {
		filter: grayscale(100%);
	}
</style>
