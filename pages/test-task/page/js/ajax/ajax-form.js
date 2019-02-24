//regular
function validateUserName(username) { 
	var reg = /^[а-яА-ЯёЁa-zA-Z0-9\s]{4,20}$/;
	return reg.test(username);
}

function validateUserPhone(userphone) { 
	var reg = /^[0-9\s\(\)\-\+]{31}$/;
	return reg.test(userphone);
}
	
	
$(document).ready(function() {
    $(".js-form").submit(function() { 
		return false;
	});
	
	$(".js-send-button").on("click", function(){
		
		//validate
		var userName  = $(".js-input-name").val();
		var userNameValid = validateUserName(userName);
		
		var userPhone  = $(".js-input-phone").val();
		var userPhoneValid = validateUserPhone(userPhone);

		//send errors
		if(userNameValid == false) {
		$(".js-input-name").addClass("js-input-error");
		}
		else if(userNameValid == true){
		$(".js-input-name").removeClass("js-input-error");
		}

		if(userPhoneValid == false) {
		$(".js-input-phone").addClass("js-input-error");
		}
		else if(userPhoneValid == true){
		$(".js-input-phone").removeClass("js-input-error");
		}
		
		$('body').on('click', function(event){
			if (!$(event.target).closest('.js-send-button').length) {
				$('.js-input-name, .js-input-phone').removeClass('js-input-error')
			}
		});	

		//ajax
		if(userNameValid == true && userPhoneValid == true) {
			$(".js-send-button").replaceWith("<p>Отправка сообщения<span class='b-form-load'>...</span></p>");
			$.ajax({
				type: 'POST',
				url: '#',
				data: $(".js-form").serialize(),
				success: function(data) {
					if(data == "true") {
						$(".js-form").fadeOut("fast", function(){
							$('.js-text-form-hidden').replaceWith("<p>Сообщение отправлено!</p>");
						});
					}
				}
			});
		}
    });
});


