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