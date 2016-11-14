import { merge } from '../src/play';

const load = requireContext => {
	return requireContext.keys().map( requireContext );
};

const plays = load( require.context( '../example', true, /\.play\.js$/ ) );

merge( plays, module );
