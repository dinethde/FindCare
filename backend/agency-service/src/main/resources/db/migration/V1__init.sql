-- V1__init.sql: Initial migration to create the "agency" table

-- ===== Create ENUM types first =====
CREATE TYPE gender_enum AS ENUM ('male', 'female', 'other');
CREATE TYPE payment_type_enum AS ENUM ('hourly', 'daily');
CREATE TYPE transaction_method_enum AS ENUM ('card', 'cash');
CREATE TYPE tier_enum AS ENUM ('basic', 'standard', 'premium');

-- ===== Household Reference Table =====
CREATE TABLE Household_Reference (
    household_ref_id SERIAL PRIMARY KEY,
    household_name VARCHAR(255)
);


-- ===== Agency Tables =====
-- ===== Agency Account Table =====
CREATE TABLE Agency_Account (
    agency_account_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    username VARCHAR(255) UNIQUE,
    mobile VARCHAR(20) UNIQUE,
    profile_img TEXT
);

-- Agency (primary table)
CREATE TABLE Agency (
    agency_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    location VARCHAR(255),
    total_clients INT,
    total_caregivers INT,
    active_caregivers INT,
    tagline VARCHAR(255),
    description VARCHAR(255),
    logo TEXT,
    cover_photo TEXT,
    profile_photo TEXT,
    avg_CSR DECIMAL(3,2),
    response_time INTEGER,
    tenant_id INT NOT NULL UNIQUE,
    agency_account_id INTEGER NOT NULL,
    FOREIGN KEY (agency_account_id) REFERENCES Agency_Account(agency_account_id) ON DELETE CASCADE
);

-- ===== Carerecipient Reference Table =====
CREATE TABLE Care_Recipient_Reference (
    care_recipient_ref_id SERIAL PRIMARY KEY,
    care_recipient_name VARCHAR(255),
    household_ref_id INT,
    FOREIGN KEY (household_ref_id) REFERENCES Household_Reference(household_ref_id) ON DELETE CASCADE
);

-- ===== Caregiver Tables =====
-- Create the Caregiver table with a gender column of type gender_enum.
CREATE TABLE Caregiver (
    caregiver_id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    f_name VARCHAR(255),
    m_name VARCHAR(255),
    l_name VARCHAR(255),
    NIC_Number VARCHAR(20) UNIQUE,
    gender gender_enum,
    age INTEGER,
    description TEXT,
    hired_date DATE,
    AVG_CSR DECIMAL(3,2),
    total_Clients INTEGER,
    agency_id INTEGER,
    FOREIGN KEY (agency_id) REFERENCES Agency(agency_id) ON DELETE CASCADE
);

-- ===== Rest of the tables =====
CREATE TABLE Caregiver_Schedule (
    caregiver_schedule_id SERIAL PRIMARY KEY,
    start_date DATE,
    end_date DATE,
    caregiver_id INTEGER NOT NULL,
    FOREIGN KEY (caregiver_id) REFERENCES Caregiver(caregiver_id) ON DELETE CASCADE
);

CREATE TABLE Caregiver_Schedule_Days (
    caregiver_schedule_day_id SERIAL PRIMARY KEY,
    day_of_week INTEGER,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    caregiver_schedule_id INTEGER NOT NULL,
    FOREIGN KEY (caregiver_schedule_id) REFERENCES Caregiver_Schedule(caregiver_schedule_id) ON DELETE CASCADE
);

CREATE TABLE Available_Work_Schedule (
    available_work_schedule_id SERIAL PRIMARY KEY,
    on_Call_Available BOOLEAN,
    caregiver_id INTEGER NOT NULL,
    FOREIGN KEY (caregiver_id) REFERENCES Caregiver(caregiver_id) ON DELETE CASCADE
);

CREATE TABLE Available_Work_Day (
    available_work_day_id SERIAL PRIMARY KEY,
    day_of_week NUMERIC,
    start_time TIME,
    end_time TIME,
    available_work_schedule_id INTEGER NOT NULL,
    FOREIGN KEY (available_work_schedule_id) REFERENCES Available_Work_Schedule(available_work_schedule_id) ON DELETE CASCADE
);

-- Dependent Tables
CREATE TABLE Caregiver_Account (
    caregiver_account_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    username VARCHAR(255) UNIQUE,
    mobile VARCHAR(20) UNIQUE,
    profile_img TEXT,
    mobile_app_status VARCHAR(50),
    caregiver_id INTEGER NOT NULL,
    FOREIGN KEY (caregiver_id) REFERENCES Caregiver(caregiver_id) ON DELETE CASCADE
);

