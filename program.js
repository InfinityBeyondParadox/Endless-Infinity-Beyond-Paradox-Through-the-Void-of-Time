  function entrydarkness() {
    var signal = prompt("請輸入暗號:");
  
    if (signal == "darkness") {
  
      alert("歡迎來到黑暗紀錄簿");
      window.location.href = "pages/darkness_entry.html";
  
    } else {
      alert("暗號錯誤");
  
      return;
    }
  }
  
  function entryif() {
    window.location.href = "pages/if.html";
  }