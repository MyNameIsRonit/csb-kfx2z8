let info = document.getElementById("msg");
let index_main = document.getElementById("main");

if (info) {
  let info_content = info.innerHTML;

  console.log(info_content);

  if (info_content == "") {
    console.log("content is none");
    info.style.display = "none";
    index_main.style.filter = "none";
  } else {
    console.log("content is something");
    info.style.display = "flex";
    index_main.style.filter = "blur(2px)";
  }

  info.addEventListener("click", function () {
    info.style.display = "none";
    index_main.style.filter = "none";
  });
}
