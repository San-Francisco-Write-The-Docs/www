# How to contribute to the Write The Docs Bay Area website

## Contributing information about programs, and venues

### New events

Before you begin:

* Have the text of the event post ready to go.
* Clone the Write The Docs WWW repo to your local machine. The site has to be built locally before changes are merged.
* Use the README.md file at the top level of this repo to install dependencies and make sure you can build the Jekyll site.
* Be prepared to work in a text editor (like Atom or Sublime Text), use Git in the command line, and cut-and-paste some commands into the terminal to build Jekyll and start the server.

The general workflow goes like this:

1. Working in the WWW repo on your local machine, create a new branch in Git for your work. (Naming convention <last_name>-<month_of_event>)
1. Create the new event posting using the steps in the following section.
1. Go to the root directory of the repo and open the _config.yml file. Around line 29 or so, find the `next_event` attribute. You need to change the value of `next_event` to make it the same as the `event_id` in your upcoming event (found on line 9 or so in the event template). Without this change, the event will not appear on the site. Config file example: `next_event: "may-2021-analytics"`.
1. Build the Jekyll site and then start a server so you can view it locally. (Never merge changes without building locally. So many small things can make the build fail.) Instructions are in the README.md file.
1. Review the new or changed parts of the site to make sure they rendered as expected and nothing is broken.
1. Fix the site if necessary. If you made changes repeat the previous step.
1. When everything is working, commit your changes in Git and then push the new branch to the remote (e.g. `git push -u origin <local_branch_name>`)
1. Go to the WTD-WWW repo on GitHub and create a pull request for your branch. **[The instructions are here](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request#creating-the-pull-request)**
1. If you have admin privileges, merge the PR. If not, ask someone to merge the PR and grant you the admin privileges.  


Here's how to create the event posting:

1. Start with a blank template. Use the file stored here: `content/events/_template.md`. Don't delete anything in the template when you copy it.
1. Save a copy of the template file in the `events/` directory, under the current year, and name it for the month in which the event occurs. For example, if you were posting the event for May 2021, you would save the file here: `content/events/2021/may.md`. NOTE: The names of files and directories are important because Jekyll builds the site programmatically -- if naming conventions are ignored, the build might fail.
1.  Paste the text of the announcement at the very bottom of the new file you created.
1. Update the fields in the YAML header at the top of the document. The template contains comments that explain the purpose of each field.




### New venues

To add a new venue to the site, you must make these changes:

1.  Make a file to save the link for the embedded map.
2.  Add an entry for the venue in the locations.yml file. The site will use this to create the floating card in the event listing that shows venue information.

It's best to make the changes in the order listed above, because you need to  the HTML file when you do the second step.
The information you create in both steps will be reused in our announcement every time we meet at the venue.

#### To create a new embedded map:

1.  In the `_includes/locations` directory, use the template called `new_location.html` to create a new HTML file in the same directory, with a name appropriate for the new venue.
(You can look at other files in the directory for reference as you complete these steps.)
2.  Using Google Maps, search for the venue by name and address and choose the appropriate link from the results page (as you would normally do when using Google Maps).
3.  Click the hamburger menu at the top left, then choose "Share or embed map."
4.  In the modal window, select "Copy Link."
5.  Paste the link in the new HTML file, replacing the comment in line two.

#### To create an entry in the `locations.yml` file

1.  From the top level of the `www` repo, go to the `_data/locations.yml` file and open it.
2.  Make sure the venue is not already included in this file. The venues are sorted in alphabetical order by the name of the host company (followed by address or city, if the company has multiple locations).
3.  Create a heading for the new venue, using the same name you used for the embedded map file.
    At a minimum give it these attributes.
    ```yaml
    event-id:
      name: The name of the venue, in plain text.
      map: The path, relative to the _includes directory, where the Google Maps embed lives (typically "locations/filename.html")
      getting-here: Contains info about accessing the site, such as transit options and parking.

4. Add information about the venue to the `_data/locations.yml` file as an array under "getting-here", and be sure to include the following information:
   *  Bike parking
   *  Access by public transit
   *  How to get there by car
   *  How to get into the right office after you arrive at the building

Here's an example:

```yaml
san-lorenzo-library:
name: San Lorenzo Library
map: "locations/san-lorenzo-library.html"
getting-here:
- "BART: Take BART to the Bayfair station, then take the 97 bus to Hesperian and Paseo Grande."
- "BIKE: Bike racks in front of the library."
- "CAR: Free parking at the Library and the adjacent shopping center." name: LinkedIn
```


## Contributing announcements

To contribute an announcement:
* Use the template found at `content/_announcements/_template.md`.
* Remember to removed the `published:false` flag when ready to publish.
* Remember to set the `toc:false` flag.
* Save the announcement in `content/_announcements`. That's all you have to do for announcements to appear on the site.
