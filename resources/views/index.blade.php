<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>COC Youth Meeting</title>
  <meta lang="ar">
  <meta dir="rtl">
  <link rel="stylesheet" href="{{ asset('YOYO_CSS/assets/css/index.css') }}">
  <link rel="stylesheet" href="{{ asset('YOYO_CSS/assets/icons/style.css') }}">
  @if (session('goto_home'))
  <script>
    localStorage.setItem('lastOpenedPage', '#homePage');
    if (!location.hash || location.hash !== '#homePage') {
      location.hash = '#homePage';
    }
  </script>
  @endif
  <script type="module" src="{{ asset('YOYO_CSS/assets/js/index.js') }}"></script>
</head>

<body>
  <section id="MainContainer">
    <homePage id="homePage">
<<<<<<< HEAD:resources/views/index.blade.php
      <header>
        <div>
          <div id="userProfilePic" class="icon-user">
            <img src="" alt="user profile picture" hidden>
          </div>
          <h2 id="welcome-name-header">أهلا <div id='userName'>{{ Auth::check() ? Auth::user()->name : 'صديقى' }}</div>
          </h2>
        </div>
        <div>
          <img src="{{ asset('YOYO_CSS/assets/pic/new coc logo.png') }}" alt="coc logo">
          <h2>COC</h2>
        </div>

        @auth
        <div>
          <div class="icon-bell unreaded" id="notificationIcon"></div>
          <div id="notificationContainer">
            <h4>الاشعارات</h4>
            <div id="notifications">
              <div class="notification unreaded">
                <div class="icon-bell"></div>
                <div class="notficationData">
                  <h5>متنساش معاد الاجتماع</h5>
                  <p>الاجتماع المرة الجاية الساعة 7 متتاخرش وهات اصحابك عندنا فقرة تسبيح وصلاه وكلمة وكمان انشطة والعاب
                    ونطلع النادى بعد الاجتماع</p>
                  <p>3/6/2005 12:00:00pm</p>
                </div>
              </div>
              <div class="notification">
                <div class="icon-bell"></div>
                <div class="notficationData">
                  <h5>متنساش معاد الاجتماع النهاردة ما تتأخرش</h5>
                  <p>الاجتماع المرة الجاية الساعة 7 متتاخرش وهات اصحابك عندنا فقرة تسبيح وصلاه وكلمة وكمان انشطة والعاب
                    ونطلع النادى بعد الاجتماع</p>
                  <p>3/6/2005 12:00:00pm</p>
                </div>
              </div>
              <div class="notification unreaded">
                <div class="icon-bell"></div>
                <div class="notficationData">
                  <h5>متنساش معاد الاجتماع</h5>
                  <p>الاجتماع المرة الجاية الساعة 7 متتاخرش وهات اصحابك عندنا فقرة تسبيح وصلاه وكلمة وكمان انشطة والعاب
                    ونطلع النادى بعد الاجتماع</p>
                  <p>3/6/2005 12:00:00pm</p>
                </div>
              </div>
              <div class="notification">
                <div class="icon-bell"></div>
                <div class="notficationData">
                  <h5>متنساش معاد الاجتماع</h5>
                  <p>الاجتماع المرة الجاية الساعة 7 متتاخرش وهات اصحابك عندنا فقرة تسبيح وصلاه وكلمة وكمان انشطة والعاب
                    ونطلع النادى بعد الاجتماع</p>
                  <p>3/6/2005 12:00:00pm</p>
                </div>
              </div>
              <div class="notification">
                <div class="icon-bell"></div>
                <div class="notficationData">
                  <h5>متنساش معاد الاجتماع</h5>
                  <p>الاجتماع المرة الجاية الساعة 7 متتاخرش وهات اصحابك عندنا فقرة تسبيح وصلاه وكلمة وكمان انشطة والعاب
                    ونطلع النادى بعد الاجتماع</p>
                  <p>3/6/2005 12:00:00pm</p>
                </div>
              </div>
            </div>
          </div>
          <h2 id="cocsNoDiv">
            <div id="cocsNo">100</div> كوكس
          </h2>
          <h3 id="userPlaceDiv">المركز: <div id="userPlace">#1</div>
          </h3>
        </div>
        @endauth

        @guest
        <div id="guestAuthActions">
          <a href="{{ route('register') }}">Register</a>
          <a href="{{ route('login') }}">Login</a>
        </div>
        @endguest
      </header>
      <section id="nextFriday">
        <h1>الاجتماع القادم</h1>
        <div id="nextMeetingSection">
          <div id="nextMeetingTime">الجمعة 10/7/2026 الساعة 7م</div>
          <div id="talkingPastorSection">
            <div class="icon-mic"></div>
            <div class="nextMeetingDetail">
              <h4>الخادم/المتكلم</h4>
              <h5>القس سامح حنا</h5>
            </div>
          </div>
          <div id="singerSection">
            <div class="icon-music"></div>
            <div class="nextMeetingDetail">
              <h4>فقرة التسبيح</h4>
              <h5>ناردين سامح</h5>
            </div>
          </div>
          <div id="gamerSection">
            <div class="icon-gamepad"></div>
            <div class="nextMeetingDetail">
              <h4>الأنشطة والالعاب</h4>
              <h5>ستيفن ماريو</h5>
            </div>
          </div>
        </div>
      </section>
      <section id="myTasks">
        <h1>مهامي</h1>
        <div id="tasksSection">
          <div class="task"
            data-description="          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quaerat excepturi natus, numquam ullam vel. Laborum voluptas placeat saepe doloremque non explicabo harum error nisi veritatis accusantium maiores quibusdam suscipit reprehenderit asperiores, a inventore labore nostrum impedit ipsa hic obcaecati officiis aliquid soluta? Cumque odio provident quis. Accusamus numquam excepturi, atque perferendis vel vitae minus libero earum ea iste sequi veritatis, dolores similique mollitia placeat, perspiciatis soluta quibusdam beatae sunt dolorem odit facere! Hic officiis saepe id eveniet consequuntur itaque ipsa quia deserunt voluptas a perspiciatis quam reiciendis pariatur numquam aliquid nihil nulla voluptatem quasi, expedita culpa in quidem nisi voluptatum sequi. Repellat earum cumque sed perspiciatis aspernatur officia quasi amet laborum, obcaecati nobis culpa exercitationem quibusdam omnis? Possimus culpa blanditiis impedit animi ullam facilis iure nulla magni nobis"
            data-btnName="lets go" data-btnValue="hello">
            <div class="icon-done"></div>
            <div class="taskDetails">
              <div class="taskTitle">عليك تحضر السئلة من الكتاب علشان المسابقات</div>
              <div class="taskTime">اخر معاد 10/7/2026 12:00:00</div>
            </div>
            <div class="taskReward"><span>+5</span><span>كوكس</span></div>
          </div>
          <div class="task" data-btnvalue="hello">
            <div class="icon-time"></div>
            <div class="taskDetails">
              <div class="taskTitle">تعال الاجتماع فى معادك</div>
              <div class="taskTime">اخر معاد 10/7/2026 12:00:00</div>
            </div>
            <div class="taskReward"><span>+5</span><span>كوكس</span></div>
          </div>
          <div class="task">
            <div class="icon-time"></div>
            <div class="taskDetails">
              <div class="taskTitle">تعال الاجتماع فى معادك</div>
              <div class="taskTime">اخر معاد 10/7/2026 12:00:00</div>
            </div>
          </div>
          <div class="task">
            <div class="icon-time"></div>
            <div class="taskDetails">
              <div class="taskTitle">تعال الاجتماع فى معادك</div>
              <div class="taskTime">اخر معاد 10/7/2026 12:00:00</div>
            </div>
          </div>
          <div class="task">
            <div class="icon-time"></div>
            <div class="taskDetails">
              <div class="taskTitle">تعال الاجتماع فى معادك</div>
              <div class="taskTime">اخر معاد 10/7/2026 12:00:00</div>
            </div>
          </div>
          <div class="task">
            <div class="icon-time"></div>
            <div class="taskDetails">
              <div class="taskTitle">تعال الاجتماع فى معادك</div>
              <div class="taskTime">اخر معاد 10/7/2026 12:00:00</div>
            </div>
          </div>
        </div>
      </section>
