// components/profile/TechSelection.tsx
import React from "react";

interface TechSelectionProps {
  toggleModal: () => void;
  openTopTechModal: () => void;
  topTech: string[];
  selectedTech: string[];
}

const TechSelection: React.FC<TechSelectionProps> = ({
  toggleModal,
  openTopTechModal,
  topTech,
  selectedTech,
}) => {
  return (
    <div>
      <button
        onClick={toggleModal}
        className="my-4 py-2 px-4 bg-gray-600 text-white rounded hover:bg-gray-800"
      >
        技術を選択
      </button>
      <button
        onClick={openTopTechModal}
        className="ml-4 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700"
      >
        Top 3 を選択
      </button>
      <div className="flex gap-2 flex-wrap mb-4">
        {topTech.map((tech, index) => (
          <span key={tech} className="bg-blue-500 text-white rounded-full px-4 py-1">
            {index + 1}位. {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap mb-4">
        {selectedTech.map((tech) => (
          <span key={tech} className="bg-blue-300 text-white rounded-full px-4 py-1">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechSelection;