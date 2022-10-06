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
        children: [
            {
                id: 2.1,
                name: "Cấu hình chung",
                path: ROUTES.DEFAULT,
                icon: "/images/employees.png",
            },
            {
                id: 2.2,
                name: "Địa điểm",
                path: ROUTES.DEFAULT,
                icon: "/images/combo.png",
            },
        ],
    },
    {
        id: 3,
        name: "Void Reason",
        path: ROUTES.DEFAULT,
        icon: "/images/price-list.png",
    },
    {
        id: 4,
        name: "Phương thức thanh toán",
        path: ROUTES.PAYMENT_METHOD,
        icon: "/images/deposit.png",
    },
];
