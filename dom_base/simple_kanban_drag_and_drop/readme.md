# DOM Practice — Simple Kanban Drag & Drop

Небольшая задача для практики **перетаскивания элементов (drag & drop)** и работы с координатами мыши.

Цель — реализовать **простую kanban-доску**, где карточки можно перетаскивать между колонками.

Это упражнение тренирует:

- обработку pointer-событий
- работу с координатами курсора
- позиционирование элементов
- перемещение DOM-элементов

---

# 📋 Задача

На странице есть **kanban-доска** с несколькими колонками:

- Todo
- In Progress
- Done

В колонках находятся **карточки задач**.

Необходимо реализовать логику, которая позволит:

- перетаскивать карточки
- перемещать их между колонками
- менять стиль карточки во время перетаскивания

---

# 🧱 Структура страницы

Главные элементы:

| Элемент   | Назначение      |
| --------- | --------------- |
| `.board`  | вся доска       |
| `.column` | колонка задач   |
| `.card`   | карточка задачи |

HTML страницы:

```html
<div class="board">
  <div class="column">
    <h3>Todo</h3>

    <div class="card">Learn DOM</div>
    <div class="card">Practice JS</div>
  </div>

  <div class="column">
    <h3>In Progress</h3>
  </div>

  <div class="column">
    <h3>Done</h3>
  </div>
</div>
```

---

# 🎨 Как работают стили

Карточки имеют обычный стиль:

```css
.card {
  background: #e8f4ff;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 10px;
  cursor: grab;
}
```

Во время перетаскивания карточка получает класс `dragging`.

```css
.card.dragging {
  opacity: 0.6;
}
```

Это означает, что JavaScript должен **добавлять и удалять класс `dragging`**.

---

# ✅ Требования

Необходимо реализовать следующий сценарий:

### Начало перетаскивания

При `pointerdown` на карточке:

- карточка начинает перетаскиваться
- добавляется класс `dragging`

---

### Перемещение карточки

При `pointermove`:

- карточка должна двигаться за курсором

Для этого используются координаты:

- `event.clientX`
- `event.clientY`

---

### Завершение перетаскивания

При `pointerup`:

- определяется колонка под курсором
- карточка добавляется в эту колонку
- класс `dragging` удаляется

---

# ⚙️ Ограничения

Необходимо использовать следующие методы и свойства:

- `pointerdown`
- `pointermove`
- `pointerup`
- `event.clientX`
- `event.clientY`
- `getBoundingClientRect`
- `append`
- `classList`

---

# 🎯 Цель задания

Практика следующих навыков:

- обработка pointer-событий
- работа с координатами курсора
- вычисление положения элементов
- перемещение DOM-элементов
- изменение стилей через классы

Это упражнение имитирует **drag & drop интерфейсы**, которые часто используются в:

- kanban-досках
- task-менеджерах
- редакторах интерфейсов

---

# ⭐ Дополнительные улучшения (опционально)

Если основная задача решена, можно попробовать улучшить приложение:

- возвращать карточку в исходную колонку, если она отпущена вне доски
- добавлять **placeholder** для позиции карточки
- делать **анимацию перемещения**
- менять курсор во время drag (`grabbing`)
- сохранять состояние доски в `localStorage`

---

# 💡 Подсказки

<details>
<summary>Получение всех карточек</summary>

```javascript
const cards = document.querySelectorAll(".card");
```

</details>

---

<details>
<summary>Начало перетаскивания</summary>

```javascript
card.addEventListener("pointerdown", startDrag);
```

</details>

---

<details>
<summary>Добавление класса перетаскивания</summary>

```javascript
card.classList.add("dragging");
```

</details>

---

<details>
<summary>Получение координат курсора</summary>

```javascript
const x = event.clientX;
const y = event.clientY;
```

</details>

---

<details>
<summary>Получение позиции колонки</summary>

```javascript
const rect = column.getBoundingClientRect();
```

</details>

---

<details>
<summary>Проверка попадания курсора в колонку</summary>

```javascript
if (
  x >= rect.left &&
  x <= rect.right &&
  y >= rect.top &&
  y <= rect.bottom
)
```

</details>

---

<details>
<summary>Перемещение карточки в колонку</summary>

```javascript
column.append(card);
```

</details>
