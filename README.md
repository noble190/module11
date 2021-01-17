# Module 11 Challenge

## Project Overview
The purpose of this project is to implement a javascript filter based on 5 user input fields & apply the said filter to the UFO data set.

## Results
The javascript filter has been successfully implemented. 

### Filter Fields
![Filter fields](https://github.com/noble190/module11/blob/main/filters.png)

### How to use
Users may input text into any of the filter fields, which would update the table of results. Certain fields (date) require a specific format (shown as the 'default' value).


## Summary
A functional and efficient set of filters has been implemented. However, there's a notable drawback - the operation of the filter depends on the user inputting the date field in the correct format, and requires an exact match for the entered city / state / country details.

### Recommendations for Improvements
There are a few ways this filter implementation can be made better in a future version:

* The date field can be implemented as a date picker, instead of a freeform text field. This would improve the user experience while ensuring that the date submitted is formatted consistently.

* The country / state / shape can be implemented as dropdowns. As the page is loaded, we can store the list of unique values for each attribute, and use it as a data source for its respective filter field dropdown. This would improve the user experience.

* The filter logic could be modified to match partial strings. This would make searches (especially for cities) much easier for the user.
