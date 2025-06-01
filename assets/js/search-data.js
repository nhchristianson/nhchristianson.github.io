// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-am-giving-a-talk-at-the-umass-amherst-theory-seminar",
          title: 'I am giving a talk at the UMass Amherst Theory Seminar.',
          description: "",
          section: "News",},{id: "news-excited-to-be-co-organizing-the-second-annual-workshop-on-learning-augmented-algorithms-theory-and-applications-at-acm-sigmetrics-ifip-performance-2024",
          title: 'Excited to be co-organizing the second annual workshop on Learning-augmented Algorithms: Theory and...',
          description: "",
          section: "News",},{id: "news-i-am-at-acm-sigmetrics-in-venice-this-week-we-have-two-papers-in-the-main-conference-on-new-learning-augmented-algorithms-for-carbon-aware-datacenter-operation-and-i-will-also-be-giving-talks-in-our-learning-augmented-algorithms-workshop-and-the-mama-workshop",
          title: 'I am at ACM SIGMETRICS in Venice this week! We have two papers...',
          description: "",
          section: "News",},{id: "news-congratulations-to-our-outstanding-undergraduate-researchers-james-helen-and-jerry-on-their-graduation-from-caltech-wishing-them-all-the-best-as-they-begin-their-doctoral-studies",
          title: 'Congratulations to our outstanding undergraduate researchers James, Helen, and Jerry on their graduation...',
          description: "",
          section: "News",},{id: "news-i-am-at-colt-in-edmonton-this-week-to-present-on-our-recent-work-on-risk-sensitive-online-algorithms",
          title: 'I am at COLT in Edmonton this week to present on our recent...',
          description: "",
          section: "News",},{id: "news-i-am-giving-the-amii-ai-seminar-at-the-university-of-alberta-watch-the-recording-here",
          title: 'I am giving the Amii AI Seminar at the University of Alberta. Watch...',
          description: "",
          section: "News",},{id: "news-we-have-two-papers-at-icml-this-week-on-online-algorithms-with-uq-predictions-and-convex-function-chasing-with-long-term-constraints",
          title: 'We have two papers at ICML this week on online algorithms with UQ...',
          description: "",
          section: "News",},{id: "news-excited-to-discuss-my-work-on-reliable-ai-ml-for-energy-systems-and-sustainability-in-three-upcoming-invited-talks-10-10-24-cornell-orie-young-researchers-workshop-10-18-24-umass-amherst-sustainability-seminar-10-21-24-informs-annual-meeting-10-45am-session-mb70-optimization-and-learning-for-sustainable-grids-regency-701",
          title: 'Excited to discuss my work on reliable AI/ML for energy systems and sustainability...',
          description: "",
          section: "News",},{id: "news-i-m-pleased-to-have-been-named-a-2024-pimco-graduate-fellow-in-data-science",
          title: 'I’m pleased to have been named a 2024 PIMCO Graduate Fellow in Data...',
          description: "",
          section: "News",},{id: "news-our-new-paper-learning-augmented-competitive-algorithms-for-spatiotemporal-online-allocation-with-deadline-constraints-was-accepted-to-acm-sigmetrics-2025-a-preliminary-version-is-available-here",
          title: 'Our new paper, “Learning-Augmented Competitive Algorithms for Spatiotemporal Online Allocation with Deadline Constraints”...',
          description: "",
          section: "News",},{id: "news-our-work-on-end-to-end-conformal-calibration-for-optimization-under-uncertainty-won-honorable-mention-for-the-best-poster-award-at-the-lanl-grid-science-winter-school-and-conference",
          title: 'Our work on End-to-End Conformal Calibration for Optimization Under Uncertainty won honorable mention...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3",
          title: 'project 3',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/322/8648.html", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/nhchristianson", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/nicolas-christianson-7974ba134", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=XS2UFA8AAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
