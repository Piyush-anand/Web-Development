function main(){
  var $skillset=$('.skillset');
  $($skillset).hide(); 			//hides the element
  $('.skillset').fadeIn(1000);	// fades in a hidden element for 1000 ms


  $('.projects').hide();		//hides the element
  
  $('.projects-button').on('click', function() {			// makes button clickable
  	//$('.projects').show();					//makes the hidden function show wen button clicked
  	//$('.projects').toggle();					// toggle b/w hide and show as show() only makes it visible.
	//$(this).next().toggle();				// "this" is pointing to prjects-button and next() points to next element used in index.html file  	
  		 $(this).next().slideToggle(400);		// on clicking the button the options appear and exit in sliding fashion. animation is for 400 ms
  	//$('.projects-button').toggleClass('active'); 	// changes the look of button clicked accrdng to the CSS class 'active'
  		$(this).toggleClass('active');				// "this" keyord makes change only to current location not all the areas of particular element 

  		$(this).text('Projects Viewed');			// it will change the name of button once clicked to "Projects Viewed"

	});
}
}
$(document).ready(main);