CREATE TABLE Caregiver_Reviews (
    review_id SERIAL PRIMARY KEY,
    rate DECIMAL(10,2),
    review TEXT,
    household_ref_id INTEGER NOT NULL,
    caregiver_id INTEGER NOT NULL,
    FOREIGN KEY (household_ref_id) REFERENCES Household_Reference(household_ref_id),
    FOREIGN KEY (caregiver_id) REFERENCES Caregiver(caregiver_id) ON DELETE CASCADE
);

CREATE TABLE Education_Qualification (
    edu_qualification_id SERIAL PRIMARY KEY,
    edu_qualification VARCHAR(255),
    caregiver_id INTEGER NOT NULL,
    FOREIGN KEY (caregiver_id) REFERENCES Caregiver(caregiver_id) ON DELETE CASCADE
);

CREATE TABLE Professional_Qualification (
    professional_qualification_id SERIAL PRIMARY KEY,
    professional_qualification VARCHAR(255),
    caregiver_id INTEGER NOT NULL,
    FOREIGN KEY (caregiver_id) REFERENCES Caregiver(caregiver_id) ON DELETE CASCADE
);

CREATE TABLE Caregiver_Experience (
    caregiver_experience_id SERIAL PRIMARY KEY,
    years INTEGER,
    rate DECIMAL(10,2),
    past_clients INTEGER,
    caregiver_id INTEGER NOT NULL,
    FOREIGN KEY (caregiver_id) REFERENCES Caregiver(caregiver_id) ON DELETE CASCADE
);

CREATE TABLE Soft_Skills (
    soft_skills_id SERIAL PRIMARY KEY,
    soft_skill VARCHAR(255),
    caregiver_id INTEGER NOT NULL,
    FOREIGN KEY (caregiver_id) REFERENCES Caregiver(caregiver_id) ON DELETE CASCADE
);

CREATE TABLE Speciality (
    speciality_id SERIAL PRIMARY KEY,
    speciality_name VARCHAR(255),
    caregiver_id INTEGER NOT NULL,
    FOREIGN KEY (caregiver_id) REFERENCES Caregiver(caregiver_id) ON DELETE CASCADE
);

CREATE TABLE Security (
    security_id SERIAL PRIMARY KEY,
    verification_status BOOLEAN,
    police_report TEXT,
    last_visit DATE,
    background_status VARCHAR(50),
    criminal_records TEXT,
    last_img_update DATE,
    caregiver_id INTEGER NOT NULL,
    FOREIGN KEY (caregiver_id) REFERENCES Caregiver(caregiver_id) ON DELETE CASCADE
);

CREATE TABLE Caregiver_Shifts (
    shift_id SERIAL PRIMARY KEY,
    CSR DECIMAL(3,2),
    shift_success VARCHAR(50),
    caregiver_id INTEGER NOT NULL,
    care_recipient_ref_id INTEGER NOT NULL,
    FOREIGN KEY (caregiver_id) REFERENCES Caregiver(caregiver_id) ON DELETE CASCADE,
    FOREIGN KEY (care_recipient_ref_id) REFERENCES Care_Recipient_Reference(care_recipient_ref_id)
);

CREATE TABLE Caregiver_Notes (
    caregiver_note_id SERIAL PRIMARY KEY,
    time TIMESTAMP,
    content TEXT,
    caregiver_id INTEGER NOT NULL,
    agency_id INTEGER NOT NULL,
    FOREIGN KEY (caregiver_id) REFERENCES Caregiver(caregiver_id) ON DELETE CASCADE,
    FOREIGN KEY (agency_id) REFERENCES Agency(agency_id) ON DELETE CASCADE
);

CREATE TABLE Caregiver_Contact (
    contact_id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    caregiver_id INTEGER NOT NULL UNIQUE,
    FOREIGN KEY (caregiver_id) REFERENCES Caregiver(caregiver_id)
);

CREATE TABLE Caregiver_Address (
    address_id SERIAL PRIMARY KEY,
    address TEXT,
    city VARCHAR(255),
    postalCode VARCHAR(20),
    caregiver_id INTEGER NOT NULL,
    FOREIGN KEY (caregiver_id) REFERENCES Caregiver(caregiver_id)
);

CREATE TABLE Caregiver_Phone (
    phone_id SERIAL PRIMARY KEY,
    phone_number VARCHAR(20),
    contact_id INTEGER NOT NULL,
    FOREIGN KEY (contact_id) REFERENCES Caregiver_Contact(contact_id)
);

-- Table storing distinct key features
CREATE TABLE Key_Features (
    key_features_id SERIAL PRIMARY KEY,
    key_features TEXT NOT NULL
);

