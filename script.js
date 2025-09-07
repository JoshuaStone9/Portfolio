

function viewSmartHabitTracker() {
    const openPopUp = document.querySelector(".popup-wrapper");
    openPopUp.classList.remove("hidden");
    const projectInfo = document.querySelector(".projectInfo");
projectInfo.innerHTML = `
    <section id="smart-habit-tracker" aria-labelledby="hncp-title">
      <h2 id="hncp-title">Smart Habit Tracker</h2>
    <br>
    <h2>Created With HTML, CSS and JavaScript</h2>
    <p>
      The Smart Habit Tracker is designed to empower users by giving them a flexible and intuitive tool to build better habits and lead more organized, fulfilling lives. 
      It allows users to input and monitor any habits they wish to track whether they're everyday responsibilities or new lifestyle goals they want to adopt.
      <br><br>
      From simple daily tasks such as taking out the bins, making the bed or tidying up to more ambitious goals like regular gym sessions, daily runs or meditation 
      the tracker supports any routine the user finds meaningful.
      <br><br>
      At its core the tracker promotes increased productivity, personal growth and a healthier relationship with everyday life. By offering a seamless, user-friendly 
      experience without unnecessary features or frustrating inefficiencies the Smart Habit Tracker helps eliminate barriers that might otherwise lead to 
      discouragement or burnout.
      <br><br>
      Ultimately, the goal is to help users take control of their time, stay consistent and achieve positive lasting change on their own terms.
    </p>
    <br>
    <p>The overall Smart Habit Tracker user interface is simple and easy to understand and has clear labels and inputs and outputs to help users track all the data which is inputted.</p>
    <br><br>
    <h4> This is one of many HTML projects I have completed however JavaScript elements are somewhat new to me and development on this programming language is still in progress however I am starting to become more proficient the more times I tackle errors when completing projects like this one, however this project has been somewhat easy but great to complete.</h4>
    <h4>I am nearing completion of a JavaScript course I am working on within freeCodeCamp and plan to work on as many weaknesses as possible to excel to becoming proficient in using JavaScript methods.</h4>
    <h3>This project has given me further knowledge on how to allocate table data within html projects and given me hands-on experience with localstorage and all the resources it offers.</h3>
</section>
    `;

  setPanelContent(`
    <img src=images/SHT2.png class="sidepanelimg"></img>
    <img src=images/SHT1.png class="sidepanelimg"></img>
    <img src=images/SHT3.png class="sidepanelimg"></img>
  `, "Smart Habit Tracker");

  openRightPanel();
}

