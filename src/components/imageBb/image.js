export default handleFileChange = async (e) => {
  const file = e.target.files[0];
  if (file) {
    const formData = new FormData();
    formData.append("image", file);

    const apiKey = "7a4a20aea9e7d64e24c6e75b2972ff00";
    const uploadUrl = `https://api.imgbb.com/1/upload?key=${apiKey}`;
    const res = await fetch(uploadUrl, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data;
  }
};
