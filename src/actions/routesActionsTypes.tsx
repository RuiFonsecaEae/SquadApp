export const ROUTES_LOADING = 'ROUTES_LOADING';
export const ROUTES_FAIL = 'ROUTES_FAIL';
export const ROUTES_SUCCESS = 'ROUTES_SUCCESS';

// export type RoutesType = {
//     routes: Routes[];
// };

export type Routes = {
    name: string;
    private: boolean;
    slug: string;
};

export interface RoutesLoading {
    type: typeof ROUTES_LOADING;
}

export interface RoutesFail {
    type: typeof ROUTES_FAIL;
}

export interface RoutesSuccess {
    type: typeof ROUTES_SUCCESS;
    payload: Routes[];
}

export type RoutesDispatchTypes = RoutesLoading | RoutesFail | RoutesSuccess;
