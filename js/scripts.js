$(function() {

	//validation
	(function () {
		var els = $('.form').find('input,select,textarea').filter(':visible').not(".novalid"),
			ready = 0;
			// elsf = els.filter(':not(:disabled)');


		$('.btn-submit').on('click', function () {
			els.each(function () {
				var r = checkValid($(this),true);
				if(r) ready++;
			})
			if(els.length === ready) {
				console.log('all done');
				alert( 'go ajax' );
			} else {
				ready = 0;
			}
		})
		els.add('.validManual').on('blur', function () {
			checkValid($(this));
		});

		function checkValid(el, submit) {
			el.removeClass('invalid');
			el.next('.valid_message').remove();
			// $('.valid_message').remove();

			var type,
				reg;
			var valid = {
				'phone'      : /\(\d{3}\)\d{3}\-\d{2}\-\d{2}/,
				'email'      : /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/,
				'secret'     : /^[А-яЁёA-Za-z0-9]{1,32}$/,
				'name'       : /^[А-яЁё]{1,32}$/,
				'birthplace' : /^[А-яЁё0-9.-]{1,150}$/,
				'digits'     : /^\d+$/,
				'address'    : /^[А-яЁё0-9-\/]$/

			}
			var messages = {
				'empty'      : 'Пожалуйста, заполните поле.',
				'phone'      : 'Телефон должен быть в формате (xxx)xxx-xx-xx.',
				'email'      : 'Введите правильный адрес электронной почты.',
				'secret'     : 'Пожалуйста, используйте: русские символы, английские символы, цифры. Максимум символов - 32.',
				'name'       : 'Пожалуйста, используйте только русские символы. Максимум символов - 32.',
				'birthplace' : 'Пожалуйста, используйте: русские символы, цифры и символы: ".", "-". Максимум символов - 150.',
				'digits'     : 'Пожалуйста, используйте только цифры.',
				'address'    : 'Пожалуйста, используйте: русские символы, цифры и символы: "-". "/".'
			}

			if(!el.val()) {
					var msg = messages.empty,
						type;
					el.addClass('invalid');

					if(el.data('valid')) {
						type = el.data('valid');
						msg = messages[type];
					}

					$('<p class="valid_message">'+msg+'</p>').insertAfter(el).hide().slideDown(300);
				return;
			} else {
				if(el.data('valid')) {
					type = el.data('valid');
					reg = valid[type];
						
					var result = reg.test(el.val())
						
					if(!result) {
						el.addClass('invalid');
						msg = messages[type];
						$('<p class="valid_message">'+msg+'</p>').insertAfter(el).hide().slideDown(300);
						return;
					} else if(submit) {
						ready++;
					}
				}
			}
		}
	})();
	//\validation	


	//popover
	$('.showPopover').on('click', function () {
		var el = $(this).closest('.row').find('input,select,textarea').filter(':visible');

		//show popover
		el.popover({
			html: true,
			content:'Пользователь с таким номером <br /> телефона уже зарегестрирован.<br />\
						Чтобы оформить заявку войдите в <br /><a href="#">личный кабинет</a>',
			placement: 'bottom',
			trigger: 'manual'
		}).popover('show');

		//hide popover
		$('body').on('click.popoverHide', function (e) {
			if(!$(e.target).is('.showPopover') && !$(e.target).closest('.popover').length) {
				el.popover('hide');
			}
		});
	});
	//\popover
});

