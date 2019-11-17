$('document').ready(function(){
	let msg = "Hover over an image below.";
	$('img').mouseover(function(){
			$('#image').css("background-image","url('"+$(this).attr('src')+"')");
		 	$('#image').html($(this).attr('alt'));
	});

	$('img').mouseleave(function(){
			$('#image').css("background-image","url('')");
		 	$('#image').html(msg);
	});

	$('img').on('focus',function(){
			$('#image').css("background-image","url('"+$(this).attr('src')+"')");
		 	$('#image').html($(this).attr('alt'));
	});

	$('img').on('blur',function(){
			$('#image').css("background-image","url('')");
		 	$('#image').html(msg);
	});	
});
