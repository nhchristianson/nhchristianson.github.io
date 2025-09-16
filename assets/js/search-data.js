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
  },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-group",
          title: "group",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/group/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-gave-a-talk-at-the-umass-amherst-theory-seminar",
          title: 'I gave a talk at the UMass Amherst Theory Seminar.',
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
          section: "News",},{id: "news-i-gave-an-amii-ai-seminar-at-the-university-of-alberta-watch-the-recording-here",
          title: 'I gave an Amii AI Seminar at the University of Alberta. Watch the...',
          description: "",
          section: "News",},{id: "news-we-have-two-papers-at-icml-this-week-on-online-algorithms-with-uq-predictions-and-convex-function-chasing-with-long-term-constraints",
          title: 'We have two papers at ICML this week on online algorithms with UQ...',
          description: "",
          section: "News",},{id: "news-i-m-pleased-to-have-been-named-a-2024-pimco-graduate-fellow-in-data-science",
          title: 'I’m pleased to have been named a 2024 PIMCO Graduate Fellow in Data...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-the-cornell-orie-young-researchers-workshop",
          title: 'I gave a talk at the Cornell ORIE Young Researchers Workshop.',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-in-the-systems-and-sustainability-seminar-at-umass-amherst",
          title: 'I gave a talk in the Systems and Sustainability Seminar at UMass Amherst....',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-in-the-session-optimization-and-learning-for-sustainable-grids-at-informs-2024",
          title: 'I gave a talk in the session “Optimization and Learning for Sustainable Grids”...',
          description: "",
          section: "News",},{id: "news-i-have-been-awarded-a-stanford-energy-postdoctoral-fellowship-looking-forward-to-spending-next-year-in-the-bay-area",
          title: 'I have been awarded a Stanford Energy Postdoctoral Fellowship! Looking forward to spending...',
          description: "",
          section: "News",},{id: "news-our-work-on-end-to-end-conformal-calibration-for-optimization-under-uncertainty-won-honorable-mention-for-the-best-poster-award-at-the-lanl-grid-science-winter-school-and-conference",
          title: 'Our work on End-to-End Conformal Calibration for Optimization Under Uncertainty won honorable mention...',
          description: "",
          section: "News",},{id: "news-congratulations-to-my-coauthor-chris-yeh-for-winning-the-best-student-presentation-award-at-the-baaicb-conference-in-dc-chris-presented-on-our-paper-end-to-end-conformal-calibration-for-optimization-under-uncertainty",
          title: 'Congratulations to my coauthor Chris Yeh for winning the best student presentation award...',
          description: "",
          section: "News",},{id: "news-our-paper-robust-machine-learned-algorithms-for-efficient-grid-operation-was-published-in-environmental-data-science",
          title: 'Our paper Robust machine-learned algorithms for efficient grid operation was published in Environmental...',
          description: "",
          section: "News",},{id: "news-i-successfully-defended-my-dissertation-thank-you-to-my-advisors-adam-wierman-and-steven-low-and-to-my-other-committee-members-eric-mazumdar-mohammad-hajiesmaili-and-baosen-zhang-for-their-generous-guidance-and-support-throughout-my-graduate-studies",
          title: 'I successfully defended my dissertation! Thank you to my advisors Adam Wierman and...',
          description: "",
          section: "News",},{id: "news-i-am-at-l4dc-in-ann-arbor-this-week-to-present-our-paper-on-power-grid-contingency-screening-with-input-convex-neural-networks",
          title: 'I am at L4DC in Ann Arbor this week to present our paper...',
          description: "",
          section: "News",},{id: "news-i-am-at-acm-sigmetrics-in-stony-brook-this-week-we-have-one-paper-in-the-main-conference-on-learning-augmented-spatiotemporal-online-allocation-with-applications-to-carbon-aware-workload-shifting-and-i-also-co-organized-the-third-annual-workshop-on-learning-augmented-algorithms-theory-and-applications",
          title: 'I am at ACM SIGMETRICS in Stony Brook this week! We have one...',
          description: "",
          section: "News",},{id: "news-i-graduated-with-my-phd-my-dissertation-was-awarded-caltech-s-ben-p-c-chou-doctoral-prize-in-information-science-and-technology-as-well-as-the-demetriades-tsafka-kokkalis-prize-in-environmentally-benign-renewable-energy-sources-or-related-fields",
          title: 'I graduated with my PhD! My dissertation was awarded Caltech’s Ben P.C. Chou...',
          description: "",
          section: "News",},{id: "news-we-have-one-paper-at-acm-e-energy-this-week-on-learning-augmented-scheduling-with-fairness-constraints-for-sustainable-compute-workloads",
          title: 'We have one paper at ACM e-Energy this week on learning-augmented scheduling with...',
          description: "",
          section: "News",},{id: "news-i-am-at-informs-aps-in-atlanta-this-week-i-will-be-presenting-on-our-work-on-risk-sensitive-online-algorithms-in-the-session-learning-augmented-online-optimization",
          title: 'I am at INFORMS APS in Atlanta this week! I will be presenting...',
          description: "",
          section: "News",},{id: "news-i-have-officially-started-as-a-stanford-energy-postdoctoral-fellow-please-reach-out-if-you-re-in-the-bay-area-and-interested-in-chatting-about-research",
          title: 'I have officially started as a Stanford Energy Postdoctoral Fellow! Please reach out...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
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
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "talks-emerge-seminar-at-uc-berkeley",
          title: 'eMERGE Seminar at UC Berkeley',
          description: "",
          section: "Talks",},{id: "talks-invited-talk-in-the-session-human-centric-energy-markets-at-informs-2025",
          title: 'Invited talk in the session “Human-Centric Energy Markets” at INFORMS 2025',
          description: "",
          section: "Talks",},{id: "talks-cs-theory-seminar-at-umass-amherst",
          title: 'CS Theory Seminar at UMass Amherst',
          description: "",
          section: "Talks",},];
