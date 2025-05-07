import { InsertUser, User } from "@shared/schema";

// Extend the storage interface with the new methods
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private emails: Map<string, number>;
  private usernames: Map<string, number>;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.emails = new Map();
    this.usernames = new Map();
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const userId = this.emails.get(email.toLowerCase());
    if (!userId) return undefined;
    return this.users.get(userId);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const userId = this.usernames.get(username.toLowerCase());
    if (!userId) return undefined;
    return this.users.get(userId);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const registeredAt = new Date();
    
    const user: User = { 
      ...insertUser, 
      id,
      registeredAt
    };
    
    this.users.set(id, user);
    
    // Index by email for quick lookups
    if (user.email) {
      this.emails.set(user.email.toLowerCase(), id);
    }
    
    return user;
  }
}

export const storage = new MemStorage();
