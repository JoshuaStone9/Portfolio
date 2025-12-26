# Portfolio Website

A personal portfolio site that highlights projects, technical experience and external links. The page is built with HTML, CSS and JavaScript, featuring project popups and a language based filter to help visitors explore work by stack.

---

## Table of Contents
- [Overview](#overview)
- [High Level Architecture](#high-level-architecture)
- [Data Model](#data-model)
- [Control Flow](#control-flow)
- [Randomization Logic](#randomization-logic)
- [Console Interface](#console-interface)
- [How to Run](#how-to-run)
- [Potential Improvements](#potential-improvements)
- [Personal Development](#personal-development)

---

## Overview

Portfolio Website is a single page personal site designed to present a professional profile, featured skills and a curated list of projects.

Visitors can browse projects, open detailed popups and filter the project list by language or platform.

---

## High Level Architecture

The site is implemented as a static HTML page with a single JavaScript file to manage interactivity.

The structure is divided conceptually into:

Layout Layer  
HTML sections for profile, skills, projects and external links  

Style Layer  
CSS for layout, typography and project cards  

Interaction Layer  
JavaScript to open project popups and filter projects by language  

Asset Layer  
Images and PDFs for profile, screenshots and CV access  

---

## Data Model

The application uses the DOM as its data model and relies on naming conventions to bind data to UI.

HTML elements  
Project headers and descriptions are stored directly in the markup  

Language badges  
Classes like `lang-csharp` or `lang-js` signal project stack  

Identifiers  
`header-` and `langs-` IDs connect a project header to its language row  

No external data files or APIs are used for project content.

---

## Control Flow

Page Load  
HTML renders the layout and project list  

Event Binding  
JavaScript hooks filter checkboxes and reset behavior  

Filtering  
Checked languages are matched against project badge classes  

Popup Interaction  
Project buttons inject descriptive HTML into a popup panel  

Close Action  
Popup hides and returns the user to the main list  

---

## Randomization Logic

No randomization is used. Filtering is deterministic:
- Selected language checkboxes define an active filter set
- Each project is shown or hidden based on matching badge classes

---

## User Interface

Browser based portfolio UI with a profile header, project list, language filter chips and popup panels for detailed project descriptions and actions.

---

## How to Run

Requirements  
Any modern web browser  

Open the site  
- Open `index.html` directly in a browser, or
- Run a local server and navigate to the page

Example (Python)  
```
python3 -m http.server
```

---

## Potential Improvements

- Add a featured-projects section with curated highlights
- Load project data from JSON to reduce HTML repetition
- Add a dark/light theme toggle
- Improve accessibility with keyboard focus trapping in popups
- Add filtering by project type in addition to language

---

## Personal Development

This project reinforced:

- Structuring a full single-page site with semantic HTML
- Creating reusable UI patterns with consistent IDs and classes
- Managing DOM updates for popups and filtering
- Organizing assets for a portfolio presentation
- Presenting technical work in a clear, navigable layout
