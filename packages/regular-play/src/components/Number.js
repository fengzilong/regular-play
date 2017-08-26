import './Input.less';

export default {
	template: `
		<input
			spellcheck="false"
			class="ui-input"
			ref="input"
			on-input="{ this.onInput() }"
		/>
	`,
	init() {
		this.$refs.input.value = this.data.value;
	},
	onInput() {
		const value = this.$refs.input.value;
		setTimeout( () => {
			this.$emit( 'emit', parseFloat( value ) );
		}, 0 )
	},
};
