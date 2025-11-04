import React from "react";

const Details = () => {
  const details = [
    { feature: "Building Type", description: "Specifies the type of building such as Single-family, Duplex, or Townhouse." },
    { feature: "Zoning Classification", description: "Indicates the area classification — Residential, Commercial, or Mixed-use." },
    { feature: "Lot Size", description: "Total area of the property in square feet or square meters." },
    { feature: "Road Access Type", description: "Type of road access available such as Paved or Gravel." },
    { feature: "Land Slope", description: "Shows how flat or steep the property’s land is." },
    { feature: "Dwelling Type", description: "Identifies the type of residence — Single-story, Two-story, etc." },
    { feature: "Material & Finish Quality", description: "Rates the quality of construction materials and interior finish." },
    { feature: "Roof Type", description: "Describes the shape or style of the roof such as Gable or Flat." },
    { feature: "Property Condition", description: "Overall physical condition of the property — Excellent, Good, Fair, or Poor." },
  ];

  return (
    <div className="bg-[#fdfbf7] min-h-screen py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-[#4b3429] mb-10">
        Feature Details
      </h1>

      <div className="overflow-x-auto max-w-5xl mx-auto bg-white shadow-md rounded-2xl">
        <table className="w-full border-collapse text-left">
          <thead className="bg-[#4b3429] text-white">
            <tr>
              <th className="p-4 text-lg font-semibold border-b border-[#3b281f]">Feature</th>
              <th className="p-4 text-lg font-semibold border-b border-[#3b281f]">Description</th>
            </tr>
          </thead>
          <tbody>
            {details.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-[#f8f5f1]" : "bg-[#f0ebe5]"
                } hover:bg-[#ece6e0] transition`}
              >
                <td className="p-4 border-b border-gray-300 font-medium text-[#4b3429]">
                  {item.feature}
                </td>
                <td className="p-4 border-b border-gray-300 text-gray-700">
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
