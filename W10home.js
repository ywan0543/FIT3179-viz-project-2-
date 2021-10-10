var vg_1 = "Vaccination_choropleth_map_new.vg.json"; 

vegaEmbed("#choropleth_map", vg_1).then(function(result) { 
    
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

var vg_2 = "Vaccination_interactive_scatter_plot.vg.json"; 

vegaEmbed("#bubble_chart", vg_2).then(function(result) { 
    
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);