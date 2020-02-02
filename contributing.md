# How to contribute to the Write The Docs Bay Area website

## Contributing information about programs, and venues

### New events
(Instructions to come later.)

### New venues

To add a new venue to the site, you must make these changes:

1.) Make a file to save the link for the embedded map.
2.) Add an entry for the venue in the locations.yml file. The site will use this to create the floating card in the event listing that shows venue information.

It's best to make the changes in the order listed above, because you need to  the HTML file when you do the second step.
The information you create in both steps will be reused in our announcement every time we meet at the venue.

**To create a new embedded map:**
1.) In the includes/locations directory, use the template called new_location.html to create a new HTML file in the same directory, with a name appropriate for the new venue.
(You can look at other files in the directory for reference as you complete these steps.)
2.) Using Google maps, search for the venue by name and address and choose the appropriate link from the results page (as you would normally do when using Google maps)
3.) Click the hamburger menu at the top left, then choose "Share or embed map."
4.) In the modal window, select "Copy Link."
5.) Paste the link in the new HTML file, replacing the comment in line two.

**To create an entry in the `locations.yml` file**:
1.) From the top level of the `www` repo, go to the `data/locations.yml` file and open it.

2.) Make sure the venue is not already included in this file. The venues are sorted in alphabetical order by the name of the host company (followed by address or city, if the company has multiple locations).

3.) Create a heading for the new venue. At a minimum give it these attributes.

Name: The name of the venue, in plain text.
Map: A link to the Google map that willl take users to the right location.
Getting here: Contains info about accessing the site, parking, etc.

4.) Add information about the venue to the data/locations.yml file under "getting-here", and be sure to include the following information:

Bike parking
Access by public transit
How to get there by car
How to get into the right office after you arrive at the building
Here's an example:

~~~
san-lorenzo-library:
name: San Lorenzo Library
map: "locations/san-lorenzo-library.html"
getting-here:
- "BART: Take BART to the Bayfair station, then take the 97 bus to Hesperian and Paseo Grande."
- "BIKE: Bike racks in front of the library."
- "CAR: Free parking at the Library and the adjacent shopping center." name: LinkedIn
~~~


## Contributing announcements