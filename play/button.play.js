import play from '../src/play';
import Button from './Button';
import './Button.less';

play( Button, module )
	.name( 'Button' )
	// .displayName( 'MyAwesomeButton' )
	.add( 'button with text', {
		template: `
			<Button on-click="{ this.onPrimaryClick() }" primary sm>Click Me</Button>
			<Button on-click="{ this.onClick() }" sm>Click Me</Button>
		`,
		onPrimaryClick() {
			this.$log( 'primary clicked' );
		},
		onClick() {
			this.$log( 'clicked' );
		}
	} )
	.add( 'button disabled', {
		template: `
			<Button disabled primary sm>Disabled</Button>
			<Button disabled sm>Disabled</Button>
		`,
	} )
