import Input from '../../components/Input'
import Number from '../../components/Number'
import Switch from '../../components/Switch'
import Select from '../../components/Select'
import FormItem from '../../components/form-item'

export default {
	components: {
		Input,
		Number,
		Switch,
		Select,
		FormItem,
	},
	filters: {
		c( v ) {
			switch ( v.type ) {
				case 'string':
					return 'Input'
				case 'number':
					return 'Number'
				case 'boolean':
					return 'Switch'
				case 'enum':
					return 'Select'
				default:
					// skip
			}
		},
	},
	template: `
		<div style="padding: 20px;">
			{#if props}
			{#list props as prop}
				<FormItem title="{ prop_key }">
					<r-component is="{ prop | c }" value="{ data[ prop_key ] || '' }" list="{ prop.list || [] }" on-emit="{ this.onEmit(prop_key, $event) }" />
				</FormItem>
			{/list}
			{/if}
		</div>
	`,
	onEmit( key, value ) {
		this.$emit( 'change', {
			key, value
		} )
	},
}
