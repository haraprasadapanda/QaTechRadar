radar_visualization({
  svg_id: "radar",
  width: 1850,
  height: 1000,
  colors: {
    
    background: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    grid: "#808080",
    inactive: "#ddd"
  },
  title: "QA Tech Radar",
  quadrants: [
    { name: "Platform & Infrastructure(Q0)" },
    { name: "Language & Framework(Q1)" },
    { name: "Techniques(Q2)" },
    { name: "Tools(Q3)" }
  ],
  rings: [
    { name: "ADOPT", color: "#00FF7F" },
    { name: "TRIAL", color: "#FFFF00" },
    { name: "ASSESS", color: "#FFD700" },
    { name: "HOLD", color: "#FFA500" }
  ],
  print_layout: true,
  // zoomed_quadrant: 0,
  //ENTRIES
  entries: [
    //Test Management
    {
      quadrant: 3,
      ring: 0,
      label: "qTest",
      active: false,
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "JIRA-PM",
      active: false,
      moved: 0
    },
    {
      quadrant: 3,
      ring: 3,
      label: "JIRA-TM",
      active: false,
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Azure DevOps",
      active: false,
      moved: 0
    },
    {
      quadrant: 0,
      ring: 3,
      label: "VMware",
      active: false,
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "MSTeam",
      active: false,
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "BDD",
      active: false,
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Automation Test",
      active: false,
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Performance Test",
      active: false,
      moved: 0
    },
    {
      quadrant: 2,
      ring: 1,
      label: "TDD",
      active: false,
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Exploratory Testing",
      active: false,
      moved: 0
    },
    {
      quadrant: 2,
      ring: 1,
      label: "A/B Testing",
      active: false,
      moved: 0
    },
    {
      quadrant: 2,
      ring: 1,
      label: "Risk-Based Test",
      active: false,
      moved: 0
    },
    {
      quadrant: 2,
      ring: 1,
      label: "Chaos Engineering",
      active: false,
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Regression Testing",
      active: false,
      moved: 0
    },
    {
      quadrant: 2,
      ring: 3,
      label: "Waterfall Testing",
      active: false,
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Agile Testing",
      active: false,
      moved: 0
    },
    {
      quadrant: 2,
      ring: 2,
      label: "ATDD",
      active: false,
      moved: 0
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Azure DevOps",
      active: false,
      moved: 0
    },
    //CI-CD
    {
      quadrant: 3,
      ring: 0,
      label: "Jenkin",
      active: false,
      moved: 0
    },

    //Automation Testing
    {
      quadrant: 3,
      ring: 1,
      label: "Playwright",
      active: false,
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Python",
      active: false,
      moved: 0
    },
    {
      quadrant: 1,
      ring: 1,
      label: "Java",
      active: false,
      moved: 0
    },
    {
      quadrant: 1,
      ring: 1,
      label: "C#",
      active: false,
      moved: 0
    },
    {
      quadrant: 1,
      ring: 1,
      label: "TypeScript",
      active: false,
      moved: 0
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Docker",
      active: false,
      moved: 0
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Kubernetes",
      active: false,
      moved: 0
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Kubernetes",
      active: false,
      moved: 0
    },
    //Performance Testing
    {
      quadrant: 3,
      ring: 2,
      label: "JMeter",
      active: false,
      moved: 0
    },
    {
      quadrant: 3,
      ring: 2,
      label: "Gatling",
      active: false,
      moved: 0
    },
    {
      quadrant: 3,
      ring: 2,
      label: "Rest Assured",
      active: false,
      moved: 0
    },
    {
      quadrant: 1,
      ring: 2,
      label: "Scala",
      active: false,
      moved: 0
    },
    //API Testing
    {
      quadrant: 3,
      ring: 2,
      label: "Postman",
      active: false,
      moved: 0
    },
    
  
  //Code Quality
  {
    quadrant: 0,
    ring: 0,
    label: "SonarQube",
    active: false,
    moved: 0
  },

  //Test Data Management
  {
    quadrant: 0,
    ring: 0,
    label: "SQL DB",
    active: false,
    moved: 0
  },
  {
    quadrant: 1,
    ring: 0,
    label: "SQL",
    active: false,
    moved: 0
  },


]

});
