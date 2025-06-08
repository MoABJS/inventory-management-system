const logoutUser = (req, res) => {
  try {
    const user = req.user;
    console.log("before", user);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "You are not signed In" });
    }
    res.clearCookie("jwtToken", {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
    res.user = null;
    console.log("after", res.user);
    return res.status(200).json({
      success: true,
      message: "Logged Out successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default logoutUser;
