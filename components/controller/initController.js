module.exports = () => {
	const start = async ({ bus }) => {
		const pubMessage = { id: 'hola' };
		// await bus.publish('particleCreated')(pubMessage);

		const onError = mess => console.error(mess);
		const onStop = mess => console.warn(mess);
		const subscribe = bus.subscribe(onError, onStop);

		let i = 1;
		const processMessage = async message => {
			console.log('processing active', i, message.body.id);
			i++;
		};
		subscribe('particleCreated', processMessage);

		return {};
	};
	return { start };
};
