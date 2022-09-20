import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import RoutesCollapse from "./components/RoutesCollapse";

import { routes } from "./data";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import LockResetIcon from "@mui/icons-material/LockReset";
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Box,
    Typography,
    ListItemAvatar,
    Avatar,
    Collapse,
    List,
    ListItemButton,
    useTheme,
} from "@mui/material";
import Image from "next/image";
import _ from "lodash";
import LogoutIcon from "@mui/icons-material/Logout";

export type ChildrenType = {
    fatherIndex: number;
    selectedChildIndex: number;
    isOpen: boolean;
};

type ListRoutesType = {
    appbarHeight: number;
    user:
        | Partial<{
              firstName?: string;
              avatar?: string;
          }>
        | undefined;
};

const initialValue = {
    fatherIndex: -1,
    selectedChildIndex: -1,
    isOpen: false,
};

const ListRoutes: React.FC<ListRoutesType> = ({ appbarHeight, user }) => {
    const theme = useTheme();
    const router = useRouter();
    const [openUserInfo, setOpenUserInfor] = useState<boolean>(false);
    // const [isOpenFormChangePassword, setOpenFormChangePassword] = useState<boolean>(false);
    const [openChildren, setOpenChildren] = useState<ChildrenType>(initialValue);
    useEffect(() => {
        let itemSelectedFromSessionStorage = null;
        let select: ChildrenType = initialValue;
        let split = router.asPath.slice(1).split("/");
        let routerExecute = split.length > 0 ? `/${split[0]}` : router.asPath;
        routes.forEach((item) => {
            if (!_.isEqual(select, initialValue)) {
                return;
            }
            if (item.path) {
                _.isEqual(routerExecute, item.path) &&
                    (select = {
                        fatherIndex: item.id,
                        selectedChildIndex: item.id,
                        isOpen: true,
                    });
            } else if (item.children) {
                let objectSelected = item.children.find((item) =>
                    _.isEqual(routerExecute, item.path)
                );
                objectSelected &&
                    (select = {
                        fatherIndex: item.id,
                        selectedChildIndex: objectSelected.id,
                        isOpen: true,
                    });
            }
        });
        if (window.sessionStorage != undefined) {
            itemSelectedFromSessionStorage = window.sessionStorage.getItem("itemSelected");
        }
        if (itemSelectedFromSessionStorage !== null) {
            if (
                _.isEqual(
                    select,
                    JSON.parse(itemSelectedFromSessionStorage) && !_.isEqual(select, initialValue)
                )
            ) {
                setOpenChildren(JSON.parse(itemSelectedFromSessionStorage));
            } else if (!_.isEqual(select, initialValue)) {
                setOpenChildren(select);
            } else if (!_.isEqual(JSON.parse(itemSelectedFromSessionStorage), initialValue)) {
                setOpenChildren(JSON.parse(itemSelectedFromSessionStorage));
            }
        } else if (!_.isEqual(select, initialValue)) {
            setOpenChildren(select);
        }
    }, [router]);

    useEffect(() => {
        if (!_.isEqual(openChildren, initialValue)) {
            window.sessionStorage.setItem("itemSelected", JSON.stringify(openChildren));
        }
    }, [openChildren]);
    const handleListItemClick = (
        index: number,
        path: string | undefined,
        hasChildren: boolean,
        fatherIndex: number
    ) => {
        if (path) {
            router.push(path);
        }
        if (hasChildren) {
            setOpenChildren((prev) => {
                return {
                    ...prev,
                    fatherIndex: fatherIndex,
                    selectedChildIndex: index,
                    isOpen: prev.fatherIndex != fatherIndex ? true : !prev.isOpen,
                };
            });
        } else {
            setOpenChildren((prev) => {
                return {
                    ...prev,
                    selectedChildIndex: index,
                    fatherIndex: fatherIndex,
                    isOpen: true,
                };
            });
        }
    };

    const logout = async () => {};

    const changePasswordData = () => {
        // setOpenFormChangePassword(true);
    };

    // eslint-disable-next-line unused-imports/no-unused-vars
    const handleClose = (type: "SAVE" | "CANCEL") => {
        // setOpenFormChangePassword(false);
    };

    return (
        <React.Fragment>
            {/* <ChangePasswordForm
                opened={isOpenFormChangePassword}
                handleClose={handleClose}
                phoneNumber={user?.phoneNumber || ""}
            /> */}
            {/* <Toolbar /> */}
            <Box
                style={{
                    overflowY: "auto",
                    height: "100%",
                }}
            >
                <Box
                    sx={{
                        marginTop: `${appbarHeight}px`,
                        backgroundColor: "#20252a",
                        color: "#FFFFFF",
                        overflow: "hidden",
                        position: "relative",
                    }}
                >
                    <Box
                        sx={{
                            padding: "0px",
                            cursor: "pointer",
                            color: "#FFFFF",
                            fontWeight: 600,
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background:
                                    "linear-gradient(90deg, rgba(213,239,252,1) 50%, rgba(255,221,238,1) 100%)",
                                boxShadow: "inset 0 0 0 2000px rgb(0, 0, 0, .05)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}
                        ></Box>
                        <ListItem
                            button
                            sx={{
                                width: "100%",
                            }}
                            onClick={() => setOpenUserInfor(!openUserInfo)}
                        >
                            <ListItemAvatar>
                                <Avatar alt={user?.firstName || "A"} src={user?.avatar || ""} />
                            </ListItemAvatar>
                            <ListItemText
                                style={{
                                    fontWeight: "800 !important",
                                    fontSize: "28px",
                                    color: "rgb(0,0,0)",
                                }}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: "inline" }}
                                            component="span"
                                            variant="body2"
                                        >
                                            ADMIN
                                        </Typography>
                                    </React.Fragment>
                                }
                            >
                                {`Administrator`}
                            </ListItemText>
                            {openUserInfo ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openUserInfo} timeout="auto" unmountOnExit>
                            <List
                                component="div"
                                disablePadding
                                style={{
                                    backgroundColor: "#2d353c",
                                }}
                            >
                                <ListItemButton
                                    sx={{
                                        color: "rgba(255,255,255, 0.6)",
                                    }}
                                >
                                    <ListItemIcon>
                                        <PersonIcon
                                            sx={{
                                                color: "rgba(255,255,255, 0.6)",
                                            }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={"Profile"} />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{
                                        color: "rgba(255,255,255, 0.6)",
                                    }}
                                    onClick={() => changePasswordData()}
                                >
                                    <ListItemIcon>
                                        <LockResetIcon
                                            sx={{
                                                color: "rgba(255,255,255, 0.6)",
                                            }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={"Change Password"} />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{
                                        color: "rgba(255,255,255, 0.6)",
                                    }}
                                    onClick={() => logout()}
                                >
                                    <ListItemIcon>
                                        <LogoutIcon
                                            sx={{
                                                color: "rgba(255,255,255, 0.6)",
                                            }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={"Log out"} />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </Box>
                </Box>
                {routes.map((item) => (
                    <React.Fragment key={item.name}>
                        <ListItem
                            button
                            key={item.name}
                            onClick={() =>
                                handleListItemClick(
                                    item.id,
                                    item.path,
                                    Boolean(item.children),
                                    item.id
                                )
                            }
                            style={
                                !item?.children && openChildren.fatherIndex === item.id
                                    ? {
                                          transition: "ease-in-out .4s",
                                          borderRight: `3px solid ${theme.palette.primary.main}`,
                                      }
                                    : {}
                            }
                            selected={openChildren.fatherIndex === item.id}
                        >
                            <ListItemIcon
                                style={{
                                    minWidth: "50px",
                                }}
                            >
                                <Image src={item.icon} width={30} height={30} alt={"icon"} />
                            </ListItemIcon>
                            <ListItemText primary={`${item.name}`} />
                            {item?.children ? (
                                openChildren.fatherIndex == item.id && openChildren.isOpen ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )
                            ) : null}
                        </ListItem>
                        {item?.children ? (
                            <RoutesCollapse
                                item={item?.children}
                                fatherId={item?.id}
                                handleListItemClick={handleListItemClick}
                                openChildren={openChildren}
                            />
                        ) : null}
                    </React.Fragment>
                ))}
            </Box>
        </React.Fragment>
    );
};

export default ListRoutes;