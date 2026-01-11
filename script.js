// Project image lists for index thumbnails
const projectImages = {
  'Finance Manager': ['images/FM_img1.png','images/FM_img2.png','images/FM_img3.png','images/FM_img4.png','images/FM_img5.png','images/FM_img6.png'],
  'Breadsheet': ['images/B2.png','images/B3.png'],
  'Home NAS Control Panel': ['images/HomeNASControlPanel.png'],
  'Date Checker': ['images/DateChecker.png'],
  'Inventory Database': ['images/InventoryDatabase.png'],
  'To Do List Application': ['images/To-Do-Application-UI.png'],
  'Spending Pots Manager': ['images/SpendingPotsImg1.png','images/SpendingPotsImg2.png','images/SpendingPotsImg3.png','images/SpendingPotsImg4.png'],
  'JWT Inspector': ['images/JWTInspector.png'],
  'Order Data Service': ['images/OrderDataService_img_1.png'],
  'Category Budget Tracker': ['images/CategoryBudgetTracker.png'],
  'Weather Forecast Web API': ['images/WeatherForecast.png'],
  'CafeList Console App': ['images/CafeMenu_img1.png','images/CafeMenu_img2.png']
};

function pickRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function insertProjectThumbnails() {
  const largeTitles = new Set(['JWT Inspector','Weather Forecast Web API','Inventory Database','CafeList Console App','Breadsheet']);
  Object.keys(projectImages).forEach(title => {
    const src = pickRandom(projectImages[title]);
    document.querySelectorAll('h2').forEach(h2 => {
      if (h2.textContent && h2.textContent.trim() === title) {
        // avoid inserting duplicate thumbnails
        const next = h2.nextElementSibling;
        if (next && next.classList && next.classList.contains('indexProjectThumbnail')) return;
        const classes = 'indexProjectThumbnail' + (largeTitles.has(title) ? ' largeThumbnail' : '');
        h2.insertAdjacentHTML('afterend', `<img src="${src}" class="${classes}" alt="${title} thumbnail">`);
      }
    });
  });
}

function viewFinanceManager() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");

  projectInfo.innerHTML = `
    <h1>Finance Manager</h1>
    <h2>Project Overview</h2>
    <h3>Created With C# .NET, WinForms & SQL</h3>
<p>
  I designed this finance tracker to assist users in everyday life. It includes multiple features that help users manage money
  and track spending and identify potential savings. This project is still under active development so it can improve and adapt
  to modern needs. I am particularly passionate about this project because I believe the ideas behind it can positively impact
  daily financial habits.
</p>

<h3>Why?</h3>
<p>
  I created Finance Manager because I wanted a practical budgeting tool that reflects how people manage money in real life.
  Many existing tools feel overly complex or too limited. My goal was to build something structured enough to be useful
  while remaining simple enough for daily use. It also gave me valuable experience working with C# and SQL in a data-driven application.
</p>

<h3>Implementation Details</h3>
<p>
  Finance Manager is built as a C# Windows Forms application backed by a SQL Server database. Each major area such as bills
  savings extra expenses and investments maps to its own database table. The UI communicates with the database using
  parameterised SQL commands to prevent injection and keep queries predictable. Each form is designed as a focused module
  responsible for a single workflow while the dashboard connects everything together.
</p>

    <h3>Features</h3>
    <ul>
      <li><b>Centralized Dashboard: </b>The main form provides quick access to all sections of the Finance Manager, giving users various options to input their financial data.</li>
      <li><b>Bills Management: </b>Users can easily add, view, and manage their recurring bills to keep track of regular monthly expenses.</li>
      <li><b>Extra Expenses Tracking: </b>Allows users to record one-off or predicted extra expenses for better budgeting throughout the month.</li>
      <li><b>Savings Overview: </b>Lets users input and monitor their savings progress, set financial goals, and visualize monthly savings performance.</li>
      <li><b>Investments Management: </b>Supports tracking of current, future and past investments giving users insight into how much they invest over time.</li>
      <li><b>All Payments Page: </b>Displays all financial data in a single view, including a grand total of expenses, with quick-access buttons for Reload, Edit, and Delete functions.</li>
      <li><b>(Future Development) User Account System: </b>Simple registration and login process with 2FA (two-factor authentication).</li>
      <li><b>Secure Data Storage: </b>Uses a connected SQL Server to store user data, featuring auto-incremented IDs and 32-bit encrypted passwords for protection.</li>
    </ul>

    <h3>User Interface</h3>
      <img src="images/FM_img1.png" class="FM_images" alt="Finance Manager UI screenshot 1">
      <img src="images/FM_img2.png" class="FM_images" alt="Finance Manager UI screenshot 2">
      <img src="images/FM_img3.png" class="FM_images" alt="Finance Manager UI screenshot 3">
      <img src="images/FM_img4.png" class="FM_images" alt="Finance Manager UI screenshot 4">
      <img src="images/FM_img5.png" class="FM_images" alt="Finance Manager UI screenshot 5">
      <img src="images/FM_img6.png" class="FM_images" alt="Finance Manager UI screenshot 6">

    <h3>Future Improvements</h3>
    <ul>
      <li>Integrate automated data input using third-party APIs.</li>
      <li>Enhance the user interface based on collected feedback for improved usability.</li>
      <li>Implement a user management system.</li>
      <li>Introduce two-factor authentication (2FA) and additional security measures to protect sensitive customer data.</li>
    </ul>

    <h3>Personal Development</h3>
    <p>
      This project is the first I have completed fully with C#. I found the journey to be complex but rewarding, adding further knowledge
      to backend software development using SQL to achieve storage of data within the project.
    </p>
    <p>
      My knowledge of C# is of a good standard; however, I do feel I have a long way to go until I become fluent in this programming language,
      and I am using tools such as freeCodeCamp and creating new projects to assist with this.
    </p>
  `;
}

function viewBreadsheet() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");
  projectInfo.innerHTML = `
    <h1>Breadsheet</h1>
    <h2>Project Overview</h2>
    <h3>Created With HTML, CSS, JavaScript and Firebase Hosting</h3>
    <p>
      I designed Breadsheet to help log dated stock in my current role. Although the company already used a paper version
      I chose to rebuild it digitally with added features to improve efficiency and reduce waste. The digital version also
      prevents issues caused by missing or unavailable paper sheets.
    </p>

    <h3>Why?</h3>
    <p>
      I built Breadsheet to solve a real everyday problem at work. Paper forms were often lost damaged or unavailable.
      I wanted to create a lightweight digital tool that the team could use instantly without training. This project combines
      front-end development with a practical solution that improves daily workflows.
    </p>

    <h3>Implementation Details</h3>
    <p>
      Breadsheet is a single-page application built with HTML CSS and JavaScript. The layout mirrors the original paper sheet
      to reduce friction for users. JavaScript handles dynamic behaviour such as generating dates and updating the page without
      reloads. The project is deployed using Firebase Hosting for simple access across devices.
    </p>


    <h3>Features</h3>
    <ul>
      <li><b>Simplistic and Familiar UI:</b> Designed to mirror the paper version for ease of use and reduced confusion.</li>
      <li><b>Positive User Feedback:</b> Team members found the digital version more efficient and convenient than the paper sheet.</li>
      <li><b>Separate Sheets for Each Unit:</b> Custom versions for the Drive Thru and Main Store to reflect different stock needs.</li>
      <li><b>Single-Page Application (SPA):</b> Built using HTML, CSS and JavaScript combined into one streamlined document.</li>
      <li><b>Firebase Hosting:</b> Deployed online for easy, reliable access by all users.</li>
      <li><b>Automatic Date Generation:</b> Automatically fills the top row with today’s date and the next three days for added convenience.</li>
    </ul>

    <h3>User Interface</h3>
    <img src="images/B2.png" class="projectImage" alt="Breadsheet screenshot 1">
    <img src="images/B3.png" class="projectImage" alt="Breadsheet screenshot 2">

    <h3>Future Improvements</h3>
    <ul>
      <li>Implement a feature that allows sending the breadsheet directly to the group chat.</li>
      <li>Enable automatic input for specific products to streamline data entry.</li>
      <li>Incorporate functionality to input one or two boxes and have the table automatically calculate the equivalent number of individual items.</li>
    </ul>

    <h3>Personal Development</h3>
    <p>
      This project has helped me to gain further knowledge on SPAs and how several languages can be brought together within a single page
      and what benefits this has to offer. It also strengthened my confidence in deploying small tools quickly using Firebase and iterating
      on them based on real feedback from the people who use them every day.
    </p>
  `;
}

