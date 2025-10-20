# 🎓 Учебный Проект: Композиция Компонентов в React

## Статус проекта

[![React + TypeScript Build](https://github.com/dm-morozov/netology_69_react-composition-of-components/actions/workflows/web.yaml/badge.svg)](https://github.com/dm-morozov/netology_69_react-composition-of-components/actions/workflows/web.yaml)
![Netology](https://img.shields.io/badge/React-TypeScript-blue)

---

Этот репозиторий содержит практические задания, направленные на освоение **композиции компонентов** — фундаментального подхода в React, позволяющего строить сложные интерфейсы из маленьких, независимых и многократно используемых блоков.

[Посетить сайт проекта](https://dm-morozov.github.io/netology_69_react-composition-of-components/)

---

## 1\. Проект 1: Универсальные Карточки (`Card` Component)

### 💡 Чему мы научились

В рамках этого задания мы освоили создание **гибких компонентов-контейнеров** и научились применять ключевые механизмы композиции:

- **Композиция через `props.children`**: Реализовали компонент `Card` как **«коробку»**, которая принимает любое содержимое (заголовки, текст, кнопки) и отображает его внутри элемента `div.card-body`.
- **Условный рендеринг через `props`**: Сделали компонент гибким, добавив условное отображение элемента `<img>` только при наличии пропса `imageUrl`, что позволяет использовать `Card` как с медиа-контентом, так и без него.
- **Специализация компонентов**: На примере `SuccessMessage` закрепили, как один компонент может быть оберткой над другим, **фиксируя** один пропс (`type="success"`) и **пробрасывая** остальные через оператор разворота (`...props`).

---

## 2\. Проект 2: Декомпозиция Сложного Интерфейса (Макет Yandex)

### 💡 Чему научились

Эта задача позволила применить принципы **единой ответственности** и композиции на уровне архитектуры большого проекта. Мы научились разбивать сложный макет на логические, управляемые и переиспользуемые части.

- **Принцип Единой Ответственности (SRP)**: Каждый компонент (например, `NewsItem` или `WeatherWidget`) отвечает строго за одну функцию.
- **Создание Настраиваемых Компонентов**: Мы определили, какие компоненты должны быть **настраиваемыми** (параметризуемыми) с помощью `props` (например, для передачи данных в `NewsItem` или заголовка в `WidgetContainer`).
- **Логическая Группировка**: Разделили компоненты на логические группы (`Search`, `News`, `Widgets`), а также вынесли типы данных в отдельный каталог (`types`).

### 📂 Реализованная Структура Проекта

Вся структура, отвечающая за макет, логически сгруппирована внутри папки `src/components/Yandex/`, что обеспечивает чистоту и масштабируемость проекта.

```bash
src/components/Yandex/
├── Header/
│   ├── Header.module.css
│   └── Header.tsx          // @description Контейнер для верхнего левого и правого информационных блоков.
├── Main/
│   ├── Main.module.css
│   └── MainContainer.tsx   // @description Основной контейнер, содержащий центральную колонку и Sidebar.
├── News/
│   ├── CurrentcyRates.tsx  // @description Отображает курсы валют.
│   ├── News.module.css
│   ├── NewsItem.tsx        // @description Отображает одну новость: иконка, текст, ссылка, мета-данные.
│   └── NewsList.tsx        // @description Отображает список новостей, получает массив данных через props.
├── Search/
│   ├── Search.module.css
│   ├── SearchInput.tsx     // @description Поле ввода и кнопка "Найти".
│   ├── SearchNav.tsx       // @description Отображает навигацию над поисковой строкой.
│   └── SearchSection.tsx   // @description Контейнер для логотипа, поисковой строки и навигации.
├── Sidebar/
│   ├── Sidebar.css
│   └── Sidebar.tsx         // @description Контейнер для всех виджетов в правой колонке.
├── types/                  // Каталог для всех TypeScript-типов данных.
│   ├── news.ts
│   └── widget.ts
├── Widgets/
│   ├── EtherWidget.tsx     // @description Виджет с информацией об "Эфире".
│   ├── MapWidget.tsx       // @description Виджет карты.
│   ├── TVGuideWidget.tsx   // @description Виджет телепрограммы.
│   ├── VisitedWidget.tsx   // @description Виджет "Посещаемое".
│   ├── WeatherWidget.tsx   // @description Виджет погоды.
│   └── WidgetContainar.tsx // @description Универсальная обертка для виджета (title + children).
└── YandexApp.tsx           // @description Главный компонент, композирующий структурные блоки (Header, MainContainer).
```

## 📧 Контакты

Если возникнут вопросы, пишите:

- ![LinkedIn](./svg/linkedin-icon.svg) [LinkedIn](https://www.linkedin.com/in/dm-morozov/)
- ![Telegram](./svg/telegram.svg) [Telegram](https://t.me/dem2014)
- ![GitHub](./svg/github-icon.svg) [GitHub](https://github.com/dm-morozov/)
