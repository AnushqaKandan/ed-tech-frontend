import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
      {course.attributes.image?.data && (
        <div className="h-48 overflow-hidden">
          <img
            src={`http://localhost:1337${course.attributes.image.data.attributes.url}`}
            alt={course.attributes.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{course.attributes.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {course.attributes.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="font-medium text-indigo-600">${course.attributes.price}</span>
          <Link
            to={`/courses/${course.id}`}
            className="text-sm px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;