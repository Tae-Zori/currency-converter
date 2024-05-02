import React, { useState } from "react";
import MyInput from "../input/MyInput";
import MySelect from "../select/MySelect";

export const InputBar = ({valute, label, readOnly, valueInput, onChangeInput, onChangeSelect}:any) => {
    
   
    return(
        <div>
            <MySelect options={valute} readOnly={readOnly}  label={label} onChange={onChangeSelect}/>
            <MyInput value={valueInput} onChange={onChangeInput}/>
        </div>
    )
}