function viewHomeNASControlPanel() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");

  projectInfo.innerHTML = `
    <h1>Home NAS Control Panel</h1>
    <h2>Project Overview</h2>
    <h3>Created With PowerShell</h3>

    <p>
      The <b>Home NAS Control Panel</b> is a custom Windows Forms application designed to simplify
      and streamline management of my personal NAS (Network Attached Storage) system.
      It provides a clean interface for triggering automated file transfers using PowerShell
      and <code>robocopy</code> without impacting system performance.
    </p>

    <h3>Why?</h3>
    <ul>
      <li><b>Reliability:</b> Robocopy provides faster and more resilient file transfers than standard copy operations.</li>
      <li><b>Performance:</b> Transfers can be scheduled during low-usage periods to avoid system slowdown.</li>
      <li><b>Separation of concerns:</b> The control panel runs on a dedicated mini PC so the NAS itself remains lightweight.</li>
    </ul>

    <h3>Implementation Details</h3>
    <p>
      The application is written in C# using Windows Forms.
      Each UI button invokes a dedicated PowerShell script responsible for executing
      <code>robocopy</code> with predefined parameters.
      PowerShell handles logging directory creation and error handling
      while the C# layer focuses purely on user interaction.
    </p>

    <h3>Features</h3>
    <ul>
      <li>One-click NAS file and folder transfers.</li>
      <li>Automated logging of transfer results.</li>
      <li>Designed to run continuously on an always-on control machine.</li>
      <li>Expandable structure for additional NAS tasks.</li>
    </ul>

    <h3>User Interface</h3>
    <img src="images/HomeNASControlPanel.png" class="projectImage" alt="Home NAS Control Panel UI">

    <h3>Future Improvements</h3>
    <ul>
      <li>Add configurable transfer profiles for different backup scenarios.</li>
      <li>Add progress indicators for long-running transfers.</li>
      <li>Introduce additional NAS maintenance tools such as health checks.</li>
      <li>Improve error handling and retry logic.</li>
    </ul>

    <h3>Personal Development</h3>
    <p>
      This project strengthened my understanding of Windows automation
      and how to separate UI concerns from system-level scripting.
      It also helped me think more critically about reliability
      and long-running background processes.
    </p>
  `;
}


function viewHomeNASControlPanelScripts() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");

  Promise.all([
    fetch('documents/NetworkTransferFiles.txt').then(res => res.text()),
    fetch('documents/NetworkTransferFolders.txt').then(res => res.text())
  ])
    .then(([filesText, foldersText]) => {
      document.querySelector(".projectInfo").innerHTML = `
        <h3>NetworkTransferFiles PowerShell Script</h3>
        <pre>${filesText}</pre>
        <h3>NetworkTransferFolders PowerShell Script</h3>
        <pre>${foldersText}</pre>
      `;
    })
    .catch(error => console.error('Error loading text files:', error));
}

function viewDateChecker() {
  const popup = document.querySelector(".popup-wrapper");
  const projectInfo = document.querySelector(".projectInfo");

  popup.classList.remove("hidden");

  projectInfo.innerHTML = `
    <h1>Date Checker</h1>
    <h2>Project Overview</h2>
    <h3>Built with HTML, CSS and JavaScript</h3>
   <p>
      Date Checker is a simple web tool created to speed up the process of assigning stock dates at work.
      Previously this relied on manual checks or voice assistants. This tool provides instant accurate dates
      in a single interface.
    </p>

    <h3>Why?</h3>
    <p>
      I built this because manual date checking became repetitive and error-prone. I wanted a fast solution
      that required no thought and worked on any device. Although small this tool removes daily friction
      and improves accuracy.
    </p>

    <h3>Implementation Details</h3>
    <p>
      Date Checker is a lightweight static page built with HTML CSS and JavaScript. JavaScript calculates
      the required dates and injects them into the page dynamically. Styling is kept minimal for readability.
      The project is deployed using Firebase Hosting for easy access.
    </p>


    <h3>Features</h3>
    <ul>
      <li>Clean, accessible user interface with large, legible text for quick reference.</li>
      <li>Fast, accurate date generation to reduce operational errors.</li>
      <li>Deployment using Firebase Hosting for easy accessibility on any device.</li>
    </ul>

    <h3>User Interface</h3>
     <img src="images/DateChecker.png" alt="DateChecker_UI">

    <h3>Future Improvements</h3>
    <ul>
      <li>Add configuration options so different departments can define their own date offsets and rules.</li>
      <li>Introduce multilingual support or locale-aware formatting for wider usability.</li>
      <li>Allow exporting or printing the generated dates for quick reference boards or checklists.</li>
      <li>Extend the logic to support more complex product-specific date patterns if required.</li>
    </ul>

    <h3>Personal Development</h3>
    <p>
      This project reinforced how even very small tools can make a noticeable impact when they are designed around a real workflow.
      It also helped me become more comfortable with basic DOM manipulation and rapid deployment using Firebase for internal tools.
    </p>
  `;
}

function viewNASAutoBackup() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");
  projectInfo.innerHTML = `
    <section id="nas-auto-backup" aria-labelledby="nabs-title">
      <h1 id="nabs-title">NAS Auto-Backup PowerShell Script</h1>
      <h2>Project Overview</h2>
      <h3>Created With PowerShell</h3>

      <article>
        <p>
          This <strong>PowerShell</strong> script is designed to run on my NAS system and is configured to execute automatically on boot.
          Its purpose is to detect when an external drive is connected and immediately back up all files stored on it. The solution
          provides a fast, reliable, and fully automated approach to safeguarding important data, removing the need for manual backups
          and reducing the risk of oversight.
        </p>
        <p>
          It also requires a VBScript file in order to operate when restarting the device.
        </p>

        <h3>Why?</h3>
        <p>
          I created this script because I wanted full peace of mind that anything plugged into my NAS would be backed up without me
          having to remember to do it. Manual backups are easy to postpone or forget, especially when life gets busy. Automating this
          process ensures important files are protected and it allowed me to explore more advanced PowerShell scripting and scheduled
          task configuration at the same time.
        </p>

        <h3>Implementation Details</h3>
        <p>
          The backup solution is written in PowerShell and configured to run at startup via a scheduled task or startup script. It
          monitors the system for the presence of a specific external drive and when detected triggers a backup using robust copy
          commands to a predefined location on the NAS. Each run creates a timestamped folder to avoid overwriting previous backups
          and writes detailed logs to a log file for later review. A small VBScript wrapper is used to launch the PowerShell script
          silently so that no console window appears when the NAS restarts.
        </p>

        <h3>Features</h3>
        <ul>
          <li><strong>Automatic Execution on Boot</strong> – Ensures backup functionality is always active without requiring manual startup.</li>
          <li><strong>Real-Time External Drive Detection</strong> – Initiates backups as soon as a drive is connected.</li>
          <li><strong>Timestamped Backups</strong> – Prevents overwriting of existing files by creating uniquely dated folders.</li>
          <li><strong>Transfer Logging</strong> – Records all backup operations, including any failed transfers or issues encountered.</li>
          <li><strong>Optimised for Reliability</strong> – Reduces the possibility of missed backups due to human error.</li>
        </ul>

        <h3>Future Improvements</h3>
        <p>
          While the NAS system’s antivirus software already provides security, it can occasionally interfere with backup operations.
          Future updates will focus on adding advanced security measures within the script itself to improve data protection and enhance
          compatibility with security tools.
        </p>

        <h3>Personal Development</h3>
        <p>
          Working on this script deepened my understanding of PowerShell, scheduled tasks and how to design automation that is both safe
          and silent in the background. It also gave me more confidence in thinking about reliability, logging and failure cases rather than
          just the “happy path”.
        </p>
      </article>
    </section>
    <hr />
  `;
}

