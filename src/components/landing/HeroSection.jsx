import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-indigo-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Learn, Teach, and Grow with EduPlatform
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          The ultimate platform for creating and taking online courses. 
          Whether you're a student or instructor, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/register?role=student"
            className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Learning
          </Link>
          <Link
            to="/register?role=teacher"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-800 transition-colors border border-white"
          >
            Teach with Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;