-- Bridge table to map agencies <-> key features (many-to-many)
CREATE TABLE Agency_Key_Features (
    agency_id INT NOT NULL,
    key_features_id INT NOT NULL,
    PRIMARY KEY (agency_id, key_features_id),
    FOREIGN KEY (agency_id) REFERENCES Agency(agency_id) ON DELETE CASCADE,
    FOREIGN KEY (key_features_id) REFERENCES Key_Features(key_features_id) ON DELETE CASCADE
);

-- General Features
CREATE TABLE General_Features (
    general_features_id SERIAL PRIMARY KEY,
    feature TEXT NOT NULL
);

-- Agency Bridging General Features 
CREATE TABLE Agency_General_Features (
    agency_id INT NOT NULL,
    general_features_id INT NOT NULL,
    PRIMARY KEY (agency_id, general_features_id),
    FOREIGN KEY (agency_id) REFERENCES Agency(agency_id) ON DELETE CASCADE,
    FOREIGN KEY (general_features_id) REFERENCES General_Features(general_features_id) ON DELETE CASCADE
);

-- Safety Policies
CREATE TABLE Safety_Policies (
    safety_policy_id SERIAL PRIMARY KEY,
    safety_policy TEXT NOT NULL
);

-- Agency Bridging Safety Policies 
CREATE TABLE Agency_Safety_Policies (
    agency_id INT NOT NULL,
    safety_policy_id INT NOT NULL,
    PRIMARY KEY (agency_id, safety_policy_id),
    FOREIGN KEY (agency_id) REFERENCES Agency(agency_id) ON DELETE CASCADE,
    FOREIGN KEY (safety_policy_id) REFERENCES Safety_Policies(safety_policy_id) ON DELETE CASCADE
);

-- Refund Policies
CREATE TABLE Refund_Policies (
    refund_policy_id SERIAL PRIMARY KEY,
    policy TEXT
);

-- Agency Bridging Refund Policies
CREATE TABLE Agency_Refund_Policies (
    agency_id INT NOT NULL,
    refund_policy_id INT NOT NULL,
    PRIMARY KEY (agency_id, refund_policy_id),
    FOREIGN KEY (agency_id) REFERENCES Agency(agency_id) ON DELETE CASCADE,
    FOREIGN KEY (refund_policy_id) REFERENCES Refund_Policies(refund_policy_id) ON DELETE CASCADE
);

-- Cancellation Policies
CREATE TABLE Cancellation_Policies (
    cancellation_policy_id SERIAL PRIMARY KEY,
    policy TEXT NOT NULL
);

--  Agency Bridging Cancellation Policies
CREATE TABLE Agency_Cancellation_Policies (
    agency_id INTEGER NOT NULL,
    cancellation_policy_id INTEGER NOT NULL,
    PRIMARY KEY (agency_id, cancellation_policy_id),
    FOREIGN KEY (agency_id) REFERENCES Agency(agency_id) ON DELETE CASCADE,
    FOREIGN KEY (cancellation_policy_id) REFERENCES Cancellation_Policies(cancellation_policy_id) ON DELETE CASCADE
);

-- Care Rules
CREATE TABLE Care_Rules (
    care_rule_id SERIAL PRIMARY KEY,
    care_rule TEXT NOT NULL
);

--  Agency Bridging Care Rules 
CREATE TABLE Agency_Care_Rules (
    agency_id INTEGER NOT NULL,
    care_rule_id INTEGER NOT NULL,
    PRIMARY KEY (agency_id, care_rule_id),
    FOREIGN KEY (agency_id) REFERENCES Agency(agency_id) ON DELETE CASCADE,
    FOREIGN KEY (care_rule_id) REFERENCES Care_Rules(care_rule_id) ON DELETE CASCADE
);

-- General Policies
CREATE TABLE General_Policies (
    general_policy_id SERIAL PRIMARY KEY,
    policy TEXT
);

--  Agency Bridging General Policies 
CREATE TABLE Agency_General_Policies (
    agency_id INT NOT NULL,
    general_policy_id INT NOT NULL,
    PRIMARY KEY (agency_id, general_policy_id),
    FOREIGN KEY (agency_id) REFERENCES Agency(agency_id) ON DELETE CASCADE,
    FOREIGN KEY (general_policy_id) REFERENCES General_Policies(general_policy_id) ON DELETE CASCADE
);

-- Awards
CREATE TABLE Awards (
    awards_id SERIAL PRIMARY KEY,
    awards_name VARCHAR(255),
    awards_year DATE,
    awarded_by VARCHAR(255)								    
);

