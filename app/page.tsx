import PDFExtractor from "@/components/PDFExtractor";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center">
          {`PDF Text Extractor - Abhijeet Kumar`}
        </h1>
        <h2 className="text-3xl text-pink-600 mb-8 text-center">
          {`Start editing to see some magic happen :)`}
        </h2>
        <PDFExtractor />
      </div>
    </div>
  );
}
