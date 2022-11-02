import React, { useEffect } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import { Button, Grid, MenuItem, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { IForm } from "utils/common";
import CardContainer from "components/Card/Container";
import TextfieldBase from "components/BaseTextField";
import { Paymentmethod } from "generated/graphql";
import ReactHookFormSelect from "components/SelectBase";
import { BASIC_ENUM } from "utils/enums";

export interface LocationMutationType {
    id?: Paymentmethod["id"];
    name: Paymentmethod["name"];
    status: Paymentmethod["status"];
}

const LocationForm: React.FC<IForm<LocationMutationType>> = (
    props: IForm<LocationMutationType>
) => {
    const { data: defaultData, isView } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        clearErrors,
        control,
    } = useForm<LocationMutationType>({});

    useEffect(() => {
        setValue("id", defaultData.id);
        setValue("name", defaultData.name);
        setValue("status", defaultData.status);
    }, [defaultData, setValue]);

    const submitHandler: SubmitHandler<LocationMutationType> = async (
        data: LocationMutationType
    ) => {
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
                                ? "Chi tiết khu vực"
                                : "Chỉnh sửa khu vực"
                            : "Tạo mới khu vực"}
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
                        }}
                    >
                        <TextfieldBase
                            id="name"
                            label={"Tên khu vực"}
                            variant="outlined"
                            InputProps={{
                                readOnly: isView,
                            }}
                            required
                            fullWidth
                            error={!!errors.name}
                            helperText={errors.name && errors.name.message}
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Tên khu vực là bắt buộc!",
                                },
                                onBlur: () =>
                                    setValue(
                                        "name",
                                        getValues("name")
                                            ? getValues("name").trim()
                                            : getValues("name")
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
                        <ReactHookFormSelect
                            fullWidth
                            control={control}
                            label="Trạng thái"
                            name="status"
                            readOnly={isView}
                        >
                            <MenuItem value={BASIC_ENUM.ACTIVE}>Đang hoạt động</MenuItem>
                            <MenuItem value={BASIC_ENUM.INACTIVE}>Ngừng hoạt động</MenuItem>
                        </ReactHookFormSelect>
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

export default React.memo(LocationForm);
