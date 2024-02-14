export const ROLES = {
    ADMIN: 'ADMIN',
    BARISTA: 'BARISTA',
}
export const titlesMenuHeaderTable = [
    {
        id: 'one',
        label: '№',
        numeric: true,
        // minWidth: 5,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'two',
        label: 'Наименование',
        numeric: true,
        // minWidth: 10,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'three',
        label: 'Категория',
        numeric: true,
        // width: 30,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'four',
        label: 'Состав блюда и граммовка',
        numeric: true,
        // width: 40,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'five',
        label: 'Стоимость',
        numeric: true,
        // width: 40,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'six',
        label: 'Ред.',
        numeric: true,
        // width: 40,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
]
export const titlesSkladHeaderTable = [
    {
        id: 'one',
        label: '№',
        numeric: true,
        width: 5,
    },
    {
        id: 'two',
        label: 'Наименование',
        numeric: true,
        width: 10,
    },
    {
        id: 'three',
        label: 'Количество',
        numeric: true,
        width: 30,
    },
    {
        id: 'four',
        label: 'Лимит',
        numeric: true,
        width: 40,
    },
    {
        id: 'five',
        label: 'Дата прихода',
        numeric: true,
        width: 40,
    },
    {
        id: 'six',
        label: 'Ред.',
        numeric: true,
        width: 40,
    },
]
export const titlesFilialHeaderTable = [
    {
        id: 'one',
        label: '№',
        numeric: true,
        width: 5,
    },
    {
        id: 'two',
        label: 'Название кофейни',
        numeric: true,
        width: 10,
    },
    {
        id: 'three',
        label: 'Адрес',
        numeric: true,
        width: 30,
    },
    {
        id: 'four',
        label: 'Время работы',
        numeric: true,
        width: 40,
    },
    {
        id: 'five',
        label: 'Ред.',
        numeric: true,
        width: 40,
    },
]
export const titlesEmplayeesHeaderTable = [
    {
        id: 'one',
        label: '№',
        numeric: true,
        width: 5,
    },
    {
        id: 'two',
        label: 'Имя',
        numeric: true,
        width: 10,
    },
    {
        id: 'three',
        label: 'Должность',
        numeric: true,
        width: 30,
    },
    {
        id: 'four',
        label: 'Выберите филиал',
        numeric: true,
        width: 40,
    },
    {
        id: 'five',
        label: 'Телефон',
        numeric: true,
        width: 40,
    },
    {
        id: 'six',
        label: 'График работы',
        numeric: true,
        width: 40,
    },
    {
        id: 'seven',
        label: 'Ред.',
        numeric: true,
        width: 40,
    },
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
        path: 'sklad',
    },
    {
        id: 1,
        name: 'Филиалы',
        path: 'branches',
    },
    {
        id: 1,
        name: 'Сотрудники',
        path: 'emplyees',
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


export const skladTabsTitle = [
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

export const notificationProdacts = [
    {
        id: 1,
        name: 'Копучино',
        src:'https://latte.ru/wa-data/public/site/img/capp.jpeg',
        commet:'соевое молоко клубничный сироп',
        price:'140'
    },
    {
        id: 2,
        name: 'Копучино',
        src:'https://latte.ru/wa-data/public/site/img/capp.jpeg',
        commet:'соевое молоко клубничный сироп',
        price:'140'
    },
    {
        id: 3,
        name: 'Копучино',
        src:'https://latte.ru/wa-data/public/site/img/capp.jpeg',
        commet:'соевое молоко клубничный сироп',
        price:'140'
    },
    {
        id: 4,
        name: 'Копучино',
        src:'https://latte.ru/wa-data/public/site/img/capp.jpeg',
        commet:'соевое молоко клубничный сироп',
        price:'140'
    },
    {
        id: 5,
        name: 'Копучино',
        src:'https://latte.ru/wa-data/public/site/img/capp.jpeg',
        commet:'соевое молоко клубничный сироп',
        price:'140'
    },
]

export const notifacation = [
    {
        where:'Стол №10',
        time:'09:02',
        code:'М-47',
        for:'(В заведении)',
        products:'Капучино х1,Латте х1,Чизкейк х1,Багровый зак..'
    },
    {
        where:'На вынос',
        time:'19:02',
        code:'М-234',
        for:'(На вынос)',
        products:'Капучино х1,Латте х1'
    },
    {
        where:'Стол №5',
        time:'09:02',
        code:'М-47',
        for:'(В заведении',
        products:'Капучино х1,Латте х1,Чизкейк х1,Багровый зак..'
    },
    {
        where:'На вынос',
        time:'19:02',
        code:'М-234',
        for:'(На вынос)',
        products:'Капучино х1,Латте х1'
    },
   
]