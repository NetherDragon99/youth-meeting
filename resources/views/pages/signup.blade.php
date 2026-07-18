<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta lang="ar">
  <meta dir="rtl">
  <title>إنشاء حساب جديد</title>
  <link rel="stylesheet" href="{{ asset('YOYO_CSS/assets/css/index.css') }}">
  <link rel="stylesheet" href="{{ asset('YOYO_CSS/assets/icons/style.css') }}">
  <script>
    localStorage.setItem('lastOpenedPage', '#homePage');
  </script>
  <script type="module" src="{{ asset('YOYO_CSS/assets/js/profilePage.js') }}"></script>
</head>

<body>
  <section id="MainContainer">
    <profilePage id="profilePage">
      <section id="profilePageHeader">
        <div id="currentProfilePic" class="icon-user">
          <img src="{{ asset('YOYO_CSS/assets/pic/new coc logo.png') }}" alt="profile picture" style="display: none">
        </div>
        <h2>إنشاء حساب جديد</h2>
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
          <!-- Added POST action to Laravel's register route -->
          <form id="userProfileForm" method="POST" action="{{ route('register.store') }}">
            @csrf

            <legend id="userFormMainData">
              <label id="mainDataHeadder" data-name="createaccount">
                <div class="icon-edit"></div>
                <p>انشاء حساب جديد</p>
              </label>
              
              <!-- Name Field -->
              <label for="userFormUsername" data-name="userName">
                <div class="icon-pencil"></div>
                <p>الاسم</p>
                <input type="text" id="userFormUsername" name="name" class="@error('name') is-invalid @enderror" value="{{ old('name') }}" placeholder="اكتب اسمك الى هيكون ظاهر للكل" required autocomplete="name" autofocus>
                @error('name')
                  <span class="invalid-feedback" role="alert" style="color: red; display: block; font-size: 12px; margin-top: 4px;">
                    <strong>{{ $message }}</strong>
                  </span>
                @enderror
              </label>

              <!-- Gender Field -->
              <label for="userFormGender" data-name="gender">
                <div class="icon-man-woman"></div>
                <p>النوع</p>
                <select name="userGender" id="userFormGender">
                  <option selected disabled>اختار النوع</option>
                  <option value="male" {{ old('userGender') == 'male' ? 'selected' : '' }}>ولد</option>
                  <option value="female" {{ old('userGender') == 'female' ? 'selected' : '' }}>بنت</option>
                  <option value="other" {{ old('userGender') == 'other' ? 'selected' : '' }}>حاجات غريبة</option>
                  <option value="pns" {{ old('userGender') == 'pns' ? 'selected' : '' }}>مش حابب تقول</option>
                </select>
              </label>

              <!-- Phone Number Field -->
              <label for="userFormPhoneNo" data-name="phoneNo">
                <div class="icon-phone"></div>
                <p>رقم التليفون</p>
                <input type="tel" id="userFormPhoneNo" name="phoneNo" value="{{ old('phoneNo') }}" placeholder="01X XXXX XXXX">
              </label>

              <!-- Email Field -->
              <label for="userFormEmail" data-name="email">
                <div class="icon-mail-closed"></div>
                <p>الايميل</p>
                <input type="email" id="userFormEmail" name="email" class="@error('email') is-invalid @enderror" value="{{ old('email') }}" placeholder="yourEmail@gmail.com" required autocomplete="email">
                @error('email')
                  <span class="invalid-feedback" role="alert" style="color: red; display: block; font-size: 12px; margin-top: 4px;">
                    <strong>{{ $message }}</strong>
                  </span>
                @enderror
              </label>

              <label for="userFormProfilePic" hasPhoto id="changePicFiled" data-name="profilePic">
                <div class="icon-camera"></div>
                <p>صورة الحساب</p>
                <input type="file" accept="image/*" id="userForm">
                <input type="text" disabled name="profilePic" style="display: none;">
                <div class="icon-cancel" id="photoCancel"></div>
              </label>

              <!-- Password Field -->
              <label for="userFormPassword" data-name="password">
                <div class="icon-lock"></div>
                <p>كلمة المرور</p>
                <input type="password" id="userFormPass" name="password" class="@error('password') is-invalid @enderror" placeholder="كلمة المرور" required autocomplete="new-password">
                @error('password')
                  <span class="invalid-feedback" role="alert" style="color: red; display: block; font-size: 12px; margin-top: 4px;">
                    <strong>{{ $message }}</strong>
                  </span>
                @enderror
              </label>

              <!-- Password Confirmation Field (Required by Laravel UI) -->
              <label for="userFormPasswordConfirm" data-name="password_confirmation">
                <div class="icon-lock"></div>
                <p>تأكيد كلمة المرور</p>
                <input type="password" id="userFormPasswordConfirm" name="password_confirmation" placeholder="تأكيد كلمة المرور" required autocomplete="new-password">
              </label>

            </legend>
            
            <button id="userFormSubmitBtn" type="submit" onclick="localStorage.setItem('lastOpenedPage', '#homePage')">
              <div class="icon-paperplane">
                <p>تأكيد</p>
              </div>
            </button>
          </form>
          
          <div id="appSettings">
            <label id="appSettingsHeader" data-name="appSettings">
              <div class="icon-edit"></div>
              <p>إعدادات التطبيق</p>
            </label>
            <label for="appLanguage" data-name="appLanguage">
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