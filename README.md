In this project, let's build an **IPL Dashboard App** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-output-v2.gif" alt="ipl-dashboard-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Home](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-home-sm-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Team Matches](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-team-matches-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-home-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Team Matches](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-team-matches-lg-output-v2.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When the app is opened, Home Route should be displayed
- When the Home Route is opened,
  - Make HTTP GET request to the **teamsApiUrl**
  - **_loader_** should be displayed while fetching the data
  - After fetching the data, the list of teams should be displayed
- When a team card in Home Route is clicked,
  - Page should be navigated to the Team Matches Route with the URL `/team-matches/:id`
- When the Team Matches Route is opened,
  - Make HTTP GET request to the **teamMatchesApiUrl** with the team id to get the recent matches data of the team
    - Example: `https://apis.ccbp.in/ipl/KKR`
  - **_loader_** should be displayed while fetching the data
  - After fetching the data, the team banner, latest match, and list of recent matches should be displayed

</details>

<details>

<summary>API Requests & Responses</summary>
<br/>

**teamsApiUrl**

#### API: `https://apis.ccbp.in/ipl`

#### Method: `GET`

#### Description:

Returns a response containing the list of all IPL teams

#### Response

```json
{
  "teams": [
    {
      "name": "Royal Challengers Bangalore",
      "id": "RCB",
      "team_image_url": "https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png",
      // use value of the key 'name' for alt as `${name}`
    },
    ...
  ],
}
```

**teamMatchesApiUrl**

#### API: `https://apis.ccbp.in/ipl/:id`

#### Example: `https://apis.ccbp.in/ipl/KKR`

#### Method: `GET`

#### Description:

Returns a response containing details of all recent matches of a team

#### Response

