import React from 'react';
import './PageContainer.scss';

interface Page {
    title: string;
    subTitle?: string;
    imgUrl?: string;
    posts?: [];
    private?: boolean;
    slug?: string;
}

export const PageContainer: React.FC<Page> = ({ title, subTitle, imgUrl }) => {
    return (
        <div>
            <h1>{title}</h1>
            {subTitle && <h4>{subTitle}</h4>}
            {imgUrl && (
                <div>
                    <img src={imgUrl} alt="" />
                </div>
            )}
        </div>
    );
};
