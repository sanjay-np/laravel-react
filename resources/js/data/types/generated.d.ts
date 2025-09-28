export type typeLoginRequestData = {
    email: string;
    password: string;
    remember?: boolean;
};
export type typeLoginResponseData = {
    token: string;
    user: typeUserData;
};
export type typeUserData = {
    id: string;
    name: string;
    email: string;
};
