# GitHub CLI Tool

A simple command-line interface (CLI) tool to retrieve details of a GitHub account.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Example](#example)
4. [Error Handling](#error-handling)
5. [Credits](#credits)

## Installation

You can install `gh-deets` via npm by running the following command:

```shell
npm install -g gh-deets

```

## Usage

After installing the package globally, you can use it in the command line as follows:

```shell
gh-deets <GitHub-Username>
```

Replace <GitHub-Username> with the desired GitHub username.

## Example

```shell
gh-deets octocat
```

Output:

```markdown
=============== Getting repository details for octocat ===============

Name: The Octocat
Number of public repositories: 11
Followers: 2437
Following: 9
```

## Error Handling

- If no GitHub username is provided:

```shell
Please, pass in GitHub username
```

- If the GitHub username is not found:

```shell
Cannot find repository details for <GitHub-Username>
```

- If an error occurs during the API request:

```shell
Sorry, something went wrong
```

## Credits

This NPM package was developed by Tobiloba Odukoya.