function viewNASAutoBackupScripts() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");

  fetch('documents/AutoBackup.txt')
    .then(res => res.text())
    .then(data => {
      document.querySelector(".projectInfo").innerHTML = `
        <h3>Auto Backup PowerShell Script</h3>
        <pre>${data}</pre>
      `;
    })
    .catch(error => console.error('Error loading text files:', error));
}

function viewInventoryDatabase() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");
  projectInfo.innerHTML = `
    <h1>Inventory Database</h1>

    <h2>Project Overview</h2>
    <h3>Created with HTML, JavaScript, SQL, Excel Spreadsheets & PowerShell</h3>

    <p>
      In this project, I developed a web-based inventory database that allows
      the user to view their collection remotely. The system helps to prevent
      duplicate purchases by providing clear visibility of existing items while also
      offering valuable insights into which collectibles could be added to enhance specific
      collections within the database.
      <br><br>
      The script within this project takes data from the home SQL server and publishes data every hour.
      <br><br>
      This was created for the specific intention of the user only inputting data from their home location so this is not included in the
      project.
    </p>

    <h3>Why?</h3>
    <p>
      This inventory system was created for someone whose growing collection had outgrown spreadsheets and handwritten lists.
      They needed a structured, remotely accessible solution that could update automatically from their home SQL server.
      The project not only helped solve their issue of avoiding duplicate purchases and keeping an organized overview, 
      but also allowed me to expand my ability to build tools that can support others as well as myself. It became a practical 
      way to connect multiple technologies web, Excel, SQL and PowerShell into a single automated pipeline.
    </p>

    <h3>Implementation Details</h3>
    <p>
      The front end of the inventory system is built in HTML, CSS and JavaScript rendering data in a table with search and filtering
      controls for quick navigation. Data is periodically exported from a home SQL Server instance into an Excel spreadsheet which
      acts as a structured, well formatted intermediate file. A PowerShell script then runs on a schedule, authenticates to the SQL
      server, pulls the latest data, updates the spreadsheet and publishes the resulting file or JSON to the web server. The webpage
      reads this data and displays it so the collection can be viewed remotely without exposing the database directly to the internet.
    </p>

    <h3>Features</h3>

    <ul>
      <li><b>Web-Based Inventory Database:</b> Includes essential data fields, CSS styling,
      a search bar, filtering options and accessibility buttons.</li>

      <li><b>JavaScript Functionality:</b> Handles data deployment and enhances interactivity within
      the webpage.</li>

      <li><b>SQL Import Template:</b> Pre-styled document designed to import and display SQL data in a
      clean, professional format.</li>

      <li><b>Pre-Existing Excel Spreadsheet:</b> Contains example data input from the database and acts as an
      intermediary for importing data from the SQL database to the web server.</li>

      <li><b>PowerShell Automation Script:</b> Automates the process of importing data from SQL with login
      processes and allows data to be uploaded to the webserver every hour.</li>
    </ul>

    <h3>User Interface</h3>
    <img src="images/InventoryDatabase.png" alt="Inventory Database UI">

    <h3>Future Improvements</h3>
    <ul>
      <li>Add user authentication and simple role-based access so different users can see different subsets of the data.</li>
      <li>Replace or supplement the Excel-based intermediate with a direct API or structured export format such as JSON or CSV.</li>
      <li>Introduce more advanced filtering, sorting and grouping options in the UI for large collections.</li>
      <li>Add basic analytics, such as counts per category or most frequently added items, to give users extra insight into their collection.</li>
    </ul>

    <h3>Personal Development</h3>
    <p>
      Building this project pushed me to think more about data flows and automation rather than just front-end code.
      It strengthened my skills in joining up different technologies and made me more confident in designing small systems
      that run reliably in the background with minimal manual input.
    </p>
  `;
}

function viewToDoList() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");
  projectInfo.innerHTML = `
    <h1>To Do List Application</h1>

    <h2>Project Overview</h2>
    <h3>Created with C# .NET CLI</h3>

    <p>
      This project is a fully interactive and console-based To Do List Application designed to help users
      easily manage everyday tasks. The system provides a clean menu interface for creating,
      viewing, completing, editing and deleting tasks. It also includes automatic sorting into
      categories such as active, completed and overdue items to help users keep full control
      of their workload.
      <br><br>
      The application was created to demonstrate practical object-oriented programming concepts
      including classes, properties, encapsulation, collections and method organisation. It also
      highlights how console applications can be structured to feel natural and user-friendly
      despite being text-based.
    </p>

    <h3>Why?</h3>
    <p>
      I chose to build a To Do List application because it’s a perfect balance between being simple enough to complete
      and complex enough to showcase real-world programming concepts. It gave me a chance to practise clean OOP design,
      console UX and state management all within a familiar and very relatable use case staying organised.
    </p>

    <h3>Implementation Details</h3>
    <p>
      The To Do List is built as a C# console application using an object oriented approach. Each task is represented
      as an object with properties such as title, due date and completion status, stored in a list that acts as the
      in memory data store. The main program loop displays a menu, accepts user input and calls methods on a task manager
      class to add, update, complete or delete items. Input is validated carefully to prevent crashes and to keep the
      experience smooth inside a text-only interface.
    </p>

    <h3>Features</h3>

    <ul>
      <li><b>Interactive Console Menu:</b> A clean interface allowing users to choose actions such as
      viewing tasks, adding new items, marking items complete, editing or deleting tasks.</li>

      <li><b>To Do Item Management:</b> Items include a title, due date and completion status with
      automatic categorisation into active, completed or overdue.</li>

      <li><b>C# Object-Oriented Architecture:</b> Built using classes, properties and methods that
      clearly separate responsibilities and maintain clean code structure.</li>

      <li><b>Real-Time Feedback:</b> Every action such as adding or updating a task provides clear
      on-screen results to enhance the user experience.</li>

      <li><b>Data Handling:</b> Items are stored in memory using lists, allowing fast lookups and
      flexible item management.</li>
    </ul>

    <h3>Console Interface</h3>
    <img src="images/To-Do-Application-UI.png" id="toDoImage" alt="To Do List Application UI">

    <h3>Future Improvements</h3>
    <ul>
      <li><b>Persistent storage:</b> Make the app remember your tasks and save to a local file, small DB or cloud so nothing disappears when you close the app.</li>
      <li><b>GUI / Web front-end:</b> Replace the console with a simple web or desktop UI (buttons, forms) so non-tech users and phones can use it easily.</li>
      <li><b>Sync & accounts:</b> Let people sign in and sync lists across devices – phone, laptop, tablet – or share lists with others.</li>
      <li><b>Notifications & reminders:</b> Add alerts for due dates (system notifications, mobile push or email) so important tasks don’t get forgotten.</li>
      <li><b>Search, filter & tags:</b> Add quick search, filters and tags so you can find urgent tasks or everything due this week in seconds.</li>
      <li><b>Import/Export:</b> Allow CSV/JSON export and import so users can back up data or move it into spreadsheets and other apps.</li>
      <li><b>Accessibility & UX:</b> Improve keyboard navigation, add ARIA labels and better contrast so everyone (including screen-reader users) can use it comfortably.</li>
      <li><b>Automated tests & CI:</b> Add unit tests and hook up continuous integration so future updates don’t accidentally break basic features.</li>
    </ul>

    <h3>Personal Development</h3>
    <p>
      This app strengthened my fundamental C# and OOP skills and showed me how much you can do with just a console interface
      if you structure the code well. It also gave me practice in thinking about user experience even when there are no buttons
      or graphics on the screen.
    </p>
  `;
}

