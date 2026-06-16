const mockUser = {
  _id: "6507f1f77bcf86cd799439011",
  id: "mock-user-001",
  firstName: "Amara",
  lastName: "Dlamini",
  email: "demo@herapp.com",
  avatar: "https://st2.depositphotos.com/2071131/11354/i/450/depositphotos_113542824-stock-photo-small-green-leaves.jpg",
  gender: "Female",
  age: 28,
  profession: "Nurse",
  dateOfBirth: "1996-03-15",
  bio: "Passionate about health, wellness, and living my best life.",
  bmi: {
    count: 22.5,
    state: "Normal",
    goals: { count: 21.0, state: "Normal" }
  },
  calories: {
    carbohydrates: 180,
    proteins: 65,
    fats: 40,
    total: 1450,
    goals: { carbohydrates: 250, proteins: 50, fats: 67, total: 2000 }
  },
  heart: 72,
  height: 165,
  weight: { weight: 61, goals: 58 },
  water: {
    water: 1800,
    coke: 0,
    coffee: 1,
    juice: 500,
    goals: { water: 3000, coke: 0, coffee: 0, juice: 0 }
  },
  steps: { steps: 7500, goals: 10000 },
  rewards: { points: 1200, level: 3, badges: ["First Steps", "Hydration Hero", "Calorie Crusher"] },
  createdAt: new Date("2024-01-15"),
  updatedAt: new Date("2025-06-01")
};

const mockBlogs = [
  {
    _id: "blog-001",
    title: "5 Tips for a Healthier Morning Routine",
    content: "Starting your day right sets the tone for everything that follows. Begin with a glass of water, do 10 minutes of light stretching, eat a protein-rich breakfast, spend 5 minutes journaling your intentions, and get some sunlight. These simple habits compounded over time lead to remarkable health improvements.",
    author: "Dr. Lerato Mokoena",
    authorImage: "https://st2.depositphotos.com/2071131/11354/i/450/depositphotos_113542824-stock-photo-small-green-leaves.jpg",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400",
    category: "Wellness",
    Tags: ["morning", "routine", "health", "habits"],
    likes: 142,
    time: 5,
    createdAt: new Date("2025-01-10")
  },
  {
    _id: "blog-002",
    title: "Understanding Macronutrients for Women",
    content: "Macronutrients — carbohydrates, proteins, and fats — are the building blocks of your diet. Women have unique nutritional needs that change through different life stages. Carbs fuel your workouts and brain. Proteins rebuild muscle and support hormones. Healthy fats regulate your menstrual cycle and absorb fat-soluble vitamins. Aim for balance, not elimination.",
    author: "Nutritionist Zanele Khumalo",
    authorImage: "https://st2.depositphotos.com/2071131/11354/i/450/depositphotos_113542824-stock-photo-small-green-leaves.jpg",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400",
    category: "Nutrition",
    Tags: ["nutrition", "macros", "diet", "women's health"],
    likes: 98,
    time: 7,
    createdAt: new Date("2025-02-05")
  },
  {
    _id: "blog-003",
    title: "Beginner's Guide to Strength Training",
    content: "Strength training is one of the most empowering things a woman can do for her health. It boosts metabolism, strengthens bones, improves posture, and reduces anxiety. Start with bodyweight exercises like squats, push-ups, and lunges. Progress slowly, focus on form, and rest is part of the training. You don't need a gym — consistency is what counts.",
    author: "Coach Nomsa Sibiya",
    authorImage: "https://st2.depositphotos.com/2071131/11354/i/450/depositphotos_113542824-stock-photo-small-green-leaves.jpg",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400",
    category: "Fitness",
    Tags: ["strength", "training", "fitness", "beginner"],
    likes: 215,
    time: 6,
    createdAt: new Date("2025-03-20")
  },
  {
    _id: "blog-004",
    title: "The Power of Mindful Eating",
    content: "Mindful eating is about slowing down and tuning into your body's hunger and fullness signals. Put your phone away at meals, chew slowly, notice flavours and textures, and ask yourself if you're truly hungry before reaching for a snack. This practice reduces overeating, improves digestion, and transforms your relationship with food.",
    author: "Dr. Lerato Mokoena",
    authorImage: "https://st2.depositphotos.com/2071131/11354/i/450/depositphotos_113542824-stock-photo-small-green-leaves.jpg",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400",
    category: "Nutrition",
    Tags: ["mindful eating", "wellness", "nutrition", "mental health"],
    likes: 76,
    time: 4,
    createdAt: new Date("2025-04-01")
  }
];

