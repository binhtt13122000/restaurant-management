import CRUDTable from "components/Table";
import { IColumn } from "components/Table/models";
import { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";
import ChipBase from "components/Chip";
import { BASIC_ENUM } from "utils/enums";
import useCreatePaymentMethod from "hooks/payment-methods/useCreatePaymentMethod";
import PaymentMethodForm, {
    PaymentmethodMutationType,
} from "containers/payment-methods/PaymentMethodForm";
import useSnackbar from "components/Snackbar/useSnackbar";
import useUpdatePaymentMethod from "hooks/payment-methods/useUpdatePaymentMethod";
import useDeletePaymentMethod from "hooks/payment-methods/useDeletePaymentMethod";

const PaymentMethod: NextPage = () => {
    useEffect(() => {
        const userJson = localStorage.getItem("user");
        if (!userJson) {
            window.location.replace("https://capstoneposrestaurant.tech/login");
        }
    }, []);
    const initData: PaymentmethodMutationType = {
        id: 0,
        name: "",
        status: BASIC_ENUM.ACTIVE,
    };

    const { mutate: mutateCreate } = useCreatePaymentMethod("PaymentMethodQuery");
    const { mutate: mutateUpdate } = useUpdatePaymentMethod("PaymentMethodQuery");
    const { mutate: mutateDelete } = useDeletePaymentMethod("PaymentMethodQuery");
    const showSnackbar = useSnackbar();
    const [data, setData] = useState<PaymentmethodMutationType>(initData);
    const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
    const addRowData = () => {
        setIsOpenForm(true);
        setData(initData);
    };
    const updateRowData = (rowData: PaymentmethodMutationType) => {
        const data: PaymentmethodMutationType = {
            name: rowData.name,
            id: rowData.id,
            status: rowData.status,
        };
        setIsOpenForm(true);
        setData(data);
    };
    const deleteRowData = (rowData: PaymentmethodMutationType) => {
        if (rowData.status === BASIC_ENUM.INACTIVE) {
            showSnackbar({
                children: "Ph????ng th???c thanh to??n n??y hi???n ???? ng???ng ho???t ?????ng!",
                severity: "error",
            });
        } else {
            mutateDelete(
                {
                    id: rowData.id,
                    status: BASIC_ENUM.INACTIVE,
                },
                {
                    onSuccess: () => {
                        showSnackbar({
                            children: "X??a th??nh c??ng",
                            severity: "success",
                        });
                    },
                    onError: () => {
                        showSnackbar({
                            children: "X??a th???t b???i",
                            severity: "error",
                        });
                    },
                }
            );
        }
    };

    const [isViewAction, setViewAction] = useState<boolean>(false);

    const columns: IColumn[] = [
        {
            field: "id",
            title: "STT",
            index: 1,
            type: "index",
            disableSort: true,
            disableFilter: true,
        },
        {
            field: "name",
            title: "T??n ph????ng th???c thanh to??n",
            index: 2,
            type: "string",
        },
        {
            field: "status",
            title: "Tr???ng th??i",
            index: 3,
            type: "enum",
            enumValue: [
                {
                    key: BASIC_ENUM.ACTIVE,
                    value: "??ang ho???t ?????ng",
                },
                {
                    key: BASIC_ENUM.INACTIVE,
                    value: "Kh??ng ho???t ?????ng",
                },
            ],
            render: (status: string) => {
                if (status === BASIC_ENUM.ACTIVE) {
                    return (
                        <ChipBase
                            color={"success"}
                            label={"??ang ho???t ?????ng"}
                            size="small"
                            sx={{
                                fontSize: 14,
                                minWidth: "150px",
                            }}
                        />
                    );
                }
                return (
                    <ChipBase
                        color={"error"}
                        label={"Kh??ng ho???t ?????ng"}
                        size="small"
                        sx={{
                            fontSize: 14,
                            minWidth: "150px",
                        }}
                    />
                );
            },
        },
    ];

    const handleClose = useCallback(
        (type: "SAVE" | "CANCEL", data?: PaymentmethodMutationType, clearErrors?: Function) => {
            if (type === "SAVE") {
                if (data) {
                    if (!data.id) {
                        data.id = undefined;
                        mutateCreate(data, {
                            onSuccess: () => {
                                showSnackbar({
                                    children: "Th??m m???i th??nh c??ng",
                                    severity: "success",
                                });
                            },
                            onError: () => {
                                showSnackbar({
                                    children: "Th??m m???i th???t b???i",
                                    severity: "error",
                                });
                            },
                        });
                    } else {
                        mutateUpdate(data, {
                            onSuccess: () => {
                                showSnackbar({
                                    children: "Ch???nh s???a th??nh c??ng",
                                    severity: "success",
                                });
                            },
                            onError: () => {
                                showSnackbar({
                                    children: "Ch???nh s???a th???t b???i",
                                    severity: "error",
                                });
                            },
                        });
                    }
                }
            }
            if (clearErrors) {
                clearErrors();
            }
            resetData();
            setViewAction(false);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    const viewRowData = (rowData: PaymentmethodMutationType) => {
        const data: PaymentmethodMutationType = {
            name: rowData.name,
            status: rowData.status,
            id: rowData.id,
        };
        setIsOpenForm(true);
        setData(data);
        setViewAction(true);
    };

    const resetData = () => {
        setData(initData);
        setIsOpenForm(false);
    };

    return (
        <>
            <PaymentMethodForm
                opened={isOpenForm}
                isView={isViewAction}
                data={data}
                handleClose={handleClose}
            />
            <CRUDTable
                queryKey="PaymentMethodQuery"
                columns={columns}
                title={"Qu???n l?? c??c ph????ng th???c thanh to??n"}
                entity="paymentmethod"
                firstOrderField="id"
                sort
                enableFilter
                maxWidth="100%"
                action={{
                    onView: (rowData: PaymentmethodMutationType) => viewRowData(rowData),
                    onAdd: () => addRowData(),
                    onEdit: (rowData: PaymentmethodMutationType) => updateRowData(rowData),
                    onDeleteRecord: (rowData: PaymentmethodMutationType) => deleteRowData(rowData),
                }}
            />
        </>
    );
};

export default PaymentMethod;
