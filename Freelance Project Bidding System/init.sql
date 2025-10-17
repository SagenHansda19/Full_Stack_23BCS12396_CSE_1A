-- Create custom ENUM types for roles and statuses to ensure data integrity
CREATE TYPE user_role AS ENUM ('EMPLOYER', 'FREELANCER');
CREATE TYPE project_status AS ENUM ('OPEN', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');
CREATE TYPE bid_status AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- Table: Users
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role user_role NOT NULL,
    joined_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: Projects
CREATE TABLE Projects (
    id SERIAL PRIMARY KEY,
    employer_id INTEGER NOT NULL REFERENCES Users(id),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    budget_range VARCHAR(100),
    deadline DATE,
    status project_status NOT NULL DEFAULT 'OPEN',
    created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: Bids
CREATE TABLE Bids (
    id SERIAL PRIMARY KEY,
    project_id INTEGER NOT NULL REFERENCES Projects(id),
    freelancer_id INTEGER NOT NULL REFERENCES Users(id),
    bid_amount DECIMAL(10, 2) NOT NULL,
    proposal_text TEXT NOT NULL,
    bid_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    status bid_status NOT NULL DEFAULT 'PENDING'
);

-- Table: Messages
CREATE TABLE Messages (
    id SERIAL PRIMARY KEY,
    sender_id INTEGER NOT NULL REFERENCES Users(id),
    receiver_id INTEGER NOT NULL REFERENCES Users(id),
    project_id INTEGER NOT NULL REFERENCES Projects(id),
    message_text TEXT NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add some indexes for faster lookups on foreign keys
CREATE INDEX ON Projects (employer_id);
CREATE INDEX ON Bids (project_id);
CREATE INDEX ON Bids (freelancer_id);
CREATE INDEX ON Messages (sender_id);
CREATE INDEX ON Messages (receiver_id);