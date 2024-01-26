
/* 
 <li>Why are you here?</li>
          <li>Who are you looking for?</li>
          <li>Who sent you?</li>

          <li>What do you want?</li>
          <li>What do you need?</li>
          <li>What do you have?</li>
          <li>What do you know?</li>
          <li>What do you see?</li>
          <li>What do you hear?</li>
          <li>What do you feel?</li>
          <li>What do you smell?</li>
          <li>What do you taste?</li>
          <li>What do you think?</li>
          <li>What do you believe?</li>
          <li>What do you want to do?</li>
          <li>What do you need to do?</li>
          <li>What do you have to do?</li>
          <li>What do you know to do?</li>
          <li>What do you see to do?</li>
          <li>What do you hear to do?</li>
          <li>What do you feel to do?</li>
          <li>What do you smell to do?</li>
          <li>What do you taste to do?</li>
          <li>What do you think to do?</li>
          <li>What do you believe to do?</li>
          <li>What do you want to know?</li>
          <li>Where do you need to go?</li>
*/

const simpleNavLinks = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '#about' },
    { text: 'Projects', path: '#projects' },
    { text: 'Login', path: '/login' },
    { text: 'Sign Up', path: '/sign-up' },
    { text: 'Forgot Password', path: '/forgot-password' },

]

const signedInNavLinks = [
    
    { text: 'Why are you here?', path: '/' },
    { text: 'Who sent you?', path: '/about' },
    { text: 'Who are you looking for?', path: '/contact' },

    { text: 'What happened?', path: '/reset-password' },
    { text: 'What do we know?', path: '/account' },
    { text: 'What can we see?', path: '/dashboard' },
    
    { text: 'What do you want to see?', path: '/projects' },
    { text: 'What did we make?', path: '/components' },
    { text: 'What are the facts?', path: '/charts' },
    { text: 'What are the other facts?', path: '/tables' },
    { text: 'Icons', path: '/icons' },
    { text: 'Maps', path: '/maps' },
    
    { text: 'What do you want to know?', path: '/blog' },
    { text: 'Blog List', path: '/blog-list' },
    { text: 'Blog Grid', path: '/blog-grid' },
    { text: 'Blog Details', path: '/blog-details' },
    { text: 'Blog Post', path: '/blog-post' },
    { text: 'Blog Archive', path: '/blog-archive' },
    { text: 'Blog Author', path: '/blog-author' },
    { text: 'Blog Category', path: '/blog-category' },
    { text: 'Blog Search', path: '/blog-search' },
    { text: 'Blog Tags', path: '/blog-tags' },
    
];

const signedOutNavLinks = [
    
    { text: 'Are you here to stay?', path: '/sign-up' },
    { text: 'Login', path: '/login' },
    { text: 'Forgot Password', path: '/forgot-password' },
    { text: 'Logout', path: '/logout' },
];


const bottomNavLinks = [
    { text: 'What do I know about you?', path: '/policies' },
    { text: 'Privacy Policy', path: '/privacy-policy' },
    { text: 'Terms of Use', path: '/terms-of-use' },
    
    { text: 'Do you have a question?', path: '/search' },
    { text: 'How can you support?', path: '/services' },
    { text: 'Product List', path: '/product-list' },
    { text: 'Pricing', path: '/pricing' },
    { text: 'FAQ', path: '/faq' },
    
    { text: 'Documentation', path: '/documentation' },
]

const socialLinks = [
    { text: 'Facebook', path: 'https://www.facebook.com' },
    { text: 'Twitter', path: 'https://twitter.com' },
    { text: 'Google+', path: 'https://plus.google.com' },
    { text: 'YouTube', path: 'https://www.youtube.com' },
    
]

const otherPageLinks = [
    
    { text: 'Sitemap', path: '/sitemap' },
    { text: '404', path: '/404' },
    { text: '500', path: '/500' },
    { text: '503', path: '/503' },
    { text: 'Maintenance', path: '/maintenance' },
    { text: 'Coming Soon', path: '/coming-soon' },
    { text: 'Under Construction', path: '/under-construction' },

]

export  { signedInNavLinks, signedOutNavLinks, bottomNavLinks, socialLinks, otherPageLinks, simpleNavLinks };