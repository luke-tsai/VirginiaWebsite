
function update(){
            var port = document.getElementById("portraitimgs");
            var stil = document.getElementById("stillimgs");
            var land = document.getElementById("landscapeimgs");
        switch(location.hash){
                case '':
                case '#':
                case '#all':
                    port.style.display = "block";
                    stil.style.display = "block";
                    land.style.display = "block";
                    break;
                case '#portrait':
                    port.style.display = "block";
                    stil.style.display = "none";
                    land.style.display = "none";
                    break;
                case '#still':
                    port.style.display = "none";
                    stil.style.display = "block";
                    land.style.display = "none";
                    break;
                case '#landscape':
                    port.style.display = "none";
                    stil.style.display = "none";
                    land.style.display = "block";
                    break;
            }
     }

$(function() {

	// Vars.
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper');
			$document = $(document);


	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Disable animations/transitions until everything's loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

	// Poptrox.
		$window.on('load', function() {

			$('.thumbnails').poptrox({
				onPopupClose: function() { $body.removeClass('is-covered'); },
				onPopupOpen: function() { $body.addClass('is-covered'); },
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: true,
				overlayColor: '#000000',
				overlayOpacity: 0.75,
				popupLoaderText: '',
				fadeSpeed: 500,
				usePopupDefaultStyling: false,
				windowMargin: (skel.breakpoint('small').active ? 5 : 50)
			});

		});

		$document.ready(update());


});