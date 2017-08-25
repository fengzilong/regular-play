import './form-item.less';

export default {
	template: `
		<div class="ui-form-item">
			<div class="ui-form-item__label">
				<div>{ title }</div>
			</div>
			<div class="ui-form-item__content">{#inc this.$body}</div>
		</div>
	`,
	config() {

	},
}
