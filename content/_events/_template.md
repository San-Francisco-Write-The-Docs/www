---
published: false
           # The value above must be changed to "true" for the post to appear on the site.
upcoming: true
layout: events/event
           # Don't change the layout value
title: Replace with a title
           # The value of "title" will be the main heading. Don't put this heading in the body of the post
event-id: Replace with an event-id
           # For event-id use the format: month-year-brief-title. e.g. feb-2020-lightning-talks. Each id must be unique within this project.
year: 2020
           # Set this to the year of the event.
event-date: Thursday, February 31, 3020
           # Use the date format, Weekday, Month Day, Year. Example: Thursday, February 21, 2020. This date will be published in the post -- make sure it is correct.
locale: locale
           # san-francisco, east-bay, or south-bay, mapped to _data/locales.yml
location: location
           # This is only relevant for in-person meetups. Location names map to _data/locations.yml file. If the venue is new, it needs to be added to that file. The instructions are in the contributing.md file.
sponsor: sponsor (exclude if the event isn't sponsored - mapped to _data/sponsors.yml)
           # Sponsors provide the food and drinks for an in-person event. If there is a sponsor, include them here.
rsvp_open: true
           # Always set this to true, in order to show the RSVP button)
meetup-link: https://www.meetup.com/virtual-write-the-docs-west-coast-quorum/events/276616460/
           # The example link above is for a past event. Replace it with the link to your new event posting on meetup.com. When readers click the RSVP button, it will take them to that site to RSVP. If WTD should ever stop using meetup.com, this link will be used for some other service that allows readers to RSVP.
description: |
  Come and present _your_ lightning talk, or join us as a member of the audience.
#
           # Write a short description of the event. This appears under your title on the home page of the site, before readers click through for the full text of the event posting.
           # Starting with a pipe symbol ("|") followed by a line break allows you to write a text block with paragraph breaks inside.
form:
  id: id (don't include the #, for the modal dialog)
  title: title for the form's modal dialog
  embed: |
   embed code for the form
#
           # The form section allows you to embed a google form in the site. Check with Claire Lundeby for more info. :- )
agenda: |
    * If you have an agenda, put it here as bullet points. Otherwise - remove this variable entirely.
#
           # The agenda details what will happen at what times during the meeting. It appears as a bulleted list on the right margin of an event posting, under the RSVP button. Take a look another event posting file for an example of how to create this in Markdown.
           # Starting with a pipe symbol ("|") followed by a line break allows you to write a text block with paragraph breaks inside.
---

## Use this heading for an event tagline -- THIS IS NOT THE SAME AS THE TITLE. DO NOT PUT THE TITLE ANYWHERE IN THE BODY (BELOW THE FRONT MATTER)

Put in the event announcement information here

## Food & refreshments

Add food and refreshment details here (If the event is an in-person event.)
