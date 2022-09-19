import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTES } from "utils/routes";

type IAppBarWithDrawer = {
    appbarHeight: number;
    handleDrawerToggle: () => void;
};

const AppBarWithDrawer: React.FC<IAppBarWithDrawer> = ({ appbarHeight, handleDrawerToggle }) => {
    const theme = useTheme();
    const router = useRouter();
    return (
        <AppBar
            position="fixed"
            elevation={3}
            color="primary"
            style={{
                zIndex: theme.zIndex.drawer + 1,
                height: appbarHeight,
                flexGrow: 1,
            }}
        >
            <Toolbar
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    flexGrow: 1,
                }}
            >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: "none" } }}
                >
                    <MenuIcon />
                </IconButton>
                <Box
                    sx={{ flexGrow: 1, cursor: "pointer" }}
                    display="flex"
                    gap={1}
                    alignItems="center"
                    onClick={() => router.push(ROUTES.DASH_BOARD)}
                >
                    <Image src="/images/cutlery.png" alt="logo" width={40} height={40} />
                    <Typography variant="h5">Management</Typography>
                </Box>
                <Box
                    sx={{
                        display: "inline-flex",
                        flexGrow: 1,
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        component="h3"
                        fontWeight="300"
                        fontSize="16px"
                        whiteSpace="normal"
                        lineHeight="1.2"
                        color="#fff"
                        marginRight="5px"
                        sx={{
                            display: { xs: "none", sm: "inline-block" },
                        }}
                    >
                        {` Administrator | Nguyen Duc Huy`}
                    </Typography>
                    <Tooltip title="Notification">
                        <IconButton
                            size="large"
                            aria-label="notification"
                            aria-controls="noti-menu"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <NotificationsActiveIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default AppBarWithDrawer;