```json
{
  "team_banner_url": "https://assets.ccbp.in/frontend/react-js/kkr-team-img.png",
  "latest_match_details": {
    "umpires": "CB Gaffaney, VK Sharma",
    "result": "Kolkata Knight Riders Won by 7 wickets",
    "man_of_the_match": "Shubman Gill",
    "id": "1216545",
    "date": "2020-09-26",
    "venue": "At Sheikh Zayed Stadium, Abu Dhabi",
    "competing_team": "Sunrisers Hyderabad",
    "competing_team_logo": "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png",
    // use value of the key 'competing_team' for alt as `latest match ${competing_team}`
    "first_innings": "Sunrisers Hyderabad",
    "second_innings": "Kolkata Knight Riders",
    "match_status": "Won",
  },
  "recent_matches": [
    {
      "umpires": "RK Illingworth, K Srinivasan",
      "result": "Royal Challengers Bangalore Won by 82 runs",
      "man_of_the_match": "AB de Villiers",
      "id": "1216540",
      "date": "2020-10-12",
      "venue": "At Sharjah Cricket Stadium, Sharjah",
      "competing_team": "Royal Challengers Bangalore",
      "competing_team_logo": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png",
      // use value of the key 'competing_team' for alt as `competing team ${competing_team}`
      "first_innings": "Royal Challengers Bangalore",
      "second_innings": "Kolkata Knight Riders",
      "match_status": "Lost",
    },
    ...
  ],
}
```

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/home-component-structure-img.png" alt="home component structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/team-matches-component-structure-img.png" alt="team matches component structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/App.js`
- `src/components/Home/index.js`
- `src/components/Home/index.css`
- `src/components/TeamCard/index.js`
- `src/components/TeamCard/index.css`
- `src/components/TeamMatches/index.js`
- `src/components/TeamMatches/index.css`
- `src/components/LatestMatch/index.js`
- `src/components/LatestMatch/index.css`
- `src/components/MatchCard/index.js`
- `src/components/MatchCard/index.css`
</details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- To display the animated loader, we need to import the Loader component using the below statement

  ```
  import Loader from 'react-loader-spinner'
  ```

- In order to display the given animated loader, pass the `type` and `color` props to the `Loader` component with values as **Oval** and **#ffffff** , respectively

  ```
  <Loader type="Oval" color="#ffffff" height={50} width={50} />
  ```

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- The banner image in the Team Matches Route should have the alt attribute value as `team banner`
- The alt attribute values for the images received from the response are given in the **Example response**
- The API responses received from the given api URLs should be converted to camel case
- Wrap the `Loader` component with an HTML container element and add the `testid` attribute value as `loader` to it as shown below
  ```
  <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
  </div>
  ```
- Render HomeRoute component when path in URL matches `/`
- Render TeamMatchesRoute component when path in URL matches `/team-matches/:id`
- No need to use the `BrowserRouter` in `App.js` as we have already included in `index.js` file
- Each TeamMatchesRoute should have different gradient colors as background based on the selected team

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/ipl-dashboard-sm-bg.png](https://assets.ccbp.in/frontend/react-js/ipl-dashboard-sm-bg.png)
- [https://assets.ccbp.in/frontend/react-js/ipl-dashboard-lg-bg.png](https://assets.ccbp.in/frontend/react-js/ipl-dashboard-lg-bg.png)
- [https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png](https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png) alt should be **ipl logo**

</details>

<details>
<summary>Colors</summary>

<br/>

**Background Colors**:

<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #a4261d; width: 150px; padding: 10px; color: white">Hex: #a4261d</div>
<div style="background-color: #5755a7; width: 150px; padding: 10px; color: white">Hex: #5755a7</div>
<div style="background-color: #d91c1f; width: 150px; padding: 10px; color: white">Hex: #d91c1f</div>
<div style="background-color: #f7db00; width: 150px; padding: 10px; color: white">Hex: #f7db00</div>
<div style="background-color: #ffffff33; width: 150px; padding: 10px; color: black">Hex: #ffffff33</div>
<div style="background-color: #da237b; width: 150px; padding: 10px; color: white">Hex: #da237b</div>
<div style="background-color: #13418b; width: 150px; padding: 10px; color: white">Hex: #13418b</div>
<div style="background-color: #f26d22; width: 150px; padding: 10px; color: white">Hex: #f26d22</div>
<div style="background-color: #4f5db0; width: 150px; padding: 10px; color: white">Hex: #4f5db0</div>
<div style="background-color: #0f172a; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<br/>

**Border Colors**

<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: black">Hex: #475569</div>

<br />

**Text Colors**

<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #18ed66; width: 150px; padding: 10px; color: black">Hex: #18ed66</div>
<div style="background-color: #e31a1a; width: 150px; padding: 10px; color: black">Hex: #e31a1a</div>

</details>

<details>
<summary>Font-families</summary>

- Bree Serif

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.


### Enhancement

The goal of this enhancement project is to understand the existing <a href="https://learning.ccbp.in/question/08806910-5353-47f6-aef4-5a9475cb6075" target="_blank_">IPL Dashboard</a> code, and add the given functionalities within the existing <a href="https://learning.ccbp.in/question/08806910-5353-47f6-aef4-5a9475cb6075" target="_blank_">IPL Dashboard</a> code.

Your existing <a href="https://learning.ccbp.in/question/08806910-5353-47f6-aef4-5a9475cb6075" target="_blank_">IPL Dashboard</a> app, which you have developed, allows users to view a list of IPL teams. Users will be able to view the latest match data and the recent matches data of a team by clicking on a particular IPL team.

### Enhancement Functionalities

<details>
<summary>Functionality to be added</summary>

- Add a `Back` button in the `Team Matches Route`. When the `Back` button is clicked, the page should be navigated to **Home Route**.
- Add a `Pie Chart` feature showing the **statistics** of a match in the `Team Matches Route`. The **statistics** should include the number of matches a team has won, lost, and drawn.
- Ensure your application maintains good CSS styling.

<MultiLineNote>
- For PieChart Component, refer to this <a href="https://recharts.org/en-US/api" target="_blank_">link</a>
</MultiLineNote>
</details>

### Setup Instructions

<details>
<summary>Follow these steps before starting to code for this project. (**Important**)</summary>

- After setting up this project delete the `README.md` file in the CCBP IDE.
- Clone the existing <a href="https://learning.ccbp.in/question/08806910-5353-47f6-aef4-5a9475cb6075" target="_blank_">IPL Dashboard</a> code from your GitHub account to add new functionalities to it.
  - If the existing <a href="https://learning.ccbp.in/question/08806910-5353-47f6-aef4-5a9475cb6075" target="_blank_">IPL Dashboard</a> code is not available in your git, push your code to git.
    - <a href="https://learning.ccbp.in/3da6f1a6-0892/course?c_id=ade6e642-cd5c-4896-9edd-3f06d3dc2069&s_id=49896a46-f484-4b42-b459-2626f77e6796&t_id=9f27b553-4bbe-400f-9025-9044f79acda0" target="_blank_">Click here to learn how to push your code to git</a>
  - Once the code is pushed to git, clone it into this project using the below command.

```cmd
git clone {git repository URL} /home/workspace/reactjs/coding-practices/enhancementOfIplDashboardApp
```

<MultiLineNote>
In the above command, replace this `{git repository URL}` with your actual Git URL.
</MultiLineNote>
- Download dependencies by running `npm install`
- Start up the app using `npm start`
- Deploy the project on <a href="https://vercel.com/" target="_blank_">Vercel</a> and submit your project using the Vercel link. 
</details>

<MultiLineNote>

- Cloning the existing <a href="https://learning.ccbp.in/question/08806910-5353-47f6-aef4-5a9475cb6075" target="_blank_">IPL Dashboard</a> repo is mandatory, as test cases are added for both the existing IPL Dashboard app and the new functionality.
- These projects are introduced to help you prepare well for similar questions asked during interviews. </MultiLineNote>

#### Submission Form:

<center>Click the below button and submit your git URL and Vercel link of the current project</center>
<br>
<a href="https://forms.ccbp.in/ipl-dashboard-enhancement-project-submission-form" target="_blank_">
  <center><button style="color: #fff; border: none; cursor: pointer; width: 218px; height: 34px; background-color: rgb(22, 101, 216); border-radius: 5.4px; box-shadow: rgb(0 0 0 / 36%) 0px 2px 4px 0px;font-family: Inter;font-size: 14px;color: rgb(255, 255, 255);font-weight: 500;letter-spacing: 0.5px;text-transform: uppercase;">
    SUBMIT
  </button>
  </center>
</a>

<br/>
<center>**Follow the clean code guidelines**</center>
