const app = require( 'regular-play/dist/app' )
require( 'regular-play/dist/app.css' )

app()

if ( !location.hash ) {
	location.href = '#!/'
}
