"use client";
import { extractSectionFromPDF } from "@/lib/extractSection";
import React, { ChangeEvent, useState } from "react";

const PDFExtractor: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [startWord, setStartWord] = useState<string>("");
  const [endWord, setEndWord] = useState<string>("");
  const [extractedText, setExtractedText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleExtract = async () => {
    if (file && pageNumber && startWord && endWord) {
      setLoading(true);
      const section = await extractSectionFromPDF(
        file,
        pageNumber,
        startWord,
        endWord
      );
      setExtractedText(section);
      setLoading(false);
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="pdf-extractor">
      <h2 className="text-2xl font-medium text-orange-400 mb-8 text-center">
        PDF Section Extractor
      </h2>
      <div className="form-grid">
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
        />
        <input
          type="number"
          placeholder="Page Number"
          value={pageNumber}
          onChange={(e) => setPageNumber(Number(e.target.value))}
        />
        <input
          type="text"
          placeholder="Start Word"
          value={startWord}
          onChange={(e) => setStartWord(e.target.value)}
        />
        <input
          type="text"
          placeholder="End Word"
          value={endWord}
          onChange={(e) => setEndWord(e.target.value)}
        />
        <button onClick={handleExtract} disabled={loading}>
          {loading ? (
            <span className="loading-spinner"></span>
          ) : (
            "Extract Section"
          )}
        </button>
      </div>

      <h3>Extracted Section:</h3>
      <div className="extracted-section">
        {extractedText ? extractedText : "No section extracted yet."}
      </div>
    </div>
  );
};

export default PDFExtractor;
