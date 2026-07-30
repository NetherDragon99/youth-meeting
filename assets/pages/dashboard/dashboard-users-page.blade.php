<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>update profile data</title>
</head>

<body>
  <section id="accountsAnalisis">
    <h1>ادارة الحسابات</h1>
    <div>
      <div id="totalUsersNo">
        <p>عدد الشباب</p>
        <p>0</p>
      </div>
      <div id="totalAccountsNo">
        <p>عدد الحسابات</p>
        <p>0</p>
      </div>
    </div>
  </section>
  <section id="requests">
    <h2>طلبات الانضمام</h2>
    <div id="requestsContainer">
      <div class="request">
        <div class="requestDetail">
          <div id="requestProfilePic" class="loadingC"><img src="assets/pic/coc logo.png" alt="profile picture">
          </div>
          <div class="requestProfileData">
            <h4 id="requestUserName" class="loading"></h4>
            <h4 id="requestEmail" class="loading"></h4>
          </div>
        </div>
        <div class="requestAction">
          <button class="approve">قبول
            <div class="icon-checkmark"></div>
          </button>
          <button class="remove">حذف
            <div class="icon-trash"></div>
          </button>
          <button class="delete">مسح
            <div class="icon-blocked"></div>
          </button>
        </div>
      </div>
      <div class="request">
        <div class="requestDetail">
          <div id="requestProfilePic" class="loadingC"><img src="assets/pic/coc logo.png" alt="profile picture">
          </div>
          <div class="requestProfileData">
            <h4 id="requestUserName" class="loading"></h4>
            <h4 id="requestEmail" class="loading"></h4>
          </div>
        </div>
        <div class="requestAction">
          <button class="approve">قبول
            <div class="icon-checkmark"></div>
          </button>
          <button class="remove">حذف
            <div class="icon-trash"></div>
          </button>
          <button class="delete">مسح
            <div class="icon-blocked"></div>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section id="usersSection">
    <h2>الحسابات</h2>
    <div id="accountsSearch">
      <input type="search" placeholder="ضور على حساب معين">
      <div class="icon-search"></div>
      <div class="icon-clear" style="opacity: 0;"></div>
    </div>
    <div id="accountsSearchCategorys">
      <div id="pendingAccounts">غير مفعل</div>
      <div id="adminAccounts">الادمن</div>
      <div id="activeAccounts">مفعل</div>
      <div id="allAccounts" data-state="selected">الكل</div>
    </div>
    <div id="usersContainer">
      <div class="user">
        <div class="userProfilePic loadingC">
          <img src="assets/pic/coc logo.png" alt="profile picture">
        </div>
        <div class="userDetails">
          <div class="upperSection">
            <p class="loading" style="width: 80px; height: 1rem;"></p>
            <div id="userState" data-state="admin">Admin</div>
          </div>
          <div class="lowerSection loading" style="width: 200px; height: .7rem;"></div>
        </div>
        <div class="userActions">
          <span class="icon-actionDots"></span>
          <div class="actionsMenue">
            <div id="actionMenueContainer">
              <div id="viewUserDetails">
                <p>عرض التفاصيل</p>
                <span class="icon-info"></span>
              </div>
              <div id="deleteAccount">
                <p>حظر الحساب</p>
                <span class="icon-blocked"></span>
              </div>
              <div id="editUserDetails">
                <p>تعديل البيانات</p>
                <span class="icon-pencil"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="user">
        <div class="userProfilePic loadingC">
          <img src="assets/pic/coc logo.png" alt="profile picture">
        </div>
        <div class="userDetails">
          <div class="upperSection">
            <p class="loading" style="width: 80px; height: 1rem;"></p>
            <div id="userState" data-state="pending">Pending</div>
          </div>
          <div class="lowerSection loading" style="width: 200px; height: .7rem;"></div>
        </div>
        <div class="userActions">
          <span class="icon-actionDots"></span>
          <div class="actionsMenue">
            <div id="actionMenueContainer">
              <div id="viewUserDetails">
                <p>عرض التفاصيل</p>
                <span class="icon-info"></span>
              </div>
              <div id="deleteAccount">
                <p>حظر الحساب</p>
                <span class="icon-blocked"></span>
              </div>
              <div id="editUserDetails">
                <p>تعديل البيانات</p>
                <span class="icon-pencil"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="user">
        <div class="userProfilePic loadingC">
          <img src="assets/pic/coc logo.png" alt="profile picture">
        </div>
        <div class="userDetails">
          <div class="upperSection">
            <p class="loading" style="width: 80px; height: 1rem;"></p>
            <div id="userState" data-state="active">Active</div>
          </div>
          <div class="lowerSection loading" style="width: 200px; height: .7rem;"></div>
        </div>
        <div class="userActions">
          <span class="icon-actionDots"></span>
          <div class="actionsMenue">
            <div id="actionMenueContainer">
              <div id="viewUserDetails">
                <p>عرض التفاصيل</p>
                <span class="icon-info"></span>
              </div>
              <div id="deleteAccount">
                <p>حظر الحساب</p>
                <span class="icon-blocked"></span>
              </div>
              <div id="editUserDetails">
                <p>تعديل البيانات</p>
                <span class="icon-pencil"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</body>

</html>
