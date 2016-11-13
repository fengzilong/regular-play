export default {
	template: `
		<div class="console" ref="console">
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
	config() {

	},
	init() {
		this.$watch( 'logs', function() {
			const $console = this.$refs.console;
			const $logs = this.$refs.logs;
			$console.scrollTop = $logs.offsetHeight;
		} );
	}
};
