const nutritionArticles = [
  {
    title: 'Fueling Your Studies: A Practical Nutrition Guide for Students',
    content: `Good nutrition is not just about staying healthy — it directly affects how well your brain functions, how long you can concentrate, and how quickly you recover from a demanding study session. As a student, your brain is your most important tool, and what you eat determines how sharp that tool stays throughout the day.

Start with complex carbohydrates. Unlike sugary snacks that give a quick energy spike followed by a crash, complex carbs like oats, brown rice, sweet potatoes, and whole-grain bread release energy slowly and steadily. This means more consistent concentration during lectures and longer study sessions without the mid-afternoon slump.

Protein is the building block of neurotransmitters — the chemical messengers your brain uses to process and store information. Eggs, legumes (lentils, chickpeas, beans), dairy, and lean meat should all feature in your meals. A protein-rich lunch can sharpen your focus for the afternoon ahead.

Don't skip healthy fats. Omega-3 fatty acids found in fish like pilchards and sardines (affordable and widely available), as well as walnuts and flaxseeds, support memory and overall brain health. Cooking with olive oil or avocado instead of processed cooking oils is a small change that adds up over time.

Iron is a nutrient that many students — especially female students — are deficient in. Low iron leads to fatigue and difficulty concentrating, symptoms that are easily mistaken for stress or burnout. Spinach, kidney beans, red meat, and fortified cereals are excellent iron sources. Pair them with vitamin C-rich foods like tomatoes or orange juice to boost absorption.

Finally, never underestimate the power of regular eating patterns. Skipping meals to save time is counterproductive — a brain running on empty cannot encode memories or solve problems efficiently. Aim for three balanced meals and one or two healthy snacks per day, and you will notice a real difference in your academic performance.`,
    author: 'Dr. Sarah Mokoena',
    authorImage: 'https://picsum.photos/seed/sarah-mokoena/100/100',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop',
    category: 'Nutrition',
    Tags: ['nutrition', 'student health', 'brain food'],
    likes: 147,
    time: 6
  },
  {
    title: '5 Budget-Friendly Meal Prep Ideas for University Students',
    content: `One of the biggest challenges student face is eating well without breaking the bank. The good news is that nutritious meals and tight budgets are not mutually exclusive — it just takes a bit of planning. Setting aside two hours on a Sunday to prep your meals for the week is one of the highest-return habits you can build as a student.

Meal 1 — Rice and Lentil Power Bowl: Cook a large pot of brown rice and red lentils together with onion, garlic, and cumin. Divide into containers and top with any available vegetables (frozen peas or spinach work perfectly). This is protein-rich, filling, and costs very little per serving.

Meal 2 — Overnight Oats: Combine rolled oats with milk (or water), a banana, and a tablespoon of peanut butter in a jar. Leave in the fridge overnight. In the morning you have a ready-to-eat breakfast packed with slow-release carbs and healthy fats. No cooking required.

Meal 3 — Egg and Vegetable Wraps: Hard-boil six eggs on Sunday and keep them in the fridge. Combine with whatever vegetables you have (tomato, lettuce, grated carrot) in a whole-wheat wrap. Quick to assemble and satisfying enough to carry you through a long lecture.

Meal 4 — Batch Vegetable Soup: Chop and fry any vegetables you have (onion, carrot, celery, potato, cabbage), add water or stock and simmer for 30 minutes. Blend half for texture. This makes six to eight portions that keep in the fridge for four days or the freezer for a month.

Meal 5 — Chickpea and Tomato Stew: Fry onion and garlic, add a can of chickpeas and a can of tomatoes, season with paprika, cumin, and salt. Serve with rice or bread. It costs almost nothing and delivers impressive amounts of protein, fibre, and micronutrients.

The key to meal prep success is keeping your pantry stocked with a handful of staples: rice, oats, lentils, canned beans, canned tomatoes, eggs, and frozen vegetables. From these basics you can build dozens of meals that are far healthier and cheaper than anything from a campus fast-food outlet.`,
    author: 'Thandi Khumalo',
    authorImage: 'https://picsum.photos/seed/thandi-khumalo/100/100',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop',
    category: 'Nutrition',
    Tags: ['meal prep', 'budget eating', 'student cooking'],
    likes: 203,
    time: 7
  },
  {
    title: "Why Breakfast Matters More Than You Think",
    content: `You have probably heard it before — breakfast is the most important meal of the day. But when you have an 8 AM lecture, a pile of assignments, and only six hours of sleep behind you, skipping breakfast feels like the logical choice. Here is why that logic is costing you marks.

Overnight, your brain depletes its glucose stores. Glucose is the brain's primary fuel, and without replenishing it in the morning, you are literally starting your day with a fuel-empty engine. Studies consistently show that students who eat breakfast perform better on memory tests, have faster reaction times, and experience fewer concentration lapses during morning classes.

A good student breakfast does not need to be elaborate. It needs three things: a source of slow-release carbohydrates (to sustain energy), a source of protein (to support focus and neurotransmitter production), and some form of fat or fibre (to slow down digestion and prevent an energy crash).

Quick breakfast options that actually work: a bowl of oats with milk and a banana; two boiled eggs on whole-wheat toast; yoghurt with muesli and a piece of fruit; a peanut butter and banana smoothie if you are really pressed for time; or leftovers from the previous night's dinner reheated. Yes — leftovers count.

What does not work as breakfast: black coffee on an empty stomach (this actually increases cortisol and anxiety), sugary cereals (the energy crash hits before your first lecture ends), energy drinks, or nothing at all.

Start small if you are not a breakfast person. Even a piece of fruit and a handful of nuts is better than nothing. Your brain will thank you in the form of sharper thinking, better mood, and improved recall — which is exactly what you need to get through an academic day.`,
    author: 'Dr. Sarah Mokoena',
    authorImage: 'https://picsum.photos/seed/sarah-mokoena/100/100',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&h=400&fit=crop',
    category: 'Nutrition',
    Tags: ['breakfast', 'morning routine', 'student health'],
    likes: 98,
    time: 4
  },
  {
    title: 'The Power of Hydration: How Water Fuels Your Brain',
    content: `Your brain is approximately 75% water. Even mild dehydration — as little as 1-2% fluid loss — measurably impairs concentration, short-term memory, and mood. For students who spend hours studying, writing, and thinking, staying hydrated is not optional; it is a performance strategy.

The most common mistake students make is waiting until they feel thirsty to drink water. By the time thirst registers, you are already mildly dehydrated. Instead, make drinking water a habit that does not depend on thirst signals. Keep a water bottle visible on your desk; if you can see it, you will drink from it. Aim for roughly two litres per day, more on hot days or when you are physically active.

Not all fluids are equal. Coffee and energy drinks are diuretics — they cause your body to excrete more water than you take in, worsening dehydration over time. Fruit juice contains vitamins but also a high sugar load. Plain water remains the gold standard. Herbal teas (rooibos, chamomile, peppermint) are excellent alternatives that hydrate without the sugar or caffeine downsides.

Foods also contribute to your hydration. Watermelon, cucumber, tomatoes, oranges, and yoghurt all have high water content and count towards your daily fluid intake.

Practical hydration tips for students: start every morning with a full glass of water before any coffee; drink a glass of water with each meal; keep a reusable bottle in your bag during lectures; replace afternoon energy drinks with water and a small healthy snack. Set a reminder on your phone if you tend to forget.

The connection between hydration and academic performance is supported by research, but you can test it yourself. Drink adequate water for three consecutive days and pay attention to your focus, energy, and mood. The difference is usually noticeable within 48 hours.`,
    author: 'Lerato Sithole',
    authorImage: 'https://picsum.photos/seed/lerato-sithole/100/100',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&h=400&fit=crop',
    category: 'Nutrition',
    Tags: ['hydration', 'water', 'brain health', 'student tips'],
    likes: 76,
    time: 4
  },
  {
    title: 'Superfoods on a Student Budget: What Actually Works',
    content: `The word "superfood" conjures images of expensive açaí bowls and exotic berries that cost more than a week of groceries. The reality is that many of the most nutritionally powerful foods are inexpensive, locally available, and have been staples of healthy diets for generations. Here is a student-friendly guide to the superfoods that actually matter.

Eggs: Perhaps the most complete and affordable source of nutrition available. Each egg contains high-quality protein, healthy fats, B vitamins, and choline — a nutrient critical for memory and brain development. At just a few rands each, eggs should be a weekly staple for every student.

Lentils and dried beans: Packed with protein, fibre, iron, and folate. Dried lentils and beans are among the cheapest foods per kilogram that you can buy, and they keep for months in a dry pantry. A cup of cooked lentils provides roughly 18g of protein and keeps you full for hours.

Spinach and dark leafy greens: Rich in iron, folate, vitamin C, and antioxidants. A bag of spinach from any supermarket or spaza shop is affordable and nutritious. Stir it into eggs, add it to rice, or wilt it into soups.

Sweet potato: Higher in vitamins A and C than regular potato, and a great source of complex carbohydrates for sustained energy. Roast them, mash them, or add them to stews.

Sardines and pilchards (canned): One of the most affordable sources of omega-3 fatty acids available. A can of pilchards in tomato sauce on brown bread makes a nutritionally complete, quick meal that costs very little.

Oats: A powerhouse of slow-release energy, fibre, and beta-glucan (which supports heart health and stable blood sugar). One kilogram of oats provides weeks of affordable, nutritious breakfasts.

You do not need a health food store to eat well as a student. The staples at your nearest supermarket — eggs, legumes, dark greens, sweet potatoes, canned fish, and oats — give you almost everything your body and brain need to perform at their best.`,
    author: 'Thandi Khumalo',
    authorImage: 'https://picsum.photos/seed/thandi-khumalo/100/100',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop',
    category: 'Nutrition',
    Tags: ['superfoods', 'affordable nutrition', 'student budget'],
    likes: 134,
    time: 5
  }
];

module.exports = nutritionArticles;
