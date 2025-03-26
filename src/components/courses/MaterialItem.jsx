import { DocumentTextIcon, FilmIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';


const MaterialItem = ({ material }) => {
  const getIcon = () => {
    switch (material.attributes.type) {
      case 'video':
        return <FilmIcon className="h-5 w-5 text-indigo-500" />;
      case 'pdf':
        return <DocumentTextIcon className="h-5 w-5 text-red-500" />;
      default:
        return <DocumentTextIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
      <div className="flex-shrink-0 mt-1">{getIcon()}</div>
      <div>
        <h4 className="font-medium text-gray-800">{material.attributes.title || 'Untitled'}</h4>

        <p className="text-sm text-gray-500 mt-1">
          {material.attributes.type || 'Unknown'} • {material.attributes.duration || '0'} min

        </p>
      </div>
    </div>
  );
};

MaterialItem.propTypes = {
  material: PropTypes.shape({
    attributes: PropTypes.shape({
      title: PropTypes.string,
      type: PropTypes.string,
      duration: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default MaterialItem;
