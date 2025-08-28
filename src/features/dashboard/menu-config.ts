export const menuConfig = {
  navMain: [
    {
      title: "Меню",
      url: "#",
      items: [
        {
          title: "Админ панель",
          url: "/admin",
        },
        {
          title: "Главная",
          url: "/admin/main",
          isActive: true,
        },
        {
          title: "Квесты",
          url: "/admin/quests",
        },
        {
          title: "Заявки",
          url: "/admin/orders",
        },
        {
          title: "Контакты",
          url: "/admin/contacts",
        },
        // {
        //   title: "Certificates",
        //   url: "/admin/certificates",
        // },
        {
          title: "Заявки на сертификаты",
          url: "/admin/certificate-orders",
        },
        {
          title: "Франшиза",
          url: "/admin/franchising",
        },
        {
          title: "Города",
          url: "/admin/cities",
        },
        {
          title: "Праздники",
          url: "/admin/holidays",
        },
      ],
    },
  ],
};
