Notes
=====
Application for reading Campaign Monitor issues from the status page, and load them dynamically.

- Framework - Angular.js (1.4.8)
- Animation - Angular-Animate.js (1.4.8)
- Testing Framework - Jasmine (2.4.1)
- Other Third-Pary NuGet Packages Installed - Moment.js (2.11.1), JQuery (2.2.0)

Structure
=========
- Start page - /index.html
- Application files - /app/*.js
- Nuget javascript files - /scripts/*.js
- Provided files from Campaign Monitor - /resources/*
- Unit Tests - /tests/index.html

Features
========
- Auto refreshes issue data every 2 seconds. List is updated only if changes are found without refreshing the page.
Therefore "Load the current issues list" link is needed only on initial load.

Issues
======
- http://status.campaignmonitor.com/api/issues/current returns a 404 so could not be used. Using test file is set to true in app/app.module.js:6
- Angular's $http.jsonp could not be used because it looks for a hardcoded ?callback=JSON_CALLBACK. Resorted to JQuery.ajax()

Assumptions
===========
- bootstrap.min.css was required and copied into css/ folder
- Images found in requirements/img folder (glyphicons-halflings.png and glyphicons-halflings-white.png) were not needed.
