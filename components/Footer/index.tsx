import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typography, useTheme } from "@mui/material";
import Link from "@mui/material/Link";
import { Box } from "@mui/system";

function Copyright() {
    return (
        <Typography variant="body2" color="currentcolor">
            {"Made by "}
            <Link color="inherit" href="https://material-ui.com/">
                Huy Team
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}
export const Footer = () => {
    const theme = useTheme();
    return (
        <footer
            style={{
                padding: theme.spacing(1, 0, 1, 0),
                marginTop: "auto",
                zIndex: theme.zIndex.drawer,
                backgroundColor: "rgba(0, 0, 0, 0.05)",
            }}
        >
            <Box
                sx={{
                    textAlign: "center",
                }}
            >
                <Link
                    sx={{
                        margin: "0px 10px",
                        color: "#dd4b39",
                        "& svg": {
                            marginRight: theme.spacing(1),
                            fontSize: "32px",
                            color: "#dd4b39",
                        },
                    }}
                    href="/"
                >
                    <GoogleIcon />
                </Link>
                <Link
                    sx={{
                        margin: "0px 10px",
                        color: "#1266f1",
                        "& svg": {
                            marginRight: theme.spacing(1),
                            fontSize: "32px",
                            color: "#1266f1",
                        },
                    }}
                    href="/"
                >
                    <FacebookIcon />
                </Link>
                <Link
                    sx={{
                        margin: "0px 10px",
                        color: "#0082ca",
                        "& svg": {
                            marginRight: theme.spacing(1),
                            fontSize: "32px",
                            color: "#0082ca",
                        },
                    }}
                    href="/"
                >
                    <LinkedInIcon />
                </Link>
                <Link
                    sx={{
                        margin: "0px 10px",
                        color: "#f09433",
                        "& svg": {
                            marginRight: theme.spacing(1),
                            fontSize: "32px",
                            color: "#f09433",
                        },
                    }}
                    href="/"
                >
                    <InstagramIcon />
                </Link>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                rowGap={1}
                sx={{
                    textAlign: "center",
                }}
            >
                <Typography variant="body1">Restaurant Management</Typography>
                <Copyright />
            </Box>
        </footer>
    );
};
