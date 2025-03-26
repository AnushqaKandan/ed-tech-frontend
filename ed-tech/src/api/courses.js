import axios from 'axios';

const API_URL = 'https://edtech-backend02.onrender.com/api';

export const getCourses = (userId) => {
  return axios.get(`${API_URL}/courses`, {
    params: {
      'filters[createdBy][id][$eq]': userId,
      populate: ['image', 'sections', 'sections.materials']
    },
  });
};

export const createCourse = (courseData) => {
  return axios.post(`${API_URL}/courses`, courseData);
};

export const getCourseById = (id) => {
  return axios.get(`${API_URL}/courses/${id}`, {
    params: {
      populate: ['image', 'sections', 'sections.materials', 'createdBy']
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