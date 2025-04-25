import React from "react";
import { useParams } from "react-router-dom";

export default function CategoryDetailPage() {
  const { category } = useParams(); // Get the category name from the URL

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">{category}</h1>
      <p>Details about the {category} category go here...</p>
    </div>
  );
}
