import deindent from 'de-indent';
import highlight from '../utils/highlight';

export default {
	template: `
		<div class="code">
			<pre><code class="html" ref="v"></code></pre>
		</div>
	`,
	init() {
		this.$watch( 'code', code => {
			const $code = this.$refs.v;
			$code.innerHTML = highlight( deindent( code ).trim() );
		} );
	},
};
