import play from '../src/play';
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
			<Input value="{ name }" on-change="{ this.onNameChange( $event ) }"></Input>
			<Button on-click="{ this.onSubmit() }" primary sm>Submit</Button>
		`,
		onNameChange( v ) {
			this.data.name = v;
		},
		onSubmit() {
			this.$log( this.data.name );
		},
	} )
