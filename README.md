# Developer Screening Instructions

## Overview

Welcome to the React Native Developer Screening Challenge! 

This repository contains a React Native Task Manager app that has **3 intentional bugs** that prevent it from working correctly. Your task is to identify and fix these bugs while demonstrating your React Native, TypeScript, and React development skills.

## Setup Instructions

### 1. Fork and Clone
- Fork this repository to your GitHub account
- Clone your forked repository locally:
```bash
git clone <your-forked-repo-url>
cd react-native-task-screener
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. iOS Setup (macOS only)
```bash
cd ios && pod install && cd ..
```

### 4. Run the App
```bash
# For iOS
npm run ios

# For Android  
npm run android

# Start Metro bundler (in separate terminal)
npm start
```

## The Challenge

### What You Need to Do

This Task Manager app should allow users to:
- ✅ View a list of tasks
- ✅ Add new tasks with title and description
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks
- ✅ See task statistics (completed vs total)
- ✅ Persist data locally using AsyncStorage

### The Problems

**There are 3 bugs in this codebase that prevent it from working correctly:**

1. **Bug #1 - Performance Issue**: The app has a memory leak that causes performance problems
2. **Bug #2 - State Management Issue**: Adding new tasks doesn't work properly
3. **Bug #3 - Data Persistence Issue**: Tasks aren't being saved correctly to local storage

### Your Mission

1. **Identify** all 3 bugs by running the app and testing its functionality
2. **Fix** each bug using React/React Native best practices
3. **Ensure** the app works correctly after your fixes
4. **Maintain** existing functionality - don't break what already works
5. **Add comments** explaining your fixes (1-2 lines per fix)

## Submission Requirements

### Code Quality Standards
- ✅ Fix all identified bugs
- ✅ Ensure the app runs without crashes
- ✅ Maintain existing functionality
- ✅ Use proper TypeScript typing
- ✅ Follow React/React Native best practices
- ✅ Add brief comments explaining your fixes

### Git Requirements
- ✅ Make logical, focused commits
- ✅ Write clear commit messages
- ✅ Use descriptive branch names (optional but recommended)

### Submission Method

**Repository Fork**
1. Make your changes and commit them to your forked repository
2. Ensure your repository is private
3. Provide the link to your repository

## Evaluation Criteria

Your submission will be evaluated on:

### Bug Fixes (60 points)
- **Bug #1 Fix (20 points)**: Correctly identifying and fixing the performance issue
- **Bug #2 Fix (15 points)**: Properly fixing the state management problem
- **Bug #3 Fix (25 points)**: Resolving the data persistence issue

### Code Quality (25 points)
- Proper TypeScript usage and type safety
- Following React/React Native best practices
- Code organization and readability
- Appropriate use of React hooks

### Git Practices (15 points)
- Clear, descriptive commit messages
- Logical commit structure
- Professional Git workflow

## Time Estimate

This challenge should take no more than **30 minutes** to complete, depending on your experience level.

## Tips for Success

1. **Test thoroughly**: Run the app and try all features to identify the bugs
2. **Read the code**: Understanding the codebase structure will help you locate issues
3. **Use debugging tools**: React Native debugger, console logs, and error messages are your friends
4. **Think about React patterns**: Consider common React anti-patterns and best practices
5. **Check async operations**: Pay attention to how async operations are handled
6. **Test your fixes**: Make sure each fix actually resolves the issue

## Important Notes

### Academic Integrity
This challenge is designed to evaluate your individual skills and problem-solving abilities. Please complete this challenge independently using your own knowledge and debugging skills. The evaluation process includes automated detection systems to ensure fair assessment.

### Need Help?
If you encounter setup issues or have questions about the requirements, please reach out. However, questions about the bugs themselves or how to fix them are part of the challenge!

## What We're Looking For

We want to see:
- 🔍 **Problem-solving skills**: Can you identify issues in unfamiliar code?
- 🛠️ **Technical competency**: Do you know React Native and TypeScript well?
- 📝 **Code quality**: Do you write clean, maintainable code?
- 🔄 **Best practices**: Do you follow modern React development patterns?
- 💬 **Communication**: Can you explain your changes clearly?

Good luck! We're excited to see your solutions. 🚀 