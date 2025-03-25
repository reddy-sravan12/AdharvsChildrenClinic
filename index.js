const jsonFile = require("jsonfile");
const simpleGit = require("simple-git");
const moment = require("moment");

const JSON_PATH = "./data.json";
const git = simpleGit();

const TOTAL_COMMITS = 100; // Total commits needed
const START_DATE = moment("2024-07-01"); // Start committing from July 1, 2024

const makeCommit = (n, currentDate) => {
  if (n === 0 || currentDate.isAfter(moment("2024-09-30"))) {
    return git.push().then(() => console.log("All commits pushed!"));
  }

  const commitDate = currentDate.format(); // Format date for Git
  const data = { date: commitDate };

  jsonFile.writeFile(JSON_PATH, data, () => {
    git
      .add([JSON_PATH])
      .commit(`Commit on ${commitDate}`, { "--date": commitDate })
      .then(() => {
        console.log(`Commit ${n} done with date: ${commitDate}`);
        makeCommit(n - 1, currentDate.add(2, "days")); // Move to the next alternate day
      })
      .catch((err) => console.error("Error:", err));
  });
};

// Start committing from July 1, 2024
makeCommit(TOTAL_COMMITS, START_DATE);
