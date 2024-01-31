export const titlesMenuHeaderTable = [
    {
        id: 'one',
        label: '№',
        numeric: true,
        width: 5,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'two',
        label: 'Наименование',
        numeric: true,
        width: 10,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'three',
        label: 'Категория',
        numeric: true,
        width: 30,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'four',
        label: 'Состав блюда и граммовка',
        numeric: true,
        width: 40,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'five',
        label: 'Стоимость',
        numeric: true,
        width: 40,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'six',
        label: 'Ред.',
        numeric: true,
        width: 40,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
]
export const titlesSkladHeaderTable = [
    {
        id: 1,
        label: '№',
        numeric: true,
        width: 5,
    },
    {
        id: 2,
        label: 'Наименование',
        numeric: true,
        width: 10,
    },
    {
        id: 3,
        label: 'Количество',
        numeric: true,
        width: 30,
    },
    {
        id: 4,
        label: 'Лимит',
        numeric: true,
        width: 40,
    },
    {
        id: 5,
        label: 'Дата прихода',
        numeric: true,
        width: 40,
    },
    {
        id: 6,
        label: 'Ред.',
        numeric: true,
        width: 40,
    },
]
export const titlesFilialHeaderTable = [
    {
        id: 1,
        label: '№',
        numeric: true,
        width: 5,
    },
    {
        id: 2,
        label: 'Название кофейни',
        numeric: true,
        width: 10,
    },
    {
        id: 3,
        label: 'Адрес',
        numeric: true,
        width: 30,
    },
    {
        id: 4,
        label: 'Время работы',
        numeric: true,
        width: 40,
    },
    {
        id: 5,
        label: 'Ред.',
        numeric: true,
        width: 40,
    },
]
export const titlesEmplayeesHeaderTable = [
    {
        id: 1,
        label: '№',
        numeric: true,
        width: 5,
    },
    {
        id: 2,
        label: 'Имя',
        numeric: true,
        width: 10,
    },
    {
        id: 3,
        label: 'Должность',
        numeric: true,
        width: 30,
    },
    {
        id: 4,
        label: 'Выберите филиал',
        numeric: true,
        width: 40,
    },
    {
        id: 5,
        label: 'Телефон',
        numeric: true,
        width: 40,
    },
    {
        id: 6,
        label: 'График работы',
        numeric: true,
        width: 40,
    },
    {
        id: 7,
        label: 'Ред.',
        numeric: true,
        width: 40,
    },
]
export const data = [
    {
        id: 'one',
        label: 'Капучино',
        category: 'Кофе',
        sostav: 'Молоко (70 мл), Кофе (15 зерен), Во...',
        price: '100',
    },
    {
        id: 'two',
        label: 'Капучино',
        category: 'Кофе',
        sostav: 'Молоко (70 мл), Кофе (15 зерен), Во...',
        price: '100',
    },
    {
        id: 'three',
        label: 'Капучино',
        category: 'Кофе',
        sostav: 'Молоко (70 мл), Кофе (15 зерен), Во...',
        price: '100',
    },
    {
        id: 'four',
        label: 'Капучино',
        category: 'Кофе',
        sostav: 'Молоко (70 мл), Кофе (15 зерен), Во...',
        price: '100',
    },
    {
        id: 'five',
        label: 'Капучино',
        category: 'Кофе',
        sostav: 'Молоко (70 мл), Кофе (15 зерен), Во...',
        price: '100',
    },
    // {
    //     id: 6,
    //     label: 'График работы',
    //     numeric: true,
    //     width: 40,
    // },
    // {
    //     id: 7,
    //     label: 'Ред.',
    //     numeric: true,
    //     width: 40,
    // },
]
export const sidebarMenu = [
    {
        id: 1,
        name: 'Меню',
        path: 'menu',
    },
    {
        id: 2,
        name: 'Склад',
        path: 'склад',
    },
    {
        id: 1,
        name: 'Филиалы',
        path: 'филиалы',
    },
    {
        id: 1,
        name: 'Сотрудники',
        path: 'сотрудники',
    },
]
export const tabTitle = [
    {
        id: 1,
        name: 'Готовая продукция',
    },
    {
        id: 2,
        name: 'Сырье',
    },
    {
        id: 3,
        name: 'Заканчивающиеся продукты',
    },
]
export const SelectData = [
    {
        id: 1,
        name: 'Кофе',
    },
    {
        id: 2,
        name: 'Десерты',
    },
    {
        id: 3,
        name: 'Выпечка',
    },
    {
        id: 4,
        name: 'Коктейли',
    },
    {
        id: 5,
        name: 'Чай',
    },
]
export const weekAddNewFilial = [
    {
        id: '1',
        day: 'Понедельник',
    },
    {
        id: '2',
        day: 'Вторник',
    },
    {
        id: '3',
        day: 'Среда',
    },
    {
        id: '4',
        day: 'Четверг',
    },
    {
        id: '5',
        day: 'Пятница',
    },
    {
        id: '6',
        day: 'Суббота',
    },
    {
        id: '7',
        day: 'Воскресенье',
    },
]
export const editSklad = [
    {
        id: '1',
        name: 'Выберите категорию',
    },
    {
        id: '2',
        name: 'Готовая продукция',
    },
    {
        id: '3',
        name: 'Сырье',
    },
]
