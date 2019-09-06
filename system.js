const System = require('systemic');
const initMetrics = require('systemic-azure-metrics');
const { join } = require('path');

module.exports = () =>
	new System({ name: 'serviceBusLogger' })
		.add('metrics', initMetrics()) // metrics need initialising before systems related to connections start
		.dependsOn('config')
		.bootstrap(join(__dirname, 'components'));

