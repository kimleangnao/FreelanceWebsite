(function(){

	$('#contact').on('click', function(){
		$('#first').animate({
			marginLeft: '120em'
		}, 1000, function(){
			$('#first').hide();
			$('#second').css('marginLeft', '-=120em')
			$('#second').show();
			$('#second').animate({
				marginLeft: '0em'
			}, 1000);
		});
	});



	$('#ctBack').on('click', function(){
		$('#second').animate({
			marginLeft: '-=120em'
		}, 1000, function(){
			$('#second').hide()
			$('#first').show()
			$('#first').animate({
				marginLeft: '0em'
			}, 1000);
		});
	});		
	


	$('#example').on('click', function(){
		$('#first').animate({
			marginTop: '-62em'
		}, 1000, function(){
			$('#first').hide()
			$('#third').css('marginTop', '62em')
			$('#third').show()
			$('#third').animate({
				marginTop: '0em'
			}, 1000);
		});
	});

	$('#spBack').on('click', function(){
		$('#third').animate({
			marginTop: '62em'
		}, 1000, function(){
			$('#third').hide()
			$('#first').show()
			$('#first').animate({
				marginTop: '0em'
			}, 1000);
		});
	});

	$('#portfolio').on('click', function(){
		$('#first').animate({
			marginLeft: '-120em'
		}, 1000, function(){
			$('#first').hide()
			$('#fourth').css('marginLeft', '120em')
			$('#fourth').show()
			$('#fourth').animate({
				marginLeft: '0em'
			}, 1000);
		});
	});

	$('#pfBack').on('click', function(){
		$('#fourth').animate({
			marginLeft: '120em'
		}, 1000, function(){
			$('#fourth').hide()
			$('#first').show()
			$('#first').animate({
				marginLeft: '0em'
			}, 1000);
		});
	});

})();