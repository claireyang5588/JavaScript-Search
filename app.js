let bookname = document.querySelectorAll(".book");
let resultsList = document.getElementById("results");
let booklist = document.getElementById("booklist");
let cleanbutton = document.getElementById("clean");
let filterlist = document.getElementById("filter");
let cleanbtn = document.getElementById("clean");

//找出書名，並將所有書名轉成一個array
let bookarray = [];
bookname.forEach(function (item) {
  //   let bookarray = [];
  bookarray.push(item.innerText);
  //   console.log(bookarray);
});

console.log(bookarray);

let form = document.querySelector("form");
let input = document.querySelector("input");
console.log(input);

// 監聽表單提交事件
form.addEventListener("submit", function (event) {
  // 阻止表單的默認提交行為
  event.preventDefault();
  let text = document.querySelector("input").value;
  console.log(text);
  if (text == "") {
    alert("請輸入要搜尋的關鍵字");
  } else {
    let filterList = document.getElementById("filter");
    filterList.style.display = "block";
    // 在這裡執行您的自定義代碼，處理表單提交
    // 您可以訪問表單元素的屬性和值，並進行相應的處理
    // 例如，可以使用 form.elements 來訪問表單字段
    // 並使用 event 參數訪問事件相關的信息

    let searchTerm = document.querySelector("input").value;

    let filteredData = bookarray.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );
    displayResults(filteredData);
  }
});

// 顯示搜索結果
function displayResults(results) {
  resultsList.innerHTML = "";
  const title = document.createElement("h2");
  title.textContent = "搜尋符合結果";
  resultsList.appendChild(title);
  booklist.style.display = "none";
  if (results.length === 0) {
    resultsList.innerHTML = "<li>沒有找到符合的書名</li>";
  } else {
    results.forEach((result) => {
      const listItem = document.createElement("li");
      listItem.textContent = result;
      resultsList.appendChild(listItem);
    });
  }
}

cleanbtn.addEventListener("click", function (event) {
  document.querySelector("input").value = "";
  let filterList = document.getElementById("filter");
  filterList.style.display = "none";
  let booklist = document.getElementById("booklist");
  booklist.style.display = "block";
  console.log(booklist.style.display); // 這裡應該顯示 "block"
});
