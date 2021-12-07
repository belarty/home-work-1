import React, { useState, useEffect } from 'react';
import EmptyBlock from './components/EmptyBlock';
import Phrase from './components/Phrase';

const App = () => {
    const [items, setItems] = useState([]);
    const [generateWord, setGenerateWord] = useState('');
    const [mainList, setGenerateList] = useState([]);
    
    const adjectivesArr = [
        "абсолютный",
        "адский",
        "азартный",
        "активный",
        "ангельский",
        "астрономический",
        "баснословный",
        "безбожный",
        "безбрежный",
        "безвозвратный",
        "безграничный",
        "бездонный",
        "бездушный",
        "безжалостный",
        "замечательно",
        "замечательный",
        "записной",
        "запредельный",
        "заядлый",
        "звериный",
        "зверский",
        "зеленый",
        "злой",
        "злостный",
        "значительный",
        "неоспоримый",
        "неотразимый",
        "неоценимый",
        "непередаваемый"
    ];

    const nounsArr = [
        "лгун",
        "день",
        "конь",
        "олень",
        "человек",
        "программист",
        "ребёнок",
        "конец",
        "город",
        "дурак"
    ];

    let handleClickGenerate = () => {
        setGenerateWord((adjectivesArr[1] + ' ' + adjectivesArr[1] + ' ' + nounsArr[2]));
        setItems([items, ...generateWord]);
        setGenerateWord([]);
    }
    useEffect(() => {
        return () => {
            setItems([items, ...generateWord]);
        };
    }, [generateWord]);
    

    let handleClickRemove = () => {
        setItems([]);
    }
    

    return (
        <div>
            <div className='wrapper'>
                {<EmptyBlock /> || <Phrase generateWord={generateWord} />}
                <ul>{items.map((name) => <li>{name}</li>)}</ul>
                <button onClick={handleClickGenerate} className='btn btn_generate'>Сгенерировать</button>
                <button onClick={handleClickRemove} className='btn btn_clear'>Очистить</button>
            </div>
        </div>
    );
};

export default App;