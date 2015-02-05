var myData = {
	project: 'Ratchet',
	dates: [
		{date: '2015-02-11', priority: 2, event: 'Int. Demo'},
		{date: '2015-02-16', priority: 2, event: 'Alpha Demo'},
		{date: '2015-03-13', priority: 2, event: 'Beta Release'},
		{date: '2015-03-31', priority: 2, event: 'Production Release'},
		{date: '2015-04-20', priority: 2, event: 'Patch #2'}
	]
};

var dataSeries4 = {

	columns: [
		['x', 	
			'2015-02-04', 	
			'2015-02-11', 	
			'2015-02-16', 	
			'2015-03-13'],

		['Ratchet',
			null, 
			2, 
			2, 
			2],

		['MPSD',
			1, 
			1, 
			null, 
			null]
	],

	// labels['Ratchet']: 
	// [
	// 	null,	
	// 	'Int. Demo',
	// 	'Alpha Demo',
	// 	'Beta Release'],

	// labels['MPSD']: 
	// [
	// 	'IA Review',
	// 	'Hi-Fi Desing',
	// 	null,
	// 	null]
	// ]
};


var labels = {};
labels['Ratchet'] =  
	[
		null,	
		'Int. Demo',
		'Alpha Demo',
		'Beta Release'
	];

labels['MPSD'] =
	[
		'IA Review',
		'Hi-Fi Desing',
		null,
		null
	];







