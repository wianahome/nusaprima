import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.warn("Peringatan: Supabase URL atau Key belum terpasang.")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ProposalItem = {
  id?: string;
  proposal_id?: string;
  category: string;
  description: string;
  fee_type: 'one_time' | 'monthly';
  price: number;
};

export type Proposal = {
  id?: string;
  proposal_number: string;
  client_name: string;
  client_company: string;
  client_email: string;
  client_phone: string;
  package_tier: 'Starter' | 'Growth' | 'Scale-Up';
  one_time_fee: number;
  monthly_retainer: number;
  status: 'Draft' | 'Sent' | 'Accepted' | 'Declined';
  valid_until: string;
  notes?: string;
  proposal_items?: ProposalItem[];
  created_at?: string;
};

export type InvoiceItem = {
  id?: string;
  invoice_id?: string;
  category: string;
  description: string;
  price: number;
};

export type Invoice = {
  id?: string;
  invoice_number: string;
  proposal_id?: string;
  client_name: string;
  client_company?: string;
  client_email?: string;
  invoice_date: string;
  due_date: string;
  one_time_fee: number;
  monthly_retainer: number;
  total_amount: number;
  status: 'Unpaid' | 'Paid' | 'Overdue' | 'Cancelled';
  payment_method?: string;
  notes?: string;
  invoice_items?: InvoiceItem[];
  created_at?: string;
};