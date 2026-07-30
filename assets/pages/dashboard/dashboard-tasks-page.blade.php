<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>update profile data</title>
</head>

<body>

</body>
<section id="makeTask" data-type="create">
  <header id="createTaskHeader">
    <h2>انشاء مهمة جديدة</h2>
    <div class="icon-task"></div>
  </header>
  <div id="makeTaskContainer" data-type="create-task-container">
    <input type="text" id="createTaskTitle" name="title" placeholder="عنوان المهمة">
    <textarea name="description" id="createTaskDes" placeholder="وصف المهمة"></textarea>
    <label id="dateFiled" for="dateF">
      <div class="icon-calendar"></div>
      <input type="date" placeholder="date" id="dateF">
    </label>
    <div id="timeFiled" class="taskAdditions">
      <div id="timerHeader" class="taskAdditionsHeader">
        <h2>تحديد وقت البداية والنهاية</h2>
        <div id="timerButton" class="taskAdditionsBtn" data-state="disactive">
          <div></div>
        </div>
      </div>
      <div id="timerBody" class="taskAdditionsBody">
        <div id="startTime">
          <div class="icon-time"></div>
          <input type="time" placeholder="start time">
        </div>
        <div id="endTime">
          <div class="icon-time"></div>
          <input type="time" placeholder="end time">
        </div>
      </div>
    </div>
    <div id="actionBtnFiled" class="taskAdditions">
      <div id="actionBtnHeader" class="taskAdditionsHeader">
        <h2>اضافة زر اكشن</h2>
        <div id="actionBtnLink" class="taskAdditionsBtn" data-state="disactive">
          <div></div>
        </div>
      </div>
      <div id="actionBtnBody" class="taskAdditionsBody">
        <div id="btnName">
          <input type="text" placeholder="button name">
        </div>
        <div id="btnLink">
          <input type="text" placeholder="button url">
        </div>
      </div>
    </div>
    <button id="confirmTask">Confirm</button>
    <button id="cancelTask">Cancel</button>
  </div>
</section>
<section id="tasksHistory">
  <h2>سجل المهام</h2>
  <div id="tasksHistoryContainer">
    <div class="adayTasks" data-state="opened">
      <div class="adayTaskDate" style="position: relative;">
        <div class="loading" style="width: 150px; height: 1rem;"></div>
      </div>
      <div class="adayTasksList">
        <div class="task" data-id="tsk543834">
          <div class="taskActionBtn">
            <button class="icon-edit editTaskBtn"></button>
            <button class="icon-trash deleteTaskBtn"></button>
          </div>
          <div class="taskSummary">
            <h4 class="loading" style="width: 80px; height: 1.1rem;"></h4>
            <p class="loading" style="max-width: 300px; height: .8rem;"></p>
            <p class="loading" style="width: 50px; height: .5rem;"></p>
          </div>
          <div class="tasksUsersList" data-state="closed">
            <div class="taskUser">
              <div class="taskPic icon-user">
                <img src="assets/pic/coc logo.png" alt="profile pic">
              </div>
              <div class="taskProfileData">
                <h4>hello</h4>
                <p>hello@gmail.com</p>
              </div>
              <button class="userTaskBtn">
                <div class="icon-checkmark"></div>
              </button>
            </div>
            <div class="taskUser">
              <div class="taskPic icon-user">
                <img src="assets/pic/coc logo.png" alt="profile pic">
              </div>
              <div class="taskProfileData">
                <h4>hello</h4>
                <p>hello@gmail.com</p>
              </div>
              <button class="userTaskBtn">
                <div class="icon-checkmark"></div>
              </button>
            </div>
            <div class="taskUser">
              <div class="taskPic icon-user">
                <img src="assets/pic/coc logo.png" alt="profile pic">
              </div>
              <div class="taskProfileData">
                <h4>hello</h4>
                <p>hello@gmail.com</p>
              </div>
              <button class="userTaskBtn">
                <div class="icon-checkmark"></div>
              </button>
            </div>
            <div class="taskUser">
              <div class="taskPic icon-user">
                <img src="assets/pic/coc logo.png" alt="profile pic">
              </div>
              <div class="taskProfileData">
                <h4>hello</h4>
                <p>hello@gmail.com</p>
              </div>
              <button class="userTaskBtn">
                <div class="icon-checkmark"></div>
              </button>
            </div>
            <div class="taskUser">
              <div class="taskPic icon-user">
                <img src="assets/pic/coc logo.png" alt="profile pic">
              </div>
              <div class="taskProfileData">
                <h4>hello</h4>
                <p>hello@gmail.com</p>
              </div>
              <button class="userTaskBtn">
                <div class="icon-checkmark"></div>
              </button>
            </div>
          </div>
        </div>
        <div class="task" data-id="tsk543834">
          <div class="taskActionBtn">
            <button class="icon-edit editTaskBtn"></button>
            <button class="icon-trash deleteTaskBtn"></button>
          </div>
          <div class="taskSummary">
            <h4 class="loading" style="width: 80px; height: 1.1rem;"></h4>
            <p class="loading" style="max-width: 300px; height: .8rem;"></p>
            <p class="loading" style="width: 50px; height: .5rem;"></p>
          </div>
          <div class="tasksUsersList" data-state="closed">
            <div class="taskUser">
              <div class="taskPic icon-user">
                <img src="assets/pic/coc logo.png" alt="profile pic">
              </div>
              <div class="taskProfileData">
                <h4>hello</h4>
                <p>hello@gmail.com</p>
              </div>
              <button class="userTaskBtn">
                <div class="icon-checkmark"></div>
              </button>
            </div>
            <div class="taskUser">
              <div class="taskPic icon-user">
                <img src="assets/pic/coc logo.png" alt="profile pic">
              </div>
              <div class="taskProfileData">
                <h4>hello</h4>
                <p>hello@gmail.com</p>
              </div>
              <button class="userTaskBtn">
                <div class="icon-checkmark"></div>
              </button>
            </div>
            <div class="taskUser">
              <div class="taskPic icon-user">
                <img src="assets/pic/coc logo.png" alt="profile pic">
              </div>
              <div class="taskProfileData">
                <h4>hello</h4>
                <p>hello@gmail.com</p>
              </div>
              <button class="userTaskBtn">
                <div class="icon-checkmark"></div>
              </button>
            </div>
            <div class="taskUser">
              <div class="taskPic icon-user">
                <img src="assets/pic/coc logo.png" alt="profile pic">
              </div>
              <div class="taskProfileData">
                <h4>hello</h4>
                <p>hello@gmail.com</p>
              </div>
              <button class="userTaskBtn">
                <div class="icon-checkmark"></div>
              </button>
            </div>
            <div class="taskUser">
              <div class="taskPic icon-user">
                <img src="assets/pic/coc logo.png" alt="profile pic">
              </div>
              <div class="taskProfileData">
                <h4>hello</h4>
                <p>hello@gmail.com</p>
              </div>
              <button class="userTaskBtn">
                <div class="icon-checkmark"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</html>
