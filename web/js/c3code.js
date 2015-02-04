
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


var chart = c3.generate({
    data: {
        x: 'x',
        //xFormat: '%Y-%m-%d-%w', // 'xFormat' can be used as custom format of 'x'
        columns: genColumns(myData),
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
					result = myData.dates[i].event;
				};
	   			return result; 	    		
	    	}
	    }
    },


    axis: {
        x: {type: 'timeseries', tick: { format: '%m/%d' }},
		y: {
			show: false,
			min: 0,
			max: 10,
			padding: {
				top: 0,
				bottom: 0
			}
		}
    },

	bar: { zerobased: true, width: 15},
	grid: { x: {show: true}	},
	size: {height: 200},

	tooltip: {
		show: true,
		format: {
			name: function (name, ratio, id, index) { 
				return name; 
			},
			value: function (value, ratio, id, index) { 
				if (index != undefined) {
					return myData.dates[index].event;
				}
			}
		}

	}	



});

// setTimeout(function () {
//     chart.load({
//         columns: [
//             ['data3', 400, 500, 450, 700, 600, 500]
//         ]
//     });
// }, 1000);
