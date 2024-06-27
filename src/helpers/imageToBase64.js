const imageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
  
      reader.readAsDataURL(file);
    });
  };
  
  export default imageToBase64;
  