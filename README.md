# Project description (En):

This is task manager created for pactice and improving skills of working with tools like "react-redux/toolkit", "taillwind.css" and "headless.UI" in React TypeScript environment.
...From the beginning point of the project was been a practice, and not created like comercial project.

# Technologies

...**_Core:_** React.js
...**_Type checking:_** Typescript
...**_Style:_** Taillwind.css
...**_State manager:_** React-redux/toolkit
...**_Suport libraries:_** React-router-dom _(browser routing)_, headless.ui _(UI components for React with tailwind suport)_

# Functional

...**Routing pages**
...Realized two adaptive pages, with tasks (in project named Dashboard) and task markers (in project named groups).
...**Layaout**
...Realized simple Layaout with header, navigation menu, search panel and main block where will show content in dependency with what a current routing location.
...**Task card create**
...Core component for Dashboard _(task)_ page, here you can create new task with a name, date and description _(optional)_, if name or date field is not complete, program will not create a task, and alert you with the red outline around input field. After create, to store will added object "task" what includes name, date, id, status _(by default is incomplete)_ and description if field of description is filled.
...On dislay with width more then 768px, this panel always will fixed in right part of the screen.
...On display with width less then 768px, this panel will hidden and shown only after press special button (what hidden in the screen resolution with more then 768px).
...**Task Card**
...Component what show to user all information about the task.
...In the task card component you can edite task card title and description, delete task, change complete status _(comlete, incomplete)_, all editing will update task store. Task card have 2 view mode **"_grid_"** and **_list_**. If store of markers (groups) will containe more then 0 marker, in task card will show interface for adding marker to task, you can delete marker from task after adding, you cant add one and the same marker twice.
...Minor functions:

-   After change complete status background will be change (to green if status _'complete'_ and to orange if status _'in progress'_)
-   If date of the task will coincides with today date, date color will change to red. If task complete date color will be green.
-   If task have description it will shown in accordeon.
-   Task control buttons (delete, edite), shown in dropdown menu.

...**Task Dashboard**
...Core component where will rendering all tasks like **Task Card** components from store.
...All task components sorted by a serch value from search field what we have in **Layaout** component.
In Dashboard realized control panel where you can:

-   Activate and deactivate multiple selection mode, when you can select multiple task and with special panel delete or change complete status of selected tasks.
-   Select sort mode to show all tasks, completed tasks, tasks in progress
-   Change task view mode (**"_grid_"** and **_list_**).

**Croup Card Create**
...Core component for groups page, where you can add new marker (group) to group store.
...On dislay with width more then 768px, this panel always will fixed in right part of the screen.
...On display with width less then 768px, this panel will hidden and shown only after press special button (what hidden in the screen resolution with more then 768px).
**Group Card**
...Component what show to user group name and color. In click on group will be show dropdown menu where you can chose color or delete group. After delete group, group will delete in all tasks what bound with this group.
**Group dashboard**
...Core component where will rendering all group like **group card**.
All group sorted by a search value from search field what we have in **Layaout** component.

# **Опис проекту (Ua):**

...Цей проект був створенний для практики та відпрацювання навичок роботи з інструментами як "react-redux/toolkit", "taillwind.css" і "headless.UI" в середовищі React з використанням мови TypeScript.
...З моменту створення метою проекту була виключно практика, а не створення продукту подібного до комерційного.

# Технології:

**_Ядро:_** React.js/
**_Перевірка типізації:_** Typescript/
**_Стилі CSS:_** Taillwind.css/
**_Менеджер стану:_** React-redux/toolkit/
**_Супутні бібліотеки:_** React-router-dom _(браузерний роутинг)_, headless.ui _(UI компоненти для React з підтримкою tailwind)_/

# Функціонал:

