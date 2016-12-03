export default {
	template: `
		<div class="console">
			<div class="console-toolbar">
				<span title="clear console" class="iconfont" on-click="{ this.dispatch( 'clearLogs' ) }">&#xe640;</span>
			</div>
			<div class="console-logs" ref="logs">
				{#list logs as log}
				<div class="console-log">
					{#if log.count > 1}
					<span class="console-log_count">{ log.count }</span>
					{/if}
					{ log.content | json }
				</div>
				{/list}
			</div>
		</div>
	`,
	init() {
		this.$watch( 'logs', function() {
			const $logs = this.$refs.logs;
			$logs.scrollTop = $logs.scrollHeight;
		} );
	}
};
