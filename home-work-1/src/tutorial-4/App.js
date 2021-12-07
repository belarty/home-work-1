import React, { useState } from 'react';
import EmptyBlock from './components/EmptyBlock';
import Phrase from './components/Phrase';

const App = () => {
    const [items, setItems] = useState([]);

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

    let generatePhrase = () => {
        let phrase = `${adjectivesArr[Math.floor(Math.random() * 29)]} ${adjectivesArr[Math.floor(Math.random() * 29)]} ${nounsArr[Math.floor(Math.random() * 10)]}`
        
        return phrase;
    }

    let handleClickGenerate = () => {
        setItems([generatePhrase(), ...items]);
    }
    //Так я не понял, у меня один стейт должен быть, но в него массив фраз поместить? А как

    let handleClickRemove = () => {
        setItems([]);
    }


    return (
        <div>
            <div className='wrapper'>
                {items.length === 0 ? <EmptyBlock /> : <Phrase />}
                <ul>{items.map((name) => <li>{name}</li>)}</ul>
                <button onClick={handleClickGenerate} className='btn btn_generate'>Сгенерировать</button>
                <button onClick={handleClickRemove} className='btn btn_clear'>Очистить</button>
            </div>
        </div>
    );
};

export default App;