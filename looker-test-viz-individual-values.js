const visObject = {

	create: function(element, config){
		element.innerHTML = "<h1>Ready to render!</h1>";
	},
	updateAsync: function(data, element, config, queryResponse, details, done){
		var html = "";

        // specify first row from the data array
        var firstRow = data[0];

        // specify the first, second and third measure column names in metadata info in the queryResponse object
        // then, use those names as keys in the firstRow object/dictionary
        var cell1 = firstRow[queryResponse.fields.measures[0].name];
		var cell2 = firstRow[queryResponse.fields.measures[1].name];
        var cell3 = firstRow[queryResponse.fields.measures[2].name];

        html = LookerCharts.Utils.htmlForCell(cell1) + "<br/>" + LookerCharts.Utils.htmlForCell(cell2) + "<br/>" + LookerCharts.Utils.htmlForCell(cell3)
		element.innerHTML = html;
		done()
    }
	
};

looker.plugins.visualizations.add(visObject);