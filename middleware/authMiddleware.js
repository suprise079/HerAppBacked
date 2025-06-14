import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) return res.status(401).json({ message: "Authorization header is missing" });

  const token = authHeader?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Missing token" });

  const {
    data: { user },
    error
  } = await supabase.auth.getUser(token);

  if (error || !user) return res.status(401).json({ message: "Invalid or expired token" });

  req.user = user.identities[0]; // Attach user to request
  next();
};

export default authenticateUser;
