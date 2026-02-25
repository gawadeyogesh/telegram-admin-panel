export interface User {
  id: number;
  tg_id: string;
  username: string | null;
  first_name: string | null;
  balance: number;
  registration_date: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  description: string;
  status: 'active' | 'inactive';
}

export const mockUsers: User[] = [
  {
    id: 1,
    tg_id: "8404951558",
    username: null,
    first_name: "Yogesh",
    balance: 0.0,
    registration_date: "2026-02-22T17:55:00Z",
  },
  {
    id: 2,
    tg_id: "12696641386",
    username: "Missleman12",
    first_name: "Mr. Gavade",
    balance: 0.0,
    registration_date: "2026-02-22T17:58:00Z",
  },
  {
    id: 3,
    tg_id: "6904943422",
    username: "Ram6222",
    first_name: "Ram",
    balance: 0.0,
    registration_date: "2026-02-22T18:02:00Z",
  },
];

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "ChatGPT Plus 1 Month",
    price: 499,
    stock: 45,
    category: "AI",
    description: "Access to ChatGPT Plus for 30 days",
    status: "active",
  },
  {
    id: 2,
    name: "Azure Credits $100",
    price: 799,
    stock: 12,
    category: "Cloud",
    description: "Prepaid credits for Microsoft Azure",
    status: "active",
  },
  {
    id: 3,
    name: "VPS 2GB RAM",
    price: 1499,
    stock: 8,
    category: "Hosting",
    description: "Basic VPS with 2GB RAM, 50GB SSD",
    status: "active",
  },
];

export const mockStats = {
  totalUsers: 3,
  totalProducts: 15,
  totalOrders: 42,
  pendingOrders: 7,
  totalRevenue: 28450,
};