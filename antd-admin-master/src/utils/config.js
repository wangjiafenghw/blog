module.exports = {
  siteName: 'blog网站后台管理',
  copyright: 'blog网站后台管理  © 2018 wangjiafeng',
  logoPath: '/logo.svg',
  apiPrefix: '/api/v1',
  fixedHeader: true, // sticky primary layout header

  /* Layout configuration, specify which layout to use for route. */
  layouts: [
    {
      name: 'primary',
      include: [/.*/],
      exlude: [/(\/(en|zh))*\/login/],
    },
  ],

  /* I18n configuration, `languages` and `defaultLanguage` are required currently. */
  i18n: {
    /* Countrys flags: https://www.flaticon.com/packs/countrys-flags */
    languages: [
      {
        key: 'en',
        title: 'English',
        flag: '/america.svg',
      },
      {
        key: 'zh',
        title: '中文',
        flag: '/china.svg',
      },
    ],
    defaultLanguage: 'en',
  },
}
