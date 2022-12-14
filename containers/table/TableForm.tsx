import React, { useEffect } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import { Button, Grid, MenuItem, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { IForm } from "utils/common";
import CardContainer from "components/Card/Container";
import TextfieldBase from "components/BaseTextField";
import { Table } from "generated/graphql";
import ReactHookFormSelect from "components/SelectBase";
import { TABLE_ENUM } from "utils/enums";
import { NumberFormatInput } from "components/NumberInput";
import CustomizeAutocomplete from "components/CustomizedAutocomplete";
import useGetLocation from "hooks/location/useGetLocation";
import useSnackbar from "components/Snackbar/useSnackbar";

export interface TableMutationType {
    id?: Table["id"];
    name: Table["name"];
    status: Table["status"];
    seat: Table["seat"];
    locationid: Table["locationid"];
}

const TableForm: React.FC<IForm<TableMutationType>> = (props: IForm<TableMutationType>) => {
    const { mutate } = useGetLocation("");
    const showSnackbar = useSnackbar();
    const { data: defaultData, isView } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        clearErrors,
        control,
        unregister,
    } = useForm<TableMutationType>({});

    useEffect(() => {
        setValue("id", defaultData.id);
        setValue("name", defaultData.name);
        setValue("status", defaultData.status || TABLE_ENUM.NOT_USE);
        setValue("locationid", defaultData.locationid);
        setValue("seat", defaultData.seat);
    }, [defaultData, setValue]);

    const submitHandler: SubmitHandler<TableMutationType> = async (data: TableMutationType) => {
        try {
            if (data) {
                mutate(
                    {
                        id: data.locationid,
                    },
                    {
                        onSuccess(dataLc) {
                            if (dataLc.location_by_pk?.status === "INACTIVE") {
                                showSnackbar({
                                    children: "Khu v???c n??y kh??ng ho???t ?????ng",
                                    severity: "error",
                                });
                                return;
                            }
                            props.handleClose("SAVE", data, () => {
                                clearErrors();
                                unregister();
                            });
                        },
                    }
                );
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
                                ? "Chi ti???t b??n ??n"
                                : "Ch???nh s???a b??n ??n"
                            : "T???o m???i b??n ??n"}
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
                            label={"T??n b??n ??n"}
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
                                    message: "T??n b??n ??n l?? b???t bu???c!",
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
                        <NumberFormatInput
                            control={control}
                            name="seat"
                            label="S??? ch??? ng???i"
                            rules={{
                                required: {
                                    value: true,
                                    message: "S??? ch??? ng???i l?? b???t bu???c",
                                },
                                min: {
                                    value: 1,
                                    message: "Ph???i c?? ??t nh???t 1 ch??? ng???i",
                                },
                                max: {
                                    value: 100,
                                    message: "C?? t???i ??a 100 ch??? ng???i",
                                },
                            }}
                            fullWidth
                            required
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
                            label="Tr???ng th??i"
                            name="status"
                            readOnly={isView}
                        >
                            <MenuItem value={TABLE_ENUM.NOT_USE}>Kh??ng ???????c s??? d???ng</MenuItem>
                            <MenuItem value={TABLE_ENUM.IN_USE}>??ang ???????c s??? d???ng</MenuItem>
                            <MenuItem value={TABLE_ENUM.INACTIVE}>Ng???ng ho???t ?????ng</MenuItem>
                        </ReactHookFormSelect>
                        <CustomizeAutocomplete
                            defaultId={!!defaultData.id ? defaultData.locationid : undefined}
                            conditionField=""
                            control={control}
                            rules={{
                                min: {
                                    value: 1,
                                    message: "Khu v???c l?? b???t bu???c",
                                },
                            }}
                            readonly={isView}
                            name="locationid"
                            entity="location"
                            displayField="name"
                            label={"Khu v???c"}
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
                            {"Tr??? v???"}
                        </Button>
                        {isView || (
                            <Button variant="contained" type="submit" autoFocus>
                                {defaultData.id ? "Ch???nh s???a" : "T???o m???i"}
                            </Button>
                        )}
                    </Box>
                </Grid>
            </CardContainer>
        </Modal>
    );
};

export default React.memo(TableForm);
