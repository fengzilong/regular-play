import Regular from 'regularjs';
import nextTick from './nextTick';

const Button = Regular.extend( {
	template: `
		<button ref="b" class="r-button { primary ? 'r-button-primary' : 'r-button-basic' } { sm ? 'r-button-sm' : '' } { disabled ? 'r-button-disabled' : '' }" on-mouseup="{ this.onMouseUp( $event ) }">
			<div
				ref="w"
				class="r-button-wave  { pressed ? 'pressed' : 'r-button-wave-hidden' }"
				style="width: { waveWidth }px;height: { waveHeight }px;top: { waveTop }px;left: { waveLeft }px;"
			></div>
			<div class="r-button-text">
				{#inc this.$body}
			</div>
		</button>
	`,
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

export default Button;
