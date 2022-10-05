document.querySelectorAll('.category').forEach((card) => {
	card.addEventListener('click', () => {
		document.querySelector('.selected').classList.toggle('selected');
		card.classList.toggle('selected');
	});
});
