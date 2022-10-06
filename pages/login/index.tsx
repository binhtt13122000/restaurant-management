import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useForm } from "react-hook-form";
import WarningIcon from "@mui/icons-material/Warning";
import LoginModel from "models/login.model";
import useLogin from "hooks/login/useLogin";
import Router from "next/router";
import FullScreenLayout from "components/Layout/FullScreenLayout";
import { NextPageWithLayout } from "utils/common";

const Login: NextPageWithLayout = () => {
    const { mutate } = useLogin();
    const {
        handleSubmit,
        register,
        setError,
        formState: { errors },
    } = useForm<LoginModel>();

    const submitHandler = (data: LoginModel) => {
        if (data) {
            mutate(data, {
                onError: (error) => {
                    setError("username", { message: "" });
                    setError("password", { message: error.response?.data.msg || "" });
                },
                onSuccess: () => {
                    Router.push("/");
                },
            });
        }
    };
    return (
        <Box
            sx={{
                width: "auto",
                height: "100vh",
                backgroundImage: "url(/images/login_background.png)",
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
                                required: "Username is required!",
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
                                    {errors["username"].message}
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
                                required: "Password is required!",
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
                                    {errors["password"].message}
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
                            <Link href={"/"} passHref>
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
                            </Link>
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
