# DOM Practice — FAQ Accordion

Небольшая задача для практики **обработки кликов, работы с DOM и управления состоянием элементов**.

Цель — реализовать **FAQ-аккордеон**, где при открытии одного ответа остальные автоматически закрываются.

---

# 📋 Задача

На странице есть список **вопросов и ответов (FAQ)**.

Необходимо реализовать JavaScript-логику, которая позволит:

- открывать ответ при клике на вопрос
- закрывать все остальные ответы
- всегда оставлять открытым **только один элемент**

---

# 🧱 Структура страницы

Главные элементы:

| Элемент     | Назначение          |
| ----------- | ------------------- |
| `#faq`      | контейнер всего FAQ |
| `.faq-item` | один элемент FAQ    |
| `.question` | кликабельный вопрос |
| `.answer`   | скрытый ответ       |

HTML страницы:

```html
<div class="faq" id="faq">
  <div class="faq-item">
    <div class="question">What is JavaScript?</div>
    <div class="answer">JavaScript is a programming language for the web.</div>
  </div>

  <div class="faq-item">
    <div class="question">What is DOM?</div>
    <div class="answer">DOM is the structure of the HTML document.</div>
  </div>

  <div class="faq-item">
    <div class="question">What is event delegation?</div>
    <div class="answer">Handling events on a parent element.</div>
  </div>
</div>
```

---

# 🎨 Как работают стили

По умолчанию **ответы скрыты**:

```css
.answer {
  display: none;
}
```

Когда у `.faq-item` появляется класс `active`, ответ становится видимым:

```css
.faq-item.active .answer {
  display: block;
}
```

Это означает, что JavaScript должен **добавлять или удалять класс `active`** у `.faq-item`.

---

# ✅ Требования

При клике на вопрос:

1. должен открываться соответствующий ответ
2. остальные ответы должны закрываться
3. одновременно может быть открыт **только один элемент**

---

# ⚙️ Ограничения

Попробуйте использовать:

- `getElementById`
- `querySelector`
- `querySelectorAll`
- `addEventListener`
- `classList`
- `closest`

---

# 🎯 Цель задания

Практика следующих навыков:

- обработка событий (`click`)
- работа с несколькими DOM-элементами
- управление CSS-классами
- поиск родительских элементов (`closest`)
- создание простых интерактивных компонентов

---

# ⭐ Дополнительные улучшения (опционально)

Если основная задача решена, можно попробовать улучшить приложение:

- закрывать ответ при повторном клике
- добавить **анимацию открытия**
- добавить иконки **+ / −**
- реализовать **event delegation**
- сделать режим, где **можно открыть несколько ответов одновременно**

---

# 💡 Подсказки

<details>
<summary>Получение контейнера FAQ</summary>

```javascript
const faq = document.getElementById("faq");
```

</details>

---

<details>
<summary>Получение всех элементов FAQ</summary>

```javascript
const items = document.querySelectorAll(".faq-item");
```

</details>

---

<details>
<summary>Добавление обработчика клика</summary>

```javascript
faq.addEventListener("click", handleClick);
```

</details>

---

<details>
<summary>Поиск элемента, по которому кликнули</summary>

```javascript
const question = event.target.closest(".question");
```

</details>

---

<details>
<summary>Закрытие всех элементов</summary>

```javascript
items.forEach((item) => {
  item.classList.remove("active");
});
```

</details>

---

<details>
<summary>Открытие выбранного элемента</summary>

```javascript
faqItem.classList.add("active");
```

</details>
