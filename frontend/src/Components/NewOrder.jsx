import React, { useState } from 'react';

const NewOrder = () => {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [deliveryNeeded, setDeliveryNeeded] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState('');

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    console.log('Order Submitted:', { item, quantity, deliveryNeeded, deliveryDate });
    setItem('');
    setQuantity('');
    setDeliveryNeeded(false);
    setDeliveryDate('');
  };

  return (
    <div className="flex flex-col h-screen relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-full w-full grid grid-cols-3 gap-4">
          {/* Bubbles */}
          <div className="h-6 w-6 bg-white rounded-full animate-ping absolute -left-1/4 -top-1/4"></div>
          <div className="h-8 w-8 bg-white rounded-full animate-ping absolute -right-1/4 -bottom-1/4"></div>
          <div className="h-12 w-12 bg-white rounded-full animate-ping absolute -left-1/2 -bottom-1/2"></div>
        </div>
      </div>
      {/* Form */}
      <div className="flex-grow p-8 bg-gradient-to-r from-blue-400 to-purple-500 shadow-md rounded-md animate-fadeIn relative z-10">
        <h2 className="text-3xl font-bold text-white mb-6">Place New Order</h2>
        <form onSubmit={handleOrderSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="item" className="text-white font-semibold">Item:</label>
            <input type="text" id="item" className="border rounded-md px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600" value={item} onChange={(e) => setItem(e.target.value)} required />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="quantity" className="text-white font-semibold">Quantity:</label>
            <input type="number" id="quantity" className="border rounded-md px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="deliveryNeeded" className="form-checkbox h-6 w-6 text-blue-500 focus:ring-2 focus:ring-blue-600" checked={deliveryNeeded} onChange={(e) => setDeliveryNeeded(e.target.checked)} />
            <label htmlFor="deliveryNeeded" className="text-white font-semibold">Delivery Needed</label>
          </div>
          {deliveryNeeded && (
            <div className="flex flex-col space-y-2">
              <label htmlFor="deliveryDate" className="text-white font-semibold">Delivery Date:</label>
              <input type="date" id="deliveryDate" className="border rounded-md px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} required />
            </div>
          )}
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300">Submit Order</button>
        </form>
      </div>
    </div>
  );
};

export default NewOrder;
