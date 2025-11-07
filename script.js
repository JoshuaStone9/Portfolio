
function viewFinanceManager() {
    const openPopUp = document.querySelector(".popup-wrapper");
    openPopUp.classList.remove("hidden");
    const projectInfo = document.querySelector(".projectInfo");
    
projectInfo.innerHTML = `
                <h1>Finance Manager</h1>
                <h2>Project Overview</h2>
                <h3>Created With C#, SQL</h3>
                <p>I have designed a finance tracker in which assists users in everyday life, their are multiple features in which can assist users in how to manage their money and easily track what they are spending and could potentially save. This is a project which is I am currently still working on to make better and adapt to the modern world. I feel very passionate about this project as I feel my ideas in which are introduced throughout the project will impact users everyday life in a very positive way.</p>
                </p>
                <h3>Features</h3>
                  <ul>
                    <li><b>Centralized Dashboard: </b>The main form provides quick access to all sections of the Finance Manager, giving users various options to input their financial data.</li>
                    <li><b>Bills Management: </b>Users can easily add, view, and manage their recurring bills to keep track of regular monthly expenses.</li>
                    <li><b>Extra Expenses Tracking:</b>Allows users to record one-off or predicted extra expenses for better budgeting throughout the month.</li>
                    <li><b>Savings Overview: </b>Lets users input and monitor their savings progress, set financial goals, and visualize monthly savings performance.</li>
                    <li><b>Investments Management: </b>Supports tracking of current, future and past investments giving users insight into how much they invest over time.</li>
                    <li><b>All Payments Page: </b>Displays all financial data in a single view, including a grand total of expenses, with quick-access buttons for Reload, Edit, and Delete functions.</li>
                    <li><b>(Future Development) User Account System: </b>Simple registration and login process with 2FA (two-factor authentication).</li>
                    <li><b>Secure Data Storage: </b>Uses a connected SQL Server to store user data, featuring auto-incremented IDs and 32-bit encrypted passwords for protection.</li>
                  </ul>
                <h3>User Interface</h3>
                    <img src="images/FM_img1.png" class="FM_images">
                    <img src="images/FM_img2.png" class="FM_images">
                    <img src="images/FM_img3.png" class="FM_images">
                    <img src="images/FM_img4.png" class="FM_images">
                    <img src="images/FM_img5.png" class="FM_images">
                    <img src="images/FM_img6.png" class="FM_images">
                
                <h3>Future Improvements</h3>
                <ul>
                  <li>Integrate automated data input using third-party APIs</li>
                  <li>Enhance the user interface based on collected feedback for improved usability</li>
                  <li>Implement a user management system</li>
                  <li>Introduce two-factor authentication (2FA) and additional security measures to protect sensitive customer data</li>
                </ul>
                  
                  <h3>Personal Development</h3>
                   <p>This project is the first I have completed fully with C# I found the journey to be complex but rewarding with adding further knowledge to backend software development using SQL to achieve storage of data within the project.</p>
                   <p> My knowledge on C# is of a good standard however I do feel I have a long way till I become fluent within this programming language which I am using tools such as freeCodeCamp and creating new projects to assist in this.</p>
`;
}


function viewBreadsheet() {
    const openPopUp = document.querySelector(".popup-wrapper");
    openPopUp.classList.remove("hidden");
    const projectInfo = document.querySelector(".projectInfo");
projectInfo.innerHTML = `
      <h1>Breadsheet</h1>
        <h2>Created With HTML, CSS, JavaScript, Firebase Hosting</h2>
          <p>I have designed a resource called a ‘breadsheet’ to help log dated stock in my current job role. Although the company already has a paper version of this, 
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
          <img src=images/B2.png class="projectImage"> 
          <img src=images/B3.png class="projectImage"> 
          <h3>Future Improvements</h3>
          <ul>
            <li>Implement a feature that allows sending the breadsheet directly to the group chat</li>
            <li>Enable automatic input for specific products to streamline data entry</li>
            <li>Incorporate functionality to input one or two boxes and have the table automatically calculate the equivalent number of individual items</li>
          </ul>
          <h3>Personal Development</h3>
          <p>This project has helped me to gain further knowledge on SPAs and how several languages can be brought together within a single page and what benefits this has to offer.</p>
`;


}

function hideAllProjects() {
  const projects = document.querySelectorAll('.projectHeaders, .projectViewBtn');
  projects.forEach(el => el.classList.add('hidden'));
}



function viewAllProjects() {
  hideAllProjects();

  const projects = document.querySelectorAll('.projectHeaders, .projectViewBtn');
  projects.forEach(el => el.classList.remove('hidden'));
}

function htmlProjects() {
  hideAllProjects();

  const idsToShow = [
    "dateCheckerHeader",
    "viewDateChecker",
    "dateCheckerWebsite",
    "inventoryDatabaseHeader",
    "InventoryDatabaseBtn",
    "breadsheetHeader",
    "breadsheetViewBtn"
  ];

  idsToShow.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('hidden');
  });
}

function SQLProjects() {
  hideAllProjects();

  const idsToShow = [
    "inventoryDatabaseHeader",
    "InventoryDatabaseBtn"
  ];

  idsToShow.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('hidden');
  });
}

function CSharpAndSQLProjects() {
  hideAllProjects();

  const idsToShow = [
    "financeManagerHeader",
    "FinanceManagerBtn"
  ];

  idsToShow.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('hidden');
  });
}

