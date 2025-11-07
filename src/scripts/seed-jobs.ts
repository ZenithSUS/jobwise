import supabase from '../database/supabase';
import { Job } from '../helpers/database-type';

/**
 * Seeds the database with dummy job records for client users
 * @returns {Promise<void>} - Resolves when the seeding operation is complete
 * @throws {Error} - If there is an error during the operation
 */
async function seedJobs() {
  // First, fetch all client users to get their IDs
  const { data: clients, error: clientError } = await supabase
    .from('Users')
    .select('id, email')
    .eq('role', 'client');

  if (clientError) {
    console.error('❌ Error fetching clients:', clientError);
    return;
  }

  // Create a map of email to id for easy reference
  const clientMap = new Map(clients.map((c) => [c.email, c.id]));

  const dummyJobs: Omit<Job, 'id' | 'created_at'>[] = [
    // Alice's jobs
    {
      client_id: clientMap.get('alice@example.com')!,
      title: 'Modern E-commerce Website Design',
      description:
        'Looking for a talented designer to create a modern, user-friendly e-commerce website. Must have experience with responsive design and understanding of conversion optimization.',
      category: 'Web Design',
      budget_min: 2000,
      budget_max: 4000,
      experience_level: 'intermediate',
      status: 'open',
    },
    {
      client_id: clientMap.get('alice@example.com')!,
      title: 'Brand Identity Package',
      description:
        'Need a complete brand identity package including logo, color palette, typography, and brand guidelines for a new startup.',
      category: 'Graphic Design',
      budget_min: 1500,
      budget_max: 3000,
      experience_level: 'expert',
      status: 'open',
    },
    // Charlie's jobs
    {
      client_id: clientMap.get('charlie@example.com')!,
      title: 'SEO Optimization for SaaS Website',
      description:
        'Seeking an SEO expert to optimize our SaaS website. Need on-page SEO, keyword research, and content strategy for better search rankings.',
      category: 'Digital Marketing',
      budget_min: 800,
      budget_max: 1500,
      experience_level: 'intermediate',
      status: 'open',
    },
    {
      client_id: clientMap.get('charlie@example.com')!,
      title: 'Social Media Campaign Management',
      description:
        'Short-term project to manage social media campaigns across Instagram, LinkedIn, and Twitter. 3-month engagement.',
      category: 'Social Media Marketing',
      budget_min: 1200,
      budget_max: 2000,
      experience_level: 'intermediate',
      status: 'in_progress',
    },
    // Ethan's jobs
    {
      client_id: clientMap.get('ethan@example.com')!,
      title: 'Full-Stack Web Application Development',
      description:
        'Building a custom web application for project management. Need experienced full-stack developer with React and Node.js expertise.',
      category: 'Web Development',
      budget_min: 5000,
      budget_max: 8000,
      experience_level: 'expert',
      status: 'open',
    },
    {
      client_id: clientMap.get('ethan@example.com')!,
      title: 'API Integration for CRM System',
      description:
        'Need to integrate multiple third-party APIs into our existing CRM system. Experience with REST APIs and authentication required.',
      category: 'Backend Development',
      budget_min: 2500,
      budget_max: 4000,
      experience_level: 'intermediate',
      status: 'open',
    },
    // George's jobs
    {
      client_id: clientMap.get('george@example.com')!,
      title: 'MVP Mobile App Development',
      description:
        'Looking for a mobile app developer to build an MVP for our startup. Cross-platform solution preferred (React Native or Flutter).',
      category: 'Mobile Development',
      budget_min: 6000,
      budget_max: 10000,
      experience_level: 'expert',
      status: 'open',
    },
    {
      client_id: clientMap.get('george@example.com')!,
      title: 'UI/UX Design for SaaS Dashboard',
      description:
        'Need a modern, intuitive dashboard design for our SaaS product. Should include user research, wireframes, and high-fidelity mockups.',
      category: 'UI/UX Design',
      budget_min: 3000,
      budget_max: 5000,
      experience_level: 'expert',
      status: 'in_progress',
    },
    // Ian's jobs
    {
      client_id: clientMap.get('ian@example.com')!,
      title: 'iOS App for Financial Services',
      description:
        'Developing a secure iOS application for financial services. Must have experience with financial APIs and security best practices.',
      category: 'Mobile Development',
      budget_min: 8000,
      budget_max: 12000,
      experience_level: 'expert',
      status: 'open',
    },
    {
      client_id: clientMap.get('ian@example.com')!,
      title: 'Business Plan and Financial Projections',
      description:
        'Need help creating a comprehensive business plan with financial projections for investor presentations.',
      category: 'Business Consulting',
      budget_min: 1000,
      budget_max: 2000,
      experience_level: 'intermediate',
      status: 'closed',
    },
    // Kyle's jobs
    {
      client_id: clientMap.get('kyle@example.com')!,
      title: 'Complete Brand Redesign',
      description:
        'Looking for a brand designer to completely redesign our company brand. Includes logo, website mockups, and marketing materials.',
      category: 'Branding',
      budget_min: 4000,
      budget_max: 7000,
      experience_level: 'expert',
      status: 'open',
    },
    {
      client_id: clientMap.get('kyle@example.com')!,
      title: 'Marketing Collateral Design',
      description:
        'Need someone to design brochures, business cards, and other marketing materials consistent with our brand guidelines.',
      category: 'Graphic Design',
      budget_min: 800,
      budget_max: 1500,
      experience_level: 'intermediate',
      status: 'open',
    },
    // Michael's jobs
    {
      client_id: clientMap.get('michael@example.com')!,
      title: 'Corporate Website Redesign',
      description:
        'Our company website needs a complete redesign. Looking for modern design with improved UX and mobile responsiveness.',
      category: 'Web Design',
      budget_min: 3500,
      budget_max: 6000,
      experience_level: 'intermediate',
      status: 'in_progress',
    },
    {
      client_id: clientMap.get('michael@example.com')!,
      title: 'WordPress Migration and Optimization',
      description:
        'Need to migrate existing website to WordPress and optimize for performance and SEO.',
      category: 'Web Development',
      budget_min: 1500,
      budget_max: 2500,
      experience_level: 'intermediate',
      status: 'open',
    },
    // Oscar's jobs
    {
      client_id: clientMap.get('oscar@example.com')!,
      title: 'Email Marketing Campaign Setup',
      description:
        'Setting up automated email marketing campaigns using Mailchimp or similar platform. Need email templates and automation workflows.',
      category: 'Email Marketing',
      budget_min: 600,
      budget_max: 1200,
      experience_level: 'beginner',
      status: 'open',
    },
    {
      client_id: clientMap.get('oscar@example.com')!,
      title: 'Content Strategy and Blog Writing',
      description:
        'Need a content strategist to create a 3-month content plan and write 12 blog posts for our tech company.',
      category: 'Content Writing',
      budget_min: 1000,
      budget_max: 2000,
      experience_level: 'intermediate',
      status: 'open',
    },
    // Quentin's jobs
    {
      client_id: clientMap.get('quentin@example.com')!,
      title: 'QA Testing for Web Application',
      description:
        'Looking for experienced QA tester to perform comprehensive testing on our web application. Need test cases, bug reports, and automation setup.',
      category: 'Quality Assurance',
      budget_min: 2000,
      budget_max: 3500,
      experience_level: 'intermediate',
      status: 'open',
    },
    {
      client_id: clientMap.get('quentin@example.com')!,
      title: 'Automated Testing Framework Setup',
      description:
        'Need to set up automated testing framework using Cypress or Selenium for continuous integration.',
      category: 'Test Automation',
      budget_min: 2500,
      budget_max: 4000,
      experience_level: 'expert',
      status: 'open',
    },
    // Samantha's jobs
    {
      client_id: clientMap.get('samantha@example.com')!,
      title: 'E-commerce Store Development',
      description:
        'Building an online store using Shopify or WooCommerce. Need customization, payment integration, and inventory setup.',
      category: 'E-commerce Development',
      budget_min: 3000,
      budget_max: 5000,
      experience_level: 'intermediate',
      status: 'open',
    },
    {
      client_id: clientMap.get('samantha@example.com')!,
      title: 'Virtual Assistant for Administrative Tasks',
      description:
        'Looking for a reliable virtual assistant to handle emails, scheduling, and basic administrative tasks. Long-term engagement.',
      category: 'Virtual Assistant',
      budget_min: 500,
      budget_max: 1000,
      experience_level: 'beginner',
      status: 'in_progress',
    },
  ];

  const { data, error } = await supabase
    .from('Jobs')
    .insert(dummyJobs)
    .select();

  if (error) {
    console.error('Error seeding jobs:', error);
  } else {
    console.log('Successfully inserted jobs:', data.length);
  }
}

seedJobs();
