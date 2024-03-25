export type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
export interface JSONObject {
    [key: string]: any;
}
export interface HTMLObject {
    [key: string]: { type: string; description: string; };
}

export type IFolder = Node & {
    type: "FOLDER";
    name: string;
    children: (IFolder | IRoute)[];
}

export type Node = {
    type: "ROUTE" | "FOLDER";
}

export type IRoute = Node & {
    type: "ROUTE";
    route: string;
    name: string;
    method: Method;
    guarded: boolean;
    description: string;
    headers?: HTMLObject;
    body?: HTMLObject;
    responses: Response[];
}

export interface Response {
    code: number;
    message: string | ;
    description: string;
}