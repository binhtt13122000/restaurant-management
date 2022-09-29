export default interface AccountDTO {
    id?: number;
    username: string;
    fullName: string;
    email: string;
    phone: string;
    avatar?: string;
    roleId?: number;
    restaurantId?: number;
}