function viewSpendingPotsProject() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");

  projectInfo.innerHTML = `
    <h1>Spending Pots Manager</h1>

    <h2>Project Overview</h2>
    <h3>Created with C# .NET CLI & Plaid API (Sandbox Environment)</h3>

    <p>
      This project is a console-based financial management application designed to help users
      organise and track their money using configurable <i>spending pots</i>. Each pot represents
      a budgeting category such as food, utilities or savings, with a clear balance displayed
      for each.
      <br><br>
      The system allows users to view balances, add funds, and create new spending pots, with
      all data persisted locally to a text file so information is retained between sessions.
      <br><br>
      The application also integrates with the Plaid API (sandbox environment) to simulate
      syncing real bank account balances. This allows spending pots to be automatically populated
      with account data while preserving any custom user-defined pots.
    </p>

    <h3>Why?</h3>
    <p>
      I wanted to build a realistic but safe way to explore banking APIs and budgeting logic without touching
      real money. The Spending Pots Manager gave me a chance to connect console-based UX, file persistence,
      and Plaid’s sandbox environment into one integrated project. It reflects how people actually divide their
      money in day-to-day life, while also acting as a solid platform to experiment with more advanced financial features.
    </p>

    <h3>Implementation Details</h3>
    <p>
      The Spending Pots Manager is a C# console application that stores pot names and balances in parallel lists. On startup,
      it reads from a simple text file (<code>spendingpots.txt</code>) and parses each line into a pot name and numeric balance.
      When syncing with Plaid, the app uses the official <code>Going.Plaid</code> .NET client and loads credentials from environment
      variables using DotNetEnv. It then calls sandbox endpoints to generate a public token, exchange it for an access token and
      fetch account balances. These accounts are mapped into spending pots while any custom pots are preserved and appended before
      the combined list is written back to the file.
    </p>

    <h3>Features</h3>

    <ul>
      <li><b>Console-Based Menu System:</b> A clean, user-friendly menu allowing users to view balances,
      add funds, create new pots, sync with Plaid or exit the application.</li>

      <li><b>Persistent Local Storage:</b> Spending pots and balances are saved to and loaded from a
      local text file (<code>spendingpots.txt</code>), ensuring data is not lost between runs.</li>

      <li><b>Dynamic Pot Management:</b> Users can add new spending pots with custom starting balances,
      which are immediately stored and integrated into the system.</li>

      <li><b>Plaid Sandbox Integration:</b> Simulates real bank account linking, token exchange and
      balance retrieval using Plaid’s sandbox environment.</li>

      <li><b>Secure Credential Handling:</b> Sensitive API credentials are loaded via environment
      variables using DotNetEnv rather than being hardcoded.</li>

      <li><b>Asynchronous API Calls:</b> Uses async/await to handle Plaid requests efficiently without
      blocking the application flow.</li>

      <li><b>Hybrid Sync Logic:</b> Automatically merges Plaid-linked accounts with custom spending
      pots so user-defined data is never overwritten.</li>
    </ul>

    <h3>Console Interface</h3>
    <img src="images/SpendingPotsImg1.png" id="SpendingPotsImg1" alt="SpendingPotsImg1">
    <img src="images/SpendingPotsImg2.png" id="SpendingPotsImg2" alt="SpendingPotsImg2">
    <img src="images/SpendingPotsImg3.png" id="SpendingPotsImg3" alt="SpendingPotsImg3">
    <img src="images/SpendingPotsImg4.png" id="SpendingPotsImg4" alt="SpendingPotsImg4">

    <h3>Future Improvements</h3>
    <ul>
      <li><b>Decimal-Based Currency Handling:</b> Replace integer balances with decimals to accurately
      support cents and prevent rounding errors.</li>

      <li><b>Transfers Between Pots:</b> Allow direct transfers between spending pots to make budget
      rebalancing faster and more intuitive.</li>

      <li><b>UI or Web API:</b> Introduce a desktop UI or RESTful web API so the application can be used
      via a web or mobile front end.</li>

      <li><b>Reporting & Graphs:</b> Add reporting tools, historical summaries and visual charts to give
      deeper insight into spending habits.</li>

      <li><b>Live Bank Account Integration:</b> Move from sandbox-only usage to real Plaid production
      integration with live bank accounts.</li>

      <li><b>Advanced Data Aggregation:</b> Explore optional screen scraping (where permitted) to
      support financial institutions not available via APIs.</li>

      <li><b>Savings Goals & Percentage Tracking:</b> Allow users to define savings targets and view
      percentage-based progress across all spending pots.</li>
    </ul>

    <h3>Personal Development</h3>
    <p>
      This project gave me hands-on experience with a real-world API in a safe environment and helped me gain confidence with async
      programming in C#. It also encouraged me to think more carefully about how data is stored, loaded and presented to users in a way
      that actually fits how they manage their money.
    </p>
  `;
}

function viewJwtInspectorProject() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");

  projectInfo.innerHTML = `
    <h1>JWT Inspector</h1>
    <h2>Project Overview</h2>
    <h3>Created with C# .NET CLI</h3>

    <p>
      JWT Inspector is a developer-focused CLI tool for inspecting JSON Web Tokens (JWTs). It can decode tokens and validate them using
      HS256, RS256 or JWKS (JSON Web Key Set). It helps you check token structure and view claims and confirm expiry directly from the terminal.
    </p>

    <h3>Why?</h3>
    <p>
      I built this because debugging authentication issues often comes down to a simple question. What is inside this token and can this API
      trust it. I wanted a fast CLI that I could use during development to inspect headers and claims and validate issuer rules and validate
      audience rules and enforce required claim checks without needing a full web app or external tools.
    </p>

    <h3>Implementation Details</h3>
    <p>
      The app is written as a C# console CLI using <code>System.IdentityModel.Tokens.Jwt</code> and
      <code>Microsoft.IdentityModel.Tokens</code>. It parses a command mode such as decode or validate and supports flags for issuer and audience
      and clock skew and repeatable required claim checks. For JWKS validation it reads the JWT <code>kid</code> header and loads the JWKS from a
      URL or a file and selects the matching key and validates the signature then validates token lifetime and applies claim policy rules.
      Output can be printed in a human format and JSON can be enabled for piping into other tools.
    </p>

    <h3>Features</h3>
    <ul>
      <li><b>Decode tokens:</b> Inspect header and payload and key timestamps.</li>
      <li><b>Validate HS256:</b> Verify the signature using a shared secret.</li>
      <li><b>Validate RS256:</b> Verify the signature using a public key from a PEM string or a file path.</li>
      <li><b>Validate with JWKS:</b> Match <code>kid</code> and select the correct key from <code>--jwks-url</code> or <code>--jwks-file</code>.</li>
      <li><b>Issuer validation:</b> Enforce <code>iss</code> rules using flags.</li>
      <li><b>Audience validation:</b> Enforce <code>aud</code> rules using flags.</li>
      <li><b>Policy checks:</b> Repeatable <code>--require-claim type=value</code> validation.</li>
      <li><b>JSON output:</b> Enable <code>--json</code> output for CI and scripting.</li>
      <li><b>Clock skew control:</b> Configure tolerance using <code>--clock-skew-seconds</code>.</li>
    </ul>

    <h3>Console Interface</h3>
    <img src="images/JWTInspector.png" id="JWTInspectorCLI" alt="JWT Inspector CLI">
    <h3>Future Improvements</h3>
    <ul>
      <li>Add support for multiple audiences and multiple valid issuers.</li>
      <li>Add <code>--require-scope</code> support for common OAuth scope formats.</li>
      <li>Add more exit codes for clearer automation and CI rules.</li>
      <li>Add optional profile loading for reusable validation policies.</li>
    </ul>

    <h3>Personal Development</h3>
    <p>
      This project helped me understand JWT validation at a deeper level. It improved my understanding of signature verification and JWKS key
      selection and the difference between decoding a token and trusting it. It also improved my CLI design skills such as parsing flags and
      structuring output for humans and for tooling.
    </p>
  `;
}

