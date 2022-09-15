console.log('Hi! Welcome to My Portfolio Site');

var closeIcon =
	'<a href="javascript:void(0);" class="icon" onclick="menuToggle()"><i class="fa-solid fa-xmark"></i></a>';
var menuIcon =
	'<a href="javascript:void(0);" class="icon" onclick="menuToggle()"><i class="fas fa-bars"></i></a>';

function replaceItem(iconName) {
	var listItem = document.querySelector('li:first-child');
	var newItem = document.createElement('li');
	newItem.innerHTML = iconName;
	listItem.parentNode.replaceChild(newItem, listItem);
}

function menuToggle() {
	var x = document.getElementById('myNavtoggle');
	if (x.className === 'navtoggle') {
		x.className += ' responsive';
		replaceItem(closeIcon);
	} else {
		x.className = 'navtoggle';
		replaceItem(menuIcon);
	}
}
