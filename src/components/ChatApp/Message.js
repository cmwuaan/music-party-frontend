import React, { useState, useEffect } from "react";
import user from '../../assets/images/user.jpg'
const Message = (params) => {
  const [isMe, setIsMe] = useState(true);

  useEffect(() => {
    // Logic trong useEffect sẽ được thực thi sau khi component được render
    // Hãy cung cấp một hàm callback chứa logic bạn muốn thực thi ở đây
  }, []);

  return (
    <div className="bg-transparent my-4 mx-2">
      {!params.isMe ? (
        <div className="flex  gap-2 w-full">
            <img src={params.avar} alt="user" className="size-[50px] bg-none rounded-[50%]" />     
            <div className="w-1/2">
                <p className="text-white text-[18px] font-[600]">{params.name}</p>
                <p className="text-black bg-white px-3 py-2 rounded-[10px] inline-block break-words">
                {params.message}
                </p>
            </div>

        </div>
        
      ) : (
        <div className="flex gap-2 w-full">
            <div className="w-1/2 ml-auto ">
                <div className="float-end">
                    <p className="text-white font-[600] text-[18px]   ">{params.name}</p>

                    <div className="float-end">
                        <p className="text-black bg-white px-3 py-2 rounded-[10px] inline-block break-words">
                            {params.message}
                        </p>

                    </div>

                </div>
            </div>
            <img src={params.avar} alt="user" className="size-[50px] bg-none rounded-[50%] mr-[0px] " />

        </div>
      )}
    </div>
  );
};

export default Message;