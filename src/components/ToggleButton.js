import React, { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };
  return (
    <button onClick={toggle} className="w-[32px] h-[18px] bg-green-500 rounded-full flex items-center relative">
      <div className="w-[12.6px] h-[12.6px] rounded-full bg-black absolute right-1"></div>
    </button>
  );
}

export default ToggleButton;
