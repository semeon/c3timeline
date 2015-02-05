
var genColumns = function(d) {
	var result = [];

	var xAxisArray = [];
	xAxisArray.push('x');

	var dataRow = [];
	dataRow.push(d.project);

	for (var i = 0; i<d.dates.length; i++) {
		var date = d.dates[i].date;
		var pr = d.dates[i].priority;
		xAxisArray.push(date);
		dataRow.push(pr);
	};

	result.push(xAxisArray);
	result.push(dataRow);

	console.log("X: ");
	console.log(result);
	return result;

}

var genColumns2 = function(d) {
    // columns: [
    //     ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
    //     ['data1', 30, 200, 100, 400, 150, 250],
    //     ['data2', 130, 340, 200, 500, 250, 350]
    // ]

	var result = [];

	var xAxisArray = [];

	xAxisArray.push('x');

	var dataRow = [];
	dataRow.push(d.project);

	for (var i = 0; i<d.dates.length; i++) {
		var date = d.dates[i].date;
		var pr = d.dates[i].priority;
		xAxisArray.push(date);
		dataRow.push(pr);
	};

	result.push(xAxisArray);
	result.push(dataRow);

	console.log("X: ");
	console.log(result);
	return result;

}


var chart = c3.generate({
    data: {
        x: 'x',
        //xFormat: '%Y-%m-%d-%w', // 'xFormat' can be used as custom format of 'x'
        columns: dataSeries4.columns,
	    type: 'bar',
	    labels: {
	    	format: function (v, id, i, j) { 
				// // v is the value of the data point where the label is shown.
				// // id is the id of the data where the label is shown.
				// // i is the index of the data point where the label is shown.
				// // j is the sub index of the data point where the label is shown.	    		

				var result;
				if (i != undefined) {
					// console.log("-- i: " +  i + " ----------------");
					// console.log(myData.dates[i]);
					// console.log("------------------------");
					result = labels[id][i];

				};
	   			return result; 	    		
	    	}
	    }
    },


    axis: {
        x: {type: 'timeseries', tick: { format: '%m/%d', fit: false, centered: false }},
		y: {
			show: false,
			min: 0,
			max: 3,
			padding: {
				top: 0,
				bottom: 0
			}
		}
    },

	bar: { zerobased: true, width: 10},
	grid: { x: {show: true}	},
	size: {height: 200},

	tooltip: {
		show: true,
		format: {
			name: function (name, ratio, id, index) { 
				return name; 
			},
			value: function (value, ratio, id, index) { 
				if (index != undefined ) {
					return labels[id][index];
					// return labels[id][i];
				}
			}
		}
	}	
});

