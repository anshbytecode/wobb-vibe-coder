# Wobb Influencer Search Platform

A modern influencer discovery and list management platform built with React, TypeScript, Vite, Tailwind CSS, and Zustand.

## Overview

The application has been redesigned and enhanced with modern UI/UX principles, improved architecture, optimized performance, and a fully functional influencer list management system powered by Zustand.

## Features

### Influencer Discovery

* Search influencers by username or full name
* Filter influencers by platform

  * Instagram
  * YouTube
  * TikTok
* Responsive search experience
* Fast client-side filtering

### Profile Details

* Detailed influencer profiles
* Engagement and audience information
* Platform-specific statistics
* Clean profile layout

### List Management

* Add influencers to a selected list
* Persistent storage using LocalStorage
* Duplicate prevention
* Remove influencers from list
* View selected influencer collection
* Zustand-powered global state management

### UI/UX Improvements

* Complete redesign from starter template
* Modern card-based interface
* Responsive mobile-first layout
* Improved visual hierarchy
* Loading and empty states
* Better accessibility

## Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* Zustand
* React Router DOM

## Key Improvements Made

### Bug Fixes

* Fixed search filtering issues
* Fixed routing inconsistencies
* Fixed profile loading edge cases
* Fixed state synchronization problems
* Improved error handling

### Architecture Improvements

* Replaced React Context with Zustand
* Improved folder structure
* Better type definitions
* Reusable component architecture
* Cleaner state management

### Performance Optimizations

* Memoized expensive computations
* Reduced unnecessary re-renders
* Optimized state updates
* Improved component composition

## Project Structure

```text
src/
├── components/
│   ├── common/
│   ├── profile/
│   └── search/
├── pages/
├── routes/
├── store/
│   └── useSelectedProfilesStore.ts
├── hooks/
├── types/
├── assets/
│   └── data/
├── utils/
└── styles/
```

## State Management

Zustand is used for managing the selected influencer list.

Features include:

* Add profile
* Remove profile
* Duplicate prevention
* Persistence with LocalStorage

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Assumptions

* Influencer usernames are unique identifiers.
* Selected profiles are persisted in LocalStorage.
* Client-side filtering is sufficient for the provided dataset.
* No backend integration was required for this assignment.

## Trade-offs

* Zustand was chosen for its simplicity and minimal boilerplate.
* LocalStorage persistence was used instead of backend storage.
* Focus was placed on maintainable architecture and user experience rather than adding extra features.

## Future Enhancements

* Dark mode support
* Advanced sorting options
* Favorites system
* Infinite scrolling
* Server-side search
* Analytics dashboard
* Unit and integration testing


