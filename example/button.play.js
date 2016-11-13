import Button from './Button';
import play from '../src/play';

play( Button, module )
	.name( 'Button' )
	// .displayName( 'MyAwesomeButton' )
	.add( 'button with text', '<Button text="click me"></Button>' )
	.add( 'button loading', {
		template: `
			<Button text="loading button" on-click="{ this.onClick() }"></Button>
		`,
		onClick() {
			this.$log( 'clicked' );
		}
	} )
