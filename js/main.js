headerAndFooter();
dropdown_activ('.dropdown-box');
chooseValue('.dropdown-list__item', '.dropdown-box__active', '.dropdown-list');
outerClick('.dropdown', '.dropdown-list');
burger();
// активация дропдауна
function dropdown_activ(active_box) {
    $(active_box).on('click', function () {
        if ($(this).next().attr('data-show') === '0') {
            $(this).next().attr('data-show', '1');
        } else {
            $(this).next().attr('data-show', '0');
        }
    });
}

// выбор активного значения в дропдауне
function chooseValue(choose_value, active, list) {
    $(choose_value).on('click', function () {
        $(active).text($(this).text());
        $(list).attr('data-show', '0')
    });
}

// клик вне элемента 
function outerClick(element, element_item) {
    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(element); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.children(element_item).attr('data-show', '0'); // скрываем его
        }
    });
}


function burger() {
    $('.header__burger-menu').on('click', function () {
        $('.header__mobile-menu').toggleClass('active');
    });
}

function headerAndFooter() {
    var link = {
        link1: "Документация",
        link2: "Разработчикам",
        link3: "Продукты",
        link4: "Поддержка",
        link5: "Правила",
        link6: "Блог"
    };

    var header = `<div class="container">
			<div class="header__inner">
				<div class="header__logo">
					<a href="#" class="header__logo-link">
						<img src="images/logo.svg" alt="" class="header__logo-img">
					</a>
				</div>
				<div class="header__links">
					<a href="#" class="header__link">${link.link1}</a>
					<a href="#" class="header__link">${link.link2}</a>
					<a href="#" class="header__link">${link.link3}</a>
					<a href="#" class="header__link">${link.link4}</a>
					<a href="#" class="header__link">${link.link5}</a>
					<a href="#" class="header__link">${link.link6}</a>
				</div>
				<div class="header__sign">
					<a href="#" class="header__sign-in">Войти</a>
					<a href="#" class="header__sign-up">Зарегистрироваться</a>
				</div>
				<div class="header__burger-menu">
					<span class="burger-menu"></span>
				</div>
			</div>
		</div>
		<div class="header__mobile-menu">
			<div class="mobile-menu">
				<div class="mobile-menu__inner">
					<div class="mobile-menu__links">
						<a href="#" class="mobile-menu__link">${link.link1}</a>
						<a href="#" class="mobile-menu__link">${link.link2}</a>
						<a href="#" class="mobile-menu__link">${link.link3}</a>
						<a href="#" class="mobile-menu__link">${link.link4}</a>
						<a href="#" class="mobile-menu__link">${link.link5}</a>
						<a href="#" class="mobile-menu__link">${link.link6}</a>
					</div>
					<div class="mobile-menu__sign">
						<a href="#" class="mobile-menu__sign-in">Войти</a>
						<a href="#" class="mobile-menu__sign-up">Зарегистрироваться</a>
					</div>
				</div>
			</div>
        </div>`;

    var footer = `<div class="container">
        <div class="footer__inner">
            <div class="footer__menu">
                <a href="#" class="footer__link"> ${link.link1}</a>
                <a href="#" class="footer__link"> ${link.link2}</a>
                <a href="#" class="footer__link"> ${link.link3}</a>
                <a href="#" class="footer__link"> ${link.link4}</a>
                <a href="#" class="footer__link"> ${link.link5}</a>
                <a href="#" class="footer__link"> ${link.link6}</a>
            </div>
            <div class="footer__company">
                <span>Company © 2019–2020</span>
            </div>
            <div class="footer__policy">
                <a href="#" class="footer__link">Политика конфеденциальности</a>
            </div>
        </div>
    </div>`;
    $('.header').html(header);
    $('.footer').html(footer);
}
