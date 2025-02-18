import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@2.14.305/legacy/build/pdf.worker.min.js`;

// Helper function to create a delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const extractSectionFromPDF = async (
  file,
  pageNumber,
  startWord,
  endWord
) => {
  const pdf = await pdfjsLib.getDocument(URL.createObjectURL(file)).promise;
  const page = await pdf.getPage(pageNumber);
  const textContent = await page.getTextContent();
  const strings = textContent.items.map((item) => item.str);
  const pageText = strings.join(" ");

  // Find start and end indices
  const startIndex = pageText.indexOf(startWord);
  const endIndex = pageText.indexOf(endWord, startIndex);
  console.log("startIndex", startIndex);
  console.log("endIndex", endIndex);

  // Extract section
  let result;
  if (startIndex !== -1 && endIndex !== -1) {
    result = pageText.substring(startIndex, endIndex + endWord.length);
  } else {
    result = "Section not found!";
  }

  await delay(2000);

  return result;
};
