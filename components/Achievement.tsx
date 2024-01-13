import React from 'react';
import { CiCirclePlus,CiCircleMinus  } from "react-icons/ci";
import {Collapse} from "react-collapse";
import { experiencesData } from '@/lib/data';

const Achievement = ({open,toggle,title,description,location,date}) => {
  return (
    <>
    <div className='pt-[10px]'>
        <div className="bg-white py-[25px] px-[50px] flex justify-between items-center cursor-pointer" onClick={toggle}>
    
        {experiencesData.map((item,index) => (
    <>
    <p className="text-[22px] font-semibold">{title}</p>
    <div className="text-[22px] ">
      {open ? <CiCirclePlus /> : <CiCircleMinus />}
    </div>
    </>
            ))}
  </div>
  <Collapse isOpened={open}>
    <div className="bg-white px-[50px] pb-[20px]">{description}</div>
  </Collapse>
    </div>
    </>
  )
}

export default Achievement