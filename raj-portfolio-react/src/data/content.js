export const profile = {
  name: 'Raj Narayan',
  role: 'QA Engineer | Automation Tester',
  stack: 'Mautic | Java | Selenium | SQL | API Testing',
  desc: 'I build, test and automate robust systems, drive quality and create insightful dashboards that deliver results.',
  email: 'rajnarayanen1071@gmail.com',
  phone: '+918826668722',
  phoneDisplay: '+91 8826668722',
  github: 'https://github.com/rajen1071/',
  linkedin: 'https://www.linkedin.com/in/raj-narayan-50a0bb135/',
  location: 'Noida, India',
}

export const stats = [
  { icon: 'fa-solid fa-user-tie', color: 'icon-purple', value: '4.2+', label: 'Years Experience' },
  { icon: 'fa-solid fa-diagram-project', color: 'icon-pink', value: '50+', label: 'Projects Completed' },
  { icon: 'fa-solid fa-gears', color: 'icon-blue', value: '30+', label: 'Automation Scripts' },
  { icon: 'fa-solid fa-chart-simple', color: 'icon-orange', value: '8+', label: 'Dashboards Built' },
]

export const timeline = [
  { icon: 'fa-solid fa-graduation-cap', tl: 'tl-1', year: '2018', label: 'Executive Customer Service' },
  { icon: 'fa-solid fa-users', tl: 'tl-2', year: '2019', label: 'Process Analyst' },
  { icon: 'fa-solid fa-headset', tl: 'tl-3', year: '2020', label: 'Process Expert' },
  { icon: 'fa-solid fa-bug', tl: 'tl-4', year: '2022', label: 'QA Engineer Role' },
  { icon: 'fa-solid fa-chart-line', tl: 'tl-5', year: '2023+', label: 'Automation & Dashboards' },
]

export const aboutTimeline = [
  { year: '2026 - Today', items: [
    'Promoted to Quality Assurance Analyst at ANR Software.',
    'Enjoy building reliable test automation and improving software quality.',
    'Continuously learning new technologies and solving real-world testing challenges.',
  ]},
  { year: '2024', items: [
    'Promoted to Quality Assurance Engineer at ANR Software.',
    'Worked extensively on Email Automation and Dashboard Development.',
  ]},
  { year: '2023', items: [
    'Promoted to Associate Quality Assurance Engineer at ANR Software.',
    'Continued expanding skills in Selenium Automation, Java, SQL and API Testing.',
  ]},
  { year: '2022', items: [
    'Got first opportunity in IT - joined ANR Software Pvt. Ltd. as a Quality Assurance Trainee.',
    'Completed the Selenium with Java course from Rahul Shetty Academy on Udemy.',
  ]},
  { year: '2021', items: [
    'Realized true passion was in software testing during the COVID period.',
    'Joined QSpiders, Noida, and completed Manual Software Testing training.',
    'Built a strong foundation in QA concepts and practices.',
  ]},
  { year: '2020', items: [
    'Affected by COVID-19 layoffs, along with many others in the industry.',
    'Rejoined the company once the situation improved, based on performance and dedication.',
    'Honored with the Best Employee of the Month award at Provana/iEnergizer.',
  ]},
  { year: '2019', items: [
    'Joined Provana India Pvt. Ltd. in the KPO industry.',
    'Developed strong communication and analytical skills in a professional environment.',
  ]},
  { year: '2018', items: [
    'After ~3 years of exam preparation, decided to move forward and become financially independent.',
    'Started professional journey with iEnergizer in the BPO industry (Paytm process).',
  ]},
  { year: '2015', items: [
    'Completed B.Tech in Electrical & Electronics Engineering from United College of Engineering & Research, Allahabad, with 65%.',
    'Moved to Delhi to prepare for government competitive exams.',
  ]},
  { year: 'Gopalganj, Bihar', items: [
    'Completed early education in Gopalganj, Bihar.',
    'Passed secondary education with First Division, scoring 66%.',
    'Passed higher secondary education with First Division, scoring 65%.',
  ]},
]

