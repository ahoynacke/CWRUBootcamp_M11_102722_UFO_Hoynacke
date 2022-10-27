# CWRUBootcamp_M11_102722_UFO_Hoynacke
# Project Background
Dana’s webpage and dynamic table are working as intended, but she’d like to provide a more in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time. In addition to the date, you’ll add table filters for the city, state, country, and shape.
This new assignment consists of one technical analysis deliverable - filter UFO sightings on multiple criteria

# Deliverable 1: Filter UFO sightings on multiple criteria
Using JavaScript and HTML, you’ll modify the code in your index.html file to create more table filters. In addition to the date filter you created in this module, you’ll add filters for the city, state, country, and shape.

## The list element that creates the button is removed, and there are five list elements for filtering in the index.html file.
Screen shots of the HTML code shown below. 

<img width="496" alt="Screen Shot 2022-10-27 at 7 06 08 PM" src="https://user-images.githubusercontent.com/111096384/198415727-0088fce3-80ec-43a6-8b89-8e160f76c586.png">

<img width="537" alt="Screen Shot 2022-10-27 at 7 06 15 PM" src="https://user-images.githubusercontent.com/111096384/198415744-8ac6ce6b-1f52-48c5-9364-3d2a404442a4.png">

Screen shot of buttom removed

<img width="359" alt="Screen Shot 2022-10-27 at 7 10 43 PM" src="https://user-images.githubusercontent.com/111096384/198415785-edaf140f-b674-45eb-b4f3-c3198c1c2713.png">

## The event listener is modified to detect changes to each filter in the app.js file.
Update Filter code shown below 

<img width="425" alt="Screen Shot 2022-10-27 at 7 24 37 PM" src="https://user-images.githubusercontent.com/111096384/198416011-f3b2e6fd-f39e-47aa-905a-812da2148194.png">

## The updateFilters() function saves the element, value, and the id of the filter that was changed. 
Code used to save the elecment, value and id: 

let inputElement = d3.select(this);
let inputValue = inputElement.property("value");
let inputID = inputElement.attr("id");

## The filterTable() function loops through all of the filters and keeps any data that matches the filter values.
code to loop through all the filters: 

if (inputValue) {
filters[inputID] = inputValue;
} else{filters ={};};
filterTable(filters);

## The webpage filters the table correctly based on user input.
Image of Code: 

<img width="383" alt="Screen Shot 2022-10-27 at 7 24 37 PM" src="https://user-images.githubusercontent.com/111096384/198416330-2f97bd5e-1798-4d0e-971e-dbead4db75bf.png">

# Deliverable 2
## Overview of Project: Explain the purpose of this analysis.
The overall purpose of this project is to enhace the webpage capabilities by adding filters with multiple factors. 
D3 functionality makes an instance listener for multiple changes and displaying the required datasets on the result table. 
## Results: Describe to Dana how someone might use the new webpage by walking her through the process of using the search criteria. Use images of your webpage during the filtering process to support your explanation.
Below are detailed steps outlining how to use the new webpage and filter per the criteria:
Homepage of our website: 
<img width="1414" alt="Screen Shot 2022-10-27 at 7 37 18 PM" src="https://user-images.githubusercontent.com/111096384/198417529-74bd4b68-3fa8-4b70-ad8f-5a9722362bfe.png">

Navigate to the filtering table 
<img width="1420" alt="Screen Shot 2022-10-27 at 7 37 46 PM" src="https://user-images.githubusercontent.com/111096384/198417540-1c2e45a7-4d47-4617-a3ae-baf9226791b7.png">

On the filtering table you can choose any category to search by. You can search by just one or many.
Enter what you want to filter by,
Click "Filter Table" and notice the results show on the right side of the page. 

<img width="1406" alt="Screen Shot 2022-10-27 at 7 38 33 PM" src="https://user-images.githubusercontent.com/111096384/198417760-d1b2e63f-c199-423b-8e23-1591d37dcba4.png">


## Summary: In a summary statement, describe one drawback of this new design and two recommendations for further development.

I think the site could still be improved. Adding tools such as export would improve the design. I would also reccommend creating pages to navigate to within the webpage vs it all being on one homepage. 
