import React, { useState } from 'react';

function RoomModal({ onToggleModal }) {
  const closeCreateModal = () => {
    onToggleModal();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-[#1f2937] text-white w-96 rounded-lg p-6 z-50">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold ">Create a Room</h2>
          <button className="text-white  text-2xl rounded-full px-2 hover:bg-slate-600" onClick={closeCreateModal}>
            &times;
          </button>
        </div>
        <p className="font-semibold mt-5">Room name:</p>
        <input
          value={''}
          onChange={() => {}}
          className="border border-gray-300 shadow-sm rounded-lg py-2 px-4 bg-[#1f2937] mt-2 w-full "
          type="text"
          placeholder="Your Room"
          required
        />
        <p className="font-semibold mt-5">
          Secret room {'('}Not required{')'}
        </p>
        <input
          value={''}
          onChange={() => {}}
          className="border border-gray-300 shadow-sm rounded-lg py-2 px-4 bg-[#1f2937] mt-2 w-full "
          type="text"
          placeholder="Password"
          required
        />
        <button
          onClick={() => {}}
          className="  shadow-sm rounded-lg py-2 px-6 bg-gradient-to-r bg-green-500   w-full mt-8"
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default RoomModal;
