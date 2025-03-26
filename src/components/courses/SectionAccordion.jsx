import { useState } from 'react';
import { DocumentTextIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

const SectionAccordion = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
      <button
        className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-medium text-gray-900">{section.attributes.title}</h3>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`accordion-content ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
        <div className="p-4 bg-white">
          {section.attributes.description && (
            <p className="text-gray-600 mb-4">{section.attributes.description}</p>
          )}
          <div className="space-y-2">
            {section.attributes.materials?.data?.length > 0 ? (
              section.attributes.materials.data.map((material) => (
                <div key={material.id} className="flex items-center p-2 hover:bg-gray-50 rounded">
                  {material.attributes.type === 'video' ? (
                    <VideoCameraIcon className="h-5 w-5 text-red-500 mr-3" />
                  ) : (
                    <DocumentTextIcon className="h-5 w-5 text-blue-500 mr-3" />
                  )}
                  <span className="text-gray-700">{material.attributes.title}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No materials in this section yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAccordion;