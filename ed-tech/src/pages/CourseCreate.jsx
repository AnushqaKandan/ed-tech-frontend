import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { createCourse } from "../api/courses";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const courseSchema = Yup.object().shape({
  name: Yup.string().required("Course name is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .min(0, "Price must be positive")
    .required("Price is required"),
});

const CourseCreate = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      if (image) {
        formData.append("files.image", image);
      }

      const courseData = {
        name: values.name,
        description: values.description,
        price: values.price,
        createdBy: user.id,
      };

      formData.append("data", JSON.stringify(courseData));

      await createCourse(formData);
      navigate("/dashboard");
    } catch (err) {
      setError("Failed to create course. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Create New Course
      </h1>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      <Formik
        initialValues={{
          name: "",
          description: "",
          price: 0,
        }}
        validationSchema={courseSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-2xl space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Course Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <Field
                as="textarea"
                name="description"
                id="description"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price ($)
              </label>
              <Field
                type="number"
                name="price"
                id="price"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="price"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Course Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {isSubmitting ? "Creating..." : "Create Course"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CourseCreate;
