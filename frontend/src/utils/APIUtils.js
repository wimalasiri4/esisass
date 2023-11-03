import { BASE_URL_MODEL, BASE_URL_DOCUMENT } from "./Constants";

export const predict = (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);
  return fetch(`${BASE_URL_MODEL}/predict`, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error: ", error);
      throw error;
    });
};

export const downloadPDF = (animalName) => {
  const data = new FormData();
  data.append("animal_name", animalName);
  return fetch(`${BASE_URL_DOCUMENT}/download`, {
    method: "POST",
    body: data,
  })
    .then((response) => response.blob())
    .catch((error) => {
      console.error("Error: ", error);
      throw error;
    });
};
