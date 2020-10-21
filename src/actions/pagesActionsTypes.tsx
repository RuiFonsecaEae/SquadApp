export const PAGES_GET = 'PAGES_GET';
export const PAGES_FAIL = 'PAGES_FAIL';
export const PAGES_SUCCESS = 'PAGES_SUCCESS';

export type Pages = {
    title: string;
    subTitle: string;
    imgUrl: string;
    posts: [];
    private: boolean;
    slug: string;
};

export interface PagesLoading {
    type: typeof PAGES_GET;
}

export interface PagesFail {
    type: typeof PAGES_FAIL;
}

export interface PagesSuccess {
    type: typeof PAGES_SUCCESS;
    payload: Pages[];
}

export type PagesDispatchTypes = PagesLoading | PagesFail | PagesSuccess;