const mockRecipes = [
  {
    _id: "recipe-001",
    recipeName: "Green Protein Smoothie",
    image: "https://images.unsplash.com/photo-1638439430466-b9f25c9e9b28?w=400",
    source: "Her Kitchen",
    serving: "1",
    description: "A quick, nutrient-packed smoothie to kickstart your morning with energy and protein.",
    calories: 320,
    allergies: ["dairy"],
    ingredients: ["spinach", "1 banana", "1 scoop vanilla protein powder", "250ml almond milk", "1 tbsp peanut butter"],
    displayIngredients: ["Spinach", "Banana", "Vanilla Protein Powder", "Almond Milk", "Peanut Butter"],
    preparation: ["Add all ingredients to a blender.", "Blend on high for 60 seconds until smooth.", "Pour and enjoy immediately."],
    dietLabels: ["High-Protein", "Low-Fat"],
    healthLabels: ["Vegan", "Dairy-Free", "Gluten-Free"],
    mealType: ["Breakfast"],
    time: "5 min",
    foodType: "Smoothie",
    rating: 4.8,
    approved: true
  },
  {
    _id: "recipe-002",
    recipeName: "Chicken Quinoa Power Bowl",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
    source: "Her Kitchen",
    serving: "2",
    description: "A filling, balanced lunch bowl packed with lean protein, complex carbs, and healthy fats.",
    calories: 520,
    allergies: [],
    ingredients: ["200g chicken breast", "100g quinoa", "1 avocado", "cherry tomatoes", "cucumber", "lemon", "olive oil"],
    displayIngredients: ["Chicken Breast", "Quinoa", "Avocado", "Cherry Tomatoes", "Cucumber"],
    preparation: ["Cook quinoa per package instructions.", "Season and grill chicken, then slice.", "Halve avocado and slice tomatoes.", "Assemble bowl and drizzle with lemon and olive oil."],
    dietLabels: ["High-Protein", "Low-Carb"],
    healthLabels: ["Gluten-Free", "Dairy-Free"],
    mealType: ["Lunch"],
    time: "25 min",
    foodType: "Bowl",
    rating: 4.6,
    approved: true
  },
  {
    _id: "recipe-003",
    recipeName: "Baked Lemon Herb Salmon",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400",
    source: "Her Kitchen",
    serving: "2",
    description: "Omega-3-rich salmon baked with lemon and herbs for a light, flavourful dinner.",
    calories: 480,
    allergies: ["fish"],
    ingredients: ["2 salmon fillets", "1 lemon", "2 cloves garlic", "fresh dill", "broccoli", "carrots", "olive oil"],
    displayIngredients: ["Salmon Fillets", "Lemon", "Garlic", "Fresh Dill", "Broccoli", "Carrots"],
    preparation: ["Preheat oven to 200°C.", "Season salmon with garlic, lemon zest, and dill.", "Place on a baking sheet with vegetables.", "Bake for 18–20 minutes until flaky."],
    dietLabels: ["Low-Carb", "High-Omega-3"],
    healthLabels: ["Gluten-Free", "Dairy-Free"],
    mealType: ["Dinner"],
    time: "30 min",
    foodType: "Baked",
    rating: 4.9,
    approved: true
  },
  {
    _id: "recipe-004",
    recipeName: "Berry Overnight Oats",
    image: "https://images.unsplash.com/photo-1571748982800-fa51082c2224?w=400",
    source: "Her Kitchen",
    serving: "1",
    description: "Prep-ahead breakfast that's creamy, filling, and loaded with antioxidants.",
    calories: 380,
    allergies: ["gluten", "dairy"],
    ingredients: ["80g rolled oats", "150g Greek yogurt", "200ml milk", "1 tbsp honey", "mixed berries", "1 tbsp chia seeds"],
    displayIngredients: ["Rolled Oats", "Greek Yogurt", "Milk", "Honey", "Mixed Berries", "Chia Seeds"],
    preparation: ["Mix oats, yogurt, milk, and chia seeds in a jar.", "Add honey and stir well.", "Refrigerate overnight.", "Top with berries in the morning."],
    dietLabels: ["High-Fiber", "High-Protein"],
    healthLabels: ["Vegetarian"],
    mealType: ["Breakfast"],
    time: "10 min + overnight",
    foodType: "No-Cook",
    rating: 4.7,
    approved: true
  }
];

