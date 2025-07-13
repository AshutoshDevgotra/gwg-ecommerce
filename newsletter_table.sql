-- Create newsletter subscribers table
create table public.newsletter_subscribers (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  status text default 'active' check (status in ('active', 'unsubscribed')),
  subscribed_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unsubscribed_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create RLS policy for newsletter subscribers
create policy "Anyone can subscribe to newsletter" on public.newsletter_subscribers 
  for insert with check (true);

create policy "No one can read newsletter subscribers" on public.newsletter_subscribers 
  for select using (false);

-- Enable RLS
alter table public.newsletter_subscribers enable row level security;

-- Create index for email lookups
create index newsletter_subscribers_email_idx on public.newsletter_subscribers (email);

-- Create function to update updated_at timestamp
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

-- Create trigger to auto-update updated_at
create trigger update_newsletter_subscribers_updated_at 
  before update on public.newsletter_subscribers 
  for each row execute procedure public.update_updated_at_column();
