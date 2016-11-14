import hljs from 'highlight.js/lib/highlight';
import hljsXML from 'highlight.js/lib/languages/xml';

hljs.registerLanguage( 'xml', hljsXML );

export default {
	template: `
		<div class="code" ref="v"></div>
	`,
	init() {
		this.$watch( 'code', code => {
			const $code = this.$refs.v;
			$code.innerHTML = hljs.highlightAuto( code ).value;
		} );
	},
};
