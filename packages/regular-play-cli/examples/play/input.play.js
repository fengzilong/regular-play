import Input from './Input';
import './Input.less';

play( module )
	.name( 'Input' )
	.component( 'Input', Input )
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
