# DOM Practice — Scroll Progress Bar

Небольшая задача для практики **работы с событием прокрутки страницы и динамическим изменением стилей элементов**.

Цель — реализовать **progress bar**, который показывает процент прокрутки страницы.

---

# 📋 Задача

На странице есть длинный текст и **progress bar в верхней части экрана**.

Необходимо реализовать JavaScript-логику, которая будет:

- отслеживать прокрутку страницы
- вычислять процент прокрутки
- изменять ширину progress bar

---

# 🧱 Структура страницы

Главные элементы:

| Элемент        | Назначение                |
| -------------- | ------------------------- |
| `.progress`    | контейнер progress bar    |
| `#progressBar` | заполняемая часть полоски |
| `.content`     | основной контент страницы |

HTML структуры:

```html
<div class="progress">
  <div class="progress-bar" id="progressBar"></div>
</div>

<div class="content">
  <h1>Scroll page</h1>

  <p>Lorem ipsum dolor sit amet...</p>
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Lorem ipsum dolor sit amet...</p>
</div>
```

---

# ✅ Требования

Когда пользователь **скроллит страницу**:

1. нужно определить **насколько страница прокручена**
2. вычислить **процент прокрутки**
3. изменить ширину `.progress-bar`

Например:

| Позиция страницы | Ширина progress bar |
| ---------------- | ------------------- |
| начало           | 0%                  |
| середина         | ~50%                |
| конец            | 100%                |

---

# 🎨 Стили

Progress bar закреплён в верхней части страницы:

```css
.progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  width: 100%;
}
```

Заполнение происходит за счёт изменения ширины:

```css
.progress-bar {
  width: 0%;
}
```

---

# ⚙️ Ограничения

Попробуйте использовать:

- `getElementById`
- событие `scroll`
- `scrollTop`
- `scrollHeight`
- `clientHeight`
- изменение `style.width`

---

# 🎯 Цель задания

Практика следующих навыков:

- обработка события прокрутки (`scroll`)
- работа с размерами страницы
- вычисление процентов
- динамическое изменение CSS-стилей
- взаимодействие JavaScript и layout страницы

---

# ⭐ Дополнительные улучшения (опционально)

Если основная задача решена, можно попробовать улучшить приложение:

- добавить **плавную анимацию progress bar**
- отображать **процент прокрутки текстом**
- менять цвет progress bar ближе к концу страницы
- добавить кнопку **Scroll to top**

---

# 💡 Подсказки

<details>
<summary>Получение progress bar</summary>

```javascript
const progressBar = document.getElementById("progressBar");
```

</details>

---

<details>
<summary>Отслеживание прокрутки</summary>

```javascript
window.addEventListener("scroll", handleScroll);
```

</details>

---

<details>
<summary>Получение позиции прокрутки</summary>

```javascript
document.documentElement.scrollTop;
```

</details>

---

<details>
<summary>Высота страницы</summary>

```javascript
document.documentElement.scrollHeight;
```

</details>

---

<details>
<summary>Изменение ширины полоски</summary>

```javascript
progressBar.style.width = percent + "%";
```

</details>
