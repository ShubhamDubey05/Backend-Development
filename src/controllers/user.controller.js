import { asyncHandler } from "../utils/asyncHandler";

const registerUser = asyncHandler(async (req, res, next) => {
  // Registration logic here
  res.status(201).json({ message: "User registered successfully" });
});

export { registerUser };