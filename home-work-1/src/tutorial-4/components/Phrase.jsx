import React, { useState } from 'react';
import classes from '../App.css';

const Phrase = (generateWord) => {

    return (
        <div>
            {generateWord}
        </div>
    );
};

export default Phrase;