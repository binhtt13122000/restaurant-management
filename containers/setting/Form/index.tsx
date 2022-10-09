import React, { useEffect } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import { Button, Grid, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { IForm } from "utils/common";
import CardContainer from "components/Card/Container";
import TextfieldBase from "components/BaseTextField";
import { Systemsetting } from "generated/graphql";

const SettingForm: React.FC<IForm<Systemsetting>> = (props: IForm<Systemsetting>) => {
    const { data: defaultData, isView } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        clearErrors,
    } = useForm<Systemsetting>({});

    useEffect(() => {
        setValue("id", defaultData.id);
        setValue("restaurantimage", defaultData.restaurantimage);
        setValue("restaurantname", defaultData.restaurantname);
        setValue("taxvalue", defaultData.taxvalue);
        setValue("address", defaultData.address);
    }, [defaultData, setValue]);

    const submitHandler: SubmitHandler<Systemsetting> = async (data: Systemsetting) => {
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
                                ? "Xem cấu hình hệ thống"
                                : "Chỉnh sửa cấu hình hệ thống"
                            : "Tạo mới cấu hình hệ thống"}
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
                    {/* <Grid
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
                                    : defaultData.restaurantimage ||
                                      "https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"
                            }
                            sx={{ width: 80, height: 80, alignItems: "center" }}
                        ></Avatar>
                    </Grid> */}
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
                            id="restaurantname"
                            label={"Tên nhà hàng"}
                            variant="outlined"
                            InputProps={{
                                readOnly: isView,
                            }}
                            required
                            fullWidth
                            error={!!errors.restaurantname}
                            helperText={errors.restaurantname && errors.restaurantname.message}
                            {...register("restaurantname", {
                                required: {
                                    value: true,
                                    message: "Tên nhà hàng là bắt buộc!",
                                },
                                onBlur: () =>
                                    setValue(
                                        "restaurantname",
                                        getValues("restaurantname")
                                            ? getValues("restaurantname").trim()
                                            : getValues("restaurantname")
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
                            id="address"
                            label={"Địa chỉ"}
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                readOnly: isView,
                            }}
                            required
                            error={!!errors.address}
                            helperText={errors.address && errors.address.message}
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: "Địa chỉ là bắt buộc",
                                },
                                onBlur: () =>
                                    setValue(
                                        "address",
                                        getValues("address")
                                            ? getValues("address").trim()
                                            : getValues("address")
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
                            id="taxvalue"
                            label={"Mã số thuế"}
                            variant="outlined"
                            InputProps={{
                                readOnly: isView,
                            }}
                            required
                            error={!!errors.taxvalue}
                            helperText={errors.taxvalue && errors.taxvalue.message}
                            {...register("taxvalue", {
                                required: {
                                    value: true,
                                    message: "Mã số thuế là bắt buộc",
                                },
                                onBlur: () =>
                                    setValue(
                                        "taxvalue",
                                        getValues("taxvalue")
                                            ? getValues("taxvalue").trim()
                                            : getValues("taxvalue")
                                    ),
                            })}
                            fullWidth
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
                            {"Trở lại"}
                        </Button>
                        <Button variant="contained" type="submit" autoFocus>
                            {defaultData.id ? "Chỉnhh sửa" : "Tạo mới"}
                        </Button>
                    </Box>
                </Grid>
            </CardContainer>
        </Modal>
    );
};

export default React.memo(SettingForm);