--  Agency Bridging Awards
CREATE TABLE Agency_Awards (
    agency_id INT NOT NULL,
    awards_id INT NOT NULL,
    PRIMARY KEY (agency_id, awards_id),
    FOREIGN KEY (agency_id) REFERENCES Agency(agency_id) ON DELETE CASCADE,
    FOREIGN KEY (awards_id) REFERENCES Awards(awards_id) ON DELETE CASCADE
);

-- Agreement
CREATE TABLE Agreement (
    agreement_id SERIAL PRIMARY KEY,
    start_date DATE,
    end_date DATE,
    payment_type payment_type_enum,
    price DECIMAL,
    transaction_method transaction_method_enum,
    received_date DATE,
    issued_date DATE,
    household_submitted_date DATE,
    agency_accepted_date DATE,
    digital_receipt TEXT,
    agency_id INTEGER NOT NULL,
    care_recipient_ref_id INTEGER NOT NULL,
    caregiver_id INTEGER NOT NULL,
    FOREIGN KEY (agency_id) REFERENCES Agency(agency_id),
    FOREIGN KEY (care_recipient_ref_id) REFERENCES Care_Recipient_Reference(care_recipient_ref_id),
    FOREIGN KEY (caregiver_id) REFERENCES Caregiver(caregiver_id)
);

-- Care Schedule
CREATE TABLE Care_Schedule (
    care_schedule_id SERIAL PRIMARY KEY,
    starting_date DATE,
    end_date DATE,
    agreement_id INTEGER NOT NULL,
    FOREIGN KEY (agreement_id) REFERENCES Agreement(agreement_id)
);

-- care Scheduled Days
CREATE TABLE Care_Scheduled_Days (
    care_schedule_day_id SERIAL PRIMARY KEY,
    day_of_week INTEGER CHECK (day_of_week BETWEEN 1 AND 7),
    start_time TIME,
    end_time TIME,
    care_schedule_id INTEGER NOT NULL,
    FOREIGN KEY (care_schedule_id) REFERENCES care_Schedule(care_schedule_id)
);

-- Contact
CREATE TABLE Agency_Contact (
    contact_id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    agency_id INTEGER NOT NULL UNIQUE,
    FOREIGN KEY (agency_id) REFERENCES Agency(agency_id)
);

-- Phone
CREATE TABLE Agency_Phone (
    phone_id SERIAL PRIMARY KEY,
    phone_number VARCHAR(20),
    contact_id INT NOT NULL,
    FOREIGN KEY (contact_id) REFERENCES Agency_Contact(contact_id)
);

-- Address
CREATE TABLE Agency_Address (
    address_id SERIAL PRIMARY KEY,
    address VARCHAR(255),
    city VARCHAR(255),
    postal_code VARCHAR(20),
    agency_id INTEGER NOT NULL,
    FOREIGN KEY (agency_id) REFERENCES Agency(agency_id)
);

-- Special Condition
CREATE TABLE Special_Condition (
    condition_id SERIAL PRIMARY KEY,
    condition_description TEXT,
    condition_by TEXT,
    agreement_id INTEGER NOT NULL,
    FOREIGN KEY (agreement_id) REFERENCES Agreement(agreement_id)
);

-- Experience
CREATE TABLE Agency_Experiences (
    agency_experience_id SERIAL PRIMARY KEY,
    years INT,
    past_clients INT,
    agency_id INTEGER NOT NULL,
    FOREIGN KEY (agency_id) REFERENCES Agency(agency_id)
);

-- Review
CREATE TABLE Agency_Reviews (
    review_id SERIAL PRIMARY KEY,
    rate DECIMAL(10,2),
    review TEXT,
    household_ref_id INT NOT NULL,
    agency_id INT NOT NULL,
    FOREIGN KEY (household_ref_id) REFERENCES Household_Reference(household_ref_id),
    FOREIGN KEY (agency_id) REFERENCES Agency(agency_id) ON DELETE CASCADE
);

-- Task
CREATE TABLE Task (
    task_id SERIAL PRIMARY KEY,
    task VARCHAR(255),
    agreement_id INTEGER NOT NULL,
    FOREIGN KEY (agreement_id) REFERENCES Agreement(agreement_id)
);

-- Agency and Household 
CREATE TABLE Agency_Household (
    agency_id INT NOT NULL,
    household_ref_id INT NOT NULL,
    PRIMARY KEY (agency_id, household_ref_id),
    FOREIGN KEY (agency_id) REFERENCES Agency(agency_id) ON DELETE CASCADE,
    FOREIGN KEY (household_ref_id) REFERENCES Household_Reference(household_ref_id) ON DELETE CASCADE
);
