define([
	'pro/lib/regularjs/dist/regular',
	'./nextTick',
	'text!./Button.html',
], function( R, nextTick, template ) {
	const Button = Regular.extend( {
		template: template,
		config() {
			this.data.ripple = this.data.ripple !== false;
		},
		init() {
			const handleAnimationEnd = () => {
				if( this.data.pressed !== false ) {
					this.data.pressed = false;
					this.$update();
				}
			}

			this.$refs.w && this.$refs.w.addEventListener( 'webkitAnimationEnd', handleAnimationEnd, false );

			this.$on('$destroy', () => {
				this.$refs.w.removeEventListener( 'webkitAnimationEnd', handleAnimationEnd, false );
			});
		},
		onMouseUp( e ) {
			if( this.data.disabled ) {
				return;
			}

			this.$emit( 'click' );

			if( !this.data.ripple ) {
				return;
			}

			const target = this.$refs.b;
			const pageX = e.pageX;
			const pageY = e.pageY;
			const scrollY = window.scrollY;

			const rect = target.getBoundingClientRect();
			const top = rect.top;
			const left = rect.left;
			const width = rect.width;

			const offsetX = pageX - left;
			const offsetY = pageY - top - scrollY;

			this.data.waveTop = offsetY - width / 2;
			this.data.waveLeft = offsetX - width / 2;
			this.data.waveWidth = width;
			this.data.waveHeight = width;

			this.data.pressed = false;
			this.$update();

			nextTick(() => {
				this.data.pressed = true;
				this.$update();
			});
		}
	} );

	return Button;
});
