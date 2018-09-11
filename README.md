![Alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQ_piv2GVA-o5_GIHWgO2s3TgQyrEsOtMLx0xIWKXNjZihi6G)
![Alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPWiSNROXs6bgE5tCE1K0U5GxWYbPtWAUzNykjbmAs-xPc0iT3Q)
![Alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaslC_J7vtJGVDJ5GkXLMKmAT0oAM3Lehvd1BDphj74Snnflsg)

# US Equity Markets 2017

This website is a **SPA** (Single Page Application) **Data Visualisation Dashboard Interface** which harnesses, the power of [D3.js](https://d3js.org/), a Javascript library for charting, created by Mike Bostock. The primary target audience is any user who wants to gain a comparable analysis of all NASDAQ and NYSE equities priced under USD$50, at 2017 year end.

This SPA site provides users with a drop-down selector, pie charts, bar charts and a scatter plot chart. Providing data visualisation across a number of dimensions i.e. by sector, by industry, number of equities, market capitalisation, domiciled by country, volume and price.

## UX

The following section describes the UX process for this project.

#### UX Process
1. **US Equity Markets** - Using my own knowledge, sketched out potential sets of data to include within a dashboard.
2. **Layout** - Reviewed the Code Institute learnings to date, Bootswatch themes and D3.js documentation to extract design ideas.
3. **User Stories** - Walked through user stories.
    1. **About** - As a user, I want to clearly understand the purpose of this dashboard and the data included.
    2. **User Guidance** - As a user, I want to to clearly understand how to use this dashboard.
    3. **Select Industry** - As a user, I want to be able to drill into each sector by industry type.
    4. **Number of Equities by Sector** - As a user, I want to be able to view the number of equities by sector and drill into each sector by industry type.
    5. **Market Capitalisation by Sector** - As a user, I want to be able to view the market capitalisation by sector and drill into each sector by industry type.
    6. **Market Capitalisation by Domiciled Country** - As a user, I want to be able to view the market capitalisation by domiciled country and drill into each sector by industry type.
    7. **Average Daily Volume by Sector** - As a user, I want to be able to view the average daily volume by sector and drill into each sector by industry type.
    8. **Average Daily Volume by Domiciled Country** - As a user, I want to be able to view the average daily volume by domicilied country, by sector and drill into each sector by industry type.
    9. **Average Daily Volume per Equity by Sector** - As a user, I want to be able to view the average daily volume per equity, by sector and drill into each sector by industry type.
    10. **Average Daily Volume per Equity Vs. Price per Equity** - As a user, I want to be able to view the average daily volume per equity Vs. price per equity, by sector and drill into each sector by industry type.
4. **Wireframe** - Sketched the wireframe on paper, to include the features for each user story, meeting the users needs by presenting the data on a dashboard charting web application.

## Features
 
### Existing Features

The following section describes all the front-end features in this project.

1. **About** - Provides users with a description of the dashboards purpose and what data is included.
2. **User Guidance** - Provides users with guidance on how to use the dashboard.
3. **Select Industry** - A drop-down selector, allowing users to select all or a specific industry. When a selection is made, each chart is automatically upated with the relevant industry data. Allows users to reset all charts by selecting 'Select all'.
4. **Number of Equities by Sector** - A bar chart displaying 'Number of Equities by Sector', which is updated by industry when a user makes a selection, using the 'Select Industry' drop-down selector. When a selection is made, each chart is automatically upated with the relevant industry data. The bar chart provides an X and Y axis, visualisation of relevant data, and is useful for understanding comparisons.
5. **Market Capitalisation by Sector** - A pie chart displaying 'Market Capitalisation by Sector', which is updated by industry when a user makes a selection, using the 'Select Industry' drop-down selector. When a selection is made, each chart is automatically upated with the relevant industry data. Provides subset visualisation of all parts and is useful for understanding the whole picture.
6. **Market Capitalisation by Domiciled Country** - A pie chart displaying 'Market Capitalisation by Domiciled Country', which is updated by industry when a user makes a selection, using the 'Select Industry' drop-down selector. When a selection is made, each chart is automatically upated with the relevant industry data. Provides subset visualisation of all parts and is useful for understanding the whole picture.
7. **Average Daily Volume by Sector** - A pie chart displaying 'Average Daily Volume by Sector', which is updated by industry when a user makes a selection, using the 'Select Industry' drop-down selector. When a selection is made, each chart is automatically upated with the relevant industry data. Provides subset visualisation of all parts and is useful for understanding the whole picture.
8. **Average Daily Volume by Domiciled Country** - A pie chart displaying 'Average Daily Volume by Domiciled Country', which is updated by industry when a user makes a selection, using the 'Select Industry' drop-down selector. When a selection is made, each chart is automatically upated with the relevant industry data. Provides subset visualisation of all parts and is useful for understanding the whole picture.
9. **Average Daily Volume per Equity by Sector** - A bar chart displaying 'Average Daily Volume per Equity by Sector', which is updated by industry when a user makes a selection, using the 'Select Industry' drop-down selector. When a selection is made, each chart is automatically upated with the relevant industry data. The bar chart provides an X and Y axis, visualisation of relevant data, and is useful for understanding comparisons.
10. **Average Daily Volume per Equity Vs. Price per Equity** - A scatter plot chart displaying 'Average Daily Volume per Equity Vs. Price per Equity', which is updated by industry when a user makes a selection, using the 'Select Industry' drop-down selector. When a selection is made, each chart is automatically upated with the relevant industry data. Provides an X and Y axis, visualisation of relevant data, and is useful for understanding correlation/distribution.

### Features to Implement
1. **Interactive Tutorial** - Add a feature to include an interactive tutorial.
2. **Comma Seperator** - Update hoover metrics to include a comma seperator.
3. **X and Y axis** - Update to implement improved ways to style both axis's.
4. **Icons** - Add icons where more streamlined design can be achieved.

## Technologies Used

The following section describes all technologies and tools used to construct this project.

- [Cloud 9 IDE](https://aws.amazon.com/cloud9/)
    - The project used **Cloud 9**, online integrated development environment, to construct the code end to end.
- [Equities.csv](https://en.wikipedia.org/wiki/Comma-separated_values)
    - This project uses a csv file, which stores tabular data (numbers and text) in plain text. The `equities.csv` file contains the dataset that populates the front-end charts for this project.
- [Bootswatch](https://bootswatch.com)
    - This project uses **Bootswatch**, a library of Bootstrap themes. The `flatly theme`, `bootstrap.min.css` file was used for this project.
- [DC.js](https://dc-js.github.io/dc.js/)
    - This project uses **DC.js**, a javascript charting library, that leverages D3 to render charts in a CSS friendly SVG format.
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    - This project uses **CSS**, a style sheet language, used to add styling to a website. The `style.css` file was added to this project, to build additional styling on top of the Bootswatch theme.
- [Crossfilter](http://square.github.io/crossfilter/)
    - This project uses **Crossfilter**, a JavaScript library for exploring large multivariate datasets in the browser. 
- [D3](https://d3js.org/)
    - This project uses **D3.js**, a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS, producing interactive data visualizations.
- [DC](https://dc-js.github.io/dc.js/)
    - This project uses **DC.js**, a javascript charting library with native crossfilter support, allowing highly efficient exploration on large multi-dimensional datasets. It leverages D3 to render charts in CSS-friendly SVG format.
- [Javascript](https://en.wikipedia.org/wiki/JavaScript)
    - This project uses **Javascript**, an object-oriented programming language commonly used to create interactive effects within web browsers.
- [D3-Queue](https://github.com/d3/d3-queue)
    - This project uses **D3-Queue**, which assists loading files and defers calling function until the data is ready.
- [HTML](https://en.wikipedia.org/wiki/HTML)
    - This project uses **HTML**, the standard mark-up language used to build website layout, which was written within the `index.html` file.
- [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools/)
    - This project uses **Chrome Dev Tools**, a set of web developer tools, to continuously test and inspect that the web pages are rendering as expected within the browser.
- [GitHub](https://github.com/)
    - This project uses **GitHub**, a web hosting service, for version control and final project deployment.

## Testing

The following is an overview of testing to ensure all functionality works as intended in this project.

1. **Select Industry**:
    1. Select several random industries from the drop-down selector.
    2. Confirm that all charts updates with each change in selection.
    3. Reconcile random industry selections shown in each chart against the .csv file to ensure the front-end data is correct.
    
        - **Bug 1** - Website looks busy and not clear.
            - **Issue** - Background photo unneccasry and not good design for this particular application.
            - **Fix** - Removed background photo, updated background to a grey area and white cards backgrounds for each sections. This resulted in clearer presetation of data for users.

2. **Number of Equities by Sector**:
    1. Select 'select all', in drop-down.
    2. Reconcile data shown for each sector against the .csv file to ensure the front-end data is correct.

3. **Market Capitalisation by Sector**:
    1. Select 'select all', in drop-down.
    2. Reconcile data shown for each sector against the .csv file to ensure the front-end data is correct.

4. **Market Capitalisation by Domiciled Country**:
    1. Select 'select all', in drop-down.
    2. Reconcile data shown for each sector against the .csv file to ensure the front-end data is correct.

5. **Average Daily Volume by Sector**:
    1. Select 'select all', in drop-down.
    2. Reconcile data shown for each sector against the .csv file to ensure the front-end data is correct.

6. **Average Daily Volume by Domiciled Country**:
    1. Select 'select all', in drop-down.
    2. Reconcile data shown for each sector against the .csv file to ensure the front-end data is correct.

7. **Average Daily Volume per Equity by Sector**:
    1. Select 'select all', in drop-down.
    2. Reconcile data shown for each sector against the .csv file to ensure the front-end data is correct.

8. **Average Daily Volume per Equity -V- Price per Equity**:
    1. Select 'select all', in drop-down.
    2. Reconcile data shown for each sector against the .csv file to ensure the front-end data is correct.

9. **Responsive Testing**:
    1. In Chrome, right click on the site and select 'inspect', to open the Chrome Dev tools.
    2. Select the toggle device icon at the top of the window, to open the responsive testing window.
    3. Test how the website is rendering on each device size from Galaxy S5 to iPad Pro.

> **Note:** D3.js data visualisation is non-responsive and built for large screens therefore, Bootstrap containers ONLY are responsive for this project.

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

### Dataset
- The .csv dataset used within this project was extraced from the [NYSE](https://www.nyse.com/index) and [NASDAQ](https://www.nasdaq.com/) exchanges.

### Acknowledgements

- I previously studied Finance and the US Capital Markets, and used that knowledge as inspiration for this project. I also used knowledge gained from the [Code Institute](https://www.codeinstitute.net/), Diploma in Software Development.





