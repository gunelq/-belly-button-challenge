// Build the metadata panel
function buildMetadata(sample) {
  // Fetch the JSON data
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let sample_metadata = metadata.filter(sampleObj => sampleObj.id === parseInt(sample))[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");
    

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(sample_metadata).forEach(([key, value]) => {
      panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
  });
});
}

// function to build both charts
 function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samples = data.samples; 
    // Log the samples data
    console.log(samples); 

    // Filter the samples for the object with the desired sample number
    let sample_data = samples.filter(sampleobj=> sampleobj.id === sample)[0];
    // Log the filtered sample data
    console.log( sample_data);

    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = sample_data.otu_ids;
    let otu_labels = sample_data.otu_labels;
    let sample_values = sample_data.sample_values

    // Build a Bubble Chart
    let bubbleLayout = {
      title: {
        text: 'Bacteria Cultures Per Sample',
        font:{
          size: 20, // Set the font size in pixels
          color: 'black',// Set the font color (e.g., black)
          weight: '1800' // Make the text bold
        }
      },  

      margin: { t: 30, l: 50 },
      xaxis: { title: "OTU ID" },
      yaxis: { title: 'Number of Bacteria' }
    };
    let bubble_sample = [{
      x: otu_ids,
      y: sample_values,
      mode: 'markers',
      marker: {
        size : sample_values,
        color: otu_ids,
        colorscale:  [[0, 'rgb(87, 126, 145)'], [0.25, 'rgb(75, 175, 227)'], [0.45, 'rgb(166, 206, 227)'], [0.65, 'rgb(51,160,44)'], [0.85, 'rgb(255, 245, 227)'], [1, 'rgb(211, 222, 227)']]},
      text: otu_labels
      }];
  
  
    // Render the Bubble Chart
    Plotly.newPlot("bubble", bubble_sample, bubbleLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let yticks = otu_ids.map(x => `OTU: ${x}`);
    console.log(yticks);

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    let trace1 = {
      x: sample_values.slice(0, 10).reverse(),
      y:  yticks.slice(0, 10).reverse(),
      type: 'bar',
      marker: {
        color: sample_values.slice(0, 10).reverse(),
        colorscale:  [[0, 'rgb(87, 126, 145)'], [0.25, 'rgb(75, 175, 227)'], [0.45, 'rgb(166, 206, 227)'], [0.65, 'rgb(51,160,44)'], [0.85, 'rgb(255, 245, 227)'], [1, 'rgb(211, 222, 227)']], 

      },
      text: otu_labels.slice(0, 10).reverse(),
      orientation: 'h',
      hoverinfo: otu_labels,
      
    };

    // Render the Bar Chart
    let traces = [trace1];
    
      // Apply a title to the layout
      let layout = {
        title: {
         text: "Top 10 Bacteria Cultures Found",
         font: {
            family: 'Verdana, sans-serif',
            size: 24, // Set the font size
            color: '#505050' , // Set the font color
            weight: 'bolder' // Make the font bold
      }
    },
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("bar", traces, layout);

});

 }

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    console.log(data);

    // Get the names field
    let names = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown = d3.select("#selDataset"); 

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    for (let i = 0; i < data.names.length; i++) {
      let name = data.names[i];
      dropdown.append("option").text(name).property("value", name);
    }

    // Get the first sample from the list

    let first_sample = names[0];
    console.log(first_sample);


    // Build charts and metadata panel with the first sample
    buildCharts(first_sample);
    buildMetadata(first_sample);
  });
}


// Function for event listener
function optionChanged(newSample) {

  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
};

// Initialize the dashboard
init();