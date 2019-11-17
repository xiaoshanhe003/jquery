$('document').ready(function(){
	$('#ch3form').on('submit', function(){
		let fruit=$('input[name="fruit"]:checked').length*10;
		let standing=$('input[name="standing"]:checked').length;
		let code=fruit+standing;
		switch(code){
			case 0: alert("You must pick a class standing and a fruit!");return false;
			case 1: alert("You must pick a fruit!");return false;
			case 10:alert("You must pick a class standing!");return false;
			case 11: return true;
		}
	});
	
});
