# Project Name

## Introduction

Welcome to the **Hire Hours**! This project is built using React Js and [TypeScript](https://www.typescriptlang.org/). This README outlines the setup instructions, coding guidelines, and best practices for contributing to this project.

# Figma Link
(https://www.figma.com/design/tYMTF46IVCoxxpYZDdxscf/Hire-Hours?node-id=262-6345&t=GZib5NPcyqINeAjc-1)

## Table of Contents
1. [Installation](#installation)
2. [Development Setup](#development-setup)
3. [Coding Guidelines](#coding-guidelines)
4. [Commit Guidelines](#commit-guidelines)
5. [Pull Request Process](#pull-request-process)
6. [Prettier Configuration](#prettier-configuration)

## Installation

To get started, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/Sandeep1908/hire-hour.git
cd your-project
npm install
```

## Development Setup
Start the development server:


```
npm run dev

This command will start your Next.js project on http://localhost:5173.
```

## The project's structure follows best practices for organizing React applications:

- src/: Contains all source code
- components/: Reusable UI components
- pages/: Application pages
- hooks/: Custom React hooks
- context/: React Context for state management
- styles/: Global and component-specific styles
- utils/: Utility functions and helpers
- App.js: Main application component
- index.js: Application entry point

## Commit Guidelines
Conventional Commits
Follow the Conventional Commits specification for writing commit messages. This helps in understanding the history of changes and auto-generating changelogs.

# Commit Message Format
 
<type>(<scope>): <subject>

<body>
Types
- feat: A new feature
- fix: A bug fix
- docs: Documentation-only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing or correcting existing tests
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

# Example

```
 
feat(auth): add login functionality

Added login functionality with OAuth support.

```


# Branch Naming
Follow this branch naming convention:

 
- <type>/<issue-id>-<short-description>
- feat/123-add-login: Feature branch for adding login functionality.
- fix/456-fix-navbar-bug: Bug fix for a navbar issue.

## Pull Request Process
# Before Making a PR
Sync with Main Branch: Ensure your branch is up to date with the main branch.
Run Linting and Tests: Ensure there are no linting errors and all tests pass.
 
npm run lint
npm test

## Code Review: Ensure your code is well-structured and adheres to the project’s coding guidelines.
# Creating a PR
- Title: Use a descriptive title following the commit message format.
- Description: Provide a brief description of the changes, linking to any relevant issues.
- Reviewers: Assign reviewers who are knowledgeable about the changes.
- Linked Issues: Link any relevant issues using GitHub’s Closes #issue_number syntax.
- PR Review Process
- Review: Ensure all comments and requested changes are addressed.
- Squash Commits: Squash your commits into a single commit to keep the history clean.
- Merge: After approval and passing checks, merge the PR using the "Squash and Merge" option.# hirehour