function viewSmartHabitTrackerCode() {
    const openPopUp = document.querySelector(".popup-wrapper");
    openPopUp.classList.remove("hidden");

    const projectInfo = document.querySelector(".projectInfo");
    projectInfo.innerHTML = ""; // Clear existing content

    // === HTML Heading and Code ===
    const htmlHeading = document.createElement("h1");
    htmlHeading.textContent = "HTML (index.html)";
    projectInfo.appendChild(htmlHeading);

    const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Smart Habit Traker</title>
</head>
<body>
    <div class="smart-habit-box">
        <h1 id="header1">Smart Habit Box</h1>
        <button type="submit" id="startBtn">Start</button>
        <table id="habitTable" hidden>
            <thead>
                <tr id="tableHeaders">
                    <td>ID</td>
                    <td>Habit Name</td>
                    <td>Start Date</td>
                    <td>Frequency</td>
                    <td>Streak</td>
                    <td>Last Completed</td>
                </tr>
            </thead>
            <tbody id="habitTableBody"></tbody>
        </table>
    </div>
    <script src="script.js"></script>
</body>
</html>`;


    const jsHeading = document.createElement("h1");
    jsHeading.textContent = "JavaScript (script.js)";
    projectInfo.appendChild(jsHeading);

    const jsCode = `function getNextHabitId() {
  let id = localStorage.getItem("habitIdCounter") || 1;
  localStorage.setItem("habitIdCounter", Number(id) + 1);
  return Number(id);
}

function resetHabitIdCounter() {
  localStorage.setItem("habitIdCounter", "1");
  localStorage.removeItem("habits");
}

function backButton() {
  document.getElementById("addHabitBtn").style.visibility = "visible";
  document.getElementById("addHabitInput").style.visibility = "visible";
  document.getElementById("viewHabitsbtn").style.visibility = "visible";

  const table = document.querySelector("table");
  if (table) table.style.display = "none";

  const resetContainer = document.getElementById("resetBtnContainer");
  if (resetContainer) resetContainer.style.display = "none";

  const box = document.querySelector(".smart-habit-box");
  box.style.height = "250px";
}

function startButton() {
  document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("header1").style.display = "none";
    document.getElementById("startBtn").style.display = "none";

    const container = document.querySelector(".smart-habit-box");

    if (!document.getElementById("addHabitBtn")) {
      const addHabit = document.createElement("button");
      addHabit.textContent = "Add Habit";
      addHabit.id = "addHabitBtn";

      const addHabitInput = document.createElement("input");
      addHabitInput.id = "addHabitInput";
      addHabitInput.placeholder = "Enter habit name";

      const viewHabits = document.createElement("button");
      viewHabits.textContent = "View Habits";
      viewHabits.id = "viewHabitsbtn";

      const habitsButtons = document.createElement("div");
      habitsButtons.id = "habitsButtons";
      habitsButtons.appendChild(viewHabits);

      container.append(addHabit, addHabitInput, habitsButtons);

      addHabit.addEventListener("click", function () {
        const name = addHabitInput.value.trim();
        if (!name) return;

        let habits = JSON.parse(localStorage.getItem("habits")) || [];

        const existingHabit = habits.find(
          (h) => h.name.toLowerCase() === name.toLowerCase()
        );

        if (existingHabit) {
          existingHabit.streak += 1;
          existingHabit.lastCompleted = new Date().toISOString().split("T")[0];
        } else {
          const habit = {
            id: getNextHabitId(),
            name: name,
            startDate: new Date().toISOString().split("T")[0],
            frequency: "Daily",
            streak: 0,
            lastCompleted: null
          };
          habits.push(habit);
        }

        localStorage.setItem("habits", JSON.stringify(habits));
        addHabitInput.value = "";
      });

      viewHabits.addEventListener("click", function () {
        const box = document.querySelector(".smart-habit-box");
        box.style.height = "150px";

        addHabit.style.visibility = "hidden";
        addHabitInput.style.visibility = "hidden";
        viewHabits.style.visibility = "hidden";

        const savedHabits = JSON.parse(localStorage.getItem("habits")) || [];
        const tableBody = document.getElementById("habitTableBody");
        tableBody.innerHTML = "";

        savedHabits.forEach((habit) => {
          const row = document.createElement("tr");
          row.innerHTML = \`
            <td>\${habit.id}</td>
            <td>\${habit.name}</td>
            <td>\${habit.startDate}</td>
            <td>\${habit.frequency}</td>
            <td>\${habit.streak}</td>
            <td>\${habit.lastCompleted || "Not completed"}</td>
          \`;
          tableBody.appendChild(row);
        });

        const table = document.querySelector("table");
        if (table) {
          table.style.display = "table";
        }

        let resetBtnContainer = document.getElementById("resetBtnContainer");
        if (!resetBtnContainer) {
          resetBtnContainer = document.createElement("div");
          resetBtnContainer.id = "resetBtnContainer";

          const resetBtn = document.createElement("button");
          resetBtn.textContent = "Reset";
          resetBtn.id = "resetBtn";
          resetBtn.addEventListener("click", function () {
            resetHabitIdCounter();
            backButton();
          });

          const backBtn = document.createElement("button");
          backBtn.textContent = "Back";
          backBtn.id = "backBtn";
          backBtn.addEventListener("click", backButton);

          resetBtnContainer.append(resetBtn, backBtn);
          container.insertAdjacentElement("afterend", resetBtnContainer);
        } else {
          resetBtnContainer.style.display = "block";
        }
      });
    }
  });
}

startButton();`;

    const jsPre = document.createElement("pre");
    const jsCodeElement = document.createElement("code");
    jsCodeElement.textContent = jsCode;
    jsPre.appendChild(jsCodeElement);
    projectInfo.appendChild(jsPre);

    const cssHeading = document.createElement("h1");
cssHeading.textContent = "CSS (styles.css)";
projectInfo.appendChild(cssHeading);

const cssCode = `body {
    background: #241d1d;
    background: linear-gradient( rgba(36, 29, 29, 1) 0%, rgba(48, 48, 48, 1) 33%, rgba(26, 25, 25, 1) 100%);
}

table {
    width: 100%;
    height: 75%;
    margin-left: 0%;
}

td, tr {
    border: solid black 0.5px;
    width: 10%;
    padding: 10px;
    height: 75%;
}

.smart-habit-box {
    position: relative;
    display:block;
    text-align: center;
    background-color: grey;
    height: 150px;
    padding: 20px 40px;
    margin-top: 10%;
    border: black solid;
}

#addHabitBtn {
    font-size: 16px;
    padding: 10px 20px;
    white-space: nowrap;
}

.hidden {
  display: none !important;
}

#addHabitInput {
    margin-top: 2%;
    font-size: 16px;
    padding: 10px;
    flex: 1 1 200px;
    min-width: 200px;
    max-width: 300px;
}

#habitsButtons {
    padding: 10px;
}

#tableHeaders {
    height: 10%;
}

#resetBtnContainer {
    display: flex;
    justify-content: center;
    gap: 20px;
}

#resetBtn, #backBtn {
    height: 10%;
    background-color: chocolate;
    width: 20%;
    height: 40px;
}`;

const cssPre = document.createElement("pre");
const cssCodeElement = document.createElement("code");
cssCodeElement.textContent = cssCode;

cssPre.appendChild(cssCodeElement);
projectInfo.appendChild(cssPre);
}




function viewFinanceTracker() {
    const openPopUp = document.querySelector(".popup-wrapper");
    openPopUp.classList.remove("hidden");
    const projectInfo = document.querySelector(".projectInfo");
    
projectInfo.innerHTML = `
<h1>Project Overview</h1>
                <p>_________</p>
                <h2>Created With C#, SQL</h2>
                <p>I have designed a finance tracker in which assists users in everyday life, their are multiple features in which can assist users in how to manage their money and easily track what they are spending and could potentially save.
                </p>
                <p>_________</p>
                <h1>User Interface</h1>
                <h2>IMAGES YET TO BE UPLOADED</h2>
                <p>Within this section of the finance tracker users can see how much they need to save for upcoming bills and expenses, the aim of this is to allow users to easily view this figure whilst keeping all their money in minimal accounts with tips given on how to earn the best interest or benefits with the given money.
                    <br><br>
                    Within this section of the finance tracker the user can view everything within one page, the UI I have chosen is to be as accessible and viewable as possible with future plans to include better accessibility options to allow as many users as possible to use the service with ease.
                    <br><br>
                    Within this section of the finance tracker the user can manage all bills which are currently logged within the system and edit them as appropriate such as when they need to remove or add a new bill, this section is also useful for any planned purchases and prevent any poor financial problems.
                    <br><br>
                    Within this section the user can register an account which is simplistic as possible with future plans to include 2 factor authentication in a unique way.
                    Once registration has been submitted this is then sent to the SQL server in which is connected to store users data within 32 bit encryption and can only can be decrypted once the user decides to login.
                    <br><br>
                    Here is the SQL server which is in motion to store users data which has auto-incremental IDs and passwords encryption within 32 bit encryption.
                    <br><br>
                    </p>
                    
                   <h3> This project is the first I have completed fully with C# I found the journey to be complex but rewarding with adding further knowledge to backend software development using SQL to achieve storage of data within the project.
                    <br><br>
                    My knowledge on c# is of a good standard however I do feel I have a long way till I become fluent within this programming language which I am using tools such as freeCodeCamp and creating new projects to assist in this.</h3>
`;
}

function viewFinanceTrackerCode() {
    const openPopUp = document.querySelector(".popup-wrapper");
    openPopUp.classList.remove("hidden");
    const projectInfo = document.querySelector(".projectInfo");
projectInfo.innerHTML = `
<p>THIS CODE IS YET TO BE UPDATED</p>
`
}

function viewBreadsheet() {
    const openPopUp = document.querySelector(".popup-wrapper");
    openPopUp.classList.remove("hidden");
    const projectInfo = document.querySelector(".projectInfo");
projectInfo.innerHTML = `
    <section id="breadsheet" aria-labelledby="hncp-title">
      <h2 id="hncp-title">Breadsheet</h2>
                <br>
                <h2>Created With HTML, CSS, JavaScript, Firebase Hosting</h2>
                <p>I have designed a resource called a ‘breadsheet’ to help log dated stock in my current job role. Although the company already has a paper version of this, I chose to redesign it in an electronic format with added features to improve efficiency and reduce waste. Additionally, there have been several instances where the team did not have paper breadsheets available and this electronic version helps to prevent that issue.
                </p>
                <p>I have designed the UI to be as simplistic as possible and have the same structure as our paper version to avoid confusion, I have recieved positive feedback from team members and how they have found this tool useful and sometimes more efficent to use than the paper breadsheet</p>
                <p>As seen within the images below I have designed a different breadsheet for both units in which I work in which is our Driv Thru and Main Store as our Driv Thru has limited stock and creating a seperate sheet for this proves to be more efficent and effective</p>
                <br>
                <p>The Breadsheet application is deployed as a single-page HTML in which styles from CSS and scripts from JavaScript are brought together in one HTML documents</p>
                <p>I used Firebase Hosting to deploy the application to an active webport to allow for users to easily access it</p> 
                <p>There is a feature in which the users selects todays date and the top row of the breadsheet will get auto-filled with todays date and the next 3 coming days, this feature is more of a convenience factor rather than an overall improvement</p>
                
                    
                   <h3>
                    This project has helped me to gain further knowledge on SPAs and how several languages can be brought together within a single page and what benefits this has to offer.</h3>
`;

  setPanelContent(`
          <img src=images/B1.png class="projectImage">
          <img src=images/B2.png class="projectImage"> 
          <img src=images/B3.png class="projectImage"> 
  `, "Breadsheet");

  openRightPanel();
}
function viewBreadsheetCode() {
    const openPopUp = document.querySelector(".popup-wrapper");
    openPopUp.classList.remove("hidden");

    const projectInfo = document.querySelector(".projectInfo");
    projectInfo.innerHTML = ""; 
    
    const heading = document.createElement("h1");
    heading.textContent = "HTML, JavaScript & CSS (index.html)";
    projectInfo.appendChild(heading);

    
    const codeText = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sandwich Quantity Tracker</title>
  <style>
    input { font-size: 16px; }
    body { font-family: Arial, sans-serif; background-color: #fff; color: #333; margin: 20px; }
    table { margin-top: 7%; width: 100%; border-collapse: collapse; min-width: 1200px; font-size: 16px; }
    h2 { font-size: 18px; }
    th, td { border: 2px solid #ccc; padding: 8px; text-align: center; }
    th { background-color: #f0f0f0; }
    .input-blue { background-color: #ffffff; border: 1px solid #ccc; width: 100%; box-sizing: border-box; font-size: 14px; height: 30px; }
    .table-container { max-height: 400px; overflow-y: auto; border: 1px solid #ccc; }
    .breadsheet { border-collapse: collapse; width: 100%; }
    .breadsheet thead th { position: sticky; top: 0; background-color: white; z-index: 2; padding: 10px; }
    .input-header { font-size: 16px; width: 100%; box-sizing: border-box; }
    .input-extras { background-color: #ffffff; border: 1px solid black; width: 100%; box-sizing: border-box; font-size: 13px; font-weight: bold; height: 30px; }
    input { width: 100%; box-sizing: border-box; font-size: 14px; height: 30px; text-align: center; }
    .section-header { background-color: #333; color: white; font-weight: bold; text-align: left; padding-left: 10px; }
    .dept-container { position: absolute; top: 20px; right: 20px; display: flex; align-items: center; gap: 10px; }
    #deptLabel { font-size: medium; }
    .department { font-size: medium; width: 200px; height: 30px; }
    .date { position: relative; width: 5%; margin-left: 30%; top: -2%; left: -20%; }
    @media print {
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; color-adjust: exact; }
      @page { size: A4 landscape; margin: 5cm; }
      button { display: none; }
    }
    #modeSelector { width: 100px; height: 30px; text-align: center; }
  </style>
</head>

<body>
  <button onclick="capturePage()" style="margin-bottom: 20px; padding: 10px 20px; font-size: 16px;">Download Entire Page as PNG</button>

  <div class="dept-container">
    <label for="department" id="deptLabel">Dept:</label>
    <select id="modeSelector">
      <option value="unselected">--</option>
      <option value="sbdt">SBDT</option>
      <option value="normal">SBMU</option>
    </select>
  </div>

  <table class="date">
    <tr>
      <th>
        Select Today's Date:
        <input class="input-header" id="date-1" type="date" onchange="updateDates()">
      </th>
    </tr>
  </table>

  <table class="breadsheet">
    <thead>
      <tr>
        <th>Food</th>
        <th><input class="input-header" id="date-2" type="text"></th>
        <th><input class="input-header" id="date-3" type="text"></th>
        <th><input class="input-header" id="date-4" type="text"></th>
        <th><input class="input-header" id="date-5" type="text"></th>
      </tr>
    </thead>
    <tbody id="breadsheetTable">
      <tr><td>EGG & MAYO SANDWICH</td><td><input class="input-blue" type="number"></td>...</tr>
    </tbody>
  </table>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
  <script>
  </script>
</body>
</html>
    `;


    const preElement = document.createElement("pre");
    preElement.textContent = codeText;

    projectInfo.appendChild(preElement);
}


    // Create a <pre> for code formatting
    const preElement = document.createElement("pre");
    preElement.textContent = codeText;

    projectInfo.appendChild(preElement);




function closePopup() {
    const closePopUp = document.querySelector(".popup-wrapper");
    closePopUp.classList.add("hidden");  
}

function viewPhotography() {
    const openPopUp = document.querySelector(".popup-wrapper");
    openPopUp.classList.remove("hidden");
    const projectInfo = document.querySelector(".projectInfo");
projectInfo.innerHTML = `
    <h1>Project Overview</h1>
    <p>_________</p>
    <h2>Created With HTML, CSS and JavaScript</h2>
    <p>
      The Smart Habit Tracker is designed to empower users by giving them a flexible and intuitive tool to build better habits and lead more organized, fulfilling lives. 
      It allows users to input and monitor any habits they wish to track whether they're everyday responsibilities or new lifestyle goals they want to adopt.
      <br><br>
      From simple daily tasks such as taking out the bins, making the bed or tidying up to more ambitious goals like regular gym sessions, daily runs or meditation 
      the tracker supports any routine the user finds meaningful.
      <br><br>
      At its core the tracker promotes increased productivity, personal growth and a healthier relationship with everyday life. By offering a seamless, user-friendly 
      experience without unnecessary features or frustrating inefficiencies the Smart Habit Tracker helps eliminate barriers that might otherwise lead to 
      discouragement or burnout.
      <br><br>
      Ultimately, the goal is to help users take control of their time, stay consistent and achieve positive lasting change on their own terms.
    </p>
    <p>_________</p>
    <h1>User Interface</h1>
    <img src=images/SHT2.png></img>
    <img src=images/SHT1.png></img>
    <img src=images/SHT3.png></img>
    <p>The overall Smart Habit Tracker user interface is simple and easy to understand and has clear labels and inputs and outputs to help users track all the data which is inputted.</p>
    <br><br>
    <h4> This is one of many HTML projects I have completed however JavaScript elements are somewhat new to me and development on this programming language is still in progress however I am starting to become more proficient the more times I tackle errors when completing projects like this one, however this project has been somewhat easy but great to complete.</h4>
    <h4>I am nearing completion of a JavaScript course I am working on within freeCodeCamp and plan to work on as many weaknesses as possible to excel to becoming proficient in using JavaScript methods.</h4>
    <h3>This project has given me further knowledge on how to allocate table data within html projects and given me hands-on experience with localstorage and all the resources it offers.</h3>
`;
}

function viewPhotographyCode() {
    const openPopUp = document.querySelector(".popup-wrapper");
    openPopUp.classList.remove("hidden");

    const projectInfo = document.querySelector(".projectInfo");
    projectInfo.innerHTML = ""; // Clear existing content

    // === HTML Heading and Code ===
    const htmlHeading = document.createElement("h1");
    htmlHeading.textContent = "HTML (index.html)";
    projectInfo.appendChild(htmlHeading);

    const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Photography Portfolio</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="navbar">
    <nav>
      <ul>
        <li><a href="#journey">My Journey</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="slideshow-container">
      <div class="slide fade active">
        <img src="images/photo1.jpg" alt="Slide 1" />
      </div>
      <div class="slide fade">
        <img src="images/photo2.jpg" alt="Slide 2" />
      </div>
      <div class="slide fade">
        <img src="images/photo3.jpg" alt="Slide 3" />
      </div>

      <a class="prev">&#10094;</a>
      <a class="next">&#10095;</a>
    </section>

    <section class="bubbles">
      <div class="bubble">Capturing the soul through my lens.</div>
      <div class="bubble">Every moment is a story worth telling.</div>
      <div class="bubble">Your memories, my passion.</div>
    </section>

    <section class="events">
      <h2>Events</h2>
      <ul>
        <li>Weddings</li>
        <li>Parties</li>
        <li>Everyday Life</li>
      </ul>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html> `

    const htmlPre = document.createElement("pre");
    const htmlCodeElement = document.createElement("code");
    htmlCodeElement.textContent = htmlCode;
    htmlPre.appendChild(htmlCodeElement);
    projectInfo.appendChild(htmlPre);

    // === JavaScript Heading and Code ===
    const jsHeading = document.createElement("h1");
    jsHeading.textContent = "JavaScript (script.js)";
    projectInfo.appendChild(jsHeading);

    const jsCode = `let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

setInterval(nextSlide, 10000); `

    const jsPre = document.createElement("pre");
    const jsCodeElement = document.createElement("code");
    jsCodeElement.textContent = jsCode;
    jsPre.appendChild(jsCodeElement);
    projectInfo.appendChild(jsPre);

    const cssHeading = document.createElement("h1");
cssHeading.textContent = "CSS (styles.css)";
projectInfo.appendChild(cssHeading);

const cssCode = `body {
  margin: 0;
  font-family: 'Arial Narrow', Arial, sans-serif;
  background-color: #fff;
  color: #000;
}

/* Navbar */
.navbar {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  text-align: center;
}

.navbar ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.navbar a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  font-size: 1.2rem;
}

/* Slideshow */
.slideshow-container {
  position: relative;
  max-width: 100%;
  height: 500px;
  overflow: hidden;
  margin: 2rem auto;
}

.slide {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
}

.slide.active {
  display: block;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fade {
  transition: opacity 1s ease-in-out;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 1rem;
  color: black;
  font-weight: bold;
  font-size: 2rem;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

/* Bubbles */
.bubbles {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  background: #000;
  flex-wrap: wrap;
}

.bubble {
  background: #000;
  border: 2px solid white;
  padding: 1rem;
  color: #fff;
  border-radius: 50%;
  font-size: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
}

.bubble:nth-child(1) {
  width: 180px;
  height: 180px;
  font-size: 0.9rem;
}

.bubble:nth-child(2) {
  width: 220px;
  height: 220px;
  font-size: 1rem;
}

.bubble:nth-child(3) {
  width: 140px;
  height: 140px;
  font-size: 0.8rem;
}

.events {
  padding: 0;
  background: #333;
  text-align: center;
  width: 100%;
}

.events h2 {
  font-size: 1.8rem;
  margin: 0;
  background-color: #444;
  padding: 1rem;
  width: 100%;
  color: #fff;
}

.events ul {
  list-style: none;
  padding: 1rem 0;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: #555;
  margin: 0;
  width: 100%;
  color: #fff;
}

.events li {
  margin: 0;
}
`

const cssPre = document.createElement("pre");
const cssCodeElement = document.createElement("code");
cssCodeElement.textContent = cssCode;

cssPre.appendChild(cssCodeElement);
projectInfo.appendChild(cssPre);
}

function viewHomeNASControlPanel() {
   const openPopUp = document.querySelector(".popup-wrapper");
    openPopUp.classList.remove("hidden");
    const projectInfo = document.querySelector(".projectInfo");
projectInfo.innerHTML = `<section id="home-nas-control-panel" aria-labelledby="hncp-title">
      <h2 id="hncp-title">Home NAS Control Panel</h2>

      <article>
        <p>
          The <strong>Home NAS Control Panel</strong> is a custom Windows Forms application I developed to simplify and streamline the management of my personal NAS (Network Attached Storage) system. It provides an intuitive interface with dedicated buttons for frequently used operations, allowing me to perform routine tasks quickly and efficiently without navigating complex menus or command-line tools.
        </p>
        <p>
          Built in <strong>C# .NET 9.0</strong>, the Control Panel reflects my ongoing journey to deepen my expertise in C# and desktop application development. Throughout the process, I engineered creative solutions to automate repetitive workflows, optimize system interactions, and improve the speed and reliability of daily operations.
        </p>

        <h3>Key aspects of the project include</h3>
        <ul>
          <p>Custom automation for routine NAS management tasks.</p>
          <p>Event-driven UI design for responsive, user-friendly controls.</p>
          <p>Robust debugging and refinement of fragile code segments.</p>
          <p>Continuous development as new operational needs arise.</p>
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

      setPanelContent(`
   <img src="images/HomeNASControlPanel.png" alt="HomeNASControlPanel">
    <hr />
    <p>Tip: Press <kbd>Esc</kbd> to close the side panel.</p>
  `, "Home NAS Control Panel");

  openRightPanel();
}

function viewDateChecker() {
  const popup = document.querySelector(".popup-wrapper");          // the overlay/shell
  const projectInfo = document.querySelector(".projectInfo");       // the content area inside the popup
  const sidePanel = document.querySelector(".side-panel");          // your actual slide-in panel

  if (!popup) {
    console.error('[viewDateChecker] .popup-wrapper not found');
    return;
  }
  if (!projectInfo) {
    console.error('[viewDateChecker] .projectInfo not found');
    return;
  }

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

  if (typeof setPanelContent === "function") {
    setPanelContent(`
      <img src="images/DateChecker.png" alt="DateChecker" height="350px" width="350px" />
      <hr />
      <p>Tip: Press <kbd>Esc</kbd> to close the side panel.</p>
    `, "Home NAS Control Panel");
  } else if (sidePanel) {
    // Assume your panel has a content + title area
    const title = sidePanel.querySelector("[data-panel-title]");
    const body  = sidePanel.querySelector("[data-panel-body]");
    if (title) title.textContent = "Home NAS Control Panel";
    if (body) {
      body.innerHTML = `
        <img src="images/DateChecker.png" alt="HomeNASControlPanel" />
        <hr />
        <p>Tip: Press <kbd>Esc</kbd> to close the side panel.</p>
      `;
    }
  }

  if (typeof openRightPanel === "function") {
    openRightPanel();
  } else if (sidePanel) {
    sidePanel.classList.add("is-open"); // <-- make sure your CSS uses this
    sidePanel.setAttribute("aria-hidden", "false");
  }

  // Add Esc key to close (requires a close function + CSS hook)
  const onEsc = (e) => {
    if (e.key === "Escape") {
      if (typeof closeRightPanel === "function") {
        closeRightPanel();
      } else {
        if (sidePanel) {
          sidePanel.classList.remove("is-open");
          sidePanel.setAttribute("aria-hidden", "true");
        }
        popup.classList.add("hidden");
      }
      window.removeEventListener("keydown", onEsc);
    }
  };
  window.addEventListener("keydown", onEsc);
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


  const htmlPre = document.createElement("pre");
  const htmlCodeElement = document.createElement("code");
  htmlCodeElement.textContent = htmlCode; // render as text, not HTML
  htmlPre.appendChild(htmlCodeElement);
  projectInfo.appendChild(htmlPre);


// --- Right-side panel helpers ---
const sidePanel = document.getElementById("projectSidePanel");
const sidePanelContent = () => sidePanel.querySelector(".panel-content");
const panelCloseBtn = document.getElementById("panelClose");

function setPanelContent(html, title = "Quick Actions") {
  sidePanel.querySelector(".panel-title").textContent = title;
  sidePanelContent().innerHTML = html;
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


function ensureSidePanel() {
  let panel = document.getElementById("projectSidePanel");
  if (!panel) {
    panel = document.createElement("aside");
    panel.id = "projectSidePanel";
    panel.className = "side-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-hidden", "true");
    panel.innerHTML = `
      <button id="panelClose" class="panel-close" aria-label="Close panel">×</button>
      <div class="panel-scroll">
        <h3 class="panel-title">Quick Actions</h3>
        <div class="panel-content"></div>
      </div>
    `;
    document.body.appendChild(panel);
  }
  if (!document.getElementById("sidePanelStyles")) {
    const style = document.createElement("style");
    style.id = "sidePanelStyles";
    style.textContent = `
      .side-panel{position:fixed;top:0;right:0;height:100vh;width:min(420px,92vw);
        background:#1f1f1f;color:#fff;border-left:1px solid #3a3a3a;box-shadow:-8px 0 24px rgba(0,0,0,.35);
        transform:translateX(100%);transition:transform .35s ease;z-index:10000;display:flex;flex-direction:column}
      .side-panel.is-visible{transform:translateX(0)}
      .panel-scroll{overflow-y:auto;-webkit-overflow-scrolling:touch;padding:16px 18px 24px;gap:12px;display:flex;flex-direction:column}
      .panel-title{margin:0 0 8px;font-size:1.1rem;letter-spacing:.25px;font-weight:700}
      .panel-close{position:absolute;top:8px;left:8px;font-size:22px;line-height:1;width:36px;height:36px;border-radius:10px;
        border:1px solid #333;background:#2a2a2a;color:#fff;cursor:pointer}
      .panel-close:hover{background:#353535}
      body.panel-open{overflow:hidden}
    `;
    document.head.appendChild(style);
  }
  // Wire close events (idempotent)
  const closeBtn = panel.querySelector("#panelClose");
  if (!closeBtn._wired) {
    closeBtn.addEventListener("click", closeRightPanel);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && panel.classList.contains("is-visible")) closeRightPanel();
    });
    closeBtn._wired = true;
  }
  return panel;
}

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

  const pre = document.createElement("pre");
  const code = document.createElement("code");
  code.textContent = htmlCode;
  code.classList.add("projectInfo");
  pre.appendChild(code);
  projectInfo.appendChild(pre);
}


function setPanelContent(html, title = "Quick Actions") {
  const panel = ensureSidePanel();
  panel.querySelector(".panel-title").textContent = title;
  panel.querySelector(".panel-content").innerHTML = html;
}

function openRightPanel() {
  const panel = ensureSidePanel();
  panel.classList.add("is-visible");
  panel.setAttribute("aria-hidden", "false");
  document.body.classList.add("panel-open");
  panel.querySelector("#panelClose").focus();
}

function closeRightPanel() {
  const panel = ensureSidePanel();
  panel.classList.remove("is-visible");
  panel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("panel-open");
}

