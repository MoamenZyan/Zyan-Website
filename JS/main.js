// scroll up button

let btn = document.createElement("button");
btn.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;
btn.classList.add("btn-fixed");
document.body.appendChild(btn);
window.addEventListener("scroll", () => {
  if (window.scrollY >= 600) {
    btn.style.cssText = "display:block;"
  } else {
    btn.style.cssText = "display:none;"
  }
})

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
})
document.querySelector("#landing-arrow").addEventListener("click", () => {
  window.scrollTo({
    top: 750,
    behavior: "smooth",
  });
})

//login list 

let list = document.querySelector(".login-list");

let login = document.querySelector(".login");

login.addEventListener("click", () => {
  list.style.cssText = "display:flex";
})


document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("a1") === false) {
    list.style.cssText = "display:none";
  }
})

let user = document.querySelector(".user-input");
let password = document.querySelector(".password-input");

let login_btn = document.querySelector(".login-btn");
let para1 = document.createElement("p");
para1.className = "incorrect";

list.appendChild(para1);
para1.innerText = "username or password you entered are incorrect !";
para1.style.cssText = "color:red;display:none;";
let para2 = document.createElement("p");
list.appendChild(para2);
para2.className = "correct"
para2.style.cssText = "color:green;display:none";
login_btn.addEventListener("click", () => {
  if ((user.value === "") || (password.value === "")) {
    para1.style.cssText = "display:block";
    setTimeout(() => {
      para1.style.cssText = "display:none";
    }, 4000)
    if (list.hasChildNodes(para2)) {
      para2.style.cssText = "display:none;";
    }
  } else {
    if (list.hasChildNodes(para1)) {
      para1.style.cssText = "display:none;";
    }


    para2.innerText = `welcome back ${user.value}`;
    user.value = "";
    password.value = "";
    para2.style.cssText = "display:block";
    setTimeout(() => {
      para2.style.cssText = "display:none";
    }, 4000)
  }
})



//video heading

let li = document.querySelectorAll(".video-li");

let heading = document.querySelector(".video-heading");

li.forEach((e) => {
  e.addEventListener("click", () => {
    heading.innerHTML = `${e.innerHTML}`;
  })
})


