import app from '../src/app';

app();

if ( !location.hash ) {
	location.href = '#!/';
}
