import CellTableTypography from "components/CellTableTypography";
import CRUDTable from "components/Table";
import { IColumn } from "components/Table/models";
import { NextPage } from "next";
import React, { useEffect } from "react";

const Role: NextPage = () => {
    useEffect(() => {
        const userJson = localStorage.getItem("user");
        if (!userJson) {
            window.location.replace("https://binhtruongthanh.tech/login");
        }
    }, []);

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
            title: "Tên phân quyền",
            index: 2,
            type: "string",
            render: (name: string) => {
                if (name === "ADMIN") {
                    return <CellTableTypography>Quản trị viên</CellTableTypography>;
                } else if (name === "MANAGER") {
                    return <CellTableTypography>Quản lý viên</CellTableTypography>;
                } else if (name === "CASHIER") {
                    return <CellTableTypography>Thu ngân</CellTableTypography>;
                } else if (name === "WAITER") {
                    return <CellTableTypography>Bồi bàn</CellTableTypography>;
                } else {
                    return <CellTableTypography>Nhân viên bếp</CellTableTypography>;
                }
            },
        },
    ];

    return (
        <>
            <CRUDTable
                queryKey="RoleQuery"
                columns={columns}
                title={"Danh sách phân quyền của hệ thống"}
                entity="role"
                firstOrderField="id"
                sort
                enableFilter
                maxWidth="100%"
            />
        </>
    );
};

export default Role;
