import React from 'react';
import './PageContainer.scss';
import PokemonSearch from '../pokemon_search/PokemonSearch';

interface Page {
    title?: string;
    subTitle?: string;
    imgUrl?: string;
    posts?: [];
    privateArea?: boolean;
    slug?: string;
}

export const PageContainer: React.FC<Page> = ({ title, subTitle, imgUrl, slug, privateArea }) => {
    return (
        <div>
            <h1>{title}</h1>
            {subTitle && <h4>{subTitle}</h4>}
            {imgUrl && (
                <div>
                    <img src={imgUrl} alt="" />
                </div>
            )}
            {'private' === slug && (
                <div>
                    {privateArea} {slug} KKKKKK
                </div>
            )}
            {'playground' === slug && <PokemonSearch></PokemonSearch>}
        </div>
    );
};