const mockExercises = [
  {
    _id: "exc-001",
    name: "Full Body Strength Circuit",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400",
    time: 30,
    description: "A complete bodyweight circuit targeting all major muscle groups. Perfect for beginners and intermediate fitness levels.",
    workouts: [
      { name: "Squats", sets: 3, reps: 15, rest: "45s" },
      { name: "Push-Ups", sets: 3, reps: 12, rest: "45s" },
      { name: "Lunges", sets: 3, reps: 10, rest: "45s" },
      { name: "Plank", sets: 3, duration: "30s", rest: "30s" },
      { name: "Glute Bridges", sets: 3, reps: 15, rest: "30s" }
    ]
  },
  {
    _id: "exc-002",
    name: "Morning Cardio Flow",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400",
    time: 20,
    description: "Low-impact cardio routine to boost your heart rate and energise your morning without hard joint impact.",
    workouts: [
      { name: "March in Place", duration: "3 min" },
      { name: "Step Touches", duration: "3 min" },
      { name: "Low-Impact Jumping Jacks", duration: "3 min" },
      { name: "Side Shuffles", duration: "3 min" },
      { name: "Cool Down Stretch", duration: "5 min" }
    ]
  },
  {
    _id: "exc-003",
    name: "Core & Abs Blast",
    image: "https://images.unsplash.com/photo-1544216717-3bbf52512659?w=400",
    time: 15,
    description: "Targeted core workout to build strength, improve posture, and tone your midsection.",
    workouts: [
      { name: "Crunches", sets: 3, reps: 20, rest: "30s" },
      { name: "Bicycle Crunches", sets: 3, reps: 16, rest: "30s" },
      { name: "Leg Raises", sets: 3, reps: 12, rest: "30s" },
      { name: "Russian Twists", sets: 3, reps: 20, rest: "30s" },
      { name: "Plank Hold", sets: 3, duration: "40s", rest: "20s" }
    ]
  }
];

const mockExerciseProgress = {
  _id: "prog-001",
  userId: "mock-user-001",
  excercises: [
    {
      excerciseId: "exc-001",
      progress: [
        { date: new Date("2025-05-28"), completed: true, duration: 32 },
        { date: new Date("2025-05-30"), completed: true, duration: 30 },
        { date: new Date("2025-06-01"), completed: true, duration: 28 }
      ]
    },
    {
      excerciseId: "exc-002",
      progress: [
        { date: new Date("2025-05-29"), completed: true, duration: 22 },
        { date: new Date("2025-06-02"), completed: false, duration: 0 }
      ]
    }
  ]
};

const mockEvents = [
  {
    _id: "evt-001",
    title: "Morning Yoga in the Park",
    description: "Join us for a peaceful morning yoga session in the park. All levels welcome. Bring your own mat and water.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400",
    location: "Johannesburg Botanical Gardens",
    date: "2025-06-10",
    createdAt: new Date("2025-05-20")
  },
  {
    _id: "evt-002",
    title: "Women's 5K Fun Run",
    description: "An annual charity 5K open to all fitness levels. Walk, jog, or run — every step counts. Medals for all finishers.",
    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=400",
    location: "Sandton City Park, Johannesburg",
    date: "2025-06-15",
    createdAt: new Date("2025-05-25")
  },
  {
    _id: "evt-003",
    title: "Healthy Cooking Masterclass",
    description: "Learn to prepare nutritious, budget-friendly meals with a certified nutritionist. Hands-on cooking session included.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
    location: "Community Centre, Soweto",
    date: "2025-06-20",
    createdAt: new Date("2025-06-01")
  }
];

const mockCart = {
  _id: "cart-001",
  cartTitle: "My Weekly Shopping List",
  userId: "mock-user-001",
  cartDescription: "Healthy groceries for the week",
  count: 2,
  completed: 1,
  outstanding: 1
};

const mockCartItems = [
  {
    _id: "item-001",
    cartId: "cart-001",
    userId: "mock-user-001",
    name: "Vanilla Protein Powder",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400",
    count: 1,
    countUnit: "tub",
    text: "Pick up at Dis-Chem",
    isBought: true,
    isDeleted: false
  },
  {
    _id: "item-002",
    cartId: "cart-001",
    userId: "mock-user-001",
    name: "Mixed Berries (frozen)",
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400",
    count: 2,
    countUnit: "bags",
    text: "Frozen section",
    isBought: false,
    isDeleted: false
  }
];

const mockActivities = [
  {
    _id: "act-001",
    userId: "mock-user-001",
    activityId: "exc-001",
    date: new Date(),
    activityType: "exercise",
    activityName: "Full Body Strength Circuit",
    activityDescription: "Completed full body circuit",
    activityCount: 280,
    activityCountUnit: "kcal",
    indicator1: "Duration",
    indicator1Count: "30",
    indicator1CountUnit: "min"
  },
  {
    _id: "act-002",
    userId: "mock-user-001",
    activityId: "recipe-002",
    date: new Date(),
    activityType: "food",
    activityName: "Chicken Quinoa Power Bowl",
    activityDescription: "Lunch",
    activityCount: 520,
    activityCountUnit: "kcal",
    indicator2: "Meal Type",
    indicator2Count: "Lunch",
    indicator2CountUnit: ""
  },
  {
    _id: "act-003",
    userId: "mock-user-001",
    activityId: "water-001",
    date: new Date(),
    activityType: "water",
    activityName: "Water Intake",
    activityDescription: "Daily water log",
    activityCount: 1800,
    activityCountUnit: "ml"
  }
];

module.exports = {
  mockUser,
  mockBlogs,
  mockRecipes,
  mockExercises,
  mockExerciseProgress,
  mockEvents,
  mockCart,
  mockCartItems,
  mockActivities
};
