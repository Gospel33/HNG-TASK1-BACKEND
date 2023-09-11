const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
//    Get Query Parameters
const slackName = req.query.slack_name;
const track = req.query.track;

// Get current day of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wedanesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = daysOfWeek[new Date().getDay()];

// Get currentUTC time
const now = new Date();
const offset = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
const utcTime = new Date(now.getTime() - offset).toISOString();

// Format UTC time with two decimal places for milliseconds
const milliseconds = now.getUTCMilliseconds().toFixed(2);
const formattedUtcTime = `${utcTime.slice(0, -1)}${milliseconds}Z`;

// GITHUB URLs
const githubFileUrl = 'https://github.com/Gospel33/HNG-TASK1-BACKEND/blob/main/app.js';
const githubRepoUrl = 'https://github.com/Gospel33/HNG-TASK1-BACKEND';

// Response JSON
const jsonResponse = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: formattedUtcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
};

res.json(jsonResponse);
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});