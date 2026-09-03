const CURRICULUM = [
  {
    id: 1,
    title: "Introduction to Product Management",
    subtitle: "Foundations of the craft",
    weeks: [
      {
        n: 1, title: "Introduction to Product Management",
        objectives: [
          "Write a one-paragraph definition of what a PM actually does, in your own words",
          "List the 3 things a PM is responsible for that no one else on the team owns",
          "Identify one product you use daily and guess its PM's biggest current headache",
          "Compare the PM role at a startup vs. a large company — note 2 differences",
          "Draft your personal 'why I want to be a PM' statement (3 sentences)"
        ],
        books: [
          { t: "Inspired", a: "Marty Cagan" },
          { t: "Cracking the PM Interview", a: "Gayle McDowell & Jackie Bavaro" }
        ],
        videos: [
          { t: "What does a Product Manager actually do?" },
          { t: "A day in the life of a Product Manager" }
        ],
        fact: "The job title 'Product Manager' traces back to a 1931 memo by Procter & Gamble's Neil McElroy — he argued that Camay soap needed one person owning it end to end. That memo is considered the founding document of modern PM."
      },
      {
        n: 2, title: "Product Lifecycle",
        objectives: [
          "Sketch the product lifecycle (concept → design → build → launch → iterate) on paper",
          "Pick an app you know well and place it on the lifecycle today",
          "List 3 signs a product has entered the 'decline' stage",
          "Explain in 2 sentences why PMs re-enter earlier stages after launch",
          "Note one milestone your own project (Oloba Visuals or KRATOS AI) is at right now"
        ],
        books: [
          { t: "The Lean Product Playbook", a: "Dan Olsen" },
          { t: "Escaping the Build Trap", a: "Melissa Perri" }
        ],
        videos: [
          { t: "The product development lifecycle explained" },
          { t: "Product lifecycle stages with real examples" }
        ],
        fact: "Nokia's Symbian OS was once the world's dominant smartphone platform — by the time its team recognized they were in 'decline,' the iPhone had already reset the market's expectations. Lifecycle blindness is a PM's most expensive mistake."
      },
      {
        n: 3, title: "Market Research and Analysis",
        objectives: [
          "Run a 20-minute competitor scan on 2 products in a market you're curious about",
          "Write 3 open-ended questions you'd ask a user in an interview",
          "Distinguish quantitative vs. qualitative research with one example of each",
          "Summarize one market trend affecting your industry of interest in 2 sentences",
          "Practice turning a vague research finding into one clear insight statement"
        ],
        books: [
          { t: "Talking to Humans", a: "Giff Constable" },
          { t: "The Mom Test", a: "Rob Fitzpatrick" }
        ],
        videos: [
          { t: "How to run competitor analysis as a PM" },
          { t: "User research methods for product managers" }
        ],
        fact: "Coca-Cola's 1985 taste tests for 'New Coke' scored higher than the original in blind studies — yet the launch flopped within 3 months. Great data still needs the right question behind it."
      },
      {
        n: 4, title: "Creating a Product Roadmap | OKRs & KPIs",
        objectives: [
          "Draft a simple 3-item roadmap for a product idea of your own",
          "Write one OKR (Objective + 2 Key Results) for that idea",
          "Explain the difference between an output and an outcome, with an example",
          "Try the RICE or MoSCoW method to rank 3 hypothetical features",
          "List one KPI you'd track weekly if you owned this product"
        ],
        books: [
          { t: "Measure What Matters", a: "John Doerr" },
          { t: "Product Roadmaps Relaunched", a: "C. Todd Lombardo et al." }
        ],
        videos: [
          { t: "How to build a product roadmap that actually works" },
          { t: "OKRs explained for product teams" }
        ],
        fact: "OKRs were popularized inside Google by investor John Doerr in 1999 — but the framework itself was born at Intel under Andy Grove a decade earlier, originally just to keep engineering teams honest about deadlines."
      },
      {
        n: 5, title: "User Persona and Journey Mapping",
        objectives: [
          "Build one basic user persona (name, goal, frustration) for a product idea",
          "Map that persona's journey in 5 steps from awareness to repeat use",
          "Mark the single most painful step in that journey and why",
          "Interview one friend informally and update your persona with a real quote",
          "Identify a moment in the journey where a small fix would have outsized impact"
        ],
        books: [
          { t: "About Face", a: "Alan Cooper" },
          { t: "Mapping Experiences", a: "James Kalbach" }
        ],
        videos: [
          { t: "How to create user personas that are actually useful" },
          { t: "Customer journey mapping walkthrough" }
        ],
        fact: "The persona technique was pioneered by software designer Alan Cooper in the 1980s — he originally invented a fictional user named 'Kathy' just to stop his own team from arguing about whose imagined user was 'right.'"
      },
      {
        n: 6, title: "Introduction to Agile Methodology",
        objectives: [
          "Explain Scrum vs. Kanban in one sentence each",
          "List the 3 core Scrum roles and one responsibility for each",
          "Write 2 user stories in the format: 'As a ___, I want ___, so that ___'",
          "Practice prioritizing a mock backlog of 5 items in 10 minutes",
          "Identify which framework (Scrum or Kanban) fits a solo YouTube content pipeline better, and why"
        ],
        books: [
          { t: "Scrum: The Art of Doing Twice the Work in Half the Time", a: "Jeff Sutherland" },
          { t: "Kanban", a: "David J. Anderson" }
        ],
        videos: [
          { t: "Agile, Scrum and Kanban explained simply" },
          { t: "How to write great user stories" }
        ],
        fact: "The Agile Manifesto was written in a single weekend in 2001 by 17 software developers at a ski lodge in Utah — it's just 68 words long, yet it reshaped how nearly every tech company builds products."
      },
      {
        n: 7, title: "Introduction to Agile Methodology II",
        objectives: [
          "List the 4 core Scrum ceremonies and what each one is actually for",
          "Draft a mock daily standup update in 3 sentences (yesterday, today, blockers)",
          "Explain what a 'blocker' is and one healthy way a PM helps unblock a team",
          "Compare async vs. sync collaboration for a distributed team — note a trade-off",
          "Pick one collaboration tool and write down why it fits a small team's workflow"
        ],
        books: [
          { t: "The Five Dysfunctions of a Team", a: "Patrick Lencioni" },
          { t: "Team Topologies", a: "Matthew Skelton & Manuel Pais" }
        ],
        videos: [
          { t: "Scrum ceremonies explained: standup, planning, review, retro" },
          { t: "How PMs collaborate with engineering and design" }
        ],
        fact: "Daily standups get their name from a literal habit: early Agile teams found that meetings run standing up finish, on average, dramatically faster than ones held sitting down — discomfort as a productivity hack."
      },
      {
        n: 8, title: "Cross-functional Collaboration & PM Tools",
        objectives: [
          "List 3 workflow tools PMs commonly use and what each is best for",
          "Draft a short usability test script with 3 tasks for a mock app",
          "Explain why usability testing happens even after a design 'looks done'",
          "Practice writing feedback to a designer that's specific, not just 'I don't like it'",
          "Identify one iteration you'd make after a hypothetical failed usability test"
        ],
        books: [
          { t: "Don't Make Me Think", a: "Steve Krug" },
          { t: "Rocket Surgery Made Easy", a: "Steve Krug" }
        ],
        videos: [
          { t: "How to plan and run a usability test" },
          { t: "Best collaboration tools for cross-functional PM teams" }
        ],
        fact: "Steve Krug's usability testing philosophy fits on a napkin: watch one person struggle with your product for 15 minutes, and you'll learn more than a month of internal debate — a principle still cited in nearly every UX course today."
      }
    ]
  },
  {
    id: 2,
    title: "User Experience, Design & PM Analytics",
    subtitle: "Making products usable — and measurable",
    weeks: [
      {
        n: 1, title: "Basics of UX Design & Design Thinking",
        objectives: [
          "Explain user-centered design in your own words, in 2 sentences",
          "Walk through the 5 stages of design thinking on a napkin sketch",
          "Pick a product you dislike and identify which design-thinking stage was skipped",
          "Practice reframing a complaint ('this is confusing') as a design problem statement",
          "List one product decision you'd make differently after this lesson"
        ],
        books: [
          { t: "The Design of Everyday Things", a: "Don Norman" },
          { t: "Sprint", a: "Jake Knapp" }
        ],
        videos: [
          { t: "Design thinking process explained step by step" },
          { t: "UX design basics for product managers" }
        ],
        fact: "Don Norman coined the term 'User Experience' in 1993 while at Apple — he later said he regretted how broadly the term got used, since he'd meant something much more specific: everything, including the box it ships in."
      },
      {
        n: 2, title: "Wireframing and Prototyping",
        objectives: [
          "Sketch a low-fidelity wireframe (paper is fine) for one screen of a product idea",
          "Explain the difference between a wireframe, a prototype, and an MVP",
          "List 3 things a prototype should test before a single line of code is written",
          "Turn one wireframe into a rough clickable flow (even just numbered arrows)",
          "Identify the smallest possible MVP version of your idea"
        ],
        books: [
          { t: "Sketching User Experiences", a: "Bill Buxton" },
          { t: "The Lean Startup", a: "Eric Ries" }
        ],
        videos: [
          { t: "Wireframing vs prototyping: what's the difference" },
          { t: "How to build your first MVP" }
        ],
        fact: "Dropbox's original 'prototype' wasn't a product at all — it was a 3-minute demo video posted online. It grew their waitlist from 5,000 to 75,000 overnight, before a single feature was built."
      },
      {
        n: 3, title: "Usability Testing",
        objectives: [
          "Draft 3 realistic tasks to hand a tester for a product idea of yours",
          "List 2 things you'd watch for besides whether the task was 'completed'",
          "Practice taking neutral notes on an imagined test session (no leading language)",
          "Identify one usability finding and turn it into one design change",
          "Explain why testing with 5 users tends to surface most major issues"
        ],
        books: [
          { t: "Don't Make Me Think", a: "Steve Krug" },
          { t: "Observing the User Experience", a: "Elizabeth Goodman et al." }
        ],
        videos: [
          { t: "How many users do you need to test with?" },
          { t: "Usability testing: a step-by-step guide" }
        ],
        fact: "Jakob Nielsen's famous research found that testing with just 5 users typically uncovers about 85% of a product's usability problems — testing with more users mostly finds the same issues repeated."
      },
      {
        n: 4, title: "Accessibility in Product Design",
        objectives: [
          "List 3 groups of users who benefit from accessible design beyond visible disability",
          "Check one app you use for color-contrast and keyboard navigation issues",
          "Explain WCAG in one sentence, in plain language",
          "Identify one accessibility gap in a product you're building",
          "Write one accessibility requirement you'd add to a hypothetical PRD"
        ],
        books: [
          { t: "Inclusive Design for a Digital World", a: "Regine Gilbert" },
          { t: "Mismatch: How Inclusion Shapes Design", a: "Kat Holmes" }
        ],
        videos: [
          { t: "Web accessibility basics every PM should know" },
          { t: "WCAG explained simply" }
        ],
        fact: "The curb cut — the small ramp at street corners — was designed for wheelchair users, but ended up benefiting parents with strollers, delivery workers, and travelers with luggage far more in raw numbers. It's the classic case for why accessible design helps everyone."
      },
      {
        n: 5, title: "Foundations of Analytics in Product Management",
        objectives: [
          "Explain why a PM needs data literacy even with a dedicated analytics team",
          "List 3 questions analytics can answer that user interviews usually can't",
          "Try a simple Google Analytics demo report and note one thing that surprises you",
          "Write one SQL-style question in plain English (e.g. 'how many users returned in 7 days')",
          "Identify one metric you'd want dashboarded for a product you're building"
        ],
        books: [
          { t: "Lean Analytics", a: "Alistair Croll & Benjamin Yoskovitz" },
          { t: "Storytelling with Data", a: "Cole Nussbaumer Knaflic" }
        ],
        videos: [
          { t: "Google Analytics basics for product managers" },
          { t: "Intro to SQL for non-technical PMs" }
        ],
        fact: "Amazon's recommendation engine — 'customers who bought this also bought' — reportedly drives a significant share of the company's revenue, and it began as a simple analytics experiment in the late 1990s, long before 'data-driven' was a buzzword."
      },
      {
        n: 6, title: "Analyzing User Behaviour & Analytics Techniques",
        objectives: [
          "Write one hypothesis for an A/B test on a product idea (control vs. variant)",
          "Explain statistical significance in one plain-language sentence",
          "Analyze a mock case study dataset and write one behavioral insight",
          "List 2 risks of relying on predictive analytics without human judgment",
          "Identify one user behavior pattern you've noticed in your own YouTube analytics"
        ],
        books: [
          { t: "Trustworthy Online Controlled Experiments", a: "Ron Kohavi et al." },
          { t: "Predictably Irrational", a: "Dan Ariely" }
        ],
        videos: [
          { t: "A/B testing explained for product managers" },
          { t: "How to read a user behavior dashboard" }
        ],
        fact: "Booking.com reportedly runs over a thousand A/B tests at any given time — their culture treats nearly every UI decision, down to button color, as a hypothesis to be tested rather than a design opinion to be argued about."
      },
      {
        n: 7, title: "Product Launch",
        objectives: [
          "Draft a one-page launch plan skeleton (goal, audience, channels, timeline)",
          "List 3 teams a PM must sync with before any launch",
          "Identify one launch-day metric that would tell you 'this is working' within 24 hours",
          "Write a rollback checklist item: what would make you pull a launch?",
          "Plan a soft-launch vs. full-launch approach for a product idea, and explain your choice"
        ],
        books: [
          { t: "Traction", a: "Gabriel Weinberg & Justin Mares" },
          { t: "Crossing the Chasm", a: "Geoffrey Moore" }
        ],
        videos: [
          { t: "How to plan a successful product launch" },
          { t: "Soft launch vs full launch strategy" }
        ],
        fact: "Gmail stayed in 'beta' for 5 years after launch, from 2004 to 2009 — a deliberate PM strategy that let the team keep iterating and manage expectations while it grew to tens of millions of users."
      },
      {
        n: 8, title: "Go-to-Market strategy and Pricing strategy",
        objectives: [
          "Write a one-sentence positioning statement for a product idea",
          "Compare 2 pricing models (e.g. freemium vs. subscription) and pick one, with reasoning",
          "List 3 marketing channels you'd test first for a new product, and why",
          "Identify one piece of market feedback that would make you change your pricing",
          "Draft a simple GTM timeline with 3 milestones"
        ],
        books: [
          { t: "Obviously Awesome", a: "April Dunford" },
          { t: "Monetizing Innovation", a: "Madhavan Ramanujam & Georg Tacke" }
        ],
        videos: [
          { t: "How to build a go-to-market strategy" },
          { t: "Pricing strategy fundamentals for product managers" }
        ],
        fact: "Netflix's 1997 launch pricing was per-disc-rental, borrowed directly from Blockbuster's model — it wasn't until 1999 that they pivoted to the flat monthly subscription that would eventually make Blockbuster's model obsolete."
      }
    ]
  },
  {
    id: 3,
    title: "Technical Product Management",
    subtitle: "Speaking engineering's language",
    weeks: [
      {
        n: 1, title: "PM Foundations & the Technical PM Role",
        objectives: [
          "Explain what sets a Technical PM apart from a generalist PM, in 2 sentences",
          "Sketch the 4 stages of the product lifecycle: discovery, definition, development, delivery",
          "Describe Agile, Scrum, and Kanban each in one plain-English sentence",
          "Identify which PM archetype (B2B, B2C, platform, infra) fits a product you admire",
          "List the 3 teams a PM sits between on a typical org chart"
        ],
        books: [
          { t: "Technical Product Management", a: "Kenneth Yu" },
          { t: "The Product Manager's Survival Guide", a: "Steven Haines" }
        ],
        videos: [
          { t: "What is a Technical Product Manager?" },
          { t: "PM archetypes: B2B vs B2C vs platform vs infrastructure" }
        ],
        fact: "At companies like Stripe and Paystack, Technical PMs often write API-level requirements alongside engineers — a hybrid role that barely existed as a job title before the mid-2010s API economy took off."
      },
      {
        n: 2, title: "How the Web Works: Technical Foundations for PMs",
        objectives: [
          "Draw the request-response cycle: what happens when you click a button",
          "Explain frontend vs. backend vs. full-stack ownership in one sentence each",
          "Describe what a database is and why a PM should care about its structure",
          "List the 3 major cloud providers and one thing each is known for",
          "Read one simple system architecture diagram and describe it out loud"
        ],
        books: [
          { t: "How the Internet Really Works", a: "Art Reisman & Jerome Colburn" },
          { t: "Designing Data-Intensive Applications", a: "Martin Kleppmann" }
        ],
        videos: [
          { t: "How the internet works, explained simply" },
          { t: "Frontend vs backend vs full-stack explained" }
        ],
        fact: "Every time you load a webpage, your request can hop through a dozen or more servers across continents in under a second — the same request-response cycle whether you're checking a bank balance or loading a meme."
      },
      {
        n: 3, title: "APIs for Product Managers",
        objectives: [
          "Explain what an API is using a real-world (non-tech) analogy",
          "Compare REST vs. GraphQL trade-offs in one sentence a PM would care about",
          "List the 4 core HTTP methods and when each applies",
          "Read one page of a public API doc (Paystack, Termii, or Flutterwave) and summarize it",
          "Draft one API requirement as a PM would write it (not as code)"
        ],
        books: [
          { t: "APIs: A Strategy Guide", a: "Daniel Jacobson et al." },
          { t: "REST API Design Rulebook", a: "Mark Masse" }
        ],
        videos: [
          { t: "APIs explained for non-technical product managers" },
          { t: "REST vs GraphQL: which should you use?" }
        ],
        fact: "Paystack's API, one of the ones referenced in this curriculum, was central to its own growth story — the company processed payments for thousands of Nigerian businesses before being acquired by Stripe in 2020 for over $200 million."
      },
      {
        n: 4, title: "Databases & SQL for Product Managers",
        objectives: [
          "Explain relational vs. NoSQL databases in one sentence each",
          "Draw a simple table with rows and columns for a mock 'users' dataset",
          "Write one SQL-style query in plain English using SELECT and WHERE",
          "Define DAU, retention, and conversion in your own words",
          "Identify one moment where you'd ask an engineer to query data, vs. doing it yourself"
        ],
        books: [
          { t: "SQL for Data Analysis", a: "Cathy Tanimura" },
          { t: "Designing Data-Intensive Applications", a: "Martin Kleppmann" }
        ],
        videos: [
          { t: "SQL basics for product managers" },
          { t: "Reading a data schema: a beginner's guide" }
        ],
        fact: "SQL was developed at IBM in the early 1970s and was originally called SEQUEL — the name was shortened after a trademark dispute with a British aircraft company that already owned the acronym."
      },
      {
        n: 5, title: "System Architecture: Monolithic vs. Microservices",
        objectives: [
          "Explain monolithic vs. microservices architecture in one sentence each",
          "List 2 trade-offs a PM should weigh when engineering proposes a migration",
          "Describe what caching, queues, and load balancers each solve, in plain terms",
          "Read (or redraw) a simple system design diagram from memory",
          "Note how an architecture choice could affect a feature's timeline"
        ],
        books: [
          { t: "Designing Data-Intensive Applications", a: "Martin Kleppmann" },
          { t: "Building Microservices", a: "Sam Newman" }
        ],
        videos: [
          { t: "Monolith vs microservices explained" },
          { t: "How Paystack and MTN structure their systems" }
        ],
        fact: "Amazon famously moved from a monolithic architecture to microservices in the early 2000s — that internal shift is part of what eventually let them spin up AWS, since each internal service already had to expose itself as an API."
      },
      {
        n: 6, title: "Dev Tools & Engineering Workflows",
        objectives: [
          "Explain what a Git commit, branch, and pull request each are, without writing code",
          "List 2 things a PM can learn by reading a GitHub repo's issues and release notes",
          "Describe what a CI/CD pipeline is and why it matters for your release timeline",
          "Name the 4 core Scrum ceremonies and one thing each accomplishes",
          "Explain dev, staging, and production environments in one sentence each"
        ],
        books: [
          { t: "Pro Git", a: "Scott Chacon & Ben Straub" },
          { t: "Accelerate", a: "Nicole Forsgren, Jez Humble & Gene Kim" }
        ],
        videos: [
          { t: "Git and GitHub explained for non-engineers" },
          { t: "CI/CD pipelines: what PMs need to know" }
        ],
        fact: "Git was created by Linus Torvalds in just 10 days in 2005, out of necessity — the Linux kernel team had lost access to the proprietary tool they'd been using, so Torvalds built a replacement almost overnight."
      },
      {
        n: 7, title: "Technical Writing & PM Documentation",
        objectives: [
          "Draft a mini PRD outline: problem, goal, scope, success metric",
          "Write one user story with clear acceptance criteria in Given/When/Then format",
          "Identify one ambiguous sentence in a mock spec and rewrite it precisely",
          "List 2 edge cases a PM should define rather than leave for engineers to assume",
          "Practice a 2-sentence PRD summary you could get sign-off on from a busy engineer"
        ],
        books: [
          { t: "Writing for Busy Readers", a: "Todd Rogers & Jessica Lasky-Fink" },
          { t: "Docs for Developers", a: "Jared Bhatti et al." }
        ],
        videos: [
          { t: "How to write a great PRD" },
          { t: "Writing user stories with Gherkin acceptance criteria" }
        ],
        fact: "Amazon famously banned PowerPoint from key meetings in favor of 6-page narrative memos — Jeff Bezos argued that the discipline of full sentences forces clearer thinking than a slide full of bullet points ever could."
      },
      {
        n: 8, title: "Data, Analytics & Metrics for PMs",
        objectives: [
          "Sort 3 mock metrics into input, output, and guardrail categories",
          "Identify one vanity metric and one actionable metric for a product idea",
          "Draw the AARRR funnel and label each stage in one word",
          "Write one A/B test hypothesis including control, variant, and success measure",
          "List 2 things you'd put on a dashboard, and one thing you'd deliberately leave off"
        ],
        books: [
          { t: "Lean Analytics", a: "Alistair Croll & Benjamin Yoskovitz" },
          { t: "Actionable Gamification", a: "Yu-kai Chou" }
        ],
        videos: [
          { t: "AARRR pirate metrics explained" },
          { t: "Vanity metrics vs actionable metrics" }
        ],
        fact: "The AARRR framework — Acquisition, Activation, Retention, Revenue, Referral — gets its nickname 'pirate metrics' simply because saying the acronym out loud sounds like a pirate's growl."
      },
      {
        n: 9, title: "Security, Compliance & Integrations",
        objectives: [
          "Explain authentication vs. authorisation in one sentence each",
          "Define PII and list one responsibility a PM has around it",
          "Compare webhooks vs. polling in plain terms, with one trade-off",
          "Write one security requirement as it would appear in a PRD",
          "List one compliance consideration specific to African fintech or healthtech products"
        ],
        books: [
          { t: "Threat Modeling", a: "Adam Shostack" },
          { t: "Security Engineering", a: "Ross Anderson" }
        ],
        videos: [
          { t: "OAuth, SSO and 2FA explained for PMs" },
          { t: "Webhooks vs polling: which to use and when" }
        ],
        fact: "Nigeria's Data Protection Act and the older NDPR were closely modeled on the EU's GDPR — meaning a PM working on Nigerian fintech or healthtech products is often applying near-identical privacy principles, just under a different name."
      },
      {
        n: 10, title: "AI & ML Fundamentals for Product Managers",
        objectives: [
          "Explain ML, deep learning, and generative AI as a simple taxonomy",
          "Describe how an LLM works (tokens, training, inference) with no maths",
          "List 2 AI capabilities (e.g. classification, generation) and one real limitation",
          "Write one clear prompt as if instructing an AI feature to summarize text",
          "Define 'responsible AI' in your own words, covering fairness and consent"
        ],
        books: [
          { t: "AI Superpowers", a: "Kai-Fu Lee" },
          { t: "The Alignment Problem", a: "Brian Christian" }
        ],
        videos: [
          { t: "How LLMs work, explained without the maths" },
          { t: "AI product management: capabilities and limitations" }
        ],
        fact: "The term 'hallucination' for an AI model confidently stating something false was borrowed directly from psychiatry — researchers adopted it in the mid-2010s because the failure mode felt closer to a false perception than a simple bug."
      }
    ]
  },
  {
    id: 4,
    title: "AI Product Management, Leadership & Career",
    subtitle: "Leading teams, real-world case studies, and landing the role",
    weeks: [
      {
        n: 1, title: "AI Literacy for PMs: Understanding the Technology",
        objectives: [
          "Explain the major types of AI and how they differ, in plain language",
          "Describe how generative AI works at a conceptual level, no jargon",
          "List 2 GenAI capabilities and 2 limitations relevant to product decisions",
          "Write one better question you'd now ask an engineering team about an AI feature",
          "Identify one AI feature you use daily and name its most obvious limitation"
        ],
        books: [
          { t: "AI Superpowers", a: "Kai-Fu Lee" },
          { t: "Co-Intelligence", a: "Ethan Mollick" }
        ],
        videos: [
          { t: "AI literacy for product managers: a plain-English guide" },
          { t: "Generative AI explained conceptually" }
        ],
        fact: "GPT-3, one of the first widely-used large language models, was trained on hundreds of billions of words — roughly equivalent to reading every book in a large public library system many times over."
      },
      {
        n: 2, title: "The AI PM Role & The 4D AI Fluency Framework",
        objectives: [
          "Distinguish 'AI Product Management' from 'using AI as a PM,' in your own words",
          "Write one sentence defining each of the 4 D's: Delegation, Description, Discernment, Diligence",
          "Practice applying Delegation: pick one task you'd hand to AI this week, and why",
          "Identify one ethical responsibility a PM has when shipping an AI feature",
          "Reflect: which of the 4 D's is currently your weakest, and why"
        ],
        books: [
          { t: "Co-Intelligence", a: "Ethan Mollick" },
          { t: "Human + Machine", a: "Paul Daugherty & H. James Wilson" }
        ],
        videos: [
          { t: "Anthropic's 4D AI Fluency Framework explained" },
          { t: "What does an AI Product Manager actually do?" }
        ],
        fact: "Anthropic's 4D Framework — Delegation, Description, Discernment, Diligence — was designed specifically to move people past the binary of 'use AI' or 'don't,' toward asking a sharper question: for this task, right now, how much should I hand over?"
      },
      {
        n: 3, title: "The 4D Framework in Practice",
        objectives: [
          "Apply the 4D Framework to one discovery task (e.g. summarizing user feedback)",
          "Write one PM-specific prompt (Description) for drafting a feature brief",
          "Practice Discernment: critique an AI-generated output and flag one weak claim",
          "Identify one task where Diligence means you should NOT delegate to AI",
          "List 3 PM workflow stages where AI could realistically accelerate your work"
        ],
        books: [
          { t: "Prompt Engineering for Generative AI", a: "James Phoenix & Mike Taylor" },
          { t: "Co-Intelligence", a: "Ethan Mollick" }
        ],
        videos: [
          { t: "Prompt engineering basics for product managers" },
          { t: "How to critically evaluate AI-generated outputs" }
        ],
        fact: "Studies on AI-assisted writing have found that the biggest performance gains often come not from better AI outputs, but from people getting better at knowing when to push back on them — the Discernment step, not the Delegation step, ends up being the real skill."
      },
      {
        n: 4, title: "The Future PM: How AI is Reshaping the Role + Capstone",
        objectives: [
          "List 3 PM skills AI is likely to augment, and 3 that remain irreplaceable",
          "Sketch your personal AI-era PM skill stack (5 skills, ranked)",
          "Outline your capstone project scope in one paragraph",
          "Identify how your capstone demonstrates all 4 dimensions of the 4D Framework",
          "Write one reflection on how your view of the PM role changed this semester"
        ],
        books: [
          { t: "The Coming Wave", a: "Mustafa Suleyman" },
          { t: "Co-Intelligence", a: "Ethan Mollick" }
        ],
        videos: [
          { t: "How AI is reshaping the Product Manager role" },
          { t: "Building a portfolio-ready PM capstone project" }
        ],
        fact: "Surveys of practicing PMs consistently show stakeholder communication and judgment call-making ranked as the hardest skills to automate — even as AI tools have gotten dramatically better at drafting specs and summarizing research."
      },
      {
        n: 5, title: "Leading the Team to Success & Stakeholder Management",
        objectives: [
          "Write one sentence describing your natural leadership style",
          "List 2 ways a PM can drive a culture of experimentation without formal authority",
          "Map 3 stakeholders for a mock project and their top priority each",
          "Practice a 3-sentence stakeholder update: progress, risk, ask",
          "Identify one relationship you'd need to invest in early on a real project"
        ],
        books: [
          { t: "The Five Dysfunctions of a Team", a: "Patrick Lencioni" },
          { t: "Radical Candor", a: "Kim Scott" }
        ],
        videos: [
          { t: "Leading without authority: a PM's guide" },
          { t: "Stakeholder management fundamentals" }
        ],
        fact: "Product Managers are often called 'CEOs of the product' — but unlike a CEO, most PMs have zero direct reports. The entire job is leading through influence, not hierarchy, which is part of why stakeholder management is treated as a core skill, not a soft one."
      },
      {
        n: 6, title: "Negotiation & Conflict Resolution",
        objectives: [
          "List 2 tactics for finding win-win outcomes in a scope disagreement",
          "Practice reframing 'no, we can't do that' into a negotiable trade-off",
          "Identify one recent disagreement (real or hypothetical) and its underlying interest",
          "Draft one sentence you'd use to de-escalate a heated planning meeting",
          "Reflect on your default conflict style (avoid, compete, compromise, collaborate)"
        ],
        books: [
          { t: "Getting to Yes", a: "Roger Fisher & William Ury" },
          { t: "Never Split the Difference", a: "Chris Voss" }
        ],
        videos: [
          { t: "Negotiation skills every product manager needs" },
          { t: "How to resolve conflict in cross-functional teams" }
        ],
        fact: "Getting to Yes, first published in 1981 out of the Harvard Negotiation Project, introduced the idea of 'principled negotiation' — separating people from the problem — a concept now taught in nearly every business and product management program worldwide."
      },
      {
        n: 7, title: "Real-life Case Studies (i) — FinTech Masterclass",
        objectives: [
          "Explain digital payments, lending, and regtech as fintech's key sectors",
          "Analyze one product strategy choice made by Stripe, Revolut, or Robinhood",
          "Identify one compliance constraint that shapes fintech product decisions",
          "List 2 security-focused decisions you'd prioritize for a payments feature",
          "Write one takeaway you'd apply to a fintech product idea of your own"
        ],
        books: [
          { t: "The Payoff", a: "Jeff Gramm" },
          { t: "Digital Bank", a: "Chris Skinner" }
        ],
        videos: [
          { t: "How Stripe built its product strategy" },
          { t: "Fintech product management: a beginner's guide" }
        ],
        fact: "Paystack, founded in Lagos, processed payments for over 60,000 Nigerian businesses before its 2020 acquisition by Stripe — one of the clearest signals yet that African fintech product talent competes on a global stage."
      },
      {
        n: 8, title: "Real-life Case Studies (ii) — EdTech Masterclass",
        objectives: [
          "List 2 unique product challenges EdTech faces vs. consumer apps",
          "Analyze how one EdTech product balances engagement with actual learning outcomes",
          "Identify one metric that could be a vanity metric specifically in EdTech",
          "Write one feature idea that would improve retention for a learner, not just usage",
          "Reflect on what made a learning product (school, app, or course) work for you personally"
        ],
        books: [
          { t: "Make It Stick", a: "Peter C. Brown et al." },
          { t: "How Learning Works", a: "Susan Ambrose et al." }
        ],
        videos: [
          { t: "How Duolingo designs for learner retention" },
          { t: "Product management lessons from EdTech" }
        ],
        fact: "Duolingo's growth team found that its now-famous guilt-inducing streak notifications were one of the single biggest levers for daily retention — a reminder that in EdTech, the biggest product wins are often about behavior, not content."
      },
      {
        n: 9, title: "Real-life Case Studies (iii) — HealthTech Masterclass",
        objectives: [
          "Explain telemedicine, EHRs, and wearables as HealthTech's key areas",
          "Analyze how a product like Teladoc or Fitbit balances UX with compliance",
          "List one scalability challenge unique to healthcare infrastructure",
          "Identify one way customer feedback would be gathered differently in HealthTech",
          "Write one product decision you'd make more cautiously in a health context"
        ],
        books: [
          { t: "The Digital Doctor", a: "Robert Wachter" },
          { t: "Lean Hospitals", a: "Mark Graban" }
        ],
        videos: [
          { t: "How Teladoc scaled telemedicine" },
          { t: "Product management in regulated industries" }
        ],
        fact: "Wearable health devices like Fitbit generate so much granular data that the bigger product challenge often isn't collecting it — it's deciding which small fraction of it is actually useful enough to show a user without overwhelming them."
      },
      {
        n: 10, title: "Real-life Case Studies (iv) — Lifestyle Masterclass",
        objectives: [
          "Pick one lifestyle app (fitness, food, travel, or creator economy) and name its core loop",
          "Identify what makes a lifestyle product 'sticky' beyond pure utility",
          "List one way a lifestyle brand builds community, not just usage",
          "Draft one feature that would deepen habit formation for a lifestyle product idea",
          "Connect one insight here to your own Oloba Visuals or content brand"
        ],
        books: [
          { t: "Hooked", a: "Nir Eyal" },
          { t: "Atomic Habits", a: "James Clear" }
        ],
        videos: [
          { t: "How habit-forming products are designed" },
          { t: "Building community into a lifestyle product" }
        ],
        fact: "Strava's product team has said openly that they consider themselves a social network first and a fitness tracker second — the core insight being that people keep running not for the data, but to see their friends' kudos afterward."
      },
      {
        n: 11, title: "How to Land a Job as a Product Manager",
        objectives: [
          "Draft 3 bullet points for a PM resume that lead with outcomes, not tasks",
          "Write one line of your personal brand statement for LinkedIn",
          "List 3 places you'd network to find PM opportunities relevant to you",
          "Identify one portfolio project you could showcase today",
          "Outline a 4-week job search plan with weekly milestones"
        ],
        books: [
          { t: "Cracking the PM Interview", a: "Gayle McDowell & Jackie Bavaro" },
          { t: "Decode and Conquer", a: "Lewis C. Lin" }
        ],
        videos: [
          { t: "How to build a standout PM portfolio" },
          { t: "PM job search strategy: resume, network, apply" }
        ],
        fact: "A large share of PM hires, especially at smaller companies, come through referrals rather than cold applications — which is part of why 'build in public' and networking are treated as seriously as resume polish in most PM career guides."
      },
      {
        n: 12, title: "Interview Prep & CV Review",
        objectives: [
          "Practice answering 'walk me through a product you love and would improve' out loud",
          "Draft one product-sense answer using a clear structure (user, problem, solution, metric)",
          "List 2 analytical-thinking questions you'd expect and outline your approach to each",
          "Do a self-review of your CV: cut one line that doesn't show impact",
          "Rehearse a 60-second answer to 'why do you want to be a Product Manager?'"
        ],
        books: [
          { t: "Cracking the PM Interview", a: "Gayle McDowell & Jackie Bavaro" },
          { t: "Decode and Conquer", a: "Lewis C. Lin" }
        ],
        videos: [
          { t: "Mock PM interview: product sense question" },
          { t: "How to answer analytical thinking questions in PM interviews" }
        ],
        fact: "Product sense interview questions ('design a product for X') were popularized by companies like Google and Facebook in the 2010s specifically because they can't be memorized — interviewers are grading your reasoning process, not your final answer."
      }
    ]
  }
];
