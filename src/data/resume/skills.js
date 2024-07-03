const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Amazon Web Services (AWS)',
    competency: 1,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases', 'Data Science'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages', 'Data Science'],
  },
  {
    title: 'Data Mining',
    competency: 2,
    category: ['ML Engineering'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools', 'Data Science'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 1,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Docker',
    competency: 1,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['ML Engineering', 'Python', 'Data Science'],
  },
  {
    title: 'PyTorch',
    competency: 3,
    category: ['ML Engineering', 'Python', 'Data Science'],
  },
  {
    title: 'Jupyter',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering', 'Data Science'],
  },
  {
    title: 'Julia/JuMP',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages', 'Data Science'],
  },
  {
    title: 'Data Visualization',
    competency: 4,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python', 'Data Science'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python', 'Data Science'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering', 'Python', 'Data Science'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
