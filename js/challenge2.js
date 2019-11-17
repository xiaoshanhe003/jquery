$(document).ready(function(){
	$("#useBilling").change(function(){
		if($(this).prop('checked')){

			$("#home").val($("#billing").val());
			$("#home").prop("disabled",true);
		}
		else{
			$("#home").val("");
			$("#home").prop("disabled",false);
		}
	});

});