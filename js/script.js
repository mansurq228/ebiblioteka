// Восстанавливаем сохраненную тему при загрузке страницы
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
}

const themeButton = document.querySelector(".theme-switch");

if (themeButton) {
  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    
    // Сохраняем текущее состояние темы
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

const categoryButtons = document.querySelectorAll(".category-btn");
const bookCards = document.querySelectorAll(".book-card");

categoryButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const category = button.dataset.category;

    bookCards.forEach(function (card) {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});


const addBookForm = document.querySelector(".add-book__form");
const booksGrid = document.querySelector(".books-grid");

if (addBookForm) {
  addBookForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const titleInput = addBookForm.querySelector('input[type="text"]:nth-of-type(1)');
    const authorInput = addBookForm.querySelector('input[type="text"]:nth-of-type(2)');
    const categorySelect = addBookForm.querySelector("select");

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const category = categorySelect.value;

    if (title === "" || author === "" || category === "") {
      alert("Заполните все поля");
      return;
    }

    const bookCard = document.createElement("article");
    bookCard.classList.add("book-card");
    bookCard.dataset.category = category;

    const bookTitle = document.createElement("h3");
    bookTitle.classList.add("book-card__title");
    bookTitle.textContent = title;

    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("book-card__author");
    bookAuthor.textContent = author;

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    booksGrid.appendChild(bookCard);

    addBookForm.reset();
  });
}


const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector("textarea").value.trim();
    const checkbox = contactForm.querySelector('input[type="checkbox"]');

    if (name === "" || email === "" || message === "") {
      alert("Все поля должны быть заполнены");
      return;
    }

    if (!email.includes("@")) {
      alert("Введите корректный email");
      return;
    }

    if (!checkbox.checked) {
      alert("Необходимо согласие на обработку данных");
      return;
    }

    alert("Сообщение успешно отправлено!");
    contactForm.reset();
  });
}