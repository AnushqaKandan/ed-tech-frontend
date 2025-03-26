import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCourseById } from '../api/courses';
import SectionAccordion from '../components/courses/SectionAccordion';

const CourseView = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await getCourseById(id);
        setCourse(response.data.data);
      } catch (err) {
        setError('Failed to load course. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto px-4 py-8 text-red-500">{error}</div>;
  }

  if (!course) {
    return <div className="container mx-auto px-4 py-8">Course not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{course.attributes.name}</h1>
          <p className="text-gray-600 mt-2">{course.attributes.description}</p>
          <p className="text-indigo-600 font-medium mt-2">${course.attributes.price}</p>
        </div>
        <Link
          to="/dashboard"
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
        >
          Back to Dashboard
        </Link>
      </div>

      {course.attributes.image?.data && (
        <div className="mb-8">
          <img
            src={`https://edtech-backend02.onrender.com${course.attributes.image.data.attributes.url}`}
            alt={course.attributes.name}
            className="rounded-lg w-full max-h-96 object-cover"
          />
        </div>
      )}

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Course Content</h2>
        {course.attributes.sections?.data?.length > 0 ? (
          course.attributes.sections.data.map((section) => (
            <SectionAccordion key={section.id} section={section} />
          ))
        ) : (
          <p className="text-gray-500">This course doesn't have any sections yet.</p>
        )}
      </div>
    </div>
  );
};

export default CourseView;