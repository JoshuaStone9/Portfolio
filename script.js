
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
                <h2>IMAGES YET TO BE UPLOADED</h2>
                
                    
                   <h3> This project is the first I have completed fully with C# I found the journey to be complex but rewarding with adding further knowledge to backend software development using SQL to achieve storage of data within the project.
                    <br><br>
                    My knowledge on c# is of a good standard however I do feel I have a long way till I become fluent within this programming language which I am using tools such as freeCodeCamp and creating new projects to assist in this.</h3>
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
            <li><b>Single-Page Application (SPA):</b> Built using HTML, CSS, and JavaScript combined into one streamlined document.</li>
            <li><b>Firebase Hosting:</b> Deployed online for easy, reliable access by all users.</li>
            <li><b>Automatic Date Generation:</b> Automatically fills the top row with today’s date and the next three days for added convenience.</li>
          <img src=images/B2.png class="projectImage"> 
          <img src=images/B3.png class="projectImage"> 
                    
                   <h3>
                    This project has helped me to gain further knowledge on SPAs and how several languages can be brought together within a single page and what benefits this has to offer.</h3>
`;


}



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

        <p>
          This project has been both a technical challenge and a rewarding learning experience. It continues to evolve as I discover new ways to improve efficiency, enhance the user interface, and expand functionality—transforming my NAS management into a smooth, one-click process.
        </p>

        <p>
          I have maintained a professional yet straightforward design for the Control Panel to ensure a clean, user-friendly interface throughout its development. Looking ahead, my goal is to create a highly customizable menu/control panel—building upon this foundation—that developers can adapt and use effectively within their own workflows.
        </p>


        <h3>Implementation Detail</h3>
        <p>
          Each button within the application is linked to a dedicated <strong>PowerShell</strong> script that executes multiple functions. I adopted this approach to improve code readability within the main C# application, streamline the debugging process, and leverage the extended functionality that PowerShell offers. This design choice ensures that each button operates as intended while reducing unnecessary complexity in the core program logic.
        </p>
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
    <section id="time-checker-application" aria-labelledby="tca-title">
      <h2 id="tca-title">Date Checker</h2>

      <article>
        <p>
          The <strong>Time Checker Application</strong> is a cross-platform web tool I developed to improve accuracy and efficiency when dating new stock at my current workplace...
        </p>
        <p>
          The project began as a <strong>C# .NET 9.0 WinForms</strong> application...
        </p>

        <p>
          Once complete, the application was deployed via <strong>Firebase Hosting</strong> and is accessible at:
          <a href="https://date-checker-costa.web.app" target="_blank" rel="noopener">https://date-checker-costa.web.app</a>
        </p>

        <h3>Key aspects of the project include</h3>
        <ul>
          <li>Cross-platform redevelopment from C# WinForms to HTML, CSS, and JavaScript.</li>
          <li>Clean, accessible user interface with large, legible text for quick reference.</li>
          <li>Fast, accurate date generation to reduce operational errors.</li>
          <li>Deployment using Firebase Hosting for easy accessibility on any device.</li>
        </ul>

        <p>
          I have maintained a clear and straightforward design...
        </p>
      </article>
    </section>
    <hr />
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

        <h3>Key Features</h3>
        <ul>
          <p><strong>Automatic Execution on Boot</strong> – Ensures backup functionality is always active without requiring manual startup.</p>
          <p><strong>Real-Time External Drive Detection</strong> – Initiates backups as soon as a drive is connected.</p>
          <p><strong>Timestamped Backups</strong> – Prevents overwriting of existing files by creating uniquely dated folders.</p>
          <p><strong>Transfer Logging</strong> – Records all backup operations, including any failed transfers or issues encountered.</p>
          <p><strong>Optimised for Reliability</strong> – Reduces the possibility of missed backups due to human error.</p>
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

function viewNASAutoBackupCode() {
  const openPopUp = document.querySelector(".popup-wrapper");
  openPopUp.classList.remove("hidden");

  const projectInfo = document.querySelector(".projectInfo");
  projectInfo.innerHTML = ""; // Clear existing content

  const psHeading = document.createElement("h1");
  psHeading.textContent = "PowerShell (Auto-Backup.ps1)";
  projectInfo.appendChild(psHeading);

  const psCode = String.raw`function Backup-Drive {
    param (
        [string]$driveLetter
    )

    if (-not (Test-Path "${'${'}driveLetter}\\")) {
        Write-Host "❌ Drive ${'${'}driveLetter} not found or not ready."
        return
    }

    # --- Get and sanitize volume label ---
    try {
        $volumeLabel = (Get-Volume -DriveLetter $driveLetter.TrimEnd(':')).FileSystemLabel
        if ([string]::IsNullOrWhiteSpace($volumeLabel)) {
            $volumeLabel = "UnnamedDrive"
        }
    } catch {
        $volumeLabel = "UnknownDrive"
    }
    $safeLabel = ($volumeLabel -replace '[\\/:*?"<>|]', '_')
    if (-not $safeLabel) { $safeLabel = "UnknownDrive" }

    # --- Build paths ---
    $timestamp       = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
    $baseBackupPath  = "D:\Backups"

    $driveBackupRoot = Join-Path -Path $baseBackupPath -ChildPath $safeLabel
    $backupFolder    = Join-Path -Path $driveBackupRoot -ChildPath $timestamp

    $driveLogRoot    = Join-Path -Path (Join-Path -Path $baseBackupPath -ChildPath "Logs") -ChildPath $safeLabel
    $logFolder       = $driveLogRoot
    $logFile         = Join-Path -Path $logFolder -ChildPath "BackupLog.txt"

    # --- Create folders ---
    New-Item -ItemType Directory -Force -Path $backupFolder -Confirm:$false | Out-Null
    New-Item -ItemType Directory -Force -Path $logFolder -Confirm:$false | Out-Null

    # --- Start backup ---
    $src  = "${'${'}driveLetter}\\"
    $dest = $backupFolder

    if (-not (Test-Path $src)) {
        Add-Content -Path $logFile -Value "[$(Get-Date)] ❌ Source path not found: $src"
        return
    }

    Add-Content -Path $logFile -Value "[$(Get-Date)] Starting robocopy from $src to $dest"

    try {
        robocopy $src $dest /E /Z /MT:32 /R:0 /W:0 /XD "${'${'}driveLetter}\Backups" "${'${'}driveLetter}\Logs" /COPY:DAT /DCOPY:T /XO /XN /XC /NFL /NDL /NJH /NJS /NP /LOG+:"$logFile" /TEE

        $exitCode = $LASTEXITCODE
        Add-Content -Path $logFile -Value "[$(Get-Date)] robocopy exited with code $exitCode"

        if ($exitCode -ge 8) {
            Add-Content -Path $logFile -Value "[$(Get-Date)] ❌ robocopy encountered a serious error."
        } else {
            Add-Content -Path $logFile -Value "[$(Get-Date)] ✅ Backup completed successfully."
        }

    } catch {
        Add-Content -Path $logFile -Value "[$(Get-Date)] ❌ Exception during robocopy: $_"
    }
}

