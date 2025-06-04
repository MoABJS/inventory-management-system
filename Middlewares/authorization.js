import jwt from "jsonwebtoken";

const authorization = (req, res, next) => {
  try {
    const cookieName = "jwtToken";

    const cookie = req.cookies?.[cookieName];
    const authHeader = req.headers?.authorization;

    const accessToken =
      cookie ||
      (authHeader && authHeader.startsWith(`Bearer `)
        ? authHeader.split(" ")[1]
        : null);

    if (!accessToken) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized Access" });
    }

    const jwtUserToken = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

    if (!jwtUserToken || !jwtUserToken.id) {
      return res.json(401).json({ success: false, message: "Invalid token" });
    }

    console.log("Authorized, positive");
    next();
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default authorization;
