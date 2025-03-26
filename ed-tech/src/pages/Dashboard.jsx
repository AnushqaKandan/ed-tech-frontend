import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getCourses } from '../api/courses';
import CourseCard from '../components/courses/CourseCard';

const Dashboard = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await getCourses(user.id);
        setCourses(data.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchCourses();
    }
  }, [user]);

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">My Courses</h1>
        {user?.role === 'teacher' && (
          <Link
            to="/courses/create"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Create New Course
          </Link>
        )}
      </div>

      {courses.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium text-gray-600">
            {user?.role === 'teacher' 
              ? "You haven't created any courses yet" 
              : "You haven't enrolled in any courses yet"}
          </h2>
          {user?.role === 'teacher' && (
            <Link
              to="/courses/create"
              className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Create Your First Course
            </Link>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;