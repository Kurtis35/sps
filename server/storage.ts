export interface IStorage {
  // Purely static frontend - no storage needed
}

export class MemStorage implements IStorage {}

export const storage = new MemStorage();
