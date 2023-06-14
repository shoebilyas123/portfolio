<script>
	import Icon from '@iconify/svelte';
	import { socialsData } from '../Store';
	import { fade, scale } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let skillsHighlight = '';
	export const skillsText = 'MERN | DevOps | Open Source';
	let typingIndex = 0;
	let typingInterval = null;

	const startTyping = () => {
		if (typingIndex < skillsText.length) {
			skillsHighlight += skillsText[typingIndex];
			typingIndex++;
		} else {
			stopTyping();
		}
	};

	const startTypingInterval = () => (typingInterval = setInterval(startTyping, 50));

	const stopTyping = () => {
		clearInterval(typingInterval);
		typingIndex = 0;
	};

	onMount(() => {
		startTypingInterval();
	});
</script>

<div class=" flex items-center justify-center min-h-screen min-w-screen space-x-60">
	<div
		class="min-h-[240px] min-w-[240px] bg-white absolute"
		style="background: radial-gradient();"
	/>
	<div class="flex flex-col space-y-4">
		{#each $socialsData.list as { icon, href }, i}
			<div
				in:scale={{
					delay: 150 * i
				}}
			>
				<a {href} target="_blank">
					<Icon {icon} {...$socialsData.commonProps} />
				</a>
			</div>
		{/each}
	</div>
	<div>
		<img src="/branding_image.png" alt="Shoeb Ilyas" id="branding_image" width="550em" />
		<!-- <div>
			<button>Let's Connect</button>
		</div> -->
		<div in:fade class="flex flex-col items-start">
			<p>Hello! My name is</p>
			<div class="flex flex-col items-center justify-center">
				<h1 class="text-8xl font-bold">SHOEB ILYAS</h1>
				<span>{skillsHighlight}</span>
			</div>
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
