
# Table of Contents

- [Table of Contents](#table-of-contents)
- [About](#about)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [Features](#features)
- [Tasks](#tasks)
- [Technical Stack](#technical-stack)
- [Issues](#issues)
- [To Do](#to-do)

# About

myWallet is a React web app that implements a personal wallet. It allows users to register transactions and see their balance.

# Screenshots


# Getting Started

## Prerequisites

To run this project locally, you need to have Node.js installed on your machine. You can download it from [here](https://nodejs.org/en/download/) or install it with your package manager. I recommend using [nvm](https://github.com/nvm-sh/nvm) or [n](https://github.com/tj/n).

## Installing

1. Clone this repository
2. Install dependencies with `npm install`
3. Run the app with `npm run dev`

# Features

- Transactions list with summary
- Create new transactions
- Search transactions by text
- Accessible modal
- Integration with API
- Input validation

# Tasks

- **Visual Structure**
  - [x] Project setup
  - [x] Header component
  - [x] Summary component
  - [x] Transactions table
  - [x] Search Form component
  - [x] Accessible modal
  - [x] New transaction Modal
  - [x] Income/Outcome buttons
  - [x] Accessible Radio Button 
- **API Integration**
  - [x] JSON Server setup
  - [x] Test API
  - [x] Create Transactions Context
  - [x] Calculate transactions balance
  - [x] Format values
  - [x] Create hook to calculate summary
  - [x] Form validation
  - [x] Controlled components
  - [x] Search transactions
  - [x] Axios setup
  - [x] Create new transactions
  - [ ] Improve performance


# Technical Stack

- React - A JavaScript library for building user interfaces
- Vite - Next generation frontend tooling
- Typescript - Typed JavaScript at Any Scale
- editorconfig - Helps developers define and maintain consistent coding styles between different editors and IDEs
- styled-components - Visual primitives for the component age
- eslint - Find and fix problems in your JavaScript code
- phosphor-icons - A set of open source icons
- radix-ui - Accessible, robust, and responsive React components
- json-server - Get a full fake REST API with zero coding in less than 30 seconds (seriously)
- react-hook-form - Performant, flexible and extensible forms with easy-to-use validation
- hookforms/resolvers - A set of resolvers for react-hook-form
- zod - TypeScript-first schema validation with static type inference
- axios - Promise based HTTP client for the browser and node.js
- use-context-selector - A React hook to select a value from a context without re-rendering the entire component tree
- scheduler - A general purpose cooperative main thread scheduler for JavaScript

# Issues

- [ ] Create transaction modal does not reset values when closed without submitting
- [x] Amount input does not allow decimal values
- [ ] Pagination

# To Do