=======
      <div class="loadingContainer">
        <div class="icon-spinner"></div>
        <div class="loadingText"></div>
      </div>
>>>>>>> 1f1ea32ffafe38fd3e374eb70e27a14323c31766:index.html
    </homePage>
    <rankPage id="rankPage">
      <div class="loadingContainer">
        <div class="icon-spinner"></div>
        <div class="loadingText"></div>
      </div>
    </rankPage>
    <comunityPage id="comunityPage">
      <div class="loadingContainer">
        <div class="icon-spinner"></div>
        <div class="loadingText"></div>
      </div>
    </comunityPage>
    <profilePage id="profilePage">
      <div class="loadingContainer">
        <div class="icon-spinner"></div>
        <div class="loadingText"></div>
      </div>
    </profilePage>
  </section>
  <footer id="footer">
    <div id="selectedArea"></div>
    <section id="footerContainer">
      <a href="#homePage" id="homePageFooter" class="selected">
        <div class="icon-home"></div>
        <p>الرئيسية</p>
      </a>
      <a href="#rankPage" id="rankPageFooter">
        <div class="icon-trophy"></div>
        <p>المراكز</p>
      </a>
      <a id="qrScanFooter">
        <div class="icon-qr"></div>
        <p>سكان QR</p>
      </a>
      <a href="#comunityPage" id="comunityPageFooter">
        <div class="icon-comunity"></div>
        <p>المجتمع</p>
      </a>
      <a href="#profilePage" id="profilePageFooter">
        <div class="icon-user"></div>
        <p>الحساب</p>
      </a>
    </section>
  </footer>
</body>

</html>