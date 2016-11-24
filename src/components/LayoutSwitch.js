export default {
	computed: {
		layout: 'layout',
		layouts: 'layouts',
	},
	template: `
		<button
			class="layout-switch-button"
			on-click="{ this.onChangeLayout() }"
		>switch to <strong>{ nextLayout }</strong> mode</button>
	`,
	config() {
		const layouts = this.$get( 'layouts' );
		const layout = this.$get( 'layout' );
		this.data.nextLayout = getNext( layout, layouts );
	},
	onChangeLayout() {
		this.dispatch( 'changeLayout', this.data.nextLayout );
		setTimeout( () => {
			const layouts = this.$get( 'layouts' );
			const layout = this.$get( 'layout' );
			this.data.nextLayout = getNext( layout, layouts );
			this.$update();
		}, 10 );
	},
};

function getNext( layout, layouts ) {
	const index = layouts.indexOf( layout );
	return layouts[ ( index + 1 ) % layouts.length ];
}
