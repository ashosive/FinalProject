import React from 'react';

const OrderHistory = () => {
  // Sample data for demonstration
  const orders = [
    { id: 1, item: 'Apples', quantity: 5, status: 'Completed' },
    { id: 2, item: 'Oranges', quantity: 3, status: 'Completed' },
    { id: 3, item: 'Bananas', quantity: 2, status: 'Pending' },
    { id: 4, item: 'Grapes', quantity: 4, status: 'Completed' },
    { id: 5, item: 'Pineapple', quantity: 1, status: 'Completed' },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h2 className="text-3xl font-bold mb-4">Order History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map(order => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.item}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.quantity}</td>
                <td className={`px-6 py-4 whitespace-nowrap ${order.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
