import './Switch.less'

export default {
	template: `
		<span
			class="ui-switch { value ? 'ui-switch--checked' : '' }"
			on-click="{ this.onToggle() }"
		>
			<span class="ui-switch__block"></span>
		</span>
	`,
	onToggle() {
		this.data.value = !this.data.value
		this.$update()

		this.$emit( 'emit', this.data.value )
	},
}
