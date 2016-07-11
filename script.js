// api yandex key : trnsl.1.1.20160711T081907Z.39e7d4f0df433b70.28a6924ab190c65d8a6fa637618eafa9a904eb61
$(document).ready(function(){
	$('button').on('click', function(){
		var text = $(this).parent().siblings('textarea').val();
		var from = $(this).siblings('#from').val();
		var to = $(this).siblings('#to').val();
		$.ajax('https://translate.yandex.net/api/v1.5/tr.json/translate?', {
			data: {
	    		key: 'trnsl.1.1.20160711T081907Z.39e7d4f0df433b70.28a6924ab190c65d8a6fa637618eafa9a904eb61', 
				text: text,
				lang: from+'-'+to	 
			},
			success: function(result){ 
			 	$('.translation').text(result.text);
			 }
		});
	});
});


