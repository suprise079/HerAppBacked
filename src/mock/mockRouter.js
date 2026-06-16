const express = require("express");
const router = express.Router();
const {
  mockUser,
  mockBlogs,
  mockRecipes,
  mockExercises,
  mockExerciseProgress,
  mockEvents,
  mockCart,
  mockCartItems,
  mockActivities
} = require("./mockData");

// ── User ──────────────────────────────────────────────────────────────────────
router.post("/user/create", (req, res) => {
  res.status(201).json({ message: "User created successfully!\nPlease confirm your email to continue!" });
});

router.get("/user/getUser", (req, res) => {
  res.json(mockUser);
});

// ── Blog ──────────────────────────────────────────────────────────────────────
router.get("/blog", (req, res) => {
  res.json(mockBlogs);
});

router.post("/blog", (req, res) => {
  res.status(201).json({ ...req.body, _id: "blog-new-001", createdAt: new Date() });
});

router.get("/blog/category/:category", (req, res) => {
  const filtered = mockBlogs.filter(
    (b) => b.category.toLowerCase() === req.params.category.toLowerCase()
  );
  res.json(filtered);
});

router.get("/blog/search/:keyword", (req, res) => {
  const kw = req.params.keyword.toLowerCase();
  const filtered = mockBlogs.filter(
    (b) => b.title.toLowerCase().includes(kw) || b.content.toLowerCase().includes(kw)
  );
  res.json(filtered);
});

router.get("/blog/:id", (req, res) => {
  const blog = mockBlogs.find((b) => b._id === req.params.id) || mockBlogs[0];
  res.json(blog);
});

router.put("/blog/:id", (req, res) => {
  res.json({ ...mockBlogs[0], ...req.body, _id: req.params.id });
});

router.delete("/blog/:id", (req, res) => {
  res.status(204).send();
});

// ── Recipes ───────────────────────────────────────────────────────────────────
router.get("/recipes", (req, res) => {
  res.json(mockRecipes);
});

router.post("/recipes", (req, res) => {
  res.status(201).json({ ...req.body, _id: "recipe-new-001", rating: 0, approved: false });
});

router.get("/recipes/category/:category", (req, res) => {
  const filtered = mockRecipes.filter(
    (r) => r.mealType.map((t) => t.toLowerCase()).includes(req.params.category.toLowerCase())
  );
  res.json(filtered.length ? filtered : mockRecipes);
});

router.get("/recipes/search/:keyword", (req, res) => {
  const kw = req.params.keyword.toLowerCase();
  const filtered = mockRecipes.filter(
    (r) => r.recipeName.toLowerCase().includes(kw) || (r.description || "").toLowerCase().includes(kw)
  );
  res.json(filtered.length ? filtered : mockRecipes);
});

router.get("/recipes/:id", (req, res) => {
  const recipe = mockRecipes.find((r) => r._id === req.params.id) || mockRecipes[0];
  res.json(recipe);
});

router.put("/recipes/:id", (req, res) => {
  res.json({ ...mockRecipes[0], ...req.body, _id: req.params.id });
});

router.delete("/recipes/:id", (req, res) => {
  res.status(204).send();
});

// ── Exercises ─────────────────────────────────────────────────────────────────
router.get("/excercises", (req, res) => {
  res.json(mockExercises);
});

router.get("/excercises/progress", (req, res) => {
  res.json(mockExerciseProgress);
});

router.post("/excercises/progress", (req, res) => {
  res.status(201).json({ ...mockExerciseProgress, ...req.body });
});

// ── BMI ───────────────────────────────────────────────────────────────────────
router.get("/BMI/:id", (req, res) => {
  res.json({
    _id: mockUser._id,
    bmi: mockUser.bmi,
    weight: mockUser.weight,
    height: mockUser.height
  });
});

// ── Water ─────────────────────────────────────────────────────────────────────
router.get("/water/:id", (req, res) => {
  res.json({ _id: mockUser._id, water: mockUser.water });
});

// ── Events ────────────────────────────────────────────────────────────────────
router.get("/events", (req, res) => {
  res.json(mockEvents);
});

router.post("/events", (req, res) => {
  res.status(201).json({ ...req.body, _id: "evt-new-001", createdAt: new Date() });
});

router.get("/events/category/:category", (req, res) => {
  res.json(mockEvents);
});

router.get("/events/:id", (req, res) => {
  const event = mockEvents.find((e) => e._id === req.params.id) || mockEvents[0];
  res.json(event);
});

router.put("/events/:id", (req, res) => {
  res.json({ ...mockEvents[0], ...req.body, _id: req.params.id });
});

router.delete("/events/:id", (req, res) => {
  res.status(204).send();
});

// ── Activity ──────────────────────────────────────────────────────────────────
router.post("/activity", (req, res) => {
  res.status(201).json({ ...req.body, _id: "act-new-001", date: new Date() });
});

router.get("/activity/:activityType/:filter/:id", (req, res) => {
  const filtered = mockActivities.filter(
    (a) => a.activityType === req.params.activityType
  );
  res.json(filtered.length ? filtered : mockActivities);
});

// ── Cart ──────────────────────────────────────────────────────────────────────
router.post("/cart", (req, res) => {
  res.status(201).json({ ...mockCart, ...req.body });
});

router.get("/cart/items", (req, res) => {
  res.json(mockCartItems);
});

router.post("/cart/items", (req, res) => {
  res.status(201).json({ ...req.body, _id: "item-new-001", isBought: false, isDeleted: false });
});

router.put("/cart/items/:id", (req, res) => {
  const item = mockCartItems.find((i) => i._id === req.params.id) || mockCartItems[0];
  res.json({ ...item, ...req.body });
});

// ── Root health check ─────────────────────────────────────────────────────────
router.get("/", (req, res) => {
  res.json({ status: "UP", mode: "mock" });
});

module.exports = router;
