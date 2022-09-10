import { NextPage } from "next";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const Login: NextPage = () => {
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
                    Restaurant Online Ordering System
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
                    <form
                        noValidate
                        autoComplete="off"
                        // onSubmit={handleSubmit(submitHandler)}
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Username"
                            name="username"
                            autoFocus
                            // error={errors["email"] !== null && errors["email"] !== undefined}
                            // inputRef={register({
                            //     required: "Email không được để trống!",
                            //     pattern: {
                            //         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            //         message: "Email không hợp lệ!",
                            //     },
                            // })}
                        />
                        {/* {errors["email"] && (
                            <div className={classes.warming}>
                                <WarningIcon className={classes.warmingIcon} />
                                <span>{errors["email"].message}</span>
                            </div>
                        )} */}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            // error={errors["password"] !== null && errors["password"] !== undefined}
                            // inputRef={register({ required: "Mật khẩu không được để trống!" })}
                        />
                        {/* {errors["password"] && (
                            <div className={classes.warming}>
                                <WarningIcon className={classes.warmingIcon} />
                                <span>{errors["password"].message}</span>
                            </div>
                        )} */}
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
                                    Forgot password?
                                </Typography>
                            </Link>
                            <Button type="submit" variant="contained" color="primary">
                                Login
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
