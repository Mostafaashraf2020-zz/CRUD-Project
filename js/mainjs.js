//Global Variable

var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var BML = document.getElementById("bookmarkList");

if (localStorage.getItem("siteData") == null) {
  var bookMarkList = [];
} else {
  var bookMarkListString = localStorage.getItem("siteData");
  var bookMarkList = JSON.parse(bookMarkListString);

  showDate();
}

function createBookmark() {
  var bookMark = {
    bookName: siteNameInput.value,
    bookUrl: siteUrlInput.value,
  };
  bookMarkList.push(bookMark);
  saveSites();
  showDate();
  console.log(bookMark.bookName);
  console.log(bookMark.bookUrl);
  console.log(bookMark);
  console.log(bookMarkList);
  clearInput();
}

function showDate() {
  var trs = "";
  for (var i = 0; i < bookMarkList.length; i++) {
    trs += ` <div class="col-12 d-flex m-3 bg-info justify-content-around p-2">
            <h2>${bookMarkList[i].bookName}</h2>
            <a class="btn btn-outline-dark"
            href="https://${bookMarkList[i].bookUrl}" target="_blank"
            >visit</a>
            <button onClick="deleteSite(${i})" class="btn btn-danger" id="btnDelete">Delete</button>
          </div>`;
  }

  BML.innerHTML = trs;
  console.log(trs);
}
function clearInput() {
  siteNameInput.value = "";
  siteUrlInput.value = "";
}

function saveSites() {
  var x = JSON.stringify(bookMarkList);
  localStorage.setItem("siteData", x);
}

function deleteSite(indexOfProduct) {
  bookMarkList.splice(indexOfProduct, 1);

  localStorage.setItem("siteData", JSON.stringify(bookMarkList));
  showDate();
}
