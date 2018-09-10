# The Beach Boys

This website is a static (front-end only) application for The Beach Boys, 1960's rock band. The primary target audiences are fans, potential fans and customers. Users can sign up for news, read an overview about the band, watch and download videos, listen to and download audio tracks, contact the band, request a booking and follow the band on social media.

## UX

The following section describes the UX process for this project.

#### UX Process
1. **The Beach Boys** - Reviewed The Beach Boys videos, music and website to understand this genre, fans, potential fans and customers.
2. **Layout** - Reviewed Code Institute learnings to date, Bootstrap documentation and templates to extract design ideas.
3. **User Stories** - Walked through user stories.
    1. **Photo of the band** - As a fan, potential fan or customer, I want to view an up-to-date photo of the band to get a sense of their vibe.
    2. **Subscribe to News** - As a fan, potential fan or customer, I want to subscribe to The Beach Boys news, to receive updates on the bands members, their concerts and new music.
    3. **About** - As a fan, potential fan or customer, I want to read a summary about The Beach Boys, to understand their background to date.
    4. **Videos** - As a fan, potential fan or customer, I want to watch The Beach Boys videos, for entertainment, to download videos and to see their performances should I choose to book them for an event or a live concert.
    5. **Audio** - As a fan, potential fan or customer, I want to listen to The Beach Boys audio tracks, for entertainment, to download audio tracks and to listen to their music should I choose to book them for an event or a live concert.
    6. **Contact** - As a fan, potential fan or customer I want to be able to contact the band, to submit feedback or request to book the band for an event.
    7. **Social Media Icons** - As a fan, potential fan or customer I want to be able to follow the band on social media, to be a part of their journey and interact with them online.
4. **Wireframe** - Sketched the wireframe on paper, to include a section for each user story, delivering a clear design to connect the bands needs to the user’s needs.

## Features
 
### Existing Features

The following section describes all the front-end features in this project.

1. **The Beach Boys** - Landing page navbar menu item. When selected moves users to the landing page, which is a photo of the band with a call to action text. This section also has a Sign-Up button, when selected, a modal appears, where users can complete their details and submit, to sign up to news.
2. **About** - About navbar menu item. When selected moves users to view the about section, which contains a summary about The Beach Boys, to understand the bands background.
3. **Videos** - Video navbar item. When selected moves users to view the video section which showcases the bands videos, for entertainment, to download videos and to see their performances should a user choose to book them for an event or live gig.
4. **Audio** - Audio navbar item. When selected moves users to listen to audio tracks of the band which showcases audio tracks, for entertainment, to download and to listen to their music should a user choose to book them for an event or live gig.
5. **Contact** - Contact navbar item. When selected moves the users to the contact section, to be able to contact the band, to submit feedback or to book the band for an event.
6. **Social Media Icons** - Icons for Facebook, Twitter and Youtube, when selected moves users to each social media page. Allows users to be a part of the bands journey and interact with them online.

### Features to Implement
1. **Merchandise** - Add a feature to sell the bands merchandise.
2. **Book live concerts** - Add a feature to allow fans to purchase tickets via this website.
3. **Live concert schedule** - Add a feature to show a summary of the bands concert schedule.
3. **Videos** - Upgrade the video feature to a horizontal, automatic, video slider to enhance UX/UI.
4. **Audio Tracks** - Upgrade the video feature to a horizontal, automatic, video slider with track photo image, to enhance UX/UI.

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
8. GitHub Pages URL: [The Beach Boys](https://githhayden.github.io/The-Beach-Boys/).

> **Note:** During development, a push to a new GitHub repo resulted in earlier git commits lost.

## Credits

### Content
- The text for the About section was copied from [Wikipedia](https://en.wikipedia.org/wiki/The_Beach_Boys).

### Media
- The photo used in this site was copied from [WWMT.com](https://wwmt.com/news/local/the-beach-boys-to-headline-tulip-time-2018-tickets-on-sale-nov-9).
- The videos and audio tracks in this site were copied from [YouTube](https://www.youtube.com/). They were then converted to MP4 and MP3 files.

### Acknowledgements

- I received inspiration for this project from The Beach Boys videos, music and website, from Bootstrap template designs, from ongoing research online and from Code Institute education.






















![Alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQ_piv2GVA-o5_GIHWgO2s3TgQyrEsOtMLx0xIWKXNjZihi6G)
![Alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPWiSNROXs6bgE5tCE1K0U5GxWYbPtWAUzNykjbmAs-xPc0iT3Q)
![Alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaslC_J7vtJGVDJ5GkXLMKmAT0oAM3Lehvd1BDphj74Snnflsg)

### NASDAQ & NYSE 2017 - Equities Below $50
**SPA** (**Single Page Application**) site. `Data Visualisation Dashboard Interface` which harnesses, the incredible power of [D3.js](https://d3js.org/) created by Mike Bostock.

This SPA site provides users with a drop-down selector, pie charts, bar charts and a scatter plot chart. Providing data visualisation across various dimensions i.e. number of equities, market capitalisation, volume, price, sector, industry and domiciled country.

### User Functionalities
1. Drop-Down Selector: Provides functionality to select and reset industry, which updates all charts with the relevant data.
2. Bar Chart: Provides an X and Y axis, visualisation of relevant data, and is useful for understanding comparisons.
3. Pie Chart: Provides subset visualisation of all parts and is useful for understanding the whole picture.
4. Scatter Plot Chart: Provides an X and Y axis, visualisation of relevant data, and is useful for understanding correlation/distribution.

### Project Technologies
1. Cloud 9: `Integrated Development Environment` used to build project end to end.
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

### Development Process and Deployment
1. Blank `Cloud 9` workspace created. Folders set up and files uploaded/created in line with wireframe.
2. `index.html`, `graph.js` and `style.css` updated in parallel. HTML, CSS, and JavaScript code written for each section. See code commentary for detailed guidance.
3. UAT: Final web design inspected via `Cloud 9`, `Run`. Responsive web design tested via `Chrome Dev Tools`, `Toggle Device Toolbar`. ``` D3 data visualisation is non-responsive and built for large screens``` therefore, `Bootstrap` containers ONLY are responsive.
5. Git and GitHub: Used for version control and to deploy backup up project.
```
NOTE: At end of project, re-pushed to a new GitHub repo to update project naming conventions,
thus, lost all staged commits.
```
6. Deployed via GitHub Pages: [NASDAQ & NYSE 2017 Website](https://githhayden.github.io/US-Equity-Markets-2017/).