export const experience = [
  {
    id: 'anr', logo: 'assets/logos/anr.png', name: 'ANR Software',
    title: 'Quality Assurance Analyst', at: '@ ANR Software Pvt. Ltd.',
    meta: 'Apr 2026 – Present', location: 'Noida, Uttar Pradesh',
    points: [
      'Designed and executed 500+ test cases across Functional, Smoke, Sanity, Integration and Regression scenarios.',
      'Performed cross-browser testing on Chrome, Firefox and Edge; logged 100+ defects with a 95% closure rate using JIRA.',
      'Automated regression suites using Selenium WebDriver (Java), TestNG and POM, cutting manual effort by 30%.',
      'Performed API testing using Postman, validating REST APIs, request/response payloads and status codes.',
      'Tested Mautic marketing automation workflows and vTiger CRM modules end-to-end.',
      'Executed SQL queries for back-end data validation using MySQL/PostgreSQL.',
      'Collaborated in Agile/Scrum sprints and supported CI/CD pipeline validation for release readiness.',
    ],
    progression: [
      { role: 'Quality Assurance Engineer', period: 'Jun 2024 – Apr 2026' },
      { role: 'Associate Quality Assurance Engineer', period: 'Jun 2023 – Jun 2024' },
      { role: 'Quality Assurance Trainee', period: 'May 2022 – Jun 2023' },
    ],
  },
  {
    id: 'provana', logo: 'assets/logos/provana.png', name: 'Provana India',
    title: 'Process Expert', at: '@ Provana India',
    meta: 'Aug 2020 – May 2022', location: '',
    points: [
      'Handled escalations for a US-based client, ensuring high-quality service delivery.',
      'Mentored team members on process guidelines and maintained consistent SLA adherence for the client account.',
      'Recognized with the Best Employee of the Month award for performance and dedication.',
    ],
    progression: [{ role: 'Process Analyst', period: 'Sep 2019 – Apr 2020' }],
  },
  {
    id: 'ienergizer', logo: 'assets/logos/ienergizer.png', name: 'iEnergizer',
    title: 'Executive Customer Service Operations', at: '@ iEnergizer',
    meta: 'Mar 2018 – Dec 2018', location: 'Noida',
    points: [
      'Resolved customer tickets for the Paytm process via email as part of backend support.',
      'Ensured timely resolution of customer queries within defined SLAs, maintaining process quality standards.',
    ],
    progression: [],
  },
]

export const skills = [
  { icon: 'assets/skills/qa.png', border: 'border-purple', title: 'QA & Testing',
    items: ['Manual Testing', 'Functional Testing', 'Regression Testing', 'API Testing', 'Database Testing', 'Cross-Browser Testing'] },
  { icon: 'assets/skills/automation.png', border: 'border-blue', title: 'Automation',
    items: ['Java', 'Selenium WebDriver', 'TestNG', 'Page Object Model', 'BDD'] },
  { icon: 'assets/skills/database.png', border: 'border-green', title: 'Database',
    items: ['SQL', 'MySQL', 'PostgreSQL', 'Joins & Sub Queries', 'Stored Procedures'] },
  { icon: 'assets/skills/tools-technology.png', border: 'border-yellow', title: 'Tools & Technologies',
    items: ['JIRA', 'Postman', 'Git & CI/CD', 'HTML, CSS, Bootstrap', 'MS Office'] },
  { icon: 'assets/skills/marketing-automation.png', border: 'border-pink', title: 'Marketing Automation',
    items: ['Mautic', 'Campaign Automation', 'Segmentation & Tags', 'Email Deliverability'] },
  { icon: 'assets/skills/ai-tools.png', border: 'border-cyan', title: 'AI Tools',
    items: ['Claude', 'Gemini', 'OpenAI', 'NotebookLM', 'AI Studio'] },
]

