/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'MIT Sloan / Takeda',
    position: 'Data Scientist Intern for MIT Capstone Project',
    url: 'https://www.takeda.com/',
    startDate: '2024-02-23',
    summary: 'Conducting competitor intelligence on clinical trial procedures to reduce patient burden (Python)',
    highlights: [
      'Parse unstructured pdf data to extract insights that remove redundant patient procedures during clinical trials',
      'Provide actionable recommendations to study teams',
    ],
  },
  {
    name: 'MIT Operations Research Center',
    position: 'Research Assistant to Professor Dimitris Bertsimas',
    url: 'https://orc.mit.edu/',
    startDate: '2017-01-05',
    endDate: '2022-05-15',
    summary: 'Created web-app with interactive map features to reflect the US organ transplantation system (JavaScript, Vue)',
    highlights: [
      'Identified time-consuming bottlenecks in decision process that lead to organ disposal, informing policy development',
    ],
  },
  {
    name: 'Satalia',
    position: 'Data Scientist',
    url: 'https://www.satalia.com/',
    startDate: '2022-09-01',
    endDate: '2023-06-01',
    summary: 'Satalia is a tech company that leverages machine learning and optimization to solve exponentially hard efficiency problems.',
    highlights: [
      'Developed live-stream video and viewership scraper for YouTube and Twitch content (Python, Selenium, Streamlink)',
      'Built brand detector for video product placement with 83% accuracy for 200 hours of content and proposed optimal brand placement using attention scoring (Python, ImageHash, YOLOv7, Google Vision)',
      'Enhanced annotation engine using open-source multi-modal vision and language models to raise ad click rates via counterfactuals (Python, Google Vision, Hugging Face)',
      'Implemented API capturing user psychometric features for dynamic exercise difficulty in learning platform (Python)',
    ],
  },
  {
    name: 'Ernst & Young',
    position: 'Business Analyst (return offer from Consulting Intern Summer 2020)',
    url: 'https://www.ey.com/en_gr',
    startDate: '2020-11-01',
    endDate: '2022-09-01',
    summary: 'Consulting at EY is building a better working world by realizing business transformation through the power of people, technology and innovation.',
    highlights: [
      'Created client opportunity-to-revenue forecasting tool, surpassing by 26% accuracy of partners’ estimates (Python)',
      'Led 4 initiatives, for technological enhancements, to successful and punctual completion with multiple clients',
      'Earned EY Badges (training / project) for Data Science, Data Visualization, Climate Change & Sustainability',
    ],
  },
  {
    name: 'Ernst & Young',
    position: 'Business Analyst (return offer from Consulting Intern Summer 2020)',
    url: 'https://www.ey.com/en_gr',
    startDate: '2020-06-01',
    endDate: '2020-09-01',
    summary: 'Consulting at EY is building a better working world by realizing business transformation through the power of people, technology and innovation.',
    highlights: [
      'Expedited by 500% manual financial reporting procedures within digital transformation project',
    ],
  },
  {
    name: 'Athens University of Economics and Business',
    position: 'Researcher to Prof. Chatziantoniou Damianos, Dept. Management Science and Technology',
    url: 'https://www.aueb.gr/en',
    startDate: '2021-02-01',
    endDate: '2022-11-01',
    summary: 'Engineered prototype for ad-hoc, code-free visualized data querying (Java, SQL, Python)',
    highlights: [
      'Co-authored academic paper “Data Virtual Machines: Simplifying Data Sharing, Exploration & Querying in Big Data Environments”; 2022 IEEE International Conference on Big Data; Osaka, Japan',
    ],
  },
];

export default work;
