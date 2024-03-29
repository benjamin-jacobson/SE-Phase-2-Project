# Software Engineering Phase 2 Project (MVP)

- See below for project requirements
- See here for video walktrough: https://youtu.be/qbEZoNq-8Zc

### Initial Install
- npx create-react-app goal-project --use-npm
- npm install react-router-dom@^6.18.0
- npm install recharts
- npm install json-server
- npm install date-fns

### Initial application test
- npm start
- json-server --watch db.json --p 4000

# Front-end Structure, Routing and Components

- src
    - App.js (Header, NavLink)
    - components/
        - Header.js (use of NavLink)
        - Summary.js
        - SummaryList.js
        - GoalAddForm.js
        - GoalLogForm.js
        - BarChartOverTime.js
        - Dropdown.js
        - PiechartCategory.js 
    - pages/
        - AllGoals.js (Summary, SummaryList)
        - AddGoal.js (GoalAddForm)
        - LogGoal.js (GoalLogForm)
        - Overview.js (PiechartCategory)
        - Reports.js (Dropdown, BarChartOverTime)
        - ErrorPage.js
    - index.css
    - index.js
    - routes.js

# Future Steps
- Add grid layout to AllGoals.js
- Add button/state/db request patch for goal completion
- Better data design
- Metric select, not freeform
- NavLink to have CSS to show the selected page
- Limit appropriate adds/logs to time that makes sense (can log a goal in the future, plan feature?)

# Resources
- https://github.com/learn-co-curriculum/react-hooks-forms-lab/tree/solution/src/components
- https://recharts.org/en-US/examples/MixBarChart

# Project Requirements
- https://github.com/learn-co-curriculum/react-hooks-phase-2-project

1. You must make a single page application (only one index.html file) using create-react-app.
2. Your app should use at least 5 components in a way that keeps your code well organized.
3. There should be at least 3 client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes. |

4. Use a json-server to create a RESTful API for your backend and make both a GET and a POST request to the json server. Use a form to make your post request, specifically a controlled form/component. Additionally, you may choose to incorporate data from an external API but it is not required.

You should keep your json-server data simple: avoid nested data and associations. You'll learn how to work with more complex data in the next two phases. Focus on the frontend for this project.

Upon return of json from your POST request, a state update by a setState function is required!

Remember: responsibility for re-rendering the page to display the updated list of movies should belong to the addMovie function; depending on a subsequent action to load the new data is not best practice.

5. Add some styling: you're encouraged to write your CSS from scratch, either by using styled components or writing CSS files and using id/className to style your elements. You can also incorporate a UI framework (like React Bootstrap, Semantic UI, or Material UI) if you prefer.