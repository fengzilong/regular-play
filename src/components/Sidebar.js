export default {
	template: `
		<ul class="sidebar-actors">
			{#list actors as spots}
			<li class="sidebar-actor">
				<div class="sidebar-actor__title">{ spots_key }</div>
				<ul class="sidebar-actor__spots">
					{#list spots as spot}
					<li class="sidebar-actor__spot">
						<a href="javascript:;" on-click="{ this.onNav( spot ) }">{ spot.description }</a>
					</li>
					{/list}
				</ul>
			</li>
			{/list}
		</ul>
	`,
	onNav( spot ) {
		// this.$router.go( '' )
		console.log( spot );
	},
};
