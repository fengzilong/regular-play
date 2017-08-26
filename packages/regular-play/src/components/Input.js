import './Input.less'

export default {
	template: `
		<input
			ref="input"
			value="{ value }"
			class="ui-input"
			spellcheck="false"
			on-input="{ this.onInput() }"
		/>
	`,
	onInput() {
		const value = this.$refs.input.value
		setTimeout( () => {
			this.$emit( 'emit', value )
		}, 0 )
	},
}
