import './Input.less'

export default {
	template: `
		<input
			ref="input"
			type="number"
			value="{ value }"
			class="ui-input"
			spellcheck="false"
			on-input="{ this.onInput() }"
		/>
	`,
	onInput() {
		const value = this.$refs.input.value
		setTimeout( () => {
			let v = parseFloat( value )
			v = isNaN( v ) ? '' : v
			this.$emit( 'emit', v )
		}, 0 )
	},
}
