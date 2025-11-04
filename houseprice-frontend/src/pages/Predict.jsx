import React, { useState } from "react";

const Predict = () => {
  const [formData, setFormData] = useState({
    buildingType: "",
    zoning: "",
    lotSize: "",
    roadAccess: "",
    landSlope: "",
    dwellingType: "",
    materialQuality: "",
    roofType: "",
    propertyCondition: "",
  });

  const [predictedPrice, setPredictedPrice] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Replace with actual backend API call
    const randomPrice = Math.floor(Math.random() * 500000) + 100000;
    setPredictedPrice(randomPrice);
  };

  const inputFields = [
    { label: "Building Type", name: "buildingType", placeholder: "e.g. 1Fam, 2Fam, Twnhs" },
    { label: "Zoning Classification", name: "zoning", placeholder: "e.g. RL, RM, C (Commercial)" },
    { label: "Lot Size (sq ft)", name: "lotSize", type: "number", placeholder: "Enter lot size" },
    { label: "Road Access Type", name: "roadAccess", placeholder: "e.g. Paved, Gravel" },
    { label: "Land Slope", name: "landSlope", placeholder: "e.g. Gentle, Moderate" },
    { label: "Dwelling Type", name: "dwellingType", placeholder: "e.g. Duplex, Single-Family" },
    { label: "Material & Finish Quality", name: "materialQuality", placeholder: "e.g. Excellent, Average, Poor" },
    { label: "Roof Type", name: "roofType", placeholder: "e.g. Gable, Flat" },
    { label: "Property Condition", name: "propertyCondition", placeholder: "e.g. Excellent, Fair, Poor" },
  ];

  return (
    <div className="bg-[#f5f5f5] min-h-screen flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-[#4b3429]">House Price Prediction</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inputFields.map((field) => (
            <div key={field.name}>
              <label className="block text-gray-700">{field.label}</label>
              <input
                type={field.type || "text"}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full mt-2 p-2 border rounded-md"
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="mt-8 w-full bg-[#4b3429] text-white py-3 rounded-lg hover:bg-[#3c2b21] transition"
        >
          Predict Price
        </button>
      </form>

      {predictedPrice && (
        <div className="mt-8 bg-[#4b3429] text-white py-4 px-8 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold">Estimated House Price:</h2>
          <p className="text-3xl font-bold mt-2">
            Rs. {predictedPrice.toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default Predict;
