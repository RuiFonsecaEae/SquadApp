import React from 'react';
import './PageContainer.scss';

interface Info {
    title: string;
    content?: string;
}

export const PageContainer: React.FC<Info> = ({ title, content }) => {
    return (
        <div>
            <h1>{title}</h1>
            {content ? <p className="page-container">{content}</p> : ''}
        </div>
    );
};
