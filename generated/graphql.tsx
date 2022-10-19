export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    basic_status: any;
    bill_status: any;
    check_status: any;
    checkdetail_status: any;
    date: any;
    float8: any;
    table_status: any;
    time: any;
    timestamp: any;
    user_status: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["Boolean"]>;
    _gt?: InputMaybe<Scalars["Boolean"]>;
    _gte?: InputMaybe<Scalars["Boolean"]>;
    _in?: InputMaybe<Array<Scalars["Boolean"]>>;
    _is_null?: InputMaybe<Scalars["Boolean"]>;
    _lt?: InputMaybe<Scalars["Boolean"]>;
    _lte?: InputMaybe<Scalars["Boolean"]>;
    _neq?: InputMaybe<Scalars["Boolean"]>;
    _nin?: InputMaybe<Array<Scalars["Boolean"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["Int"]>;
    _gt?: InputMaybe<Scalars["Int"]>;
    _gte?: InputMaybe<Scalars["Int"]>;
    _in?: InputMaybe<Array<Scalars["Int"]>>;
    _is_null?: InputMaybe<Scalars["Boolean"]>;
    _lt?: InputMaybe<Scalars["Int"]>;
    _lte?: InputMaybe<Scalars["Int"]>;
    _neq?: InputMaybe<Scalars["Int"]>;
    _nin?: InputMaybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["String"]>;
    _gt?: InputMaybe<Scalars["String"]>;
    _gte?: InputMaybe<Scalars["String"]>;
    /** does the column match the given case-insensitive pattern */
    _ilike?: InputMaybe<Scalars["String"]>;
    _in?: InputMaybe<Array<Scalars["String"]>>;
    /** does the column match the given POSIX regular expression, case insensitive */
    _iregex?: InputMaybe<Scalars["String"]>;
    _is_null?: InputMaybe<Scalars["Boolean"]>;
    /** does the column match the given pattern */
    _like?: InputMaybe<Scalars["String"]>;
    _lt?: InputMaybe<Scalars["String"]>;
    _lte?: InputMaybe<Scalars["String"]>;
    _neq?: InputMaybe<Scalars["String"]>;
    /** does the column NOT match the given case-insensitive pattern */
    _nilike?: InputMaybe<Scalars["String"]>;
    _nin?: InputMaybe<Array<Scalars["String"]>>;
    /** does the column NOT match the given POSIX regular expression, case insensitive */
    _niregex?: InputMaybe<Scalars["String"]>;
    /** does the column NOT match the given pattern */
    _nlike?: InputMaybe<Scalars["String"]>;
    /** does the column NOT match the given POSIX regular expression, case sensitive */
    _nregex?: InputMaybe<Scalars["String"]>;
    /** does the column NOT match the given SQL regular expression */
    _nsimilar?: InputMaybe<Scalars["String"]>;
    /** does the column match the given POSIX regular expression, case sensitive */
    _regex?: InputMaybe<Scalars["String"]>;
    /** does the column match the given SQL regular expression */
    _similar?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "account" */
export type Account = {
    __typename?: "account";
    avatar?: Maybe<Scalars["String"]>;
    /** An array relationship */
    checks: Array<Check>;
    /** An aggregate relationship */
    checks_aggregate: Check_Aggregate;
    email: Scalars["String"];
    fullname: Scalars["String"];
    id: Scalars["Int"];
    password: Scalars["String"];
    phone: Scalars["String"];
    /** An object relationship */
    role: Role;
    roleid: Scalars["Int"];
    status?: Maybe<Scalars["user_status"]>;
    username: Scalars["String"];
};

/** columns and relationships of "account" */
export type AccountChecksArgs = {
    distinct_on?: InputMaybe<Array<Check_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Check_Order_By>>;
    where?: InputMaybe<Check_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountChecks_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Check_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Check_Order_By>>;
    where?: InputMaybe<Check_Bool_Exp>;
};

/** aggregated selection of "account" */
export type Account_Aggregate = {
    __typename?: "account_aggregate";
    aggregate?: Maybe<Account_Aggregate_Fields>;
    nodes: Array<Account>;
};

/** aggregate fields of "account" */
export type Account_Aggregate_Fields = {
    __typename?: "account_aggregate_fields";
    avg?: Maybe<Account_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Account_Max_Fields>;
    min?: Maybe<Account_Min_Fields>;
    stddev?: Maybe<Account_Stddev_Fields>;
    stddev_pop?: Maybe<Account_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Account_Stddev_Samp_Fields>;
    sum?: Maybe<Account_Sum_Fields>;
    var_pop?: Maybe<Account_Var_Pop_Fields>;
    var_samp?: Maybe<Account_Var_Samp_Fields>;
    variance?: Maybe<Account_Variance_Fields>;
};

/** aggregate fields of "account" */
export type Account_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Account_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "account" */
export type Account_Aggregate_Order_By = {
    avg?: InputMaybe<Account_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Account_Max_Order_By>;
    min?: InputMaybe<Account_Min_Order_By>;
    stddev?: InputMaybe<Account_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Account_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Account_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Account_Sum_Order_By>;
    var_pop?: InputMaybe<Account_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Account_Var_Samp_Order_By>;
    variance?: InputMaybe<Account_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "account" */
export type Account_Arr_Rel_Insert_Input = {
    data: Array<Account_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Account_On_Conflict>;
};

/** aggregate avg on columns */
export type Account_Avg_Fields = {
    __typename?: "account_avg_fields";
    id?: Maybe<Scalars["Float"]>;
    roleid?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "account" */
export type Account_Avg_Order_By = {
    id?: InputMaybe<Order_By>;
    roleid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
    _and?: InputMaybe<Array<Account_Bool_Exp>>;
    _not?: InputMaybe<Account_Bool_Exp>;
    _or?: InputMaybe<Array<Account_Bool_Exp>>;
    avatar?: InputMaybe<String_Comparison_Exp>;
    checks?: InputMaybe<Check_Bool_Exp>;
    email?: InputMaybe<String_Comparison_Exp>;
    fullname?: InputMaybe<String_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    password?: InputMaybe<String_Comparison_Exp>;
    phone?: InputMaybe<String_Comparison_Exp>;
    role?: InputMaybe<Role_Bool_Exp>;
    roleid?: InputMaybe<Int_Comparison_Exp>;
    status?: InputMaybe<User_Status_Comparison_Exp>;
    username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "account" */
export enum Account_Constraint {
    /** unique or primary key constraint */
    AccountPkey = "account_pkey",
    /** unique or primary key constraint */
    AccountUsernameKey = "account_username_key",
}

/** input type for incrementing numeric columns in table "account" */
export type Account_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    roleid?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "account" */
export type Account_Insert_Input = {
    avatar?: InputMaybe<Scalars["String"]>;
    checks?: InputMaybe<Check_Arr_Rel_Insert_Input>;
    email?: InputMaybe<Scalars["String"]>;
    fullname?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["Int"]>;
    password?: InputMaybe<Scalars["String"]>;
    phone?: InputMaybe<Scalars["String"]>;
    role?: InputMaybe<Role_Obj_Rel_Insert_Input>;
    roleid?: InputMaybe<Scalars["Int"]>;
    status?: InputMaybe<Scalars["user_status"]>;
    username?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Account_Max_Fields = {
    __typename?: "account_max_fields";
    avatar?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    fullname?: Maybe<Scalars["String"]>;
    id?: Maybe<Scalars["Int"]>;
    password?: Maybe<Scalars["String"]>;
    phone?: Maybe<Scalars["String"]>;
    roleid?: Maybe<Scalars["Int"]>;
    username?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "account" */
export type Account_Max_Order_By = {
    avatar?: InputMaybe<Order_By>;
    email?: InputMaybe<Order_By>;
    fullname?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    password?: InputMaybe<Order_By>;
    phone?: InputMaybe<Order_By>;
    roleid?: InputMaybe<Order_By>;
    username?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Account_Min_Fields = {
    __typename?: "account_min_fields";
    avatar?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    fullname?: Maybe<Scalars["String"]>;
    id?: Maybe<Scalars["Int"]>;
    password?: Maybe<Scalars["String"]>;
    phone?: Maybe<Scalars["String"]>;
    roleid?: Maybe<Scalars["Int"]>;
    username?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "account" */
export type Account_Min_Order_By = {
    avatar?: InputMaybe<Order_By>;
    email?: InputMaybe<Order_By>;
    fullname?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    password?: InputMaybe<Order_By>;
    phone?: InputMaybe<Order_By>;
    roleid?: InputMaybe<Order_By>;
    username?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "account" */
export type Account_Mutation_Response = {
    __typename?: "account_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Account>;
};

/** input type for inserting object relation for remote table "account" */
export type Account_Obj_Rel_Insert_Input = {
    data: Account_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Account_On_Conflict>;
};

/** on_conflict condition type for table "account" */
export type Account_On_Conflict = {
    constraint: Account_Constraint;
    update_columns?: Array<Account_Update_Column>;
    where?: InputMaybe<Account_Bool_Exp>;
};

/** Ordering options when selecting data from "account". */
export type Account_Order_By = {
    avatar?: InputMaybe<Order_By>;
    checks_aggregate?: InputMaybe<Check_Aggregate_Order_By>;
    email?: InputMaybe<Order_By>;
    fullname?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    password?: InputMaybe<Order_By>;
    phone?: InputMaybe<Order_By>;
    role?: InputMaybe<Role_Order_By>;
    roleid?: InputMaybe<Order_By>;
    status?: InputMaybe<Order_By>;
    username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: account */
export type Account_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "account" */
export enum Account_Select_Column {
    /** column name */
    Avatar = "avatar",
    /** column name */
    Email = "email",
    /** column name */
    Fullname = "fullname",
    /** column name */
    Id = "id",
    /** column name */
    Password = "password",
    /** column name */
    Phone = "phone",
    /** column name */
    Roleid = "roleid",
    /** column name */
    Status = "status",
    /** column name */
    Username = "username",
}

/** input type for updating data in table "account" */
export type Account_Set_Input = {
    avatar?: InputMaybe<Scalars["String"]>;
    email?: InputMaybe<Scalars["String"]>;
    fullname?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["Int"]>;
    password?: InputMaybe<Scalars["String"]>;
    phone?: InputMaybe<Scalars["String"]>;
    roleid?: InputMaybe<Scalars["Int"]>;
    status?: InputMaybe<Scalars["user_status"]>;
    username?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Account_Stddev_Fields = {
    __typename?: "account_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
    roleid?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "account" */
export type Account_Stddev_Order_By = {
    id?: InputMaybe<Order_By>;
    roleid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Account_Stddev_Pop_Fields = {
    __typename?: "account_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    roleid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "account" */
export type Account_Stddev_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    roleid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Account_Stddev_Samp_Fields = {
    __typename?: "account_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    roleid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "account" */
export type Account_Stddev_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    roleid?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Account_Sum_Fields = {
    __typename?: "account_sum_fields";
    id?: Maybe<Scalars["Int"]>;
    roleid?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "account" */
export type Account_Sum_Order_By = {
    id?: InputMaybe<Order_By>;
    roleid?: InputMaybe<Order_By>;
};

/** update columns of table "account" */
export enum Account_Update_Column {
    /** column name */
    Avatar = "avatar",
    /** column name */
    Email = "email",
    /** column name */
    Fullname = "fullname",
    /** column name */
    Id = "id",
    /** column name */
    Password = "password",
    /** column name */
    Phone = "phone",
    /** column name */
    Roleid = "roleid",
    /** column name */
    Status = "status",
    /** column name */
    Username = "username",
}

/** aggregate var_pop on columns */
export type Account_Var_Pop_Fields = {
    __typename?: "account_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    roleid?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "account" */
export type Account_Var_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    roleid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Account_Var_Samp_Fields = {
    __typename?: "account_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    roleid?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "account" */
export type Account_Var_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    roleid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Account_Variance_Fields = {
    __typename?: "account_variance_fields";
    id?: Maybe<Scalars["Float"]>;
    roleid?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "account" */
export type Account_Variance_Order_By = {
    id?: InputMaybe<Order_By>;
    roleid?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "basic_status". All fields are combined with logical 'AND'. */
export type Basic_Status_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["basic_status"]>;
    _gt?: InputMaybe<Scalars["basic_status"]>;
    _gte?: InputMaybe<Scalars["basic_status"]>;
    _in?: InputMaybe<Array<Scalars["basic_status"]>>;
    _is_null?: InputMaybe<Scalars["Boolean"]>;
    _lt?: InputMaybe<Scalars["basic_status"]>;
    _lte?: InputMaybe<Scalars["basic_status"]>;
    _neq?: InputMaybe<Scalars["basic_status"]>;
    _nin?: InputMaybe<Array<Scalars["basic_status"]>>;
};

/** columns and relationships of "bill" */
export type Bill = {
    __typename?: "bill";
    /** An array relationship */
    billdetails: Array<Billdetail>;
    /** An aggregate relationship */
    billdetails_aggregate: Billdetail_Aggregate;
    billno: Scalars["String"];
    /** An array relationship */
    billpayments: Array<Billpayment>;
    /** An aggregate relationship */
    billpayments_aggregate: Billpayment_Aggregate;
    /** An object relationship */
    check: Check;
    checkid: Scalars["Int"];
    creationtime: Scalars["timestamp"];
    creatorid: Scalars["Int"];
    guestname: Scalars["String"];
    id: Scalars["Int"];
    note?: Maybe<Scalars["String"]>;
    status: Scalars["bill_status"];
    totalamount: Scalars["Int"];
    totaltax: Scalars["Int"];
    updaterid?: Maybe<Scalars["Int"]>;
    updatetime?: Maybe<Scalars["timestamp"]>;
};

/** columns and relationships of "bill" */
export type BillBilldetailsArgs = {
    distinct_on?: InputMaybe<Array<Billdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Billdetail_Order_By>>;
    where?: InputMaybe<Billdetail_Bool_Exp>;
};

/** columns and relationships of "bill" */
export type BillBilldetails_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Billdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Billdetail_Order_By>>;
    where?: InputMaybe<Billdetail_Bool_Exp>;
};

/** columns and relationships of "bill" */
export type BillBillpaymentsArgs = {
    distinct_on?: InputMaybe<Array<Billpayment_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Billpayment_Order_By>>;
    where?: InputMaybe<Billpayment_Bool_Exp>;
};

/** columns and relationships of "bill" */
export type BillBillpayments_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Billpayment_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Billpayment_Order_By>>;
    where?: InputMaybe<Billpayment_Bool_Exp>;
};

/** aggregated selection of "bill" */
export type Bill_Aggregate = {
    __typename?: "bill_aggregate";
    aggregate?: Maybe<Bill_Aggregate_Fields>;
    nodes: Array<Bill>;
};

/** aggregate fields of "bill" */
export type Bill_Aggregate_Fields = {
    __typename?: "bill_aggregate_fields";
    avg?: Maybe<Bill_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Bill_Max_Fields>;
    min?: Maybe<Bill_Min_Fields>;
    stddev?: Maybe<Bill_Stddev_Fields>;
    stddev_pop?: Maybe<Bill_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Bill_Stddev_Samp_Fields>;
    sum?: Maybe<Bill_Sum_Fields>;
    var_pop?: Maybe<Bill_Var_Pop_Fields>;
    var_samp?: Maybe<Bill_Var_Samp_Fields>;
    variance?: Maybe<Bill_Variance_Fields>;
};

/** aggregate fields of "bill" */
export type Bill_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Bill_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "bill" */
export type Bill_Aggregate_Order_By = {
    avg?: InputMaybe<Bill_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Bill_Max_Order_By>;
    min?: InputMaybe<Bill_Min_Order_By>;
    stddev?: InputMaybe<Bill_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Bill_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Bill_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Bill_Sum_Order_By>;
    var_pop?: InputMaybe<Bill_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Bill_Var_Samp_Order_By>;
    variance?: InputMaybe<Bill_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "bill" */
export type Bill_Arr_Rel_Insert_Input = {
    data: Array<Bill_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Bill_On_Conflict>;
};

/** aggregate avg on columns */
export type Bill_Avg_Fields = {
    __typename?: "bill_avg_fields";
    checkid?: Maybe<Scalars["Float"]>;
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    totalamount?: Maybe<Scalars["Float"]>;
    totaltax?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "bill" */
export type Bill_Avg_Order_By = {
    checkid?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "bill". All fields are combined with a logical 'AND'. */
export type Bill_Bool_Exp = {
    _and?: InputMaybe<Array<Bill_Bool_Exp>>;
    _not?: InputMaybe<Bill_Bool_Exp>;
    _or?: InputMaybe<Array<Bill_Bool_Exp>>;
    billdetails?: InputMaybe<Billdetail_Bool_Exp>;
    billno?: InputMaybe<String_Comparison_Exp>;
    billpayments?: InputMaybe<Billpayment_Bool_Exp>;
    check?: InputMaybe<Check_Bool_Exp>;
    checkid?: InputMaybe<Int_Comparison_Exp>;
    creationtime?: InputMaybe<Timestamp_Comparison_Exp>;
    creatorid?: InputMaybe<Int_Comparison_Exp>;
    guestname?: InputMaybe<String_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    note?: InputMaybe<String_Comparison_Exp>;
    status?: InputMaybe<Bill_Status_Comparison_Exp>;
    totalamount?: InputMaybe<Int_Comparison_Exp>;
    totaltax?: InputMaybe<Int_Comparison_Exp>;
    updaterid?: InputMaybe<Int_Comparison_Exp>;
    updatetime?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "bill" */
export enum Bill_Constraint {
    /** unique or primary key constraint */
    BillBillnoKey = "bill_billno_key",
    /** unique or primary key constraint */
    BillPkey = "bill_pkey",
}

/** input type for incrementing numeric columns in table "bill" */
export type Bill_Inc_Input = {
    checkid?: InputMaybe<Scalars["Int"]>;
    creatorid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    totalamount?: InputMaybe<Scalars["Int"]>;
    totaltax?: InputMaybe<Scalars["Int"]>;
    updaterid?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "bill" */
export type Bill_Insert_Input = {
    billdetails?: InputMaybe<Billdetail_Arr_Rel_Insert_Input>;
    billno?: InputMaybe<Scalars["String"]>;
    billpayments?: InputMaybe<Billpayment_Arr_Rel_Insert_Input>;
    check?: InputMaybe<Check_Obj_Rel_Insert_Input>;
    checkid?: InputMaybe<Scalars["Int"]>;
    creationtime?: InputMaybe<Scalars["timestamp"]>;
    creatorid?: InputMaybe<Scalars["Int"]>;
    guestname?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["Int"]>;
    note?: InputMaybe<Scalars["String"]>;
    status?: InputMaybe<Scalars["bill_status"]>;
    totalamount?: InputMaybe<Scalars["Int"]>;
    totaltax?: InputMaybe<Scalars["Int"]>;
    updaterid?: InputMaybe<Scalars["Int"]>;
    updatetime?: InputMaybe<Scalars["timestamp"]>;
};

/** aggregate max on columns */
export type Bill_Max_Fields = {
    __typename?: "bill_max_fields";
    billno?: Maybe<Scalars["String"]>;
    checkid?: Maybe<Scalars["Int"]>;
    creationtime?: Maybe<Scalars["timestamp"]>;
    creatorid?: Maybe<Scalars["Int"]>;
    guestname?: Maybe<Scalars["String"]>;
    id?: Maybe<Scalars["Int"]>;
    note?: Maybe<Scalars["String"]>;
    totalamount?: Maybe<Scalars["Int"]>;
    totaltax?: Maybe<Scalars["Int"]>;
    updaterid?: Maybe<Scalars["Int"]>;
    updatetime?: Maybe<Scalars["timestamp"]>;
};

/** order by max() on columns of table "bill" */
export type Bill_Max_Order_By = {
    billno?: InputMaybe<Order_By>;
    checkid?: InputMaybe<Order_By>;
    creationtime?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    guestname?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    note?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
    updatetime?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bill_Min_Fields = {
    __typename?: "bill_min_fields";
    billno?: Maybe<Scalars["String"]>;
    checkid?: Maybe<Scalars["Int"]>;
    creationtime?: Maybe<Scalars["timestamp"]>;
    creatorid?: Maybe<Scalars["Int"]>;
    guestname?: Maybe<Scalars["String"]>;
    id?: Maybe<Scalars["Int"]>;
    note?: Maybe<Scalars["String"]>;
    totalamount?: Maybe<Scalars["Int"]>;
    totaltax?: Maybe<Scalars["Int"]>;
    updaterid?: Maybe<Scalars["Int"]>;
    updatetime?: Maybe<Scalars["timestamp"]>;
};

/** order by min() on columns of table "bill" */
export type Bill_Min_Order_By = {
    billno?: InputMaybe<Order_By>;
    checkid?: InputMaybe<Order_By>;
    creationtime?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    guestname?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    note?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
    updatetime?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bill" */
export type Bill_Mutation_Response = {
    __typename?: "bill_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Bill>;
};

/** input type for inserting object relation for remote table "bill" */
export type Bill_Obj_Rel_Insert_Input = {
    data: Bill_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Bill_On_Conflict>;
};

/** on_conflict condition type for table "bill" */
export type Bill_On_Conflict = {
    constraint: Bill_Constraint;
    update_columns?: Array<Bill_Update_Column>;
    where?: InputMaybe<Bill_Bool_Exp>;
};

/** Ordering options when selecting data from "bill". */
export type Bill_Order_By = {
    billdetails_aggregate?: InputMaybe<Billdetail_Aggregate_Order_By>;
    billno?: InputMaybe<Order_By>;
    billpayments_aggregate?: InputMaybe<Billpayment_Aggregate_Order_By>;
    check?: InputMaybe<Check_Order_By>;
    checkid?: InputMaybe<Order_By>;
    creationtime?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    guestname?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    note?: InputMaybe<Order_By>;
    status?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
    updatetime?: InputMaybe<Order_By>;
};

/** primary key columns input for table: bill */
export type Bill_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "bill" */
export enum Bill_Select_Column {
    /** column name */
    Billno = "billno",
    /** column name */
    Checkid = "checkid",
    /** column name */
    Creationtime = "creationtime",
    /** column name */
    Creatorid = "creatorid",
    /** column name */
    Guestname = "guestname",
    /** column name */
    Id = "id",
    /** column name */
    Note = "note",
    /** column name */
    Status = "status",
    /** column name */
    Totalamount = "totalamount",
    /** column name */
    Totaltax = "totaltax",
    /** column name */
    Updaterid = "updaterid",
    /** column name */
    Updatetime = "updatetime",
}

/** input type for updating data in table "bill" */
export type Bill_Set_Input = {
    billno?: InputMaybe<Scalars["String"]>;
    checkid?: InputMaybe<Scalars["Int"]>;
    creationtime?: InputMaybe<Scalars["timestamp"]>;
    creatorid?: InputMaybe<Scalars["Int"]>;
    guestname?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["Int"]>;
    note?: InputMaybe<Scalars["String"]>;
    status?: InputMaybe<Scalars["bill_status"]>;
    totalamount?: InputMaybe<Scalars["Int"]>;
    totaltax?: InputMaybe<Scalars["Int"]>;
    updaterid?: InputMaybe<Scalars["Int"]>;
    updatetime?: InputMaybe<Scalars["timestamp"]>;
};

/** Boolean expression to compare columns of type "bill_status". All fields are combined with logical 'AND'. */
export type Bill_Status_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["bill_status"]>;
    _gt?: InputMaybe<Scalars["bill_status"]>;
    _gte?: InputMaybe<Scalars["bill_status"]>;
    _in?: InputMaybe<Array<Scalars["bill_status"]>>;
    _is_null?: InputMaybe<Scalars["Boolean"]>;
    _lt?: InputMaybe<Scalars["bill_status"]>;
    _lte?: InputMaybe<Scalars["bill_status"]>;
    _neq?: InputMaybe<Scalars["bill_status"]>;
    _nin?: InputMaybe<Array<Scalars["bill_status"]>>;
};

/** aggregate stddev on columns */
export type Bill_Stddev_Fields = {
    __typename?: "bill_stddev_fields";
    checkid?: Maybe<Scalars["Float"]>;
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    totalamount?: Maybe<Scalars["Float"]>;
    totaltax?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "bill" */
export type Bill_Stddev_Order_By = {
    checkid?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Bill_Stddev_Pop_Fields = {
    __typename?: "bill_stddev_pop_fields";
    checkid?: Maybe<Scalars["Float"]>;
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    totalamount?: Maybe<Scalars["Float"]>;
    totaltax?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "bill" */
export type Bill_Stddev_Pop_Order_By = {
    checkid?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Bill_Stddev_Samp_Fields = {
    __typename?: "bill_stddev_samp_fields";
    checkid?: Maybe<Scalars["Float"]>;
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    totalamount?: Maybe<Scalars["Float"]>;
    totaltax?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "bill" */
export type Bill_Stddev_Samp_Order_By = {
    checkid?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Bill_Sum_Fields = {
    __typename?: "bill_sum_fields";
    checkid?: Maybe<Scalars["Int"]>;
    creatorid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    totalamount?: Maybe<Scalars["Int"]>;
    totaltax?: Maybe<Scalars["Int"]>;
    updaterid?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "bill" */
export type Bill_Sum_Order_By = {
    checkid?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
};

/** update columns of table "bill" */
export enum Bill_Update_Column {
    /** column name */
    Billno = "billno",
    /** column name */
    Checkid = "checkid",
    /** column name */
    Creationtime = "creationtime",
    /** column name */
    Creatorid = "creatorid",
    /** column name */
    Guestname = "guestname",
    /** column name */
    Id = "id",
    /** column name */
    Note = "note",
    /** column name */
    Status = "status",
    /** column name */
    Totalamount = "totalamount",
    /** column name */
    Totaltax = "totaltax",
    /** column name */
    Updaterid = "updaterid",
    /** column name */
    Updatetime = "updatetime",
}

/** aggregate var_pop on columns */
export type Bill_Var_Pop_Fields = {
    __typename?: "bill_var_pop_fields";
    checkid?: Maybe<Scalars["Float"]>;
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    totalamount?: Maybe<Scalars["Float"]>;
    totaltax?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "bill" */
export type Bill_Var_Pop_Order_By = {
    checkid?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Bill_Var_Samp_Fields = {
    __typename?: "bill_var_samp_fields";
    checkid?: Maybe<Scalars["Float"]>;
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    totalamount?: Maybe<Scalars["Float"]>;
    totaltax?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "bill" */
export type Bill_Var_Samp_Order_By = {
    checkid?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Bill_Variance_Fields = {
    __typename?: "bill_variance_fields";
    checkid?: Maybe<Scalars["Float"]>;
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    totalamount?: Maybe<Scalars["Float"]>;
    totaltax?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "bill" */
export type Bill_Variance_Order_By = {
    checkid?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
};

/** columns and relationships of "billdetail" */
export type Billdetail = {
    __typename?: "billdetail";
    amount: Scalars["Int"];
    /** An object relationship */
    bill: Bill;
    billid: Scalars["Int"];
    id: Scalars["Int"];
    /** An object relationship */
    item: Item;
    itemid: Scalars["Int"];
    itemname: Scalars["String"];
    itemprice: Scalars["Int"];
    quantity: Scalars["float8"];
    taxamount: Scalars["Int"];
};

/** aggregated selection of "billdetail" */
export type Billdetail_Aggregate = {
    __typename?: "billdetail_aggregate";
    aggregate?: Maybe<Billdetail_Aggregate_Fields>;
    nodes: Array<Billdetail>;
};

/** aggregate fields of "billdetail" */
export type Billdetail_Aggregate_Fields = {
    __typename?: "billdetail_aggregate_fields";
    avg?: Maybe<Billdetail_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Billdetail_Max_Fields>;
    min?: Maybe<Billdetail_Min_Fields>;
    stddev?: Maybe<Billdetail_Stddev_Fields>;
    stddev_pop?: Maybe<Billdetail_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Billdetail_Stddev_Samp_Fields>;
    sum?: Maybe<Billdetail_Sum_Fields>;
    var_pop?: Maybe<Billdetail_Var_Pop_Fields>;
    var_samp?: Maybe<Billdetail_Var_Samp_Fields>;
    variance?: Maybe<Billdetail_Variance_Fields>;
};

/** aggregate fields of "billdetail" */
export type Billdetail_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Billdetail_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "billdetail" */
export type Billdetail_Aggregate_Order_By = {
    avg?: InputMaybe<Billdetail_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Billdetail_Max_Order_By>;
    min?: InputMaybe<Billdetail_Min_Order_By>;
    stddev?: InputMaybe<Billdetail_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Billdetail_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Billdetail_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Billdetail_Sum_Order_By>;
    var_pop?: InputMaybe<Billdetail_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Billdetail_Var_Samp_Order_By>;
    variance?: InputMaybe<Billdetail_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "billdetail" */
export type Billdetail_Arr_Rel_Insert_Input = {
    data: Array<Billdetail_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Billdetail_On_Conflict>;
};

/** aggregate avg on columns */
export type Billdetail_Avg_Fields = {
    __typename?: "billdetail_avg_fields";
    amount?: Maybe<Scalars["Float"]>;
    billid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    itemprice?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    taxamount?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "billdetail" */
export type Billdetail_Avg_Order_By = {
    amount?: InputMaybe<Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "billdetail". All fields are combined with a logical 'AND'. */
export type Billdetail_Bool_Exp = {
    _and?: InputMaybe<Array<Billdetail_Bool_Exp>>;
    _not?: InputMaybe<Billdetail_Bool_Exp>;
    _or?: InputMaybe<Array<Billdetail_Bool_Exp>>;
    amount?: InputMaybe<Int_Comparison_Exp>;
    bill?: InputMaybe<Bill_Bool_Exp>;
    billid?: InputMaybe<Int_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    item?: InputMaybe<Item_Bool_Exp>;
    itemid?: InputMaybe<Int_Comparison_Exp>;
    itemname?: InputMaybe<String_Comparison_Exp>;
    itemprice?: InputMaybe<Int_Comparison_Exp>;
    quantity?: InputMaybe<Float8_Comparison_Exp>;
    taxamount?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "billdetail" */
export enum Billdetail_Constraint {
    /** unique or primary key constraint */
    BilldetailPkey = "billdetail_pkey",
}

/** input type for incrementing numeric columns in table "billdetail" */
export type Billdetail_Inc_Input = {
    amount?: InputMaybe<Scalars["Int"]>;
    billid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    itemid?: InputMaybe<Scalars["Int"]>;
    itemprice?: InputMaybe<Scalars["Int"]>;
    quantity?: InputMaybe<Scalars["float8"]>;
    taxamount?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "billdetail" */
export type Billdetail_Insert_Input = {
    amount?: InputMaybe<Scalars["Int"]>;
    bill?: InputMaybe<Bill_Obj_Rel_Insert_Input>;
    billid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    item?: InputMaybe<Item_Obj_Rel_Insert_Input>;
    itemid?: InputMaybe<Scalars["Int"]>;
    itemname?: InputMaybe<Scalars["String"]>;
    itemprice?: InputMaybe<Scalars["Int"]>;
    quantity?: InputMaybe<Scalars["float8"]>;
    taxamount?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Billdetail_Max_Fields = {
    __typename?: "billdetail_max_fields";
    amount?: Maybe<Scalars["Int"]>;
    billid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    itemid?: Maybe<Scalars["Int"]>;
    itemname?: Maybe<Scalars["String"]>;
    itemprice?: Maybe<Scalars["Int"]>;
    quantity?: Maybe<Scalars["float8"]>;
    taxamount?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "billdetail" */
export type Billdetail_Max_Order_By = {
    amount?: InputMaybe<Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemname?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Billdetail_Min_Fields = {
    __typename?: "billdetail_min_fields";
    amount?: Maybe<Scalars["Int"]>;
    billid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    itemid?: Maybe<Scalars["Int"]>;
    itemname?: Maybe<Scalars["String"]>;
    itemprice?: Maybe<Scalars["Int"]>;
    quantity?: Maybe<Scalars["float8"]>;
    taxamount?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "billdetail" */
export type Billdetail_Min_Order_By = {
    amount?: InputMaybe<Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemname?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "billdetail" */
export type Billdetail_Mutation_Response = {
    __typename?: "billdetail_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Billdetail>;
};

/** on_conflict condition type for table "billdetail" */
export type Billdetail_On_Conflict = {
    constraint: Billdetail_Constraint;
    update_columns?: Array<Billdetail_Update_Column>;
    where?: InputMaybe<Billdetail_Bool_Exp>;
};

/** Ordering options when selecting data from "billdetail". */
export type Billdetail_Order_By = {
    amount?: InputMaybe<Order_By>;
    bill?: InputMaybe<Bill_Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    item?: InputMaybe<Item_Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemname?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
};

/** primary key columns input for table: billdetail */
export type Billdetail_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "billdetail" */
export enum Billdetail_Select_Column {
    /** column name */
    Amount = "amount",
    /** column name */
    Billid = "billid",
    /** column name */
    Id = "id",
    /** column name */
    Itemid = "itemid",
    /** column name */
    Itemname = "itemname",
    /** column name */
    Itemprice = "itemprice",
    /** column name */
    Quantity = "quantity",
    /** column name */
    Taxamount = "taxamount",
}

/** input type for updating data in table "billdetail" */
export type Billdetail_Set_Input = {
    amount?: InputMaybe<Scalars["Int"]>;
    billid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    itemid?: InputMaybe<Scalars["Int"]>;
    itemname?: InputMaybe<Scalars["String"]>;
    itemprice?: InputMaybe<Scalars["Int"]>;
    quantity?: InputMaybe<Scalars["float8"]>;
    taxamount?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Billdetail_Stddev_Fields = {
    __typename?: "billdetail_stddev_fields";
    amount?: Maybe<Scalars["Float"]>;
    billid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    itemprice?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    taxamount?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "billdetail" */
export type Billdetail_Stddev_Order_By = {
    amount?: InputMaybe<Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Billdetail_Stddev_Pop_Fields = {
    __typename?: "billdetail_stddev_pop_fields";
    amount?: Maybe<Scalars["Float"]>;
    billid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    itemprice?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    taxamount?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "billdetail" */
export type Billdetail_Stddev_Pop_Order_By = {
    amount?: InputMaybe<Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Billdetail_Stddev_Samp_Fields = {
    __typename?: "billdetail_stddev_samp_fields";
    amount?: Maybe<Scalars["Float"]>;
    billid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    itemprice?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    taxamount?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "billdetail" */
export type Billdetail_Stddev_Samp_Order_By = {
    amount?: InputMaybe<Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Billdetail_Sum_Fields = {
    __typename?: "billdetail_sum_fields";
    amount?: Maybe<Scalars["Int"]>;
    billid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    itemid?: Maybe<Scalars["Int"]>;
    itemprice?: Maybe<Scalars["Int"]>;
    quantity?: Maybe<Scalars["float8"]>;
    taxamount?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "billdetail" */
export type Billdetail_Sum_Order_By = {
    amount?: InputMaybe<Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
};

/** update columns of table "billdetail" */
export enum Billdetail_Update_Column {
    /** column name */
    Amount = "amount",
    /** column name */
    Billid = "billid",
    /** column name */
    Id = "id",
    /** column name */
    Itemid = "itemid",
    /** column name */
    Itemname = "itemname",
    /** column name */
    Itemprice = "itemprice",
    /** column name */
    Quantity = "quantity",
    /** column name */
    Taxamount = "taxamount",
}

/** aggregate var_pop on columns */
export type Billdetail_Var_Pop_Fields = {
    __typename?: "billdetail_var_pop_fields";
    amount?: Maybe<Scalars["Float"]>;
    billid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    itemprice?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    taxamount?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "billdetail" */
export type Billdetail_Var_Pop_Order_By = {
    amount?: InputMaybe<Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Billdetail_Var_Samp_Fields = {
    __typename?: "billdetail_var_samp_fields";
    amount?: Maybe<Scalars["Float"]>;
    billid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    itemprice?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    taxamount?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "billdetail" */
export type Billdetail_Var_Samp_Order_By = {
    amount?: InputMaybe<Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Billdetail_Variance_Fields = {
    __typename?: "billdetail_variance_fields";
    amount?: Maybe<Scalars["Float"]>;
    billid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    itemprice?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    taxamount?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "billdetail" */
export type Billdetail_Variance_Order_By = {
    amount?: InputMaybe<Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
};

/** columns and relationships of "billpayment" */
export type Billpayment = {
    __typename?: "billpayment";
    amountreceive: Scalars["Int"];
    /** An object relationship */
    bill: Bill;
    billid: Scalars["Int"];
    id: Scalars["Int"];
    /** An object relationship */
    paymentmethod: Paymentmethod;
    paymentmethodid: Scalars["Int"];
    paymentmethodname: Scalars["String"];
};

/** aggregated selection of "billpayment" */
export type Billpayment_Aggregate = {
    __typename?: "billpayment_aggregate";
    aggregate?: Maybe<Billpayment_Aggregate_Fields>;
    nodes: Array<Billpayment>;
};

/** aggregate fields of "billpayment" */
export type Billpayment_Aggregate_Fields = {
    __typename?: "billpayment_aggregate_fields";
    avg?: Maybe<Billpayment_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Billpayment_Max_Fields>;
    min?: Maybe<Billpayment_Min_Fields>;
    stddev?: Maybe<Billpayment_Stddev_Fields>;
    stddev_pop?: Maybe<Billpayment_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Billpayment_Stddev_Samp_Fields>;
    sum?: Maybe<Billpayment_Sum_Fields>;
    var_pop?: Maybe<Billpayment_Var_Pop_Fields>;
    var_samp?: Maybe<Billpayment_Var_Samp_Fields>;
    variance?: Maybe<Billpayment_Variance_Fields>;
};

/** aggregate fields of "billpayment" */
export type Billpayment_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Billpayment_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "billpayment" */
export type Billpayment_Aggregate_Order_By = {
    avg?: InputMaybe<Billpayment_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Billpayment_Max_Order_By>;
    min?: InputMaybe<Billpayment_Min_Order_By>;
    stddev?: InputMaybe<Billpayment_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Billpayment_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Billpayment_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Billpayment_Sum_Order_By>;
    var_pop?: InputMaybe<Billpayment_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Billpayment_Var_Samp_Order_By>;
    variance?: InputMaybe<Billpayment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "billpayment" */
export type Billpayment_Arr_Rel_Insert_Input = {
    data: Array<Billpayment_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Billpayment_On_Conflict>;
};

/** aggregate avg on columns */
export type Billpayment_Avg_Fields = {
    __typename?: "billpayment_avg_fields";
    amountreceive?: Maybe<Scalars["Float"]>;
    billid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    paymentmethodid?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "billpayment" */
export type Billpayment_Avg_Order_By = {
    amountreceive?: InputMaybe<Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    paymentmethodid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "billpayment". All fields are combined with a logical 'AND'. */
export type Billpayment_Bool_Exp = {
    _and?: InputMaybe<Array<Billpayment_Bool_Exp>>;
    _not?: InputMaybe<Billpayment_Bool_Exp>;
    _or?: InputMaybe<Array<Billpayment_Bool_Exp>>;
    amountreceive?: InputMaybe<Int_Comparison_Exp>;
    bill?: InputMaybe<Bill_Bool_Exp>;
    billid?: InputMaybe<Int_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    paymentmethod?: InputMaybe<Paymentmethod_Bool_Exp>;
    paymentmethodid?: InputMaybe<Int_Comparison_Exp>;
    paymentmethodname?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "billpayment" */
export enum Billpayment_Constraint {
    /** unique or primary key constraint */
    BillpaymentPkey = "billpayment_pkey",
}

/** input type for incrementing numeric columns in table "billpayment" */
export type Billpayment_Inc_Input = {
    amountreceive?: InputMaybe<Scalars["Int"]>;
    billid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    paymentmethodid?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "billpayment" */
export type Billpayment_Insert_Input = {
    amountreceive?: InputMaybe<Scalars["Int"]>;
    bill?: InputMaybe<Bill_Obj_Rel_Insert_Input>;
    billid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    paymentmethod?: InputMaybe<Paymentmethod_Obj_Rel_Insert_Input>;
    paymentmethodid?: InputMaybe<Scalars["Int"]>;
    paymentmethodname?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Billpayment_Max_Fields = {
    __typename?: "billpayment_max_fields";
    amountreceive?: Maybe<Scalars["Int"]>;
    billid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    paymentmethodid?: Maybe<Scalars["Int"]>;
    paymentmethodname?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "billpayment" */
export type Billpayment_Max_Order_By = {
    amountreceive?: InputMaybe<Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    paymentmethodid?: InputMaybe<Order_By>;
    paymentmethodname?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Billpayment_Min_Fields = {
    __typename?: "billpayment_min_fields";
    amountreceive?: Maybe<Scalars["Int"]>;
    billid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    paymentmethodid?: Maybe<Scalars["Int"]>;
    paymentmethodname?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "billpayment" */
export type Billpayment_Min_Order_By = {
    amountreceive?: InputMaybe<Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    paymentmethodid?: InputMaybe<Order_By>;
    paymentmethodname?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "billpayment" */
export type Billpayment_Mutation_Response = {
    __typename?: "billpayment_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Billpayment>;
};

/** on_conflict condition type for table "billpayment" */
export type Billpayment_On_Conflict = {
    constraint: Billpayment_Constraint;
    update_columns?: Array<Billpayment_Update_Column>;
    where?: InputMaybe<Billpayment_Bool_Exp>;
};

/** Ordering options when selecting data from "billpayment". */
export type Billpayment_Order_By = {
    amountreceive?: InputMaybe<Order_By>;
    bill?: InputMaybe<Bill_Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    paymentmethod?: InputMaybe<Paymentmethod_Order_By>;
    paymentmethodid?: InputMaybe<Order_By>;
    paymentmethodname?: InputMaybe<Order_By>;
};

/** primary key columns input for table: billpayment */
export type Billpayment_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "billpayment" */
export enum Billpayment_Select_Column {
    /** column name */
    Amountreceive = "amountreceive",
    /** column name */
    Billid = "billid",
    /** column name */
    Id = "id",
    /** column name */
    Paymentmethodid = "paymentmethodid",
    /** column name */
    Paymentmethodname = "paymentmethodname",
}

/** input type for updating data in table "billpayment" */
export type Billpayment_Set_Input = {
    amountreceive?: InputMaybe<Scalars["Int"]>;
    billid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    paymentmethodid?: InputMaybe<Scalars["Int"]>;
    paymentmethodname?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Billpayment_Stddev_Fields = {
    __typename?: "billpayment_stddev_fields";
    amountreceive?: Maybe<Scalars["Float"]>;
    billid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    paymentmethodid?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "billpayment" */
export type Billpayment_Stddev_Order_By = {
    amountreceive?: InputMaybe<Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    paymentmethodid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Billpayment_Stddev_Pop_Fields = {
    __typename?: "billpayment_stddev_pop_fields";
    amountreceive?: Maybe<Scalars["Float"]>;
    billid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    paymentmethodid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "billpayment" */
export type Billpayment_Stddev_Pop_Order_By = {
    amountreceive?: InputMaybe<Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    paymentmethodid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Billpayment_Stddev_Samp_Fields = {
    __typename?: "billpayment_stddev_samp_fields";
    amountreceive?: Maybe<Scalars["Float"]>;
    billid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    paymentmethodid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "billpayment" */
export type Billpayment_Stddev_Samp_Order_By = {
    amountreceive?: InputMaybe<Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    paymentmethodid?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Billpayment_Sum_Fields = {
    __typename?: "billpayment_sum_fields";
    amountreceive?: Maybe<Scalars["Int"]>;
    billid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    paymentmethodid?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "billpayment" */
export type Billpayment_Sum_Order_By = {
    amountreceive?: InputMaybe<Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    paymentmethodid?: InputMaybe<Order_By>;
};

/** update columns of table "billpayment" */
export enum Billpayment_Update_Column {
    /** column name */
    Amountreceive = "amountreceive",
    /** column name */
    Billid = "billid",
    /** column name */
    Id = "id",
    /** column name */
    Paymentmethodid = "paymentmethodid",
    /** column name */
    Paymentmethodname = "paymentmethodname",
}

/** aggregate var_pop on columns */
export type Billpayment_Var_Pop_Fields = {
    __typename?: "billpayment_var_pop_fields";
    amountreceive?: Maybe<Scalars["Float"]>;
    billid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    paymentmethodid?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "billpayment" */
export type Billpayment_Var_Pop_Order_By = {
    amountreceive?: InputMaybe<Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    paymentmethodid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Billpayment_Var_Samp_Fields = {
    __typename?: "billpayment_var_samp_fields";
    amountreceive?: Maybe<Scalars["Float"]>;
    billid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    paymentmethodid?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "billpayment" */
export type Billpayment_Var_Samp_Order_By = {
    amountreceive?: InputMaybe<Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    paymentmethodid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Billpayment_Variance_Fields = {
    __typename?: "billpayment_variance_fields";
    amountreceive?: Maybe<Scalars["Float"]>;
    billid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    paymentmethodid?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "billpayment" */
export type Billpayment_Variance_Order_By = {
    amountreceive?: InputMaybe<Order_By>;
    billid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    paymentmethodid?: InputMaybe<Order_By>;
};

/** columns and relationships of "check" */
export type Check = {
    __typename?: "check";
    /** An object relationship */
    account: Account;
    /** An array relationship */
    bills: Array<Bill>;
    /** An aggregate relationship */
    bills_aggregate: Bill_Aggregate;
    /** An array relationship */
    checkdetails: Array<Checkdetail>;
    /** An aggregate relationship */
    checkdetails_aggregate: Checkdetail_Aggregate;
    checkno: Scalars["String"];
    cover: Scalars["Int"];
    creationtime: Scalars["timestamp"];
    creatorid: Scalars["Int"];
    guestname: Scalars["String"];
    id: Scalars["Int"];
    note?: Maybe<Scalars["String"]>;
    /** An object relationship */
    shift: Shift;
    shiftid: Scalars["Int"];
    status: Scalars["check_status"];
    /** An object relationship */
    table?: Maybe<Table>;
    tableid?: Maybe<Scalars["Int"]>;
    totalamount: Scalars["Int"];
    totaltax: Scalars["Int"];
    updaterid?: Maybe<Scalars["Int"]>;
    updatetime?: Maybe<Scalars["timestamp"]>;
    /** An object relationship */
    voidreason?: Maybe<Voidreason>;
    voidreasonid?: Maybe<Scalars["Int"]>;
    waiterid: Scalars["Int"];
};

/** columns and relationships of "check" */
export type CheckBillsArgs = {
    distinct_on?: InputMaybe<Array<Bill_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Bill_Order_By>>;
    where?: InputMaybe<Bill_Bool_Exp>;
};

/** columns and relationships of "check" */
export type CheckBills_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Bill_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Bill_Order_By>>;
    where?: InputMaybe<Bill_Bool_Exp>;
};

/** columns and relationships of "check" */
export type CheckCheckdetailsArgs = {
    distinct_on?: InputMaybe<Array<Checkdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Checkdetail_Order_By>>;
    where?: InputMaybe<Checkdetail_Bool_Exp>;
};

/** columns and relationships of "check" */
export type CheckCheckdetails_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Checkdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Checkdetail_Order_By>>;
    where?: InputMaybe<Checkdetail_Bool_Exp>;
};

/** aggregated selection of "check" */
export type Check_Aggregate = {
    __typename?: "check_aggregate";
    aggregate?: Maybe<Check_Aggregate_Fields>;
    nodes: Array<Check>;
};

/** aggregate fields of "check" */
export type Check_Aggregate_Fields = {
    __typename?: "check_aggregate_fields";
    avg?: Maybe<Check_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Check_Max_Fields>;
    min?: Maybe<Check_Min_Fields>;
    stddev?: Maybe<Check_Stddev_Fields>;
    stddev_pop?: Maybe<Check_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Check_Stddev_Samp_Fields>;
    sum?: Maybe<Check_Sum_Fields>;
    var_pop?: Maybe<Check_Var_Pop_Fields>;
    var_samp?: Maybe<Check_Var_Samp_Fields>;
    variance?: Maybe<Check_Variance_Fields>;
};

/** aggregate fields of "check" */
export type Check_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Check_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "check" */
export type Check_Aggregate_Order_By = {
    avg?: InputMaybe<Check_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Check_Max_Order_By>;
    min?: InputMaybe<Check_Min_Order_By>;
    stddev?: InputMaybe<Check_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Check_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Check_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Check_Sum_Order_By>;
    var_pop?: InputMaybe<Check_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Check_Var_Samp_Order_By>;
    variance?: InputMaybe<Check_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "check" */
export type Check_Arr_Rel_Insert_Input = {
    data: Array<Check_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Check_On_Conflict>;
};

/** aggregate avg on columns */
export type Check_Avg_Fields = {
    __typename?: "check_avg_fields";
    cover?: Maybe<Scalars["Float"]>;
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    shiftid?: Maybe<Scalars["Float"]>;
    tableid?: Maybe<Scalars["Float"]>;
    totalamount?: Maybe<Scalars["Float"]>;
    totaltax?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
    voidreasonid?: Maybe<Scalars["Float"]>;
    waiterid?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "check" */
export type Check_Avg_Order_By = {
    cover?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    shiftid?: InputMaybe<Order_By>;
    tableid?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
    waiterid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "check". All fields are combined with a logical 'AND'. */
export type Check_Bool_Exp = {
    _and?: InputMaybe<Array<Check_Bool_Exp>>;
    _not?: InputMaybe<Check_Bool_Exp>;
    _or?: InputMaybe<Array<Check_Bool_Exp>>;
    account?: InputMaybe<Account_Bool_Exp>;
    bills?: InputMaybe<Bill_Bool_Exp>;
    checkdetails?: InputMaybe<Checkdetail_Bool_Exp>;
    checkno?: InputMaybe<String_Comparison_Exp>;
    cover?: InputMaybe<Int_Comparison_Exp>;
    creationtime?: InputMaybe<Timestamp_Comparison_Exp>;
    creatorid?: InputMaybe<Int_Comparison_Exp>;
    guestname?: InputMaybe<String_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    note?: InputMaybe<String_Comparison_Exp>;
    shift?: InputMaybe<Shift_Bool_Exp>;
    shiftid?: InputMaybe<Int_Comparison_Exp>;
    status?: InputMaybe<Check_Status_Comparison_Exp>;
    table?: InputMaybe<Table_Bool_Exp>;
    tableid?: InputMaybe<Int_Comparison_Exp>;
    totalamount?: InputMaybe<Int_Comparison_Exp>;
    totaltax?: InputMaybe<Int_Comparison_Exp>;
    updaterid?: InputMaybe<Int_Comparison_Exp>;
    updatetime?: InputMaybe<Timestamp_Comparison_Exp>;
    voidreason?: InputMaybe<Voidreason_Bool_Exp>;
    voidreasonid?: InputMaybe<Int_Comparison_Exp>;
    waiterid?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "check" */
export enum Check_Constraint {
    /** unique or primary key constraint */
    CheckChecknoKey = "check_checkno_key",
    /** unique or primary key constraint */
    CheckPkey = "check_pkey",
}

/** input type for incrementing numeric columns in table "check" */
export type Check_Inc_Input = {
    cover?: InputMaybe<Scalars["Int"]>;
    creatorid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    shiftid?: InputMaybe<Scalars["Int"]>;
    tableid?: InputMaybe<Scalars["Int"]>;
    totalamount?: InputMaybe<Scalars["Int"]>;
    totaltax?: InputMaybe<Scalars["Int"]>;
    updaterid?: InputMaybe<Scalars["Int"]>;
    voidreasonid?: InputMaybe<Scalars["Int"]>;
    waiterid?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "check" */
export type Check_Insert_Input = {
    account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
    bills?: InputMaybe<Bill_Arr_Rel_Insert_Input>;
    checkdetails?: InputMaybe<Checkdetail_Arr_Rel_Insert_Input>;
    checkno?: InputMaybe<Scalars["String"]>;
    cover?: InputMaybe<Scalars["Int"]>;
    creationtime?: InputMaybe<Scalars["timestamp"]>;
    creatorid?: InputMaybe<Scalars["Int"]>;
    guestname?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["Int"]>;
    note?: InputMaybe<Scalars["String"]>;
    shift?: InputMaybe<Shift_Obj_Rel_Insert_Input>;
    shiftid?: InputMaybe<Scalars["Int"]>;
    status?: InputMaybe<Scalars["check_status"]>;
    table?: InputMaybe<Table_Obj_Rel_Insert_Input>;
    tableid?: InputMaybe<Scalars["Int"]>;
    totalamount?: InputMaybe<Scalars["Int"]>;
    totaltax?: InputMaybe<Scalars["Int"]>;
    updaterid?: InputMaybe<Scalars["Int"]>;
    updatetime?: InputMaybe<Scalars["timestamp"]>;
    voidreason?: InputMaybe<Voidreason_Obj_Rel_Insert_Input>;
    voidreasonid?: InputMaybe<Scalars["Int"]>;
    waiterid?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Check_Max_Fields = {
    __typename?: "check_max_fields";
    checkno?: Maybe<Scalars["String"]>;
    cover?: Maybe<Scalars["Int"]>;
    creationtime?: Maybe<Scalars["timestamp"]>;
    creatorid?: Maybe<Scalars["Int"]>;
    guestname?: Maybe<Scalars["String"]>;
    id?: Maybe<Scalars["Int"]>;
    note?: Maybe<Scalars["String"]>;
    shiftid?: Maybe<Scalars["Int"]>;
    tableid?: Maybe<Scalars["Int"]>;
    totalamount?: Maybe<Scalars["Int"]>;
    totaltax?: Maybe<Scalars["Int"]>;
    updaterid?: Maybe<Scalars["Int"]>;
    updatetime?: Maybe<Scalars["timestamp"]>;
    voidreasonid?: Maybe<Scalars["Int"]>;
    waiterid?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "check" */
export type Check_Max_Order_By = {
    checkno?: InputMaybe<Order_By>;
    cover?: InputMaybe<Order_By>;
    creationtime?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    guestname?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    note?: InputMaybe<Order_By>;
    shiftid?: InputMaybe<Order_By>;
    tableid?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
    updatetime?: InputMaybe<Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
    waiterid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Check_Min_Fields = {
    __typename?: "check_min_fields";
    checkno?: Maybe<Scalars["String"]>;
    cover?: Maybe<Scalars["Int"]>;
    creationtime?: Maybe<Scalars["timestamp"]>;
    creatorid?: Maybe<Scalars["Int"]>;
    guestname?: Maybe<Scalars["String"]>;
    id?: Maybe<Scalars["Int"]>;
    note?: Maybe<Scalars["String"]>;
    shiftid?: Maybe<Scalars["Int"]>;
    tableid?: Maybe<Scalars["Int"]>;
    totalamount?: Maybe<Scalars["Int"]>;
    totaltax?: Maybe<Scalars["Int"]>;
    updaterid?: Maybe<Scalars["Int"]>;
    updatetime?: Maybe<Scalars["timestamp"]>;
    voidreasonid?: Maybe<Scalars["Int"]>;
    waiterid?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "check" */
export type Check_Min_Order_By = {
    checkno?: InputMaybe<Order_By>;
    cover?: InputMaybe<Order_By>;
    creationtime?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    guestname?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    note?: InputMaybe<Order_By>;
    shiftid?: InputMaybe<Order_By>;
    tableid?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
    updatetime?: InputMaybe<Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
    waiterid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "check" */
export type Check_Mutation_Response = {
    __typename?: "check_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Check>;
};

/** input type for inserting object relation for remote table "check" */
export type Check_Obj_Rel_Insert_Input = {
    data: Check_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Check_On_Conflict>;
};

/** on_conflict condition type for table "check" */
export type Check_On_Conflict = {
    constraint: Check_Constraint;
    update_columns?: Array<Check_Update_Column>;
    where?: InputMaybe<Check_Bool_Exp>;
};

/** Ordering options when selecting data from "check". */
export type Check_Order_By = {
    account?: InputMaybe<Account_Order_By>;
    bills_aggregate?: InputMaybe<Bill_Aggregate_Order_By>;
    checkdetails_aggregate?: InputMaybe<Checkdetail_Aggregate_Order_By>;
    checkno?: InputMaybe<Order_By>;
    cover?: InputMaybe<Order_By>;
    creationtime?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    guestname?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    note?: InputMaybe<Order_By>;
    shift?: InputMaybe<Shift_Order_By>;
    shiftid?: InputMaybe<Order_By>;
    status?: InputMaybe<Order_By>;
    table?: InputMaybe<Table_Order_By>;
    tableid?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
    updatetime?: InputMaybe<Order_By>;
    voidreason?: InputMaybe<Voidreason_Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
    waiterid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: check */
export type Check_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "check" */
export enum Check_Select_Column {
    /** column name */
    Checkno = "checkno",
    /** column name */
    Cover = "cover",
    /** column name */
    Creationtime = "creationtime",
    /** column name */
    Creatorid = "creatorid",
    /** column name */
    Guestname = "guestname",
    /** column name */
    Id = "id",
    /** column name */
    Note = "note",
    /** column name */
    Shiftid = "shiftid",
    /** column name */
    Status = "status",
    /** column name */
    Tableid = "tableid",
    /** column name */
    Totalamount = "totalamount",
    /** column name */
    Totaltax = "totaltax",
    /** column name */
    Updaterid = "updaterid",
    /** column name */
    Updatetime = "updatetime",
    /** column name */
    Voidreasonid = "voidreasonid",
    /** column name */
    Waiterid = "waiterid",
}

/** input type for updating data in table "check" */
export type Check_Set_Input = {
    checkno?: InputMaybe<Scalars["String"]>;
    cover?: InputMaybe<Scalars["Int"]>;
    creationtime?: InputMaybe<Scalars["timestamp"]>;
    creatorid?: InputMaybe<Scalars["Int"]>;
    guestname?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["Int"]>;
    note?: InputMaybe<Scalars["String"]>;
    shiftid?: InputMaybe<Scalars["Int"]>;
    status?: InputMaybe<Scalars["check_status"]>;
    tableid?: InputMaybe<Scalars["Int"]>;
    totalamount?: InputMaybe<Scalars["Int"]>;
    totaltax?: InputMaybe<Scalars["Int"]>;
    updaterid?: InputMaybe<Scalars["Int"]>;
    updatetime?: InputMaybe<Scalars["timestamp"]>;
    voidreasonid?: InputMaybe<Scalars["Int"]>;
    waiterid?: InputMaybe<Scalars["Int"]>;
};

/** Boolean expression to compare columns of type "check_status". All fields are combined with logical 'AND'. */
export type Check_Status_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["check_status"]>;
    _gt?: InputMaybe<Scalars["check_status"]>;
    _gte?: InputMaybe<Scalars["check_status"]>;
    _in?: InputMaybe<Array<Scalars["check_status"]>>;
    _is_null?: InputMaybe<Scalars["Boolean"]>;
    _lt?: InputMaybe<Scalars["check_status"]>;
    _lte?: InputMaybe<Scalars["check_status"]>;
    _neq?: InputMaybe<Scalars["check_status"]>;
    _nin?: InputMaybe<Array<Scalars["check_status"]>>;
};

/** aggregate stddev on columns */
export type Check_Stddev_Fields = {
    __typename?: "check_stddev_fields";
    cover?: Maybe<Scalars["Float"]>;
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    shiftid?: Maybe<Scalars["Float"]>;
    tableid?: Maybe<Scalars["Float"]>;
    totalamount?: Maybe<Scalars["Float"]>;
    totaltax?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
    voidreasonid?: Maybe<Scalars["Float"]>;
    waiterid?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "check" */
export type Check_Stddev_Order_By = {
    cover?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    shiftid?: InputMaybe<Order_By>;
    tableid?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
    waiterid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Check_Stddev_Pop_Fields = {
    __typename?: "check_stddev_pop_fields";
    cover?: Maybe<Scalars["Float"]>;
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    shiftid?: Maybe<Scalars["Float"]>;
    tableid?: Maybe<Scalars["Float"]>;
    totalamount?: Maybe<Scalars["Float"]>;
    totaltax?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
    voidreasonid?: Maybe<Scalars["Float"]>;
    waiterid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "check" */
export type Check_Stddev_Pop_Order_By = {
    cover?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    shiftid?: InputMaybe<Order_By>;
    tableid?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
    waiterid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Check_Stddev_Samp_Fields = {
    __typename?: "check_stddev_samp_fields";
    cover?: Maybe<Scalars["Float"]>;
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    shiftid?: Maybe<Scalars["Float"]>;
    tableid?: Maybe<Scalars["Float"]>;
    totalamount?: Maybe<Scalars["Float"]>;
    totaltax?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
    voidreasonid?: Maybe<Scalars["Float"]>;
    waiterid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "check" */
export type Check_Stddev_Samp_Order_By = {
    cover?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    shiftid?: InputMaybe<Order_By>;
    tableid?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
    waiterid?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Check_Sum_Fields = {
    __typename?: "check_sum_fields";
    cover?: Maybe<Scalars["Int"]>;
    creatorid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    shiftid?: Maybe<Scalars["Int"]>;
    tableid?: Maybe<Scalars["Int"]>;
    totalamount?: Maybe<Scalars["Int"]>;
    totaltax?: Maybe<Scalars["Int"]>;
    updaterid?: Maybe<Scalars["Int"]>;
    voidreasonid?: Maybe<Scalars["Int"]>;
    waiterid?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "check" */
export type Check_Sum_Order_By = {
    cover?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    shiftid?: InputMaybe<Order_By>;
    tableid?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
    waiterid?: InputMaybe<Order_By>;
};

/** update columns of table "check" */
export enum Check_Update_Column {
    /** column name */
    Checkno = "checkno",
    /** column name */
    Cover = "cover",
    /** column name */
    Creationtime = "creationtime",
    /** column name */
    Creatorid = "creatorid",
    /** column name */
    Guestname = "guestname",
    /** column name */
    Id = "id",
    /** column name */
    Note = "note",
    /** column name */
    Shiftid = "shiftid",
    /** column name */
    Status = "status",
    /** column name */
    Tableid = "tableid",
    /** column name */
    Totalamount = "totalamount",
    /** column name */
    Totaltax = "totaltax",
    /** column name */
    Updaterid = "updaterid",
    /** column name */
    Updatetime = "updatetime",
    /** column name */
    Voidreasonid = "voidreasonid",
    /** column name */
    Waiterid = "waiterid",
}

/** aggregate var_pop on columns */
export type Check_Var_Pop_Fields = {
    __typename?: "check_var_pop_fields";
    cover?: Maybe<Scalars["Float"]>;
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    shiftid?: Maybe<Scalars["Float"]>;
    tableid?: Maybe<Scalars["Float"]>;
    totalamount?: Maybe<Scalars["Float"]>;
    totaltax?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
    voidreasonid?: Maybe<Scalars["Float"]>;
    waiterid?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "check" */
export type Check_Var_Pop_Order_By = {
    cover?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    shiftid?: InputMaybe<Order_By>;
    tableid?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
    waiterid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Check_Var_Samp_Fields = {
    __typename?: "check_var_samp_fields";
    cover?: Maybe<Scalars["Float"]>;
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    shiftid?: Maybe<Scalars["Float"]>;
    tableid?: Maybe<Scalars["Float"]>;
    totalamount?: Maybe<Scalars["Float"]>;
    totaltax?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
    voidreasonid?: Maybe<Scalars["Float"]>;
    waiterid?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "check" */
export type Check_Var_Samp_Order_By = {
    cover?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    shiftid?: InputMaybe<Order_By>;
    tableid?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
    waiterid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Check_Variance_Fields = {
    __typename?: "check_variance_fields";
    cover?: Maybe<Scalars["Float"]>;
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    shiftid?: Maybe<Scalars["Float"]>;
    tableid?: Maybe<Scalars["Float"]>;
    totalamount?: Maybe<Scalars["Float"]>;
    totaltax?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
    voidreasonid?: Maybe<Scalars["Float"]>;
    waiterid?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "check" */
export type Check_Variance_Order_By = {
    cover?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    shiftid?: InputMaybe<Order_By>;
    tableid?: InputMaybe<Order_By>;
    totalamount?: InputMaybe<Order_By>;
    totaltax?: InputMaybe<Order_By>;
    updaterid?: InputMaybe<Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
    waiterid?: InputMaybe<Order_By>;
};

/** columns and relationships of "checkdetail" */
export type Checkdetail = {
    __typename?: "checkdetail";
    amount: Scalars["Int"];
    /** An object relationship */
    check: Check;
    checkid: Scalars["Int"];
    /** An array relationship */
    checkitemspecialrequests: Array<Checkitemspecialrequest>;
    /** An aggregate relationship */
    checkitemspecialrequests_aggregate: Checkitemspecialrequest_Aggregate;
    id: Scalars["Int"];
    isreminded: Scalars["Boolean"];
    /** An object relationship */
    item: Item;
    itemid: Scalars["Int"];
    itemprice: Scalars["Int"];
    note?: Maybe<Scalars["String"]>;
    quantity: Scalars["float8"];
    status: Scalars["checkdetail_status"];
    taxamount: Scalars["Int"];
    /** An object relationship */
    voidreason?: Maybe<Voidreason>;
    voidreasonid?: Maybe<Scalars["Int"]>;
};

/** columns and relationships of "checkdetail" */
export type CheckdetailCheckitemspecialrequestsArgs = {
    distinct_on?: InputMaybe<Array<Checkitemspecialrequest_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Checkitemspecialrequest_Order_By>>;
    where?: InputMaybe<Checkitemspecialrequest_Bool_Exp>;
};

/** columns and relationships of "checkdetail" */
export type CheckdetailCheckitemspecialrequests_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Checkitemspecialrequest_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Checkitemspecialrequest_Order_By>>;
    where?: InputMaybe<Checkitemspecialrequest_Bool_Exp>;
};

/** aggregated selection of "checkdetail" */
export type Checkdetail_Aggregate = {
    __typename?: "checkdetail_aggregate";
    aggregate?: Maybe<Checkdetail_Aggregate_Fields>;
    nodes: Array<Checkdetail>;
};

/** aggregate fields of "checkdetail" */
export type Checkdetail_Aggregate_Fields = {
    __typename?: "checkdetail_aggregate_fields";
    avg?: Maybe<Checkdetail_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Checkdetail_Max_Fields>;
    min?: Maybe<Checkdetail_Min_Fields>;
    stddev?: Maybe<Checkdetail_Stddev_Fields>;
    stddev_pop?: Maybe<Checkdetail_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Checkdetail_Stddev_Samp_Fields>;
    sum?: Maybe<Checkdetail_Sum_Fields>;
    var_pop?: Maybe<Checkdetail_Var_Pop_Fields>;
    var_samp?: Maybe<Checkdetail_Var_Samp_Fields>;
    variance?: Maybe<Checkdetail_Variance_Fields>;
};

/** aggregate fields of "checkdetail" */
export type Checkdetail_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Checkdetail_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "checkdetail" */
export type Checkdetail_Aggregate_Order_By = {
    avg?: InputMaybe<Checkdetail_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Checkdetail_Max_Order_By>;
    min?: InputMaybe<Checkdetail_Min_Order_By>;
    stddev?: InputMaybe<Checkdetail_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Checkdetail_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Checkdetail_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Checkdetail_Sum_Order_By>;
    var_pop?: InputMaybe<Checkdetail_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Checkdetail_Var_Samp_Order_By>;
    variance?: InputMaybe<Checkdetail_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "checkdetail" */
export type Checkdetail_Arr_Rel_Insert_Input = {
    data: Array<Checkdetail_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Checkdetail_On_Conflict>;
};

/** aggregate avg on columns */
export type Checkdetail_Avg_Fields = {
    __typename?: "checkdetail_avg_fields";
    amount?: Maybe<Scalars["Float"]>;
    checkid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    itemprice?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    taxamount?: Maybe<Scalars["Float"]>;
    voidreasonid?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "checkdetail" */
export type Checkdetail_Avg_Order_By = {
    amount?: InputMaybe<Order_By>;
    checkid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "checkdetail". All fields are combined with a logical 'AND'. */
export type Checkdetail_Bool_Exp = {
    _and?: InputMaybe<Array<Checkdetail_Bool_Exp>>;
    _not?: InputMaybe<Checkdetail_Bool_Exp>;
    _or?: InputMaybe<Array<Checkdetail_Bool_Exp>>;
    amount?: InputMaybe<Int_Comparison_Exp>;
    check?: InputMaybe<Check_Bool_Exp>;
    checkid?: InputMaybe<Int_Comparison_Exp>;
    checkitemspecialrequests?: InputMaybe<Checkitemspecialrequest_Bool_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    isreminded?: InputMaybe<Boolean_Comparison_Exp>;
    item?: InputMaybe<Item_Bool_Exp>;
    itemid?: InputMaybe<Int_Comparison_Exp>;
    itemprice?: InputMaybe<Int_Comparison_Exp>;
    note?: InputMaybe<String_Comparison_Exp>;
    quantity?: InputMaybe<Float8_Comparison_Exp>;
    status?: InputMaybe<Checkdetail_Status_Comparison_Exp>;
    taxamount?: InputMaybe<Int_Comparison_Exp>;
    voidreason?: InputMaybe<Voidreason_Bool_Exp>;
    voidreasonid?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "checkdetail" */
export enum Checkdetail_Constraint {
    /** unique or primary key constraint */
    CheckdetailPkey = "checkdetail_pkey",
}

/** input type for incrementing numeric columns in table "checkdetail" */
export type Checkdetail_Inc_Input = {
    amount?: InputMaybe<Scalars["Int"]>;
    checkid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    itemid?: InputMaybe<Scalars["Int"]>;
    itemprice?: InputMaybe<Scalars["Int"]>;
    quantity?: InputMaybe<Scalars["float8"]>;
    taxamount?: InputMaybe<Scalars["Int"]>;
    voidreasonid?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "checkdetail" */
export type Checkdetail_Insert_Input = {
    amount?: InputMaybe<Scalars["Int"]>;
    check?: InputMaybe<Check_Obj_Rel_Insert_Input>;
    checkid?: InputMaybe<Scalars["Int"]>;
    checkitemspecialrequests?: InputMaybe<Checkitemspecialrequest_Arr_Rel_Insert_Input>;
    id?: InputMaybe<Scalars["Int"]>;
    isreminded?: InputMaybe<Scalars["Boolean"]>;
    item?: InputMaybe<Item_Obj_Rel_Insert_Input>;
    itemid?: InputMaybe<Scalars["Int"]>;
    itemprice?: InputMaybe<Scalars["Int"]>;
    note?: InputMaybe<Scalars["String"]>;
    quantity?: InputMaybe<Scalars["float8"]>;
    status?: InputMaybe<Scalars["checkdetail_status"]>;
    taxamount?: InputMaybe<Scalars["Int"]>;
    voidreason?: InputMaybe<Voidreason_Obj_Rel_Insert_Input>;
    voidreasonid?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Checkdetail_Max_Fields = {
    __typename?: "checkdetail_max_fields";
    amount?: Maybe<Scalars["Int"]>;
    checkid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    itemid?: Maybe<Scalars["Int"]>;
    itemprice?: Maybe<Scalars["Int"]>;
    note?: Maybe<Scalars["String"]>;
    quantity?: Maybe<Scalars["float8"]>;
    taxamount?: Maybe<Scalars["Int"]>;
    voidreasonid?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "checkdetail" */
export type Checkdetail_Max_Order_By = {
    amount?: InputMaybe<Order_By>;
    checkid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    note?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Checkdetail_Min_Fields = {
    __typename?: "checkdetail_min_fields";
    amount?: Maybe<Scalars["Int"]>;
    checkid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    itemid?: Maybe<Scalars["Int"]>;
    itemprice?: Maybe<Scalars["Int"]>;
    note?: Maybe<Scalars["String"]>;
    quantity?: Maybe<Scalars["float8"]>;
    taxamount?: Maybe<Scalars["Int"]>;
    voidreasonid?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "checkdetail" */
export type Checkdetail_Min_Order_By = {
    amount?: InputMaybe<Order_By>;
    checkid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    note?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "checkdetail" */
export type Checkdetail_Mutation_Response = {
    __typename?: "checkdetail_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Checkdetail>;
};

/** input type for inserting object relation for remote table "checkdetail" */
export type Checkdetail_Obj_Rel_Insert_Input = {
    data: Checkdetail_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Checkdetail_On_Conflict>;
};

/** on_conflict condition type for table "checkdetail" */
export type Checkdetail_On_Conflict = {
    constraint: Checkdetail_Constraint;
    update_columns?: Array<Checkdetail_Update_Column>;
    where?: InputMaybe<Checkdetail_Bool_Exp>;
};

/** Ordering options when selecting data from "checkdetail". */
export type Checkdetail_Order_By = {
    amount?: InputMaybe<Order_By>;
    check?: InputMaybe<Check_Order_By>;
    checkid?: InputMaybe<Order_By>;
    checkitemspecialrequests_aggregate?: InputMaybe<Checkitemspecialrequest_Aggregate_Order_By>;
    id?: InputMaybe<Order_By>;
    isreminded?: InputMaybe<Order_By>;
    item?: InputMaybe<Item_Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    note?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    status?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
    voidreason?: InputMaybe<Voidreason_Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: checkdetail */
export type Checkdetail_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "checkdetail" */
export enum Checkdetail_Select_Column {
    /** column name */
    Amount = "amount",
    /** column name */
    Checkid = "checkid",
    /** column name */
    Id = "id",
    /** column name */
    Isreminded = "isreminded",
    /** column name */
    Itemid = "itemid",
    /** column name */
    Itemprice = "itemprice",
    /** column name */
    Note = "note",
    /** column name */
    Quantity = "quantity",
    /** column name */
    Status = "status",
    /** column name */
    Taxamount = "taxamount",
    /** column name */
    Voidreasonid = "voidreasonid",
}

/** input type for updating data in table "checkdetail" */
export type Checkdetail_Set_Input = {
    amount?: InputMaybe<Scalars["Int"]>;
    checkid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    isreminded?: InputMaybe<Scalars["Boolean"]>;
    itemid?: InputMaybe<Scalars["Int"]>;
    itemprice?: InputMaybe<Scalars["Int"]>;
    note?: InputMaybe<Scalars["String"]>;
    quantity?: InputMaybe<Scalars["float8"]>;
    status?: InputMaybe<Scalars["checkdetail_status"]>;
    taxamount?: InputMaybe<Scalars["Int"]>;
    voidreasonid?: InputMaybe<Scalars["Int"]>;
};

/** Boolean expression to compare columns of type "checkdetail_status". All fields are combined with logical 'AND'. */
export type Checkdetail_Status_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["checkdetail_status"]>;
    _gt?: InputMaybe<Scalars["checkdetail_status"]>;
    _gte?: InputMaybe<Scalars["checkdetail_status"]>;
    _in?: InputMaybe<Array<Scalars["checkdetail_status"]>>;
    _is_null?: InputMaybe<Scalars["Boolean"]>;
    _lt?: InputMaybe<Scalars["checkdetail_status"]>;
    _lte?: InputMaybe<Scalars["checkdetail_status"]>;
    _neq?: InputMaybe<Scalars["checkdetail_status"]>;
    _nin?: InputMaybe<Array<Scalars["checkdetail_status"]>>;
};

/** aggregate stddev on columns */
export type Checkdetail_Stddev_Fields = {
    __typename?: "checkdetail_stddev_fields";
    amount?: Maybe<Scalars["Float"]>;
    checkid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    itemprice?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    taxamount?: Maybe<Scalars["Float"]>;
    voidreasonid?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "checkdetail" */
export type Checkdetail_Stddev_Order_By = {
    amount?: InputMaybe<Order_By>;
    checkid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Checkdetail_Stddev_Pop_Fields = {
    __typename?: "checkdetail_stddev_pop_fields";
    amount?: Maybe<Scalars["Float"]>;
    checkid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    itemprice?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    taxamount?: Maybe<Scalars["Float"]>;
    voidreasonid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "checkdetail" */
export type Checkdetail_Stddev_Pop_Order_By = {
    amount?: InputMaybe<Order_By>;
    checkid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Checkdetail_Stddev_Samp_Fields = {
    __typename?: "checkdetail_stddev_samp_fields";
    amount?: Maybe<Scalars["Float"]>;
    checkid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    itemprice?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    taxamount?: Maybe<Scalars["Float"]>;
    voidreasonid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "checkdetail" */
export type Checkdetail_Stddev_Samp_Order_By = {
    amount?: InputMaybe<Order_By>;
    checkid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Checkdetail_Sum_Fields = {
    __typename?: "checkdetail_sum_fields";
    amount?: Maybe<Scalars["Int"]>;
    checkid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    itemid?: Maybe<Scalars["Int"]>;
    itemprice?: Maybe<Scalars["Int"]>;
    quantity?: Maybe<Scalars["float8"]>;
    taxamount?: Maybe<Scalars["Int"]>;
    voidreasonid?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "checkdetail" */
export type Checkdetail_Sum_Order_By = {
    amount?: InputMaybe<Order_By>;
    checkid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
};

/** update columns of table "checkdetail" */
export enum Checkdetail_Update_Column {
    /** column name */
    Amount = "amount",
    /** column name */
    Checkid = "checkid",
    /** column name */
    Id = "id",
    /** column name */
    Isreminded = "isreminded",
    /** column name */
    Itemid = "itemid",
    /** column name */
    Itemprice = "itemprice",
    /** column name */
    Note = "note",
    /** column name */
    Quantity = "quantity",
    /** column name */
    Status = "status",
    /** column name */
    Taxamount = "taxamount",
    /** column name */
    Voidreasonid = "voidreasonid",
}

/** aggregate var_pop on columns */
export type Checkdetail_Var_Pop_Fields = {
    __typename?: "checkdetail_var_pop_fields";
    amount?: Maybe<Scalars["Float"]>;
    checkid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    itemprice?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    taxamount?: Maybe<Scalars["Float"]>;
    voidreasonid?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "checkdetail" */
export type Checkdetail_Var_Pop_Order_By = {
    amount?: InputMaybe<Order_By>;
    checkid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Checkdetail_Var_Samp_Fields = {
    __typename?: "checkdetail_var_samp_fields";
    amount?: Maybe<Scalars["Float"]>;
    checkid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    itemprice?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    taxamount?: Maybe<Scalars["Float"]>;
    voidreasonid?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "checkdetail" */
export type Checkdetail_Var_Samp_Order_By = {
    amount?: InputMaybe<Order_By>;
    checkid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Checkdetail_Variance_Fields = {
    __typename?: "checkdetail_variance_fields";
    amount?: Maybe<Scalars["Float"]>;
    checkid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    itemprice?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    taxamount?: Maybe<Scalars["Float"]>;
    voidreasonid?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "checkdetail" */
export type Checkdetail_Variance_Order_By = {
    amount?: InputMaybe<Order_By>;
    checkid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    itemprice?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    taxamount?: InputMaybe<Order_By>;
    voidreasonid?: InputMaybe<Order_By>;
};

/** columns and relationships of "checkitemspecialrequest" */
export type Checkitemspecialrequest = {
    __typename?: "checkitemspecialrequest";
    /** An object relationship */
    checkdetail: Checkdetail;
    checkdetailid: Scalars["Int"];
    id: Scalars["Int"];
    /** An object relationship */
    specialrequest: Specialrequest;
    specialrequestid: Scalars["Int"];
};

/** aggregated selection of "checkitemspecialrequest" */
export type Checkitemspecialrequest_Aggregate = {
    __typename?: "checkitemspecialrequest_aggregate";
    aggregate?: Maybe<Checkitemspecialrequest_Aggregate_Fields>;
    nodes: Array<Checkitemspecialrequest>;
};

/** aggregate fields of "checkitemspecialrequest" */
export type Checkitemspecialrequest_Aggregate_Fields = {
    __typename?: "checkitemspecialrequest_aggregate_fields";
    avg?: Maybe<Checkitemspecialrequest_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Checkitemspecialrequest_Max_Fields>;
    min?: Maybe<Checkitemspecialrequest_Min_Fields>;
    stddev?: Maybe<Checkitemspecialrequest_Stddev_Fields>;
    stddev_pop?: Maybe<Checkitemspecialrequest_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Checkitemspecialrequest_Stddev_Samp_Fields>;
    sum?: Maybe<Checkitemspecialrequest_Sum_Fields>;
    var_pop?: Maybe<Checkitemspecialrequest_Var_Pop_Fields>;
    var_samp?: Maybe<Checkitemspecialrequest_Var_Samp_Fields>;
    variance?: Maybe<Checkitemspecialrequest_Variance_Fields>;
};

/** aggregate fields of "checkitemspecialrequest" */
export type Checkitemspecialrequest_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Checkitemspecialrequest_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "checkitemspecialrequest" */
export type Checkitemspecialrequest_Aggregate_Order_By = {
    avg?: InputMaybe<Checkitemspecialrequest_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Checkitemspecialrequest_Max_Order_By>;
    min?: InputMaybe<Checkitemspecialrequest_Min_Order_By>;
    stddev?: InputMaybe<Checkitemspecialrequest_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Checkitemspecialrequest_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Checkitemspecialrequest_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Checkitemspecialrequest_Sum_Order_By>;
    var_pop?: InputMaybe<Checkitemspecialrequest_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Checkitemspecialrequest_Var_Samp_Order_By>;
    variance?: InputMaybe<Checkitemspecialrequest_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "checkitemspecialrequest" */
export type Checkitemspecialrequest_Arr_Rel_Insert_Input = {
    data: Array<Checkitemspecialrequest_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Checkitemspecialrequest_On_Conflict>;
};

/** aggregate avg on columns */
export type Checkitemspecialrequest_Avg_Fields = {
    __typename?: "checkitemspecialrequest_avg_fields";
    checkdetailid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    specialrequestid?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "checkitemspecialrequest" */
export type Checkitemspecialrequest_Avg_Order_By = {
    checkdetailid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    specialrequestid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "checkitemspecialrequest". All fields are combined with a logical 'AND'. */
export type Checkitemspecialrequest_Bool_Exp = {
    _and?: InputMaybe<Array<Checkitemspecialrequest_Bool_Exp>>;
    _not?: InputMaybe<Checkitemspecialrequest_Bool_Exp>;
    _or?: InputMaybe<Array<Checkitemspecialrequest_Bool_Exp>>;
    checkdetail?: InputMaybe<Checkdetail_Bool_Exp>;
    checkdetailid?: InputMaybe<Int_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    specialrequest?: InputMaybe<Specialrequest_Bool_Exp>;
    specialrequestid?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "checkitemspecialrequest" */
export enum Checkitemspecialrequest_Constraint {
    /** unique or primary key constraint */
    CheckitemspecialrequestPkey = "checkitemspecialrequest_pkey",
}

/** input type for incrementing numeric columns in table "checkitemspecialrequest" */
export type Checkitemspecialrequest_Inc_Input = {
    checkdetailid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    specialrequestid?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "checkitemspecialrequest" */
export type Checkitemspecialrequest_Insert_Input = {
    checkdetail?: InputMaybe<Checkdetail_Obj_Rel_Insert_Input>;
    checkdetailid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    specialrequest?: InputMaybe<Specialrequest_Obj_Rel_Insert_Input>;
    specialrequestid?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Checkitemspecialrequest_Max_Fields = {
    __typename?: "checkitemspecialrequest_max_fields";
    checkdetailid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    specialrequestid?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "checkitemspecialrequest" */
export type Checkitemspecialrequest_Max_Order_By = {
    checkdetailid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    specialrequestid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Checkitemspecialrequest_Min_Fields = {
    __typename?: "checkitemspecialrequest_min_fields";
    checkdetailid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    specialrequestid?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "checkitemspecialrequest" */
export type Checkitemspecialrequest_Min_Order_By = {
    checkdetailid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    specialrequestid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "checkitemspecialrequest" */
export type Checkitemspecialrequest_Mutation_Response = {
    __typename?: "checkitemspecialrequest_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Checkitemspecialrequest>;
};

/** on_conflict condition type for table "checkitemspecialrequest" */
export type Checkitemspecialrequest_On_Conflict = {
    constraint: Checkitemspecialrequest_Constraint;
    update_columns?: Array<Checkitemspecialrequest_Update_Column>;
    where?: InputMaybe<Checkitemspecialrequest_Bool_Exp>;
};

/** Ordering options when selecting data from "checkitemspecialrequest". */
export type Checkitemspecialrequest_Order_By = {
    checkdetail?: InputMaybe<Checkdetail_Order_By>;
    checkdetailid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    specialrequest?: InputMaybe<Specialrequest_Order_By>;
    specialrequestid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: checkitemspecialrequest */
export type Checkitemspecialrequest_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "checkitemspecialrequest" */
export enum Checkitemspecialrequest_Select_Column {
    /** column name */
    Checkdetailid = "checkdetailid",
    /** column name */
    Id = "id",
    /** column name */
    Specialrequestid = "specialrequestid",
}

/** input type for updating data in table "checkitemspecialrequest" */
export type Checkitemspecialrequest_Set_Input = {
    checkdetailid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    specialrequestid?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Checkitemspecialrequest_Stddev_Fields = {
    __typename?: "checkitemspecialrequest_stddev_fields";
    checkdetailid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    specialrequestid?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "checkitemspecialrequest" */
export type Checkitemspecialrequest_Stddev_Order_By = {
    checkdetailid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    specialrequestid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Checkitemspecialrequest_Stddev_Pop_Fields = {
    __typename?: "checkitemspecialrequest_stddev_pop_fields";
    checkdetailid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    specialrequestid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "checkitemspecialrequest" */
export type Checkitemspecialrequest_Stddev_Pop_Order_By = {
    checkdetailid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    specialrequestid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Checkitemspecialrequest_Stddev_Samp_Fields = {
    __typename?: "checkitemspecialrequest_stddev_samp_fields";
    checkdetailid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    specialrequestid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "checkitemspecialrequest" */
export type Checkitemspecialrequest_Stddev_Samp_Order_By = {
    checkdetailid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    specialrequestid?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Checkitemspecialrequest_Sum_Fields = {
    __typename?: "checkitemspecialrequest_sum_fields";
    checkdetailid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    specialrequestid?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "checkitemspecialrequest" */
export type Checkitemspecialrequest_Sum_Order_By = {
    checkdetailid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    specialrequestid?: InputMaybe<Order_By>;
};

/** update columns of table "checkitemspecialrequest" */
export enum Checkitemspecialrequest_Update_Column {
    /** column name */
    Checkdetailid = "checkdetailid",
    /** column name */
    Id = "id",
    /** column name */
    Specialrequestid = "specialrequestid",
}

/** aggregate var_pop on columns */
export type Checkitemspecialrequest_Var_Pop_Fields = {
    __typename?: "checkitemspecialrequest_var_pop_fields";
    checkdetailid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    specialrequestid?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "checkitemspecialrequest" */
export type Checkitemspecialrequest_Var_Pop_Order_By = {
    checkdetailid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    specialrequestid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Checkitemspecialrequest_Var_Samp_Fields = {
    __typename?: "checkitemspecialrequest_var_samp_fields";
    checkdetailid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    specialrequestid?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "checkitemspecialrequest" */
export type Checkitemspecialrequest_Var_Samp_Order_By = {
    checkdetailid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    specialrequestid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Checkitemspecialrequest_Variance_Fields = {
    __typename?: "checkitemspecialrequest_variance_fields";
    checkdetailid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    specialrequestid?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "checkitemspecialrequest" */
export type Checkitemspecialrequest_Variance_Order_By = {
    checkdetailid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    specialrequestid?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["date"]>;
    _gt?: InputMaybe<Scalars["date"]>;
    _gte?: InputMaybe<Scalars["date"]>;
    _in?: InputMaybe<Array<Scalars["date"]>>;
    _is_null?: InputMaybe<Scalars["Boolean"]>;
    _lt?: InputMaybe<Scalars["date"]>;
    _lte?: InputMaybe<Scalars["date"]>;
    _neq?: InputMaybe<Scalars["date"]>;
    _nin?: InputMaybe<Array<Scalars["date"]>>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["float8"]>;
    _gt?: InputMaybe<Scalars["float8"]>;
    _gte?: InputMaybe<Scalars["float8"]>;
    _in?: InputMaybe<Array<Scalars["float8"]>>;
    _is_null?: InputMaybe<Scalars["Boolean"]>;
    _lt?: InputMaybe<Scalars["float8"]>;
    _lte?: InputMaybe<Scalars["float8"]>;
    _neq?: InputMaybe<Scalars["float8"]>;
    _nin?: InputMaybe<Array<Scalars["float8"]>>;
};

/** columns and relationships of "item" */
export type Item = {
    __typename?: "item";
    /** An array relationship */
    billdetails: Array<Billdetail>;
    /** An aggregate relationship */
    billdetails_aggregate: Billdetail_Aggregate;
    /** An array relationship */
    checkdetails: Array<Checkdetail>;
    /** An aggregate relationship */
    checkdetails_aggregate: Checkdetail_Aggregate;
    id: Scalars["Int"];
    image?: Maybe<Scalars["String"]>;
    /** An array relationship */
    itemoutofstocks: Array<Itemoutofstock>;
    /** An aggregate relationship */
    itemoutofstocks_aggregate: Itemoutofstock_Aggregate;
    /** An object relationship */
    majorgroup: Majorgroup;
    majorgroupid: Scalars["Int"];
    /** An array relationship */
    menuitems: Array<Menuitem>;
    /** An aggregate relationship */
    menuitems_aggregate: Menuitem_Aggregate;
    name: Scalars["String"];
    status?: Maybe<Scalars["basic_status"]>;
};

/** columns and relationships of "item" */
export type ItemBilldetailsArgs = {
    distinct_on?: InputMaybe<Array<Billdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Billdetail_Order_By>>;
    where?: InputMaybe<Billdetail_Bool_Exp>;
};

/** columns and relationships of "item" */
export type ItemBilldetails_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Billdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Billdetail_Order_By>>;
    where?: InputMaybe<Billdetail_Bool_Exp>;
};

/** columns and relationships of "item" */
export type ItemCheckdetailsArgs = {
    distinct_on?: InputMaybe<Array<Checkdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Checkdetail_Order_By>>;
    where?: InputMaybe<Checkdetail_Bool_Exp>;
};

/** columns and relationships of "item" */
export type ItemCheckdetails_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Checkdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Checkdetail_Order_By>>;
    where?: InputMaybe<Checkdetail_Bool_Exp>;
};

/** columns and relationships of "item" */
export type ItemItemoutofstocksArgs = {
    distinct_on?: InputMaybe<Array<Itemoutofstock_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Itemoutofstock_Order_By>>;
    where?: InputMaybe<Itemoutofstock_Bool_Exp>;
};

/** columns and relationships of "item" */
export type ItemItemoutofstocks_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Itemoutofstock_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Itemoutofstock_Order_By>>;
    where?: InputMaybe<Itemoutofstock_Bool_Exp>;
};

/** columns and relationships of "item" */
export type ItemMenuitemsArgs = {
    distinct_on?: InputMaybe<Array<Menuitem_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Menuitem_Order_By>>;
    where?: InputMaybe<Menuitem_Bool_Exp>;
};

/** columns and relationships of "item" */
export type ItemMenuitems_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Menuitem_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Menuitem_Order_By>>;
    where?: InputMaybe<Menuitem_Bool_Exp>;
};

/** aggregated selection of "item" */
export type Item_Aggregate = {
    __typename?: "item_aggregate";
    aggregate?: Maybe<Item_Aggregate_Fields>;
    nodes: Array<Item>;
};

/** aggregate fields of "item" */
export type Item_Aggregate_Fields = {
    __typename?: "item_aggregate_fields";
    avg?: Maybe<Item_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Item_Max_Fields>;
    min?: Maybe<Item_Min_Fields>;
    stddev?: Maybe<Item_Stddev_Fields>;
    stddev_pop?: Maybe<Item_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Item_Stddev_Samp_Fields>;
    sum?: Maybe<Item_Sum_Fields>;
    var_pop?: Maybe<Item_Var_Pop_Fields>;
    var_samp?: Maybe<Item_Var_Samp_Fields>;
    variance?: Maybe<Item_Variance_Fields>;
};

/** aggregate fields of "item" */
export type Item_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Item_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "item" */
export type Item_Aggregate_Order_By = {
    avg?: InputMaybe<Item_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Item_Max_Order_By>;
    min?: InputMaybe<Item_Min_Order_By>;
    stddev?: InputMaybe<Item_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Item_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Item_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Item_Sum_Order_By>;
    var_pop?: InputMaybe<Item_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Item_Var_Samp_Order_By>;
    variance?: InputMaybe<Item_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "item" */
export type Item_Arr_Rel_Insert_Input = {
    data: Array<Item_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Item_On_Conflict>;
};

/** aggregate avg on columns */
export type Item_Avg_Fields = {
    __typename?: "item_avg_fields";
    id?: Maybe<Scalars["Float"]>;
    majorgroupid?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "item" */
export type Item_Avg_Order_By = {
    id?: InputMaybe<Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "item". All fields are combined with a logical 'AND'. */
export type Item_Bool_Exp = {
    _and?: InputMaybe<Array<Item_Bool_Exp>>;
    _not?: InputMaybe<Item_Bool_Exp>;
    _or?: InputMaybe<Array<Item_Bool_Exp>>;
    billdetails?: InputMaybe<Billdetail_Bool_Exp>;
    checkdetails?: InputMaybe<Checkdetail_Bool_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    image?: InputMaybe<String_Comparison_Exp>;
    itemoutofstocks?: InputMaybe<Itemoutofstock_Bool_Exp>;
    majorgroup?: InputMaybe<Majorgroup_Bool_Exp>;
    majorgroupid?: InputMaybe<Int_Comparison_Exp>;
    menuitems?: InputMaybe<Menuitem_Bool_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    status?: InputMaybe<Basic_Status_Comparison_Exp>;
};

/** unique or primary key constraints on table "item" */
export enum Item_Constraint {
    /** unique or primary key constraint */
    ItemPkey = "item_pkey",
}

/** input type for incrementing numeric columns in table "item" */
export type Item_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    majorgroupid?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "item" */
export type Item_Insert_Input = {
    billdetails?: InputMaybe<Billdetail_Arr_Rel_Insert_Input>;
    checkdetails?: InputMaybe<Checkdetail_Arr_Rel_Insert_Input>;
    id?: InputMaybe<Scalars["Int"]>;
    image?: InputMaybe<Scalars["String"]>;
    itemoutofstocks?: InputMaybe<Itemoutofstock_Arr_Rel_Insert_Input>;
    majorgroup?: InputMaybe<Majorgroup_Obj_Rel_Insert_Input>;
    majorgroupid?: InputMaybe<Scalars["Int"]>;
    menuitems?: InputMaybe<Menuitem_Arr_Rel_Insert_Input>;
    name?: InputMaybe<Scalars["String"]>;
    status?: InputMaybe<Scalars["basic_status"]>;
};

/** aggregate max on columns */
export type Item_Max_Fields = {
    __typename?: "item_max_fields";
    id?: Maybe<Scalars["Int"]>;
    image?: Maybe<Scalars["String"]>;
    majorgroupid?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "item" */
export type Item_Max_Order_By = {
    id?: InputMaybe<Order_By>;
    image?: InputMaybe<Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Item_Min_Fields = {
    __typename?: "item_min_fields";
    id?: Maybe<Scalars["Int"]>;
    image?: Maybe<Scalars["String"]>;
    majorgroupid?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "item" */
export type Item_Min_Order_By = {
    id?: InputMaybe<Order_By>;
    image?: InputMaybe<Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "item" */
export type Item_Mutation_Response = {
    __typename?: "item_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Item>;
};

/** input type for inserting object relation for remote table "item" */
export type Item_Obj_Rel_Insert_Input = {
    data: Item_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Item_On_Conflict>;
};

/** on_conflict condition type for table "item" */
export type Item_On_Conflict = {
    constraint: Item_Constraint;
    update_columns?: Array<Item_Update_Column>;
    where?: InputMaybe<Item_Bool_Exp>;
};

/** Ordering options when selecting data from "item". */
export type Item_Order_By = {
    billdetails_aggregate?: InputMaybe<Billdetail_Aggregate_Order_By>;
    checkdetails_aggregate?: InputMaybe<Checkdetail_Aggregate_Order_By>;
    id?: InputMaybe<Order_By>;
    image?: InputMaybe<Order_By>;
    itemoutofstocks_aggregate?: InputMaybe<Itemoutofstock_Aggregate_Order_By>;
    majorgroup?: InputMaybe<Majorgroup_Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
    menuitems_aggregate?: InputMaybe<Menuitem_Aggregate_Order_By>;
    name?: InputMaybe<Order_By>;
    status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: item */
export type Item_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "item" */
export enum Item_Select_Column {
    /** column name */
    Id = "id",
    /** column name */
    Image = "image",
    /** column name */
    Majorgroupid = "majorgroupid",
    /** column name */
    Name = "name",
    /** column name */
    Status = "status",
}

/** input type for updating data in table "item" */
export type Item_Set_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    image?: InputMaybe<Scalars["String"]>;
    majorgroupid?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    status?: InputMaybe<Scalars["basic_status"]>;
};

/** aggregate stddev on columns */
export type Item_Stddev_Fields = {
    __typename?: "item_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
    majorgroupid?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "item" */
export type Item_Stddev_Order_By = {
    id?: InputMaybe<Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Item_Stddev_Pop_Fields = {
    __typename?: "item_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    majorgroupid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "item" */
export type Item_Stddev_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Item_Stddev_Samp_Fields = {
    __typename?: "item_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    majorgroupid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "item" */
export type Item_Stddev_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Item_Sum_Fields = {
    __typename?: "item_sum_fields";
    id?: Maybe<Scalars["Int"]>;
    majorgroupid?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "item" */
export type Item_Sum_Order_By = {
    id?: InputMaybe<Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
};

/** update columns of table "item" */
export enum Item_Update_Column {
    /** column name */
    Id = "id",
    /** column name */
    Image = "image",
    /** column name */
    Majorgroupid = "majorgroupid",
    /** column name */
    Name = "name",
    /** column name */
    Status = "status",
}

/** aggregate var_pop on columns */
export type Item_Var_Pop_Fields = {
    __typename?: "item_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    majorgroupid?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "item" */
export type Item_Var_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Item_Var_Samp_Fields = {
    __typename?: "item_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    majorgroupid?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "item" */
export type Item_Var_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Item_Variance_Fields = {
    __typename?: "item_variance_fields";
    id?: Maybe<Scalars["Float"]>;
    majorgroupid?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "item" */
export type Item_Variance_Order_By = {
    id?: InputMaybe<Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
};

/** columns and relationships of "itemoutofstock" */
export type Itemoutofstock = {
    __typename?: "itemoutofstock";
    id: Scalars["Int"];
    /** An object relationship */
    item: Item;
    itemid: Scalars["Int"];
};

/** aggregated selection of "itemoutofstock" */
export type Itemoutofstock_Aggregate = {
    __typename?: "itemoutofstock_aggregate";
    aggregate?: Maybe<Itemoutofstock_Aggregate_Fields>;
    nodes: Array<Itemoutofstock>;
};

/** aggregate fields of "itemoutofstock" */
export type Itemoutofstock_Aggregate_Fields = {
    __typename?: "itemoutofstock_aggregate_fields";
    avg?: Maybe<Itemoutofstock_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Itemoutofstock_Max_Fields>;
    min?: Maybe<Itemoutofstock_Min_Fields>;
    stddev?: Maybe<Itemoutofstock_Stddev_Fields>;
    stddev_pop?: Maybe<Itemoutofstock_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Itemoutofstock_Stddev_Samp_Fields>;
    sum?: Maybe<Itemoutofstock_Sum_Fields>;
    var_pop?: Maybe<Itemoutofstock_Var_Pop_Fields>;
    var_samp?: Maybe<Itemoutofstock_Var_Samp_Fields>;
    variance?: Maybe<Itemoutofstock_Variance_Fields>;
};

/** aggregate fields of "itemoutofstock" */
export type Itemoutofstock_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Itemoutofstock_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "itemoutofstock" */
export type Itemoutofstock_Aggregate_Order_By = {
    avg?: InputMaybe<Itemoutofstock_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Itemoutofstock_Max_Order_By>;
    min?: InputMaybe<Itemoutofstock_Min_Order_By>;
    stddev?: InputMaybe<Itemoutofstock_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Itemoutofstock_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Itemoutofstock_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Itemoutofstock_Sum_Order_By>;
    var_pop?: InputMaybe<Itemoutofstock_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Itemoutofstock_Var_Samp_Order_By>;
    variance?: InputMaybe<Itemoutofstock_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "itemoutofstock" */
export type Itemoutofstock_Arr_Rel_Insert_Input = {
    data: Array<Itemoutofstock_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Itemoutofstock_On_Conflict>;
};

/** aggregate avg on columns */
export type Itemoutofstock_Avg_Fields = {
    __typename?: "itemoutofstock_avg_fields";
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "itemoutofstock" */
export type Itemoutofstock_Avg_Order_By = {
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "itemoutofstock". All fields are combined with a logical 'AND'. */
export type Itemoutofstock_Bool_Exp = {
    _and?: InputMaybe<Array<Itemoutofstock_Bool_Exp>>;
    _not?: InputMaybe<Itemoutofstock_Bool_Exp>;
    _or?: InputMaybe<Array<Itemoutofstock_Bool_Exp>>;
    id?: InputMaybe<Int_Comparison_Exp>;
    item?: InputMaybe<Item_Bool_Exp>;
    itemid?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "itemoutofstock" */
export enum Itemoutofstock_Constraint {
    /** unique or primary key constraint */
    ItemoutofstockPkey = "itemoutofstock_pkey",
}

/** input type for incrementing numeric columns in table "itemoutofstock" */
export type Itemoutofstock_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    itemid?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "itemoutofstock" */
export type Itemoutofstock_Insert_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    item?: InputMaybe<Item_Obj_Rel_Insert_Input>;
    itemid?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Itemoutofstock_Max_Fields = {
    __typename?: "itemoutofstock_max_fields";
    id?: Maybe<Scalars["Int"]>;
    itemid?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "itemoutofstock" */
export type Itemoutofstock_Max_Order_By = {
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Itemoutofstock_Min_Fields = {
    __typename?: "itemoutofstock_min_fields";
    id?: Maybe<Scalars["Int"]>;
    itemid?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "itemoutofstock" */
export type Itemoutofstock_Min_Order_By = {
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "itemoutofstock" */
export type Itemoutofstock_Mutation_Response = {
    __typename?: "itemoutofstock_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Itemoutofstock>;
};

/** on_conflict condition type for table "itemoutofstock" */
export type Itemoutofstock_On_Conflict = {
    constraint: Itemoutofstock_Constraint;
    update_columns?: Array<Itemoutofstock_Update_Column>;
    where?: InputMaybe<Itemoutofstock_Bool_Exp>;
};

/** Ordering options when selecting data from "itemoutofstock". */
export type Itemoutofstock_Order_By = {
    id?: InputMaybe<Order_By>;
    item?: InputMaybe<Item_Order_By>;
    itemid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: itemoutofstock */
export type Itemoutofstock_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "itemoutofstock" */
export enum Itemoutofstock_Select_Column {
    /** column name */
    Id = "id",
    /** column name */
    Itemid = "itemid",
}

/** input type for updating data in table "itemoutofstock" */
export type Itemoutofstock_Set_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    itemid?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Itemoutofstock_Stddev_Fields = {
    __typename?: "itemoutofstock_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "itemoutofstock" */
export type Itemoutofstock_Stddev_Order_By = {
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Itemoutofstock_Stddev_Pop_Fields = {
    __typename?: "itemoutofstock_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "itemoutofstock" */
export type Itemoutofstock_Stddev_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Itemoutofstock_Stddev_Samp_Fields = {
    __typename?: "itemoutofstock_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "itemoutofstock" */
export type Itemoutofstock_Stddev_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Itemoutofstock_Sum_Fields = {
    __typename?: "itemoutofstock_sum_fields";
    id?: Maybe<Scalars["Int"]>;
    itemid?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "itemoutofstock" */
export type Itemoutofstock_Sum_Order_By = {
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
};

/** update columns of table "itemoutofstock" */
export enum Itemoutofstock_Update_Column {
    /** column name */
    Id = "id",
    /** column name */
    Itemid = "itemid",
}

/** aggregate var_pop on columns */
export type Itemoutofstock_Var_Pop_Fields = {
    __typename?: "itemoutofstock_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "itemoutofstock" */
export type Itemoutofstock_Var_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Itemoutofstock_Var_Samp_Fields = {
    __typename?: "itemoutofstock_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "itemoutofstock" */
export type Itemoutofstock_Var_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Itemoutofstock_Variance_Fields = {
    __typename?: "itemoutofstock_variance_fields";
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "itemoutofstock" */
export type Itemoutofstock_Variance_Order_By = {
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
};

/** columns and relationships of "location" */
export type Location = {
    __typename?: "location";
    id: Scalars["Int"];
    name: Scalars["String"];
    status?: Maybe<Scalars["basic_status"]>;
    /** An array relationship */
    tables: Array<Table>;
    /** An aggregate relationship */
    tables_aggregate: Table_Aggregate;
};

/** columns and relationships of "location" */
export type LocationTablesArgs = {
    distinct_on?: InputMaybe<Array<Table_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Table_Order_By>>;
    where?: InputMaybe<Table_Bool_Exp>;
};

/** columns and relationships of "location" */
export type LocationTables_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Table_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Table_Order_By>>;
    where?: InputMaybe<Table_Bool_Exp>;
};

/** aggregated selection of "location" */
export type Location_Aggregate = {
    __typename?: "location_aggregate";
    aggregate?: Maybe<Location_Aggregate_Fields>;
    nodes: Array<Location>;
};

/** aggregate fields of "location" */
export type Location_Aggregate_Fields = {
    __typename?: "location_aggregate_fields";
    avg?: Maybe<Location_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Location_Max_Fields>;
    min?: Maybe<Location_Min_Fields>;
    stddev?: Maybe<Location_Stddev_Fields>;
    stddev_pop?: Maybe<Location_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Location_Stddev_Samp_Fields>;
    sum?: Maybe<Location_Sum_Fields>;
    var_pop?: Maybe<Location_Var_Pop_Fields>;
    var_samp?: Maybe<Location_Var_Samp_Fields>;
    variance?: Maybe<Location_Variance_Fields>;
};

/** aggregate fields of "location" */
export type Location_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Location_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Location_Avg_Fields = {
    __typename?: "location_avg_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "location". All fields are combined with a logical 'AND'. */
export type Location_Bool_Exp = {
    _and?: InputMaybe<Array<Location_Bool_Exp>>;
    _not?: InputMaybe<Location_Bool_Exp>;
    _or?: InputMaybe<Array<Location_Bool_Exp>>;
    id?: InputMaybe<Int_Comparison_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    status?: InputMaybe<Basic_Status_Comparison_Exp>;
    tables?: InputMaybe<Table_Bool_Exp>;
};

/** unique or primary key constraints on table "location" */
export enum Location_Constraint {
    /** unique or primary key constraint */
    LocationPkey = "location_pkey",
}

/** input type for incrementing numeric columns in table "location" */
export type Location_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "location" */
export type Location_Insert_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    status?: InputMaybe<Scalars["basic_status"]>;
    tables?: InputMaybe<Table_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Location_Max_Fields = {
    __typename?: "location_max_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Location_Min_Fields = {
    __typename?: "location_min_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "location" */
export type Location_Mutation_Response = {
    __typename?: "location_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Location>;
};

/** input type for inserting object relation for remote table "location" */
export type Location_Obj_Rel_Insert_Input = {
    data: Location_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Location_On_Conflict>;
};

/** on_conflict condition type for table "location" */
export type Location_On_Conflict = {
    constraint: Location_Constraint;
    update_columns?: Array<Location_Update_Column>;
    where?: InputMaybe<Location_Bool_Exp>;
};

/** Ordering options when selecting data from "location". */
export type Location_Order_By = {
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    status?: InputMaybe<Order_By>;
    tables_aggregate?: InputMaybe<Table_Aggregate_Order_By>;
};

/** primary key columns input for table: location */
export type Location_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "location" */
export enum Location_Select_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Status = "status",
}

/** input type for updating data in table "location" */
export type Location_Set_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    status?: InputMaybe<Scalars["basic_status"]>;
};

/** aggregate stddev on columns */
export type Location_Stddev_Fields = {
    __typename?: "location_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Location_Stddev_Pop_Fields = {
    __typename?: "location_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Location_Stddev_Samp_Fields = {
    __typename?: "location_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Location_Sum_Fields = {
    __typename?: "location_sum_fields";
    id?: Maybe<Scalars["Int"]>;
};

/** update columns of table "location" */
export enum Location_Update_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Status = "status",
}

/** aggregate var_pop on columns */
export type Location_Var_Pop_Fields = {
    __typename?: "location_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Location_Var_Samp_Fields = {
    __typename?: "location_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Location_Variance_Fields = {
    __typename?: "location_variance_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "majorgroup" */
export type Majorgroup = {
    __typename?: "majorgroup";
    id: Scalars["Int"];
    /** An array relationship */
    items: Array<Item>;
    /** An aggregate relationship */
    items_aggregate: Item_Aggregate;
    name: Scalars["String"];
    /** An array relationship */
    specialrequests: Array<Specialrequest>;
    /** An aggregate relationship */
    specialrequests_aggregate: Specialrequest_Aggregate;
    status: Scalars["basic_status"];
};

/** columns and relationships of "majorgroup" */
export type MajorgroupItemsArgs = {
    distinct_on?: InputMaybe<Array<Item_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Item_Order_By>>;
    where?: InputMaybe<Item_Bool_Exp>;
};

/** columns and relationships of "majorgroup" */
export type MajorgroupItems_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Item_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Item_Order_By>>;
    where?: InputMaybe<Item_Bool_Exp>;
};

/** columns and relationships of "majorgroup" */
export type MajorgroupSpecialrequestsArgs = {
    distinct_on?: InputMaybe<Array<Specialrequest_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Specialrequest_Order_By>>;
    where?: InputMaybe<Specialrequest_Bool_Exp>;
};

/** columns and relationships of "majorgroup" */
export type MajorgroupSpecialrequests_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Specialrequest_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Specialrequest_Order_By>>;
    where?: InputMaybe<Specialrequest_Bool_Exp>;
};

/** aggregated selection of "majorgroup" */
export type Majorgroup_Aggregate = {
    __typename?: "majorgroup_aggregate";
    aggregate?: Maybe<Majorgroup_Aggregate_Fields>;
    nodes: Array<Majorgroup>;
};

/** aggregate fields of "majorgroup" */
export type Majorgroup_Aggregate_Fields = {
    __typename?: "majorgroup_aggregate_fields";
    avg?: Maybe<Majorgroup_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Majorgroup_Max_Fields>;
    min?: Maybe<Majorgroup_Min_Fields>;
    stddev?: Maybe<Majorgroup_Stddev_Fields>;
    stddev_pop?: Maybe<Majorgroup_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Majorgroup_Stddev_Samp_Fields>;
    sum?: Maybe<Majorgroup_Sum_Fields>;
    var_pop?: Maybe<Majorgroup_Var_Pop_Fields>;
    var_samp?: Maybe<Majorgroup_Var_Samp_Fields>;
    variance?: Maybe<Majorgroup_Variance_Fields>;
};

/** aggregate fields of "majorgroup" */
export type Majorgroup_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Majorgroup_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Majorgroup_Avg_Fields = {
    __typename?: "majorgroup_avg_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "majorgroup". All fields are combined with a logical 'AND'. */
export type Majorgroup_Bool_Exp = {
    _and?: InputMaybe<Array<Majorgroup_Bool_Exp>>;
    _not?: InputMaybe<Majorgroup_Bool_Exp>;
    _or?: InputMaybe<Array<Majorgroup_Bool_Exp>>;
    id?: InputMaybe<Int_Comparison_Exp>;
    items?: InputMaybe<Item_Bool_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    specialrequests?: InputMaybe<Specialrequest_Bool_Exp>;
    status?: InputMaybe<Basic_Status_Comparison_Exp>;
};

/** unique or primary key constraints on table "majorgroup" */
export enum Majorgroup_Constraint {
    /** unique or primary key constraint */
    MajorgroupPkey = "majorgroup_pkey",
}

/** input type for incrementing numeric columns in table "majorgroup" */
export type Majorgroup_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "majorgroup" */
export type Majorgroup_Insert_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    items?: InputMaybe<Item_Arr_Rel_Insert_Input>;
    name?: InputMaybe<Scalars["String"]>;
    specialrequests?: InputMaybe<Specialrequest_Arr_Rel_Insert_Input>;
    status?: InputMaybe<Scalars["basic_status"]>;
};

/** aggregate max on columns */
export type Majorgroup_Max_Fields = {
    __typename?: "majorgroup_max_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Majorgroup_Min_Fields = {
    __typename?: "majorgroup_min_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "majorgroup" */
export type Majorgroup_Mutation_Response = {
    __typename?: "majorgroup_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Majorgroup>;
};

/** input type for inserting object relation for remote table "majorgroup" */
export type Majorgroup_Obj_Rel_Insert_Input = {
    data: Majorgroup_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Majorgroup_On_Conflict>;
};

/** on_conflict condition type for table "majorgroup" */
export type Majorgroup_On_Conflict = {
    constraint: Majorgroup_Constraint;
    update_columns?: Array<Majorgroup_Update_Column>;
    where?: InputMaybe<Majorgroup_Bool_Exp>;
};

/** Ordering options when selecting data from "majorgroup". */
export type Majorgroup_Order_By = {
    id?: InputMaybe<Order_By>;
    items_aggregate?: InputMaybe<Item_Aggregate_Order_By>;
    name?: InputMaybe<Order_By>;
    specialrequests_aggregate?: InputMaybe<Specialrequest_Aggregate_Order_By>;
    status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: majorgroup */
export type Majorgroup_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "majorgroup" */
export enum Majorgroup_Select_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Status = "status",
}

/** input type for updating data in table "majorgroup" */
export type Majorgroup_Set_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    status?: InputMaybe<Scalars["basic_status"]>;
};

/** aggregate stddev on columns */
export type Majorgroup_Stddev_Fields = {
    __typename?: "majorgroup_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Majorgroup_Stddev_Pop_Fields = {
    __typename?: "majorgroup_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Majorgroup_Stddev_Samp_Fields = {
    __typename?: "majorgroup_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Majorgroup_Sum_Fields = {
    __typename?: "majorgroup_sum_fields";
    id?: Maybe<Scalars["Int"]>;
};

/** update columns of table "majorgroup" */
export enum Majorgroup_Update_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Status = "status",
}

/** aggregate var_pop on columns */
export type Majorgroup_Var_Pop_Fields = {
    __typename?: "majorgroup_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Majorgroup_Var_Samp_Fields = {
    __typename?: "majorgroup_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Majorgroup_Variance_Fields = {
    __typename?: "majorgroup_variance_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "mealtype" */
export type Mealtype = {
    __typename?: "mealtype";
    id: Scalars["Int"];
    /** An array relationship */
    menus: Array<Menu>;
    /** An aggregate relationship */
    menus_aggregate: Menu_Aggregate;
    name: Scalars["String"];
    status: Scalars["basic_status"];
};

/** columns and relationships of "mealtype" */
export type MealtypeMenusArgs = {
    distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Menu_Order_By>>;
    where?: InputMaybe<Menu_Bool_Exp>;
};

/** columns and relationships of "mealtype" */
export type MealtypeMenus_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Menu_Order_By>>;
    where?: InputMaybe<Menu_Bool_Exp>;
};

/** aggregated selection of "mealtype" */
export type Mealtype_Aggregate = {
    __typename?: "mealtype_aggregate";
    aggregate?: Maybe<Mealtype_Aggregate_Fields>;
    nodes: Array<Mealtype>;
};

/** aggregate fields of "mealtype" */
export type Mealtype_Aggregate_Fields = {
    __typename?: "mealtype_aggregate_fields";
    avg?: Maybe<Mealtype_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Mealtype_Max_Fields>;
    min?: Maybe<Mealtype_Min_Fields>;
    stddev?: Maybe<Mealtype_Stddev_Fields>;
    stddev_pop?: Maybe<Mealtype_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Mealtype_Stddev_Samp_Fields>;
    sum?: Maybe<Mealtype_Sum_Fields>;
    var_pop?: Maybe<Mealtype_Var_Pop_Fields>;
    var_samp?: Maybe<Mealtype_Var_Samp_Fields>;
    variance?: Maybe<Mealtype_Variance_Fields>;
};

/** aggregate fields of "mealtype" */
export type Mealtype_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Mealtype_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Mealtype_Avg_Fields = {
    __typename?: "mealtype_avg_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "mealtype". All fields are combined with a logical 'AND'. */
export type Mealtype_Bool_Exp = {
    _and?: InputMaybe<Array<Mealtype_Bool_Exp>>;
    _not?: InputMaybe<Mealtype_Bool_Exp>;
    _or?: InputMaybe<Array<Mealtype_Bool_Exp>>;
    id?: InputMaybe<Int_Comparison_Exp>;
    menus?: InputMaybe<Menu_Bool_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    status?: InputMaybe<Basic_Status_Comparison_Exp>;
};

/** unique or primary key constraints on table "mealtype" */
export enum Mealtype_Constraint {
    /** unique or primary key constraint */
    MealtypePkey = "mealtype_pkey",
}

/** input type for incrementing numeric columns in table "mealtype" */
export type Mealtype_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "mealtype" */
export type Mealtype_Insert_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    menus?: InputMaybe<Menu_Arr_Rel_Insert_Input>;
    name?: InputMaybe<Scalars["String"]>;
    status?: InputMaybe<Scalars["basic_status"]>;
};

/** aggregate max on columns */
export type Mealtype_Max_Fields = {
    __typename?: "mealtype_max_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Mealtype_Min_Fields = {
    __typename?: "mealtype_min_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "mealtype" */
export type Mealtype_Mutation_Response = {
    __typename?: "mealtype_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Mealtype>;
};

/** input type for inserting object relation for remote table "mealtype" */
export type Mealtype_Obj_Rel_Insert_Input = {
    data: Mealtype_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Mealtype_On_Conflict>;
};

/** on_conflict condition type for table "mealtype" */
export type Mealtype_On_Conflict = {
    constraint: Mealtype_Constraint;
    update_columns?: Array<Mealtype_Update_Column>;
    where?: InputMaybe<Mealtype_Bool_Exp>;
};

/** Ordering options when selecting data from "mealtype". */
export type Mealtype_Order_By = {
    id?: InputMaybe<Order_By>;
    menus_aggregate?: InputMaybe<Menu_Aggregate_Order_By>;
    name?: InputMaybe<Order_By>;
    status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: mealtype */
export type Mealtype_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "mealtype" */
export enum Mealtype_Select_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Status = "status",
}

/** input type for updating data in table "mealtype" */
export type Mealtype_Set_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    status?: InputMaybe<Scalars["basic_status"]>;
};

/** aggregate stddev on columns */
export type Mealtype_Stddev_Fields = {
    __typename?: "mealtype_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Mealtype_Stddev_Pop_Fields = {
    __typename?: "mealtype_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Mealtype_Stddev_Samp_Fields = {
    __typename?: "mealtype_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Mealtype_Sum_Fields = {
    __typename?: "mealtype_sum_fields";
    id?: Maybe<Scalars["Int"]>;
};

/** update columns of table "mealtype" */
export enum Mealtype_Update_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Status = "status",
}

/** aggregate var_pop on columns */
export type Mealtype_Var_Pop_Fields = {
    __typename?: "mealtype_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Mealtype_Var_Samp_Fields = {
    __typename?: "mealtype_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Mealtype_Variance_Fields = {
    __typename?: "mealtype_variance_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "menu" */
export type Menu = {
    __typename?: "menu";
    id: Scalars["Int"];
    isdefault: Scalars["Boolean"];
    /** An object relationship */
    mealtype: Mealtype;
    mealtypeid: Scalars["Int"];
    /** An array relationship */
    menuitems: Array<Menuitem>;
    /** An aggregate relationship */
    menuitems_aggregate: Menuitem_Aggregate;
    name: Scalars["String"];
    status: Scalars["basic_status"];
};

/** columns and relationships of "menu" */
export type MenuMenuitemsArgs = {
    distinct_on?: InputMaybe<Array<Menuitem_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Menuitem_Order_By>>;
    where?: InputMaybe<Menuitem_Bool_Exp>;
};

/** columns and relationships of "menu" */
export type MenuMenuitems_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Menuitem_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Menuitem_Order_By>>;
    where?: InputMaybe<Menuitem_Bool_Exp>;
};

/** aggregated selection of "menu" */
export type Menu_Aggregate = {
    __typename?: "menu_aggregate";
    aggregate?: Maybe<Menu_Aggregate_Fields>;
    nodes: Array<Menu>;
};

/** aggregate fields of "menu" */
export type Menu_Aggregate_Fields = {
    __typename?: "menu_aggregate_fields";
    avg?: Maybe<Menu_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Menu_Max_Fields>;
    min?: Maybe<Menu_Min_Fields>;
    stddev?: Maybe<Menu_Stddev_Fields>;
    stddev_pop?: Maybe<Menu_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Menu_Stddev_Samp_Fields>;
    sum?: Maybe<Menu_Sum_Fields>;
    var_pop?: Maybe<Menu_Var_Pop_Fields>;
    var_samp?: Maybe<Menu_Var_Samp_Fields>;
    variance?: Maybe<Menu_Variance_Fields>;
};

/** aggregate fields of "menu" */
export type Menu_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Menu_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "menu" */
export type Menu_Aggregate_Order_By = {
    avg?: InputMaybe<Menu_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Menu_Max_Order_By>;
    min?: InputMaybe<Menu_Min_Order_By>;
    stddev?: InputMaybe<Menu_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Menu_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Menu_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Menu_Sum_Order_By>;
    var_pop?: InputMaybe<Menu_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Menu_Var_Samp_Order_By>;
    variance?: InputMaybe<Menu_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "menu" */
export type Menu_Arr_Rel_Insert_Input = {
    data: Array<Menu_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Menu_On_Conflict>;
};

/** aggregate avg on columns */
export type Menu_Avg_Fields = {
    __typename?: "menu_avg_fields";
    id?: Maybe<Scalars["Float"]>;
    mealtypeid?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "menu" */
export type Menu_Avg_Order_By = {
    id?: InputMaybe<Order_By>;
    mealtypeid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "menu". All fields are combined with a logical 'AND'. */
export type Menu_Bool_Exp = {
    _and?: InputMaybe<Array<Menu_Bool_Exp>>;
    _not?: InputMaybe<Menu_Bool_Exp>;
    _or?: InputMaybe<Array<Menu_Bool_Exp>>;
    id?: InputMaybe<Int_Comparison_Exp>;
    isdefault?: InputMaybe<Boolean_Comparison_Exp>;
    mealtype?: InputMaybe<Mealtype_Bool_Exp>;
    mealtypeid?: InputMaybe<Int_Comparison_Exp>;
    menuitems?: InputMaybe<Menuitem_Bool_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    status?: InputMaybe<Basic_Status_Comparison_Exp>;
};

/** unique or primary key constraints on table "menu" */
export enum Menu_Constraint {
    /** unique or primary key constraint */
    MenuPkey = "menu_pkey",
}

/** input type for incrementing numeric columns in table "menu" */
export type Menu_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    mealtypeid?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "menu" */
export type Menu_Insert_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    isdefault?: InputMaybe<Scalars["Boolean"]>;
    mealtype?: InputMaybe<Mealtype_Obj_Rel_Insert_Input>;
    mealtypeid?: InputMaybe<Scalars["Int"]>;
    menuitems?: InputMaybe<Menuitem_Arr_Rel_Insert_Input>;
    name?: InputMaybe<Scalars["String"]>;
    status?: InputMaybe<Scalars["basic_status"]>;
};

/** aggregate max on columns */
export type Menu_Max_Fields = {
    __typename?: "menu_max_fields";
    id?: Maybe<Scalars["Int"]>;
    mealtypeid?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "menu" */
export type Menu_Max_Order_By = {
    id?: InputMaybe<Order_By>;
    mealtypeid?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Menu_Min_Fields = {
    __typename?: "menu_min_fields";
    id?: Maybe<Scalars["Int"]>;
    mealtypeid?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "menu" */
export type Menu_Min_Order_By = {
    id?: InputMaybe<Order_By>;
    mealtypeid?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "menu" */
export type Menu_Mutation_Response = {
    __typename?: "menu_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Menu>;
};

/** input type for inserting object relation for remote table "menu" */
export type Menu_Obj_Rel_Insert_Input = {
    data: Menu_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Menu_On_Conflict>;
};

/** on_conflict condition type for table "menu" */
export type Menu_On_Conflict = {
    constraint: Menu_Constraint;
    update_columns?: Array<Menu_Update_Column>;
    where?: InputMaybe<Menu_Bool_Exp>;
};

/** Ordering options when selecting data from "menu". */
export type Menu_Order_By = {
    id?: InputMaybe<Order_By>;
    isdefault?: InputMaybe<Order_By>;
    mealtype?: InputMaybe<Mealtype_Order_By>;
    mealtypeid?: InputMaybe<Order_By>;
    menuitems_aggregate?: InputMaybe<Menuitem_Aggregate_Order_By>;
    name?: InputMaybe<Order_By>;
    status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: menu */
export type Menu_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "menu" */
export enum Menu_Select_Column {
    /** column name */
    Id = "id",
    /** column name */
    Isdefault = "isdefault",
    /** column name */
    Mealtypeid = "mealtypeid",
    /** column name */
    Name = "name",
    /** column name */
    Status = "status",
}

/** input type for updating data in table "menu" */
export type Menu_Set_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    isdefault?: InputMaybe<Scalars["Boolean"]>;
    mealtypeid?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    status?: InputMaybe<Scalars["basic_status"]>;
};

/** aggregate stddev on columns */
export type Menu_Stddev_Fields = {
    __typename?: "menu_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
    mealtypeid?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "menu" */
export type Menu_Stddev_Order_By = {
    id?: InputMaybe<Order_By>;
    mealtypeid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Menu_Stddev_Pop_Fields = {
    __typename?: "menu_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    mealtypeid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "menu" */
export type Menu_Stddev_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    mealtypeid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Menu_Stddev_Samp_Fields = {
    __typename?: "menu_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    mealtypeid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "menu" */
export type Menu_Stddev_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    mealtypeid?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Menu_Sum_Fields = {
    __typename?: "menu_sum_fields";
    id?: Maybe<Scalars["Int"]>;
    mealtypeid?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "menu" */
export type Menu_Sum_Order_By = {
    id?: InputMaybe<Order_By>;
    mealtypeid?: InputMaybe<Order_By>;
};

/** update columns of table "menu" */
export enum Menu_Update_Column {
    /** column name */
    Id = "id",
    /** column name */
    Isdefault = "isdefault",
    /** column name */
    Mealtypeid = "mealtypeid",
    /** column name */
    Name = "name",
    /** column name */
    Status = "status",
}

/** aggregate var_pop on columns */
export type Menu_Var_Pop_Fields = {
    __typename?: "menu_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    mealtypeid?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "menu" */
export type Menu_Var_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    mealtypeid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Menu_Var_Samp_Fields = {
    __typename?: "menu_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    mealtypeid?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "menu" */
export type Menu_Var_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    mealtypeid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Menu_Variance_Fields = {
    __typename?: "menu_variance_fields";
    id?: Maybe<Scalars["Float"]>;
    mealtypeid?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "menu" */
export type Menu_Variance_Order_By = {
    id?: InputMaybe<Order_By>;
    mealtypeid?: InputMaybe<Order_By>;
};

/** columns and relationships of "menuitem" */
export type Menuitem = {
    __typename?: "menuitem";
    id: Scalars["Int"];
    /** An object relationship */
    item: Item;
    itemid: Scalars["Int"];
    /** An object relationship */
    menu: Menu;
    menuid: Scalars["Int"];
    price: Scalars["Int"];
};

/** aggregated selection of "menuitem" */
export type Menuitem_Aggregate = {
    __typename?: "menuitem_aggregate";
    aggregate?: Maybe<Menuitem_Aggregate_Fields>;
    nodes: Array<Menuitem>;
};

/** aggregate fields of "menuitem" */
export type Menuitem_Aggregate_Fields = {
    __typename?: "menuitem_aggregate_fields";
    avg?: Maybe<Menuitem_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Menuitem_Max_Fields>;
    min?: Maybe<Menuitem_Min_Fields>;
    stddev?: Maybe<Menuitem_Stddev_Fields>;
    stddev_pop?: Maybe<Menuitem_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Menuitem_Stddev_Samp_Fields>;
    sum?: Maybe<Menuitem_Sum_Fields>;
    var_pop?: Maybe<Menuitem_Var_Pop_Fields>;
    var_samp?: Maybe<Menuitem_Var_Samp_Fields>;
    variance?: Maybe<Menuitem_Variance_Fields>;
};

/** aggregate fields of "menuitem" */
export type Menuitem_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Menuitem_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "menuitem" */
export type Menuitem_Aggregate_Order_By = {
    avg?: InputMaybe<Menuitem_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Menuitem_Max_Order_By>;
    min?: InputMaybe<Menuitem_Min_Order_By>;
    stddev?: InputMaybe<Menuitem_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Menuitem_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Menuitem_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Menuitem_Sum_Order_By>;
    var_pop?: InputMaybe<Menuitem_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Menuitem_Var_Samp_Order_By>;
    variance?: InputMaybe<Menuitem_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "menuitem" */
export type Menuitem_Arr_Rel_Insert_Input = {
    data: Array<Menuitem_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Menuitem_On_Conflict>;
};

/** aggregate avg on columns */
export type Menuitem_Avg_Fields = {
    __typename?: "menuitem_avg_fields";
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    menuid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "menuitem" */
export type Menuitem_Avg_Order_By = {
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    menuid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "menuitem". All fields are combined with a logical 'AND'. */
export type Menuitem_Bool_Exp = {
    _and?: InputMaybe<Array<Menuitem_Bool_Exp>>;
    _not?: InputMaybe<Menuitem_Bool_Exp>;
    _or?: InputMaybe<Array<Menuitem_Bool_Exp>>;
    id?: InputMaybe<Int_Comparison_Exp>;
    item?: InputMaybe<Item_Bool_Exp>;
    itemid?: InputMaybe<Int_Comparison_Exp>;
    menu?: InputMaybe<Menu_Bool_Exp>;
    menuid?: InputMaybe<Int_Comparison_Exp>;
    price?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "menuitem" */
export enum Menuitem_Constraint {
    /** unique or primary key constraint */
    MenuitemPkey = "menuitem_pkey",
}

/** input type for incrementing numeric columns in table "menuitem" */
export type Menuitem_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    itemid?: InputMaybe<Scalars["Int"]>;
    menuid?: InputMaybe<Scalars["Int"]>;
    price?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "menuitem" */
export type Menuitem_Insert_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    item?: InputMaybe<Item_Obj_Rel_Insert_Input>;
    itemid?: InputMaybe<Scalars["Int"]>;
    menu?: InputMaybe<Menu_Obj_Rel_Insert_Input>;
    menuid?: InputMaybe<Scalars["Int"]>;
    price?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Menuitem_Max_Fields = {
    __typename?: "menuitem_max_fields";
    id?: Maybe<Scalars["Int"]>;
    itemid?: Maybe<Scalars["Int"]>;
    menuid?: Maybe<Scalars["Int"]>;
    price?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "menuitem" */
export type Menuitem_Max_Order_By = {
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    menuid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Menuitem_Min_Fields = {
    __typename?: "menuitem_min_fields";
    id?: Maybe<Scalars["Int"]>;
    itemid?: Maybe<Scalars["Int"]>;
    menuid?: Maybe<Scalars["Int"]>;
    price?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "menuitem" */
export type Menuitem_Min_Order_By = {
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    menuid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "menuitem" */
export type Menuitem_Mutation_Response = {
    __typename?: "menuitem_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Menuitem>;
};

/** on_conflict condition type for table "menuitem" */
export type Menuitem_On_Conflict = {
    constraint: Menuitem_Constraint;
    update_columns?: Array<Menuitem_Update_Column>;
    where?: InputMaybe<Menuitem_Bool_Exp>;
};

/** Ordering options when selecting data from "menuitem". */
export type Menuitem_Order_By = {
    id?: InputMaybe<Order_By>;
    item?: InputMaybe<Item_Order_By>;
    itemid?: InputMaybe<Order_By>;
    menu?: InputMaybe<Menu_Order_By>;
    menuid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
};

/** primary key columns input for table: menuitem */
export type Menuitem_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "menuitem" */
export enum Menuitem_Select_Column {
    /** column name */
    Id = "id",
    /** column name */
    Itemid = "itemid",
    /** column name */
    Menuid = "menuid",
    /** column name */
    Price = "price",
}

/** input type for updating data in table "menuitem" */
export type Menuitem_Set_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    itemid?: InputMaybe<Scalars["Int"]>;
    menuid?: InputMaybe<Scalars["Int"]>;
    price?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Menuitem_Stddev_Fields = {
    __typename?: "menuitem_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    menuid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "menuitem" */
export type Menuitem_Stddev_Order_By = {
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    menuid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Menuitem_Stddev_Pop_Fields = {
    __typename?: "menuitem_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    menuid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "menuitem" */
export type Menuitem_Stddev_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    menuid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Menuitem_Stddev_Samp_Fields = {
    __typename?: "menuitem_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    menuid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "menuitem" */
export type Menuitem_Stddev_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    menuid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Menuitem_Sum_Fields = {
    __typename?: "menuitem_sum_fields";
    id?: Maybe<Scalars["Int"]>;
    itemid?: Maybe<Scalars["Int"]>;
    menuid?: Maybe<Scalars["Int"]>;
    price?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "menuitem" */
export type Menuitem_Sum_Order_By = {
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    menuid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
};

/** update columns of table "menuitem" */
export enum Menuitem_Update_Column {
    /** column name */
    Id = "id",
    /** column name */
    Itemid = "itemid",
    /** column name */
    Menuid = "menuid",
    /** column name */
    Price = "price",
}

/** aggregate var_pop on columns */
export type Menuitem_Var_Pop_Fields = {
    __typename?: "menuitem_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    menuid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "menuitem" */
export type Menuitem_Var_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    menuid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Menuitem_Var_Samp_Fields = {
    __typename?: "menuitem_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    menuid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "menuitem" */
export type Menuitem_Var_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    menuid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Menuitem_Variance_Fields = {
    __typename?: "menuitem_variance_fields";
    id?: Maybe<Scalars["Float"]>;
    itemid?: Maybe<Scalars["Float"]>;
    menuid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "menuitem" */
export type Menuitem_Variance_Order_By = {
    id?: InputMaybe<Order_By>;
    itemid?: InputMaybe<Order_By>;
    menuid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
    __typename?: "mutation_root";
    /** delete data from the table: "account" */
    delete_account?: Maybe<Account_Mutation_Response>;
    /** delete single row from the table: "account" */
    delete_account_by_pk?: Maybe<Account>;
    /** delete data from the table: "bill" */
    delete_bill?: Maybe<Bill_Mutation_Response>;
    /** delete single row from the table: "bill" */
    delete_bill_by_pk?: Maybe<Bill>;
    /** delete data from the table: "billdetail" */
    delete_billdetail?: Maybe<Billdetail_Mutation_Response>;
    /** delete single row from the table: "billdetail" */
    delete_billdetail_by_pk?: Maybe<Billdetail>;
    /** delete data from the table: "billpayment" */
    delete_billpayment?: Maybe<Billpayment_Mutation_Response>;
    /** delete single row from the table: "billpayment" */
    delete_billpayment_by_pk?: Maybe<Billpayment>;
    /** delete data from the table: "check" */
    delete_check?: Maybe<Check_Mutation_Response>;
    /** delete single row from the table: "check" */
    delete_check_by_pk?: Maybe<Check>;
    /** delete data from the table: "checkdetail" */
    delete_checkdetail?: Maybe<Checkdetail_Mutation_Response>;
    /** delete single row from the table: "checkdetail" */
    delete_checkdetail_by_pk?: Maybe<Checkdetail>;
    /** delete data from the table: "checkitemspecialrequest" */
    delete_checkitemspecialrequest?: Maybe<Checkitemspecialrequest_Mutation_Response>;
    /** delete single row from the table: "checkitemspecialrequest" */
    delete_checkitemspecialrequest_by_pk?: Maybe<Checkitemspecialrequest>;
    /** delete data from the table: "item" */
    delete_item?: Maybe<Item_Mutation_Response>;
    /** delete single row from the table: "item" */
    delete_item_by_pk?: Maybe<Item>;
    /** delete data from the table: "itemoutofstock" */
    delete_itemoutofstock?: Maybe<Itemoutofstock_Mutation_Response>;
    /** delete single row from the table: "itemoutofstock" */
    delete_itemoutofstock_by_pk?: Maybe<Itemoutofstock>;
    /** delete data from the table: "location" */
    delete_location?: Maybe<Location_Mutation_Response>;
    /** delete single row from the table: "location" */
    delete_location_by_pk?: Maybe<Location>;
    /** delete data from the table: "majorgroup" */
    delete_majorgroup?: Maybe<Majorgroup_Mutation_Response>;
    /** delete single row from the table: "majorgroup" */
    delete_majorgroup_by_pk?: Maybe<Majorgroup>;
    /** delete data from the table: "mealtype" */
    delete_mealtype?: Maybe<Mealtype_Mutation_Response>;
    /** delete single row from the table: "mealtype" */
    delete_mealtype_by_pk?: Maybe<Mealtype>;
    /** delete data from the table: "menu" */
    delete_menu?: Maybe<Menu_Mutation_Response>;
    /** delete single row from the table: "menu" */
    delete_menu_by_pk?: Maybe<Menu>;
    /** delete data from the table: "menuitem" */
    delete_menuitem?: Maybe<Menuitem_Mutation_Response>;
    /** delete single row from the table: "menuitem" */
    delete_menuitem_by_pk?: Maybe<Menuitem>;
    /** delete data from the table: "paymentmethod" */
    delete_paymentmethod?: Maybe<Paymentmethod_Mutation_Response>;
    /** delete single row from the table: "paymentmethod" */
    delete_paymentmethod_by_pk?: Maybe<Paymentmethod>;
    /** delete data from the table: "role" */
    delete_role?: Maybe<Role_Mutation_Response>;
    /** delete single row from the table: "role" */
    delete_role_by_pk?: Maybe<Role>;
    /** delete data from the table: "shift" */
    delete_shift?: Maybe<Shift_Mutation_Response>;
    /** delete single row from the table: "shift" */
    delete_shift_by_pk?: Maybe<Shift>;
    /** delete data from the table: "specialrequest" */
    delete_specialrequest?: Maybe<Specialrequest_Mutation_Response>;
    /** delete single row from the table: "specialrequest" */
    delete_specialrequest_by_pk?: Maybe<Specialrequest>;
    /** delete data from the table: "systemsetting" */
    delete_systemsetting?: Maybe<Systemsetting_Mutation_Response>;
    /** delete single row from the table: "systemsetting" */
    delete_systemsetting_by_pk?: Maybe<Systemsetting>;
    /** delete data from the table: "table" */
    delete_table?: Maybe<Table_Mutation_Response>;
    /** delete single row from the table: "table" */
    delete_table_by_pk?: Maybe<Table>;
    /** delete data from the table: "voidreason" */
    delete_voidreason?: Maybe<Voidreason_Mutation_Response>;
    /** delete single row from the table: "voidreason" */
    delete_voidreason_by_pk?: Maybe<Voidreason>;
    /** delete data from the table: "worksession" */
    delete_worksession?: Maybe<Worksession_Mutation_Response>;
    /** delete single row from the table: "worksession" */
    delete_worksession_by_pk?: Maybe<Worksession>;
    /** insert data into the table: "account" */
    insert_account?: Maybe<Account_Mutation_Response>;
    /** insert a single row into the table: "account" */
    insert_account_one?: Maybe<Account>;
    /** insert data into the table: "bill" */
    insert_bill?: Maybe<Bill_Mutation_Response>;
    /** insert a single row into the table: "bill" */
    insert_bill_one?: Maybe<Bill>;
    /** insert data into the table: "billdetail" */
    insert_billdetail?: Maybe<Billdetail_Mutation_Response>;
    /** insert a single row into the table: "billdetail" */
    insert_billdetail_one?: Maybe<Billdetail>;
    /** insert data into the table: "billpayment" */
    insert_billpayment?: Maybe<Billpayment_Mutation_Response>;
    /** insert a single row into the table: "billpayment" */
    insert_billpayment_one?: Maybe<Billpayment>;
    /** insert data into the table: "check" */
    insert_check?: Maybe<Check_Mutation_Response>;
    /** insert a single row into the table: "check" */
    insert_check_one?: Maybe<Check>;
    /** insert data into the table: "checkdetail" */
    insert_checkdetail?: Maybe<Checkdetail_Mutation_Response>;
    /** insert a single row into the table: "checkdetail" */
    insert_checkdetail_one?: Maybe<Checkdetail>;
    /** insert data into the table: "checkitemspecialrequest" */
    insert_checkitemspecialrequest?: Maybe<Checkitemspecialrequest_Mutation_Response>;
    /** insert a single row into the table: "checkitemspecialrequest" */
    insert_checkitemspecialrequest_one?: Maybe<Checkitemspecialrequest>;
    /** insert data into the table: "item" */
    insert_item?: Maybe<Item_Mutation_Response>;
    /** insert a single row into the table: "item" */
    insert_item_one?: Maybe<Item>;
    /** insert data into the table: "itemoutofstock" */
    insert_itemoutofstock?: Maybe<Itemoutofstock_Mutation_Response>;
    /** insert a single row into the table: "itemoutofstock" */
    insert_itemoutofstock_one?: Maybe<Itemoutofstock>;
    /** insert data into the table: "location" */
    insert_location?: Maybe<Location_Mutation_Response>;
    /** insert a single row into the table: "location" */
    insert_location_one?: Maybe<Location>;
    /** insert data into the table: "majorgroup" */
    insert_majorgroup?: Maybe<Majorgroup_Mutation_Response>;
    /** insert a single row into the table: "majorgroup" */
    insert_majorgroup_one?: Maybe<Majorgroup>;
    /** insert data into the table: "mealtype" */
    insert_mealtype?: Maybe<Mealtype_Mutation_Response>;
    /** insert a single row into the table: "mealtype" */
    insert_mealtype_one?: Maybe<Mealtype>;
    /** insert data into the table: "menu" */
    insert_menu?: Maybe<Menu_Mutation_Response>;
    /** insert a single row into the table: "menu" */
    insert_menu_one?: Maybe<Menu>;
    /** insert data into the table: "menuitem" */
    insert_menuitem?: Maybe<Menuitem_Mutation_Response>;
    /** insert a single row into the table: "menuitem" */
    insert_menuitem_one?: Maybe<Menuitem>;
    /** insert data into the table: "paymentmethod" */
    insert_paymentmethod?: Maybe<Paymentmethod_Mutation_Response>;
    /** insert a single row into the table: "paymentmethod" */
    insert_paymentmethod_one?: Maybe<Paymentmethod>;
    /** insert data into the table: "role" */
    insert_role?: Maybe<Role_Mutation_Response>;
    /** insert a single row into the table: "role" */
    insert_role_one?: Maybe<Role>;
    /** insert data into the table: "shift" */
    insert_shift?: Maybe<Shift_Mutation_Response>;
    /** insert a single row into the table: "shift" */
    insert_shift_one?: Maybe<Shift>;
    /** insert data into the table: "specialrequest" */
    insert_specialrequest?: Maybe<Specialrequest_Mutation_Response>;
    /** insert a single row into the table: "specialrequest" */
    insert_specialrequest_one?: Maybe<Specialrequest>;
    /** insert data into the table: "systemsetting" */
    insert_systemsetting?: Maybe<Systemsetting_Mutation_Response>;
    /** insert a single row into the table: "systemsetting" */
    insert_systemsetting_one?: Maybe<Systemsetting>;
    /** insert data into the table: "table" */
    insert_table?: Maybe<Table_Mutation_Response>;
    /** insert a single row into the table: "table" */
    insert_table_one?: Maybe<Table>;
    /** insert data into the table: "voidreason" */
    insert_voidreason?: Maybe<Voidreason_Mutation_Response>;
    /** insert a single row into the table: "voidreason" */
    insert_voidreason_one?: Maybe<Voidreason>;
    /** insert data into the table: "worksession" */
    insert_worksession?: Maybe<Worksession_Mutation_Response>;
    /** insert a single row into the table: "worksession" */
    insert_worksession_one?: Maybe<Worksession>;
    /** update data of the table: "account" */
    update_account?: Maybe<Account_Mutation_Response>;
    /** update single row of the table: "account" */
    update_account_by_pk?: Maybe<Account>;
    /** update data of the table: "bill" */
    update_bill?: Maybe<Bill_Mutation_Response>;
    /** update single row of the table: "bill" */
    update_bill_by_pk?: Maybe<Bill>;
    /** update data of the table: "billdetail" */
    update_billdetail?: Maybe<Billdetail_Mutation_Response>;
    /** update single row of the table: "billdetail" */
    update_billdetail_by_pk?: Maybe<Billdetail>;
    /** update data of the table: "billpayment" */
    update_billpayment?: Maybe<Billpayment_Mutation_Response>;
    /** update single row of the table: "billpayment" */
    update_billpayment_by_pk?: Maybe<Billpayment>;
    /** update data of the table: "check" */
    update_check?: Maybe<Check_Mutation_Response>;
    /** update single row of the table: "check" */
    update_check_by_pk?: Maybe<Check>;
    /** update data of the table: "checkdetail" */
    update_checkdetail?: Maybe<Checkdetail_Mutation_Response>;
    /** update single row of the table: "checkdetail" */
    update_checkdetail_by_pk?: Maybe<Checkdetail>;
    /** update data of the table: "checkitemspecialrequest" */
    update_checkitemspecialrequest?: Maybe<Checkitemspecialrequest_Mutation_Response>;
    /** update single row of the table: "checkitemspecialrequest" */
    update_checkitemspecialrequest_by_pk?: Maybe<Checkitemspecialrequest>;
    /** update data of the table: "item" */
    update_item?: Maybe<Item_Mutation_Response>;
    /** update single row of the table: "item" */
    update_item_by_pk?: Maybe<Item>;
    /** update data of the table: "itemoutofstock" */
    update_itemoutofstock?: Maybe<Itemoutofstock_Mutation_Response>;
    /** update single row of the table: "itemoutofstock" */
    update_itemoutofstock_by_pk?: Maybe<Itemoutofstock>;
    /** update data of the table: "location" */
    update_location?: Maybe<Location_Mutation_Response>;
    /** update single row of the table: "location" */
    update_location_by_pk?: Maybe<Location>;
    /** update data of the table: "majorgroup" */
    update_majorgroup?: Maybe<Majorgroup_Mutation_Response>;
    /** update single row of the table: "majorgroup" */
    update_majorgroup_by_pk?: Maybe<Majorgroup>;
    /** update data of the table: "mealtype" */
    update_mealtype?: Maybe<Mealtype_Mutation_Response>;
    /** update single row of the table: "mealtype" */
    update_mealtype_by_pk?: Maybe<Mealtype>;
    /** update data of the table: "menu" */
    update_menu?: Maybe<Menu_Mutation_Response>;
    /** update single row of the table: "menu" */
    update_menu_by_pk?: Maybe<Menu>;
    /** update data of the table: "menuitem" */
    update_menuitem?: Maybe<Menuitem_Mutation_Response>;
    /** update single row of the table: "menuitem" */
    update_menuitem_by_pk?: Maybe<Menuitem>;
    /** update data of the table: "paymentmethod" */
    update_paymentmethod?: Maybe<Paymentmethod_Mutation_Response>;
    /** update single row of the table: "paymentmethod" */
    update_paymentmethod_by_pk?: Maybe<Paymentmethod>;
    /** update data of the table: "role" */
    update_role?: Maybe<Role_Mutation_Response>;
    /** update single row of the table: "role" */
    update_role_by_pk?: Maybe<Role>;
    /** update data of the table: "shift" */
    update_shift?: Maybe<Shift_Mutation_Response>;
    /** update single row of the table: "shift" */
    update_shift_by_pk?: Maybe<Shift>;
    /** update data of the table: "specialrequest" */
    update_specialrequest?: Maybe<Specialrequest_Mutation_Response>;
    /** update single row of the table: "specialrequest" */
    update_specialrequest_by_pk?: Maybe<Specialrequest>;
    /** update data of the table: "systemsetting" */
    update_systemsetting?: Maybe<Systemsetting_Mutation_Response>;
    /** update single row of the table: "systemsetting" */
    update_systemsetting_by_pk?: Maybe<Systemsetting>;
    /** update data of the table: "table" */
    update_table?: Maybe<Table_Mutation_Response>;
    /** update single row of the table: "table" */
    update_table_by_pk?: Maybe<Table>;
    /** update data of the table: "voidreason" */
    update_voidreason?: Maybe<Voidreason_Mutation_Response>;
    /** update single row of the table: "voidreason" */
    update_voidreason_by_pk?: Maybe<Voidreason>;
    /** update data of the table: "worksession" */
    update_worksession?: Maybe<Worksession_Mutation_Response>;
    /** update single row of the table: "worksession" */
    update_worksession_by_pk?: Maybe<Worksession>;
};

/** mutation root */
export type Mutation_RootDelete_AccountArgs = {
    where: Account_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Account_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_BillArgs = {
    where: Bill_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Bill_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_BilldetailArgs = {
    where: Billdetail_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Billdetail_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_BillpaymentArgs = {
    where: Billpayment_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Billpayment_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_CheckArgs = {
    where: Check_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Check_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_CheckdetailArgs = {
    where: Checkdetail_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Checkdetail_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_CheckitemspecialrequestArgs = {
    where: Checkitemspecialrequest_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Checkitemspecialrequest_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_ItemArgs = {
    where: Item_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Item_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_ItemoutofstockArgs = {
    where: Itemoutofstock_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Itemoutofstock_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_LocationArgs = {
    where: Location_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Location_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_MajorgroupArgs = {
    where: Majorgroup_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Majorgroup_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_MealtypeArgs = {
    where: Mealtype_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Mealtype_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_MenuArgs = {
    where: Menu_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Menu_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_MenuitemArgs = {
    where: Menuitem_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Menuitem_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_PaymentmethodArgs = {
    where: Paymentmethod_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Paymentmethod_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
    where: Role_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_ShiftArgs = {
    where: Shift_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Shift_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_SpecialrequestArgs = {
    where: Specialrequest_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Specialrequest_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_SystemsettingArgs = {
    where: Systemsetting_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Systemsetting_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_TableArgs = {
    where: Table_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Table_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_VoidreasonArgs = {
    where: Voidreason_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Voidreason_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_WorksessionArgs = {
    where: Worksession_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Worksession_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootInsert_AccountArgs = {
    objects: Array<Account_Insert_Input>;
    on_conflict?: InputMaybe<Account_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Account_OneArgs = {
    object: Account_Insert_Input;
    on_conflict?: InputMaybe<Account_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_BillArgs = {
    objects: Array<Bill_Insert_Input>;
    on_conflict?: InputMaybe<Bill_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Bill_OneArgs = {
    object: Bill_Insert_Input;
    on_conflict?: InputMaybe<Bill_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_BilldetailArgs = {
    objects: Array<Billdetail_Insert_Input>;
    on_conflict?: InputMaybe<Billdetail_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Billdetail_OneArgs = {
    object: Billdetail_Insert_Input;
    on_conflict?: InputMaybe<Billdetail_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_BillpaymentArgs = {
    objects: Array<Billpayment_Insert_Input>;
    on_conflict?: InputMaybe<Billpayment_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Billpayment_OneArgs = {
    object: Billpayment_Insert_Input;
    on_conflict?: InputMaybe<Billpayment_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CheckArgs = {
    objects: Array<Check_Insert_Input>;
    on_conflict?: InputMaybe<Check_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Check_OneArgs = {
    object: Check_Insert_Input;
    on_conflict?: InputMaybe<Check_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CheckdetailArgs = {
    objects: Array<Checkdetail_Insert_Input>;
    on_conflict?: InputMaybe<Checkdetail_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Checkdetail_OneArgs = {
    object: Checkdetail_Insert_Input;
    on_conflict?: InputMaybe<Checkdetail_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CheckitemspecialrequestArgs = {
    objects: Array<Checkitemspecialrequest_Insert_Input>;
    on_conflict?: InputMaybe<Checkitemspecialrequest_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Checkitemspecialrequest_OneArgs = {
    object: Checkitemspecialrequest_Insert_Input;
    on_conflict?: InputMaybe<Checkitemspecialrequest_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ItemArgs = {
    objects: Array<Item_Insert_Input>;
    on_conflict?: InputMaybe<Item_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Item_OneArgs = {
    object: Item_Insert_Input;
    on_conflict?: InputMaybe<Item_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ItemoutofstockArgs = {
    objects: Array<Itemoutofstock_Insert_Input>;
    on_conflict?: InputMaybe<Itemoutofstock_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Itemoutofstock_OneArgs = {
    object: Itemoutofstock_Insert_Input;
    on_conflict?: InputMaybe<Itemoutofstock_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LocationArgs = {
    objects: Array<Location_Insert_Input>;
    on_conflict?: InputMaybe<Location_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Location_OneArgs = {
    object: Location_Insert_Input;
    on_conflict?: InputMaybe<Location_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MajorgroupArgs = {
    objects: Array<Majorgroup_Insert_Input>;
    on_conflict?: InputMaybe<Majorgroup_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Majorgroup_OneArgs = {
    object: Majorgroup_Insert_Input;
    on_conflict?: InputMaybe<Majorgroup_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MealtypeArgs = {
    objects: Array<Mealtype_Insert_Input>;
    on_conflict?: InputMaybe<Mealtype_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Mealtype_OneArgs = {
    object: Mealtype_Insert_Input;
    on_conflict?: InputMaybe<Mealtype_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MenuArgs = {
    objects: Array<Menu_Insert_Input>;
    on_conflict?: InputMaybe<Menu_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Menu_OneArgs = {
    object: Menu_Insert_Input;
    on_conflict?: InputMaybe<Menu_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MenuitemArgs = {
    objects: Array<Menuitem_Insert_Input>;
    on_conflict?: InputMaybe<Menuitem_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Menuitem_OneArgs = {
    object: Menuitem_Insert_Input;
    on_conflict?: InputMaybe<Menuitem_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PaymentmethodArgs = {
    objects: Array<Paymentmethod_Insert_Input>;
    on_conflict?: InputMaybe<Paymentmethod_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Paymentmethod_OneArgs = {
    object: Paymentmethod_Insert_Input;
    on_conflict?: InputMaybe<Paymentmethod_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
    objects: Array<Role_Insert_Input>;
    on_conflict?: InputMaybe<Role_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
    object: Role_Insert_Input;
    on_conflict?: InputMaybe<Role_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ShiftArgs = {
    objects: Array<Shift_Insert_Input>;
    on_conflict?: InputMaybe<Shift_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Shift_OneArgs = {
    object: Shift_Insert_Input;
    on_conflict?: InputMaybe<Shift_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SpecialrequestArgs = {
    objects: Array<Specialrequest_Insert_Input>;
    on_conflict?: InputMaybe<Specialrequest_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Specialrequest_OneArgs = {
    object: Specialrequest_Insert_Input;
    on_conflict?: InputMaybe<Specialrequest_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SystemsettingArgs = {
    objects: Array<Systemsetting_Insert_Input>;
    on_conflict?: InputMaybe<Systemsetting_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Systemsetting_OneArgs = {
    object: Systemsetting_Insert_Input;
    on_conflict?: InputMaybe<Systemsetting_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_TableArgs = {
    objects: Array<Table_Insert_Input>;
    on_conflict?: InputMaybe<Table_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Table_OneArgs = {
    object: Table_Insert_Input;
    on_conflict?: InputMaybe<Table_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_VoidreasonArgs = {
    objects: Array<Voidreason_Insert_Input>;
    on_conflict?: InputMaybe<Voidreason_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Voidreason_OneArgs = {
    object: Voidreason_Insert_Input;
    on_conflict?: InputMaybe<Voidreason_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_WorksessionArgs = {
    objects: Array<Worksession_Insert_Input>;
    on_conflict?: InputMaybe<Worksession_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Worksession_OneArgs = {
    object: Worksession_Insert_Input;
    on_conflict?: InputMaybe<Worksession_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_AccountArgs = {
    _inc?: InputMaybe<Account_Inc_Input>;
    _set?: InputMaybe<Account_Set_Input>;
    where: Account_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Account_By_PkArgs = {
    _inc?: InputMaybe<Account_Inc_Input>;
    _set?: InputMaybe<Account_Set_Input>;
    pk_columns: Account_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_BillArgs = {
    _inc?: InputMaybe<Bill_Inc_Input>;
    _set?: InputMaybe<Bill_Set_Input>;
    where: Bill_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Bill_By_PkArgs = {
    _inc?: InputMaybe<Bill_Inc_Input>;
    _set?: InputMaybe<Bill_Set_Input>;
    pk_columns: Bill_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_BilldetailArgs = {
    _inc?: InputMaybe<Billdetail_Inc_Input>;
    _set?: InputMaybe<Billdetail_Set_Input>;
    where: Billdetail_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Billdetail_By_PkArgs = {
    _inc?: InputMaybe<Billdetail_Inc_Input>;
    _set?: InputMaybe<Billdetail_Set_Input>;
    pk_columns: Billdetail_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_BillpaymentArgs = {
    _inc?: InputMaybe<Billpayment_Inc_Input>;
    _set?: InputMaybe<Billpayment_Set_Input>;
    where: Billpayment_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Billpayment_By_PkArgs = {
    _inc?: InputMaybe<Billpayment_Inc_Input>;
    _set?: InputMaybe<Billpayment_Set_Input>;
    pk_columns: Billpayment_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_CheckArgs = {
    _inc?: InputMaybe<Check_Inc_Input>;
    _set?: InputMaybe<Check_Set_Input>;
    where: Check_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Check_By_PkArgs = {
    _inc?: InputMaybe<Check_Inc_Input>;
    _set?: InputMaybe<Check_Set_Input>;
    pk_columns: Check_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_CheckdetailArgs = {
    _inc?: InputMaybe<Checkdetail_Inc_Input>;
    _set?: InputMaybe<Checkdetail_Set_Input>;
    where: Checkdetail_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Checkdetail_By_PkArgs = {
    _inc?: InputMaybe<Checkdetail_Inc_Input>;
    _set?: InputMaybe<Checkdetail_Set_Input>;
    pk_columns: Checkdetail_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_CheckitemspecialrequestArgs = {
    _inc?: InputMaybe<Checkitemspecialrequest_Inc_Input>;
    _set?: InputMaybe<Checkitemspecialrequest_Set_Input>;
    where: Checkitemspecialrequest_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Checkitemspecialrequest_By_PkArgs = {
    _inc?: InputMaybe<Checkitemspecialrequest_Inc_Input>;
    _set?: InputMaybe<Checkitemspecialrequest_Set_Input>;
    pk_columns: Checkitemspecialrequest_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ItemArgs = {
    _inc?: InputMaybe<Item_Inc_Input>;
    _set?: InputMaybe<Item_Set_Input>;
    where: Item_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Item_By_PkArgs = {
    _inc?: InputMaybe<Item_Inc_Input>;
    _set?: InputMaybe<Item_Set_Input>;
    pk_columns: Item_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ItemoutofstockArgs = {
    _inc?: InputMaybe<Itemoutofstock_Inc_Input>;
    _set?: InputMaybe<Itemoutofstock_Set_Input>;
    where: Itemoutofstock_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Itemoutofstock_By_PkArgs = {
    _inc?: InputMaybe<Itemoutofstock_Inc_Input>;
    _set?: InputMaybe<Itemoutofstock_Set_Input>;
    pk_columns: Itemoutofstock_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_LocationArgs = {
    _inc?: InputMaybe<Location_Inc_Input>;
    _set?: InputMaybe<Location_Set_Input>;
    where: Location_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Location_By_PkArgs = {
    _inc?: InputMaybe<Location_Inc_Input>;
    _set?: InputMaybe<Location_Set_Input>;
    pk_columns: Location_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_MajorgroupArgs = {
    _inc?: InputMaybe<Majorgroup_Inc_Input>;
    _set?: InputMaybe<Majorgroup_Set_Input>;
    where: Majorgroup_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Majorgroup_By_PkArgs = {
    _inc?: InputMaybe<Majorgroup_Inc_Input>;
    _set?: InputMaybe<Majorgroup_Set_Input>;
    pk_columns: Majorgroup_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_MealtypeArgs = {
    _inc?: InputMaybe<Mealtype_Inc_Input>;
    _set?: InputMaybe<Mealtype_Set_Input>;
    where: Mealtype_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Mealtype_By_PkArgs = {
    _inc?: InputMaybe<Mealtype_Inc_Input>;
    _set?: InputMaybe<Mealtype_Set_Input>;
    pk_columns: Mealtype_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_MenuArgs = {
    _inc?: InputMaybe<Menu_Inc_Input>;
    _set?: InputMaybe<Menu_Set_Input>;
    where: Menu_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Menu_By_PkArgs = {
    _inc?: InputMaybe<Menu_Inc_Input>;
    _set?: InputMaybe<Menu_Set_Input>;
    pk_columns: Menu_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_MenuitemArgs = {
    _inc?: InputMaybe<Menuitem_Inc_Input>;
    _set?: InputMaybe<Menuitem_Set_Input>;
    where: Menuitem_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Menuitem_By_PkArgs = {
    _inc?: InputMaybe<Menuitem_Inc_Input>;
    _set?: InputMaybe<Menuitem_Set_Input>;
    pk_columns: Menuitem_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_PaymentmethodArgs = {
    _inc?: InputMaybe<Paymentmethod_Inc_Input>;
    _set?: InputMaybe<Paymentmethod_Set_Input>;
    where: Paymentmethod_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Paymentmethod_By_PkArgs = {
    _inc?: InputMaybe<Paymentmethod_Inc_Input>;
    _set?: InputMaybe<Paymentmethod_Set_Input>;
    pk_columns: Paymentmethod_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
    _inc?: InputMaybe<Role_Inc_Input>;
    _set?: InputMaybe<Role_Set_Input>;
    where: Role_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
    _inc?: InputMaybe<Role_Inc_Input>;
    _set?: InputMaybe<Role_Set_Input>;
    pk_columns: Role_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ShiftArgs = {
    _inc?: InputMaybe<Shift_Inc_Input>;
    _set?: InputMaybe<Shift_Set_Input>;
    where: Shift_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Shift_By_PkArgs = {
    _inc?: InputMaybe<Shift_Inc_Input>;
    _set?: InputMaybe<Shift_Set_Input>;
    pk_columns: Shift_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_SpecialrequestArgs = {
    _inc?: InputMaybe<Specialrequest_Inc_Input>;
    _set?: InputMaybe<Specialrequest_Set_Input>;
    where: Specialrequest_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Specialrequest_By_PkArgs = {
    _inc?: InputMaybe<Specialrequest_Inc_Input>;
    _set?: InputMaybe<Specialrequest_Set_Input>;
    pk_columns: Specialrequest_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_SystemsettingArgs = {
    _inc?: InputMaybe<Systemsetting_Inc_Input>;
    _set?: InputMaybe<Systemsetting_Set_Input>;
    where: Systemsetting_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Systemsetting_By_PkArgs = {
    _inc?: InputMaybe<Systemsetting_Inc_Input>;
    _set?: InputMaybe<Systemsetting_Set_Input>;
    pk_columns: Systemsetting_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_TableArgs = {
    _inc?: InputMaybe<Table_Inc_Input>;
    _set?: InputMaybe<Table_Set_Input>;
    where: Table_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Table_By_PkArgs = {
    _inc?: InputMaybe<Table_Inc_Input>;
    _set?: InputMaybe<Table_Set_Input>;
    pk_columns: Table_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_VoidreasonArgs = {
    _inc?: InputMaybe<Voidreason_Inc_Input>;
    _set?: InputMaybe<Voidreason_Set_Input>;
    where: Voidreason_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Voidreason_By_PkArgs = {
    _inc?: InputMaybe<Voidreason_Inc_Input>;
    _set?: InputMaybe<Voidreason_Set_Input>;
    pk_columns: Voidreason_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_WorksessionArgs = {
    _inc?: InputMaybe<Worksession_Inc_Input>;
    _set?: InputMaybe<Worksession_Set_Input>;
    where: Worksession_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Worksession_By_PkArgs = {
    _inc?: InputMaybe<Worksession_Inc_Input>;
    _set?: InputMaybe<Worksession_Set_Input>;
    pk_columns: Worksession_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
    /** in ascending order, nulls last */
    Asc = "asc",
    /** in ascending order, nulls first */
    AscNullsFirst = "asc_nulls_first",
    /** in ascending order, nulls last */
    AscNullsLast = "asc_nulls_last",
    /** in descending order, nulls first */
    Desc = "desc",
    /** in descending order, nulls first */
    DescNullsFirst = "desc_nulls_first",
    /** in descending order, nulls last */
    DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "paymentmethod" */
export type Paymentmethod = {
    __typename?: "paymentmethod";
    /** An array relationship */
    billpayments: Array<Billpayment>;
    /** An aggregate relationship */
    billpayments_aggregate: Billpayment_Aggregate;
    id: Scalars["Int"];
    name: Scalars["String"];
    status: Scalars["basic_status"];
};

/** columns and relationships of "paymentmethod" */
export type PaymentmethodBillpaymentsArgs = {
    distinct_on?: InputMaybe<Array<Billpayment_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Billpayment_Order_By>>;
    where?: InputMaybe<Billpayment_Bool_Exp>;
};

/** columns and relationships of "paymentmethod" */
export type PaymentmethodBillpayments_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Billpayment_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Billpayment_Order_By>>;
    where?: InputMaybe<Billpayment_Bool_Exp>;
};

/** aggregated selection of "paymentmethod" */
export type Paymentmethod_Aggregate = {
    __typename?: "paymentmethod_aggregate";
    aggregate?: Maybe<Paymentmethod_Aggregate_Fields>;
    nodes: Array<Paymentmethod>;
};

/** aggregate fields of "paymentmethod" */
export type Paymentmethod_Aggregate_Fields = {
    __typename?: "paymentmethod_aggregate_fields";
    avg?: Maybe<Paymentmethod_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Paymentmethod_Max_Fields>;
    min?: Maybe<Paymentmethod_Min_Fields>;
    stddev?: Maybe<Paymentmethod_Stddev_Fields>;
    stddev_pop?: Maybe<Paymentmethod_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Paymentmethod_Stddev_Samp_Fields>;
    sum?: Maybe<Paymentmethod_Sum_Fields>;
    var_pop?: Maybe<Paymentmethod_Var_Pop_Fields>;
    var_samp?: Maybe<Paymentmethod_Var_Samp_Fields>;
    variance?: Maybe<Paymentmethod_Variance_Fields>;
};

/** aggregate fields of "paymentmethod" */
export type Paymentmethod_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Paymentmethod_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Paymentmethod_Avg_Fields = {
    __typename?: "paymentmethod_avg_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "paymentmethod". All fields are combined with a logical 'AND'. */
export type Paymentmethod_Bool_Exp = {
    _and?: InputMaybe<Array<Paymentmethod_Bool_Exp>>;
    _not?: InputMaybe<Paymentmethod_Bool_Exp>;
    _or?: InputMaybe<Array<Paymentmethod_Bool_Exp>>;
    billpayments?: InputMaybe<Billpayment_Bool_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    status?: InputMaybe<Basic_Status_Comparison_Exp>;
};

/** unique or primary key constraints on table "paymentmethod" */
export enum Paymentmethod_Constraint {
    /** unique or primary key constraint */
    PaymentmethodPkey = "paymentmethod_pkey",
}

/** input type for incrementing numeric columns in table "paymentmethod" */
export type Paymentmethod_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "paymentmethod" */
export type Paymentmethod_Insert_Input = {
    billpayments?: InputMaybe<Billpayment_Arr_Rel_Insert_Input>;
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    status?: InputMaybe<Scalars["basic_status"]>;
};

/** aggregate max on columns */
export type Paymentmethod_Max_Fields = {
    __typename?: "paymentmethod_max_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Paymentmethod_Min_Fields = {
    __typename?: "paymentmethod_min_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "paymentmethod" */
export type Paymentmethod_Mutation_Response = {
    __typename?: "paymentmethod_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Paymentmethod>;
};

/** input type for inserting object relation for remote table "paymentmethod" */
export type Paymentmethod_Obj_Rel_Insert_Input = {
    data: Paymentmethod_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Paymentmethod_On_Conflict>;
};

/** on_conflict condition type for table "paymentmethod" */
export type Paymentmethod_On_Conflict = {
    constraint: Paymentmethod_Constraint;
    update_columns?: Array<Paymentmethod_Update_Column>;
    where?: InputMaybe<Paymentmethod_Bool_Exp>;
};

/** Ordering options when selecting data from "paymentmethod". */
export type Paymentmethod_Order_By = {
    billpayments_aggregate?: InputMaybe<Billpayment_Aggregate_Order_By>;
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: paymentmethod */
export type Paymentmethod_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "paymentmethod" */
export enum Paymentmethod_Select_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Status = "status",
}

/** input type for updating data in table "paymentmethod" */
export type Paymentmethod_Set_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    status?: InputMaybe<Scalars["basic_status"]>;
};

/** aggregate stddev on columns */
export type Paymentmethod_Stddev_Fields = {
    __typename?: "paymentmethod_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Paymentmethod_Stddev_Pop_Fields = {
    __typename?: "paymentmethod_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Paymentmethod_Stddev_Samp_Fields = {
    __typename?: "paymentmethod_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Paymentmethod_Sum_Fields = {
    __typename?: "paymentmethod_sum_fields";
    id?: Maybe<Scalars["Int"]>;
};

/** update columns of table "paymentmethod" */
export enum Paymentmethod_Update_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Status = "status",
}

/** aggregate var_pop on columns */
export type Paymentmethod_Var_Pop_Fields = {
    __typename?: "paymentmethod_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Paymentmethod_Var_Samp_Fields = {
    __typename?: "paymentmethod_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Paymentmethod_Variance_Fields = {
    __typename?: "paymentmethod_variance_fields";
    id?: Maybe<Scalars["Float"]>;
};

export type Query_Root = {
    __typename?: "query_root";
    /** fetch data from the table: "account" */
    account: Array<Account>;
    /** fetch aggregated fields from the table: "account" */
    account_aggregate: Account_Aggregate;
    /** fetch data from the table: "account" using primary key columns */
    account_by_pk?: Maybe<Account>;
    /** fetch data from the table: "bill" */
    bill: Array<Bill>;
    /** fetch aggregated fields from the table: "bill" */
    bill_aggregate: Bill_Aggregate;
    /** fetch data from the table: "bill" using primary key columns */
    bill_by_pk?: Maybe<Bill>;
    /** fetch data from the table: "billdetail" */
    billdetail: Array<Billdetail>;
    /** fetch aggregated fields from the table: "billdetail" */
    billdetail_aggregate: Billdetail_Aggregate;
    /** fetch data from the table: "billdetail" using primary key columns */
    billdetail_by_pk?: Maybe<Billdetail>;
    /** fetch data from the table: "billpayment" */
    billpayment: Array<Billpayment>;
    /** fetch aggregated fields from the table: "billpayment" */
    billpayment_aggregate: Billpayment_Aggregate;
    /** fetch data from the table: "billpayment" using primary key columns */
    billpayment_by_pk?: Maybe<Billpayment>;
    /** fetch data from the table: "check" */
    check: Array<Check>;
    /** fetch aggregated fields from the table: "check" */
    check_aggregate: Check_Aggregate;
    /** fetch data from the table: "check" using primary key columns */
    check_by_pk?: Maybe<Check>;
    /** fetch data from the table: "checkdetail" */
    checkdetail: Array<Checkdetail>;
    /** fetch aggregated fields from the table: "checkdetail" */
    checkdetail_aggregate: Checkdetail_Aggregate;
    /** fetch data from the table: "checkdetail" using primary key columns */
    checkdetail_by_pk?: Maybe<Checkdetail>;
    /** fetch data from the table: "checkitemspecialrequest" */
    checkitemspecialrequest: Array<Checkitemspecialrequest>;
    /** fetch aggregated fields from the table: "checkitemspecialrequest" */
    checkitemspecialrequest_aggregate: Checkitemspecialrequest_Aggregate;
    /** fetch data from the table: "checkitemspecialrequest" using primary key columns */
    checkitemspecialrequest_by_pk?: Maybe<Checkitemspecialrequest>;
    /** fetch data from the table: "item" */
    item: Array<Item>;
    /** fetch aggregated fields from the table: "item" */
    item_aggregate: Item_Aggregate;
    /** fetch data from the table: "item" using primary key columns */
    item_by_pk?: Maybe<Item>;
    /** fetch data from the table: "itemoutofstock" */
    itemoutofstock: Array<Itemoutofstock>;
    /** fetch aggregated fields from the table: "itemoutofstock" */
    itemoutofstock_aggregate: Itemoutofstock_Aggregate;
    /** fetch data from the table: "itemoutofstock" using primary key columns */
    itemoutofstock_by_pk?: Maybe<Itemoutofstock>;
    /** fetch data from the table: "location" */
    location: Array<Location>;
    /** fetch aggregated fields from the table: "location" */
    location_aggregate: Location_Aggregate;
    /** fetch data from the table: "location" using primary key columns */
    location_by_pk?: Maybe<Location>;
    /** fetch data from the table: "majorgroup" */
    majorgroup: Array<Majorgroup>;
    /** fetch aggregated fields from the table: "majorgroup" */
    majorgroup_aggregate: Majorgroup_Aggregate;
    /** fetch data from the table: "majorgroup" using primary key columns */
    majorgroup_by_pk?: Maybe<Majorgroup>;
    /** fetch data from the table: "mealtype" */
    mealtype: Array<Mealtype>;
    /** fetch aggregated fields from the table: "mealtype" */
    mealtype_aggregate: Mealtype_Aggregate;
    /** fetch data from the table: "mealtype" using primary key columns */
    mealtype_by_pk?: Maybe<Mealtype>;
    /** fetch data from the table: "menu" */
    menu: Array<Menu>;
    /** fetch aggregated fields from the table: "menu" */
    menu_aggregate: Menu_Aggregate;
    /** fetch data from the table: "menu" using primary key columns */
    menu_by_pk?: Maybe<Menu>;
    /** fetch data from the table: "menuitem" */
    menuitem: Array<Menuitem>;
    /** fetch aggregated fields from the table: "menuitem" */
    menuitem_aggregate: Menuitem_Aggregate;
    /** fetch data from the table: "menuitem" using primary key columns */
    menuitem_by_pk?: Maybe<Menuitem>;
    /** fetch data from the table: "paymentmethod" */
    paymentmethod: Array<Paymentmethod>;
    /** fetch aggregated fields from the table: "paymentmethod" */
    paymentmethod_aggregate: Paymentmethod_Aggregate;
    /** fetch data from the table: "paymentmethod" using primary key columns */
    paymentmethod_by_pk?: Maybe<Paymentmethod>;
    /** fetch data from the table: "role" */
    role: Array<Role>;
    /** fetch aggregated fields from the table: "role" */
    role_aggregate: Role_Aggregate;
    /** fetch data from the table: "role" using primary key columns */
    role_by_pk?: Maybe<Role>;
    /** fetch data from the table: "shift" */
    shift: Array<Shift>;
    /** fetch aggregated fields from the table: "shift" */
    shift_aggregate: Shift_Aggregate;
    /** fetch data from the table: "shift" using primary key columns */
    shift_by_pk?: Maybe<Shift>;
    /** fetch data from the table: "specialrequest" */
    specialrequest: Array<Specialrequest>;
    /** fetch aggregated fields from the table: "specialrequest" */
    specialrequest_aggregate: Specialrequest_Aggregate;
    /** fetch data from the table: "specialrequest" using primary key columns */
    specialrequest_by_pk?: Maybe<Specialrequest>;
    /** fetch data from the table: "systemsetting" */
    systemsetting: Array<Systemsetting>;
    /** fetch aggregated fields from the table: "systemsetting" */
    systemsetting_aggregate: Systemsetting_Aggregate;
    /** fetch data from the table: "systemsetting" using primary key columns */
    systemsetting_by_pk?: Maybe<Systemsetting>;
    /** fetch data from the table: "table" */
    table: Array<Table>;
    /** fetch aggregated fields from the table: "table" */
    table_aggregate: Table_Aggregate;
    /** fetch data from the table: "table" using primary key columns */
    table_by_pk?: Maybe<Table>;
    /** fetch data from the table: "voidreason" */
    voidreason: Array<Voidreason>;
    /** fetch aggregated fields from the table: "voidreason" */
    voidreason_aggregate: Voidreason_Aggregate;
    /** fetch data from the table: "voidreason" using primary key columns */
    voidreason_by_pk?: Maybe<Voidreason>;
    /** fetch data from the table: "worksession" */
    worksession: Array<Worksession>;
    /** fetch aggregated fields from the table: "worksession" */
    worksession_aggregate: Worksession_Aggregate;
    /** fetch data from the table: "worksession" using primary key columns */
    worksession_by_pk?: Maybe<Worksession>;
};

export type Query_RootAccountArgs = {
    distinct_on?: InputMaybe<Array<Account_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Account_Order_By>>;
    where?: InputMaybe<Account_Bool_Exp>;
};

export type Query_RootAccount_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Account_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Account_Order_By>>;
    where?: InputMaybe<Account_Bool_Exp>;
};

export type Query_RootAccount_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootBillArgs = {
    distinct_on?: InputMaybe<Array<Bill_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Bill_Order_By>>;
    where?: InputMaybe<Bill_Bool_Exp>;
};

export type Query_RootBill_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Bill_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Bill_Order_By>>;
    where?: InputMaybe<Bill_Bool_Exp>;
};

export type Query_RootBill_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootBilldetailArgs = {
    distinct_on?: InputMaybe<Array<Billdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Billdetail_Order_By>>;
    where?: InputMaybe<Billdetail_Bool_Exp>;
};

export type Query_RootBilldetail_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Billdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Billdetail_Order_By>>;
    where?: InputMaybe<Billdetail_Bool_Exp>;
};

export type Query_RootBilldetail_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootBillpaymentArgs = {
    distinct_on?: InputMaybe<Array<Billpayment_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Billpayment_Order_By>>;
    where?: InputMaybe<Billpayment_Bool_Exp>;
};

export type Query_RootBillpayment_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Billpayment_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Billpayment_Order_By>>;
    where?: InputMaybe<Billpayment_Bool_Exp>;
};

export type Query_RootBillpayment_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootCheckArgs = {
    distinct_on?: InputMaybe<Array<Check_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Check_Order_By>>;
    where?: InputMaybe<Check_Bool_Exp>;
};

export type Query_RootCheck_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Check_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Check_Order_By>>;
    where?: InputMaybe<Check_Bool_Exp>;
};

export type Query_RootCheck_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootCheckdetailArgs = {
    distinct_on?: InputMaybe<Array<Checkdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Checkdetail_Order_By>>;
    where?: InputMaybe<Checkdetail_Bool_Exp>;
};

export type Query_RootCheckdetail_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Checkdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Checkdetail_Order_By>>;
    where?: InputMaybe<Checkdetail_Bool_Exp>;
};

export type Query_RootCheckdetail_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootCheckitemspecialrequestArgs = {
    distinct_on?: InputMaybe<Array<Checkitemspecialrequest_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Checkitemspecialrequest_Order_By>>;
    where?: InputMaybe<Checkitemspecialrequest_Bool_Exp>;
};

export type Query_RootCheckitemspecialrequest_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Checkitemspecialrequest_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Checkitemspecialrequest_Order_By>>;
    where?: InputMaybe<Checkitemspecialrequest_Bool_Exp>;
};

export type Query_RootCheckitemspecialrequest_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootItemArgs = {
    distinct_on?: InputMaybe<Array<Item_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Item_Order_By>>;
    where?: InputMaybe<Item_Bool_Exp>;
};

export type Query_RootItem_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Item_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Item_Order_By>>;
    where?: InputMaybe<Item_Bool_Exp>;
};

export type Query_RootItem_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootItemoutofstockArgs = {
    distinct_on?: InputMaybe<Array<Itemoutofstock_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Itemoutofstock_Order_By>>;
    where?: InputMaybe<Itemoutofstock_Bool_Exp>;
};

export type Query_RootItemoutofstock_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Itemoutofstock_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Itemoutofstock_Order_By>>;
    where?: InputMaybe<Itemoutofstock_Bool_Exp>;
};

export type Query_RootItemoutofstock_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootLocationArgs = {
    distinct_on?: InputMaybe<Array<Location_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Location_Order_By>>;
    where?: InputMaybe<Location_Bool_Exp>;
};

export type Query_RootLocation_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Location_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Location_Order_By>>;
    where?: InputMaybe<Location_Bool_Exp>;
};

export type Query_RootLocation_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootMajorgroupArgs = {
    distinct_on?: InputMaybe<Array<Majorgroup_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Majorgroup_Order_By>>;
    where?: InputMaybe<Majorgroup_Bool_Exp>;
};

export type Query_RootMajorgroup_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Majorgroup_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Majorgroup_Order_By>>;
    where?: InputMaybe<Majorgroup_Bool_Exp>;
};

export type Query_RootMajorgroup_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootMealtypeArgs = {
    distinct_on?: InputMaybe<Array<Mealtype_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Mealtype_Order_By>>;
    where?: InputMaybe<Mealtype_Bool_Exp>;
};

export type Query_RootMealtype_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Mealtype_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Mealtype_Order_By>>;
    where?: InputMaybe<Mealtype_Bool_Exp>;
};

export type Query_RootMealtype_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootMenuArgs = {
    distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Menu_Order_By>>;
    where?: InputMaybe<Menu_Bool_Exp>;
};

export type Query_RootMenu_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Menu_Order_By>>;
    where?: InputMaybe<Menu_Bool_Exp>;
};

export type Query_RootMenu_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootMenuitemArgs = {
    distinct_on?: InputMaybe<Array<Menuitem_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Menuitem_Order_By>>;
    where?: InputMaybe<Menuitem_Bool_Exp>;
};

export type Query_RootMenuitem_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Menuitem_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Menuitem_Order_By>>;
    where?: InputMaybe<Menuitem_Bool_Exp>;
};

export type Query_RootMenuitem_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootPaymentmethodArgs = {
    distinct_on?: InputMaybe<Array<Paymentmethod_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Paymentmethod_Order_By>>;
    where?: InputMaybe<Paymentmethod_Bool_Exp>;
};

export type Query_RootPaymentmethod_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Paymentmethod_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Paymentmethod_Order_By>>;
    where?: InputMaybe<Paymentmethod_Bool_Exp>;
};

export type Query_RootPaymentmethod_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootRoleArgs = {
    distinct_on?: InputMaybe<Array<Role_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Role_Order_By>>;
    where?: InputMaybe<Role_Bool_Exp>;
};

export type Query_RootRole_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Role_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Role_Order_By>>;
    where?: InputMaybe<Role_Bool_Exp>;
};

export type Query_RootRole_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootShiftArgs = {
    distinct_on?: InputMaybe<Array<Shift_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Shift_Order_By>>;
    where?: InputMaybe<Shift_Bool_Exp>;
};

export type Query_RootShift_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Shift_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Shift_Order_By>>;
    where?: InputMaybe<Shift_Bool_Exp>;
};

export type Query_RootShift_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootSpecialrequestArgs = {
    distinct_on?: InputMaybe<Array<Specialrequest_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Specialrequest_Order_By>>;
    where?: InputMaybe<Specialrequest_Bool_Exp>;
};

export type Query_RootSpecialrequest_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Specialrequest_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Specialrequest_Order_By>>;
    where?: InputMaybe<Specialrequest_Bool_Exp>;
};

export type Query_RootSpecialrequest_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootSystemsettingArgs = {
    distinct_on?: InputMaybe<Array<Systemsetting_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Systemsetting_Order_By>>;
    where?: InputMaybe<Systemsetting_Bool_Exp>;
};

export type Query_RootSystemsetting_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Systemsetting_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Systemsetting_Order_By>>;
    where?: InputMaybe<Systemsetting_Bool_Exp>;
};

export type Query_RootSystemsetting_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootTableArgs = {
    distinct_on?: InputMaybe<Array<Table_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Table_Order_By>>;
    where?: InputMaybe<Table_Bool_Exp>;
};

export type Query_RootTable_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Table_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Table_Order_By>>;
    where?: InputMaybe<Table_Bool_Exp>;
};

export type Query_RootTable_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootVoidreasonArgs = {
    distinct_on?: InputMaybe<Array<Voidreason_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Voidreason_Order_By>>;
    where?: InputMaybe<Voidreason_Bool_Exp>;
};

export type Query_RootVoidreason_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Voidreason_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Voidreason_Order_By>>;
    where?: InputMaybe<Voidreason_Bool_Exp>;
};

export type Query_RootVoidreason_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootWorksessionArgs = {
    distinct_on?: InputMaybe<Array<Worksession_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Worksession_Order_By>>;
    where?: InputMaybe<Worksession_Bool_Exp>;
};

export type Query_RootWorksession_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Worksession_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Worksession_Order_By>>;
    where?: InputMaybe<Worksession_Bool_Exp>;
};

export type Query_RootWorksession_By_PkArgs = {
    id: Scalars["Int"];
};

/** columns and relationships of "role" */
export type Role = {
    __typename?: "role";
    /** An array relationship */
    accounts: Array<Account>;
    /** An aggregate relationship */
    accounts_aggregate: Account_Aggregate;
    id: Scalars["Int"];
    name: Scalars["String"];
};

/** columns and relationships of "role" */
export type RoleAccountsArgs = {
    distinct_on?: InputMaybe<Array<Account_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Account_Order_By>>;
    where?: InputMaybe<Account_Bool_Exp>;
};

/** columns and relationships of "role" */
export type RoleAccounts_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Account_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Account_Order_By>>;
    where?: InputMaybe<Account_Bool_Exp>;
};

/** aggregated selection of "role" */
export type Role_Aggregate = {
    __typename?: "role_aggregate";
    aggregate?: Maybe<Role_Aggregate_Fields>;
    nodes: Array<Role>;
};

/** aggregate fields of "role" */
export type Role_Aggregate_Fields = {
    __typename?: "role_aggregate_fields";
    avg?: Maybe<Role_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Role_Max_Fields>;
    min?: Maybe<Role_Min_Fields>;
    stddev?: Maybe<Role_Stddev_Fields>;
    stddev_pop?: Maybe<Role_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Role_Stddev_Samp_Fields>;
    sum?: Maybe<Role_Sum_Fields>;
    var_pop?: Maybe<Role_Var_Pop_Fields>;
    var_samp?: Maybe<Role_Var_Samp_Fields>;
    variance?: Maybe<Role_Variance_Fields>;
};

/** aggregate fields of "role" */
export type Role_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Role_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Role_Avg_Fields = {
    __typename?: "role_avg_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
    _and?: InputMaybe<Array<Role_Bool_Exp>>;
    _not?: InputMaybe<Role_Bool_Exp>;
    _or?: InputMaybe<Array<Role_Bool_Exp>>;
    accounts?: InputMaybe<Account_Bool_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "role" */
export enum Role_Constraint {
    /** unique or primary key constraint */
    RolePkey = "role_pkey",
}

/** input type for incrementing numeric columns in table "role" */
export type Role_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "role" */
export type Role_Insert_Input = {
    accounts?: InputMaybe<Account_Arr_Rel_Insert_Input>;
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
    __typename?: "role_max_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
    __typename?: "role_min_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "role" */
export type Role_Mutation_Response = {
    __typename?: "role_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Role>;
};

/** input type for inserting object relation for remote table "role" */
export type Role_Obj_Rel_Insert_Input = {
    data: Role_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Role_On_Conflict>;
};

/** on_conflict condition type for table "role" */
export type Role_On_Conflict = {
    constraint: Role_Constraint;
    update_columns?: Array<Role_Update_Column>;
    where?: InputMaybe<Role_Bool_Exp>;
};

/** Ordering options when selecting data from "role". */
export type Role_Order_By = {
    accounts_aggregate?: InputMaybe<Account_Aggregate_Order_By>;
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: role */
export type Role_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "role" */
export enum Role_Select_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
}

/** input type for updating data in table "role" */
export type Role_Set_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Role_Stddev_Fields = {
    __typename?: "role_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Role_Stddev_Pop_Fields = {
    __typename?: "role_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Role_Stddev_Samp_Fields = {
    __typename?: "role_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Role_Sum_Fields = {
    __typename?: "role_sum_fields";
    id?: Maybe<Scalars["Int"]>;
};

/** update columns of table "role" */
export enum Role_Update_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
}

/** aggregate var_pop on columns */
export type Role_Var_Pop_Fields = {
    __typename?: "role_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Role_Var_Samp_Fields = {
    __typename?: "role_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Role_Variance_Fields = {
    __typename?: "role_variance_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "shift" */
export type Shift = {
    __typename?: "shift";
    /** An array relationship */
    checks: Array<Check>;
    /** An aggregate relationship */
    checks_aggregate: Check_Aggregate;
    closerid?: Maybe<Scalars["Int"]>;
    endtime: Scalars["time"];
    id: Scalars["Int"];
    isopen: Scalars["Boolean"];
    name: Scalars["String"];
    openerid?: Maybe<Scalars["Int"]>;
    starttime: Scalars["time"];
    status: Scalars["basic_status"];
    /** An object relationship */
    worksession: Worksession;
    worksessionid: Scalars["Int"];
};

/** columns and relationships of "shift" */
export type ShiftChecksArgs = {
    distinct_on?: InputMaybe<Array<Check_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Check_Order_By>>;
    where?: InputMaybe<Check_Bool_Exp>;
};

/** columns and relationships of "shift" */
export type ShiftChecks_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Check_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Check_Order_By>>;
    where?: InputMaybe<Check_Bool_Exp>;
};

/** aggregated selection of "shift" */
export type Shift_Aggregate = {
    __typename?: "shift_aggregate";
    aggregate?: Maybe<Shift_Aggregate_Fields>;
    nodes: Array<Shift>;
};

/** aggregate fields of "shift" */
export type Shift_Aggregate_Fields = {
    __typename?: "shift_aggregate_fields";
    avg?: Maybe<Shift_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Shift_Max_Fields>;
    min?: Maybe<Shift_Min_Fields>;
    stddev?: Maybe<Shift_Stddev_Fields>;
    stddev_pop?: Maybe<Shift_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Shift_Stddev_Samp_Fields>;
    sum?: Maybe<Shift_Sum_Fields>;
    var_pop?: Maybe<Shift_Var_Pop_Fields>;
    var_samp?: Maybe<Shift_Var_Samp_Fields>;
    variance?: Maybe<Shift_Variance_Fields>;
};

/** aggregate fields of "shift" */
export type Shift_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Shift_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "shift" */
export type Shift_Aggregate_Order_By = {
    avg?: InputMaybe<Shift_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Shift_Max_Order_By>;
    min?: InputMaybe<Shift_Min_Order_By>;
    stddev?: InputMaybe<Shift_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Shift_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Shift_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Shift_Sum_Order_By>;
    var_pop?: InputMaybe<Shift_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Shift_Var_Samp_Order_By>;
    variance?: InputMaybe<Shift_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "shift" */
export type Shift_Arr_Rel_Insert_Input = {
    data: Array<Shift_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Shift_On_Conflict>;
};

/** aggregate avg on columns */
export type Shift_Avg_Fields = {
    __typename?: "shift_avg_fields";
    closerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    openerid?: Maybe<Scalars["Float"]>;
    worksessionid?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "shift" */
export type Shift_Avg_Order_By = {
    closerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    openerid?: InputMaybe<Order_By>;
    worksessionid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "shift". All fields are combined with a logical 'AND'. */
export type Shift_Bool_Exp = {
    _and?: InputMaybe<Array<Shift_Bool_Exp>>;
    _not?: InputMaybe<Shift_Bool_Exp>;
    _or?: InputMaybe<Array<Shift_Bool_Exp>>;
    checks?: InputMaybe<Check_Bool_Exp>;
    closerid?: InputMaybe<Int_Comparison_Exp>;
    endtime?: InputMaybe<Time_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    isopen?: InputMaybe<Boolean_Comparison_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    openerid?: InputMaybe<Int_Comparison_Exp>;
    starttime?: InputMaybe<Time_Comparison_Exp>;
    status?: InputMaybe<Basic_Status_Comparison_Exp>;
    worksession?: InputMaybe<Worksession_Bool_Exp>;
    worksessionid?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "shift" */
export enum Shift_Constraint {
    /** unique or primary key constraint */
    ShiftPkey = "shift_pkey",
}

/** input type for incrementing numeric columns in table "shift" */
export type Shift_Inc_Input = {
    closerid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    openerid?: InputMaybe<Scalars["Int"]>;
    worksessionid?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "shift" */
export type Shift_Insert_Input = {
    checks?: InputMaybe<Check_Arr_Rel_Insert_Input>;
    closerid?: InputMaybe<Scalars["Int"]>;
    endtime?: InputMaybe<Scalars["time"]>;
    id?: InputMaybe<Scalars["Int"]>;
    isopen?: InputMaybe<Scalars["Boolean"]>;
    name?: InputMaybe<Scalars["String"]>;
    openerid?: InputMaybe<Scalars["Int"]>;
    starttime?: InputMaybe<Scalars["time"]>;
    status?: InputMaybe<Scalars["basic_status"]>;
    worksession?: InputMaybe<Worksession_Obj_Rel_Insert_Input>;
    worksessionid?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Shift_Max_Fields = {
    __typename?: "shift_max_fields";
    closerid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
    openerid?: Maybe<Scalars["Int"]>;
    worksessionid?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "shift" */
export type Shift_Max_Order_By = {
    closerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    openerid?: InputMaybe<Order_By>;
    worksessionid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Shift_Min_Fields = {
    __typename?: "shift_min_fields";
    closerid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
    openerid?: Maybe<Scalars["Int"]>;
    worksessionid?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "shift" */
export type Shift_Min_Order_By = {
    closerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    openerid?: InputMaybe<Order_By>;
    worksessionid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "shift" */
export type Shift_Mutation_Response = {
    __typename?: "shift_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Shift>;
};

/** input type for inserting object relation for remote table "shift" */
export type Shift_Obj_Rel_Insert_Input = {
    data: Shift_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Shift_On_Conflict>;
};

/** on_conflict condition type for table "shift" */
export type Shift_On_Conflict = {
    constraint: Shift_Constraint;
    update_columns?: Array<Shift_Update_Column>;
    where?: InputMaybe<Shift_Bool_Exp>;
};

/** Ordering options when selecting data from "shift". */
export type Shift_Order_By = {
    checks_aggregate?: InputMaybe<Check_Aggregate_Order_By>;
    closerid?: InputMaybe<Order_By>;
    endtime?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    isopen?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    openerid?: InputMaybe<Order_By>;
    starttime?: InputMaybe<Order_By>;
    status?: InputMaybe<Order_By>;
    worksession?: InputMaybe<Worksession_Order_By>;
    worksessionid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: shift */
export type Shift_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "shift" */
export enum Shift_Select_Column {
    /** column name */
    Closerid = "closerid",
    /** column name */
    Endtime = "endtime",
    /** column name */
    Id = "id",
    /** column name */
    Isopen = "isopen",
    /** column name */
    Name = "name",
    /** column name */
    Openerid = "openerid",
    /** column name */
    Starttime = "starttime",
    /** column name */
    Status = "status",
    /** column name */
    Worksessionid = "worksessionid",
}

/** input type for updating data in table "shift" */
export type Shift_Set_Input = {
    closerid?: InputMaybe<Scalars["Int"]>;
    endtime?: InputMaybe<Scalars["time"]>;
    id?: InputMaybe<Scalars["Int"]>;
    isopen?: InputMaybe<Scalars["Boolean"]>;
    name?: InputMaybe<Scalars["String"]>;
    openerid?: InputMaybe<Scalars["Int"]>;
    starttime?: InputMaybe<Scalars["time"]>;
    status?: InputMaybe<Scalars["basic_status"]>;
    worksessionid?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Shift_Stddev_Fields = {
    __typename?: "shift_stddev_fields";
    closerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    openerid?: Maybe<Scalars["Float"]>;
    worksessionid?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "shift" */
export type Shift_Stddev_Order_By = {
    closerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    openerid?: InputMaybe<Order_By>;
    worksessionid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Shift_Stddev_Pop_Fields = {
    __typename?: "shift_stddev_pop_fields";
    closerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    openerid?: Maybe<Scalars["Float"]>;
    worksessionid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "shift" */
export type Shift_Stddev_Pop_Order_By = {
    closerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    openerid?: InputMaybe<Order_By>;
    worksessionid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Shift_Stddev_Samp_Fields = {
    __typename?: "shift_stddev_samp_fields";
    closerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    openerid?: Maybe<Scalars["Float"]>;
    worksessionid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "shift" */
export type Shift_Stddev_Samp_Order_By = {
    closerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    openerid?: InputMaybe<Order_By>;
    worksessionid?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Shift_Sum_Fields = {
    __typename?: "shift_sum_fields";
    closerid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    openerid?: Maybe<Scalars["Int"]>;
    worksessionid?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "shift" */
export type Shift_Sum_Order_By = {
    closerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    openerid?: InputMaybe<Order_By>;
    worksessionid?: InputMaybe<Order_By>;
};

/** update columns of table "shift" */
export enum Shift_Update_Column {
    /** column name */
    Closerid = "closerid",
    /** column name */
    Endtime = "endtime",
    /** column name */
    Id = "id",
    /** column name */
    Isopen = "isopen",
    /** column name */
    Name = "name",
    /** column name */
    Openerid = "openerid",
    /** column name */
    Starttime = "starttime",
    /** column name */
    Status = "status",
    /** column name */
    Worksessionid = "worksessionid",
}

/** aggregate var_pop on columns */
export type Shift_Var_Pop_Fields = {
    __typename?: "shift_var_pop_fields";
    closerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    openerid?: Maybe<Scalars["Float"]>;
    worksessionid?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "shift" */
export type Shift_Var_Pop_Order_By = {
    closerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    openerid?: InputMaybe<Order_By>;
    worksessionid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Shift_Var_Samp_Fields = {
    __typename?: "shift_var_samp_fields";
    closerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    openerid?: Maybe<Scalars["Float"]>;
    worksessionid?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "shift" */
export type Shift_Var_Samp_Order_By = {
    closerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    openerid?: InputMaybe<Order_By>;
    worksessionid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Shift_Variance_Fields = {
    __typename?: "shift_variance_fields";
    closerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    openerid?: Maybe<Scalars["Float"]>;
    worksessionid?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "shift" */
export type Shift_Variance_Order_By = {
    closerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    openerid?: InputMaybe<Order_By>;
    worksessionid?: InputMaybe<Order_By>;
};

/** columns and relationships of "specialrequest" */
export type Specialrequest = {
    __typename?: "specialrequest";
    /** An array relationship */
    checkitemspecialrequests: Array<Checkitemspecialrequest>;
    /** An aggregate relationship */
    checkitemspecialrequests_aggregate: Checkitemspecialrequest_Aggregate;
    id: Scalars["Int"];
    /** An object relationship */
    majorgroup: Majorgroup;
    majorgroupid: Scalars["Int"];
    name: Scalars["String"];
    status: Scalars["basic_status"];
};

/** columns and relationships of "specialrequest" */
export type SpecialrequestCheckitemspecialrequestsArgs = {
    distinct_on?: InputMaybe<Array<Checkitemspecialrequest_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Checkitemspecialrequest_Order_By>>;
    where?: InputMaybe<Checkitemspecialrequest_Bool_Exp>;
};

/** columns and relationships of "specialrequest" */
export type SpecialrequestCheckitemspecialrequests_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Checkitemspecialrequest_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Checkitemspecialrequest_Order_By>>;
    where?: InputMaybe<Checkitemspecialrequest_Bool_Exp>;
};

/** aggregated selection of "specialrequest" */
export type Specialrequest_Aggregate = {
    __typename?: "specialrequest_aggregate";
    aggregate?: Maybe<Specialrequest_Aggregate_Fields>;
    nodes: Array<Specialrequest>;
};

/** aggregate fields of "specialrequest" */
export type Specialrequest_Aggregate_Fields = {
    __typename?: "specialrequest_aggregate_fields";
    avg?: Maybe<Specialrequest_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Specialrequest_Max_Fields>;
    min?: Maybe<Specialrequest_Min_Fields>;
    stddev?: Maybe<Specialrequest_Stddev_Fields>;
    stddev_pop?: Maybe<Specialrequest_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Specialrequest_Stddev_Samp_Fields>;
    sum?: Maybe<Specialrequest_Sum_Fields>;
    var_pop?: Maybe<Specialrequest_Var_Pop_Fields>;
    var_samp?: Maybe<Specialrequest_Var_Samp_Fields>;
    variance?: Maybe<Specialrequest_Variance_Fields>;
};

/** aggregate fields of "specialrequest" */
export type Specialrequest_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Specialrequest_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "specialrequest" */
export type Specialrequest_Aggregate_Order_By = {
    avg?: InputMaybe<Specialrequest_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Specialrequest_Max_Order_By>;
    min?: InputMaybe<Specialrequest_Min_Order_By>;
    stddev?: InputMaybe<Specialrequest_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Specialrequest_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Specialrequest_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Specialrequest_Sum_Order_By>;
    var_pop?: InputMaybe<Specialrequest_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Specialrequest_Var_Samp_Order_By>;
    variance?: InputMaybe<Specialrequest_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "specialrequest" */
export type Specialrequest_Arr_Rel_Insert_Input = {
    data: Array<Specialrequest_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Specialrequest_On_Conflict>;
};

/** aggregate avg on columns */
export type Specialrequest_Avg_Fields = {
    __typename?: "specialrequest_avg_fields";
    id?: Maybe<Scalars["Float"]>;
    majorgroupid?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "specialrequest" */
export type Specialrequest_Avg_Order_By = {
    id?: InputMaybe<Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "specialrequest". All fields are combined with a logical 'AND'. */
export type Specialrequest_Bool_Exp = {
    _and?: InputMaybe<Array<Specialrequest_Bool_Exp>>;
    _not?: InputMaybe<Specialrequest_Bool_Exp>;
    _or?: InputMaybe<Array<Specialrequest_Bool_Exp>>;
    checkitemspecialrequests?: InputMaybe<Checkitemspecialrequest_Bool_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    majorgroup?: InputMaybe<Majorgroup_Bool_Exp>;
    majorgroupid?: InputMaybe<Int_Comparison_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    status?: InputMaybe<Basic_Status_Comparison_Exp>;
};

/** unique or primary key constraints on table "specialrequest" */
export enum Specialrequest_Constraint {
    /** unique or primary key constraint */
    SpecialrequestPkey = "specialrequest_pkey",
}

/** input type for incrementing numeric columns in table "specialrequest" */
export type Specialrequest_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    majorgroupid?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "specialrequest" */
export type Specialrequest_Insert_Input = {
    checkitemspecialrequests?: InputMaybe<Checkitemspecialrequest_Arr_Rel_Insert_Input>;
    id?: InputMaybe<Scalars["Int"]>;
    majorgroup?: InputMaybe<Majorgroup_Obj_Rel_Insert_Input>;
    majorgroupid?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    status?: InputMaybe<Scalars["basic_status"]>;
};

/** aggregate max on columns */
export type Specialrequest_Max_Fields = {
    __typename?: "specialrequest_max_fields";
    id?: Maybe<Scalars["Int"]>;
    majorgroupid?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "specialrequest" */
export type Specialrequest_Max_Order_By = {
    id?: InputMaybe<Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Specialrequest_Min_Fields = {
    __typename?: "specialrequest_min_fields";
    id?: Maybe<Scalars["Int"]>;
    majorgroupid?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "specialrequest" */
export type Specialrequest_Min_Order_By = {
    id?: InputMaybe<Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "specialrequest" */
export type Specialrequest_Mutation_Response = {
    __typename?: "specialrequest_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Specialrequest>;
};

/** input type for inserting object relation for remote table "specialrequest" */
export type Specialrequest_Obj_Rel_Insert_Input = {
    data: Specialrequest_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Specialrequest_On_Conflict>;
};

/** on_conflict condition type for table "specialrequest" */
export type Specialrequest_On_Conflict = {
    constraint: Specialrequest_Constraint;
    update_columns?: Array<Specialrequest_Update_Column>;
    where?: InputMaybe<Specialrequest_Bool_Exp>;
};

/** Ordering options when selecting data from "specialrequest". */
export type Specialrequest_Order_By = {
    checkitemspecialrequests_aggregate?: InputMaybe<Checkitemspecialrequest_Aggregate_Order_By>;
    id?: InputMaybe<Order_By>;
    majorgroup?: InputMaybe<Majorgroup_Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: specialrequest */
export type Specialrequest_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "specialrequest" */
export enum Specialrequest_Select_Column {
    /** column name */
    Id = "id",
    /** column name */
    Majorgroupid = "majorgroupid",
    /** column name */
    Name = "name",
    /** column name */
    Status = "status",
}

/** input type for updating data in table "specialrequest" */
export type Specialrequest_Set_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    majorgroupid?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    status?: InputMaybe<Scalars["basic_status"]>;
};

/** aggregate stddev on columns */
export type Specialrequest_Stddev_Fields = {
    __typename?: "specialrequest_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
    majorgroupid?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "specialrequest" */
export type Specialrequest_Stddev_Order_By = {
    id?: InputMaybe<Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Specialrequest_Stddev_Pop_Fields = {
    __typename?: "specialrequest_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    majorgroupid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "specialrequest" */
export type Specialrequest_Stddev_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Specialrequest_Stddev_Samp_Fields = {
    __typename?: "specialrequest_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    majorgroupid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "specialrequest" */
export type Specialrequest_Stddev_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Specialrequest_Sum_Fields = {
    __typename?: "specialrequest_sum_fields";
    id?: Maybe<Scalars["Int"]>;
    majorgroupid?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "specialrequest" */
export type Specialrequest_Sum_Order_By = {
    id?: InputMaybe<Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
};

/** update columns of table "specialrequest" */
export enum Specialrequest_Update_Column {
    /** column name */
    Id = "id",
    /** column name */
    Majorgroupid = "majorgroupid",
    /** column name */
    Name = "name",
    /** column name */
    Status = "status",
}

/** aggregate var_pop on columns */
export type Specialrequest_Var_Pop_Fields = {
    __typename?: "specialrequest_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    majorgroupid?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "specialrequest" */
export type Specialrequest_Var_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Specialrequest_Var_Samp_Fields = {
    __typename?: "specialrequest_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    majorgroupid?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "specialrequest" */
export type Specialrequest_Var_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Specialrequest_Variance_Fields = {
    __typename?: "specialrequest_variance_fields";
    id?: Maybe<Scalars["Float"]>;
    majorgroupid?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "specialrequest" */
export type Specialrequest_Variance_Order_By = {
    id?: InputMaybe<Order_By>;
    majorgroupid?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
    __typename?: "subscription_root";
    /** fetch data from the table: "account" */
    account: Array<Account>;
    /** fetch aggregated fields from the table: "account" */
    account_aggregate: Account_Aggregate;
    /** fetch data from the table: "account" using primary key columns */
    account_by_pk?: Maybe<Account>;
    /** fetch data from the table: "bill" */
    bill: Array<Bill>;
    /** fetch aggregated fields from the table: "bill" */
    bill_aggregate: Bill_Aggregate;
    /** fetch data from the table: "bill" using primary key columns */
    bill_by_pk?: Maybe<Bill>;
    /** fetch data from the table: "billdetail" */
    billdetail: Array<Billdetail>;
    /** fetch aggregated fields from the table: "billdetail" */
    billdetail_aggregate: Billdetail_Aggregate;
    /** fetch data from the table: "billdetail" using primary key columns */
    billdetail_by_pk?: Maybe<Billdetail>;
    /** fetch data from the table: "billpayment" */
    billpayment: Array<Billpayment>;
    /** fetch aggregated fields from the table: "billpayment" */
    billpayment_aggregate: Billpayment_Aggregate;
    /** fetch data from the table: "billpayment" using primary key columns */
    billpayment_by_pk?: Maybe<Billpayment>;
    /** fetch data from the table: "check" */
    check: Array<Check>;
    /** fetch aggregated fields from the table: "check" */
    check_aggregate: Check_Aggregate;
    /** fetch data from the table: "check" using primary key columns */
    check_by_pk?: Maybe<Check>;
    /** fetch data from the table: "checkdetail" */
    checkdetail: Array<Checkdetail>;
    /** fetch aggregated fields from the table: "checkdetail" */
    checkdetail_aggregate: Checkdetail_Aggregate;
    /** fetch data from the table: "checkdetail" using primary key columns */
    checkdetail_by_pk?: Maybe<Checkdetail>;
    /** fetch data from the table: "checkitemspecialrequest" */
    checkitemspecialrequest: Array<Checkitemspecialrequest>;
    /** fetch aggregated fields from the table: "checkitemspecialrequest" */
    checkitemspecialrequest_aggregate: Checkitemspecialrequest_Aggregate;
    /** fetch data from the table: "checkitemspecialrequest" using primary key columns */
    checkitemspecialrequest_by_pk?: Maybe<Checkitemspecialrequest>;
    /** fetch data from the table: "item" */
    item: Array<Item>;
    /** fetch aggregated fields from the table: "item" */
    item_aggregate: Item_Aggregate;
    /** fetch data from the table: "item" using primary key columns */
    item_by_pk?: Maybe<Item>;
    /** fetch data from the table: "itemoutofstock" */
    itemoutofstock: Array<Itemoutofstock>;
    /** fetch aggregated fields from the table: "itemoutofstock" */
    itemoutofstock_aggregate: Itemoutofstock_Aggregate;
    /** fetch data from the table: "itemoutofstock" using primary key columns */
    itemoutofstock_by_pk?: Maybe<Itemoutofstock>;
    /** fetch data from the table: "location" */
    location: Array<Location>;
    /** fetch aggregated fields from the table: "location" */
    location_aggregate: Location_Aggregate;
    /** fetch data from the table: "location" using primary key columns */
    location_by_pk?: Maybe<Location>;
    /** fetch data from the table: "majorgroup" */
    majorgroup: Array<Majorgroup>;
    /** fetch aggregated fields from the table: "majorgroup" */
    majorgroup_aggregate: Majorgroup_Aggregate;
    /** fetch data from the table: "majorgroup" using primary key columns */
    majorgroup_by_pk?: Maybe<Majorgroup>;
    /** fetch data from the table: "mealtype" */
    mealtype: Array<Mealtype>;
    /** fetch aggregated fields from the table: "mealtype" */
    mealtype_aggregate: Mealtype_Aggregate;
    /** fetch data from the table: "mealtype" using primary key columns */
    mealtype_by_pk?: Maybe<Mealtype>;
    /** fetch data from the table: "menu" */
    menu: Array<Menu>;
    /** fetch aggregated fields from the table: "menu" */
    menu_aggregate: Menu_Aggregate;
    /** fetch data from the table: "menu" using primary key columns */
    menu_by_pk?: Maybe<Menu>;
    /** fetch data from the table: "menuitem" */
    menuitem: Array<Menuitem>;
    /** fetch aggregated fields from the table: "menuitem" */
    menuitem_aggregate: Menuitem_Aggregate;
    /** fetch data from the table: "menuitem" using primary key columns */
    menuitem_by_pk?: Maybe<Menuitem>;
    /** fetch data from the table: "paymentmethod" */
    paymentmethod: Array<Paymentmethod>;
    /** fetch aggregated fields from the table: "paymentmethod" */
    paymentmethod_aggregate: Paymentmethod_Aggregate;
    /** fetch data from the table: "paymentmethod" using primary key columns */
    paymentmethod_by_pk?: Maybe<Paymentmethod>;
    /** fetch data from the table: "role" */
    role: Array<Role>;
    /** fetch aggregated fields from the table: "role" */
    role_aggregate: Role_Aggregate;
    /** fetch data from the table: "role" using primary key columns */
    role_by_pk?: Maybe<Role>;
    /** fetch data from the table: "shift" */
    shift: Array<Shift>;
    /** fetch aggregated fields from the table: "shift" */
    shift_aggregate: Shift_Aggregate;
    /** fetch data from the table: "shift" using primary key columns */
    shift_by_pk?: Maybe<Shift>;
    /** fetch data from the table: "specialrequest" */
    specialrequest: Array<Specialrequest>;
    /** fetch aggregated fields from the table: "specialrequest" */
    specialrequest_aggregate: Specialrequest_Aggregate;
    /** fetch data from the table: "specialrequest" using primary key columns */
    specialrequest_by_pk?: Maybe<Specialrequest>;
    /** fetch data from the table: "systemsetting" */
    systemsetting: Array<Systemsetting>;
    /** fetch aggregated fields from the table: "systemsetting" */
    systemsetting_aggregate: Systemsetting_Aggregate;
    /** fetch data from the table: "systemsetting" using primary key columns */
    systemsetting_by_pk?: Maybe<Systemsetting>;
    /** fetch data from the table: "table" */
    table: Array<Table>;
    /** fetch aggregated fields from the table: "table" */
    table_aggregate: Table_Aggregate;
    /** fetch data from the table: "table" using primary key columns */
    table_by_pk?: Maybe<Table>;
    /** fetch data from the table: "voidreason" */
    voidreason: Array<Voidreason>;
    /** fetch aggregated fields from the table: "voidreason" */
    voidreason_aggregate: Voidreason_Aggregate;
    /** fetch data from the table: "voidreason" using primary key columns */
    voidreason_by_pk?: Maybe<Voidreason>;
    /** fetch data from the table: "worksession" */
    worksession: Array<Worksession>;
    /** fetch aggregated fields from the table: "worksession" */
    worksession_aggregate: Worksession_Aggregate;
    /** fetch data from the table: "worksession" using primary key columns */
    worksession_by_pk?: Maybe<Worksession>;
};

export type Subscription_RootAccountArgs = {
    distinct_on?: InputMaybe<Array<Account_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Account_Order_By>>;
    where?: InputMaybe<Account_Bool_Exp>;
};

export type Subscription_RootAccount_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Account_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Account_Order_By>>;
    where?: InputMaybe<Account_Bool_Exp>;
};

export type Subscription_RootAccount_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootBillArgs = {
    distinct_on?: InputMaybe<Array<Bill_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Bill_Order_By>>;
    where?: InputMaybe<Bill_Bool_Exp>;
};

export type Subscription_RootBill_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Bill_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Bill_Order_By>>;
    where?: InputMaybe<Bill_Bool_Exp>;
};

export type Subscription_RootBill_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootBilldetailArgs = {
    distinct_on?: InputMaybe<Array<Billdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Billdetail_Order_By>>;
    where?: InputMaybe<Billdetail_Bool_Exp>;
};

export type Subscription_RootBilldetail_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Billdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Billdetail_Order_By>>;
    where?: InputMaybe<Billdetail_Bool_Exp>;
};

export type Subscription_RootBilldetail_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootBillpaymentArgs = {
    distinct_on?: InputMaybe<Array<Billpayment_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Billpayment_Order_By>>;
    where?: InputMaybe<Billpayment_Bool_Exp>;
};

export type Subscription_RootBillpayment_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Billpayment_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Billpayment_Order_By>>;
    where?: InputMaybe<Billpayment_Bool_Exp>;
};

export type Subscription_RootBillpayment_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootCheckArgs = {
    distinct_on?: InputMaybe<Array<Check_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Check_Order_By>>;
    where?: InputMaybe<Check_Bool_Exp>;
};

export type Subscription_RootCheck_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Check_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Check_Order_By>>;
    where?: InputMaybe<Check_Bool_Exp>;
};

export type Subscription_RootCheck_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootCheckdetailArgs = {
    distinct_on?: InputMaybe<Array<Checkdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Checkdetail_Order_By>>;
    where?: InputMaybe<Checkdetail_Bool_Exp>;
};

export type Subscription_RootCheckdetail_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Checkdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Checkdetail_Order_By>>;
    where?: InputMaybe<Checkdetail_Bool_Exp>;
};

export type Subscription_RootCheckdetail_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootCheckitemspecialrequestArgs = {
    distinct_on?: InputMaybe<Array<Checkitemspecialrequest_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Checkitemspecialrequest_Order_By>>;
    where?: InputMaybe<Checkitemspecialrequest_Bool_Exp>;
};

export type Subscription_RootCheckitemspecialrequest_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Checkitemspecialrequest_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Checkitemspecialrequest_Order_By>>;
    where?: InputMaybe<Checkitemspecialrequest_Bool_Exp>;
};

export type Subscription_RootCheckitemspecialrequest_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootItemArgs = {
    distinct_on?: InputMaybe<Array<Item_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Item_Order_By>>;
    where?: InputMaybe<Item_Bool_Exp>;
};

export type Subscription_RootItem_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Item_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Item_Order_By>>;
    where?: InputMaybe<Item_Bool_Exp>;
};

export type Subscription_RootItem_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootItemoutofstockArgs = {
    distinct_on?: InputMaybe<Array<Itemoutofstock_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Itemoutofstock_Order_By>>;
    where?: InputMaybe<Itemoutofstock_Bool_Exp>;
};

export type Subscription_RootItemoutofstock_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Itemoutofstock_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Itemoutofstock_Order_By>>;
    where?: InputMaybe<Itemoutofstock_Bool_Exp>;
};

export type Subscription_RootItemoutofstock_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootLocationArgs = {
    distinct_on?: InputMaybe<Array<Location_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Location_Order_By>>;
    where?: InputMaybe<Location_Bool_Exp>;
};

export type Subscription_RootLocation_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Location_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Location_Order_By>>;
    where?: InputMaybe<Location_Bool_Exp>;
};

export type Subscription_RootLocation_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootMajorgroupArgs = {
    distinct_on?: InputMaybe<Array<Majorgroup_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Majorgroup_Order_By>>;
    where?: InputMaybe<Majorgroup_Bool_Exp>;
};

export type Subscription_RootMajorgroup_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Majorgroup_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Majorgroup_Order_By>>;
    where?: InputMaybe<Majorgroup_Bool_Exp>;
};

export type Subscription_RootMajorgroup_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootMealtypeArgs = {
    distinct_on?: InputMaybe<Array<Mealtype_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Mealtype_Order_By>>;
    where?: InputMaybe<Mealtype_Bool_Exp>;
};

export type Subscription_RootMealtype_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Mealtype_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Mealtype_Order_By>>;
    where?: InputMaybe<Mealtype_Bool_Exp>;
};

export type Subscription_RootMealtype_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootMenuArgs = {
    distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Menu_Order_By>>;
    where?: InputMaybe<Menu_Bool_Exp>;
};

export type Subscription_RootMenu_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Menu_Order_By>>;
    where?: InputMaybe<Menu_Bool_Exp>;
};

export type Subscription_RootMenu_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootMenuitemArgs = {
    distinct_on?: InputMaybe<Array<Menuitem_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Menuitem_Order_By>>;
    where?: InputMaybe<Menuitem_Bool_Exp>;
};

export type Subscription_RootMenuitem_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Menuitem_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Menuitem_Order_By>>;
    where?: InputMaybe<Menuitem_Bool_Exp>;
};

export type Subscription_RootMenuitem_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootPaymentmethodArgs = {
    distinct_on?: InputMaybe<Array<Paymentmethod_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Paymentmethod_Order_By>>;
    where?: InputMaybe<Paymentmethod_Bool_Exp>;
};

export type Subscription_RootPaymentmethod_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Paymentmethod_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Paymentmethod_Order_By>>;
    where?: InputMaybe<Paymentmethod_Bool_Exp>;
};

export type Subscription_RootPaymentmethod_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootRoleArgs = {
    distinct_on?: InputMaybe<Array<Role_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Role_Order_By>>;
    where?: InputMaybe<Role_Bool_Exp>;
};

export type Subscription_RootRole_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Role_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Role_Order_By>>;
    where?: InputMaybe<Role_Bool_Exp>;
};

export type Subscription_RootRole_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootShiftArgs = {
    distinct_on?: InputMaybe<Array<Shift_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Shift_Order_By>>;
    where?: InputMaybe<Shift_Bool_Exp>;
};

export type Subscription_RootShift_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Shift_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Shift_Order_By>>;
    where?: InputMaybe<Shift_Bool_Exp>;
};

export type Subscription_RootShift_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootSpecialrequestArgs = {
    distinct_on?: InputMaybe<Array<Specialrequest_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Specialrequest_Order_By>>;
    where?: InputMaybe<Specialrequest_Bool_Exp>;
};

export type Subscription_RootSpecialrequest_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Specialrequest_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Specialrequest_Order_By>>;
    where?: InputMaybe<Specialrequest_Bool_Exp>;
};

export type Subscription_RootSpecialrequest_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootSystemsettingArgs = {
    distinct_on?: InputMaybe<Array<Systemsetting_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Systemsetting_Order_By>>;
    where?: InputMaybe<Systemsetting_Bool_Exp>;
};

export type Subscription_RootSystemsetting_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Systemsetting_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Systemsetting_Order_By>>;
    where?: InputMaybe<Systemsetting_Bool_Exp>;
};

export type Subscription_RootSystemsetting_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootTableArgs = {
    distinct_on?: InputMaybe<Array<Table_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Table_Order_By>>;
    where?: InputMaybe<Table_Bool_Exp>;
};

export type Subscription_RootTable_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Table_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Table_Order_By>>;
    where?: InputMaybe<Table_Bool_Exp>;
};

export type Subscription_RootTable_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootVoidreasonArgs = {
    distinct_on?: InputMaybe<Array<Voidreason_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Voidreason_Order_By>>;
    where?: InputMaybe<Voidreason_Bool_Exp>;
};

export type Subscription_RootVoidreason_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Voidreason_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Voidreason_Order_By>>;
    where?: InputMaybe<Voidreason_Bool_Exp>;
};

export type Subscription_RootVoidreason_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootWorksessionArgs = {
    distinct_on?: InputMaybe<Array<Worksession_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Worksession_Order_By>>;
    where?: InputMaybe<Worksession_Bool_Exp>;
};

export type Subscription_RootWorksession_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Worksession_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Worksession_Order_By>>;
    where?: InputMaybe<Worksession_Bool_Exp>;
};

export type Subscription_RootWorksession_By_PkArgs = {
    id: Scalars["Int"];
};

/** columns and relationships of "systemsetting" */
export type Systemsetting = {
    __typename?: "systemsetting";
    address: Scalars["String"];
    id: Scalars["Int"];
    restaurantimage: Scalars["String"];
    restaurantname: Scalars["String"];
    taxvalue: Scalars["Int"];
};

/** aggregated selection of "systemsetting" */
export type Systemsetting_Aggregate = {
    __typename?: "systemsetting_aggregate";
    aggregate?: Maybe<Systemsetting_Aggregate_Fields>;
    nodes: Array<Systemsetting>;
};

/** aggregate fields of "systemsetting" */
export type Systemsetting_Aggregate_Fields = {
    __typename?: "systemsetting_aggregate_fields";
    avg?: Maybe<Systemsetting_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Systemsetting_Max_Fields>;
    min?: Maybe<Systemsetting_Min_Fields>;
    stddev?: Maybe<Systemsetting_Stddev_Fields>;
    stddev_pop?: Maybe<Systemsetting_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Systemsetting_Stddev_Samp_Fields>;
    sum?: Maybe<Systemsetting_Sum_Fields>;
    var_pop?: Maybe<Systemsetting_Var_Pop_Fields>;
    var_samp?: Maybe<Systemsetting_Var_Samp_Fields>;
    variance?: Maybe<Systemsetting_Variance_Fields>;
};

/** aggregate fields of "systemsetting" */
export type Systemsetting_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Systemsetting_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Systemsetting_Avg_Fields = {
    __typename?: "systemsetting_avg_fields";
    id?: Maybe<Scalars["Float"]>;
    taxvalue?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "systemsetting". All fields are combined with a logical 'AND'. */
export type Systemsetting_Bool_Exp = {
    _and?: InputMaybe<Array<Systemsetting_Bool_Exp>>;
    _not?: InputMaybe<Systemsetting_Bool_Exp>;
    _or?: InputMaybe<Array<Systemsetting_Bool_Exp>>;
    address?: InputMaybe<String_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    restaurantimage?: InputMaybe<String_Comparison_Exp>;
    restaurantname?: InputMaybe<String_Comparison_Exp>;
    taxvalue?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "systemsetting" */
export enum Systemsetting_Constraint {
    /** unique or primary key constraint */
    SystemsettingPkey = "systemsetting_pkey",
}

/** input type for incrementing numeric columns in table "systemsetting" */
export type Systemsetting_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    taxvalue?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "systemsetting" */
export type Systemsetting_Insert_Input = {
    address?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["Int"]>;
    restaurantimage?: InputMaybe<Scalars["String"]>;
    restaurantname?: InputMaybe<Scalars["String"]>;
    taxvalue?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Systemsetting_Max_Fields = {
    __typename?: "systemsetting_max_fields";
    address?: Maybe<Scalars["String"]>;
    id?: Maybe<Scalars["Int"]>;
    restaurantimage?: Maybe<Scalars["String"]>;
    restaurantname?: Maybe<Scalars["String"]>;
    taxvalue?: Maybe<Scalars["Int"]>;
};

/** aggregate min on columns */
export type Systemsetting_Min_Fields = {
    __typename?: "systemsetting_min_fields";
    address?: Maybe<Scalars["String"]>;
    id?: Maybe<Scalars["Int"]>;
    restaurantimage?: Maybe<Scalars["String"]>;
    restaurantname?: Maybe<Scalars["String"]>;
    taxvalue?: Maybe<Scalars["Int"]>;
};

/** response of any mutation on the table "systemsetting" */
export type Systemsetting_Mutation_Response = {
    __typename?: "systemsetting_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Systemsetting>;
};

/** on_conflict condition type for table "systemsetting" */
export type Systemsetting_On_Conflict = {
    constraint: Systemsetting_Constraint;
    update_columns?: Array<Systemsetting_Update_Column>;
    where?: InputMaybe<Systemsetting_Bool_Exp>;
};

/** Ordering options when selecting data from "systemsetting". */
export type Systemsetting_Order_By = {
    address?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    restaurantimage?: InputMaybe<Order_By>;
    restaurantname?: InputMaybe<Order_By>;
    taxvalue?: InputMaybe<Order_By>;
};

/** primary key columns input for table: systemsetting */
export type Systemsetting_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "systemsetting" */
export enum Systemsetting_Select_Column {
    /** column name */
    Address = "address",
    /** column name */
    Id = "id",
    /** column name */
    Restaurantimage = "restaurantimage",
    /** column name */
    Restaurantname = "restaurantname",
    /** column name */
    Taxvalue = "taxvalue",
}

/** input type for updating data in table "systemsetting" */
export type Systemsetting_Set_Input = {
    address?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["Int"]>;
    restaurantimage?: InputMaybe<Scalars["String"]>;
    restaurantname?: InputMaybe<Scalars["String"]>;
    taxvalue?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Systemsetting_Stddev_Fields = {
    __typename?: "systemsetting_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
    taxvalue?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Systemsetting_Stddev_Pop_Fields = {
    __typename?: "systemsetting_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    taxvalue?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Systemsetting_Stddev_Samp_Fields = {
    __typename?: "systemsetting_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    taxvalue?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Systemsetting_Sum_Fields = {
    __typename?: "systemsetting_sum_fields";
    id?: Maybe<Scalars["Int"]>;
    taxvalue?: Maybe<Scalars["Int"]>;
};

/** update columns of table "systemsetting" */
export enum Systemsetting_Update_Column {
    /** column name */
    Address = "address",
    /** column name */
    Id = "id",
    /** column name */
    Restaurantimage = "restaurantimage",
    /** column name */
    Restaurantname = "restaurantname",
    /** column name */
    Taxvalue = "taxvalue",
}

/** aggregate var_pop on columns */
export type Systemsetting_Var_Pop_Fields = {
    __typename?: "systemsetting_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    taxvalue?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Systemsetting_Var_Samp_Fields = {
    __typename?: "systemsetting_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    taxvalue?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Systemsetting_Variance_Fields = {
    __typename?: "systemsetting_variance_fields";
    id?: Maybe<Scalars["Float"]>;
    taxvalue?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "table" */
export type Table = {
    __typename?: "table";
    /** An array relationship */
    checks: Array<Check>;
    /** An aggregate relationship */
    checks_aggregate: Check_Aggregate;
    id: Scalars["Int"];
    /** An object relationship */
    location: Location;
    locationid: Scalars["Int"];
    name: Scalars["String"];
    seat: Scalars["Int"];
    status: Scalars["table_status"];
};

/** columns and relationships of "table" */
export type TableChecksArgs = {
    distinct_on?: InputMaybe<Array<Check_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Check_Order_By>>;
    where?: InputMaybe<Check_Bool_Exp>;
};

/** columns and relationships of "table" */
export type TableChecks_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Check_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Check_Order_By>>;
    where?: InputMaybe<Check_Bool_Exp>;
};

/** aggregated selection of "table" */
export type Table_Aggregate = {
    __typename?: "table_aggregate";
    aggregate?: Maybe<Table_Aggregate_Fields>;
    nodes: Array<Table>;
};

/** aggregate fields of "table" */
export type Table_Aggregate_Fields = {
    __typename?: "table_aggregate_fields";
    avg?: Maybe<Table_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Table_Max_Fields>;
    min?: Maybe<Table_Min_Fields>;
    stddev?: Maybe<Table_Stddev_Fields>;
    stddev_pop?: Maybe<Table_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Table_Stddev_Samp_Fields>;
    sum?: Maybe<Table_Sum_Fields>;
    var_pop?: Maybe<Table_Var_Pop_Fields>;
    var_samp?: Maybe<Table_Var_Samp_Fields>;
    variance?: Maybe<Table_Variance_Fields>;
};

/** aggregate fields of "table" */
export type Table_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Table_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "table" */
export type Table_Aggregate_Order_By = {
    avg?: InputMaybe<Table_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Table_Max_Order_By>;
    min?: InputMaybe<Table_Min_Order_By>;
    stddev?: InputMaybe<Table_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Table_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Table_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Table_Sum_Order_By>;
    var_pop?: InputMaybe<Table_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Table_Var_Samp_Order_By>;
    variance?: InputMaybe<Table_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "table" */
export type Table_Arr_Rel_Insert_Input = {
    data: Array<Table_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Table_On_Conflict>;
};

/** aggregate avg on columns */
export type Table_Avg_Fields = {
    __typename?: "table_avg_fields";
    id?: Maybe<Scalars["Float"]>;
    locationid?: Maybe<Scalars["Float"]>;
    seat?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "table" */
export type Table_Avg_Order_By = {
    id?: InputMaybe<Order_By>;
    locationid?: InputMaybe<Order_By>;
    seat?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "table". All fields are combined with a logical 'AND'. */
export type Table_Bool_Exp = {
    _and?: InputMaybe<Array<Table_Bool_Exp>>;
    _not?: InputMaybe<Table_Bool_Exp>;
    _or?: InputMaybe<Array<Table_Bool_Exp>>;
    checks?: InputMaybe<Check_Bool_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    location?: InputMaybe<Location_Bool_Exp>;
    locationid?: InputMaybe<Int_Comparison_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    seat?: InputMaybe<Int_Comparison_Exp>;
    status?: InputMaybe<Table_Status_Comparison_Exp>;
};

/** unique or primary key constraints on table "table" */
export enum Table_Constraint {
    /** unique or primary key constraint */
    TablePkey = "table_pkey",
}

/** input type for incrementing numeric columns in table "table" */
export type Table_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    locationid?: InputMaybe<Scalars["Int"]>;
    seat?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "table" */
export type Table_Insert_Input = {
    checks?: InputMaybe<Check_Arr_Rel_Insert_Input>;
    id?: InputMaybe<Scalars["Int"]>;
    location?: InputMaybe<Location_Obj_Rel_Insert_Input>;
    locationid?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    seat?: InputMaybe<Scalars["Int"]>;
    status?: InputMaybe<Scalars["table_status"]>;
};

/** aggregate max on columns */
export type Table_Max_Fields = {
    __typename?: "table_max_fields";
    id?: Maybe<Scalars["Int"]>;
    locationid?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
    seat?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "table" */
export type Table_Max_Order_By = {
    id?: InputMaybe<Order_By>;
    locationid?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    seat?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Table_Min_Fields = {
    __typename?: "table_min_fields";
    id?: Maybe<Scalars["Int"]>;
    locationid?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
    seat?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "table" */
export type Table_Min_Order_By = {
    id?: InputMaybe<Order_By>;
    locationid?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    seat?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "table" */
export type Table_Mutation_Response = {
    __typename?: "table_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Table>;
};

/** input type for inserting object relation for remote table "table" */
export type Table_Obj_Rel_Insert_Input = {
    data: Table_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Table_On_Conflict>;
};

/** on_conflict condition type for table "table" */
export type Table_On_Conflict = {
    constraint: Table_Constraint;
    update_columns?: Array<Table_Update_Column>;
    where?: InputMaybe<Table_Bool_Exp>;
};

/** Ordering options when selecting data from "table". */
export type Table_Order_By = {
    checks_aggregate?: InputMaybe<Check_Aggregate_Order_By>;
    id?: InputMaybe<Order_By>;
    location?: InputMaybe<Location_Order_By>;
    locationid?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    seat?: InputMaybe<Order_By>;
    status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: table */
export type Table_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "table" */
export enum Table_Select_Column {
    /** column name */
    Id = "id",
    /** column name */
    Locationid = "locationid",
    /** column name */
    Name = "name",
    /** column name */
    Seat = "seat",
    /** column name */
    Status = "status",
}

/** input type for updating data in table "table" */
export type Table_Set_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    locationid?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    seat?: InputMaybe<Scalars["Int"]>;
    status?: InputMaybe<Scalars["table_status"]>;
};

/** Boolean expression to compare columns of type "table_status". All fields are combined with logical 'AND'. */
export type Table_Status_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["table_status"]>;
    _gt?: InputMaybe<Scalars["table_status"]>;
    _gte?: InputMaybe<Scalars["table_status"]>;
    _in?: InputMaybe<Array<Scalars["table_status"]>>;
    _is_null?: InputMaybe<Scalars["Boolean"]>;
    _lt?: InputMaybe<Scalars["table_status"]>;
    _lte?: InputMaybe<Scalars["table_status"]>;
    _neq?: InputMaybe<Scalars["table_status"]>;
    _nin?: InputMaybe<Array<Scalars["table_status"]>>;
};

/** aggregate stddev on columns */
export type Table_Stddev_Fields = {
    __typename?: "table_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
    locationid?: Maybe<Scalars["Float"]>;
    seat?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "table" */
export type Table_Stddev_Order_By = {
    id?: InputMaybe<Order_By>;
    locationid?: InputMaybe<Order_By>;
    seat?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Table_Stddev_Pop_Fields = {
    __typename?: "table_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    locationid?: Maybe<Scalars["Float"]>;
    seat?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "table" */
export type Table_Stddev_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    locationid?: InputMaybe<Order_By>;
    seat?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Table_Stddev_Samp_Fields = {
    __typename?: "table_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    locationid?: Maybe<Scalars["Float"]>;
    seat?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "table" */
export type Table_Stddev_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    locationid?: InputMaybe<Order_By>;
    seat?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Table_Sum_Fields = {
    __typename?: "table_sum_fields";
    id?: Maybe<Scalars["Int"]>;
    locationid?: Maybe<Scalars["Int"]>;
    seat?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "table" */
export type Table_Sum_Order_By = {
    id?: InputMaybe<Order_By>;
    locationid?: InputMaybe<Order_By>;
    seat?: InputMaybe<Order_By>;
};

/** update columns of table "table" */
export enum Table_Update_Column {
    /** column name */
    Id = "id",
    /** column name */
    Locationid = "locationid",
    /** column name */
    Name = "name",
    /** column name */
    Seat = "seat",
    /** column name */
    Status = "status",
}

/** aggregate var_pop on columns */
export type Table_Var_Pop_Fields = {
    __typename?: "table_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    locationid?: Maybe<Scalars["Float"]>;
    seat?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "table" */
export type Table_Var_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    locationid?: InputMaybe<Order_By>;
    seat?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Table_Var_Samp_Fields = {
    __typename?: "table_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    locationid?: Maybe<Scalars["Float"]>;
    seat?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "table" */
export type Table_Var_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    locationid?: InputMaybe<Order_By>;
    seat?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Table_Variance_Fields = {
    __typename?: "table_variance_fields";
    id?: Maybe<Scalars["Float"]>;
    locationid?: Maybe<Scalars["Float"]>;
    seat?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "table" */
export type Table_Variance_Order_By = {
    id?: InputMaybe<Order_By>;
    locationid?: InputMaybe<Order_By>;
    seat?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "time". All fields are combined with logical 'AND'. */
export type Time_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["time"]>;
    _gt?: InputMaybe<Scalars["time"]>;
    _gte?: InputMaybe<Scalars["time"]>;
    _in?: InputMaybe<Array<Scalars["time"]>>;
    _is_null?: InputMaybe<Scalars["Boolean"]>;
    _lt?: InputMaybe<Scalars["time"]>;
    _lte?: InputMaybe<Scalars["time"]>;
    _neq?: InputMaybe<Scalars["time"]>;
    _nin?: InputMaybe<Array<Scalars["time"]>>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["timestamp"]>;
    _gt?: InputMaybe<Scalars["timestamp"]>;
    _gte?: InputMaybe<Scalars["timestamp"]>;
    _in?: InputMaybe<Array<Scalars["timestamp"]>>;
    _is_null?: InputMaybe<Scalars["Boolean"]>;
    _lt?: InputMaybe<Scalars["timestamp"]>;
    _lte?: InputMaybe<Scalars["timestamp"]>;
    _neq?: InputMaybe<Scalars["timestamp"]>;
    _nin?: InputMaybe<Array<Scalars["timestamp"]>>;
};

/** Boolean expression to compare columns of type "user_status". All fields are combined with logical 'AND'. */
export type User_Status_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["user_status"]>;
    _gt?: InputMaybe<Scalars["user_status"]>;
    _gte?: InputMaybe<Scalars["user_status"]>;
    _in?: InputMaybe<Array<Scalars["user_status"]>>;
    _is_null?: InputMaybe<Scalars["Boolean"]>;
    _lt?: InputMaybe<Scalars["user_status"]>;
    _lte?: InputMaybe<Scalars["user_status"]>;
    _neq?: InputMaybe<Scalars["user_status"]>;
    _nin?: InputMaybe<Array<Scalars["user_status"]>>;
};

/** columns and relationships of "voidreason" */
export type Voidreason = {
    __typename?: "voidreason";
    /** An array relationship */
    checkdetails: Array<Checkdetail>;
    /** An aggregate relationship */
    checkdetails_aggregate: Checkdetail_Aggregate;
    /** An array relationship */
    checks: Array<Check>;
    /** An aggregate relationship */
    checks_aggregate: Check_Aggregate;
    id: Scalars["Int"];
    name: Scalars["String"];
    status: Scalars["basic_status"];
};

/** columns and relationships of "voidreason" */
export type VoidreasonCheckdetailsArgs = {
    distinct_on?: InputMaybe<Array<Checkdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Checkdetail_Order_By>>;
    where?: InputMaybe<Checkdetail_Bool_Exp>;
};

/** columns and relationships of "voidreason" */
export type VoidreasonCheckdetails_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Checkdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Checkdetail_Order_By>>;
    where?: InputMaybe<Checkdetail_Bool_Exp>;
};

/** columns and relationships of "voidreason" */
export type VoidreasonChecksArgs = {
    distinct_on?: InputMaybe<Array<Check_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Check_Order_By>>;
    where?: InputMaybe<Check_Bool_Exp>;
};

/** columns and relationships of "voidreason" */
export type VoidreasonChecks_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Check_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Check_Order_By>>;
    where?: InputMaybe<Check_Bool_Exp>;
};

/** aggregated selection of "voidreason" */
export type Voidreason_Aggregate = {
    __typename?: "voidreason_aggregate";
    aggregate?: Maybe<Voidreason_Aggregate_Fields>;
    nodes: Array<Voidreason>;
};

/** aggregate fields of "voidreason" */
export type Voidreason_Aggregate_Fields = {
    __typename?: "voidreason_aggregate_fields";
    avg?: Maybe<Voidreason_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Voidreason_Max_Fields>;
    min?: Maybe<Voidreason_Min_Fields>;
    stddev?: Maybe<Voidreason_Stddev_Fields>;
    stddev_pop?: Maybe<Voidreason_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Voidreason_Stddev_Samp_Fields>;
    sum?: Maybe<Voidreason_Sum_Fields>;
    var_pop?: Maybe<Voidreason_Var_Pop_Fields>;
    var_samp?: Maybe<Voidreason_Var_Samp_Fields>;
    variance?: Maybe<Voidreason_Variance_Fields>;
};

/** aggregate fields of "voidreason" */
export type Voidreason_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Voidreason_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Voidreason_Avg_Fields = {
    __typename?: "voidreason_avg_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "voidreason". All fields are combined with a logical 'AND'. */
export type Voidreason_Bool_Exp = {
    _and?: InputMaybe<Array<Voidreason_Bool_Exp>>;
    _not?: InputMaybe<Voidreason_Bool_Exp>;
    _or?: InputMaybe<Array<Voidreason_Bool_Exp>>;
    checkdetails?: InputMaybe<Checkdetail_Bool_Exp>;
    checks?: InputMaybe<Check_Bool_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    status?: InputMaybe<Basic_Status_Comparison_Exp>;
};

/** unique or primary key constraints on table "voidreason" */
export enum Voidreason_Constraint {
    /** unique or primary key constraint */
    VoidreasonPkey = "voidreason_pkey",
}

/** input type for incrementing numeric columns in table "voidreason" */
export type Voidreason_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "voidreason" */
export type Voidreason_Insert_Input = {
    checkdetails?: InputMaybe<Checkdetail_Arr_Rel_Insert_Input>;
    checks?: InputMaybe<Check_Arr_Rel_Insert_Input>;
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    status?: InputMaybe<Scalars["basic_status"]>;
};

/** aggregate max on columns */
export type Voidreason_Max_Fields = {
    __typename?: "voidreason_max_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Voidreason_Min_Fields = {
    __typename?: "voidreason_min_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "voidreason" */
export type Voidreason_Mutation_Response = {
    __typename?: "voidreason_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Voidreason>;
};

/** input type for inserting object relation for remote table "voidreason" */
export type Voidreason_Obj_Rel_Insert_Input = {
    data: Voidreason_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Voidreason_On_Conflict>;
};

/** on_conflict condition type for table "voidreason" */
export type Voidreason_On_Conflict = {
    constraint: Voidreason_Constraint;
    update_columns?: Array<Voidreason_Update_Column>;
    where?: InputMaybe<Voidreason_Bool_Exp>;
};

/** Ordering options when selecting data from "voidreason". */
export type Voidreason_Order_By = {
    checkdetails_aggregate?: InputMaybe<Checkdetail_Aggregate_Order_By>;
    checks_aggregate?: InputMaybe<Check_Aggregate_Order_By>;
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: voidreason */
export type Voidreason_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "voidreason" */
export enum Voidreason_Select_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Status = "status",
}

/** input type for updating data in table "voidreason" */
export type Voidreason_Set_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    status?: InputMaybe<Scalars["basic_status"]>;
};

/** aggregate stddev on columns */
export type Voidreason_Stddev_Fields = {
    __typename?: "voidreason_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Voidreason_Stddev_Pop_Fields = {
    __typename?: "voidreason_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Voidreason_Stddev_Samp_Fields = {
    __typename?: "voidreason_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Voidreason_Sum_Fields = {
    __typename?: "voidreason_sum_fields";
    id?: Maybe<Scalars["Int"]>;
};

/** update columns of table "voidreason" */
export enum Voidreason_Update_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Status = "status",
}

/** aggregate var_pop on columns */
export type Voidreason_Var_Pop_Fields = {
    __typename?: "voidreason_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Voidreason_Var_Samp_Fields = {
    __typename?: "voidreason_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Voidreason_Variance_Fields = {
    __typename?: "voidreason_variance_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "worksession" */
export type Worksession = {
    __typename?: "worksession";
    creationtime: Scalars["timestamp"];
    creatorid: Scalars["Int"];
    id: Scalars["Int"];
    isopen: Scalars["Boolean"];
    /** An array relationship */
    shifts: Array<Shift>;
    /** An aggregate relationship */
    shifts_aggregate: Shift_Aggregate;
    updaterid?: Maybe<Scalars["Int"]>;
    updatetime?: Maybe<Scalars["timestamp"]>;
    workdate: Scalars["date"];
};

/** columns and relationships of "worksession" */
export type WorksessionShiftsArgs = {
    distinct_on?: InputMaybe<Array<Shift_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Shift_Order_By>>;
    where?: InputMaybe<Shift_Bool_Exp>;
};

/** columns and relationships of "worksession" */
export type WorksessionShifts_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Shift_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Shift_Order_By>>;
    where?: InputMaybe<Shift_Bool_Exp>;
};

/** aggregated selection of "worksession" */
export type Worksession_Aggregate = {
    __typename?: "worksession_aggregate";
    aggregate?: Maybe<Worksession_Aggregate_Fields>;
    nodes: Array<Worksession>;
};

/** aggregate fields of "worksession" */
export type Worksession_Aggregate_Fields = {
    __typename?: "worksession_aggregate_fields";
    avg?: Maybe<Worksession_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Worksession_Max_Fields>;
    min?: Maybe<Worksession_Min_Fields>;
    stddev?: Maybe<Worksession_Stddev_Fields>;
    stddev_pop?: Maybe<Worksession_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Worksession_Stddev_Samp_Fields>;
    sum?: Maybe<Worksession_Sum_Fields>;
    var_pop?: Maybe<Worksession_Var_Pop_Fields>;
    var_samp?: Maybe<Worksession_Var_Samp_Fields>;
    variance?: Maybe<Worksession_Variance_Fields>;
};

/** aggregate fields of "worksession" */
export type Worksession_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Worksession_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Worksession_Avg_Fields = {
    __typename?: "worksession_avg_fields";
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "worksession". All fields are combined with a logical 'AND'. */
export type Worksession_Bool_Exp = {
    _and?: InputMaybe<Array<Worksession_Bool_Exp>>;
    _not?: InputMaybe<Worksession_Bool_Exp>;
    _or?: InputMaybe<Array<Worksession_Bool_Exp>>;
    creationtime?: InputMaybe<Timestamp_Comparison_Exp>;
    creatorid?: InputMaybe<Int_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    isopen?: InputMaybe<Boolean_Comparison_Exp>;
    shifts?: InputMaybe<Shift_Bool_Exp>;
    updaterid?: InputMaybe<Int_Comparison_Exp>;
    updatetime?: InputMaybe<Timestamp_Comparison_Exp>;
    workdate?: InputMaybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "worksession" */
export enum Worksession_Constraint {
    /** unique or primary key constraint */
    WorksessionPkey = "worksession_pkey",
}

/** input type for incrementing numeric columns in table "worksession" */
export type Worksession_Inc_Input = {
    creatorid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    updaterid?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "worksession" */
export type Worksession_Insert_Input = {
    creationtime?: InputMaybe<Scalars["timestamp"]>;
    creatorid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    isopen?: InputMaybe<Scalars["Boolean"]>;
    shifts?: InputMaybe<Shift_Arr_Rel_Insert_Input>;
    updaterid?: InputMaybe<Scalars["Int"]>;
    updatetime?: InputMaybe<Scalars["timestamp"]>;
    workdate?: InputMaybe<Scalars["date"]>;
};

/** aggregate max on columns */
export type Worksession_Max_Fields = {
    __typename?: "worksession_max_fields";
    creationtime?: Maybe<Scalars["timestamp"]>;
    creatorid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    updaterid?: Maybe<Scalars["Int"]>;
    updatetime?: Maybe<Scalars["timestamp"]>;
    workdate?: Maybe<Scalars["date"]>;
};

/** aggregate min on columns */
export type Worksession_Min_Fields = {
    __typename?: "worksession_min_fields";
    creationtime?: Maybe<Scalars["timestamp"]>;
    creatorid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    updaterid?: Maybe<Scalars["Int"]>;
    updatetime?: Maybe<Scalars["timestamp"]>;
    workdate?: Maybe<Scalars["date"]>;
};

/** response of any mutation on the table "worksession" */
export type Worksession_Mutation_Response = {
    __typename?: "worksession_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Worksession>;
};

/** input type for inserting object relation for remote table "worksession" */
export type Worksession_Obj_Rel_Insert_Input = {
    data: Worksession_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Worksession_On_Conflict>;
};

/** on_conflict condition type for table "worksession" */
export type Worksession_On_Conflict = {
    constraint: Worksession_Constraint;
    update_columns?: Array<Worksession_Update_Column>;
    where?: InputMaybe<Worksession_Bool_Exp>;
};

/** Ordering options when selecting data from "worksession". */
export type Worksession_Order_By = {
    creationtime?: InputMaybe<Order_By>;
    creatorid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    isopen?: InputMaybe<Order_By>;
    shifts_aggregate?: InputMaybe<Shift_Aggregate_Order_By>;
    updaterid?: InputMaybe<Order_By>;
    updatetime?: InputMaybe<Order_By>;
    workdate?: InputMaybe<Order_By>;
};

/** primary key columns input for table: worksession */
export type Worksession_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "worksession" */
export enum Worksession_Select_Column {
    /** column name */
    Creationtime = "creationtime",
    /** column name */
    Creatorid = "creatorid",
    /** column name */
    Id = "id",
    /** column name */
    Isopen = "isopen",
    /** column name */
    Updaterid = "updaterid",
    /** column name */
    Updatetime = "updatetime",
    /** column name */
    Workdate = "workdate",
}

/** input type for updating data in table "worksession" */
export type Worksession_Set_Input = {
    creationtime?: InputMaybe<Scalars["timestamp"]>;
    creatorid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    isopen?: InputMaybe<Scalars["Boolean"]>;
    updaterid?: InputMaybe<Scalars["Int"]>;
    updatetime?: InputMaybe<Scalars["timestamp"]>;
    workdate?: InputMaybe<Scalars["date"]>;
};

/** aggregate stddev on columns */
export type Worksession_Stddev_Fields = {
    __typename?: "worksession_stddev_fields";
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Worksession_Stddev_Pop_Fields = {
    __typename?: "worksession_stddev_pop_fields";
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Worksession_Stddev_Samp_Fields = {
    __typename?: "worksession_stddev_samp_fields";
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Worksession_Sum_Fields = {
    __typename?: "worksession_sum_fields";
    creatorid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    updaterid?: Maybe<Scalars["Int"]>;
};

/** update columns of table "worksession" */
export enum Worksession_Update_Column {
    /** column name */
    Creationtime = "creationtime",
    /** column name */
    Creatorid = "creatorid",
    /** column name */
    Id = "id",
    /** column name */
    Isopen = "isopen",
    /** column name */
    Updaterid = "updaterid",
    /** column name */
    Updatetime = "updatetime",
    /** column name */
    Workdate = "workdate",
}

/** aggregate var_pop on columns */
export type Worksession_Var_Pop_Fields = {
    __typename?: "worksession_var_pop_fields";
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Worksession_Var_Samp_Fields = {
    __typename?: "worksession_var_samp_fields";
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Worksession_Variance_Fields = {
    __typename?: "worksession_variance_fields";
    creatorid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    updaterid?: Maybe<Scalars["Float"]>;
};

export type CreateAccountMutationMutationVariables = Exact<{
    avatar?: InputMaybe<Scalars["String"]>;
    email?: InputMaybe<Scalars["String"]>;
    fullname?: InputMaybe<Scalars["String"]>;
    password?: InputMaybe<Scalars["String"]>;
    phone?: InputMaybe<Scalars["String"]>;
    roleid?: InputMaybe<Scalars["Int"]>;
    status?: InputMaybe<Scalars["user_status"]>;
    username?: InputMaybe<Scalars["String"]>;
}>;

export type CreateAccountMutationMutation = {
    __typename?: "mutation_root";
    insert_account_one?: { __typename?: "account"; id: number } | null;
};

export type DeleteAccountMutationMutationVariables = Exact<{
    id?: InputMaybe<Scalars["Int"]>;
    status?: InputMaybe<Scalars["user_status"]>;
}>;

export type DeleteAccountMutationMutation = {
    __typename?: "mutation_root";
    update_account_by_pk?: { __typename?: "account"; id: number } | null;
};

export type EmailExistQueryQueryVariables = Exact<{
    _eq?: InputMaybe<Scalars["String"]>;
}>;

export type EmailExistQueryQuery = {
    __typename?: "query_root";
    account: Array<{ __typename?: "account"; id: number }>;
};

export type PhoneExistQueryQueryVariables = Exact<{
    _eq?: InputMaybe<Scalars["String"]>;
}>;

export type PhoneExistQueryQuery = {
    __typename?: "query_root";
    account: Array<{ __typename?: "account"; id: number }>;
};

export type UpdateAccountMutationMutationVariables = Exact<{
    id?: InputMaybe<Scalars["Int"]>;
    avatar?: InputMaybe<Scalars["String"]>;
    email?: InputMaybe<Scalars["String"]>;
    fullname?: InputMaybe<Scalars["String"]>;
    phone?: InputMaybe<Scalars["String"]>;
    roleid?: InputMaybe<Scalars["Int"]>;
    status?: InputMaybe<Scalars["user_status"]>;
    username?: InputMaybe<Scalars["String"]>;
}>;

export type UpdateAccountMutationMutation = {
    __typename?: "mutation_root";
    update_account_by_pk?: { __typename?: "account"; id: number } | null;
};

export type CreatePaymentmethodMutationVariables = Exact<{
    name?: InputMaybe<Scalars["String"]>;
    status?: InputMaybe<Scalars["basic_status"]>;
}>;

export type CreatePaymentmethodMutation = {
    __typename?: "mutation_root";
    insert_paymentmethod_one?: {
        __typename?: "paymentmethod";
        id: number;
        name: string;
        status: any;
    } | null;
};

export type DeletePaymentmethodMutationVariables = Exact<{
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    status?: InputMaybe<Scalars["basic_status"]>;
}>;

export type DeletePaymentmethodMutation = {
    __typename?: "mutation_root";
    update_paymentmethod_by_pk?: {
        __typename?: "paymentmethod";
        id: number;
        name: string;
        status: any;
    } | null;
};

export type UpdatePaymentmethodMutationVariables = Exact<{
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    status?: InputMaybe<Scalars["basic_status"]>;
}>;

export type UpdatePaymentmethodMutation = {
    __typename?: "mutation_root";
    update_paymentmethod_by_pk?: {
        __typename?: "paymentmethod";
        id: number;
        name: string;
        status: any;
    } | null;
};

export type GetRoleQueryQueryVariables = Exact<{ [key: string]: never }>;

export type GetRoleQueryQuery = {
    __typename?: "query_root";
    role: Array<{
        __typename?: "role";
        name: string;
        id: number;
        accounts_aggregate: {
            __typename?: "account_aggregate";
            aggregate?: { __typename?: "account_aggregate_fields"; count: number } | null;
        };
    }>;
};

export type CreateSettingMutationMutationVariables = Exact<{
    address?: InputMaybe<Scalars["String"]>;
    restaurantimage?: InputMaybe<Scalars["String"]>;
    restaurantname?: InputMaybe<Scalars["String"]>;
    taxvalue?: InputMaybe<Scalars["Int"]>;
}>;

export type CreateSettingMutationMutation = {
    __typename?: "mutation_root";
    insert_systemsetting_one?: { __typename?: "systemsetting"; id: number } | null;
};

export type DeleteSettingMutationMutationVariables = Exact<{
    id?: InputMaybe<Scalars["Int"]>;
}>;

export type DeleteSettingMutationMutation = {
    __typename?: "mutation_root";
    delete_systemsetting_by_pk?: { __typename?: "systemsetting"; id: number } | null;
};

export type GetSystemSettingQueryVariables = Exact<{ [key: string]: never }>;

export type GetSystemSettingQuery = {
    __typename?: "query_root";
    systemsetting: Array<{
        __typename?: "systemsetting";
        address: string;
        id: number;
        restaurantimage: string;
        restaurantname: string;
        taxvalue: number;
    }>;
};

export type UpdateSettingMutationMutationVariables = Exact<{
    address?: InputMaybe<Scalars["String"]>;
    restaurantimage?: InputMaybe<Scalars["String"]>;
    restaurantname?: InputMaybe<Scalars["String"]>;
    taxvalue?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
}>;

export type UpdateSettingMutationMutation = {
    __typename?: "mutation_root";
    update_systemsetting_by_pk?: {
        __typename?: "systemsetting";
        id: number;
        restaurantimage: string;
        restaurantname: string;
        taxvalue: number;
        address: string;
    } | null;
};

export type MyQueryQueryVariables = Exact<{ [key: string]: never }>;

export type MyQueryQuery = {
    __typename?: "query_root";
    account: Array<{ __typename?: "account"; avatar?: string | null }>;
};

export type GetAllWorkSessionQueryQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllWorkSessionQueryQuery = {
    __typename?: "query_root";
    worksession: Array<{
        __typename?: "worksession";
        creationtime: any;
        creatorid: number;
        id: number;
        isopen: boolean;
        updaterid?: number | null;
        updatetime?: any | null;
        workdate: any;
    }>;
};

export type InsertMultiWorkSessionMutationVariables = Exact<{
    objects?: InputMaybe<Array<Worksession_Insert_Input> | Worksession_Insert_Input>;
}>;

export type InsertMultiWorkSessionMutation = {
    __typename?: "mutation_root";
    insert_worksession?: {
        __typename?: "worksession_mutation_response";
        returning: Array<{ __typename?: "worksession"; id: number }>;
    } | null;
};
