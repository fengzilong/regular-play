export default {
	template: `
		<div class="console">
			<div class="console-toolbar">
				<span data-balloon="Clear Console" data-balloon-pos="right" class="iconfont console-toolbar-item" on-click="{ this.dispatch( 'clearLogs' ) }">&#xe640;</span>
			</div>
			<div class="console-logs" ref="logs">
				{#list logs as log}
				<div class="console-log">
					{#if log.count > 1}
					<span class="console-log_count">{ log.count }</span>
					{/if}
					{ this.process( log.content ) }
				</div>
				{/list}
			</div>
		</div>
	`,
	process( content ) {
		if ( typeof content === 'undefined' ) {
			return 'undefined';
		} else {
			return JSON.stringify( content );
		}
	},
	init() {
		this.$watch( 'logs', function() {
			const $logs = this.$refs.logs;
			$logs.scrollTop = $logs.scrollHeight;
		} );
	}
};
