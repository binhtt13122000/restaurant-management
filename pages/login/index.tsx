import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import WarningIcon from "@mui/icons-material/Warning";
import { LoginModel } from "models/login.model";
import bcrypt from "bcryptjs";
import useLogin from "hooks/login/useLogin";
import Router from "next/router";
import FullScreenLayout from "components/Layout/FullScreenLayout";
import { NextPageWithLayout } from "utils/common";
import { USER_ENUM } from "utils/enums";
import { useEffect } from "react";
import router from "next/router";
import useDeleteAccount from "hooks/account/useDeleteAccount";

const Login: NextPageWithLayout = () => {
    useEffect(() => {
        const userJson = localStorage.getItem("user");
        if (userJson) {
            router.push("/");
        }
    }, []);
    const { mutate } = useLogin();
    const { mutate: mutateDelete } = useDeleteAccount("xxx");

    const {
        handleSubmit,
        register,
        setError,
        formState: { errors },
    } = useForm<LoginModel>();

    const submitHandler = (data: LoginModel) => {
        if (data) {
            mutate(
                {
                    _eq: data.username,
                },
                {
                    onSuccess: async (user) => {
                        if (!user || !user.account) {
                            setError("username", { message: "" });
                            setError("password", {
                                message: "Tên đăng nhập hoặc mật khẩu không chính xác!",
                            });
                            return;
                        }
                        if (user.account.length != 1) {
                            setError("username", { message: "" });
                            setError("password", {
                                message: "Tên đăng nhập không tồn tại!",
                            });
                            return;
                        }
                        const match = await bcrypt.compare(
                            data.password,
                            user.account[0] ? user.account[0].password : ""
                        );
                        if (!match) {
                            setError("username", { message: "" });
                            setError("password", {
                                message: "Tên đăng nhập hoặc mật khẩu không chính xác!",
                            });
                            return;
                        }
                        if (user.account[0]) {
                            if (user.account[0].role.name.toLocaleUpperCase() !== "ADMIN") {
                                setError("username", { message: "" });
                                setError("password", {
                                    message: "Người dùng không phải là admin!",
                                });
                                return;
                            }
                            if (user.account[0].status === USER_ENUM.INACTIVE) {
                                setError("username", { message: "" });
                                setError("password", { message: "Người dùng đã bị khóa!" });
                                return;
                            }
                        }
                        mutateDelete({
                            id: user?.account[0]?.id,
                            status: USER_ENUM.ONLINE,
                        });
                        localStorage.setItem("user", JSON.stringify(user));
                        Router.push("/account");
                    },
                }
            );
        }
    };
    return (
        <Box
            sx={{
                width: "auto",
                height: "100vh",
                backgroundImage: "url(/admin/images/login_background.png)",
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    maxWidth: 700,
                    width: "80%",
                }}
            >
                <Typography variant="h4" mb={3} align="center" color="white">
                    Hệ thống quản lý nhà hàng
                </Typography>
                <Box
                    sx={{
                        ml: 12,
                        mr: 12,
                        backgroundColor: "white",
                        borderRadius: 1,
                        p: 2,
                    }}
                >
                    <form noValidate autoComplete="off" onSubmit={handleSubmit(submitHandler)}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Tên đăng nhập"
                            autoFocus
                            error={errors["username"] !== null && errors["username"] !== undefined}
                            {...register("username", {
                                required: "Yêu cầu nhập tên đăng nhập!",
                            })}
                        />
                        {errors["username"] && errors["username"].message && (
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <WarningIcon
                                    color="error"
                                    sx={{
                                        mr: 1,
                                    }}
                                />
                                <Typography variant="inherit" color="red">
                                    {`${String(errors["username"].message || "")}`}
                                </Typography>
                            </Box>
                        )}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Mật khẩu"
                            type="password"
                            id="password"
                            error={errors["password"] !== null && errors["password"] !== undefined}
                            {...register("password", {
                                required: "Yêu cầu nhập mật khẩu!",
                            })}
                        />
                        {errors["password"] && (
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <WarningIcon
                                    color="error"
                                    sx={{
                                        mr: 1,
                                    }}
                                />
                                <Typography variant="inherit" color="red">
                                    {`${String(errors["password"].message || "")}`}
                                </Typography>
                            </Box>
                        )}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                mt: 2,
                            }}
                        >
                            {/* <Link href={"/"} passHref>
                                <Typography
                                    ml={1}
                                    variant="overline"
                                    sx={{
                                        textDecoration: "underline",
                                        cursor: "pointer",
                                    }}
                                >
                                    Quên mật khẩu?
                                </Typography>
                            </Link> */}
                            <Button type="submit" variant="contained" color="primary">
                                Đăng nhập
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

Login.getLayout = function getLayout(page) {
    return <FullScreenLayout>{page}</FullScreenLayout>;
};

export default Login;
