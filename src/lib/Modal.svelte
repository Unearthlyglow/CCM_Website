<!-- <script lang="ts">
	const modal: HTMLDialogElement | null = document.querySelector('#modal');
	const openModal = document.querySelector('.open-button');
	const closeModal = document.querySelector('.close-button');

	openModal?.addEventListener('click', () => {
		modal?.showModal();
	});

	closeModal?.addEventListener('click', () => {
		modal?.close();
	});
</script> -->

<dialog class="modal" id="modal">
	<h2>An interesting title</h2>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum esse nisi, laboriosam illum
		temporibus ipsam?
	</p>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quo.</p>
	<button class="button close-button">close modal</button>
	<form class="form" method="dialog">
		<label>Your name <input type="text" /></label>
		<label>Your email <input type="email" /></label>
		<button class="button" type="submit">submit form</button>
	</form>
</dialog>

<style>
	.modal {
		padding: 1em;
		max-width: 50ch;
		border: 0;
		box-shadow: 0 0 1em rgb(0 0 0 / 0.3);

		& > * {
			margin: 0 0 0.5rem 0;
		}
	}

	.modal::backdrop {
		background: rgb(0 0 0 / 0.4);
	}

	.button {
		border: 0;
		cursor: pointer;
		background: var(--gray-8);
		color: var(--gray-2);
		font-weight: 700;
		padding: var(--size-2) var(--size-4);
	}

	.button:hover,
	.button:focus {
		background: var(--cyan-9);
	}

	form {
		display: grid;
		gap: 1em;
	}
</style>
