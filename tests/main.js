require.config({
	urlArgs: "bust=" + Math.random(),
	baseUrl: '',
	paths: {
		// basic libraries
		'jquery': 'components/jquery/jquery',
		'underscore': 'components/underscore/underscore',

		// test purpose libraries
		'eventemitter2': 'components/eventemitter2/lib/eventemitter2',

		// the module files go here
		'_.mixins': '../_.mixins',

		// DEMO
		'demo-main': 'demo',	// the main file for the demo

		// UNIT TESTS
		'tests-main': 'tests',	// the main file for tests

		// other tests go here
		'interface-tests': 'tests/interface',
		'args-tests': 'tests/args',
		'branch-tests': 'tests/branch',
		'getset-tests': 'tests/getset',
		'asynch-tests': 'tests/asynch',
		'mapo-tests': 'tests/mapo',
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
});
	
if (window.__unit) {

	// load the tests
	require(['tests-main'], function(undef) {

		// tests were already run in the main tests file

		// QUnit was set not to autostart inline in tests.html
		// finally start the QUnit engine.
		QUnit.load();
		QUnit.start();
	});

} else {

	require(['demo-main'], function(demo) {

	});

}