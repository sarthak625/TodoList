//Toggle checked and unched
$('ul').on('click','li',function(){
	$(this).toggleClass('completed');
})

//Click on X to delete todo
$('ul').on('click','span',function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		//Grabbing todo text from input
		var todoText = $(this).val();
		if (todoText !== "") { 
			$(this).val("");

			//create a new li and add to ul
			$('ul').append('<li><span><i class="fa fa-trash"></i></span>'+todoText+'></li>')
		}
	}
})

$('h1').on('click','.fa-chevron-up',function(){
	$("input[type='text']").fadeOut();
	$('.fa-chevron-up').addClass('fa-chevron-down');
	$('.fa-chevron-down').removeClass('fa-chevron-up');
})

$('h1').on('click','.fa-chevron-down',function(){
	console.log('clicked');
	$("input[type='text']").show(100);
	$('.fa-chevron-down').addClass('fa-chevron-up');
	$('.fa-chevron-up').removeClass('fa-chevron-down');
});