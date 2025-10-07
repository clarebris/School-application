import { useState } from 'react';

const FarmerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    idNumber: '',
    phone: '',
    farmingType: '',
    region: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Farmer registered:', formData);
    
  };

  return (
    <div className="bg-green-300 min-h-screen flex items-center justify-center">
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold">Register Farmer</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="text"
        name="idNumber"
        placeholder="ID Number"
        value={formData.idNumber}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <select
        name="farmingType"
        value={formData.farmingType}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      >
        <option value="">-- Select Farming Type --</option>

       <option>Crop Farming</option>
              <option>Livestock Farming</option>
              <option>Dairy Farming</option>
              <option>poultry Farming</option>
              <option>Horticulture</option>
              <option>Agroforestry</option>
              <option>Mixed Farming</option>
              <option>Aquaculture</option>
      </select>

      <select
        name="region"
        value={formData.region}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      >
         <option value="">-- Select Region --</option>
             <option>Meru</option>
              <option>Embu</option>
              <option>Tharaka</option>
              <option>Nairobi</option>
              <option>Kajiado</option>
              <option>Makueni</option>  
              <option>Machakos</option>
              <option>Kitui</option>
              <option>Nyeri</option>
              <option>Kirinyaga</option>
              <option>Murang'a</option>
              <option>Kiambu</option>
              <option>Turkana</option>
              <option>West Pokot</option>
              <option>Samburu</option>
              <option>Kisumu</option>
              <option>Homa Bay</option>
              <option>Siaya</option>
              <option>Bungoma</option>
              <option>Busia</option>
              <option>Vihiga</option>
              <option>Uasin Gishu</option>
              <option>Nandi</option>
              <option>Kericho</option>
              <option>Bomet</option>
              <option>Kakamega</option>
              <option>Trans Nzoia</option>
              <option>Garissa</option>
              <option>Eldoret</option>
              <option>Mombasa</option>
      </select>

      <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-600">
        Register Farmer
      </button>
    </form>
    </div>
  );
};

export default FarmerForm;