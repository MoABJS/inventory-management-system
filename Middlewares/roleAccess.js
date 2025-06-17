const roleAccess = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      const role = req.user.role;
      // console.log("role", role);
      // console.log("allowedRoles", allowedRoles);
      if (!allowedRoles.includes(role)) {
        return res.status(401).json({
          success: false,
          message: `This route is unauthorised for a ${role}`,
        });
      }

      next();
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  };
};

export default roleAccess;
