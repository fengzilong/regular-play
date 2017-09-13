import Input from '../components/Input';
import '../components/Input.less';

play( module )
	.name( 'Input' )
	.component( 'Input', Input )
	.add( 'input value changes', {
		template: `
			<Input ref="play" sm value="some content..." on-change="{ this.onChange( $event ) }"></Input>
		`,
		onChange( v ) {
			this.$log( v );
		}
	}, {
		props: {
			value: String
		}
	} )
	.add( 'input disabled', `
		<Input sm disabled></Input>
	` )
