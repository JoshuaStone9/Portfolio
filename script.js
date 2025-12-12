function viewFinanceManager() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");

  projectInfo.innerHTML = `
    <h1>Finance Manager</h1>
    <h2>Project Overview</h2>
    <h3>Created With C#, SQL</h3>
    <p>
      I have designed a finance tracker in which assists users in everyday life, there are multiple features which can assist users in how to manage their money and easily track what they are spending and could potentially save.
      This is a project which I am currently still working on to make better and adapt to the modern world. I feel very passionate about this project as I feel my ideas which are introduced throughout the project will impact users everyday life in a very positive way.
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
      This project is the first I have completed fully with C#. I found the journey to be complex but rewarding, adding further knowledge to backend software development using SQL to achieve storage of data within the project.
    </p>
    <p>
      My knowledge of C# is of a good standard; however, I do feel I have a long way to go until I become fluent in this programming language, and I am using tools such as freeCodeCamp and creating new projects to assist with this.
    </p>
  `;
}

function viewBreadsheet() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");
  projectInfo.innerHTML = `
    <h1>Breadsheet</h1>
    <h2>Created With HTML, CSS, JavaScript, Firebase Hosting</h2>
    <p>
      I have designed a resource called a ‘breadsheet’ to help log dated stock in my current job role. Although the company already has a paper version of this,
      I chose to redesign it in an electronic format with added features to improve efficiency and reduce waste. Additionally, there have been several instances where
      the team did not have paper breadsheets available and this electronic version helps to prevent that issue.
    </p>

    <h2>Features</h2>
    <ul>
      <li><b>Simplistic and Familiar UI:</b> Designed to mirror the paper version for ease of use and reduced confusion.</li>
      <li><b>Positive User Feedback:</b> Team members found the digital version more efficient and convenient than the paper sheet.</li>
      <li><b>Separate Sheets for Each Unit:</b> Custom versions for the Drive Thru and Main Store to reflect different stock needs.</li>
      <li><b>Single-Page Application (SPA):</b> Built using HTML, CSS and JavaScript combined into one streamlined document.</li>
      <li><b>Firebase Hosting:</b> Deployed online for easy, reliable access by all users.</li>
      <li><b>Automatic Date Generation:</b> Automatically fills the top row with today’s date and the next three days for added convenience.</li>
    </ul>

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
      This project has helped me to gain further knowledge on SPAs and how several languages can be brought together within a single page and what benefits this has to offer.
    </p>
  `;
}

function viewHomeNASControlPanel() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");
  projectInfo.innerHTML = `
    <h1>Home NAS Control Panel</h1>
    <h2>Created with C# and PowerShell Scripts</h2>

    <h3>Project Overview</h3>
    <p>
      The <b>Home NAS Control Panel</b> is a custom Windows Forms application I am developing to simplify and streamline the
      management of my personal NAS (Network Attached Storage) system. It currently has two buttons which assist to transport files and folders
      using robocopy and has a friendly UI, allowing me to perform routine tasks quickly and efficiently
      without the need to worry about files not copying or massively slowing my system down.
    </p>

    <h3>Why?</h3>
    <p><b>These Are The Reasons Why I Created This & Why It's Needed:</b></p>
    <ul>
      <li><b>Robocopy:</b> A faster, more reliable and more flexible alternative to standard file copying.
      It handles large transfers with ease and can create detailed log files to track skipped or failed files and the reasons behind them.</li>
      <li><b>Time Allocation:</b> Allowing the user to choose when a task runs ensures large transfers can occur during low-usage periods, reducing
      interruptions and minimizing the impact on system performance.</li>
      <li><b>External Deployment:</b> The program runs on my mini PC which serves as the application layer for my NAS. This approach keeps processing
      separate from the main device, preventing performance issues and ensuring smoother operation.</li>
    </ul>

    <h3>Features</h3>
    <ul>
      <li><b>Automated NAS Management:</b> Custom automation for routine NAS management tasks driven by the time inputted by the user.</li>
      <li><b>Responsive Interface Design:</b> Event-driven UI design for smooth and user-friendly controls.</li>
      <li><b>Ongoing Development:</b> Continuous improvements and updates as new operational needs arise.</li>
    </ul>

    <h3>Implementation Detail</h3>
    <p>
      Each button within the application is linked to a dedicated <strong>PowerShell</strong> script that executes multiple functions.
      I adopted this approach to improve code readability within the main C# application, streamline the debugging process and
      use the extended functionality that PowerShell offers. This design choice ensures that each button operates as intended while
      reducing unnecessary complexity in the core program logic.
    </p>

    <h3>Personal Development</h3>
    <p>
      This project has been both challenging and rewarding. As I keep working on it I am finding new ways to make it easier to use,
      more efficient and more helpful overall. My goal is to turn my NAS management into a simple one-click process and as the project
      grows this will become more visible.
    </p>

    <p>
      I have maintained a professional yet straightforward design for the Control Panel to ensure a clean, user-friendly interface
      throughout its development. Looking ahead, my goal is to create a highly customizable menu/control panel which can be used for extensive tasks.
    </p>
  `;
}

function viewHomeNASControlPanelImages() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");
  projectInfo.innerHTML = `
    <img src="images/HomeNASControlPanel.png" alt="Home NAS Control Panel">
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
    <h2>Date Checker</h2>
    <p>
      The <b>Time Checker Application</b> is a simple web tool I created to speed up and streamline the process of assigning
      dates to new stock at my workplace. Previously I had to rely on Siri or manually check the calendar, but now all the
      essential dates are available instantly in a single-page interface. The displayed dates correspond to those currently required
      for several products.
    </p>

    <p>This tool also helps reduce the chance of human error.</p>

    <p>
      The project is a simple yet effective tool built using <b>HTML, CSS and JavaScript</b> and once completed deployed through <b>Firebase Hosting</b>.
    </p>

    <h3>Features</h3>
    <ul>
      <li>Clean, accessible user interface with large, legible text for quick reference.</li>
      <li>Fast, accurate date generation to reduce operational errors.</li>
      <li>Deployment using Firebase Hosting for easy accessibility on any device.</li>
    </ul>
  `;
}

function viewNASAutoBackup() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");
  projectInfo.innerHTML = `
    <section id="nas-auto-backup" aria-labelledby="nabs-title">
      <h2 id="nabs-title">NAS Auto-Backup PowerShell Script</h2>

      <article>
        <h3>Project Overview</h3>
        <p>
          This <strong>PowerShell</strong> script is designed to run on my NAS system and is configured to execute automatically on boot.
          Its purpose is to detect when an external drive is connected and immediately back up all files stored on it. The solution
          provides a fast, reliable, and fully automated approach to safeguarding important data, removing the need for manual backups
          and reducing the risk of oversight.
        </p>
        <p>
          It also requires a VBScript file in order to operate when restarting the device.
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

    <h3>Created with HTML, JavaScript, Excel Spreadsheets & PowerShell Scripts</h3>

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
  `;
}

function viewToDoList() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");
  projectInfo.innerHTML = `
    <h1>To Do List Application</h1>

    <h2>Project Overview</h2>

    <h3>Created with C# (.NET), Object-Oriented Programming Principles & Console UI</h3>

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
  `;
}

function viewSpendingPotsProject() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");
  const projectInfo = document.querySelector(".projectInfo");

  projectInfo.innerHTML = `
    <h1>Spending Pots Manager</h1>

    <h2>Project Overview</h2>

    <h3>Created with C#, .NET Console Application & Plaid API (Sandbox Environment)</h3>

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
});
