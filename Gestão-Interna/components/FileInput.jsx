import React, { useRef, useState } from 'react';
import './FileInput.css'

const FileInput = () => {

    const inputRef = useRef();

    const  [selectedFile, setSelectedFile] = useState(null);

    const handleOnChange = (event) => {
       setSelectedFile(event.target.files?.[0] ?? null)
    };
    
    const onChooseFile = () => {
        inputRef.current.click();
    };

    const removeFile = () => {
        if(inputRef.current){
            inputRef.current.value = null;
            setSelectedFile(null);
        };
    };

    return (
    <div>
        <input type={"file"} accept={".csv"} ref={inputRef} onChange={handleOnChange} style={{display: "none"}}/>

        <button type="button" className="file-btn" onClick={onChooseFile}>
            <span className="material-symbols-rounded"> Upload File </span> 
        </button>

       {selectedFile && <div className="selected-file">
        <p>{selectedFile.name}</p>

        <button type="button" onClick={removeFile}>
            <span className="material-symbols-rounded"> Delete</span>
        </button>
        </div>}
    </div>
    );
};

export default FileInput;