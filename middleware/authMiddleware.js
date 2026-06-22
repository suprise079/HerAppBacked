const { createClient } = require("@supabase/supabase-js");
const ws = require("ws");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY, {
  realtime: { transport: ws },
});

exports.authenticateUser = async (req, res, next) => {
  if (process.env.MOCK_MODE === "true") {
    req.user = { id: "mock-user-001", email: "demo@herapp.com" };
    return next();
  }

  const authHeader = req.headers["authorization"];

  if (!authHeader) return res.status(401).json({ message: "Authorization header is missing" });

  const token = authHeader?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Missing token" });

  const {
    data: { user },
    error
  } = await supabase.auth.getUser(token);

  if (error || !user) return res.status(401).json({ message: "Invalid or expired token" });

  req.user = { id: user.id, email: user.email }; // Attach user to request
  next();
};
