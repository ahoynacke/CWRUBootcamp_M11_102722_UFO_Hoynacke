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

