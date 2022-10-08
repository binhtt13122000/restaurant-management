import React, { useEffect } from "react";
import {
    Button,
    Card,
    CardContent,
    Paper,
    styled,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Container,
    Grid,
    Typography,
    ListItem,
    ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";

import LoadingCustomize from "components/Loading";

import { NextPage } from "next";
import router from "next/router";
import RestaurantImage from "containers/setting/RestaurantImage";
import useGetSystemSetting from "hooks/system-setting/useGetSystemSetting";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const Setting: NextPage = () => {
    useEffect(() => {
        const userJson = localStorage.getItem("user");
        if (!userJson) {
            router.push("/login");
        }
    }, []);

    const { data, isLoading } = useGetSystemSetting();

    if (data?.systemsetting.length === 0) {
        return (
            <Box sx={{ mt: 10 }}>
                <Typography variant="h6">
                    Hiện tại chưa có setting cho hệ thống, Vui lòng tạo mới!
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Button sx={{ mt: 3 }} color="primary" variant="contained">
                        {"Tạo mới"}
                    </Button>
                </Box>
            </Box>
        );
    }
    const setting = data?.systemsetting[0];
    return (
        <>
            <LoadingCustomize isLoading={isLoading}>
                <Card>
                    <CardContent sx={{ height: "100%", width: "100%" }}>
                        <Container maxWidth="lg">
                            <Grid
                                container
                                columnSpacing={5}
                                mt={2}
                                display="flex"
                                sx={{
                                    flexDirection: { xs: "column", lg: "row" },
                                    alignItems: { xs: "center", lg: "stretch" },
                                    justifyContent: { xs: "center", lg: "flex-start" },
                                }}
                            >
                                <Grid item lg={6} md={10} xs={12}>
                                    {setting && (
                                        <RestaurantImage image={setting?.restaurantimage || ""} />
                                    )}
                                </Grid>
                                <Grid
                                    item
                                    lg={6}
                                    md={12}
                                    xs={12}
                                    width={1}
                                    display="flex"
                                    flexDirection="column"
                                    gap={2}
                                    sx={{
                                        marginTop: { xs: 3, lg: 0 },
                                    }}
                                >
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        sx={{
                                            justifyContent: { xs: "center", lg: "flex-start" },
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            fontWeight={600}
                                            textTransform="uppercase"
                                            textAlign="center"
                                        >
                                            {setting?.restaurantname || "N/A"}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Box
                                            mt={2}
                                            sx={{
                                                display: "flex",
                                            }}
                                        >
                                            <TableContainer component={Paper}>
                                                <Table width="100%">
                                                    <TableBody>
                                                        <StyledTableRow
                                                            style={{
                                                                verticalAlign: "middle",
                                                            }}
                                                        >
                                                            <TableCell align="left" padding="none">
                                                                <ListItem>
                                                                    <ListItemText
                                                                        primary={
                                                                            <Typography
                                                                                variant="body2"
                                                                                align="left"
                                                                                sx={{
                                                                                    fontWeight:
                                                                                        "bold",
                                                                                }}
                                                                            >
                                                                                {"Tên nhà hàng"}
                                                                            </Typography>
                                                                        }
                                                                    />
                                                                </ListItem>
                                                            </TableCell>
                                                            <TableCell align="left" padding="none">
                                                                <ListItem>
                                                                    <ListItemText
                                                                        primary={
                                                                            <Typography
                                                                                variant="body2"
                                                                                align="left"
                                                                            >
                                                                                {setting?.restaurantname ||
                                                                                    "N/A"}
                                                                            </Typography>
                                                                        }
                                                                    />
                                                                </ListItem>
                                                            </TableCell>
                                                        </StyledTableRow>
                                                        <StyledTableRow
                                                            style={{
                                                                verticalAlign: "middle",
                                                            }}
                                                        >
                                                            <TableCell align="left" padding="none">
                                                                <ListItem>
                                                                    <ListItemText
                                                                        primary={
                                                                            <Typography
                                                                                variant="body2"
                                                                                align="left"
                                                                                sx={{
                                                                                    fontWeight:
                                                                                        "bold",
                                                                                }}
                                                                            >
                                                                                {"Địa chỉ"}
                                                                            </Typography>
                                                                        }
                                                                    />
                                                                </ListItem>
                                                            </TableCell>
                                                            <TableCell align="left" padding="none">
                                                                <ListItem>
                                                                    <ListItemText
                                                                        primary={
                                                                            <>
                                                                                <Box
                                                                                    sx={{
                                                                                        display:
                                                                                            "flex",
                                                                                    }}
                                                                                >
                                                                                    {setting?.address ||
                                                                                        "N/A"}
                                                                                </Box>
                                                                            </>
                                                                        }
                                                                    />
                                                                </ListItem>
                                                            </TableCell>
                                                        </StyledTableRow>
                                                        <StyledTableRow
                                                            style={{
                                                                verticalAlign: "middle",
                                                            }}
                                                        >
                                                            <TableCell align="left" padding="none">
                                                                <ListItem>
                                                                    <ListItemText
                                                                        primary={
                                                                            <Typography
                                                                                variant="body2"
                                                                                align="left"
                                                                                sx={{
                                                                                    fontWeight:
                                                                                        "bold",
                                                                                }}
                                                                            >
                                                                                {"Mã số thuế"}
                                                                            </Typography>
                                                                        }
                                                                    />
                                                                </ListItem>
                                                            </TableCell>
                                                            <TableCell align="left" padding="none">
                                                                <ListItem>
                                                                    <ListItemText
                                                                        primary={
                                                                            <Typography
                                                                                variant="body2"
                                                                                align="left"
                                                                            >
                                                                                {setting?.taxvalue ||
                                                                                    "N/A"}
                                                                            </Typography>
                                                                        }
                                                                    />
                                                                </ListItem>
                                                            </TableCell>
                                                        </StyledTableRow>
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Box>
                                    </Box>
                                    <Box
                                        display="flex"
                                        justifyContent="flex-end"
                                        alignItems="center"
                                        mt={3}
                                    >
                                        <Box display={"flex"} columnGap={2}>
                                            <Button
                                                color="primary"
                                                variant="contained"
                                                size="small"
                                            >
                                                {"Chỉnh sửa"}
                                            </Button>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </CardContent>
                </Card>
            </LoadingCustomize>
        </>
    );
};

export default Setting;
