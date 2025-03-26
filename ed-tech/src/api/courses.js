import axios from 'axios';

const API_URL = 'http://localhost:1337/api';

export const getCourses = (userId) => {
  return axios.get(`${API_URL}/courses`, {
    params: {
      'filters[createdBy][id][$eq]': userId,
      populate: {
        image: true,
        sections: {
          populate: ['materials']
        }
      },
    },
  });
};

export const createCourse = (courseData) => {
  return axios.post(`${API_URL}/courses`, {
    data: courseData,
  });
};

export const getCourseById = (id) => {
  return axios.get(`${API_URL}/courses/${id}`, {
    params: {
      populate: {
        image: true,
        sections: {
          populate: ['materials']
        },
        createdBy: true,
      },
    },
  });
};

export const createSection = (courseId, sectionData) => {
  return axios.post(`${API_URL}/sections`, {
    data: {
      ...sectionData,
      course: courseId
    }
  });
};

export const createMaterial = (sectionId, materialData) => {
  return axios.post(`${API_URL}/materials`, {
    data: {
      ...materialData,
      section: sectionId
    }
  });
};