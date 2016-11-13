import Sidebar from './Sidebar';
import Main from './Main';

export default {
	components: {
		Sidebar,
		Main
	},
	template: `
		<div class="app">
			<Sidebar></Sidebar>
			<Main></Main>
		</div>
	`,
	config() {

	}
};
