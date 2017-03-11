export default {
	template: `
		<div
			ref="v"
			class="resizer-{ vertical ? 'vertical' : 'horizontal' }"
		></div>
	`,
	init() {
		const self = this;
		const target = this.$refs.v;

		document.body.addEventListener( 'mousedown', onMousedown, false );
		document.body.addEventListener( 'mousemove', onMousemove, false );
		document.body.addEventListener( 'mouseup', onMouseup, false );

		const initPos = {
			x: 0,
			y: 0,
		};
		let isResizeStart = false;

		function onMousedown( e ) {
			if ( e.target === target ) {
				isResizeStart = true;
				initPos.x = e.clientX;
				initPos.y = e.clientY;
				self.$emit( 'resize-start' );
			} else {
				isResizeStart = false;
			}
		}

		function onMousemove( e ) {
			if ( !isResizeStart ) {
				return;
			}

			self.$emit( 'resize', {
				offsetX: e.clientX - initPos.x,
				offsetY: e.clientY - initPos.y,
			} )
		}

		function onMouseup() {
			isResizeStart = false;
			self.$emit( 'resize-end' );
		}

		this.$on( '$destroy', function () {
			document.body.removeEventListener( 'mousedown', onMousedown, false );
			document.body.removeEventListener( 'mousemove', onMousemove, false );
			document.body.removeEventListener( 'mouseup', onMouseup, false );
		} );
	},
}
