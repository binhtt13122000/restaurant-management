import { ROUTES } from "utils/routes";

export const routes = [
    {
        id: 1,
        name: "Quản lý tài khoản",
        path: ROUTES.DEFAULT,
        icon: "/images/account.png",
    },
    {
        id: 2,
        name: "Quản lý nhà hàng",
        icon: "/images/management.png",
    },
    {
        id: 3,
        name: "Void Reason",
        path: ROUTES.DEFAULT,
        icon: "/images/price-list.png",
    },
    {
        id: 4,
        name: "Cấu hình chung",
        icon: "/images/employees.png",
        children: [
            {
                id: 4.1,
                name: "Thông tin nhà hàng",
                path: ROUTES.SETTING,
                icon: "/images/combo.png",
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
