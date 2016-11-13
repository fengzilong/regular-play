import Regular from 'regularjs';

const Button = Regular.extend( {
	template: `
		<button on-click="{ this.onClick() }">{ text } { loading ? '...' : '' }</button>
	`,
	onClick() {
		this.$emit( 'click' );
	},
} );

Button.filter( 'f', function() {

} );

export default Button;
