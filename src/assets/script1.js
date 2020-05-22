$(document).ready(function(){
	$('.joinBtn').click(function(){
		$('#checkout_10642 a.btn').click();
	});

	$(window).load(function(){
    	$('body').on('DOMNodeInserted', '#memmodal', function(){
    		return false;
    	});
  });
});