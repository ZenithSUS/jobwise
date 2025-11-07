import supabase from '../database/supabase';
import { Project } from '../helpers/database-type';

/**
 * Seeds the database with dummy project records for freelancers
 * @returns {Promise<void>} - Resolves when the seeding operation is complete
 * @throws {Error} - If there is an error during the operation
 */
async function seedProjects() {
  // Fetch all the freelancers first
  const { data: freelancers, error: freelancersError } = await supabase
    .from('Users')
    .select('id, email')
    .eq('role', 'freelancer');

  if (freelancersError) {
    console.error('❌ Error fetching users:', freelancersError);
    return;
  }

  const freelancersMap = new Map(freelancers?.map((f) => [f.email, f.id]));

  const dummyProjects: Omit<Project, 'id' | 'created_at'>[] = [
    // Bob Smith - Full-stack developer
    {
      freelancer_id: freelancersMap.get('bob@example.com')!,
      title: 'E-Commerce Platform with React & Node.js',
      description:
        'Built a full-featured e-commerce platform with shopping cart, payment integration (Stripe), user authentication, and admin dashboard. Implemented RESTful APIs and responsive frontend.',
      price: 5500.0,
      demo_url: 'https://ecommerce-demo.vercel.app',
      thumbnail_url:
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
    },
    {
      freelancer_id: freelancersMap.get('bob@example.com')!,
      title: 'Real-Time Chat Application',
      description:
        'Developed a real-time chat application using WebSockets (Socket.io). Features include group chats, direct messaging, file sharing, and online status indicators.',
      price: 3200.0,
      demo_url: 'https://chat-app-demo.com',
      thumbnail_url:
        'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800',
    },
    {
      freelancer_id: freelancersMap.get('bob@example.com')!,
      title: 'Task Management Dashboard',
      description:
        'Created a collaborative task management tool with drag-and-drop functionality, team collaboration features, and progress tracking.',
      price: 4100.0,
      demo_url: 'https://taskmanager-demo.com',
      thumbnail_url:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    },

    // Diana Prince - UX/UI Designer
    {
      freelancer_id: freelancersMap.get('diana@example.com')!,
      title: 'Mobile Banking App UI/UX Redesign',
      description:
        'Complete redesign of a mobile banking application focusing on user experience, accessibility, and modern design principles. Conducted user research and usability testing.',
      price: 4500.0,
      demo_url: 'https://www.figma.com/proto/banking-app-redesign',
      thumbnail_url:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
    },
    {
      freelancer_id: freelancersMap.get('diana@example.com')!,
      title: 'SaaS Dashboard Design System',
      description:
        'Designed a comprehensive design system for a SaaS product including components, style guide, and design tokens. Ensured consistency across all product touchpoints.',
      price: 6800.0,
      demo_url: null,
      thumbnail_url:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    },

    // Fiona Gallagher - Frontend Engineer
    {
      freelancer_id: freelancersMap.get('fiona@example.com')!,
      title: 'Corporate Website with Vue.js',
      description:
        'Developed a modern corporate website with smooth animations, responsive design, and optimized performance. Integrated headless CMS for content management.',
      price: 3800.0,
      demo_url: 'https://corporate-site-demo.netlify.app',
      thumbnail_url:
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
    },
    {
      freelancer_id: freelancersMap.get('fiona@example.com')!,
      title: 'Interactive Data Visualization Dashboard',
      description:
        'Built an interactive dashboard for visualizing complex datasets with charts, graphs, and real-time updates using D3.js and Vue.',
      price: 4200.0,
      demo_url: 'https://data-viz-demo.vercel.app',
      thumbnail_url:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    },

    // Hannah Lee - Backend Developer
    {
      freelancer_id: freelancersMap.get('hannah@example.com')!,
      title: 'RESTful API for Social Media Platform',
      description:
        'Developed scalable REST APIs for a social media platform handling user authentication, posts, comments, likes, and real-time notifications.',
      price: 5200.0,
      demo_url: 'https://api-docs.social-demo.com',
      thumbnail_url:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    },
    {
      freelancer_id: freelancersMap.get('hannah@example.com')!,
      title: 'Microservices Architecture Implementation',
      description:
        'Architected and implemented a microservices-based backend system with Docker containerization, API gateway, and service mesh.',
      price: 7500.0,
      demo_url: null,
      thumbnail_url:
        'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800',
    },

    // Jasmine Flores - Mobile App Developer
    {
      freelancer_id: freelancersMap.get('jasmine@example.com')!,
      title: 'Fitness Tracking Mobile App',
      description:
        'Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features. Integrated with wearable devices.',
      price: 8500.0,
      demo_url: 'https://apps.apple.com/app/fitness-tracker-demo',
      thumbnail_url:
        'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
    },
    {
      freelancer_id: freelancersMap.get('jasmine@example.com')!,
      title: 'Food Delivery App with Flutter',
      description:
        'Built a complete food delivery application with real-time order tracking, payment integration, and restaurant management features.',
      price: 9200.0,
      demo_url: 'https://play.google.com/store/apps/food-delivery-demo',
      thumbnail_url:
        'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800',
    },

    // Laura Chen - Graphic Designer
    {
      freelancer_id: freelancersMap.get('laura@example.com')!,
      title: 'Brand Identity for Tech Startup',
      description:
        'Created complete brand identity including logo design, color palette, typography system, and brand guidelines for an AI startup.',
      price: 3500.0,
      demo_url: 'https://www.behance.net/gallery/tech-startup-branding',
      thumbnail_url:
        'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
    },
    {
      freelancer_id: freelancersMap.get('laura@example.com')!,
      title: 'Magazine Layout & Illustrations',
      description:
        'Designed layouts and created custom illustrations for a quarterly tech magazine. Includes cover designs and infographics.',
      price: 2800.0,
      demo_url: null,
      thumbnail_url:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    },

    // Nina Brooks - Content Writer
    {
      freelancer_id: freelancersMap.get('nina@example.com')!,
      title: 'Technical Blog Content Series',
      description:
        'Wrote a 20-article series on cloud computing and DevOps practices for a tech company blog. Optimized for SEO and reader engagement.',
      price: 2400.0,
      demo_url: 'https://techblog-demo.com/articles',
      thumbnail_url:
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800',
    },
    {
      freelancer_id: freelancersMap.get('nina@example.com')!,
      title: 'Website Copy for SaaS Product',
      description:
        'Crafted compelling website copy including homepage, product pages, and landing pages for a B2B SaaS platform. Focused on conversion optimization.',
      price: 1800.0,
      demo_url: 'https://saas-product-demo.com',
      thumbnail_url:
        'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800',
    },

    // Paula Reyes - Social Media Manager
    {
      freelancer_id: freelancersMap.get('paula@example.com')!,
      title: 'Instagram Growth Campaign',
      description:
        'Managed 6-month Instagram campaign for fashion brand resulting in 300% follower growth. Created content calendar, graphics, and engagement strategy.',
      price: 3600.0,
      demo_url: 'https://instagram.com/fashion-brand-demo',
      thumbnail_url:
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
    },
    {
      freelancer_id: freelancersMap.get('paula@example.com')!,
      title: 'Multi-Platform Social Media Strategy',
      description:
        'Developed and executed comprehensive social media strategy across Instagram, LinkedIn, and TikTok for B2B tech company.',
      price: 4200.0,
      demo_url: 'https://social-media-case-study.com',
      thumbnail_url:
        'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800',
    },

    // Riley Adams - QA Engineer
    {
      freelancer_id: freelancersMap.get('riley@example.com')!,
      title: 'E2E Testing Suite for E-Commerce Platform',
      description:
        'Built comprehensive end-to-end testing suite using Cypress covering critical user flows, payment processing, and inventory management.',
      price: 3400.0,
      demo_url: 'https://github.com/rileyadams/ecommerce-e2e-tests',
      thumbnail_url:
        'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800',
    },
    {
      freelancer_id: freelancersMap.get('riley@example.com')!,
      title: 'Automated Testing CI/CD Pipeline',
      description:
        'Implemented automated testing pipeline with unit tests, integration tests, and performance testing integrated into CI/CD workflow.',
      price: 4800.0,
      demo_url: null,
      thumbnail_url:
        'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800',
    },

    // Tyler Grant - Web Designer/Developer
    {
      freelancer_id: freelancersMap.get('tyler@example.com')!,
      title: 'Modern Portfolio Website with Next.js',
      description:
        'Designed and developed a high-performance portfolio website using Next.js with server-side rendering, animations, and optimized images.',
      price: 2900.0,
      demo_url: 'https://portfolio-demo.vercel.app',
      thumbnail_url:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    },
    {
      freelancer_id: freelancersMap.get('tyler@example.com')!,
      title: 'Restaurant Booking Platform',
      description:
        'Full-stack restaurant booking platform with table reservations, menu management, and customer reviews. Designed and developed from scratch.',
      price: 6200.0,
      demo_url: 'https://restaurant-booking-demo.com',
      thumbnail_url:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    },
  ];

  const { data, error } = await supabase
    .from('Projects')
    .insert(dummyProjects)
    .select();

  if (error) {
    console.error('❌ Error seeding projects:', error);
  } else {
    console.log('✅ Successfully inserted projects:', data.length);
  }
}

seedProjects();
