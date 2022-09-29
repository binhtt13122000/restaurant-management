import { ROUTES } from "utils/routes";

export const routes = [
    {
        id: 1,
        name: "Account Manager",
        path: ROUTES.DEFAULT,
        icon: "/images/account.png",
    },
    {
        id: 2,
        name: "Restaurant Manager",
        icon: "/images/management.png",
        children: [
            {
                id: 2.1,
                name: "Restaurants",
                path: ROUTES.DEFAULT,
                icon: "/images/employees.png",
            },
            {
                id: 2.2,
                name: "Locations",
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
        name: "Payment Method",
        icon: "/images/deposit.png",
    },
    {
        id: 6,
        name: "System Setting",
        path: ROUTES.DEFAULT,
        icon: "/images/settings.png",
    },
];
