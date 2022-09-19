import { ROUTES } from "utils/routes";

export const routes = [
    {
        id: 1,
        name: "Dashboard",
        path: ROUTES.DASH_BOARD,
        icon: "/images/dashboard.png",
    },
    {
        id: 2,
        name: "Master Data",
        icon: "/images/dashboard.png",
        children: [
            {
                id: 2.1,
                name: "Customer",
                path: ROUTES.CUSTOMER,
                icon: "/images/dashboard.png",
            },
        ],
    },
];
