import React from 'react';
import './PageContainer.scss';
import PokemonSearch from '../pokemon_search/PokemonSearch';

interface Page {
    title?: string;
    subTitle?: string;
    imgUrl?: string;
    posts?: [];
    private?: boolean;
    slug?: string;
}

export const PageContainer: React.FC<Page> = ({ title, subTitle, imgUrl, slug }) => {
    return (
        <div>
            <h1>{title}</h1>
            {subTitle && <h4>{subTitle}</h4>}
            {imgUrl && (
                <div>
                    <img src={imgUrl} alt="" />
                </div>
            )}
            {slug === 'playground' && <PokemonSearch></PokemonSearch>}
        </div>
    );
};
