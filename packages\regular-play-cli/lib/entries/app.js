import app from 'regular-play/dist/app';

import 'regular-play/dist/app.css';

app();

if ( !location.hash ) {
	location.href = '#!/';
}
