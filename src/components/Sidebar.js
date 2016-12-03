export default {
	computed: {
		actors: 'actors',
		layout: 'layout',
	},
	template: `
		<aside class="sidebar">
			<ul class="sidebar-actors">
				{#list actors as spots}
				<li class="sidebar-actor">
					<div class="sidebar-actor__title">{ spots_key }</div>
					<ul class="sidebar-actor__spots">
						{#list spots as spot}
						<li class="sidebar-actor__spot { ( this.$router.current.param.name === spot.displayName && this.$router.current.param.description === spot.description ) ? 'active' : '' }">
							<a href="javascript:;" on-click="{ this.onNav( spot ) }">{ spot.description }</a>
						</li>
						{/list}
					</ul>
				</li>
				{/list}
			</ul>
		</aside>
	`,
	onNav( { displayName: name, description } ) {
		const layout = this.$get( 'layout' );

		let targetUrl = `?name=${ encode( name ) }&description=${ encode( description ) }`;

		function encode( str ) {
			return encodeURIComponent( str );
		}

		if ( layout ) {
			targetUrl = `${ targetUrl }&layout=${ layout }`;
		}
		this.$router.nav( targetUrl );
	},
};
