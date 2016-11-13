export default {
	template: `
		<div class="tabs">
			{#list source as s}
			<a class="tab { selected === s.key ? 'selected' : '' }" href="javascript:;" on-click="{ this.onClick( s ) }">
				<i class="iconfont">{ this.c( s.icon ) }</i> { s.label }
			</a>
			{/list}
		</div>
	`,
	c( str ) {
		str = str.replace( /(\\u)(\w{4})/gi, function( $0 ) {
			return ( String.fromCharCode( parseInt( ( escape( $0 ).replace( /(%5Cu)(\w{4})/g, '$2' ) ), 16 ) ) );
		});
		str = str.replace( /(&#x)(\w{4});/gi, function( $0 ) {
			return String.fromCharCode( parseInt( escape( $0 ).replace( /(%26%23x)(\w{4})(%3B)/g, '$2' ), 16 ) );
		} );
		return str;
	},
	onClick( s ) {
		this.$emit( 'change', s.key );
	}
};
