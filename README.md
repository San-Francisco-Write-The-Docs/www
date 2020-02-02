# Write the Docs Bay Area

This is the code that powers [writethedocs-sfbay.org](https://writethedocs-sfbay.org). It contains information about our Bay Area Write The Docs meetup group, as well as our announcements and our meetup events. Our site is built with Jekyll.

To contribute to the Bay Area Write The Docs website, it's helpful to familiarize yourself with [Jekyll](https://jekyllrb.com/docs/) and [Markdown (Kramdown flavor)](https://kramdown.gettalong.org/). Then, check out our [Contribution Guidelines](https://github.com/San-Francisco-Write-The-Docs/www/blob/master/.github/CONTRIBUTING.md)!

## Contributing
Content for this site is generally written by organizers for Write The Docs Bay Area.

For more about how to create the files for new events, venues, and announcements, see the file called `contributing.md`.

## Generate the Site Locally

To preview the site locally, you must first clone this repository and install all dependencies. Then, you can serve the site locally with Jekyll.

### Install Dependencies
serverserver
To install dependencies:

1.  Install Ruby (version 2.4.0 or higher). Jekyll's documentation has good [instructions](https://jekyllrb.com/docs/installation/) on how to do this for various operating systems.
2.  Install [Bundler](https://bundler.io/).
    ```bash
    gem install bundler
    ```
3.  While in the project directory, run this command to install our gem dependencies:
    ```bash
    bundle install
    ```
### Build the site

If haven't served this site since installing it, the repo may not have a `_site` directory. This directory is where the server will look for the finished pages, and it's normal for the `_site` directory to be missing right after you clone the repo.

That folder and the finished version of your site will be created when you build.

To build this site, use `bundle exec jekyll build`

 You can configure Jekyll to rebuild every time you save changes so you don't have to rebuild -- Refer to the [Jekyll docs](https://jekyllrb.com/docs/) for more about that.

### Serve the Site

To serve the site, run `bundle exec jekyll serve` from your project directory, and then open "localhost:4000" in your preferred browser.
