import React, { useEffect } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import { Avatar, Button, Grid, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { IForm } from "utils/common";
import CardContainer from "components/Card/Container";
import TextfieldBase from "components/BaseTextField";
import AccountDTO from "models/account.model";
import CustomizeAutocomplete from "components/CustomizedAutocomplete";

const AccountForm: React.FC<IForm<AccountDTO>> = (props: IForm<AccountDTO>) => {
    const { data: defaultData, isView } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        clearErrors,
        control,
    } = useForm<AccountDTO>({});

    useEffect(() => {
        setValue("id", defaultData.id);
        setValue("username", defaultData.username);
        setValue("email", defaultData.email);
        setValue("fullname", defaultData.fullname);
        setValue("phone", defaultData.phone);
        setValue("roleid", defaultData.roleid);
        setValue("avatar", defaultData.avatar);
        setValue("status", defaultData.status);
    }, [defaultData, setValue]);

    const submitHandler: SubmitHandler<AccountDTO> = async (data: AccountDTO) => {
        try {
            if (data) {
                props.handleClose("SAVE", data, clearErrors);
            }
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    };

    return (
        <Modal open={props.opened}>
            <CardContainer width="90%" maxWidth={820}>
                <Box sx={{ display: "flex", justifyContent: "center", m: 3 }}>
                    <Typography variant="h6" component="h2">
                        {defaultData.id
                            ? props.isView
                                ? "Xem chi tiết tài khoản"
                                : "Chỉnh sửa tài khoản"
                            : "Thêm mới tài khoản"}
                    </Typography>
                </Box>
                <Grid
                    component="form"
                    onSubmit={handleSubmit(submitHandler)}
                    sx={{
                        "& > :not(style)": {
                            m: 2,
                            display: "flex",
                        },
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        gap={3}
                        display="flex"
                        sx={{
                            flexWrap: { xs: "wrap", md: "nowrap" },
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src={
                                !defaultData.id
                                    ? "https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"
                                    : defaultData.avatar ||
                                      "https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"
                            }
                            sx={{ width: 80, height: 80, alignItems: "center" }}
                        ></Avatar>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        gap={3}
                        display="flex"
                        sx={{
                            flexWrap: { xs: "wrap", md: "nowrap" },
                        }}
                    >
                        <TextfieldBase
                            id="username"
                            label={"Tên đăng nhập"}
                            variant="outlined"
                            InputProps={{
                                readOnly: isView,
                            }}
                            required
                            fullWidth
                            error={!!errors.username}
                            helperText={errors.username && errors.username.message}
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: "Tên đăng nhập là bắt buộc!",
                                },
                                onBlur: () =>
                                    setValue(
                                        "username",
                                        getValues("username")
                                            ? getValues("username").trim()
                                            : getValues("username")
                                    ),
                            })}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        gap={3}
                        display="flex"
                        sx={{
                            flexWrap: { xs: "wrap", md: "nowrap" },
                        }}
                    >
                        <TextfieldBase
                            id="fullname"
                            label={"Tên đầy đủ"}
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                readOnly: isView,
                            }}
                            required
                            error={!!errors.fullname}
                            helperText={errors.fullname && errors.fullname.message}
                            {...register("fullname", {
                                required: {
                                    value: true,
                                    message: String("Tên đầy đủ là bắt buộc!"),
                                },
                                onBlur: () =>
                                    setValue(
                                        "fullname",
                                        getValues("fullname")
                                            ? getValues("fullname").trim()
                                            : getValues("fullname")
                                    ),
                            })}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        gap={3}
                        display="flex"
                        sx={{
                            flexWrap: { xs: "wrap", md: "nowrap" },
                        }}
                    >
                        <TextfieldBase
                            id="email"
                            label={"Email"}
                            variant="outlined"
                            InputProps={{
                                readOnly: isView,
                            }}
                            required
                            error={!!errors.email}
                            helperText={errors.email && errors.email.message}
                            {...register("email", {
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: String("Email không hợp lệ!"),
                                },
                                required: {
                                    value: true,
                                    message: String("Email là bắt buộc!"),
                                },
                                onBlur: () =>
                                    setValue(
                                        "email",
                                        getValues("email")
                                            ? getValues("email").trim()
                                            : getValues("email")
                                    ),
                            })}
                            fullWidth
                        />
                        <TextfieldBase
                            id="phone"
                            label={"Số điện thoại"}
                            variant="outlined"
                            required
                            InputProps={{
                                readOnly: isView,
                            }}
                            error={!!errors.phone}
                            helperText={errors.phone && errors.phone.message}
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: String("Số điện thoại là bắt buộc!"),
                                },
                                pattern: {
                                    value: /(0[3|5|7|8|9])+([0-9]{8})\b/i,
                                    message: "Số điện thại không đúng định dạng!",
                                },
                                onBlur: () =>
                                    setValue(
                                        "phone",
                                        getValues("phone")
                                            ? getValues("phone").trim()
                                            : getValues("phone")
                                    ),
                            })}
                            fullWidth
                            // disabled={Boolean(!!defaultData.id)}
                        />
                    </Grid>
                    <Grid
                        item
                        gap={3}
                        display="flex"
                        sx={{
                            flexWrap: { xs: "wrap", md: "nowrap" },
                        }}
                    >
                        <CustomizeAutocomplete
                            defaultId={!!defaultData.id ? defaultData.roleid : undefined}
                            conditionField="isActive"
                            control={control}
                            rules={{
                                min: {
                                    value: 1,
                                    message: "Vai trò là bắt buộc",
                                },
                            }}
                            readonly={isView}
                            name="roleid"
                            entity="role"
                            displayField="name"
                            label={"Vai trò"}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column-reverse", sm: "row" },
                            justifyContent: "center",
                            mx: "auto",
                            p: 1,
                            m: 1,
                            "& > :not(style)": { m: 1 },
                        }}
                    >
                        <Button
                            variant="outlined"
                            onClick={() => {
                                props.handleClose("CANCEL", undefined, clearErrors);
                            }}
                        >
                            {"Trở về"}
                        </Button>
                        {isView || (
                            <Button variant="contained" type="submit" autoFocus>
                                {defaultData.id ? "Chỉnh sửa" : "Tạo mới"}
                            </Button>
                        )}
                    </Box>
                </Grid>
            </CardContainer>
        </Modal>
    );
};

export default React.memo(AccountForm);
