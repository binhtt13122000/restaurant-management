import { useMutation } from "react-query";
import axios from "configurations/axios";
import { AxiosResponse, AxiosError } from "axios";
import { LoginModel, LoginResponseModel } from "models/login.model";

const useLogin = () => {
    return useMutation<LoginResponseModel | null, AxiosError<{ msg: string }>, LoginModel>(
        [],
        async (variable) => {
            const result = await axios.post<
                LoginModel,
                AxiosResponse<{ account: LoginResponseModel[] }>,
                LoginModel
            >(`/login/${variable.username}/${variable.password}`);
            const users = result.data.account;
            return users.length ? users[0] : null;
        }
    );
};
export default useLogin;
