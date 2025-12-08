# Hero Search Implementation Plan

## Overview

Implemented an autocomplete search functionality for the Hero section search bar.

## Changes

### 1. `index.html`

- Added `id="hero-search-input"` to the main search input.
- Added `autocomplete="off"` to prevent browser defaults.
- Added `<div id="hero-search-results">` container for displaying search suggestions.
- Updated the "Search" button `onclick` handler to pass the search term to the Tests page if manually clicked.

### 2. `script.js`

- Added `initializeHeroSearch()` function:
  - Listens for `input` events on `#hero-search-input`.
  - Filters `testDirectory` based on user input.
  - Renders a dropdown list of matching tests.
  - Handles `click` events on suggestions to navigate to the Tests page and filter by that test.
  - Closes the dropdown when clicking outside.
- Called `initializeHeroSearch()` within the `DOMContentLoaded` event listener.

## Verification

- Typing in the hero search box now shows a dropdown of matching tests.
- Clicking a suggestion navigates to the Test Menu and shows that specific test.
- Clicking the "Search" button navigates to the Test Menu and searches for the entered term.
