-- Enable RLS (Row Level Security)
alter table auth.users enable row level security;

-- Create custom users table
create table public.users (
  id uuid references auth.users not null primary key,
  email text unique not null,
  full_name text,
  avatar_url text,
  provider text default 'email',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create products table
create table public.products (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  description text not null,
  price decimal(10,2) not null,
  original_price decimal(10,2) not null,
  category text not null,
  image_url text not null,
  in_stock boolean default true,
  features text[] default array[]::text[],
  sizes text[] default array[]::text[],
  colors text[] default array[]::text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create cart_items table
create table public.cart_items (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.users not null,
  product_id uuid references public.products not null,
  quantity integer not null default 1,
  size text not null,
  color text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, product_id, size, color)
);

-- Create orders table
create table public.orders (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.users not null,
  razorpay_order_id text unique not null,
  razorpay_payment_id text,
  amount decimal(10,2) not null,
  currency text default 'INR',
  status text default 'created' check (status in ('created', 'paid', 'failed', 'cancelled')),
  shipping_address jsonb not null,
  items jsonb not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create RLS policies
create policy "Users can read own data" on public.users for select using (auth.uid() = id);
create policy "Users can update own data" on public.users for update using (auth.uid() = id);

create policy "Anyone can read products" on public.products for select to authenticated using (true);

create policy "Users can manage own cart" on public.cart_items for all using (auth.uid() = user_id);

create policy "Users can read own orders" on public.orders for select using (auth.uid() = user_id);
create policy "Users can create own orders" on public.orders for insert with check (auth.uid() = user_id);
create policy "Users can update own orders" on public.orders for update using (auth.uid() = user_id);

-- Enable RLS on all tables
alter table public.users enable row level security;
alter table public.products enable row level security;
alter table public.cart_items enable row level security;
alter table public.orders enable row level security;

-- Create function to handle user creation
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, email, full_name, avatar_url, provider)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    new.raw_user_meta_data->>'avatar_url',
    coalesce(new.raw_app_meta_data->>'provider', 'email')
  );
  return new;
end;
$$ language plpgsql security definer;

-- Create trigger for new user creation
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Insert sample products
insert into public.products (name, description, price, original_price, category, image_url, features, sizes, colors) values
('Premium Tank Top', 'Our Premium Tank Top is designed for ultimate comfort and performance.', 29.99, 39.99, 'tops', '/product-1.svg', array['Moisture-wicking', 'Quick-dry', 'Breathable'], array['XS', 'S', 'M', 'L', 'XL'], array['Black', 'White', 'Gray']),
('Compression Leggings', 'High-performance compression leggings for maximum support.', 49.99, 69.99, 'bottoms', '/product-2.svg', array['Compression fit', 'High-waist', 'Flexible'], array['XS', 'S', 'M', 'L', 'XL'], array['Black', 'Navy', 'Charcoal']),
('Sports Bra Pro', 'Maximum support and comfort for intense workouts.', 34.99, 44.99, 'tops', '/product-3.svg', array['High support', 'Moisture-wicking', 'Comfortable'], array['XS', 'S', 'M', 'L', 'XL'], array['Black', 'White', 'Pink']),
('Training Shorts', 'Lightweight training shorts with quick-dry technology.', 24.99, 34.99, 'bottoms', '/product-4.svg', array['Quick-dry', 'Lightweight', 'Flexible'], array['XS', 'S', 'M', 'L', 'XL'], array['Black', 'Gray', 'Navy']);
