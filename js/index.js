$(document).ready(function () {
  // Setup - add a text input to each footer cell
  $('#example thead tr').clone(true).addClass('filters').appendTo('#example thead');

  refreshTable();
});

const coefficients = [
  {
    name: 'source',
    type: 'source',
    value: 0.5,
  },
  {
    name: 'platform',
    type: 'platform',
    value: 0.5,
  },
  {
    name: 'API',
    type: 'boolean',
    value: 1,
  },
  {
    name: 'embeddable',
    type: 'boolean',
    value: 0.5,
  },
  {
    name: 'canEmbedOthers',
    type: 'boolean',
    value: 0.5,
  },
  {
    name: 'hasIntegrations',
    type: 'boolean',
    value: 1,
  },
  // {
  //   name: 'costPerUser',
  //   type: 'number',
  //   value: 0.1,
  // },
  // {
  //   name: 'totalUsers',
  //   type: 'number',
  //   value: 1,
  // },
  {
    name: 'usedBy',
    type: 'length',
    value: 2,
  },
];

const data = [
  {
    name: 'Adobe Creative Cloud',
    score: 0,
    description: 'Applications and services that gives subscribers access to a collection of software used for graphic design, video editing, web development, photography',
    category: 'Creativity Creation',
    company: 'Adobe',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: false,
    canEmbedOthers: false,
    hasIntegrations: false,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['SCs', 'SAs', 'BCs'],
    usedBy: ['GSS'],
    similar: '',
    comments: '',
  },
  {
    name: 'Aha',
    score: 0,
    description: 'Allows users to build and share visual roadmaps. It links key strategic goals and initiatives to releases and features',
    category: 'Methodology/Process',
    company: 'Aha',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: 2092,
    payingUsers: 128,
    totalUsers: 500,
    country: 'USA',
    //usedBy: ['SCs', 'SAs', 'BCs'],
    usedBy: ['CCC (EMEA)', 'CCC (LATAM)', 'CCC (NA)', 'GSS', 'SCs (EMEA)', 'SCs (NA)'],
    similar: '',
    comments: '',
  },
  {
    name: 'Alinean',
    score: 0,
    category: 'Methodology/Process',
    description: 'Business value marketing and selling messaging and tools',
    company: 'Alinean',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: false,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['SCs'],
    usedBy: [''],
    similar: '',
    comments: '',
  },
  {
    name: 'Aviso',
    score: 0,
    category: 'Methodology/Process',
    description: 'Predictive AI platform for forecasting, risk mitigation and revenue acceleration',
    company: 'Aviso',
    source: 'External',
    platform: 'cloud',
    API: false,
    embeddable: false,
    canEmbedOthers: false,
    hasIntegrations: false,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    usedBy: ['Jacklyn Spilanne'],
    similar: '',
    comments: '',
  },
  {
    name: 'Bitbucket',
    score: 0,
    category: 'Internal Projects',
    description: 'Code repositories',
    company: 'Atlassian',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: true,
    hasIntegrations: true,
    costPerUser: 0,
    payingUsers: '',
    totalUsers: '',
    country: 'Australia',
    //usedBy: ['SCs'],
    usedBy: ['CCC (EMEA)', 'GSS', 'GTS'],
    similar: '',
    comments: '',
  },
  {
    name: 'BriefingSource',
    score: 0,
    category: 'Events',
    description: 'Event management',
    company: 'EchoVision',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: false,
    canEmbedOthers: false,
    hasIntegrations: false,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    usedBy: ['Leslie Paterson'],
    similar: '',
    comments: '',
  },
  {
    name: 'Camtasia',
    score: 0,
    category: 'Creativity Creation',
    description: 'Create video tutorials and presentations',
    company: 'Techsmith',
    source: 'External',
    platform: 'desktop',
    API: false,
    embeddable: false,
    canEmbedOthers: false,
    hasIntegrations: false,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['SCs', 'BCs'],
    usedBy: ['GSS', 'GTS', 'CCC (LATAM)', 'SCs (EMEA)', 'SCs (LATAM)', 'SCs (NA)'],
    similar: 'Adobe Creative Cloud',
    comments: '',
  },
  {
    name: 'CC Portal',
    score: 0,
    category: 'Methodology/Process, Demo, POCs, Trials, Ticketing',
    description: 'Set of tools used to deploy use cases, assist with migrations, handle Competency Centers requests',
    company: 'Genesys',
    source: 'Internal',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: true,
    hasIntegrations: true,
    costPerUser: 0,
    payingUsers: '',
    totalUsers: 1300,
    country: 'France/Poland/UK',
    //usedBy: ['SCs', 'AEs', 'BCs', 'CSMs'],
    usedBy: ['CCC (EMEA)', 'CCC (LATAM)', 'CCC (NA)', 'GSS', 'SCs (EMEA)', 'SCs (LATAM)', 'SCs (NA)'],
    similar: 'GDemo',
    comments: '',
  },
  {
    name: 'Confluence',
    score: 0,
    category: 'Creativity Creation',
    description: 'Project Collaboration',
    company: 'Atlassian',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: true,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'Australia',
    //usedBy: ['SCs', 'AEs', 'BCs', 'CSMs'],
    usedBy: ['CCC (EMEA)', 'CCC (LATAM)', 'CCC (NA)', 'GTS', 'SCs (EMEA)', 'SCs (NA)'],
    similar: '',
    comments: '',
  },
  {
    name: 'Docebo (GenED)',
    score: 0,
    category: 'Enablement',
    description: 'Learning suite',
    company: 'Docebo',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: true,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'Canada',
    usedBy: ['CCC (EMEA)', 'CCC (LATAM)', 'CCC (NA)', 'GSS', 'GTS', 'SCs (NA)', 'SCs (EMEA)'],
    similar: '',
    comments: '',
  },

  {
    name: 'DocuSign',
    score: 0,
    category: 'Methodology/Process',
    description: 'For contract execution with customers',
    company: 'DocuSign',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: false,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['SCs', 'AEs'],
    usedBy: ['SCs (EMEA)', 'SCs (LATAM)', 'SCs (NA)'],
    similar: '',
    comments: '',
  },
  {
    name: 'Formstack Documents (ex-Webmerge)',
    score: 0,
    category: 'Methodology/Process',
    description: 'Customizable document templates',
    company: 'FormStack',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: true,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    usedBy: [''],
    similar: '',
    comments: '',
  },
  {
    name: 'GDemo',
    score: 0,
    category: 'Demo',
    description: 'Access to ready-to-go demos',
    company: 'Genesys',
    source: 'Internal',
    platform: 'cloud',
    API: false,
    embeddable: false,
    canEmbedOthers: true,
    hasIntegrations: true,
    costPerUser: 0,
    payingUsers: '',
    totalUsers: 4577,
    country: 'USA',
    //usedBy: ['SCs', 'AEs'],
    usedBy: ['CCC (EMEA)', 'CCC (LATAM)', 'CCC (NA)', 'GSS', 'GTS', 'SCs (EMEA)', 'SCs (LATAM)', 'SCs (NA)'],
    similar: 'CC Portal (Use Case Automation)',
    comments: '',
  },
  {
    name: 'Genesys Cloud',
    score: 0,
    category: 'Collaboration & Communication',
    description: 'Communication platform',
    company: 'Genesys',
    source: 'Internal',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: true,
    hasIntegrations: true,
    costPerUser: 0,
    payingUsers: 0,
    totalUsers: 5000,
    country: 'USA',
    //usedBy: ['SCs', 'AEs', 'SAs', 'BAs', 'CSMs'],
    usedBy: ['CCC (EMEA)', 'CCC (LATAM)', 'CCC (NA)', 'GSS', 'GTS', 'SCs (EMEA)', 'SCs (LATAM)', 'SCs (NA)'],
    similar: 'Teams, Slack, Zoom',
    comments: '',
  },
  {
    name: 'GitHub',
    score: 0,
    category: 'Internal Projects',
    description: 'Code repositories',
    company: 'Microsoft',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: true,
    hasIntegrations: true,
    costPerUser: 0,
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['SCs'],
    usedBy: ['CCC (EMEA)', 'CCC (NA)', 'GTS', 'SCs (LATAM)', 'SCs (NA)'],
    similar: '',
    comments: '',
  },
  {
    name: 'Gong',
    score: 0,
    category: 'Methodology/Process',
    description: 'Sales AI and machine learning tool. Synching Zoom conversations back into Salesforce',
    company: 'Gong.io',
    source: 'External',
    platform: 'cloud',
    API: false,
    embeddable: false,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA/Israel',
    usedBy: ['AEs (NA)', 'SCs (NA)'],
    similar: '',
    comments: '',
  },
  {
    name: 'Google Sheets',
    score: 0,
    category: 'Creativity Creation',
    description: 'Spreadsheets',
    company: 'Google',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: true,
    hasIntegrations: true,
    costPerUser: 0,
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['SCs', 'AEs'],
    usedBy: [''],
    similar: 'Office 365, SmartSheet',
    comments: '',
  },
  {
    name: 'Jenkins',
    score: 0,
    category: 'Internal Projects',
    description: 'CI/CD suite',
    company: 'Jenkins',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    usedBy: ['GTS'],
    similar: '',
    comments: '',
  },
  {
    name: 'JIRA',
    score: 0,
    category: 'Methodology/Process',
    description: 'Issue tracking, bug tracking and agile project management',
    company: 'Atlassian',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: true,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'Australia',
    //usedBy: ['SCs', 'AEs', 'BCs', 'CSMs'],
    usedBy: ['CCC (EMEA)', 'CCC (LATAM)', 'CCC (NA)', 'GTS', 'SCs (EMEA)', 'SCs (LATAM)', 'SCs (NA)'],
    similar: '',
    comments: '',
  },
  {
    name: 'Knime',
    score: 0,
    category: 'Methodology/Process',
    description: 'Analytics ML',
    company: 'Knime',
    source: 'External',
    platform: 'desktop',
    API: true,
    embeddable: false,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'Switzerland',
    usedBy: [''],
    similar: '',
    comments: '',
  },
  {
    name: 'LinkedIn Sales Navigator',
    score: 0,
    category: 'Methodology/Process',
    description: 'Social selling platform that provides features that focus on helping find prospects and build relationships',
    company: 'LinkedIn',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: false,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['BCs', 'CSMs'],
    usedBy: [''],
    similar: '',
    comments: '',
  },
  {
    name: 'LucidChart',
    score: 0,
    category: 'Creativity Creation',
    description: 'Web-based proprietary platform that allows users to collaborate on drawing, revising and sharing charts and diagrams',
    company: 'Lucid Software',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['SCs', 'AEs', 'BCs', 'CSMs'],
    usedBy: ['CCC (EMEA)', 'CCC (LATAM)', 'CCC (NA)', 'GTS', 'SCs (EMEA)', 'SCs (LATAM)', 'SCs (NA)'],
    similar: '',
    comments: '',
  },
  {
    name: 'Nintex',
    score: 0,
    category: 'Methodology/Process',
    description: 'Business process Automation, workflow software licensing',
    company: 'Nintex',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: false,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['AEs'],
    usedBy: [''],
    similar: '',
    comments: '',
  },
  {
    name: 'Office 365',
    score: 0,
    category: 'Collaboration & Communication, Creativity Creation',
    description: 'Microsoft Office 365',
    company: 'Microsoft',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: true,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: 5000,
    country: 'USA',
    //usedBy: ['SCs', 'AEs', 'BCs', 'CSMs'],
    usedBy: ['CCC (EMEA)', 'CCC (LATAM)', 'CCC (NA)', 'GSS', 'GTS', 'SCs (EMEA)', 'SCs (LATAM)', 'SCs (NA)'],
    similar: 'Google Sheets, SmartSheet',
    comments: '',
  },
  {
    name: 'OneDrive',
    score: 0,
    category: 'Creativity Creation',
    description: 'File sharing and collaboration',
    company: 'Microsoft',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: false,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['SCs', 'AEs', 'BCs', 'CSMs'],
    usedBy: ['CCC (EMEA)', 'CCC (LATAM)', 'CCC (NA)', 'GTS', 'SCs (EMEA)', 'SCs (LATAM)', 'SCs (NA)'],
    similar: '',
    comments: '',
  },
  {
    name: 'Prezi',
    score: 0,
    category: 'Creativity Creation',
    description: 'Presentation',
    company: 'Prezi',
    source: 'External',
    platform: 'cloud',
    API: false,
    embeddable: true,
    canEmbedOthers: false,
    hasIntegrations: false,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['SCs'],
    usedBy: [''],
    similar: '',
    comments: '',
  },
  {
    name: 'QVidian',
    score: 0,
    category: 'Methodology/Process',
    description: 'Proposal Management/Creator',
    company: 'Upland Software',
    source: 'External',
    platform: 'cloud',
    API: false,
    embeddable: true,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['SCs', 'AEs'],
    usedBy: ['SCs (NA)'],
    similar: 'RFP.io',
    comments: '',
  },
  {
    name: 'ReferenceEdge',
    score: 0,
    category: 'Methodology/Process',
    description: 'Used by Advisors and Partner Success Managers to confirm contacts for reference activity',
    company: 'Point of Reference',
    source: 'External',
    platform: 'cloud',
    API: false,
    embeddable: true,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['Advisors', 'CSMs'],
    usedBy: [''],
    similar: '',
    comments: '',
  },
  {
    name: 'Revegy',
    score: 0,
    category: 'Methodology/Process',
    description: 'Sales execution platform with built-in visualizations for account planning, providing sales teams with deal-winning insights',
    company: 'Revegy',
    source: 'External',
    platform: 'cloud',
    API: false,
    embeddable: true,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['SCs', 'AEs'],
    usedBy: ['SCs (EMEA)', 'SCs (NA)'],
    similar: '',
    comments: '',
  },
  {
    name: 'RFP.io',
    score: 0,
    category: 'Methodology/Process',
    description: 'Automates and streamlines the process of responding to a request for proposal (RFP)',
    company: 'RFPIO',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['SCs', 'AEs'],
    usedBy: ['CCC (EMEA)', 'CCC (LATAM)', 'CCC (NA)', 'SCs (EMEA)', 'SCs (LATAM)'],
    similar: 'QVidian',
    comments: '',
  },
  {
    name: 'Salesforce',
    score: 0,
    category: 'Methodology/Process',
    description: 'CRM',
    company: 'Salesforce',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: true,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: 5000,
    country: 'USA',
    //usedBy: ['SCs', 'AEs', 'BCs', 'CSMs'],
    usedBy: ['CCC (EMEA)', 'CCC (LATAM)', 'CCC (NA)', 'GSS', 'GTS', 'SCs (EMEA)', 'SCs (LATAM)', 'SCs (NA)'],
    similar: '',
    comments: '',
  },
  {
    name: 'Salesforce for CPQ',
    score: 0,
    category: 'Methodology/Process',
    description: 'Customized application built over Salesforce to handle CPQ functionality',
    company: 'Genesys',
    source: 'External',
    platform: 'cloud',
    API: false,
    embeddable: true,
    canEmbedOthers: true,
    hasIntegrations: false,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['SCs', 'AEs', 'BCs', 'CSMs'],
    usedBy: ['SCs (NA)'],
    similar: '',
    comments: '',
  },
  {
    name: 'Seismic',
    score: 0,
    category: 'Creativity Creation',
    description: 'Project Management & Enablement, Content Management tools',
    company: 'Seismic',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: false,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['SCs', 'AEs', 'BCs', 'CSMs'],
    usedBy: ['CCC (EMEA)', 'CCC (LATAM)', 'CCC (NA)', 'GSS', 'GTS', 'SCs (EMEA)', 'SCs (LATAM)', 'SCs (NA)'],
    similar: '',
    comments: '',
  },
  {
    name: 'Skype',
    score: 0,
    category: 'Collaboration & Communication',
    description: 'Telecommunications application that specializes in providing VoIP-based videotelephony, videoconferencing and voice calls',
    company: 'Microsoft',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['SCs'],
    usedBy: ['SCs (LATAM)'],
    similar: 'Genesys Cloud Chat',
    comments: '',
  },
  {
    name: 'Slack',
    score: 0,
    category: 'Collaboration & Communication',
    description: 'Collaboration and communication platform',
    company: 'Microsoft',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: true,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['SCs'],
    usedBy: [''],
    similar: 'Genesys Cloud Chat',
    comments: '',
  },
  {
    name: 'SmartSheet',
    score: 0,
    category: 'Creativity Creation',
    description: 'Collaboration and work management',
    company: 'SmartSheet',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['SCs', 'AEs', 'BCs', 'CSMs'],
    usedBy: ['GSS', 'SCs (EMEA)', 'SCs (NA)'],
    similar: 'Google Sheets, Office 365',
    comments: '',
  },
  {
    name: 'Tableau',
    score: 0,
    category: 'Analytics',
    description: 'Data analysis and reporting',
    company: 'Tableau',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['SCs', 'AEs', 'BCs', 'CSMs'],
    usedBy: ['CCC (EMEA)', 'CCC (NA)', 'SCs (EMEA)', 'SCs (LATAM)', 'SCs (NA)'],
    similar: '',
    comments: '',
  },
  {
    name: 'Taiga',
    score: 0,
    category: 'Internal Projects',
    description: 'Open Source Project Management, Scrum, Kanban, Agile',
    company: 'Taiga',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: 0,
    payingUsers: 0,
    totalUsers: 5,
    country: 'Spain',
    //usedBy: ['SCs', 'AEs'],
    usedBy: ['CCC (EMEA)'],
    similar: 'Trello, Office 365 Planner',
    comments: '',
  },
  {
    name: 'Teams',
    score: 0,
    category: 'Collaboration & Communication',
    description: 'Business communication platform ',
    company: 'Microsoft',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: true,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['SAs', 'Tech Sales'],
    usedBy: ['GTS', 'SCs (EMEA)', 'CCC (LATAM)', 'SCs (NA)'],
    similar: 'Genesys Cloud, Slack',
    comments: '',
  },
  {
    name: 'Traction On Demand',
    score: 0,
    category: 'Methodology/Process',
    description: 'Automates complex account hierarchies for up-sell opportunities',
    company: 'Traction On Demand',
    source: 'External',
    platform: 'cloud',
    API: false,
    embeddable: true,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'Canada',
    //usedBy: ['AEs'],
    usedBy: [''],
    similar: '',
    comments: '',
  },
  {
    name: 'Trello',
    score: 0,
    category: 'Internal Projects',
    description: 'Project Management',
    company: 'Atlassian',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: 0,
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['SAs', 'Tech Sales'],
    usedBy: [''],
    similar: 'Taiga, Office 365 Planner',
    comments: '',
  },
  {
    name: 'TruVoice',
    score: 0,
    category: 'Methodology/Process',
    description: 'Win/Loss insights and analysis',
    company: 'Primary Intelligence',
    source: 'External',
    platform: 'cloud',
    API: false,
    embeddable: false,
    canEmbedOthers: false,
    hasIntegrations: false,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['AEs'],
    usedBy: [''],
    similar: '',
    comments: '',
  },
  {
    name: 'VMWare',
    score: 0,
    category: 'Demo',
    description: 'Cloud computing and virtualization',
    company: 'VMWare',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: false,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['AEs'],
    usedBy: ['SCs (EMEA)', 'CCC (LATAM)'],
    similar: '',
    comments: '',
  },
  {
    name: 'WalkMe',
    score: 0,
    category: 'Methodology/Process',
    description: 'Step by step guide. Used by Sales ops to assist them. Workflow tool that sits on top of Salesforce',
    company: 'WalkMe',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: '',
    country: 'Israel',
    //usedBy: ['Sales Ops'],
    usedBy: [''],
    similar: '',
    comments: '',
  },
  {
    name: 'WhatsApp',
    score: 0,
    category: 'Collaboration & Communication',
    description: 'Cross-platform centralized instant messaging (IM) and voice-over-IP (VoIP) service ',
    company: 'Facebook',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: false,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: 0,
    payingUsers: '',
    totalUsers: '',
    country: 'USA',
    //usedBy: ['Sales Ops'],
    usedBy: ['CCC (LATAM)', 'SCs (EMEA)', 'SCs (LATAM)'],
    similar: 'Genesys Cloud, Slack, Teams',
    comments: '',
  },
  {
    name: 'Zoom',
    score: 0,
    category: 'Collaboration & Communication',
    description: 'Video conferencing',
    company: 'Zoom',
    source: 'External',
    platform: 'cloud',
    API: true,
    embeddable: true,
    canEmbedOthers: false,
    hasIntegrations: true,
    costPerUser: '',
    payingUsers: '',
    totalUsers: 5000,
    country: 'USA',
    //usedBy: ['SCs', 'AEs', 'SAs', 'BCs', 'CSMs'],
    usedBy: ['CCC (EMEA)', 'CCC (LATAM)', 'CCC (NA)', 'GSS', 'GTS', 'SCs (EMEA)', 'SCs (LATAM)', 'SCs (NA)'],
    similar: 'Genesys Cloud, Teams',
    comments: '',
  },
];

