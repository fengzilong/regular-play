import deindent from 'de-indent';
import hljs from 'highlight.js/lib/highlight';
import hljsXML from 'highlight.js/lib/languages/xml';

hljs.registerLanguage( 'xml', hljsXML );

export default {
	template: `
		<div class="code">
			<pre><code class="html" ref="v"></code></pre>
		</div>
	`,
	init() {
		this.$watch( 'code', code => {
			const $code = this.$refs.v;
			$code.innerHTML = hljs.highlightAuto(
				deindent( code ).trim()
			).value;
		} );
	},
};