$previousDrives = @()

Write-Host "🔄 Monitoring for USB drives on H: or I:... Press Ctrl+C to stop."

while ($true) {
    Start-Sleep -Seconds 3

    $currentDrives = Get-PSDrive -PSProvider FileSystem |
        Where-Object { $_.Name -in @("H", "I") } |
        Select-Object -ExpandProperty Name

    $newDrives = $currentDrives | Where-Object { $_ -notin $previousDrives }

    foreach ($drive in $newDrives) {
        Write-Host "✅ Detected drive ${'${'}drive}: — starting backup..."
        Backup-Drive -driveLetter "${'${'}drive}:"
    }

    $previousDrives = $currentDrives
}`;

  const psPre = document.createElement("pre");
  const psCodeEl = document.createElement("code");
  psCodeEl.textContent = psCode;
  psPre.appendChild(psCodeEl);
  projectInfo.appendChild(psPre);

  

  // --- New subheading: VBScript ---
  const vbsHeading = document.createElement("h1");
  vbsHeading.textContent = "VBScript (AutoBackup.vbs)";
  projectInfo.appendChild(vbsHeading);

  // VBScript launcher snippet
  const vbsCode = String.raw`Set objShell = CreateObject("Wscript.Shell")
objShell.Run "powershell.exe -ExecutionPolicy Bypass -File ""C:\Users\Admin\Desktop\Scripts\AutoBackup.ps1""", 0, False`;

  const vbsPre = document.createElement("pre");
  const vbsCodeEl = document.createElement("code");
  vbsCodeEl.textContent = vbsCode;
  vbsPre.appendChild(vbsCodeEl);
  projectInfo.appendChild(vbsPre);
}







function openRightPanel() {
  const panel = ensureSidePanel();
  panel.classList.add("is-visible");
  panel.setAttribute("aria-hidden", "false");
  document.body.classList.add("panel-open");
  document.querySelector(".panel-overlay")?.classList.add("is-visible");
  document.querySelector(".panel-edge-grabber")?.classList.remove("active"); // hide
  panel.querySelector("#panelClose").focus();
}

function closeRightPanel() {
  const panel = ensureSidePanel();
  panel.classList.remove("is-visible");
  panel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("panel-open");
  document.querySelector(".panel-overlay")?.classList.remove("is-visible");
  document.querySelector(".panel-edge-grabber")?.classList.add("active"); // show
}


// Close interactions
panelCloseBtn?.addEventListener("click", closeRightPanel);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sidePanel.classList.contains("is-visible")) {
    closeRightPanel();
  }
});

let touchStartX = 0;
let touchCurrentX = 0;
const swipeThreshold = 60; // how far you must swipe to trigger

document.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
  touchCurrentX = touchStartX;
});

document.addEventListener("touchmove", (e) => {
  touchCurrentX = e.touches[0].clientX;
});

document.addEventListener("touchend", () => {
  const deltaX = touchCurrentX - touchStartX;

  if (deltaX < -swipeThreshold && document.getElementById("projectSidePanel")?.classList.contains("is-visible")) {
    closeRightPanel();
  }

  // Swipe right from screen edge to open
  if (touchStartX < 30 && deltaX > swipeThreshold && !document.getElementById("projectSidePanel")?.classList.contains("is-visible")) {
    openRightPanel();
  }
});

function viewDateCheckerCode() {
  const openPopUp = document.querySelector(".popup-wrapper");
  const projectInfo = document.querySelector(".projectInfo");
  if (!openPopUp || !projectInfo) return;

  openPopUp.classList.remove("hidden");
  projectInfo.innerHTML = ""; // Clear old content

  const heading = document.createElement("h1");
  const heading2 = document.createElement("h1");
  heading.textContent = "SPA";
  heading2.textContent = "HTML + CSS + Javascript (index.html)";
  projectInfo.appendChild(heading);
  projectInfo.appendChild(heading2);

  const htmlCode = String.raw`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Date Checker</title>
  <style>
    :root {
      --dark-blue: #0b2a66;
      --black: #000;
      --white: #fff;
    }
    html, body {
      height: 100%;
      margin: 0;
    }
    body {
      display: grid;
      place-items: center;
      background: var(--dark-blue) url("images/background.png") center/cover no-repeat fixed;
      font-family: Arial, Helvetica, sans-serif;
      color: var(--white);
    }
    .app {
      width: 600px;
      height: 600px;
      max-width: 92vw;
      max-height: 92vh;
      background: rgba(0,0,0,0.35);
      border: 2px solid rgba(255,255,255,0.2);
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.45);
      overflow: hidden;
      display: grid;
      grid-template-rows: 56px 1fr;
    }
    header {
      background: var(--black);
      display: grid;
      place-items: center;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: .5px;
    }
    .rows {
      padding: 24px;
      display: grid;
      gap: 20px;
      align-content: start;
    }
    .row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      align-items: center;
    }
    .cell {
      background: #000;
      border-radius: 10px;
      text-align: center;
      padding: 12px 10px;
      font-size: 18px;
      font-weight: 700;
    }
    .label { opacity: 0.9; }
    .value { white-space: pre-line; }
  </style>