function pythonProjects() {
  hideAllProjects();

  const idsToShow = [
    "nasAutoBackupHeader",
    "NASAutoBackup",
    "homeNASControlPanelHeader",
    "viewHomeNASControlPanel"
  ];

  idsToShow.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('hidden');
  });
}



// function SQLprojects() {
//   const 
// }



function viewHomeNASControlPanel() {
   const openPopUp = document.querySelector(".popup-wrapper");
    openPopUp.classList.remove("hidden");
    const projectInfo = document.querySelector(".projectInfo");
projectInfo.innerHTML = `
      <h1>Home NAS Control Panel</h1>
      <h2>Created with C# and PowerShell Scripts
      <h3>Project Overview</h3>
        <p>
          The <b>Home NAS Control Panel</b> is a custom Windows Forms application I developed to simplify and streamline the 
          management of my personal NAS (Network Attached Storage) system. It provides an intuitive interface with 
          dedicated buttons for frequently used operations, allowing me to perform routine tasks quickly and efficiently 
          without navigating complex menus or command-line tools.
        </p>
        <p>
          The Control Panel reflects my ongoing journey to deepen my expertise 
          in C# and desktop application development. Throughout the process I engineered creative solutions to automate repetitive workflows, optimize system interactions and improve the speed and reliability of daily operations.
        </p>


        <h3>Features</h3>
        <ul>
          <li><b>Automated NAS Management:</b> Custom automation for routine NAS management tasks.</li>
          <li><b>Responsive Interface Design:</b> Event-driven UI design for smooth and user-friendly controls.</li>
          <li><b>Ongoing Development:</b> Continuous improvement and updates as new operational needs arise.</li>
        </ul>

        <h3>Implementation Detail</h3>
        <p>Each button within the application is linked to a dedicated <strong>PowerShell</strong> script that executes multiple functions. 
        I adopted this approach to improve code readability within the main C# application, streamline the debugging process, and 
        leverage the extended functionality that PowerShell offers. This design choice ensures that each button operates as intended while 
        reducing unnecessary complexity in the core program logic.</p>

        <h3>Personal Development</h3>
        <p>This project has been both a technical challenge and a rewarding learning experience. It continues to evolve as I discover new 
        ways to improve efficiency, enhance the user interface and expand functionality transforming my NAS management into a smooth, one-click process.</p>

        <p>I have maintained a professional yet straightforward design for the Control Panel to ensure a clean, user-friendly interface 
        throughout its development. Looking ahead, my goal is to create a highly customizable menu/control panel—building upon this foundation—that developers 
        can adapt and use effectively within their own workflows.</p>



      </article>
    </section>


    <hr />`


}

function viewDateChecker() {
  const popup = document.querySelector(".popup-wrapper");          // the overlay/shell
  const projectInfo = document.querySelector(".projectInfo");       // the content area inside the popup
  const sidePanel = document.querySelector(".side-panel");          // your actual slide-in panel

  popup.classList.remove("hidden");

  projectInfo.innerHTML = `
      <h2>Date Checker</h2>
        <p>The <b>Time Checker Application</b> is a cross-platform web tool I developed to improve accuracy and efficiency
         when dating new stock at my current workplace</p>
        <p> The project began as a <b>C# .NET 9.0 WinForms</b> application and once complete, 
            the application was deployed via <b>Firebase Hosting</b></p>

        <h3>Features</h3>
        <ul>
          <li>Cross-platform redevelopment from C# WinForms to HTML, CSS, and JavaScript.</li>
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
          This <strong>PowerShell</strong> script is designed to run on my NAS system and is configured to execute automatically on boot. Its purpose is to detect when an external drive is connected and immediately back up all files stored on it. The solution provides a fast, reliable, and fully automated approach to safeguarding important data, removing the need for manual backups and reducing the risk of oversight.
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
          While the NAS system’s antivirus software already provides security, it can occasionally interfere with backup operations. Future updates will focus on adding advanced security measures within the script itself to improve data protection and enhance compatibility with security tools.
        </p>
      </article>
    </section>
    <hr />
    `;
}


function viewInventoryDatabase() {
    const openPopUp = document.querySelector(".popup-wrapper");
    openPopUp.classList.remove("hidden");
    const projectInfo = document.querySelector(".projectInfo");
    projectInfo.innerHTML = `
    <h1>Inventory Database</h1>

    <h2>Project Overview</h2>

    <h3>Created with HTML, Javascript, Excel Spreadsheets & Powershell Scripts</h3>

    <p>In this project, I developed a web-based inventory database that allows 
    the user to view their collection remotely. The system helps to prevent 
    duplicate purchases by providing clear visibility of existing items while also 
    offering valuable insights into which collectables could be added to enhance specific 
    collections within the database. <br><br> The script within this project takes data from the home SQL server and publishes data every hour.
    <br><br> This was created for the specific intention of the user only inputting data from their home location so this is not included in the
    project.</p>

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

      </li><b>PowerShell Automation Script:</b> Automates the process of importing data from SQL with login 
      processes and allows data to be uploaded to the webserver every hour.</li>
    </ul>

    <h3>User Interface</h3>
    <img src="images/InventoryDatabase.png">
    `;
}

function closePopup() {
    const closePopUp = document.querySelector(".popup-wrapper");
    closePopUp.classList.add("hidden");  
}
