$(function(){
	$('.panel-description-list').each(function(){
	  console.log($(this).closest('.panel').css('padding-bottom', $(this).height() + 'px'));
	});
});