// Мобильное меню
const menuBtn = document.querySelector('.navbar-btn');
const menu = document.querySelector('.navbar');

if(menuBtn) {
	menuBtn.addEventListener('click', function() {
		document.body.classList.toggle('hide');
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
	});
}

// Прокрутка при клике
const menuLinks =document.querySelectorAll('.navbar-link[data-goto]');
if(menuLinks.length > 0) {
	window.onscroll = (() => {
		scrollActiveLink();
	});
	window.onload = (() => {
		scrollActiveLink();
	});

	menuLinks.forEach((menuLink) => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

	function onMenuLinkClick(e) {
		e.preventDefault();
        const menuLink = e.target;
		offMenuLinkClick();
		menuLink.classList.add('active-link');
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;

			if(menuBtn.classList.contains('active')) {
				document.body.classList.remove('hide');
				menuBtn.classList.remove('active');
				menu.classList.remove('active');
			}

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
        }
    }

	function offMenuLinkClick() {
		let menuLinkActive = document.querySelector('.navbar-link.active-link');
		if(menuLinkActive) {
			menuLinkActive.classList.remove('active-link');
		}
	}

	function scrollActiveLink() {
		let mainSection = document.querySelectorAll('section');
		mainSection.forEach((v, i) => {
			let rect = v.getBoundingClientRect().y;
			if (rect < window.innerHeight - window.innerHeight / 2) {
				menuLinks.forEach(v => v.classList.remove('active-link'));
				menuLinks[i].classList.add('active-link');
			}
		});
	}
}