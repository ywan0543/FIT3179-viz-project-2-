var vg_1 = "Partici_map.json"; 

vegaEmbed("#choropleth_map", vg_1).then(function(result) { 
    
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

var vg_2 = "Participation_by_year.json"; 

vegaEmbed("#bar_chart", vg_2).then(function(result) { 
    
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);