export type Link = {
  label: string
  href: string
}

export const profile = {
  name: 'Brock Presland',
  role: 'Full-stack Web Developer',
  email: 'brock.presland@outlook.com',
  resume: '/Brock-Presland-Resume.pdf',
  phone: '0474 211 851'
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' }
]

export const skillGroups = [
  { title: 'Front-end', items: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'jQuery', 'Vue', 'Nuxt', 'React'] },
  { title: 'Back-end', items: ['PHP', 'Laravel', 'MySQL', 'REST APIs'] },
  { title: 'CMS & Platforms', items: ['WordPress', 'WooCommerce', 'Shopify'] },
  { title: 'Infrastructure', items: ['Linux', 'Git', 'DNS', 'Hosting', 'Cloudflare', 'DigitalOcean'] },
  { title: 'Development', items: ['Integrations', 'Performance optimisation', 'Accessibility', 'SEO', 'AI-assisted development'] }
]

export const experience = [
  {
    company: 'Kingthing Marketing',
    dates: 'April 2021 - Present',
    summary: 'Website development, maintenance and support across client projects.',
    points: ['Built and maintained WordPress and Shopify websites.', 'Troubleshot production issues and supported ongoing improvements.', 'Mentored junior developers and communicated directly with clients.', 'Ran cybersecurity audits and fixed security issues.', 'Advised business owners and key stakeholders on technology strategy.']
  },
  {
    company: 'Top Dog Commerce',
    dates: 'March 2016 - April 2021',
    summary: 'Consulting and custom web development for business customers.',
    points: ['Managed client relationships and project delivery.', 'Built practical web solutions around business workflows.', 'Supported long-term customers with clear communication and ownership.']
  },
]

export const projectGroups = [
  {
    title: 'Laravel Applications',
    intro: 'Custom applications built around business operations, workflows and automation.',
    projects: [
      {
        title: 'MoreWorx',
        type: 'Business Operating Platform',
        summary: 'A Laravel-based operating platform designed around business workflows, automation and scalable internal processes.',
        points: ['Laravel architecture', 'APIs and integrations', 'Workflow automation', 'Scalable business systems'],
        url: 'https://moreworx.com'
      },
      {
        title: 'GuideFlow AI',
        type: 'Workflow Automation',
        summary: 'An enquiry workflow tool focused on improving customer communication and reducing repetitive administration.',
        points: ['AI-assisted workflow support', 'Customer communication', 'Business process improvement', 'Practical automation'],
        url: 'https://guideflow.moreworx.com'
      }
    ]
  },
  {
    title: 'WordPress Websites',
    intro: 'A selection of WordPress websites built and maintained for real businesses, with a focus on performance, usability, maintainability and delivering a strong customer experience.',
    projects: [
      {
        title: 'Ride Wild Mersey',
        type: 'WordPress Website',
        summary: 'A tourism website designed to showcase mountain bike trails through engaging visuals, clear wayfinding and trail statuses, and an intuitive content management experience for ongoing updates.',
        points: [
          'Custom WordPress development',
          'Responsive design',
          'SEO-focused content structure',
          'Ongoing maintenance & support'
        ],
        url: 'https://ridewildmersey.com.au/'
      },
      {
        title: 'Sinapius',
        type: 'WordPress Website',
        summary: 'A modern online store for a Tasmanian winery, balancing premium branding with practical content management, performance and a seamless browsing experience across all devices.',
        points: [
          'Custom WordPress build',
          'Performance optimisation',
          'Online store',
          'Content management'
        ],
        url: 'https://sinapius.com.au/'
      }
    ]
  },
  {
    title: 'Nuxt/Vue Websites',
    intro: 'Headless websites built with Nuxt.js and Vue.js, combining modern front-end performance with flexible CMS-driven content management for fast, scalable and maintainable business websites.',
    projects: [
      {
        title: 'Kingthing Marketing',
        type: 'Nuxt.js + Storyblok',
        summary: 'A headless marketing website built with Nuxt.js and powered by Storyblok, delivering a fast, responsive user experience while giving the marketing team a flexible visual CMS for managing content.',
        points: [
          'Nuxt.js',
          'Storyblok CMS',
          'Headless architecture',
          'Performance & SEO'
        ],
        url: 'https://kingthing.com.au'
      },
      {
        title: 'Eaglehawk Pavilions',
        type: 'Nuxt.js + Headless WordPress',
        summary: 'A headless accommodation website built with Nuxt.js and WordPress, designed to drive direct bookings through a premium user experience while supporting SEO with destination and local tourism content.',
        points: [
          'Nuxt.js',
          'Headless WordPress',
          'SEO content architecture',
          'Booking-focused UX'
        ],
        url: 'https://eaglehawkpavilions.com.au'
      }
    ]
  }

]

export const fitCards = [
  { title: 'Website Ownership', text: 'Comfortable maintaining, improving and protecting business websites that need to keep working.' },
  { title: 'Full Stack Development', text: 'Able to work across front-end, back-end, CMS, hosting and deployment concerns.' },
  { title: 'Problem Solving', text: 'Practical at investigating issues, narrowing causes and delivering fixes that match business needs.' },
  { title: 'Reliability', text: 'Takes ownership, communicates clearly and treats production systems with care.' }
]

export const growthAreas = [
  { title: 'Senior Development',   text: 'Build on my full-stack development experience to grow into a senior engineering role focused on technical leadership, software architecture, mentoring developers, and delivering scalable business solutions.' },
  { title: 'Cybersecurity', text: 'Leverage my software engineering background and formal cybersecurity training to grow into a dedicated cybersecurity role focused on protecting systems, managing cyber risk and compliance, and improving organisational security.' }
]
