import Regular from 'regularjs';

const Input = Regular.extend( {
	template: `
		<div class="r-input-wrapper">
			<input
				class="r-input { error ? 'r-input-error' : '' } { disabled ? 'r-input-disabled' : '' } { readonly ? 'r-input-readonly' : '' } { round ? 'r-input-round' : '' } { transparent ? 'r-input-transparent' : '' } { sm ? 'r-input-sm' : '' }"
				type="{ type || 'text' }"
				value="{ value }"
				disabled="{ disabled }"
				readonly="{ readonly }"
				placeholder="{ placeholder }"
				on-click="{ this.onClick() }"
				on-input="{ this.onChange() }"
				on-focus="{ this.onFocus() }"
				ref="v"
			>
			{#if error && errorMessage}
			<div class="r-input-error-message">
				{ errorMessage }
			</div>
			{/if}
		</div>
	`,
	onChange() {
		this.$emit( 'change', this.$refs.v.value );
	},
	onFocus() {
		this.data.error = false;
		this.$emit( 'focus' );
	},
	onClick() {
		this.$emit( 'click' );
	}
} );

export default Input;
