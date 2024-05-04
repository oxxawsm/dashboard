const moment = require('moment');

// локализация
require('moment/locale/ru');
moment.locale('ru');

module.exports = Object.freeze({

    // Посещения
    PAGES_VISITS: [
        { address: 'my-site.ru/', views: '4 320' },
        { address: 'my-site.ru/upgrade-page', views: '2 589' },
        { address: 'my-site.ru/pro', views: '1 136' },
        { address: 'my-site.ru/business', views: '359' },
        { address: 'my-site.ru/docs', views: '178' },
        { address: 'my-site.ru/releases', views: '121' },
    ],

    // Данные источника прихода пользователей
    USERS_SOURCE_DATA: [
        { source: 'Яндекс Реклама', count: '26 345', conversionPercent: 21.9 },
        { source: 'Telegram Ads', count: '21 341', conversionPercent: 13.7 },
        { source: 'Sber Ads', count: '34 379', conversionPercent: 12.4 },
        { source: 'YouTube', count: '12 359', conversionPercent: 19.8 },
        { source: 'VK', count: '10 345', conversionPercent: 10 },
        { source: 'Дзен', count: '7 938', conversionPercent: 7.3 },
        { source: 'Пикабу', count: '7 938', conversionPercent: 5.3 },
    ],

    // Поступления
    PAYMENTS: [
        { userId: 'uid_ce1d40c3a3a8bc1', email: 'elena@mail.ru', location: 'Россия', subscription: 'Премиум', amount: 599, date: moment().endOf('day') },
        { userId: 'uid_c01c4526103646d', email: 'anna@mail.ru', location: 'Россия', subscription: 'Профи', amount: 999, date: moment().add(-1, 'd').endOf('day') },
        { userId: 'uid_0282c5036ac9d59', email: 'nikolay@mail.ru', location: 'Грузия', subscription: 'Профи', amount: 999, date: moment().add(-1, 'd').endOf('day') },
        { userId: 'uid_2802d4bef91c7be', email: 'aleksey@mail.ru', location: 'Россия', subscription: 'Корпоративная', amount: 10999, date: moment().add(-1, 'd').endOf('day') },
        { userId: 'uid_71b5e3b975154de', email: 'anastasia@mail.ru', location: 'Беларусь', subscription: 'Премиум', amount: 599, date: moment().add(-2, 'd').endOf('day') },
        { userId: 'uid_5340892cbd0cc92', email: 'timur@mail.ru', location: 'Армения', subscription: 'Премиум', amount: 599, date: moment().add(-2, 'd').endOf('day') },
        { userId: 'uid_a8a2c6d7f06abec', email: 'artemiy@mail.ru', location: 'Россия', subscription: 'Премиум', amount: 599, date: moment().add(-2, 'd').endOf('day') },
        { userId: 'uid_f017093e6e7d747', email: 'kleopatra@mail.ru', location: 'Узбекистан', subscription: 'Корпоративная', amount: 10999, date: moment().add(-2, 'd').endOf('day') },
        { userId: 'uid_6d26ecc8be80bc6', email: 'ivan@mail.ru', location: 'Беларусь', subscription: 'Профи', amount: 999, date: moment().add(-2, 'd').endOf('day') },
        { userId: 'uid_da24e0ab0756827', email: 'igor@mail.ru', location: 'Россия', subscription: 'Профи', amount: 999, date: moment().add(-2, 'd').endOf('day') },
        { userId: 'uid_eb73bac21a6ff62', email: 'daria@mail.ru', location: 'Казахстан', subscription: 'Корпоративная', amount: 10999, date: moment().add(-3, 'd').endOf('day') },
        { userId: 'uid_eadc523a7877c2d', email: 'mark@mail.ru', location: 'Россия', subscription: 'Профи', amount: 999, date: moment().add(-3, 'd').endOf('day') },
        { userId: 'uid_e6ea40588a861c5', email: 'maksim@mail.ru', location: 'Казахстан', subscription: 'Премиум', amount: 599, date: moment().add(-3, 'd').endOf('day') },
        { userId: 'uid_8625da0fbb94837', email: 'ilya@mail.ru', location: 'Беларусь', subscription: 'Премиум', amount: 599, date: moment().add(-3, 'd').endOf('day') },
        { userId: 'uid_72b1af23aa2e553', email: 'aleena@mail.ru', location: 'Россия', subscription: 'Премиум', amount: 599, date: moment().add(-3, 'd').endOf('day') },
        { userId: 'uid_af0ce6661f296c9', email: 'kleopatra@mail.ru', location: 'Россия', subscription: 'Профи', amount: 999, date: moment().add(-3, 'd').endOf('day') },
        { userId: 'uid_bee51ce9eac8005', email: 'patrik@mail.ru', location: 'Беларусь', subscription: 'Корпоративная', amount: 10999, date: moment().add(-3, 'd').endOf('day') },
        { userId: 'uid_f10c6be99bac2dd', email: 'asiya@mail.ru', location: 'Узбекистан', subscription: 'Премиум', amount: 599, date: moment().add(-3, 'd').endOf('day') },
        { userId: 'uid_67bbcb89e867a08', email: 'virat@mail.ru', location: 'Армения', subscription: 'Профи', amount: 999, date: moment().add(-3, 'd').endOf('day') },
    ],

    // Данные для оплаты интеграций
    INTEGRATION_TRANSACTIONS: [
        { accountNum: '#333', amount: '25 000', description: 'Яндекс Реклама', status: 'Ожидает', generatedOn: moment(new Date()).add(-1, 'days').format('DD MMM YYYY'), date: '-' },
        { accountNum: '#332', amount: '10 000', description: 'Sber Ads', status: 'Ожидает', generatedOn: moment(new Date()).add(-2, 'days').format('DD MMM YYYY'), date: '-' },
        { accountNum: '#331', amount: '5 000', description: 'Pikabu Ads', status: 'Ожидает', generatedOn: moment(new Date()).add(-3, 'days').format('DD MMM YYYY'), date: '-' },
        { accountNum: '#330', amount: '15 000', description: 'Telegram Ads', status: 'Оплачено', generatedOn: moment(new Date()).add(-4, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-3, 'days').format('DD MMM YYYY') },
        { accountNum: '#329', amount: '20 000', description: 'VK Ads', status: 'Отклонено', generatedOn: moment(new Date()).add(-5, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-5, 'days').format('DD MMM YYYY') },
        { accountNum: '#328', amount: '5 000', description: 'Dzen Ads', status: 'Оплачено', generatedOn: moment(new Date()).add(-6, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-5, 'days').format('DD MMM YYYY') },
        { accountNum: '#327', amount: '10 000', description: 'Sber Ads', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 1, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-29, 'days').format('DD MMM YYYY') },
        { accountNum: '#326', amount: '5 000', description: 'Pikabu Ads', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 2, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-29 * 2, 'days').format('DD MMM YYYY') },
        { accountNum: '#325', amount: '5 000', description: 'Dzen Ads', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 3, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-27 * 3, 'days').format('DD MMM YYYY') },
        { accountNum: '#324', amount: '5 000', description: 'Dzen Ads', status: 'Отклонено', generatedOn: moment(new Date()).add(-30 * 4, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-28 * 4, 'days').format('DD MMM YYYY') },
        { accountNum: '#323', amount: '25 000', description: 'Яндекс Реклама', status: 'Отклонено', generatedOn: moment(new Date()).add(-30 * 5, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-30 * 5, 'days').format('DD MMM YYYY') },
        { accountNum: '#322', amount: '25 000', description: 'Яндекс Реклама', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 6, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-29 * 6, 'days').format('DD MMM YYYY') },
        { accountNum: '#321', amount: '10 000', description: 'Sber Ads', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 7, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-30 * 7, 'days').format('DD MMM YYYY') },
        { accountNum: '#320', amount: '20 000', description: 'VK Ads', status: 'Отклонено', generatedOn: moment(new Date()).add(-30 * 8, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-28 * 8, 'days').format('DD MMM YYYY') },
        { accountNum: '#319', amount: '15 000', description: 'Telegram Ads', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 9, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-30 * 9, 'days').format('DD MMM YYYY') },
        { accountNum: '#318', amount: '3 000', description: 'Pikabu Ads', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 10, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-25 * 10, 'days').format('DD MMM YYYY') },
        { accountNum: '#317', amount: '10 000', description: 'Sber Ads', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 11, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-29 * 11, 'days').format('DD MMM YYYY') },
        { accountNum: '#316', amount: '3 000', description: 'Pikabu Ads', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 12, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-30 * 12, 'days').format('DD MMM YYYY') },
        { accountNum: '#315', amount: '15 000', description: 'VK Ads', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 13, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-23 * 13, 'days').format('DD MMM YYYY') },
        { accountNum: '#314', amount: '3 000', description: 'Dzen Ads', status: 'Оплачено', generatedOn: moment(new Date()).add(-30 * 14, 'days').format('DD MMM YYYY'), date: moment(new Date()).add(-22 * 14, 'days').format('DD MMM YYYY') },
    ],

    // Ошибки сервиса
    ERRORS_DATA: [
        { title: 'Ошибки', value: '114', description: '↙ 18%' },
        { title: 'Краши', value: '385', description: '↙ 6%' },
    ]
});
