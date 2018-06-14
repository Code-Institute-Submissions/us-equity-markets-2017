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
6. Deployed via GitHug Pages: [NASDAQ & NYSE 2017 Website](https://githhayden.github.io/US-Equity-Markets-2017/).