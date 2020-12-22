
function update(text){
        switch(text){
                case '#portrait':
                    port=1-port;
                    break;
                case '#still':
                    still=1-still;
                    break;
                case '#landscape':
                    land=1-land;
                    break;
                case '#street':
                    street=1-street;
                    break;
            }
            $(".Portrait").hide();
            $(".Street").hide();
            $(".Still").hide();
            $(".Landscape").hide();

            if (port){
                $(".Portrait").show();
                document.getElementById("portbtn").style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
            } else{
                document.getElementById("portbtn").style.backgroundColor = 'rgba(255, 255, 255, 0.075)';
            }
            if (land){
                $(".Landscape").show();
                document.getElementById("landbtn").style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
            } else{
                document.getElementById("landbtn").style.backgroundColor = 'rgba(255, 255, 255, 0.075)';
            }
            if (still){
                $(".Still").show();
                document.getElementById("stillbtn").style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
            } else{
                document.getElementById("stillbtn").style.backgroundColor = 'rgba(255, 255, 255, 0.075)';
            }
            if (street){
                $(".Street").show();
                document.getElementById("streetbtn").style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
            } else{
                document.getElementById("streetbtn").style.backgroundColor = 'rgba(255, 255, 255, 0.075)';
            }
     }

$(function() {

	// Vars.
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper');
			$document = $(document);
			port=1;
            land=1;
            still=1;
            street=1;



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