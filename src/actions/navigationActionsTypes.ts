export const NAVIGATION_LOADING = 'NAVIGATION_LOADING';
export const NAVIGATION_FAIL = 'NAVIGATION_FAIL';
export const NAVIGATION_SUCCESS = 'NAVIGATION_SUCCESS';

export type NavigationType = {
    abilities: Navigation[];
};

export type Navigation = {
    route: {
        name: string;
        private: boolean;
        slug: string;
    };
};

export interface NavigationLoading {
    type: typeof NAVIGATION_LOADING;
}

export interface NavigationFail {
    type: typeof NAVIGATION_FAIL;
}

export interface NavigationSuccess {
    type: typeof NAVIGATION_SUCCESS;
    payload: NavigationType;
}

export type NavigationDispatchTypes = NavigationLoading | NavigationFail | NavigationSuccess;
