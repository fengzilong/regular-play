import hljs from 'highlight.js/lib/highlight';
import hljsXML from 'highlight.js/lib/languages/xml';

hljs.registerLanguage( 'xml', hljsXML );

export default function( code ) {
	return hljs.highlightAuto( code ).value
}
