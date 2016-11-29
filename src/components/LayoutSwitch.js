export default {
	template: `
		<button
			class="layout-switch-button"
			on-click="{ this.onChangeLayout() }"
		>switch to <strong>{ nextLayout }</strong></button>
	`,
	config() {
		const DEFAULT_LAYOUT = this.$router.current.param.layout || 'desktop';
		this.layouts = [ 'desktop', 'mobile' ];
		this.data.nextLayout = getNext( DEFAULT_LAYOUT, this.layouts );
	},
	onChangeLayout() {
		// Add layout to route params
		const router = this.$router;
		const oldParams = router.current.param;

		// encode
		Object.keys( oldParams ).forEach( k => {
			oldParams[ k ] = encode( oldParams[ k ] );
		} );

		function encode( str ) {
			return encodeURIComponent( str );
		}

		router.go( 'app', {
			param: Object.assign( {}, oldParams, {
				layout: this.data.nextLayout,
			} )
		} );

		setTimeout( () => {
			this.data.nextLayout = getNext( this.data.nextLayout, this.layouts );
			this.$update();
		}, 10 );

		// save layout
		this.dispatch( 'changeLayout', this.data.nextLayout );
	},
};

function getNext( layout, layouts ) {
	const index = layouts.indexOf( layout );
	return layouts[ ( index + 1 ) % layouts.length ];
}
