![Alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQ_piv2GVA-o5_GIHWgO2s3TgQyrEsOtMLx0xIWKXNjZihi6G)
![Alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPWiSNROXs6bgE5tCE1K0U5GxWYbPtWAUzNykjbmAs-xPc0iT3Q)
![Alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaslC_J7vtJGVDJ5GkXLMKmAT0oAM3Lehvd1BDphj74Snnflsg)

# US Equity Markets 2017

This website is a **SPA** (Single Page Application) `Data Visualisation Dashboard Interface` which harnesses, the incredible power of [D3.js](https://d3js.org/) created by Mike Bostock. The primary target audience is any user who wants to gain an overview and analysis of the US Equities priced under USD50, at 2017 year end.

This SPA site provides users with a drop-down selector, pie charts, bar charts and a scatter plot chart. Providing data visualisation across various dimensions i.e. number of equities, market capitalisation, volume, price, sector, industry and domiciled country.

## UX

The following section describes the UX process for this project.

#### UX Process
1. **US Equity Markets** - Using my own knowledge, sketched out potential sets of data to include within the dashboard.
2. **Layout** - Reviewed Code Institute learnings to date, Bootstrap documentation and templates, researching D3.js online to extract design ideas.
3. **User Stories** - Walked through user stories.
    1. **About** - As a user, I want to clearly understand the purpose and data, included within this dashboard.
    2. **User Guidance** - As a user, I want to to clearly understand how to use this dashboard.
    3. **Select Industry** - As a user, I want to be able to drill into each sector by industry type.
    4. **Number of Equities by Sector** - As a user, I want to be able to view the number of equities by sector and drill into each sector by industry type.
    5. **Market Capitalisation by Sector** - As a user, I want to be able to view the market capitalisation by sector and drill into each sector by industry type.
    6. **Market Capitalisation by Domiciled Country** - As a user, I want to be able to view the market capitalisation by domiciled country and drill into each sector by industry type.
    7. **Average Daily Volume by Sector** - As a user, I want to be able to view the average daily volume by sector and drill into each sector by industry type.
    8. **Average Daily Volume by Domiciled Country** - As a user, I want to be able to view the average daily volume by domicilied country, by sector and drill into each sector by industry type.
    9. **Average Daily Volume per Equity by Sector** - As a user, I want to be able to view the average daily volume per equity by sector and drill into each sector by industry type.
    10.**Average Daily Volume per Equity -V- Price per Equity** - As a user, I want to be able to view the average daily volume per equity verses price per equity, by sector and drill into each sector by industry type.
4. **Wireframe** - Sketched the wireframe on paper, to include functionality for each user story, meeting users needs via a dashboard.

## Features
 
### Existing Features

The following section describes all the front-end features in this project.

1. **About** - Provides users with a description of the dashboards purpose and what data is included.
2. **User Guidance** - Provides users with guidance on how to use the dashboard.
3. **Select Industry** - A drop-down selector, allowing users to select all or specific industries. When a selection is made, each chart is then automatiically upated with the relevant selections made. Also allows users to reset all charts by selecting 'select all'.
4. **Number of Equities by Sector** - A bar chart displaying the number of equities by sector, which is updated by industry type if a user makes changes via the 'Select Idustry' drop-down selector. The bar chart provides an X and Y axis, visualisation of relevant data, and is useful for understanding comparisons.
5. **Market Capitalisation by Sector** - A pie chart displaying the market capitalisation by sector, which is updated by industry type if a user makes changes via the 'Select Idustry' drop-down selector. Provides subset visualisation of all parts and is useful for understanding the whole picture.
6. **Market Capitalisation by Domiciled Country** - A pie chart displaying the number of equities by sector, which is updated by industry type if a user makes changes via the 'Select Idustry' drop-down selector. Provides subset visualisation of all parts and is useful for understanding the whole picture.
7. **Average Daily Volume by Sector** - A bar chart displaying the number of equities by sector, which is updated by industry type if a user makes changes via the 'Select Idustry' drop-down selector. The bar chart provides an X and Y axis, visualisation of relevant data, and is useful for understanding comparisons.
8. **Average Daily Volume by Domiciled Country** - A bar chart displaying the number of equities by sector, which is updated by industry type if a user makes changes via the 'Select Idustry' drop-down selector. The bar chart provides an X and Y axis, visualisation of relevant data, and is useful for understanding comparisons.
9. **Average Daily Volume per Equity by Sector** - A bar chart displaying the number of equities by sector, which is updated by industry type if a user makes changes via the 'Select Idustry' drop-down selector. The bar chart provides an X and Y axis, visualisation of relevant data, and is useful for understanding comparisons.
10. **Average Daily Volume per Equity -V- Price per Equity** - A scatter plot chart displaying the number of equities by sector, which is updated by industry type if a user makes changes via the 'Select Idustry' drop-down selector. Provides an X and Y axis, visualisation of relevant data, and is useful for understanding correlation/distribution.

### Features to Implement
1. **Interactive Tutorial** - Add a feature to include an interactive user guidance tutorial.
2. **Comma Seperator** - Update hoover metrics to include a comma seperator.

## Technologies Used

The following section describes all technologies and tools used to construct this project.

- [Cloud 9 IDE](https://aws.amazon.com/cloud9/)
    - The project used **Cloud 9**, online integrated development environment, to construct the code end to end.
- [Bootstrap Template](https://github.com/BlackrockDigital/startbootstrap-scrolling-nav)
    - This project uses **Bootstrap Nav scrolling bar template**. A blank template with a main navigation and grid layout. This blank template was used as a starting block and tailored/built upon for this specific website. The `index.html` and `main.css` files are predominantly all, the developers code. All other code was included with the Bootstrap template.
- [Font Awesome](https://fontawesome.com/)
    - This project uses **Font Awesome**, a library of icons, to add the social media icons within the footer.
- [HTML](https://en.wikipedia.org/wiki/HTML)
    - This project uses **HTML**, the standard mark-up language used to build website layout, which was written within the `index.html` file.
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    - This project uses **CSS**, a style sheet language, used to add styling to a website. The `main.css` file was added to this project, to add additional styling on top of the Bootstrap template.
- [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools/)
    - This project uses **Chrome Dev Tools**, a set of web developer tools, to continuously test and inspect that the web pages are rendering as expected within the browser.
- [GitHub](https://github.com/)
    - This project uses **GitHub**, a web hosting service, for version control and final project deployment.
- [All Other Technologies](https://github.com/BlackrockDigital/startbootstrap-scrolling-nav)
    - All other technologies within this project were included with the Bootstrap template.



### Project Technologies

2. Bootstrap CSS: Bootswatch [Flatly Theme](https://bootswatch.com/flatly/) `bootstrap.min.css` file uploaded and linked within `index.html` `<head>` section.

3. DC CSS: [DC.js](https://dc-js.github.io/dc.js/) `dc.min.css` file uploaded and linked within `index.html` `<head>` section.

4. Custom CSS: `style.min.css` file created and linked within `index.html` `<head>` section. CSS code written within this file to style `<body>`.

5. D3 JavaScript: [D3.js](https://d3js.org/) `d3.min.js` file uploaded and linked within `index.html` `<head>` section. D3 is a JavaScript library for producing interactive data visualizations. It uses a combination of SVG, HTML5, and CSS. D3 is ordered as the first JavaScript link, as `dc.min.js` & `crossfilter.min.js` are dependencies and will not render in the browser otherwise.

6. Crossfilter JavaScript: [Crossfilter.min.js](http://square.github.io/crossfilter/) `crossfilter.min.css` file uploaded and linked within `index.html` `<head>` section. Crossfilter provides automated related dataset updates.

7. DC JavaScript: [DC.js](https://dc-js.github.io/dc.js/) `dc.min.css` file uploaded and linked within `index.html` `<head>` section. A charting library built on top of D3 and is used for interactive charting.

8. Queue JavaScript: [D3-Queue.js](https://github.com/d3/d3-queue) `queue.min.css` file uploaded and linked within `index.html` `<head>` section. Assists loading files i.e. defers calling function until the data is ready.
9. Custom JavaScript: `graph.js` file created and linked within `index.html` `<head>` section. JavaScript code written in this file to build charting.
10. Excel CSV Dataset: `Equities.csv` file uploaded and referenced throughout `graph.js`code to pull relevant data into charting.
11. Main HTML: `index.html` file created. HTML and CSS code written to structure site. Includes links to relevant files and add background photo via CSS `<style>` code.
12. Chrome Dev Tools: Ongoing inspection of elements and to perform final UAT. ``` D3 data visualisation is non-responsive and built for large screens``` therefore, `Bootstrap` containers ONLY are responsive.
13. GitHub: Version control and final backup of project.










## Testing

The following is an overview of testing to ensure all functionality works as intended in this project.

1. **Landing section and Subscribe to News**:
    1. Select the 'Contact' menu on the navbar and verify that the user is moved to the contact section and away from the landing page.
    2. Select 'The Beach Boys' menu on the navbar and verify that the user is moved to the landing page.
    3. Select the 'Sign Up' button and verify that a modal appears.
    4. Complete all user details within the modal and verify that all fields accept relevant inputs.
    5. Select 'Sign Up' to submit the user’s details and verify that the modal closes.
    
        - **Bug 1** - Call to action text not standing out for clean reading.
            - **Issue** - Background photo too bright and text size too small.
            - **Fix** - Adjusted photo coloring by reducing brightness and uploaded new photo. Increased text size use of html `<h1>` and `<strong>` tags.
        
        - **Bug 2** - Modal input field text alignment centred, rather than left aligned.
            - **Issue** - Additional `<div>` tags throwing out alignment.
            - **Fix** - Updated `<div>` tags to ensure alignment correct.

2. **About Section**:
    1. Select the 'About' menu on the navbar and verify that the user is moved to the about section.
    2. Select the hyperlink, 'To request a booking, please go to the contact section.', and verify that the user is moved to the contact section.

3. **Videos Section**:
    1. Select the 'Videos' menu on the navbar and verify that the user is moved to the videos section.
    2. On each video, select play, pause, time slider, volume icon, volume slider, full screen and download. Verify that all functionalities work as intended.

        - **Bug 1** - Custom `main.css`, not overriding Bootstrap CSS.
            - **Issue** - Website not rendering in browser until Chrome cache cleared.
            - **Fix** - Spent significant time, hours over several days researching this. Decided to try to clear the cache in Chrome and this fixed the issue. Also used CSS id classes in some areas of the `main.css` to override the Bootstrap CSS.

        - **Bug 2** - Bootstrap template grid not suitable for the video layout.
            - **Issue** - Bootstrap template grid only suitable for one column of data.
            - **Fix** - Updated `index.html` `<div>` tags around the videos to a bootstrap grid class of `col-sm-6`, to layout two videos side by side within each div row.

4. **Audio Section**:
    1. Select the 'Audio' menu on the navbar and verify that the user is moved to the audio section.
    2. On each audio track, select play, pause, time slider, volume icon, volume slider, and download. Verify that all functionalities work as intended.
    
        - **Bug** - Bootstrap template grid not suitable for audio layout.
            - **Issue** - Bootstrap template grid suitable for one column of data.
            - **Fix** - Updated `index.html` `<div>` tags around the audio to a bootstrap grid class of `col-sm-6`, to layout two audio tracks side by side on each div row.
        
        - **Bug** - Each audio track includes a video thumbnail above the controls.
            - **Issue** - Used `<video>` html tags, that should be `<audio>` html tags.
            - **Fix** - Updated relevant `<video>` html tags, that should be `<audio>` html tags.

5. **Contact Section**:
    1. Select the 'Contact' menu on the navbar and verify that the user is moved to the contact section.
    2. Complete all user details within the form and verify that all input fields accept the text as intended.

6. **Social Media Icons**:
    1. Scroll to the footer section.
    2. Select the Facebook, Twitter and YouTube icons, and verify that all icon hoover styling is as intended. Verify that all icons open each social media page, in a new browser window.

7. **Responsive Testing**:
    1. In Chrome, right click on the site and select 'inspect', to open the Chrome Dev tools.
    2. Select the toggle device icon at the top of the window, to open the responsive testing window.
    3. Test how the website is rendering on each device size from Galaxy S5 to iPad Pro.

## Deployment
The following section describes the process to deploy this project to GitHub Pages.

1. Create a new repository within GitHub.
2. Within GitHub, under the `<> Code` heading, copy `git remote add origin...` command, paste into the IDE terminal and execute.
3. Within GitHub, under `<> Code` heading, copy `git push -u origin master` command, paste into the IDE terminal and execute.
4. The project is now pushed to GitHub.
5. Within GitHub, under the `Settings` heading, go to the `GitHub Pages` section.
6. Select Master branch and save.
7. The project is now published to GitHub Pages and can be viewed in the browser.
8. GitHub Pages URL: [US Equity Markets 2017](https://githhayden.github.io/US-Equity-Markets-2017/).

> **Note:** During development, a push to a new GitHub repo resulted in earlier git commits lost.

## Credits

### Content
- The text for the About section was copied from [Wikipedia](https://en.wikipedia.org/wiki/The_Beach_Boys).

### Media
- The photo used in this site was copied from [WWMT.com](https://wwmt.com/news/local/the-beach-boys-to-headline-tulip-time-2018-tickets-on-sale-nov-9).
- The videos and audio tracks in this site were copied from [YouTube](https://www.youtube.com/). They were then converted to MP4 and MP3 files.

### Acknowledgements

- I received inspiration for this project from The Beach Boys videos, music and website, from Bootstrap template designs, from ongoing research online and from Code Institute education.