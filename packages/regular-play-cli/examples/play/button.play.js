import Button from './Button';
import './Button.less';

play( Button, module )
	.name( 'Button' )
	// .displayName( 'MyAwesomeButton' )
	.add( 'button with text', {
		template: `
			<Button ref="play" on-click="{ this.onPrimaryClick() }" type="primary" size="sm">Click Me</Button>
			<Button on-click="{ this.onClick() }" sm>Click Me</Button>
		`,
		onPrimaryClick() {
			this.$log( 'primary clicked' );
		},
		onClick() {
			this.$log( 'clicked' );
		}
	}, {
		props: {
			size: {
				type: 'enum',
				list: [ 'sm', 'medium' ]
			},
			type: {
				type: 'enum',
				list: [ 'basic', 'primary' ],
			},
		}
	} )
	.add( 'button disabled', {
		template: `
			<Button disabled primary sm>Disabled</Button>
			<Button disabled sm>Disabled</Button>
		`,
	} )
