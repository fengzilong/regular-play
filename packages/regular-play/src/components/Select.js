import './Input.less';

export default {
	template: `
		<select
			spellcheck="false"
			class="ui-input"
			ref="v"
			value="{ value }"
			on-change="{ this.onChange() }"
		>
			{#if list}
				{#list list as v}
					<option value="{ v }">{ v }</option>
				{/list}
			{/if}
		</select>
	`,
	onChange() {
		const value = this.$refs.v.value;
		this.$emit( 'emit', value );
	},
};
