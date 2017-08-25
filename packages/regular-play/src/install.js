import Regular from 'regularjs';

function construct(definition, Regular) {
	const components = definition.components;
	const filters = definition.filters;
	const extendFrom = definition.extends;

	delete definition.components;
	delete definition.extends;
	delete definition.filters;

	let Ctor;
	if (definition._Ctor) {
		Ctor = definition._Ctor;
	} else {
		if (extendFrom) {
			const { Ctor: C } = construct(extendFrom, Regular);
			Ctor = C.extend(definition);
		} else {
			Ctor = Regular.extend(definition);
		}

		Ctor.filter(filters);

		definition._Ctor = Ctor;
	}

	return {
		Ctor,
		components
	};
}

function install(name, definition) {
	return function(Parent) {
		const { Ctor, components } = construct(definition, Regular);

		Object.keys(components || {}).forEach((key) => {
			install(key, components[ key ])(Ctor);
		});

		if (typeof Parent !== 'undefined') {
			Parent.component(name, Ctor);
		}

		return Ctor;
	};
}

export default function(definition) {
	if ( definition.__after__ ) {
		return definition;
	}

	return install('', definition)();
}
