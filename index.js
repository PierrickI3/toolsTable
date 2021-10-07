$(document).ready(function () {
  // Setup - add a text input to each footer cell
  $('#example thead tr').clone(true).addClass('filters').appendTo('#example thead');

  $('#example').DataTable({
    dom: 'Bfrltip',
    buttons: ['colvis'],
    stateSave: true,
    orderCellsTop: true,
    pageLength: 50,
    lengthMenu: [
      [10, 25, 50, -1],
      ['10 rows', '25 rows', '50 rows', 'Show all'],
    ],
    columns: [
      {
        data: 'Name',
        render: function (data, type) {
          if (type === 'display') {
            return '<b>' + data + '</b>';
          }
          return data;
        },
      },
      { data: 'Description' },
      { data: 'Company' },
      {
        data: 'Source',
      },
      {
        data: 'Platform',
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
            return data === 'true' ? '<span style="color:#27AE60; font-size:20px">✔</span>' : '<span style="font-size:15px">❌</span>';
          }
          return data;
        },
      },
      {
        data: 'Embeddable',
        render: function (data, type) {
          if (type === 'display') {
            return data === 'true' ? '<span style="color:#27AE60; font-size:20px">✔</span>' : '<span style="font-size:15px">❌</span>';
          }
          return data;
        },
      },
      {
        data: 'CanEmbedOthers',
        render: function (data, type) {
          if (type === 'display') {
            return data === 'true' ? '<span style="color:#27AE60; font-size:20px">✔</span>' : '<span style="font-size:15px">❌</span>';
          }
          return data;
        },
      },
      {
        data: 'HasIntegrations',
        render: function (data, type) {
          if (type === 'display') {
            return data === 'true' ? '<span style="color:#27AE60; font-size:20px">✔</span>' : '<span style="font-size:15px">❌</span>';
          }
          return data;
        },
      },
      { data: 'CostPerUser' },
      { data: 'NumberOfUsers' },
      { data: 'Country' },
      {
        data: 'SCs',
        render: function (data, type) {
          if (type === 'display') {
            return data === 'true' ? '<span style="color:#27AE60; font-size:20px">✔</span>' : '<span style="font-size:15px">❌</span>';
          }
          return data;
        },
      },
      {
        data: 'AEs',
        render: function (data, type) {
          if (type === 'display') {
            return data === 'true' ? '<span style="color:#27AE60; font-size:20px">✔</span>' : '<span style="font-size:15px">❌</span>';
          }
          return data;
        },
      },
      {
        data: 'SAs',
        render: function (data, type) {
          if (type === 'display') {
            return data === 'true' ? '<span style="color:#27AE60; font-size:20px">✔</span>' : '<span style="font-size:15px">❌</span>';
          }
          return data;
        },
      },
      {
        data: 'CSMs',
        render: function (data, type) {
          if (type === 'display') {
            return data === 'true' ? '<span style="color:#27AE60; font-size:20px">✔</span>' : '<span style="font-size:15px">❌</span>';
          }
          return data;
        },
      },
      {
        data: 'BCs',
        render: function (data, type) {
          if (type === 'display') {
            return data === 'true' ? '<span style="color:#27AE60; font-size:20px">✔</span>' : '<span style="font-size:15px">❌</span>';
          }
          return data;
        },
      },
      { data: 'Similar' },
      { data: 'Comments' },
    ],
    initComplete: function () {
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
});

// let data = [
//   { name: 'Adobe Creative Cloud', description: 'Applications and services that gives subscribers access to a collection of software used for graphic design, video editing, web development, photography', company: 'Adobe', source: 'External', platform: 'cloud', API: true, embeddable: false, canEmbedOthers: false, hasIntegrations: false, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'SCs, SAs, BCs' },
//   { name: 'Aha', description: 'Allows users to build and share visual roadmaps. It links key strategic goals and initiatives to releases and features', company: 'Aha', source: 'External', platform: 'cloud', API: true, embeddable: true, canEmbedOthers: false, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'SCs, SAs, BCs' },
//   { name: 'Alinean', description: 'Business value marketing and selling messaging and tools', company: 'Alinean', source: 'External', platform: 'cloud', API: true, embeddable: false, canEmbedOthers: false, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'SCs' },
//   { name: 'BriefingSource', description: 'Event management', company: 'EchoVision', source: 'External', platform: 'cloud', API: true, embeddable: false, canEmbedOthers: false, hasIntegrations: false, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'Leslie Paterson team' },
//   { name: 'Camtasia', description: 'Create video tutorials and presentations', company: 'Techsmith', source: 'External', platform: 'desktop', API: false, embeddable: false, canEmbedOthers: false, hasIntegrations: false, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'SCs, BCs', similar: 'Adobe Creative Cloud' },
//   { name: 'CC Portal', description: 'Set of tools used to deploy use cases, assist with migrations, handle Competency Centers requests', company: 'Genesys', source: 'Internal', platform: 'cloud', API: true, embeddable: true, canEmbedOthers: true, hasIntegrations: true, costPerUser: 0, totalUsers: 1300, country: 'France/Poland/UK', usedBy: 'SCs, AEs, BCs, CSMs', similar: 'GDemo' },
//   { name: 'DocuSign', description: 'For contract execution with customers', company: 'DocuSign', source: 'External', platform: 'cloud', API: true, embeddable: false, canEmbedOthers: false, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'SCs, AEs' },
//   { name: 'Formstack Documents (ex-Webmerge)', description: 'Customizable document templates', company: 'FormStack', source: 'External', platform: 'cloud', API: true, embeddable: true, canEmbedOthers: true, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: '?' },
//   { name: 'GDemo', description: 'Access to ready-to-go demos', company: 'Genesys', source: 'Internal', platform: 'cloud', API: false, embeddable: false, canEmbedOthers: false, hasIntegrations: true, costPerUser: 0, totalUsers: '?', country: 'USA', usedBy: 'SCs, AEs', similar: 'CC Portal (Use Case Automation)' },
//   { name: 'Genesys Cloud', description: 'Communication platform', company: 'Genesys', source: 'Internal', platform: 'cloud', API: true, embeddable: true, canEmbedOthers: true, hasIntegrations: true, costPerUser: 0, totalUsers: 5000, country: 'USA', usedBy: 'SCs, AEs, SAs, BAs, CSMs', similar: 'Teams, Slack, Zoom' },
//   { name: 'GitHub', description: 'Code repositories', company: 'Microsoft', source: 'External', platform: 'cloud', API: true, embeddable: true, canEmbedOthers: true, hasIntegrations: true, costPerUser: 0, totalUsers: '?', country: 'USA', usedBy: 'SCs' },
//   { name: 'Gong', description: 'Sales AI and machine learning tool. Synching Zoom conversations back into Salesforce', company: 'Gong.io', source: 'External', platform: 'cloud', API: false, embeddable: false, canEmbedOthers: false, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'USA/Israel', usedBy: 'AEs (NA)' },
//   { name: 'Google Sheets', description: 'Spreadsheets', company: 'Google', source: 'External', platform: 'cloud', API: true, embeddable: true, canEmbedOthers: true, hasIntegrations: true, costPerUser: 0, totalUsers: '?', country: 'USA', usedBy: 'SCs, AEs', similar: 'Office 365, SmartSheet' },
//   { name: 'JIRA', description: 'Issue tracking, bug tracking and agile project management', company: 'Atlassian', source: 'External', platform: 'cloud', API: true, embeddable: true, canEmbedOthers: true, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'Australia', usedBy: 'SCs, AEs, BCs, CSMs' },
//   { name: 'Knime', description: 'Analytics ML', company: 'Knime', source: 'External', platform: 'desktop', API: true, embeddable: false, canEmbedOthers: false, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'Switzerland', usedBy: '?' },
//   { name: 'LinkedIn Sales Navigator', description: 'Social selling platform that provides features that focus on helping find prospects and build relationships', company: 'LinkedIn', source: 'External', platform: 'cloud', API: true, embeddable: false, canEmbedOthers: false, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'BCs, CSMs' },
//   { name: 'LucidChart', description: 'Web-based proprietary platform that allows users to collaborate on drawing, revising and sharing charts and diagrams', company: 'Lucid Software', source: 'External', platform: 'cloud', API: true, embeddable: true, canEmbedOthers: false, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'SCs, AEs, BCs, CSMs' },
//   { name: 'Nintex', description: 'Business process Automation, workflow software licensing', company: 'Nintex', source: 'External', platform: 'cloud', API: true, embeddable: false, canEmbedOthers: false, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'AEs' },
//   { name: 'Office 365', description: 'Microsoft Office 365', company: 'Microsoft', source: 'External', platform: 'cloud', API: true, embeddable: true, canEmbedOthers: true, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'SCs, AEs, BCs, CSMs', similar: 'Google Sheets, SmartSheet' },
//   { name: 'OneDrive', description: 'File sharing and collaboration', company: 'Microsoft', source: 'External', platform: 'cloud', API: true, embeddable: false, canEmbedOthers: false, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'SCs, AEs, BCs, CSMs' },
//   { name: 'Prezi', description: 'Presentation', company: 'Prezi', source: 'External', platform: 'cloud', API: false, embeddable: true, canEmbedOthers: false, hasIntegrations: false, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'SCs' },
//   { name: 'QVidian', description: 'Proposal Management/Creator', company: 'Upland Software', source: 'External', platform: 'cloud', API: false, embeddable: true, canEmbedOthers: false, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'SCs, AEs' },
//   { name: 'ReferenceEdge', description: 'Used by Advisors and Partner Success Managers to confirm contacts for reference activity', company: 'Point of Reference', source: 'External', platform: 'cloud', API: false, embeddable: true, canEmbedOthers: false, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'Advisors, CSMs' },
//   { name: 'Revegy', description: 'Sales execution platform with built-in visualizations for account planning, providing sales teams with deal-winning insights', company: 'Revegy', source: 'External', platform: 'cloud', API: false, embeddable: true, canEmbedOthers: false, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'SCs, AEs' },
//   { name: 'Salesforce', description: 'CRM', company: 'Salesforce', source: 'External', platform: 'cloud', API: true, embeddable: true, canEmbedOthers: true, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'SCs, AEs, BCs, CSMs' },
//   { name: 'Salesforce for CPQ', description: 'Customized application built over Salesforce to handle CPQ functionality', company: 'Genesys', source: 'External', platform: 'cloud', API: false, embeddable: true, canEmbedOthers: true, hasIntegrations: false, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'SCs, AEs, BCs, CSMs' },
//   { name: 'Seismic', description: 'Project Management & Enablement, Content Management tools', company: 'Seismic', source: 'External', platform: 'cloud', API: true, embeddable: false, canEmbedOthers: false, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'SCs, AEs, BCs, CSMs' },
//   { name: 'Slack', description: 'Collaboration and communication platform', company: 'Microsoft', source: 'External', platform: 'cloud', API: true, embeddable: true, canEmbedOthers: true, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'SCs', similar: 'Genesys Cloud Chat' },
//   { name: 'SmartSheet', description: 'Collaboration and work management', company: 'SmartSheet', source: 'External', platform: 'cloud', API: true, embeddable: true, canEmbedOthers: false, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'SCs, AEs, BCs, CSMs', similar: 'Google Sheets, Office 365' },
//   { name: 'Tableau', description: 'Data analysis and reporting', company: 'Tableau', source: 'External', platform: 'cloud', API: true, embeddable: true, canEmbedOthers: false, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'SCs, AEs, BCs, CSMs' },
//   { name: 'Taiga', description: 'Open Source Project Management, Scrum, Kanban, Agile', company: 'Taiga', source: 'External', platform: 'cloud', API: true, embeddable: true, canEmbedOthers: false, hasIntegrations: true, costPerUser: 0, totalUsers: 5, country: 'Spain', usedBy: 'SCs, AEs', similar: 'Trello, Office 365 Planner' },
//   { name: 'Teams', description: 'Business communication platform ', company: 'Microsoft', source: 'External', platform: 'cloud', API: true, embeddable: true, canEmbedOthers: true, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'SAs, Tech Sales', similar: 'Genesys Cloud, Slack' },
//   { name: 'Traction On Demand', description: 'Automates complex account hierarchies for up-sell opportunities', company: 'Traction On Demand', source: 'External', platform: 'cloud', API: false, embeddable: true, canEmbedOthers: false, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'Canada', usedBy: 'AEs' },
//   { name: 'Trello', description: 'Project Management', company: 'Atlassian', source: 'External', platform: 'cloud', API: true, embeddable: true, canEmbedOthers: false, hasIntegrations: true, costPerUser: 0, totalUsers: '?', country: 'USA', usedBy: 'SAs, Tech Sales', similar: 'Taiga, Office 365 Planner' },
//   { name: 'TruVoice', description: 'Win/Loss insights and analysis', company: 'Primary Intelligence', source: 'External', platform: 'cloud', API: false, embeddable: false, canEmbedOthers: false, hasIntegrations: false, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'AEs' },
//   { name: 'WalkMe', description: 'Step by step guide. Used by Sales ops to assist them. Workflow tool that sits on top of Salesforce', company: 'WalkMe', source: 'External', platform: 'cloud', API: true, embeddable: true, canEmbedOthers: false, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'Israel', usedBy: 'Sales Ops' },
//   { name: 'WhatsApp', description: 'Cross-platform centralized instant messaging (IM) and voice-over-IP (VoIP) service ', company: 'Facebook', source: 'External', platform: 'cloud', API: true, embeddable: false, canEmbedOthers: false, hasIntegrations: true, costPerUser: 0, totalUsers: '?', country: 'USA', usedBy: 'Sales Ops', similar: 'Genesys Cloud, Slack, Teams' },
//   { name: 'Zoom', description: 'Video conferencing', company: 'Zoom', source: 'External', platform: 'cloud', API: true, embeddable: true, canEmbedOthers: false, hasIntegrations: true, costPerUser: '?', totalUsers: '?', country: 'USA', usedBy: 'SCs, AEs, SAs, BCs, CSMs', similar: 'Genesys Cloud, Teams' },
// ];