function viewOrderDataServiceProject() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");

  projectInfo.innerHTML = `
    <h1>Order Data Service</h1>
    <h2>Project Overview</h2>
    <h3>Created with C# .NET CLI and SQLite</h3>

    <p>
      Order Data Service is a C# console application that manages customers, orders, 
      and order items using a SQLite database combined with in memory dictionary caching.
      It provides a fast command line interface for creating, viewing, and deleting data
      without a UI layer.
    </p>

    <h3>Why?</h3>
    <p>
      I built this project as part of my personal development in C# to practice CRUD flows,
      relational data modeling, and efficient data access. The project focuses on writing
      data to SQLite and then loading that data into dictionaries for quick lookups and
      clear program flow.
    </p>

    <h3>Implementation Details</h3>
    <p>
      The application connects to a SQLite database using parameterized SQL commands
      and enforces relational integrity with foreign keys and cascading deletes.
      On startup, data is loaded into dictionary based caches to support fast lookups
      and in memory operations using C# collections.
    </p>

    <h3>Features</h3>
    <ul>
      <li><b>CRUD operations:</b> Create, read, and delete customers, orders, and order items.</li>
      <li><b>Dictionary backed cache:</b> Customers, orders, and items are stored in memory for fast access.</li>
      <li><b>Search and lookup:</b> Find customers by email and view orders by customer ID.</li>
      <li><b>Lambda queries:</b> Use FindAll to locate orders after a date and items with quantity greater than two.</li>
      <li><b>SQLite persistence:</b> Data is stored locally and persists between runs.</li>
    </ul>

    <h3>Console Interface</h3>
    <img src="images/OrderDataService_img_1.png" id="OrderDataServiceCLI" alt="Order Data Service CLI">

    <h3>Future Improvements</h3>
    <ul>
      <li>Add update flows for customers, orders, and items.</li>
      <li>Introduce async database operations.</li>
      <li>Add reporting features such as totals by customer.</li>
      <li>Expand validation and error handling.</li>
    </ul>

    <h3>Personal Development</h3>

    <p>
      This project was created as part of my ongoing personal development in C# and software development.
      As I continue to learn more about C# through hands on projects and online learning resources
      I apply that knowledge directly to my work.
    </p>

    <p>
      The project focuses on core concepts such as CRUD operations SQL backed data models and in memory
      caching using dictionaries within a console based C# application. By building real features that
      create read update and delete data I have strengthened my understanding of how C# works with
      relational databases and how data can be managed efficiently in memory.
    </p>

    <p>
      During development I used key C# and .NET features including collections lambda expressions
      predicates and clear separation of responsibilities. This project shows my ability to take
      what I learn through continuous study and apply it in practical ways while improving my
      technical skills and problem solving ability.
    </p>

    <p>
      As I continue learning and building more projects this application serves as a strong foundation
      that I can improve and expand over time.
    </p>

  `;
}


function viewRussianRouletteProject() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");

  projectInfo.innerHTML = `
    <h1>Russian Roulette</h1>
    <h2>Project Overview</h2>
    <h3>Created with C# .NET CLI</h3>

    <p>
      Russian Roulette CLI is a simple interactive console game that simulates a game of chance using a six chamber revolver.
      The player selects a chamber number and lets fate decide whether they survive or are eliminated.
      The program introduces randomness by shuffling chambers and comparing player input against a randomly selected outcome.
    </p>

    <p>
      The application focuses on understanding randomness conditional logic and user interaction in a terminal based environment.
    </p>

    <h3>Why?</h3>
    <p>
      I built this project to practice foundational C# programming concepts in a fun and engaging way.
      The goal was to explore how randomness and user input can influence program flow and outcomes while keeping the logic easy to follow and reason about.
      This project helped reinforce how small design decisions affect gameplay logic and user experience.
    </p>

    <h3>Implementation Details</h3>
    <p>
      The application is written as a C# console application using .NET.
    </p>
    <ul>
      <li>A fixed array represents the six chambers of a revolver</li>
      <li>The chambers are displayed to the player for context</li>
      <li>The player inputs a number corresponding to a chamber</li>
      <li>A random shuffle algorithm Fisher Yates is used to randomize chamber order</li>
      <li>Conditional checks determine whether the selected chamber contains the fatal outcome</li>
    </ul>

    <p>
      The program uses arrays for fixed size data and Random for nondeterministic behavior and string comparison for user choice validation and console input output for interaction.
    </p>

    <h3>Features</h3>
    <ul>
      <li><b>Six chamber revolver simulation</b> with clear outcomes</li>
      <li><b>Randomized chamber order</b> each run using a shuffle</li>
      <li><b>User driven input</b> to select a chamber</li>
      <li><b>Win or lose results</b> printed directly to the console</li>
      <li><b>Dramatic pacing</b> using prompts and pauses</li>
      <li><b>Readable output</b> designed for quick feedback</li>
    </ul>

    <h3>Console Interface</h3>
    <ul>
      <li>Displays active chambers</li>
      <li>Prompts the user to select a number</li>
      <li>Reveals survival or death outcome</li>
      <li>Uses suspense based messaging</li>
      <li>Terminates cleanly after the result</li>
    </ul>

    <h3>Future Improvements</h3>
    <ul>
      <li>Replace string based input with numeric parsing and validation</li>
      <li>Allow multiple rounds without restarting the application</li>
      <li>Track player statistics wins and losses</li>
      <li>Add difficulty modes with multiple bullets and changing chamber counts</li>
      <li>Improve randomness by hiding chamber positions from the user</li>
      <li>Add ASCII art or sound effects for atmosphere</li>
    </ul>

    <h3>Personal Development</h3>
    <p>
      This project helped me strengthen my understanding of randomization algorithms and control flow with conditionals and console based user interaction and handling user input safely and structuring small programs for clarity.
    </p>
  `;
}

