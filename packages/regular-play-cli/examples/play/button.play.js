import Button from '../components/Button';
import '../components/Button.less';

play( Button, module )
	.name( 'Button' )
	// .displayName( 'MyAwesomeButton' )
	.add( 'button with text', {
		template: `
			<Button
				ref="play"
				n="{ 1 }"
				type="primary"
				size="sm"
				text="Click Me"
				on-click="{ this.onPrimaryClick() }"
			></Button>
			<Button on-click="{ this.onClick() }" size="medium">Click Me</Button>
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
			disabled: {
				type: 'boolean',
			},
			text: {
				type: 'string'
			},
			n: Number
		}
	} )
	.add( 'button disabled', {
		template: `
			<Button disabled primary sm>Disabled</Button>
			<Button disabled sm>Disabled</Button>
		`,
	} )
