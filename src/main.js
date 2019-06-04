// jquery code
$(document).ready(function() {
	var container = document.querySelector('.masonry');
	var msnry = new Masonry(container, {
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true,
	});
	var bergerBtn = $('#burger');
	var menuItems = $('#menu-items');
	var mapBtn = $('#map-button');
	var filterBtn = $('#filter-button');
	var sortBtn = $('#sort-button');
	var mapMenu = $('#map-menu');
	var filterMenu = $('#filter-menu');
	var sortMenu = $('#sort-menu');
	menuItems.addClass('d-none');
	hideAll();

	bergerBtn.bind('click', function(e) {
		if (menuItems.hasClass('d-none')) {
			hideAll();
			menuItems[0].classList.remove('d-none');
		} else {
			menuItems.addClass('d-none');
			hideAll();
		}
	});

	mapBtn.bind('click', function(e) {
		toggleCurrent(mapMenu);
	});
	filterBtn.bind('click', function(e) {
		toggleCurrent(filterMenu);
	});
	sortBtn.bind('click', function(e) {
		toggleCurrent(sortMenu);
	});

	function hideAll() {
		mapMenu.addClass('d-none');
		filterMenu.addClass('d-none');
		sortMenu.addClass('d-none');
	}

	function toggleCurrent(el) {
		if (el.hasClass('d-none')) {
			hideAll();
			el[0].classList.remove('d-none');
		} else {
			hideAll();
		}
	}
});
