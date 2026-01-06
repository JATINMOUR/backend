export const generateAI = async (review, rating) => {
  return {
    response: "Thank you for your feedback!",
    summary: "User shared experience with rating " + rating,
    action: rating <= 2 ? "Immediate follow-up required" : "No action needed"
  };
};
