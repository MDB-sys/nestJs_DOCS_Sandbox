export declare type User = any;
export declare class UsersService {
    private readonly users;
    findOne(username: String): Promise<User | undefined>;
}
