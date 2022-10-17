import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", () => {
	const elSelect = document.querySelector('.form__select');
	const customSelect = new Choices(elSelect, {
		itemSelectText: '',
		searchEnabled: false,
		shouldSort: false,
	});
	
	const customScroll = new SimpleBar(document.querySelector('.choices__list[role="listbox"]'), {autoHide: false, forceVisible: true});

	elSelect.addEventListener('showDropdown',
		function() {
			new SimpleBar(document.querySelector('.choices__list[role="listbox"]'), {autoHide: false, forceVisible: true});
		},
		false,
	);

	elSelect.addEventListener('hideDropdown',
		function() {
			customScroll.unMount();
		},
		false,
	);

	const rangeOne = document.getElementById('range-one');

	const rangeValue = function() {
		let newValue = rangeOne.value;
		const textOne = document.getElementById('text-one');
		textOne.innerHTML = newValue;
	}

	rangeOne.addEventListener("input", rangeValue);

	let scrollpos = window.scrollY;
	const header = document.querySelector("header");
	const scrollChange = 1;
	const add_class_on_scroll = () => header.classList.add("header--black")
	const remove_class_on_scroll = () => header.classList.remove("header--black")

	window.addEventListener('scroll', function() { 
		scrollpos = window.scrollY;
		if (scrollpos >= scrollChange) { add_class_on_scroll() }
		else { remove_class_on_scroll() }	
	});


	const headerBurger = document.querySelector(".header__burger");
	const headerMenu = document.querySelector(".header__menu");
	const html = document.querySelector("html");
	const body = document.querySelector("body");

	headerBurger.addEventListener('click', function() {
		headerBurger.classList.toggle('header__burger--active');
		headerMenu.classList.toggle('header__menu--active');
		html.classList.toggle('no-scroll');
		body.classList.toggle('no-scroll');
	});

	const anchors = document.querySelectorAll('a[href*="#"]')

	for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		body.classList.remove('no-scroll');
		html.classList.remove('no-scroll');
		headerBurger.classList.remove('header__burger--active');
		headerMenu.classList.remove('header__menu--active');
		const blockID = anchor.getAttribute('href').substr(1);		
		document.getElementById(blockID).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
		})
	})
	}

});