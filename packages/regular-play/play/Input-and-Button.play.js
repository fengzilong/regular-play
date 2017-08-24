import Button from './Button';
import './Button.less';
import Input from './Input';
import './Input.less';

play( Button, module )
	.name( 'Button' )
	.displayName( 'Input and Button' )
	.component( 'Input', Input )
	.add( 'input and button', {
		template: `
			<Input on-change="{ this.onNameChange( $event ) }"></Input>
			<Button on-click="{ this.onSubmit() }" primary sm>Submit</Button>
		`,
		onNameChange( v ) {
			this.name = v;
		},
		onSubmit() {
			this.$log( this.name );
		},
	}, {
		backgroundColor: '#F2F2F2',
	} )
