import React, { useState } from 'react';
import HouseRow from './HouseRow';

const houseArray = [
    { id: 1, address: "123 Main St", country: "USA", price: "$300,000" },
    { id: 2, address: "456 Oak Rd", country: "Canada", price: "$250,000" },
    { id: 3, address: "789 Pine Ln", country: "UK", price: "£200,000" },
];

const HouseList = () => {
    const [houses, setHouses] = useState(houseArray);

    return (
        <>
            <div className="mb-4">
                <h5 className="text-xl font-semibold">
                    Houses currently on market
                </h5>
            </div>
            <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">Address</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Country</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Prices</th>
                    </tr>
                </thead>
                <tbody>
                    {houseArray.map(h => (
                        <HouseRow
                            key={h.id}
                            {...h} //this will unpack all the elements of this
                        />
                    ))}
                </tbody>
            </table>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                {/* Your button content here */}
            </button>
        </>
    );
};

export default HouseList;
