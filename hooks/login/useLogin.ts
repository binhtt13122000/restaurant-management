import LoginModel from "models/login.model";
import { useMutation } from "react-query";
import axios from "configurations/axios";
import { AxiosResponse, AxiosError } from "axios";

const useLogin = () => {
    return useMutation<LoginModel, AxiosError<{ msg: string }>, LoginModel>(
        [],
        async (variable) => {
            const result = await axios.post<LoginModel, AxiosResponse<LoginModel>, LoginModel>(
                "/login",
                variable
            );
            return result.data;
        }
    );
};
export default useLogin;
