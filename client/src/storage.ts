
// Minimal storage implementation
export const storage = {
  async getUserByEmail(email: string) {
    console.log(`Looking up user by email: ${email}`);
    return null;
  },

  async createUser(userData: { fullName: string; email: string }) {
    console.log(`Creating user:`, userData);
    return {
      id: Date.now(),
      fullName: userData.fullName,
      email: userData.email,
      registeredAt: new Date(),
    };
  }
};
