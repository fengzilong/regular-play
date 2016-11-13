import Button from './Button';
import play from '../src/play';

// style
// import './components/Button.mcss';

play( Button, module )
	.name( 'Button' )
	// .displayName( 'MyAwesomeButton' )
	.add( 'button with text', '<Button text="click me"></Button>' )
	.add( 'button loading', {
		template: `
			<Button loading on-click="{ this.onClick() }"></Button>
		`,
		onClick() {
			// this.$log( 'clicked' );
			console.log( 'clicked' );
		}
	} )
