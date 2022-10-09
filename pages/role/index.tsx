import CRUDTable from "components/Table";
import { IColumn } from "components/Table/models";
import { NextPage } from "next";
import React, { useEffect } from "react";
import router from "next/router";

const Role: NextPage = () => {
    useEffect(() => {
        const userJson = localStorage.getItem("user");
        if (!userJson) {
            router.push("/login");
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
            field: "id",
            title: "Mã hệ thống",
            index: 2,
        },
        {
            field: "name",
            title: "Tên phân quyền",
            index: 3,
            type: "string",
        },
    ];

    return (
        <>
            <CRUDTable
                queryKey="RoleQuery"
                columns={columns}
                title={"Quản lý các phân quyền của hệ thống"}
                entity="role"
                firstOrderField="id"
                sort
                enableFilter
            />
        </>
    );
};

export default Role;