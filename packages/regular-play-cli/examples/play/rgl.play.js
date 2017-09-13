import RGL from '../components/RGL';

play( RGL, module )
	.name( 'RGL' )
	.add( 'basic', {
		template: `
			<RGL on-click="{ this.onClick() }"></RGL>
		`,
		onClick() {
			this.$log( 'clicked' );
		},
	} );
