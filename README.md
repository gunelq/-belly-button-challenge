# -belly-button-challenge
Homework for Module 14-JavaScript
Belly Button Challenge
For this homework, we built an interactive dashboard with explanation of the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. 
Our dataset reveals that a small handful of microbial species  were present in more than 70% of people, while the rest were relatively rare.

We did  the following steps:

Used the D3 library to read in samples.json from the URL: https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.

Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in each individual.

Used sample_values as the values for the bar chart.
Used otu_ids as the labels for the bar chart.
Used otu_labels as the hover text for the chart.
Created a bubble chart that displays each sample.

Used otu_ids for the x-axis values.
Used sample_values for the y-axis values.
Used sample_values for the marker sizes.
Used otu_ids for the marker colors.
Used otu_labels for the text values.
Displayed the sample's metadata, i.e., an individual's demographic information.

Looped through each key-value pair from the metadata JSON object and created a text string.
Appended an HTML tag with that text to the #sample-metadata panel.
Updated all the plots when a new sample was selected. I was welcome to create any layout I liked for my dashboard.

Deployed the app to a free static page hosting service; I used GitHub Pages. Submitted the links to the deployment and the GitHub repository. Ensured that the repository has regular commits and a thorough README.md file.

Hints:
Used console.log inside the JavaScript code to see what the data looks like at each step.
Referred to the Plotly.js documentation when building the plots.
Free static page (GitHub Pages):

https://gunelq.github.io/belly-button-challenge/


References:
Hulcr, J. et al. (2012). A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/
