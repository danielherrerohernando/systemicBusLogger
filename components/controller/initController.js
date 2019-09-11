module.exports = () => {
	const start = async ({ bus }) => {
		// const pubMessage = { id: 'hola' };
		// await bus.publish('particleCreated')(pubMessage);

		const onError = mess => console.error(mess);
		const onStop = mess => console.warn(mess);
		const subscribe = bus.subscribe(onError, onStop);

		let i = 1;
		const processCreatedMessage = async message => {
			console.log('Creation active', i, message.body.payload.ditaMetadata.attributes.id);
			i++;
		};
		subscribe('particleCreated', processCreatedMessage);

		let v = 1;
		const processDigestionMessage = async message => {
			console.log('Digestion active', v, message.body.payload.ditaMetadata.attributes.id);
			v++;
		};
		subscribe('particleDigested', processDigestionMessage);

		let y = 1;
		const processUpdatedMessage = async message => {
			console.log('Update active', y, message.body.payload.ditaMetadata.attributes.id);
			y++;
		};
		subscribe('particleUpdated', processUpdatedMessage);

		let x = 1;
		const processDeletionMessage = async message => {
			console.log('Deletion active', x, message.body.payload.id);
			x++;
		};
		subscribe('particleDeleted', processDeletionMessage);

		return {};
	};
	return { start };
};
