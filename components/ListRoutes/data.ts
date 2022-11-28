import { ROUTES } from "utils/routes";

export const routes = [
    {
        id: 1,
        name: "Quản lý tài khoản",
        path: ROUTES.ACCOUNT,
        icon: "/images/account.png",
    },
    {
        id: 2,
        name: "Quản lý nhà hàng",
        icon: "/images/management.png",
        children: [
            {
                id: 2.1,
                name: "Quản lý ca làm việc",
                path: ROUTES.SHIFT,
                icon: "/images/select.png",
            },
            {
                id: 2.2,
                name: "Quản lý phiên làm việc",
                path: ROUTES.WORKSESSION,
                icon: "/images/select.png",
            },
            {
                id: 2.3,
                name: "Quản lý các khu vực",
                path: ROUTES.LOCATION,
                icon: "/images/select.png",
            },
            {
                id: 2.4,
                name: "Quản lý bàn ăn",
                path: ROUTES.TABLE,
                icon: "/images/select.png",
            },
        ],
    },
    {
        id: 3,
        name: "Lý do hủy",
        path: ROUTES.VOID_REASON,
        icon: "/images/price-list.png",
    },
    {
        id: 4,
        name: "Cấu hình chung",
        icon: "/images/settings.png",
        children: [
            {
                id: 4.1,
                name: "Thông tin nhà hàng",
                path: ROUTES.SETTING,
                icon: "/images/settings.png",
            },
            {
                id: 4.2,
                name: "Phân quyền hệ thống",
                path: ROUTES.ROLE,
                icon: "/images/combo.png",
            },
        ],
    },
    {
        id: 5,
        name: "Phương thức thanh toán",
        path: ROUTES.PAYMENT_METHOD,
        icon: "/images/deposit.png",
    },
];