function viewMealPlannerProject() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");

  projectInfo.innerHTML = `
    <h1>Meal Planner</h1>
    <h2>Project Overview</h2>
    <h3>Created with C# as a .NET Console Application using object oriented design principles and collection handling</h3>

    <p>
      Meal Planner CLI is an interactive console application that generates weekly meal plans by randomly assigning meals to days of the week.
      It supports multiple meal categories and allows reuse of existing meals and enables adding custom meals at runtime and can persist weekly plans to a text file.
    </p>

    <p>
      The application focuses on clean user interaction and safe input handling and separation of concerns between planning logic and domain models.
    </p>

    <h3>Why?</h3>
    <p>
      I built this project to practice core C# concepts in a practical stateful console application.
      The goal was to go beyond basic lists and loops and explore object oriented modeling with inheritance and managing mutable vs reusable data and input validation and control flow and randomized selection while avoiding duplicates and designing reusable application logic.
      It also served as a hands on way to understand how consuming data differs from maintaining a reusable catalog.
    </p>

    <h3>Implementation Details</h3>
    <p>
      The application is written as a C# console application using .NET.
      Meals are represented using an abstract Meal base class with concrete derived types such as PastaMeal CurryMeal BurgerMeal and CustomMeal.
    </p>

    <ul>
      <li>Catalog meals as a reusable library of known meals</li>
      <li>Stock meals as a consumable list used to generate weekly plans</li>
      <li>Weekly plans are generated by randomly selecting meals from the stock list and assigning them to weekdays</li>
      <li>Selected meals are removed to prevent duplication within the same week</li>
      <li>Safe parsing and clear validation paths reduce crashes</li>
    </ul>

    <p>
      Users can generate multiple weeks and restock meals when needed and add new custom meals and reuse existing meals from the catalog and save weekly plans to a txt file.
    </p>

    <h3>Features</h3>
    <ul>
      <li><b>Generate weekly meal plans</b> from Sunday through Saturday</li>
      <li><b>Random meal assignment</b> with no duplicates per week</li>
      <li><b>Multiple meal categories</b> using inheritance</li>
      <li><b>Reusable meal catalog</b> with cloning for safe reuse</li>
      <li><b>Custom meal creation</b> at runtime</li>
      <li><b>Restock logic</b> triggered only when needed</li>
      <li><b>Save weekly plans</b> to a TXT file</li>
      <li><b>Clean console output</b> for readability</li>
      <li><b>Safe input validation</b> for numeric and string values</li>
    </ul>

    <h3>Console Interface</h3>
    <p>Adding Soon!</p>

    <h3>Future Improvements</h3>
    <ul>
      <li>Add meal tags such as vegetarian quick and spicy</li>
      <li>Support multiple saved meal plans with timestamps</li>
      <li>Allow numbered selection instead of name based selection</li>
      <li>Add JSON export alongside TXT</li>
      <li>Persist catalog meals between sessions</li>
      <li>Add unit tests for planner logic</li>
    </ul>

    <h3>Personal Development</h3>
    <p>
      This project significantly improved my understanding of object oriented design and inheritance in C# and managing state across multiple iterations and the difference between reference reuse and cloning and designing console applications with clear user flow and defensive programming and input validation and separating domain logic from UI concerns.
      It also reinforced good habits around incremental refactoring and designing for extensibility rather than hardcoded logic.
    </p>
  `;
}


function viewSurveyFormProject() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");

  projectInfo.innerHTML = `
    <h1>Survey Form Web Project</h1>
    <h2>Project Overview</h2>
    <h3>Created with HTML and CSS as a static web page focusing on form structure accessibility and visual styling</h3>

    <p>
      Survey Form is a responsive web form designed to collect user information and feedback through a variety of input types including text fields email input number validation dropdowns radio buttons checkboxes and a textarea.
      The project emphasizes semantic HTML structure and custom CSS styling to create a clean and user friendly interface.
    </p>

    <p>
      The form is built to guide users step by step through the survey while enforcing basic validation rules directly in the browser.
    </p>

    <h3>Why?</h3>
    <p>
      I built this project to practice core front end fundamentals and form design.
      Forms are one of the most common ways users interact with websites and understanding how to structure them correctly is essential for web development.
      This project helped me explore how HTML and CSS work together to create both functional and visually appealing user interfaces without relying on JavaScript or frameworks.
    </p>

    <h3>Implementation Details</h3>
    <p>
      The application is implemented as a static HTML page styled with CSS.
    </p>

    <h4>HTML</h4>
    <ul>
      <li>Uses semantic elements such as form fieldset legend label and input</li>
      <li>Built in validation via attributes like required type email min and max</li>
      <li>Multiple input types including text email number dropdown radio buttons checkboxes and textarea</li>
      <li>Clear separation of sections using dividers and headings</li>
    </ul>

    <h4>CSS</h4>
    <ul>
      <li>Gradient background using linear gradient</li>
      <li>Custom styling for form layout and spacing</li>
      <li>Visual separators created with styled horizontal dividers</li>
      <li>Consistent input styling via shared classes</li>
      <li>Focus on readability and alignment</li>
    </ul>

    <p>
      The project does not use JavaScript relying instead on native browser validation and clean markup.
    </p>

    <h3>Features</h3>
    <ul>
      <li><b>Responsive viewport support</b> for different screen sizes</li>
      <li><b>User input validation</b> with HTML attributes</li>
      <li><b>Multiple question types</b> for structured data collection</li>
      <li><b>Grouped questions</b> using fieldsets</li>
      <li><b>Clear section separation</b> for improved UX</li>
      <li><b>Custom styling</b> with gradients and borders</li>
      <li><b>Accessible labels</b> for form inputs</li>
      <li><b>Simple submit workflow</b> using standard form submission</li>
    </ul>

    <h3>User Interface</h3>
    <p>Adding Soon!</p>

    <h3>Future Improvements</h3>
    <ul>
      <li>Fix duplicated id values to improve HTML validity</li>
      <li>Improve radio button grouping and naming consistency</li>
      <li>Add JavaScript for client side enhancements</li>
      <li>Add success and error messages after submission</li>
      <li>Improve responsive layout for mobile devices</li>
      <li>Add accessibility improvements using ARIA attributes</li>
      <li>Connect the form to a backend or API endpoint</li>
    </ul>

    <h3>Personal Development</h3>
    <p>
      This project helped me strengthen my understanding of semantic HTML structure and form validation without JavaScript and CSS layout and styling techniques and accessibility basics with labels and inputs and organizing UI elements for clarity and building user facing interfaces from scratch.
      It also reinforced the importance of clean markup and consistent naming and thinking about how users interact with forms in real world applications.
    </p>
  `;
}


function viewCoinConverter() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");

  projectInfo.innerHTML = `
    <h1>Coin Converter</h1>

    <h2>Project Overview</h2>
    <h3>Created With HTML, CSS, JavaScript</h3>

    <p>
      Coin Converter is a simple web-based application designed to help users quickly
      calculate the total monetary value of coin bags based on UK coin denominations.
      The project focuses on usability, clarity, and clean logic while reinforcing
      core front-end development principles.
    </p>

    <h3>Why?</h3>
    <p>
      I created Coin Converter to strengthen my understanding of JavaScript event handling,
      DOM manipulation, and form validation. I wanted to build a practical tool that solves
      a real-world problem while remaining lightweight and intuitive. This project helped
      me gain confidence working with user input, calculations, and dynamic UI updates.
    </p>

    <h3>Implementation Details</h3>
    <p>
      Coin Converter is built using plain HTML, CSS, and JavaScript without external
      frameworks. The application listens for form submission events, validates user input,
      and uses a switch statement to determine the value of each coin bag. Results are
      displayed dynamically, and each conversion is logged with a timestamp for reference.
    </p>

    <h3>Features</h3>
    <ul>
      <li><b>Coin Bag Conversion:</b> Calculates the total monetary value based on selected UK coin denominations.</li>
      <li><b>Input Validation:</b> Prevents invalid or negative values from being processed.</li>
      <li><b>Real-Time Results:</b> Displays conversion output instantly without page reloads.</li>
      <li><b>Conversion History:</b> Logs previous conversions with date and time for tracking.</li>
      <li><b>Clean User Interface:</b> Simple, responsive layout styled with CSS for readability.</li>
    </ul>

    <h3>User Interface</h3>
   <p>Adding Soon!</p>


    <h3>Future Improvements</h3>
    <ul>
      <li>Add support for additional currencies and denominations.</li>
      <li>Introduce persistent storage for conversion history using localStorage.</li>
      <li>Improve mobile responsiveness and accessibility.</li>
      <li>Add unit testing for conversion logic.</li>
    </ul>

    <h3>Personal Development</h3>
    <p>
      This project strengthened my JavaScript fundamentals, particularly working with
      conditional logic, DOM updates, and form events. It also reinforced the importance
      of input validation and user experience when handling numeric data.
    </p>
    <p>
      Coin Converter was a valuable stepping stone toward building more complex
      front-end applications and has improved my confidence in writing clean,
      maintainable JavaScript code.
    </p>
  `;
}