export const projects = [
  { img: 'assets/projects/mautic.png', title: 'Mautic - Marketing Automation Platform', url: '', points: [
    'Performed end-to-end testing of marketing automation workflows including campaign triggers, email segmentation, and CRM data synchronization.',
    'Validated custom workflows, user roles, and security configurations; identified critical data sync issues before production release.',
  ]},
  { img: 'assets/projects/vTiger.png', title: 'vTiger - CRM Platform', url: '', points: [
    'Tested CRM modules including Leads, Contacts, Sales Pipeline, and RBAC, ensuring data accuracy and workflow efficiency.',
    'Executed regression testing across 20+ modules to ensure system stability and data integrity post-release.',
  ]},
  { img: 'assets/projects/appointments.png', title: 'Appointments - Online Booking Platform', url: 'appointments.altametrics.com', points: [
    'Performed functional and UI testing for scheduling, rescheduling, reminders, and time-zone validations across multiple user roles.',
  ]},
  { img: 'assets/projects/buying-intent.png', title: 'Buying Intent - Data Integration Application', url: '', points: [
    'Tested end-to-end data integration workflows including third-party intent data import, company filtering, Mautic synchronization, and lead push to vTiger CRM.',
  ]},
  { img: 'assets/projects/writer-portal.png', title: 'Writer Portal - Article Publishing Platform', url: 'wp.altametrics.com', points: [
    'Performed functional and content-workflow testing for article creation, editing, and publishing modules in WriterPortal, ensuring accurate rendering and seamless publishing.',
    'Validated user roles, permissions, and content approval workflows to ensure data integrity across the publishing pipeline.',
  ]},
  { img: 'assets/projects/sales-app.png', title: 'Sales App - Sales Management Application', url: '', points: [
    'Performed functional and regression testing of sales workflows including lead assignment, deal tracking, and pipeline updates.',
    'Validated data synchronization between the Sales App and CRM, ensuring accuracy of customer and sales records.',
  ]},
]

export const automationProjects = [
  { icon: 'fa-solid fa-bolt', color: 'logo-flipkart', title: 'Flipkart Automation', tags: 'Java, Selenium, TestNG',
    items: ['Search product', 'Add to cart', 'Place order flow', 'Screenshots & Logs'] },
  { icon: 'fa-brands fa-amazon', color: 'logo-amazon', title: 'Amazon Automation', tags: 'Java, Selenium, TestNG',
    items: ['Search product', 'Add to cart', 'Login & Logout', 'Order flow'] },
  { icon: 'fa-solid fa-leaf', color: 'logo-orange', title: 'HRM Automation', tags: 'Java, Selenium, TestNG',
    items: ['Login', 'Add Employee', 'PIM Module Test', 'Logout'] },
  { icon: 'fa-solid fa-vial', color: 'logo-sauce', title: 'SauceDemo Automation', tags: 'Java, Selenium, TestNG',
    items: ['Login', 'Add to cart', 'Checkout', 'Assertions'] },
  { icon: 'fa-solid fa-list-check', color: 'logo-form', title: 'Practice Form Automation', tags: 'Java, Selenium, TestNG',
    items: ['Fill Form', 'Dropdown Handling', 'Radio & Checkbox', 'Assertions'] },
]

export const dashboardImages = [
  { src: 'assets/dashboard/g1-dashboard.png', alt: 'All Mautic Dashboard Overview' },
  { src: 'assets/dashboard/g1-campaign.png', alt: 'Mautic Campaign Overview' },
  { src: 'assets/dashboard/g1-summary.png', alt: 'Mautic Summary Dashboard' },
  { src: 'assets/dashboard/g1-comparision.png', alt: 'Mautic Comparison Dashboard' },
  { src: 'assets/dashboard/g1-nurture.png', alt: 'Mautic Nurture Dashboard' },
  { src: 'assets/dashboard/ra-dashboard.png', alt: 'RA Email Dashboard Overview' },
  { src: 'assets/dashboard/ra-signup.png', alt: 'RA Sign Up Dashboard' },
  { src: 'assets/dashboard/ra-newsletter.png', alt: 'RA Newsletter Dashboard' },
  { src: 'assets/dashboard/ra-registration.png', alt: 'RA Registration Form Dashboard' },
  { src: 'assets/dashboard/ra-nurture.png', alt: 'RA Email Nurture Dashboard' },
]

