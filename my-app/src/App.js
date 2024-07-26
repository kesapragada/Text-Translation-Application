// import React, { useState } from 'react';
// import './App.css'; // Ensure this CSS file exists and is properly set up

// function App() {
//     const [text, setText] = useState('');
//     const [translation, setTranslation] = useState('');

//     const handleTextChange = (e) => {
//         setText(e.target.value);
//     };

//     const handleTranslate = () => {
//         // Mock translation logic (replace with actual logic)
//         setTranslation(`Translated: ${text}`);
//     };

//     return (
//         <div className="container">
//             <div className="wrapper">
//                 <div className="text-input">
//                     <textarea 
//                         className="from-text" 
//                         placeholder="Enter text" 
//                         value={text}
//                         onChange={handleTextChange}
//                     />
//                     <textarea 
//                         className="to-text" 
//                         placeholder="Translation" 
//                         value={translation} 
//                         readOnly 
//                     />
//                 </div>
//                 <div className="character-count">{text.length} / 5000 characters</div>
//                 <ul className="controls">
//                     <li className="row from">
//                         <div className="icons">
//                             <i className="fas fa-volume-up"></i>
//                             <i className="fas fa-copy"></i>
//                         </div>
//                         <select></select>
//                     </li>
//                     <li className="exchange"><i className="fas fa-exchange-alt"></i></li>
//                     <li className="row to">
//                         <select></select>
//                         <div className="icons">
//                             <i className="fas fa-volume-up"></i>
//                             <i className="fas fa-copy"></i>
//                         </div>
//                     </li>
//                 </ul>
//             </div>
//             <button onClick={handleTranslate}>Translate Text</button>
//         </div>
//     );
// }

// export default App;
// import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Hello, React!</h1>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import './App.css'; // Ensure this CSS file exists and is properly set up

// function App() {
//     const [text, setText] = useState('');
//     const [translation, setTranslation] = useState('');

//     const handleTextChange = (e) => {
//         setText(e.target.value);
//     };

//     const handleTranslate = () => {
//         // Mock translation logic (replace with actual logic)
//         setTranslation(`Translated: ${text}`);
//     };

//     return (
//         <div className="container">
//             <div className="wrapper">
//                 <div className="text-input">
//                     <textarea 
//                         className="from-text" 
//                         placeholder="Enter text" 
//                         value={text}
//                         onChange={handleTextChange}
//                     />
//                     <textarea 
//                         className="to-text" 
//                         placeholder="Translation" 
//                         value={translation} 
//                         readOnly 
//                     />
//                 </div>
//                 <div className="character-count">{text.length} / 5000 characters</div>
//                 <ul className="controls">
//                     <li className="row from">
//                         <div className="icons">
//                             <i className="fas fa-volume-up"></i>
//                             <i className="fas fa-copy"></i>
//                         </div>
//                         <select></select>
//                     </li>
//                     <li className="exchange"><i className="fas fa-exchange-alt"></i></li>
//                     <li className="row to">
//                         <select></select>
//                         <div className="icons">
//                             <i className="fas fa-volume-up"></i>
//                             <i className="fas fa-copy"></i>
//                         </div>
//                     </li>
//                 </ul>
//             </div>
//             <button onClick={handleTranslate}>Translate Text</button>
//         </div>
//     );
// }

// export default App;
// src/App.js
import React, { useState } from 'react';
import './App.css';
import NotificationInbox from './NotificationInbox';

function App() {
    const [text, setText] = useState('');
    const [translation, setTranslation] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleTranslate = () => {
        // Mock translation logic (replace with actual logic)
        setTranslation(`Translated: ${text}`);

        // Trigger an event for SuprSend
        const event = new CustomEvent('SuprSendNotification', {
            detail: { message: `Translation completed: ${text}` },
        });
        window.dispatchEvent(event);
    };

    return (
        <div className="container">
            <NotificationInbox />
            <div className="wrapper">
                <div className="text-input">
                    <textarea 
                        className="from-text" 
                        placeholder="Enter text" 
                        value={text}
                        onChange={handleTextChange}
                    />
                    <textarea 
                        className="to-text" 
                        placeholder="Translation" 
                        value={translation} 
                        readOnly 
                    />
                </div>
                <div className="character-count">{text.length} / 5000 characters</div>
                <ul className="controls">
                    <li className="row from">
                        <div className="icons">
                            <i className="fas fa-volume-up"></i>
                            <i className="fas fa-copy"></i>
                        </div>
                        <select></select>
                    </li>
                    <li className="exchange"><i className="fas fa-exchange-alt"></i></li>
                    <li className="row to">
                        <select></select>
                        <div className="icons">
                            <i className="fas fa-volume-up"></i>
                            <i className="fas fa-copy"></i>
                        </div>
                    </li>
                </ul>
            </div>
            <button onClick={handleTranslate}>Translate Text</button>
        </div>
    );
}

export default App;