function viewPasswordGeneratorProject() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");

  projectInfo.innerHTML = `
    <h1>Password Generator</h1>
    <h2>Project Overview</h2>
    <h3>Created with Python as a CLI tool using randomisation and file handling</h3>

    <p>
      Password Generator is a simple Python console application that creates secure random passwords using letters numbers and symbols.
      The user chooses a password length and the program generates a password instantly and saves it to a local text file for later use.
    </p>

    <p>
      The app focuses on safe user input handling and randomness and basic persistence through file writing.
    </p>

    <h3>Why?</h3>
    <p>
      I built this project to practice Python fundamentals in a practical tool I could actually use.
      It helped me improve my understanding of loops and validation and working with built in modules and writing output to files.
      It also reinforced the importance of generating unpredictable passwords for security.
    </p>

    <h3>Implementation Details</h3>
    <p>
      The application is written as a Python CLI script.
      It builds a character pool using <code>string.ascii_letters</code> and <code>string.digits</code> and <code>string.punctuation</code>.
      A password is generated by selecting random characters from that pool based on the requested length.
      The generated password is appended to <code>passwords.txt</code> so it is retained across runs.
    </p>

    <h3>Features</h3>
    <ul>
      <li><b>Configurable length</b> chosen by the user</li>
      <li><b>Secure character pool</b> including letters numbers and symbols</li>
      <li><b>Input validation</b> with try again prompts for invalid values</li>
      <li><b>Minimum length enforcement</b> to avoid weak passwords</li>
      <li><b>File persistence</b> appends passwords to <code>passwords.txt</code></li>
      <li><b>Simple CLI output</b> for fast use in the terminal</li>
    </ul>

    <h3>Console Interface</h3>
    <p>Adding Soon!</p>

    <h3>Future Improvements</h3>
    <ul>
      <li>Add options to include or exclude symbols</li>
      <li>Add a clipboard copy option for faster use</li>
      <li>Add a strength indicator based on length and character variety</li>
      <li>Allow generating multiple passwords in one run</li>
      <li>Store passwords with labels or timestamps</li>
    </ul>

    <h3>Personal Development</h3>
    <p>
      This project helped me build confidence with Python input validation and looping logic and using standard library modules and file handling.
      It also helped reinforce security focused thinking around password complexity and randomness.
    </p>
  `;
}

function viewCategoryBudgetTrackerProject() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");

  projectInfo.innerHTML = `
    <h1>Category Budget Tracker</h1>
    <h2>Project Overview</h2>
    <h3>Created with Python CLI (completed during the freeCodeCamp curriculum)</h3>

    <p>
      Budget Category Tracker is a text based budgeting tool that lets users create spending categories deposit and withdraw money
      and transfer funds between categories. Every transaction is recorded in a ledger and can be summarised or visualised using a
      percentage based spend chart rendered directly in the console.
    </p>

    <p>
      The application emphasises predictable financial logic and clean data structures rather than a graphical UI so it can run anywhere Python is available.
    </p>

    <h3>Why?</h3>
    <p>
      I built this project to strengthen my Python skills while working on something practical and reusable.
      Managing everyday spending categories requires careful tracking rules and validation which made it a perfect exercise in object oriented design and console feedback.
      It also mirrors how many envelope budgeting systems work in the real world so it immediately felt useful.
    </p>

    <h3>Implementation Details</h3>
    <p>
      The tool is structured around a <code>Category</code> class that encapsulates each budgeting bucket and a helper function that builds a spend chart for any list of categories.
      Methods such as <code>deposit</code>, <code>withdraw</code>, <code>transfer</code> and <code>check_funds</code> ensure all balance updates pass through the same validation rules.
      A custom <code>__str__</code> method prints readable ledgers while <code>create_spend_chart</code> aggregates negative ledger entries into a vertical percentage chart.
    </p>

    <h4>Category Class</h4>
    <ul>
      <li>Stores each transaction as a dictionary with amount and description fields</li>
      <li>Provides deposits withdrawals and inter category transfers with shared validation</li>
      <li>Ensures all withdrawals and transfers check available funds before proceeding</li>
      <li>Calculates a running balance through a dedicated <code>get_balance</code> method</li>
      <li>Formats ledger output into a centred title followed by transaction rows and totals</li>
    </ul>

    <h4>Spend Chart Builder</h4>
    <ul>
      <li>Sums all withdrawals per category to calculate real spending</li>
      <li>Normalises spending totals into percentages and rounds to the nearest 10</li>
      <li>Generates a 100 to 0 axis with markers showing which categories meet each threshold</li>
      <li>Appends a horizontal axis and vertically prints the category names for readability</li>
    </ul>

    <h3>Features</h3>
    <ul>
      <li><b>Ledger based accounting</b> to record every deposit and withdrawal</li>
      <li><b>Cross category transfers</b> using shared validation logic</li>
      <li><b>Readable console summaries</b> via the custom string representation</li>
      <li><b>ASCII spend chart</b> for quick visual comparisons of spending habits</li>
      <li><b>Reusable CLI module</b> that can be extended or imported into larger budgeting tools</li>
      <li><b>Deterministic rounding</b> so charts remain easy to read</li>
    </ul>

    <h3>User Interface</h3>
    <img src="images/CategoryBudgetTracker.png" alt="CategoryBudgetTracker_UI">

    <h3>Future Improvements</h3>
    <ul>
      <li>Add a menu driven CLI to create select and manage categories interactively</li>
      <li>Persist ledgers to disk using JSON or a lightweight database</li>
      <li>Introduce automated tests to lock down edge cases in ledger calculations</li>
      <li>Add CSV export and import to share budgets between tools</li>
      <li>Provide colourised console output or integrate with a minimal web UI</li>
      <li>Expose the chart builder through an API for reuse in other analytics scripts</li>
    </ul>

    <h3>Personal Development</h3>
    <p>
      Building this tool helped me deepen my understanding of Python classes data validation and string formatting.
      It also reinforced how small reusable modules such as the spend chart function can power richer insights even without a GUI.
    </p>
  `;
}

