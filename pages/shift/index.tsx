import { ViewState, EditingState, ChangeSet } from "@devexpress/dx-react-scheduler";
import {
    Scheduler,
    SchedulerProps,
    WeekView,
    Appointments,
    DateNavigator,
    DragDropProvider,
    Toolbar,
    TodayButton,
    ViewSwitcher,
    DayView,
    MonthView,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Button, MenuItem, Paper, Select } from "@mui/material";
import { Box } from "@mui/system";

export const SchedulerOk: React.FC<SchedulerProps & { children: React.ReactNode }> = ({
    children,
    ...rest
}) => {
    return <Scheduler {...rest}>{children}</Scheduler>;
};

const Shift = () => {
    const Appointment: React.FC = (props: any) => {
        const { children, style, data, ...restProps } = props;
        return (
            <Appointments.Appointment
                {...restProps}
                style={{
                    ...style,
                    backgroundColor: data.backgroundColor,
                    color: data.color,
                    fontSize: 12,
                }}
            >
                {children}
            </Appointments.Appointment>
        );
    };

    const data = undefined;

    const commitChanges = (changes: ChangeSet) => {
        // eslint-disable-next-line no-console
        console.log(changes);
    };
    return (
        <Paper sx={{ mt: 1 }}>
            <SchedulerOk data={data} locale={"vi-VN"}>
                <EditingState onCommitChanges={commitChanges} />
                <ViewState defaultCurrentDate={new Date()} />
                <WeekView cellDuration={120} />
                <DayView />
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
                                }}
                            >
                                <Button variant="contained" color="warning" sx={{ mr: 1 }}>
                                    Tạo phiên làm việc
                                </Button>
                            </Box>
                        );
                    }}
                />
                <DateNavigator />
                <ViewSwitcher
                    switcherComponent={(props) => {
                        return (
                            <Select
                                id="demo-simple-select"
                                value={props.currentView.name}
                                onChange={(e) => {
                                    props.onChange(e.target.value);
                                }}
                            >
                                {props.availableViews.map((x) => {
                                    return (
                                        <MenuItem key={x.name} value={x.name}>
                                            {x.displayName.toUpperCase() === "WEEK"
                                                ? "Hiện thị theo tuần"
                                                : x.displayName.toUpperCase() === "MONTH"
                                                ? "Hiện thị theo tháng"
                                                : x.displayName.toUpperCase() === "DAY"
                                                ? "Hiện thị theo ngày"
                                                : ""}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        );
                    }}
                />
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

export default Shift;
