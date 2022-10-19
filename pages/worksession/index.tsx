import {
    ViewState,
    EditingState,
    ChangeSet,
    AppointmentModel,
} from "@devexpress/dx-react-scheduler";
import {
    Scheduler,
    SchedulerProps,
    Appointments,
    DragDropProvider,
    Toolbar,
    TodayButton,
    MonthView,
    DateNavigator,
} from "@devexpress/dx-react-scheduler-material-ui";
import {
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Modal,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers";
import CardContainer from "components/Card/Container";
import useSnackbar from "components/Snackbar/useSnackbar";
import { add, format } from "date-fns";
import useGetAllWorkSession from "hooks/worksession/useGetAll";
import useInsertMulti from "hooks/worksession/useInsertMulti";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const SchedulerOk: React.FC<SchedulerProps & { children: React.ReactNode }> = ({
    children,
    ...rest
}) => {
    return <Scheduler {...rest}>{children}</Scheduler>;
};

export interface ShiftCreate {
    startTime: Date | null;
    endTime: Date | null;
}

const WorkSession = () => {
    const Appointment: React.FC = (props: any) => {
        const { style, data, ...restProps } = props;
        return (
            <Appointments.Appointment
                {...restProps}
                style={{
                    ...style,
                    backgroundColor: data.backgroundColor,
                    color: data.color || "white",
                    fontSize: 12,
                }}
            >
                {data.content}
            </Appointments.Appointment>
        );
    };

    const { mutate } = useInsertMulti("GetAllWorkSessionQuery");

    const { data, isLoading } = useGetAllWorkSession();

    const appointments: AppointmentModel[] | undefined = data?.worksession.map((x) => {
        return {
            startDate: new Date(
                new Date(x.workdate).getFullYear(),
                new Date(x.workdate).getMonth(),
                new Date(x.workdate).getDate(),
                0,
                0,
                0
            ),
            endDate: new Date(
                new Date(x.workdate).getFullYear(),
                new Date(x.workdate).getMonth(),
                new Date(x.workdate).getDate(),
                23,
                59,
                59
            ),
            content: x.isopen ? (
                <Box sx={{ p: 1 }}>
                    <Box>Người mở: {x.creatorid}</Box>
                    <Box>
                        Thời gian mở: {format(new Date(x.creationtime), "dd/MM/yyyy hh:mm:ss")}
                    </Box>
                </Box>
            ) : (
                <Box sx={{ p: 1 }}>
                    <Box>Người đóng: {x.updaterid}</Box>
                    <Box>
                        Thời gian đóng: {format(new Date(x.updatetime), "dd/MM/yyyy hh:mm:ss")}
                    </Box>
                </Box>
            ),
            allDay: true,
            id: x.id,
            backgroundColor: x.isopen ? "#1e88e5" : "#fb8c00",
        };
    });

    const { handleSubmit, setValue } = useForm<ShiftCreate>({});

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [startTime, setStartTime] = useState<Date | null>(null);
    const [check, setCheck] = useState(false);
    const [endTime, setEndTime] = useState<Date | null>(null);

    const commitChanges = (changes: ChangeSet) => {
        // eslint-disable-next-line no-console
        console.log(changes);
    };

    const tomorrowFns = add(new Date(), {
        days: 1,
    });

    const showSnackbar = useSnackbar();

    useEffect(() => {
        setValue("startTime", startTime);
    }, [startTime, setValue]);

    useEffect(() => {
        setValue("endTime", endTime);
    }, [endTime, setValue]);

    const submitHandler: SubmitHandler<ShiftCreate> = async (data: ShiftCreate) => {
        try {
            if (data && data.startTime && data.endTime) {
                const listOfDates: Date[] = [];
                while (data.startTime <= data.endTime) {
                    listOfDates.push(data.startTime);
                    data.startTime = add(data.startTime, {
                        days: 1,
                    });
                }
                mutate(
                    {
                        objects: listOfDates.map((workingDate) => {
                            return {
                                creationtime: add(new Date(), {
                                    hours: 7,
                                }),
                                creatorid: 1,
                                isopen: true,
                                workdate: add(workingDate, {
                                    days: 1,
                                }),
                            };
                        }),
                    },
                    {
                        onSuccess: () => {
                            showSnackbar({
                                children: "Tạo mới thành công",
                                variant: "filled",
                                severity: "success",
                            });
                            setOpenModal(false);
                        },
                        onError: () => {
                            showSnackbar({
                                children: "Tạo mới thất bại",
                                variant: "filled",
                                severity: "error",
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

    const tick = () => {
        setCheck(!check);
        setStartTime(tomorrowFns);
        const date = new Date();
        date.setMonth(11);
        date.setDate(31);
        setEndTime(date);
    };

    if (isLoading) {
        return null;
    }

    return (
        <Paper sx={{ mt: 1 }}>
            <Modal open={openModal} disableEnforceFocus>
                <CardContainer width="90%" maxWidth={820}>
                    <Box sx={{ display: "flex", justifyContent: "center", m: 3 }}>
                        <Typography variant="h6" component="h2">
                            Tạo mới phiên làm việc
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
                            <DatePicker
                                renderInput={(params) => <TextField fullWidth {...params} />}
                                label={"Ngày bắt đầu"}
                                value={startTime}
                                onChange={(newValue) => {
                                    setStartTime(newValue || null);
                                }}
                                inputFormat="dd/MM/yyyy"
                                disabled={check}
                                minDate={tomorrowFns}
                            />
                            <DatePicker
                                renderInput={(params) => (
                                    <TextField
                                        fullWidth
                                        {...params}
                                        helperText={
                                            startTime &&
                                            endTime &&
                                            startTime > endTime &&
                                            "Ngày cuối phải lớn hơn ngày đầu"
                                        }
                                    />
                                )}
                                label={"Ngày kết thúc"}
                                value={endTime}
                                onChange={(newValue) => {
                                    setEndTime(newValue || null);
                                }}
                                inputFormat="dd/MM/yyyy"
                                disabled={check || !startTime}
                                minDate={startTime}
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
                            <FormControlLabel
                                control={<Checkbox checked={check} onChange={() => tick()} />}
                                label="Tạo nhanh"
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
                            <Button variant="outlined" onClick={() => {}}>
                                {"Trở về"}
                            </Button>
                            <Button
                                autoFocus
                                variant="contained"
                                type="submit"
                                disabled={!startTime || !endTime || startTime > endTime}
                            >
                                {"Tạo mới"}
                            </Button>
                        </Box>
                    </Grid>
                </CardContainer>
            </Modal>
            <SchedulerOk data={appointments} locale={"vi-VN"}>
                <EditingState onCommitChanges={commitChanges} />
                <ViewState defaultCurrentDate={new Date()} />
                <MonthView />
                <Appointments appointmentComponent={Appointment} />
                <Toolbar
                    flexibleSpaceComponent={() => {
                        return (
                            <Box
                                sx={{
                                    display: "flex",
                                    flex: 1,
                                    mr: 2,
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                }}
                            >
                                <Grid container width={"30%"}>
                                    <Grid display="flex" item xs={6} alignItems="center">
                                        <Box
                                            borderRadius="5px"
                                            mr={2}
                                            height={20}
                                            width={20}
                                            bgcolor="#1e88e5"
                                        ></Box>
                                        {"Đang mở"}
                                    </Grid>
                                    <Grid display="flex" item xs={6} alignItems="center">
                                        <Box
                                            borderRadius="5px"
                                            mr={2}
                                            height={20}
                                            width={20}
                                            bgcolor="#fb8c00"
                                        ></Box>
                                        {"Đã đóng"}
                                    </Grid>
                                </Grid>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => setOpenModal(true)}
                                >
                                    Tạo phiên làm việc
                                </Button>
                            </Box>
                        );
                    }}
                />
                <DateNavigator />
                <DragDropProvider />
                <TodayButton
                    messages={{
                        today: "Trở về  ngày hiện tại",
                    }}
                />
            </SchedulerOk>
        </Paper>
    );
};

export default WorkSession;
