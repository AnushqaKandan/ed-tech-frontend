// src/components/landing/FeaturesSection.jsx
import { AcademicCapIcon, VideoCameraIcon, BookOpenIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Comprehensive Courses',
    description: 'Access to high-quality courses on various subjects from expert instructors.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Interactive Content',
    description: 'Engaging video lessons, quizzes, and hands-on projects to enhance learning.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Flexible Learning',
    description: 'Learn at your own pace, anytime, anywhere with our mobile-friendly platform.',
    icon: BookOpenIcon,
  },
  {
    name: 'Progress Tracking',
    description: 'Monitor your learning journey with detailed progress reports and analytics.',
    icon: ChartBarIcon,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose EduPlatform?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">{feature.name}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;