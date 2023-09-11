const express = require('express');
const app = express();
const port = 3000;

function formatDateWithoutMilliseconds(date) {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
}


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
const utcTime = formatDateWithoutMilliseconds(new Date(now.getTime()));


// GITHUB URLs
const githubFileUrl = 'https://github.com/Gospel33/HNG-TASK1-BACKEND/blob/main/app.js';
const githubRepoUrl = 'https://github.com/Gospel33/HNG-TASK1-BACKEND';

// Response JSON
const jsonResponse = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
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