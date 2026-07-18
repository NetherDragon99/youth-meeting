<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>update profile data</title>
</head>

<body>
  <section id="profilePageHeader">
    <div id="currentProfilePic" class="icon-user">
      <img src="assets/pic/new coc logo.png" alt="profile picture" style="display: none">
    </div>
    <h2>الأعدادات</h2>
    <div class="icon-gear" id="settingsIcon"></div>
  </section>
  <section id="profileContainer">
    <section id="profileHeader">
      <div id="profilePictureContainer">
        <div class="icon-user">
          <img src="assets/pic/new coc logo.png" alt="profile picture" style="display: none;">
        </div>
      </div>
      <h3>ستيفن ماريو</h3>
    </section>
    <div id="profilePagePages">
      <form id="userProfileForm">
        <legend id="userFormMainData">
          <label id="mainDataHeadder" data-name="mainProfileData">
            <div class="icon-edit"></div>
            <p>بيانات الحساب الاساسية</p>
          </label>
          <label for="userFormUsername" data-name="userName">
            <div class="icon-pencil"></div>
            <p>الاسم</p>
            <input type="text" id="userFormUsername" name="userName" placeholder="اكتب اسمك الى هيكون ظاهر للكل">
          </label>
          <label for="userFormGender" data-name="gender">
            <div class="icon-man-woman"></div>
            <p>النوع</p>
            <select name="userGender" id="userFormGender">
              <option selected disabled>اختار النوع</option>
              <option value="male">ولد</option>
              <option value="female">بنت</option>
              <option value="other">حاجات غريبة</option>
              <option value="pns">مش حابب تقول</option>
            </select>
          </label>
          <label for="userFormPhoneNo" data-name="phoneNo">
            <div class="icon-phone"></div>
            <p>رقم التليفون</p>
            <input type="tel" id="userFormPhoneNo" name="phoneNo" placeholder="01X XXXX XXXX">
          </label>
          <label for="userFormEmail" data-name="email">
            <div class="icon-mail-closed"></div>
            <p>الايميل</p>
            <input type="email" id="userFormEmail" name="email" placeholder="yourEmail@gmail.com">
          </label>
          <label for="userFormProfilePic" hasPhoto id="changePicFiled" data-name="profilePic">
            <div class="icon-camera"></div>
            <p>صورة الحساب</p>
            <input type="file" accept="image/*" id="userForm">
            <input type="text" disabled name="profilePic" style="display: none;">
            <div class="icon-cancel" id="photoCancel"></div>
          </label>
        </legend>
        <legend id="userFormChangePassward">
          <label data-name="changePass">
            <div class="icon-lock"></div>
            <p>تغيير كلمة المرور</p>
          </label>
          <label for="userFormOldPass" data-name="oldPass">
            <div class="icon-lock-rounded-open"></div>
            <p>كلمة المرور القديمة</p>
            <input type="password" id="userFormOldPass" name="oldPass" placeholder="كلمة المرور الى هتغيرها">
          </label>
          <label for="userFormNewPass" data-name="newPass">
            <div class="icon-lock-rounded-close"></div>
            <p>كلمة المرور الجديدة</p>
            <input type="password" id="userFormNewPass" name="newPass" placeholder="كلمة المرور الجديدة">
          </label>
          <label for="userFormConfirmPass" data-name="confirmPass">
            <div class="icon-lock-rounded-close"></div>
            <p>تأكيد كلمة المرور الجديدة</p>
            <input type="password" id="userFormConfirmPass" name="confirmPass"
              placeholder="تأكيد على كلمة المرور الجديدة">
          </label>
        </legend>
        <button id="userFormSubmitBtn">
          <div class="icon-paperplane">
            <p>تأكيد</p>
          </div>
        </button>
        <button id="logOutBtn">
          <div class="icon-exit">
            <p>تسجيل الخروج</p>
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
</body>

</html>