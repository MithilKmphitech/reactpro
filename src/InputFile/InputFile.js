import React, { useState } from 'react';
const InputFile = () => {
    const [path, setPath] = useState();
    const handleFi1eChosen = (e) => {
        const selectedFIles = [];
        const targetFiles = e.target.files;
        const targetFilesObject = [...targetFiles]
        targetFilesObject.map((file,index) => {
            let filedata={}
            filedata.url=URL.createObjectURL(file)
            filedata.name=file.name
            filedata.index=index
            return selectedFIles.push(filedata)
        })
        setPath(selectedFIles)
    }
    const uploadLength=path &&path.length;
    const removevideo=(index)=>{
        const removeItem = path.filter((todo) => {
            return todo.index !== index;
          });
          setPath(removeItem)
    }
    return (
        <>
            <div className='main_video_btn'>
                <input className='upload_btn' type="file" onChange={handleFi1eChosen} multiple />
                <div className='upload_video'>Upload Video {path && uploadLength}</div>
            </div>
            <div className="card">
                {
                    path && path.map((item,index) => {
                        return (
                            <div className='uploadvideo' key={index} id={index}>
                            <video className='video_size' src={item.url} controlsList="nodownload" controls></video>
                            <p className='content_name'>{item.name}</p>
                            <button className='closed_btn' onClick={() => removevideo(item.index)}><b>X</b></button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default InputFile;