...**Роутинг**
...Реалізованно дві сторінки, одна з залачами (в проекті носить назву Dashboard), друга з маркерами (в проекті носить назву группи)ю
...**Layaout (макет)**
...Реалізованний простий макет з шапкою (в якій містяться меню навігації, панель пошуку), та головною секцією в якій відображається контент в залежності від навігації по сайту.
...**Task card create (створення картки задачі)**
Ключовий компонент сторінки Dashboard _(задачі)_, де ви можете створити нову задачу з ім'ям, датою і опціональним описом задачі. Якщо поле імені або дати не буде заповнене, то програма не створить нову задачу і повідомить вам про це червоною обводкою навколо незаповненного поля. Після створення до поточного стану задач буде додан об'єкт який в собі містить ім'я, дату, id, статус виконання _(за змовчуванням він не виконанний)_ і опис якщо поле опису заповненне.
...На дісплеях що більше ніж 768 пікселів панель завжди зафіксована на правій частині екрану (в незалежності від позиції скролу).
...На дісплеях що менше ніж 768 пікселів (мобільні пристрої та планшети), ця панель прихована і буде показана тільки після натискання на кнопку що зафіксована в правій частині екрану (якої нема на більших розширеннях екрану).
...**Task Card (Картка задачі)**
...Компонент який виводить користувачу всю інформацію про задачу.
В цьому компоненті ви можете редактувати назву задачі або її опис, видалити задачу, змінити статус виконання _(виконанно або в прогрессі)_, всі зміни одразу заносяться в стан задач програми. У картки задачі є два види перегляду **_плиткою_** або **_списком_**, що змінюються на рівні Dashboard _(чит. нижче)_. Якщо стан маркерів (груп) має хоч один маркер, то додається інтерфейс через який можна до задачі додати маркер або видалити маркер, маркерів може бути багато, один і той самий маркер не можна додати двічі.

-   Після зміни статусу виконання буде зміненний колір занього фону картки (на зелений якщо задача виконана, і на помаранчевий якщо задача в прогрессі)
-   Якщо дата задачі збігається з сьогоднішнею датою то дата змінить колір на червоний. Якщоо задача виконанна, то колір дати буде зміненний на зелений.
-   Якщо задача має опис, то буде показанний елемент "акордеон" при насканні на який буде виведенний весь опис задачі.
-   Випадаюче меню в якому сховані кнопки керування задачею (видалення, редкаткування).

**Task Dashboard (Робочій стіл задач)**
...Ключовий компонент сторінки зада...ч, який рендерить всі задачі у вигляді компонентів "Картка задачі" **_(Task card)_** з стану задач программи.
...Всі задачі відсортованні по співпадінню зі значенням пошуку з поля пошуку в шапці макету.
...В компоненті реалізованна панель керування де ви можете:

-   Активувати/деактивувати режим вибору багатьох задач, коли ви можете обрати кілька задач і за допомогою спеціальної панелі видалити обрані, чи змінити їх статус виконання на протилежний.
-   Обрати метод сортування щоб вивести всі задачі, тільки виконанні, тільки не виконанні.
-   Змінити вигляд перегляду задач (**_плиткою_** або **_списком_**)

...**Group card create (Створити группу)**
...Ключовий компонент сторінки группи (маркери), де ви можете додати новий маркер (группу) в стан групп программи.
...На дісплеях що більше ніж 768 пікселів панель завжди зафіксована на правій частині екрану (в незалежності від позиції скролу).
...На дісплеях що менше ніж 768 пікселів (мобільні пристрої та планшети), ця панель прихована і буде показана тільки після натискання на кнопку що зафіксована в правій частині екрану (якої нема на більших розширеннях екрану).
...**Group Card (Картка группи)**
Компонент який виводить користувачеві ім'я та колір маркеру _(за змовчуванням зелений)_. Після натискання на компонент з'являється випадаюче меню де можна змінити колір группи або видалити повністю группу. Після видалення группи, в усіх задачах ця группа буде також видалена.
...**Group dashboard (Робочий стіл групп)**
Ключовий компонент, який рендерить всі группи у вигляді картки группи з стану групп программи. Всі группи відсортовані по співпадінню зі значенням пошку з поля пошуку в шапці макету.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
