import app from '../src';

app();

if ( !location.hash ) {
	location.href = '#!/';
}
