import React from 'react';
import Chat from './components/Chat';
import Timer from './components/Timer';

const App = () => {
    return (
        <div>
            <h1>Remote Work Helper</h1>
            <Timer />
            <Chat />
        </div>
    );
};

export default App;