function viewWeatherForecastWebApiProject() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");

  projectInfo.innerHTML = `
    <h1>Weather Forecast Web API</h1>
    <h2>Project Overview</h2>
    <h3>Built with ASP.NET Core Minimal APIs and HTML </h3>

    <p>
      This project is a lightweight ASP.NET Core Web API that generates a 5 day weather forecast in memory and exposes it through HTTP endpoints.
      It includes a minimal HTML page at the root route which fetches forecast data from the API and renders it inside the browser.
    </p>

    <p>
      The focus is on practicing Web API fundamentals such as routing, response types, and serving static HTML content directly from an endpoint
      while keeping the application small and easy to extend.
    </p>

    <h3>Why?</h3>
    <p>
      I built this project to strengthen my understanding of ASP.NET Core Minimal APIs and how frontend JavaScript can interact with API endpoints.
      It also gave me practice returning both JSON and plain text responses and using clean, readable formatting for output.
    </p>

    <h3>Implementation Details</h3>
    <p>
      The API defines summary strings and matching message strings, then generates 5 forecast records using a local <code>CreateForecast()</code> function.
      Two routes expose the information: a plain text output endpoint and a root HTML endpoint that calls the API using <code>fetch()</code>.
    </p>

    <h4>Core Components</h4>
    <ul>
      <li>A <code>WeatherForecast</code> record that stores date, Celsius temperature, summary, and message</li>
      <li>A calculated <code>TemperatureF</code> property derived from Celsius</li>
      <li><code>CreateForecast()</code> which generates 5 days of random forecast data</li>
      <li><code>/weatherforecastOutput</code> returns formatted forecast lines as plain text</li>
      <li><code>/</code> serves an HTML page which fetches and displays <code>/weatherforecastOutput</code></li>
    </ul>

    <h3>Endpoints</h3>
    <ul>
      <li><b>GET /</b> returns an HTML page that fetches and displays the forecast</li>
      <li><b>GET /weatherforecastOutput</b> returns forecast lines as text (<code>Results.Text</code>)</li>
      <li><b>OpenAPI</b> is enabled in development mode using <code>AddOpenApi</code> and <code>MapOpenApi</code></li>
    </ul>

    <h3>User Interface</h3>
     <img src="images/WeatherForecast.png" alt="WeatherForecast_UI">

    <h3>Future Improvements</h3>
    <ul>
      <li>Add a JSON endpoint (<code>/weatherforecast</code>) alongside the text output for API consumers</li>
      <li>Switch the UI to render a table layout and add basic styling</li>
      <li>Add query parameters (days, unit, min/max temperature filters)</li>
      <li>Introduce dependency injection and a forecast service class</li>
      <li>Add logging and structured output using <code>ILogger</code></li>
      <li>Add automated tests for formatting and forecast generation</li>
    </ul>

    <h3>Personal Development</h3>
    <p>
      Building this helped reinforce how Minimal APIs work in ASP.NET Core, how to structure endpoints, and how to debug client-side fetch issues
      when the UI doesn’t render due to JavaScript errors.
    </p>
  `;
}
function viewCafeList() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");

  projectInfo.innerHTML = `
    <h1>Cafe List</h1>
    <h2>Project Overview</h2>
    <h3>Created with C# .NET CLI</h3>

<p>
  CafeList is a lightweight console experience that assembles curated menu sections—coffee, chocolate drinks, cold beverages, syrups, bottled drinks,
  and food—then prints them with consistent formatting and dietary callouts.
  Each run also generates a QR code PNG pointing to a placeholder ordering URL so guests can scan from the terminal output.
</p>

<p>
  The emphasis is on practicing clean data modeling, reusable printing logic via an <code>IMenuItem</code> abstraction, and integrating a small external package
  (QRCoder) for asset generation without adding storage or databases.
</p>

<h3>Why?</h3>
<p>
  I built this to experiment with structured menu data in code, demonstrate dietary tagging (vegan/gluten-free), and explore how a console app can still produce
  shareable assets like QR codes for kiosk-style flows.
  It also keeps the footprint tiny—no persistence or input prompts—while remaining easy to extend with new sections.
</p>

<h3>Implementation Details</h3>
<p>
  <code>Program.cs</code> orchestrates everything: it calls each <code>BuildMenu()</code> factory, prints sections through a shared <code>PrintMenu</code> helper,
  filters vegan foods, and finally invokes <code>GenerateBlankSiteQr()</code> to save <code>blank-site-qr.png</code> next to the executable.
  Menu categories are strongly typed classes that implement <code>IMenuItem</code> for uniform handling.
</p>

<h4>Core Components</h4>
<ul>
  <li>An <code>IMenuItem</code> interface defining <code>Name</code> and <code>Description</code> so all lists share the same contract</li>
  <li>Category classes (<code>CoffeeList</code>, <code>FoodList</code>, <code>SyrupList</code>, etc.) with static <code>BuildMenu()</code> factories returning <code>IReadOnlyList&lt;T&gt;</code></li>
  <li><code>FoodList</code> entries that include <code>IsVegan</code> and <code>IsGlutenFree</code> flags for targeted filtering</li>
  <li><code>PrintMenu()</code> to format section headers and rows consistently across categories</li>
  <li><code>GenerateBlankSiteQr()</code> using QRCoder to render a PNG linked to <code>https://blank.org/</code></li>
</ul>

<h3>Execution Flow</h3>
<ul>
  <li><b>Startup</b> – Instantiate every menu list, print a welcome banner, and display each section plus a vegan-only subset</li>
  <li><b>QR Output</b> – Save <code>blank-site-qr.png</code> and echo its path so users can scan it immediately</li>
  <li><b>Console UI</b> – All interaction is read-only output, making the app deterministic and easy to demo</li>
</ul>

<h3>User Interface</h3>
   <img src="images/CafeMenu_img1.png" alt="CafeMenu_ConsoleUI_img1">
    <img src="images/CafeMenu_img2.png" alt="CafeMenu_ConsoleUI_img2">

<h3>Future Improvements</h3>
<ul>
  <li>Introduce pricing, allergen tags, or seasonal availability metadata</li>
  <li>Load menu definitions from JSON or a CMS instead of hard-coding lists</li>
  <li>Add interactive prompts to filter by dietary needs or beverage type</li>
  <li>Parameterize the QR URL or integrate a real ordering endpoint</li>
  <li>Export menus to HTML/PDF alongside console output</li>
  <li>Wire up basic unit tests for menu builders and QR generation</li>
</ul>

<h3>Personal Development</h3>
<p>
  Building CafeList reinforced how to organize small domain models, leverage interfaces for consistent rendering,
  and integrate third-party packages for asset creation even in simple console utilities.
  It also highlighted opportunities to keep console apps maintainable with clear separation between data, presentation, and generation logic.
</p>
  `;
}





function closePopup() {
  const closePopUp = document.querySelector(".popup-wrapper");
  closePopUp.classList.add("hidden");
}

/* ========= Dynamic language-based project filtering ========= */

/**
 * Show or hide a whole project "block"
 * i.e. header + buttons + language row until the next header/external section.
 */
function setProjectVisibility(headerEl, visible) {
  if (!headerEl) return;

  headerEl.classList.toggle('hidden', !visible);

  let sibling = headerEl.nextElementSibling;
  while (
    sibling &&
    !sibling.classList.contains('projectHeaders') &&
    !sibling.classList.contains('externalProjects')
  ) {
    sibling.classList.toggle('hidden', !visible);
    sibling = sibling.nextElementSibling;
  }
}

function applyLanguageFilter() {
  const checkboxes = document.querySelectorAll('.lang-filter-chip input[type="checkbox"]');
  if (!checkboxes.length) return;

  const activeLangs = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value); // e.g. "html", "sql"

  const headers = document.querySelectorAll('.projectHeaders');

  headers.forEach(header => {
    const baseId = header.id.replace('header-', ''); // e.g. "home-nas"
    const langDiv = document.getElementById('langs-' + baseId);

    if (!langDiv) {
      // If there's no language row, just show it.
      setProjectVisibility(header, true);
      return;
    }

    // Get language codes for this project from class names: lang-html -> "html"
    const projectLangs = Array.from(langDiv.querySelectorAll('.lang-circle'))
      .flatMap(badge =>
        Array.from(badge.classList)
          .filter(cls => cls.startsWith('lang-') && cls !== 'lang-circle')
          .map(cls => cls.replace('lang-', ''))
      );

    if (activeLangs.length === 0) {
      // No filters selected: show all projects
      setProjectVisibility(header, true);
      return;
    }

    const matches = projectLangs.some(lang => activeLangs.includes(lang));
    setProjectVisibility(header, matches);
  });

  // Only show "External Sources" if at least one project is visible
  const external = document.querySelector('.externalProjects');
  if (external) {
    const anyVisibleProject = Array.from(document.querySelectorAll('.projectHeaders'))
      .some(h => !h.classList.contains('hidden'));
    external.classList.toggle('hidden', !anyVisibleProject);
  }
}

// Hook up filter behaviour once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.lang-filter-chip input[type="checkbox"]');
  checkboxes.forEach(cb => cb.addEventListener('change', applyLanguageFilter));

  const resetBtn = document.getElementById('langFilterReset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      // Clear all selections -> logic will treat this as "show everything"
      const boxes = document.querySelectorAll('.lang-filter-chip input[type="checkbox"]');
      boxes.forEach(b => (b.checked = false));
      applyLanguageFilter();
    });
  }

  // Initial pass: apply filter based on initial checkbox state
  applyLanguageFilter();

  // Insert randomized thumbnails under project titles
  try {
    insertProjectThumbnails();
  } catch (e) {
    console.error('Thumbnail insertion failed', e);
  }
});
