const moment = require('moment');

// локализация
require('moment/locale/ru');
moment.locale('ru');

module.exports = Object.freeze({

    PAGES_VISITS: [
        { address: 'my-site.ru/', views: '4 320' },
        { address: 'my-site.ru/upgrade-page', views: '2 589' },
        { address: 'my-site.ru/pro', views: '1 136' },
        { address: 'my-site.ru/business', views: '359' },
        { address: 'my-site.ru/docs', views: '178' },
        { address: 'my-site.ru/releases', views: '121' },
    ],

    CALENDAR_INITIAL_EVENTS: [
        { title: 'Product call', theme: 'GREEN', startTime: moment().add(-12, 'd').startOf('day'), endTime: moment().add(-12, 'd').endOf('day') },
        { title: 'Meeting with tech team', theme: 'PINK', startTime: moment().add(-8, 'd').startOf('day'), endTime: moment().add(-8, 'd').endOf('day') },
        { title: 'Meeting with Cristina', theme: 'PURPLE', startTime: moment().add(-2, 'd').startOf('day'), endTime: moment().add(-2, 'd').endOf('day') },
        { title: 'Meeting with Alex', theme: 'BLUE', startTime: moment().startOf('day'), endTime: moment().endOf('day') },
        { title: 'Product Call', theme: 'GREEN', startTime: moment().startOf('day'), endTime: moment().endOf('day') },
        { title: 'Client Meeting', theme: 'PURPLE', startTime: moment().startOf('day'), endTime: moment().endOf('day') },
        { title: 'Client Meeting', theme: 'ORANGE', startTime: moment().add(3, 'd').startOf('day'), endTime: moment().add(3, 'd').endOf('day') },
        { title: 'Product meeting', theme: 'PINK', startTime: moment().add(5, 'd').startOf('day'), endTime: moment().add(5, 'd').endOf('day') },
        { title: 'Sales Meeting', theme: 'GREEN', startTime: moment().add(8, 'd').startOf('day'), endTime: moment().add(8, 'd').endOf('day') },
        { title: 'Product Meeting', theme: 'ORANGE', startTime: moment().add(8, 'd').startOf('day'), endTime: moment().add(8, 'd').endOf('day') },
        { title: 'Marketing Meeting', theme: 'PINK', startTime: moment().add(8, 'd').startOf('day'), endTime: moment().add(8, 'd').endOf('day') },
        { title: 'Client Meeting', theme: 'GREEN', startTime: moment().add(8, 'd').startOf('day'), endTime: moment().add(8, 'd').endOf('day') },
        { title: 'Sales meeting', theme: 'BLUE', startTime: moment().add(12, 'd').startOf('day'), endTime: moment().add(12, 'd').endOf('day') },
        { title: 'Client meeting', theme: 'PURPLE', startTime: moment().add(16, 'd').startOf('day'), endTime: moment().add(16, 'd').endOf('day') },
    ],

    PAYMENTS: [
        { email: 'alex@dashwind.com', location: 'Paris', subscription: '', amount: 100, date: moment().endOf('day') },
        { email: 'ereena@dashwind.com', location: 'London', amount: 190, date: moment().add(-1, 'd').endOf('day') },
        { email: 'jhon@dashwind.com', location: 'Canada', amount: 112, date: moment().add(-1, 'd').endOf('day') },
        { email: 'matrix@dashwind.com', location: 'Peru', amount: 111, date: moment().add(-1, 'd').endOf('day') },
        { email: 'virat@dashwind.com', location: 'London', amount: 190, date: moment().add(-2, 'd').endOf('day') },
        { email: 'miya@dashwind.com', location: 'Paris', amount: 230, date: moment().add(-2, 'd').endOf('day') },
        { email: 'virat@dashwind.com', location: 'Canada', amount: 331, date: moment().add(-2, 'd').endOf('day') },
        { email: 'matrix@dashwind.com', location: 'London', amount: 581, date: moment().add(-2, 'd').endOf('day') },
        { email: 'ereena@dashwind.com', location: 'Tokyo', amount: 151, date: moment().add(-2, 'd').endOf('day') },
        { email: 'jhon@dashwind.com', location: 'Paris', amount: 91, date: moment().add(-2, 'd').endOf('day') },
        { email: 'virat@dashwind.com', location: 'Canada', amount: 161, date: moment().add(-3, 'd').endOf('day') },
        { email: 'matrix@dashwind.com', location: 'US', amount: 121, date: moment().add(-3, 'd').endOf('day') },
        { email: 'jhon@dashwind.com', location: 'Tokyo', amount: 713, date: moment().add(-3, 'd').endOf('day') },
        { email: 'ereena@dashwind.com', location: 'London', amount: 217, date: moment().add(-3, 'd').endOf('day') },
        { email: 'virat@dashwind.com', location: 'Paris', amount: 117, date: moment().add(-3, 'd').endOf('day') },
        { email: 'jhon@dashwind.com', location: 'Canada', amount: 612, date: moment().add(-3, 'd').endOf('day') },
        { email: 'matrix@dashwind.com', location: 'London', amount: 631, date: moment().add(-3, 'd').endOf('day') },
        { email: 'ereena@dashwind.com', location: 'Tokyo', amount: 151, date: moment().add(-3, 'd').endOf('day') },
        { email: 'virat@dashwind.com', location: 'Paris', amount: 617, date: moment().add(-3, 'd').endOf('day') },
    ],

    // Данные для оплаты интеграций
    INTEGRATION_TRANSACTIONS: [
        { accountNum: '#4567', amount: '23,989', description: 'Product usages', status: 'Ожидает', generatedOn: moment(new Date()).add(-30 * 1, 'days').format('DD MMM YYYY'), date: '-' },
        { accountNum: '#4523', amount: '34,989', description: 'Product usages', status: 'Ожидает', generatedOn: moment(new Date()).add(-30 * 2, 'days').format('DD MMM YYYY'), date: '-' },
        { accountNum: '#4453', amount: '39,989', description: 'Product usages', status: 'Отклонено', generatedOn: moment(new Date()).add(-30 * 3, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-24 * 2, 'days').format('DD MMM YYYY') },
        { accountNum: '#4359', amount: '28,927', description: 'Product usages', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 4, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-24 * 3, 'days').format('DD MMM YYYY') },
        { accountNum: '#3359', amount: '28,927', description: 'Product usages', status: 'Отклонено', generatedOn: moment(new Date()).add(-30 * 5, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-24 * 4, 'days').format('DD MMM YYYY') },
        { accountNum: '#3367', amount: '28,927', description: 'Product usages', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 6, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-24 * 5, 'days').format('DD MMM YYYY') },
        { accountNum: '#3359', amount: '28,927', description: 'Product usages', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 7, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-24 * 6, 'days').format('DD MMM YYYY') },
        { accountNum: '#2359', amount: '28,927', description: 'Product usages', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 8, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-24 * 7, 'days').format('DD MMM YYYY') },
        { accountNum: '#4453', amount: '39,989', description: 'Product usages', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 3, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-24 * 2, 'days').format('DD MMM YYYY') },
        { accountNum: '#4359', amount: '28,927', description: 'Product usages', status: 'Отклонено', generatedOn: moment(new Date()).add(-30 * 4, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-24 * 3, 'days').format('DD MMM YYYY') },
        { accountNum: '#3359', amount: '28,927', description: 'Product usages', status: 'Отклонено', generatedOn: moment(new Date()).add(-30 * 5, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-24 * 4, 'days').format('DD MMM YYYY') },
        { accountNum: '#3367', amount: '28,927', description: 'Product usages', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 6, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-24 * 5, 'days').format('DD MMM YYYY') },
        { accountNum: '#3359', amount: '28,927', description: 'Product usages', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 7, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-24 * 6, 'days').format('DD MMM YYYY') },
        { accountNum: '#2359', amount: '28,927', description: 'Product usages', status: 'Отклонено', generatedOn: moment(new Date()).add(-30 * 8, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-24 * 7, 'days').format('DD MMM YYYY') },
        { accountNum: '#4453', amount: '39,989', description: 'Product usages', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 3, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-24 * 2, 'days').format('DD MMM YYYY') },
        { accountNum: '#4359', amount: '28,927', description: 'Product usages', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 4, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-24 * 3, 'days').format('DD MMM YYYY') },
        { accountNum: '#3359', amount: '28,927', description: 'Product usages', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 5, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-24 * 4, 'days').format('DD MMM YYYY') },
        { accountNum: '#3367', amount: '28,927', description: 'Product usages', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 6, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-24 * 5, 'days').format('DD MMM YYYY') },
        { accountNum: '#3359', amount: '28,927', description: 'Product usages', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 7, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-24 * 6, 'days').format('DD MMM YYYY') },
        { accountNum: '#2359', amount: '28,927', description: 'Product usages', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 8, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-24 * 7, 'days').format('DD MMM YYYY') },
    ]
});
