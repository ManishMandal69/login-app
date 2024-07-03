export default function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      // Event handler executed when the file is successfully read
      reader.onloadend = () => {
        resolve(reader.result);
      };
  
      // Event handler executed if an error occurs while reading the file
      reader.onerror = (error) => {
        reject(error);
      };
  
      // Initiate the file reading as a data URL (base64 encoded string)
      reader.readAsDataURL(file);
    });
  }
  