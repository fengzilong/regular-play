import Input from './Input';
import './Input.less';

play( Input, module )
	.name( 'Input' )
	.add( 'input value changes', {
		template: `
			<Input sm value="some content..." on-change="{ this.onChange( $event ) }"></Input>
		`,
		onChange( v ) {
			this.$log( v );
		}
	} )
	.add( 'input disabled', `
		<Input sm disabled></Input>
	` )
