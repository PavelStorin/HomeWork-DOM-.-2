# DOM Practice — Todo List

Небольшая задача для практики **базовой работы с DOM в JavaScript**.

Цель — реализовать простой Todo-список: добавление задач, удаление и переключение статуса выполнения.

---

# 📋 Задача

На странице уже есть готовая HTML-разметка Todo-списка.

Необходимо реализовать JavaScript-логику, которая позволит пользователю:

- добавлять новые задачи
- удалять задачи
- отмечать задачи выполненными

---

# 🧱 Структура страницы

Основные элементы:

| Элемент      | Назначение              |
| ------------ | ----------------------- |
| `#taskInput` | поле ввода новой задачи |
| `#addBtn`    | кнопка добавления       |
| `#taskList`  | список задач            |
| `.delete`    | кнопка удаления задачи  |

Пример элемента списка:

```html
<li>
  <span>Learn DOM</span>
  <button class="delete">Delete</button>
</li>
```

---

# ✅ Требования

## 1. Добавление задачи

При клике на кнопку **Add**:

1. взять текст из `#taskInput`
2. создать новый элемент `li`
3. добавить его в список `#taskList`

Структура элемента должна быть:

```html
<li>
  <span>Task text</span>
  <button class="delete">Delete</button>
</li>
```

После добавления:

- очистить поле ввода.

---

## 2. Удаление задачи

При клике на кнопку **Delete**:

- удалить соответствующий `li` из списка.

---

## 3. Переключение статуса задачи

При клике на текст задачи (`span`):

- добавить или убрать класс `done` у `li`.

CSS уже содержит стиль:

```css
li.done span {
  text-decoration: line-through;
  color: gray;
}
```

---

# ⚙️ Попробуй использовать следующие DOM-методы:

- `getElementById`
- `querySelector`
- `parentElement`
- `children`

---

# 🎯 Цель задания

Практика следующих навыков:

- выбор элементов DOM
- обработка событий
- создание DOM-элементов
- навигация по DOM
- работа с `classList`
- работа с пользовательским вводом

---

# ⭐ Дополнительные улучшения (опционально)

Если основная задача решена, можно попробовать улучшить приложение:

- добавлять задачу по **Enter**
- запретить добавление **пустых задач**
- добавить **счётчик задач**
- добавить кнопку **очистки выполненных задач**

---

# 💡 Подсказки

<details>
<summary>Получение элементов</summary>

```javascript
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
```

</details>

---

<details>
<summary>Создание элементов</summary>

```javascript
const li = document.createElement("li");
```

</details>

---

<details>
<summary>Удаление задачи</summary>

Можно найти родителя кнопки:

```javascript
button.parentElement;
```

</details>

---

<details>
<summary>Переключение класса</summary>

```javascript
li.classList.toggle("done");
```

</details>
