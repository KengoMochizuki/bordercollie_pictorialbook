import React from 'react'
import Infomations from'./Informations'
import UploadList from './UploadList'
// rafce

const Upload = () => {
  return (
    <div>
        <UploadList Info={Infomations} />
        <input type="text" placeholder="(Title)"></input>
        <br/>
        <input type="text" placeholder="(text)"></input>
        <br/>
        <input type="text" placeholder="(subtitle)"></input>
        <br/>
        <input type="text" placeholder="(ButtonText)"></input>
        <br/>
        <input type="file"></input>
        <button>登録</button>
    </div>
    
  )
}

export default Upload
