<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta lang="ar">
  <meta dir="rtl">
  <title>تسجيل الدخول</title>
  <link rel="stylesheet" href="{{ asset('YOYO_CSS/assets/css/index.css') }}">
  <link rel="stylesheet" href="{{ asset('YOYO_CSS/assets/icons/style.css') }}">
  <script type="module" src="{{ asset('YOYO_CSS/assets/js/profilePage.js') }}"></script>
</head>

<body>
  <section id="MainContainer">
    <profilePage id="profilePage">
      <section id="profilePageHeader">
        <div id="currentProfilePic" class="icon-user">
          <img src="{{ asset('YOYO_CSS/assets/pic/new coc logo.png') }}" alt="profile picture" style="display: none">
        </div>
        <h2>تسجيل الدخول</h2>
        <div class="icon-gear" id="settingsIcon"></div>
      </section>
      <section id="profileContainer">
        <section id="profileHeader">
          <div id="profilePictureContainer">
            <div class="icon-user">
              <img src="{{ asset('YOYO_CSS/assets/pic/new coc logo.png') }}" alt="profile picture" style="display: none;">
            </div>
          </div>
          <h3>ستيفن ماريو</h3>
        </section>
        <div id="profilePagePages">
          <form id="userProfileForm" method="POST" action="{{ route('login.post') }}">
            @csrf
            <legend id="userFormMainData" data-name="loginHeader">
              <label id="mainDataHeadder">
                <div class="icon-login"></div>
                <p>تسجيل الدخول</p>
              </label>
              <label for="userFormEmail" data-name="emailPhone">
                <div class="icon-pencil"></div>
                <p>الايميل</p>
                <input type="email" id="userFormEmail" name="email" value="{{ old('email') }}" placeholder="yourEmail@gmail.com" required autocomplete="email" autofocus>
                @error('email')
                  <span style="color: red; display: block; font-size: 12px; margin-top: 4px;">{{ $message }}</span>
                @enderror
              </label>
              <label for="userFormPass" data-name="password">
                <div class="icon-lock"></div>
                <p>كلمة المرور</p>
                <input type="password" id="userFormPass" name="password" placeholder="كلمة المرور" required autocomplete="current-password">
                @error('password')
                  <span style="color: red; display: block; font-size: 12px; margin-top: 4px;">{{ $message }}</span>
                @enderror
              </label>
              <a href="{{ route('register') }}" id="noAccount">ليس لديك حساب؟؟</a>
            </legend>
            <button id="userFormSubmitBtn" type="submit">
              <div class="icon-paperplane">
                <p>تأكيد</p>
              </div>
            </button>
          </form>
          <div id="appSettings">
            <label id="appSettingsHeader">
              <div class="icon-edit"></div>
              <p>إعدادات التطبيق</p>
            </label>
            <label for="appLanguage">
              <div class="icon-language"></div>
              <p>اللغة</p>
              <select name="language" id="appLanguage">
                <option value="ar">العربية</option>
                <option value="en">الانجليزية</option>
              </select>
            </label>
          </div>
        </div>
      </section>
    </profilePage>
  </section>
</body>

</html>