const data = [
    {
      "name": "Digital Marketing Essentials",
      "category": "buisness",
      "img": "./assets/img/buisness.jpg",
      "description": "Learn to market your brand in the digital age."
    },
    {
      "name": "Oil Painting Mastery",
      "category": "art",
      "img": "./assets/img/art.jpg",
      "description": "Paint vibrant scenes with oils like a pro."
    },
    {
      "name": "Public Speaking Confidence",
      "category": "personal",
      "img": "./assets/img/personal.jpg",
      "description": "Overcome fear and speak with impact."
    },
    {
      "name": "React JS Complete Guide",
      "category": "it",
      "img": "./assets/img/it.jpg",
      "description": "Build modern web apps with React."
    },
    {
      "name": "Watercolor Mastery",
      "category": "art",
      "img": "./assets/img/art.jpg",
      "description": "Master the art of watercolor step by step."
    },
    {
      "name": "Start a YouTube Channel",
      "category": "personal",
      "img": "./assets/img/personal.jpg",
      "description": "Everything you need to grow on YouTube."
    },
    {
      "name": "E-Commerce Strategies",
      "category": "buisness",
      "img": "./assets/img/buisness.jpg",
      "description": "Build and scale your online business successfully."
    },
    {
      "name": "Cybersecurity Basics",
      "category": "it",
      "img": "./assets/img/it.jpg",
      "description": "Protect yourself and your systems online."
    },
    {
      "name": "Creative Painting Basics",
      "category": "art",
      "img": "./assets/img/art.jpg",
      "description": "Unlock your creativity with painting essentials."
    },
    {
      "name": "Mindfulness and Meditation",
      "category": "personal",
      "img": "./assets/img/personal.jpg",
      "description": "Bring calm and clarity into your life."
    },
    {
      "name": "Financial Literacy 101",
      "category": "buisness",
      "img": "./assets/img/buisness.jpg",
      "description": "Understand how to manage money and budget effectively."
    },
    {
      "name": "Kurs Programowania C++",
      "category": "it",
      "img": "./assets/img/it.jpg",
      "description": "Short and Fun C++ where you will learn a lot"
    },
    {
      "name": "Advanced Drawing Techniques",
      "category": "art",
      "img": "./assets/img/art.jpg",
      "description": "Learn advanced methods to improve your drawing skills."
    },
    {
      "name": "Leadership & Management Skills",
      "category": "buisness",
      "img": "./assets/img/buisness.jpg",
      "description": "Become a confident and effective leader."
    },
    {
      "name": "Mobile App Development",
      "category": "it",
      "img": "./assets/img/it.jpg",
      "description": "Create your first mobile app today."
    },
    {
      "name": "Boost Your Creativity",
      "category": "personal",
      "img": "./assets/img/personal.jpg",
      "description": "Unlock your inner innovator."
    },
    {
      "name": "Modern Art Appreciation",
      "category": "art",
      "img": "./assets/img/art.jpg",
      "description": "Understand and appreciate modern art movements."
    },
    {
      "name": "Accounting Basics",
      "category": "buisness",
      "img": "./assets/img/buisness.jpg",
      "description": "Understand financial records and statements."
    },
    {
      "name": "Python for Data Analysis",
      "category": "it",
      "img": "./assets/img/it.jpg",
      "description": "Analyze data using Python and libraries like pandas."
    },
    {
      "name": "Healthy Habits for Life",
      "category": "personal",
      "img": "./assets/img/personal.jpg",
      "description": "Build daily routines that stick."
    },
    {
      "name": "The Art of Sculpture",
      "category": "art",
      "img": "./assets/img/art.jpg",
      "description": "Dive into the techniques of modern and classic sculpture."
    },
    {
      "name": "Start Your Own Business",
      "category": "buisness",
      "img": "./assets/img/buisness.jpg",
      "description": "A beginner-friendly guide to entrepreneurship."
    },
    {
      "name": "JavaScript for Beginners",
      "category": "it",
      "img": "./assets/img/it.jpg",
      "description": "Start coding with JavaScript today."
    },
    {
      "name": "Time Management Masterclass",
      "category": "personal",
      "img": "./assets/img/personal.jpg",
      "description": "Get more done and stress less."
    },
    {
      "name": "Digital Illustration for Beginners",
      "category": "art",
      "img": "./assets/img/art.jpg",
      "description": "Get started with digital art and express your ideas."
    },
    {
      "name": "Investing for Beginners",
      "category": "buisness",
      "img": "./assets/img/buisness.jpg",
      "description": "Learn how to invest smartly and safely."
    },
    {
      "name": "Machine Learning Made Easy",
      "category": "it",
      "img": "./assets/img/it.jpg",
      "description": "Discover the fundamentals of machine learning."
    },
    {
      "name": "Goal Setting and Achievement",
      "category": "personal",
      "img": "./assets/img/personal.jpg",
      "description": "Set smart goals and make them happen."
    },
    {
      "name": "Web Development with HTML & CSS",
      "category": "it",
      "img": "./assets/img/it.jpg",
      "description": "Build stunning websites from scratch."
    },
    {
      "name": "Emotional Intelligence Basics",
      "category": "personal",
      "img": "./assets/img/personal.jpg",
      "description": "Improve your self-awareness and empathy."
    }
  ];
  

const container = document.getElementById('cards');

data.forEach(item => {

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.setAttribute('data-name', item.category);


    const img = document.createElement('img');
    img.setAttribute('src', item.img);
    img.setAttribute('alt', item.name);

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');

    const title = document.createElement('h6');
    title.classList.add('cart-title');
    title.textContent = item.name;

    const description = document.createElement('p');
    description.classList.add('cart-text');
    description.textContent = item.description;

    cardBodyDiv.appendChild(title);
    cardBodyDiv.appendChild(description);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);

    container.appendChild(cardDiv);
});
