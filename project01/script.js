const windows = document.querySelectorAll('.panel');
console.log(windows);

const [...panels] = windows;
console.log(panels);

panels.forEach((panel) =>
	panel.addEventListener('click', () => {
		removeActiveClasses();
		panel.classList.add('active');
	})
);

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove('active');
	});
}

// const windows = document.querySelectorAll('.panel');
// console.log(windows);

// const [...panels] = windows;
// console.log(panels);

// const openPanel = function () {
// 	this.classList.toggle('active');
// };

// panels.forEach((panel) => panel.addEventListener('click', openPanel));
