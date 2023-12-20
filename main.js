#!/usr/bin/env node

const getRepoDetails = async (user) => {
  if (!user) {
    console.log("Please, pass in GitHub username");
    return;
  }

  console.log(
    `=============== Getting repository details for ${user} ===============\n`
  );

  try {
    const res = await fetch(`https://api.github.com/users/${user}`);
    if (res.status === 404) {
      console.log(`Cannot find repository details for ${user}`);
      return;
    }
    if (!res.ok) {
      throw new Error();
    }
    const response = await res.json();
    const { name, public_repos, followers, following } = response;
    if (!name) {
      console.log(`Cannot find repository details for ${user}`);
      return;
    }

    console.log(
      `Name: ${name}\nNumber of public repositories: ${public_repos}\nFollowers: ${followers}\nFollowing: ${following}`
    );
  } catch (error) {
    console.log("Sorry, something went wrong");
  }
};

getRepoDetails(process.argv[2]);
