export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call with setTimeout
    setTimeout(() => {
      // For demonstration purposes, resolve the promise
      resolve("API response data");

      // If there was an error, you could use reject
      // reject(new Error("API call failed"));
    }
  , 2000); // Simulating a 2-second delay
  });
}