// Calculate scores
for (let index = 0; index < data.length; index++) {
  const currentItem = data[index];
  for (let index = 0; index < coefficients.length; index++) {
    const coefficient = coefficients[index];
    switch (coefficient.type) {
      case 'boolean':
        if (currentItem[coefficient.name]) {
          console.log(`boolean: Add ${coefficient.value} to coefficient: ${currentItem.score}`);
          currentItem.score += coefficient.value;
        }
        break;
      case 'length':
        if (currentItem[coefficient.name] !== ['']) {
          console.log(`length: Add ${currentItem[coefficient.name].length * coefficient.value} to score: ${currentItem.score}`);
          currentItem.score += currentItem[coefficient.name].length * coefficient.value;
        }
        break;
      case 'number':
        if (currentItem[coefficient.name] !== '') {
          console.log(`number: Add ${currentItem[coefficient.name] * coefficient.value} to score: ${currentItem.score}`);
          currentItem.score += currentItem[coefficient.name] * coefficient.value;
        }
        break;
      case 'platform':
        if (currentItem[coefficient.name] === 'cloud') {
          console.log(`platform: Add ${coefficient.value} to score: ${currentItem.score}`);
          currentItem.score += coefficient.value;
        }
        break;
      case 'source':
        if (currentItem[coefficient.name] === 'Internal') {
          console.log(`source: Add ${coefficient.value} to score: ${currentItem.score}`);
          currentItem.score += coefficient.value;
        }
        break;
      default:
        console.error(`unknown: Add ${coefficient.value} to score: ${currentItem.score}`);
        currentItem.score += currentItem[coefficient.name] * coefficient.value;
        break;
    }
  }
}