</head>
<body>
  <main class="app" role="application" aria-label="Date Checker">
    <header>Date Checker</header>

    <section class="rows" id="rows">
      <div class="row">
        <div class="cell label">24 Hours</div>
        <div class="cell value" id="twentyFourHours"></div>
      </div>

      <div class="row">
        <div class="cell label">2 Weeks</div>
        <div class="cell value" id="twoWeeks"></div>
      </div>

      <div class="row">
        <div class="cell label">4 Weeks</div>
        <div class="cell value" id="fourWeeks"></div>
      </div>

      <div class="row">
        <div class="cell label">8 Weeks</div>
        <div class="cell value" id="eightWeeks"></div>
      </div>

      <div class="row">
        <div class="cell label">3 Months</div>
        <div class="cell value" id="threeMonths"></div>
      </div>
    </section>
  </main>

  <script>
    function pad(n) { return n.toString().padStart(2, '0'); }

    function formatDateDDMMYYYY(d) {
      return \`\${pad(d.getDate())}/\${pad(d.getMonth()+1)}/\${d.getFullYear()}\`;
    }

    function formatTime12h(d) {
      let h = d.getHours();
      const m = pad(d.getMinutes());
      const ampm = h >= 12 ? 'PM' : 'AM';
      h = h % 12;
      if (h === 0) h = 12;
      return \`\${h}:\${m} \${ampm}\`;
    }

    document.addEventListener('DOMContentLoaded', () => {
      const now = new Date();

      const in24h = new Date(now.getTime() + 24*60*60*1000);
      document.getElementById('twentyFourHours').textContent =
        \`\${formatDateDDMMYYYY(in24h)}\\n\${formatTime12h(in24h)}\`;

      const in2Weeks = new Date(now.getTime() + 14*24*60*60*1000);
      document.getElementById('twoWeeks').textContent = formatDateDDMMYYYY(in2Weeks);

      const in4Weeks = new Date(now.getTime() + 28*24*60*60*1000);
      document.getElementById('fourWeeks').textContent = formatDateDDMMYYYY(in4Weeks);

      const in8Weeks = new Date(now.getTime() + 56*24*60*60*1000);
      document.getElementById('eightWeeks').textContent = formatDateDDMMYYYY(in8Weeks);

      const in3Months = new Date(now);
      in3Months.setMonth(in3Months.getMonth() + 3);
      document.getElementById('threeMonths').textContent = formatDateDDMMYYYY(in3Months);
    });
  </script>
</body>
</html>`;

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
