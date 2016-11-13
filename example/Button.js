import R from 'regularjs';

const Button = Regular.extend( {
	template: `
		<button>{ text } { loading ? '...' : '' }</button>
	`,
	config() {

	},
} );

Button.filter( 'f', function() {

} );

export default Button;
