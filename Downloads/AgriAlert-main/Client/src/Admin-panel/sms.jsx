const Sms = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SMS Alert Sent');
    
  };

  return (
    <section className="px-17 py-6 ">
      <h2 className="text-xl font-bold mb-4">Send SMS Alert</h2>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-4">
        <div>
          <label className="block font-semibold">Message</label>
          <textarea className="w-full border p-2 rounded" rows="3" placeholder="Enter alert message..." />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold">Type of Farming</label>
             <select className="w-full border p-2 cursor-pointer rounded">
             <option>Crop Farming</option>
              <option>Livestock Farming</option>
              <option>Dairy Farming</option>
              <option>poultry Farming</option>
              <option>Horticulture</option>
              <option>Agroforestry</option>
              <option>Mixed Farming</option>
              <option>Aquaculture</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold">Region</label>
            <select className="w-full border p-2 cursor-pointer rounded">
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
          </div>
          <div>
            <label className="block font-semibold">Language</label>
            <select className="w-full border p-2 cursor-pointer rounded">
              <option>Kimeru</option>
              <option>Kikuyu</option>
              <option>Swahili</option>
              <option>Kiembu</option>
              <option>Kitharaka</option>
              <option>English</option>
              <option>Luhya</option>
              <option>Ekegusii</option>
              <option>Maa</option>
              <option>Kalenjin</option>
              <option>Turkana</option>
              <option>Somali</option>
              <option>Dholuo</option>
              <option>Pokot</option>
              <option>Kikamba</option>   

            </select>
          </div>
        </div>
        <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600">
          Send Alert
        </button>
      </form>
    </section>
  );
};

export default Sms;