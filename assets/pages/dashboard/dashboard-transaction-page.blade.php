<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>update profile data</title>
</head>

<body>
  <section id="totalUsersNo">
    <div class="icon-users"></div>
    <h3>إجمالى عدد الشباب</h3>
    <h3 id="usersNo">0</h3>
  </section>
  <section id="transactionSection">
    <h2>تحويل الكوكس</h2>
    <div id="transactionUsersSearch">
      <input type="search" id="transactionSearchBar" placeholder="اختار الحساب" data-targetedUser value>
      <div class="icon-search"></div>
      <div class="icon-clear exitSearchMenu"></div>
      <div id="usersSearchSuggestions">
      </div>
    </div>
    <div class="fastTransaction">
      <h3>تحويل سريع</h3>
      <div class="fastTransactionValues">
        <div class="fastTransactionValue" data-value="5">
          <div class="icon-coin"></div>
          <h4>+5</h4>
        </div>
        <div class="fastTransactionValue" data-value="10">
          <div class="icon-coin"></div>
          <h4>+10</h4>
        </div>
        <div class="fastTransactionValue" data-value="20">
          <div class="icon-coin"></div>
          <h4>+20</h4>
        </div>
        <div class="fastTransactionValue" data-value="50">
          <div class="icon-coin"></div>
          <h4>+50</h4>
        </div>
      </div>
    </div>
    <div id="transactionValue">
      <div id="transactionValueInputField">
        <div class="icon-coin"></div>
        <input type="number" id="insertedTransactionAmount" placeholder="اكتب المبلغ" data-transactionValue="0">
      </div>
      <button id="transfereTypeButton" data-state="addCocs">
        <div>
          <div class="icon-plus"></div>
          <div class="icon-minus"></div>
        </div>
      </button>
    </div>
    <h3>الرسالة الوصفية</h3>
    <div id="transactionDescriptionContainer">
      <input type="text" id="transactionDescription" maxlength="20" placeholder="جائزة العالب"
        data-transactionDescription="undefined">
      <div id="transactionDescriptionSuggestions"></div>
    </div>
    <div id="transactionDetailsContainer">
      <textarea id="transactionDetailsMessage" placeholder="لا يوجد"></textarea>
      <div id="transactionDetailsSuggestions"></div>
    </div>
    <button id="transactionButton">
      <h4>تأكيد الكوكس</h4>
      <div class="icon-paperplane"></div>
    </button>
  </section>
  <section id="transactionHistory">
    <header>
      <h2>سجل التحويلات</h2>
      <div class="icon-refresh"></div>
    </header>
    <div id="transactionHistoryContainer"></div>
  </section>
</body>

</html>
