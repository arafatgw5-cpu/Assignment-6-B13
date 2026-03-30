import React, { use } from 'react';

const Model = ({modelPromise}) => {
    const models = use(modelPromise)
    console.log(models)
    return (
        <div>
           <h1>Premium Digital Tools</h1> 
           <p>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
        </div>
    );
};

export default Model;