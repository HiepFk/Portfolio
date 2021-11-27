window.addEventListener("load", function () {
  // Phần click albums
  const albumsItem = document.querySelectorAll(".albums__item");
  const albumsList = document.querySelectorAll(".albums__list");

  [...albumsItem].forEach((item) =>
    item.addEventListener("click", handleClick)
  );
  function handleClick(e) {
    console.log(e.target);
    [...albumsItem].forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    const itemNumber = e.target.dataset.set;
    console.log(itemNumber);

    [...albumsList].forEach((item) => {
      item.classList.remove("not-active");
      console.log(item.getAttribute("data-set"));
      if (item.getAttribute("data-set") !== itemNumber) {
        item.classList.add("not-active");
      }
    });
  }

  // Phần chạy skill
  const skillBarSmall = document.querySelectorAll(".skill__bar-small");
  const skill = document.querySelector(".skill");
  window.addEventListener("scroll", function () {
    const windowScrollTop = window.pageYOffset;
    const skillTop = skill.offsetTop;
    const skillHeight = skill.offsetHeight;
    if (
      windowScrollTop > skillTop / 2 &&
      windowScrollTop < skillTop + skillHeight
    ) {
      [...skillBarSmall].forEach((item) => {
        item.style.width = item.dataset.set;
      });
    } else {
      [...skillBarSmall].forEach((item) => {
        item.style.width = 0;
      });
    }
  });

  // Phần  menu fixed;
  const menu = document.querySelector(".menu");
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    const windowScrollTop = window.pageYOffset;
    const headerHeight = header.offsetHeight;
    if (windowScrollTop > (1 / 2) * headerHeight) {
      menu.style.backgroundColor = "#04aa6d";
    } else {
      menu.style.backgroundColor = null;
    }
  });

  // Phần menu thu nhỏ
  const buger = document.querySelector(".buger");
  const menuDesc = document.querySelector(".menu__desc");

  buger.addEventListener("click", function (e) {
    menuDesc.classList.toggle("active");
  });

  // Phần hiệu ứng education
  const educationRights = document.querySelectorAll(".education__right");
  const educationLefts = document.querySelectorAll(".education__left");
  window.addEventListener("scroll", function () {
    const windowScrollTop = window.pageYOffset;
    [...educationRights].forEach((item) => {
      // console.log(item);
      if (windowScrollTop > item.offsetTop - item.offsetHeight * 3) {
        item.style.transform = `translateX(0)`;
      } else {
        item.style.transform = `translateX(-100%)`;
      }
    });

    [...educationLefts].forEach((item) => {
      // console.log(item);
      if (windowScrollTop > item.offsetTop - item.offsetHeight * 3) {
        item.style.transform = `translateX(0)`;
      } else {
        item.style.transform = `translateX(100%)`;
      }
    });
  });

  // Phần hiệu ứng ảnh
  const albums = document.querySelectorAll(".albums__left-desc");
  const albumsTitle = document.querySelectorAll(".albums__left-title");

  [...albums].forEach((item) => {
    item.addEventListener("mouseenter", hover);
  });
  function hover(e) {
    console.log(e.target);
    [...albumsTitle].forEach((item) => {
      if (item.dataset.set == e.target.dataset.set) {
        item.style.width = "85%";
        item.style.height = "85%";
        item.style.opacity = "1";
      }
    });
    // e.children.children.style.width = `0`;
  }

  [...albums].forEach((item) => {
    item.addEventListener("mouseleave", leave);
  });
  function leave() {
    [...albumsTitle].forEach((item) => {
      item.style.width = "0";
      item.style.height = "0";
      item.style.opacity = "0";
    });
  }
});