export const dashboardLinks = [
  { icon: 'fa-solid fa-chart-line', label: 'All Mautic Email Dashboard', url: 'https://rajen1071.github.io/g1_all_mautic_api_dashboard/' },
  { icon: 'fa-solid fa-envelope-open-text', label: 'RA Email Dashboard', url: 'https://rajen1071.github.io/ra-email-dashboard/' },
]

export const codeCards = [
  { icon: 'assets/logos/java.png', title: 'Java Programs', desc: 'Core Java, OOPs, Collections, Exception Handling, File Handling, Multithreading and more.', link: 'link-green', cta: 'View Code' },
  { icon: 'assets/logos/sql.png', title: 'SQL Queries', desc: 'Complex Queries, Joins, Sub Queries, Window Functions, Stored Procedures and more.', link: 'link-blue', cta: 'View Queries' },
  { icon: 'assets/logos/selenium.png', title: 'Automation Scripts', desc: 'Selenium Web Automation scripts with TestNG framework and POM design pattern.', link: 'link-purple', cta: 'View Scripts' },
]

export const certifications = [
  { img: 'assets/certificates/udemy.png', title: 'Selenium WebDriver with Java', sub: 'Udemy - Rahul Shetty Academy' },
  { img: 'assets/certificates/qspider.png', title: 'Manual Testing Certification', sub: 'QSpiders Institute, Noida' },
  { img: 'assets/certificates/ienergizer.png', title: 'Employee of the Month', sub: 'Recognized for QA contributions & defect detection' },
  { img: 'assets/certificates/provana-april.png', title: 'Team Excellence Award', sub: 'Acknowledged for collaboration & testing standards' },
  { img: 'assets/certificates/provana-october.png', title: 'Team Excellence Award', sub: 'Acknowledged for collaboration & testing standards' },
]

export const terminalScript = [
  { text: '// Flipkart Login Automation - Selenium', type: 'comment' },
  { text: 'WebDriver driver = new ChromeDriver();', type: 'code' },
  { text: 'driver.manage().window().maximize();', type: 'code' },
  { text: 'driver.get("https://flipkart.com/login");', type: 'code' },
  { text: 'driver.findElement(By.id("mobile")).sendKeys("9876543210");', type: 'code' },
  { text: 'driver.findElement(By.id("pass")).sendKeys("******");', type: 'code' },
  { text: "driver.findElement(By.cssSelector('.login-btn')).click();", type: 'code' },
  { text: 'Assert.assertTrue(dashboardPage.isDisplayed());', type: 'code' },
  { text: '', type: 'blank' },
  { text: 'Running test suite...', type: 'cmd' },
  { text: '[PASS] Login page loaded', type: 'pass' },
  { text: '[PASS] Credentials submitted', type: 'pass' },
  { text: '[FAIL] OTP timeout edge case', type: 'fail' },
  { text: '[PASS] Dashboard redirect verified', type: 'pass' },
]

export const tickerTags = [
  'Test Planning', 'Functional Testing', 'API Testing',
  'SQL & Database Testing', 'Automation Testing', 'Agile QA',
]

// The full technology/testing-topic set for the interactive orbit in the
// Skills section. Starts from the existing tickerTags (nothing removed),
// plus every topic explicitly requested for the redesign, with exact-string
// duplicates left out (e.g. "Functional Testing" already appears above).
export const orbitTech = [
  ...tickerTags,
  'Smoke Testing',
  'Sanity Testing',
  'Regression Testing',
  'Retesting',
  'Integration Testing',
  'Test Case Creation',
  'Test Case Execution',
  'Test Plan',
  'Test Scenario',
  'Agile Methodology',
  'Selenium',
  'WebDriver',
  'Java',
  'Maven',
  'TestNG',
  'POM',
  'CI/CD',
  'BDD',
  'Cucumber',
  'Postman',
  'SQL',
]