const refreshTable = () => {
  $('#example').DataTable({
    dom: 'Bfrltip',
    buttons: [
      {
        extend: 'excel',
        text: 'Export to Excel',
      },
      'colvis',
    ],
    stateSave: true,
    orderCellsTop: true,
    pageLength: 50,
    createdRow: function (row, data, dataIndex) {
      console.log('row:', row);
      console.log('data:', data);
      if (data.similar?.length > 0) {
        $(row).css('background-color', 'rgba(255, 80, 31, 0.3)');
      }
    },
    lengthMenu: [
      [10, 25, 50, -1],
      ['10 rows', '25 rows', '50 rows', 'Show all'],
    ],
    columns: [
      {
        data: 'name',
        render: function (data, type) {
          if (type === 'display') {
            return '<b>' + data + '</b>';
          }
          return data;
        },
      },
      { data: 'score' },
      { data: 'category' },
      { data: 'description' },
      { data: 'company' },
      {
        data: 'source',
      },
      {
        data: 'platform',
        render: function (data, type) {
          if (type === 'display') {
            return data === 'Cloud' ? '<span style="color:#2FAFDF; font-size:25px">☁</span>' : '<span style="font-size:17px">🖥️</span>';
          }
          return data;
        },
      },
      {
        data: 'API',
        render: function (data, type) {
          if (type === 'display') {
            return data ? '<span style="color:#27AE60; font-size:20px">✔</span>' : '<span style="font-size:15px">❌</span>';
          }
          return data;
        },
      },
      {
        data: 'embeddable',
        render: function (data, type) {
          if (type === 'display') {
            return data ? '<span style="color:#27AE60; font-size:20px">✔</span>' : '<span style="font-size:15px">❌</span>';
          }
          return data;
        },
      },
      {
        data: 'canEmbedOthers',
        render: function (data, type) {
          if (type === 'display') {
            return data ? '<span style="color:#27AE60; font-size:20px">✔</span>' : '<span style="font-size:15px">❌</span>';
          }
          return data;
        },
      },
      {
        data: 'hasIntegrations',
        render: function (data, type) {
          if (type === 'display') {
            return data ? '<span style="color:#27AE60; font-size:20px">✔</span>' : '<span style="font-size:15px">❌</span>';
          }
          return data;
        },
      },
      { data: 'costPerUser' },
      { data: 'payingUsers' },
      { data: 'totalUsers' },
      { data: 'country' },
      {
        data: 'usedBy',
      },
      {
        data: 'similar',
        //if (d.similar.length > 0) tr.css('background-color', 'rgba(255, 80, 31, 0.3)');
        // render: function (data, type) {
        //   if (type === 'display') {
        //     return data.length > 0 ? '<span style="background-color:rgba(255, 80, 31, 0.3)>' + data + '</span>' : data;
        //   }
        //   return data;
        // },
      },
      { data: 'comments' },
    ],
    data: data,
    initComplete: function () {
      // Build filters textboxes
      var api = this.api();

      // For each column
      api
        .columns()
        .eq(0)
        .each(function (colIdx) {
          // Set the header cell to contain the input element
          const cell = $('.filters th').eq($(api.column(colIdx).header()).index());
          const title = $(cell).text();
          $(cell).html('<input type="text" placeholder="' + title + '" />');

          // On every keypress in this input
          $('input', $('.filters th').eq($(api.column(colIdx).header()).index()))
            .off('keyup change')
            .on('keyup change', function (e) {
              e.stopPropagation();

              // Get the search value
              $(this).attr('title', $(this).val());
              let regexr = '({search})'; //$(this).parents('th').find('select').val();

              const cursorPosition = this.selectionStart;
              // Search the column for that value
              api
                .column(colIdx)
                .search(this.value != '' ? regexr.replace('{search}', '(((' + this.value + ')))') : '', this.value != '', this.value == '')
                .draw();

              $(this).focus()[0].setSelectionRange(cursorPosition, cursorPosition);
            });
        });
    },
  });
};
