
function update(text){
        switch(text){
        /*
                case '':
                case '#':
                case '#all':
                    $(".Portrait").show();
                    $(".Still").show();
                    $(".Landscape").show();
                    document.getElementById("portbtn").style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                    document.getElementById("stillbtn").style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                    document.getElementById("landbtn").style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                    break;*/
                case '#portrait':
                    if (port) {
                        $(".Portrait").hide();
                        port=0;
                        document.getElementById("portbtn").style.backgroundColor = 'rgba(255, 255, 255, 0.075)';

                    } else{
                        $(".Portrait").show();
                        port=1;
                        document.getElementById("portbtn").style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                    }
                    break;
                case '#still':
                    if (still) {
                        $(".Still").hide();
                        still=0;
                        document.getElementById("stillbtn").style.backgroundColor = 'rgba(255, 255, 255, 0.075)';

                    } else{
                        $(".Still").show();
                        still=1;
                        document.getElementById("stillbtn").style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                    }
                    break;
                case '#landscape':
                    if (land) {
                        $(".Landscape").hide();
                        land=0;
                        document.getElementById("landbtn").style.backgroundColor = 'rgba(255, 255, 255, 0.075)';

                    } else{
                        $(".Landscape").show();
                        land=1;
                        document.getElementById("landbtn").style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                    }
                    break;
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