-- ==============================
--  V2__init.sql
--  Sample Data Inserts
-- ==============================

-----------------------------
-- 1) AGENCY ACCOUNTS
-----------------------------
-- Insert Agency_Account records in a separate transaction
INSERT INTO Agency_Account (auth0_identifier, email, tier)
VALUES 
('auth0_agency1', 'agency1@example.com', 'basic'),
('auth0_agency2', 'agency2@example.com', 'premium');

-- Force immediate commit to ensure the records are visible for foreign key constraints
COMMIT;

-----------------------------
-- 2) AGENCIES
-----------------------------
-- Start a new transaction for Agency inserts
BEGIN;
INSERT INTO Agency (
    name,
    location,
    total_clients,
    total_caregivers,
    active_caregivers,
    tagline,
    description,
    logo,
    cover_photo,
    profile_photo,
    avg_CSR,
    response_time,
    tenant_id,
    agency_account_id
)
VALUES
('Care Agency One', 'New York', 10, 3, 3, 'Your Health, Our Priority', 'We provide top-notch care services', 'logo_url', 'cover_photo_url', 'profile_photo_url', 4.50, 24, 101, 1),
('Care Agency Two', 'Los Angeles', 8, 3, 3, 'Excellence in Care', 'Trusted caregivers for your loved ones', 'logo2_url', 'cover_photo2_url', 'profile_photo2_url', 4.70, 48, 102, 2);
COMMIT;

-----------------------------
-- 3) AGENCY CONTACT
-----------------------------
-- Each Agency_Contact row must be unique per agency (agency_id is UNIQUE here).
BEGIN;
INSERT INTO Agency_Contact (email, agency_id)
VALUES
('contact1@agencyone.com', 1),
('contact2@agencytwo.com', 2);
COMMIT;

-----------------------------
-- 4) AGENCY PHONE
-----------------------------
-- References Agency_Contact(contact_id).
BEGIN;
INSERT INTO Agency_Phone (phone_number, contact_id)
VALUES
('123-456-7890', 1),
('987-654-3210', 2);
COMMIT;

-----------------------------
-- 5) AGENCY ADDRESS
-----------------------------
BEGIN;
INSERT INTO Agency_Address (address, city, postal_code, agency_id)
VALUES
('123 Main St', 'New York', '10001', 1),
('456 Sunset Blvd', 'Los Angeles', '90001', 2);
COMMIT;

-----------------------------
-- 6) AGENCY EXPERIENCES
-----------------------------
BEGIN;
INSERT INTO Agency_Experiences (years, past_clients, agency_id)
VALUES
(5, 50, 1),
(3, 30, 2);
COMMIT;

-----------------------------
-- 7) HOUSEHOLD REFERENCES
-----------------------------
BEGIN;
INSERT INTO Household_Reference (household_name)
VALUES
('Smith Family'),
('Johnson Household'),
('Williams Family'),
('Brown Household');
COMMIT;

-----------------------------
-- 8) CARE RECIPIENT REFERENCES
-----------------------------
BEGIN;
INSERT INTO Care_Recipient_Reference (care_recipient_name, household_ref_id)
VALUES
('Alice Smith', 1),
('Bob Johnson', 2),
('Charlie Williams', 3),
('Daisy Brown', 4);
COMMIT;

-----------------------------
-- 9) AGENCY-HOUSEHOLD BRIDGE
-----------------------------
-- Agency 1 <-> Household #1, #2
-- Agency 2 <-> Household #3, #4
BEGIN;
INSERT INTO Agency_Household (agency_id, household_ref_id)
VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4);
COMMIT;

-----------------------------
-- 10) KEY FEATURES
-----------------------------
BEGIN;
INSERT INTO Key_Features (key_features)
VALUES
('24/7 Support'),
('Trained Staff');
COMMIT;

-----------------------------
-- 11) AGENCY <-> KEY FEATURES
-----------------------------
BEGIN;
INSERT INTO Agency_Key_Features (agency_id, key_features_id)
VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2);
COMMIT;

-----------------------------
-- 12) GENERAL FEATURES
-----------------------------
BEGIN;
INSERT INTO General_Features (feature)
VALUES
('Flexible Schedules'),
('Affordable Rates');
COMMIT;

-----------------------------
-- 13) AGENCY <-> GENERAL FEATURES
-----------------------------
BEGIN;
INSERT INTO Agency_General_Features (agency_id, general_features_id)
VALUES
(1, 1),
(2, 2);
COMMIT;

-----------------------------
-- 14) SAFETY POLICIES
-----------------------------
BEGIN;
INSERT INTO Safety_Policies (safety_policy)
VALUES
('Strict Background Checks'),
('Regular Training');
COMMIT;

-----------------------------
-- 15) AGENCY <-> SAFETY POLICIES
-----------------------------
BEGIN;
INSERT INTO Agency_Safety_Policies (agency_id, safety_policy_id)
VALUES
(1, 1),
(2, 2);
COMMIT;

-----------------------------
-- 16) REFUND POLICIES
-----------------------------
BEGIN;
INSERT INTO Refund_Policies (policy)
VALUES
('Full refund within 14 days'),
('Partial refund after 14 days');
COMMIT;

-----------------------------
-- 17) AGENCY <-> REFUND POLICIES
-----------------------------
BEGIN;
INSERT INTO Agency_Refund_Policies (agency_id, refund_policy_id)
VALUES
(1, 1),
(2, 2);
COMMIT;

-----------------------------
-- 18) CANCELLATION POLICIES
-----------------------------
BEGIN;
INSERT INTO Cancellation_Policies (policy)
VALUES
('Cancel anytime without penalty'),
('24-hour notice required');
COMMIT;

-----------------------------
-- 19) AGENCY <-> CANCELLATION POLICIES
-----------------------------
BEGIN;
INSERT INTO Agency_Cancellation_Policies (agency_id, cancellation_policy_id)
VALUES
(1, 1),
(2, 2);
COMMIT;

-----------------------------
-- 20) CARE RULES
-----------------------------
BEGIN;
INSERT INTO Care_Rules (care_rule)
VALUES
('No smoking around care recipients'),
('Medication must be administered on schedule');
COMMIT;

-----------------------------
-- 21) AGENCY <-> CARE RULES
-----------------------------
BEGIN;
INSERT INTO Agency_Care_Rules (agency_id, care_rule_id)
VALUES
(1, 1),
(2, 2);
COMMIT;

-----------------------------
-- 22) GENERAL POLICIES
-----------------------------
BEGIN;
INSERT INTO General_Policies (policy)
VALUES
('Respect privacy'),
('Maintain confidentiality');
COMMIT;

-----------------------------
-- 23) AGENCY <-> GENERAL POLICIES
-----------------------------
BEGIN;
INSERT INTO Agency_General_Policies (agency_id, general_policy_id)
VALUES
(1, 1),
(2, 2);
COMMIT;

-----------------------------
-- 24) AWARDS
-----------------------------
BEGIN;
INSERT INTO Awards (awards_name, awards_year, awarded_by)
VALUES
('Best Caregiver Agency', '2020-01-01', 'National Care Association'),
('Outstanding Service', '2021-01-01', 'Caregivers United');
COMMIT;

-----------------------------
-- 25) AGENCY <-> AWARDS
-----------------------------
BEGIN;
INSERT INTO Agency_Awards (agency_id, awards_id)
VALUES
(1, 1),
(2, 2);
COMMIT;

--------------------------------------------------------------------------------
-- CAREGIVER-RELATED DATA (6 caregivers total, 3 for each agency)
--------------------------------------------------------------------------------

-- Caregiver insert code requires its own transaction too
BEGIN;
-----------------------------
-- 26) CAREGIVER ACCOUNTS
-----------------------------
INSERT INTO Caregiver_Account (unique_identifier, email, mobile_app_status)
VALUES
('cg1', 'cg1@example.com', 'active'),
('cg2', 'cg2@example.com', 'active'),
('cg3', 'cg3@example.com', 'inactive'),
('cg4', 'cg4@example.com', 'active'),
('cg5', 'cg5@example.com', 'active'),
('cg6', 'cg6@example.com', 'inactive');
COMMIT;

-- Start a new transaction for Caregivers that depend on Caregiver_Account
BEGIN;
-----------------------------
-- 27) CAREGIVERS
--     3 caregivers in Agency #1, 3 caregivers in Agency #2
-----------------------------
INSERT INTO Caregiver (
    username,
    f_name,
    m_name,
    l_name,
    NIC_Number,
    care_type,
    gender,
    age,
    description,
    hired_date,
    avg_CSR,
    total_Clients,
    profile_img,
    agency_id,
    caregiver_account_id
)
VALUES
('caregiver1', 'John', 'A', 'Doe', 'NIC123', 'senior', 'male', 30, 'Experienced caregiver', '2022-01-10', 4.50, 3, 'profile1.jpg', 1, 1),
('caregiver2', 'Mary', 'B', 'Smith', 'NIC124', 'child', 'female', 28, 'Skilled in elderly care', '2022-02-15', 4.20, 2, 'profile2.jpg', 1, 2),
('caregiver3', 'Alex', 'C', 'Brown', 'NIC125', 'senior', 'other', 35, 'Part-time caregiver', '2022-03-20', 3.80, 1, 'profile3.jpg', 1, 3),
('caregiver4', 'Emily', 'D', 'Johnson', 'NIC126', 'child', 'female', 40, 'Expert in dementia care', '2022-04-10', 4.70, 4, 'profile4.jpg', 2, 4),
('caregiver5', 'David', 'E', 'Lee', 'NIC127', 'senior', 'male', 32, 'Specializes in post-surgery care', '2022-05-01', 4.60, 3, 'profile5.jpg', 2, 5),
('caregiver6', 'Sophia', 'F', 'Wilson', 'NIC128', 'senior', 'female', 29, 'Weekend availability', '2022-06-12', 4.00, 2, 'profile6.jpg', 2, 6);
COMMIT;

-----------------------------
-- 28) CAREGIVER CONTACT
--     "caregiver_id" is UNIQUE in Caregiver_Contact, so 1 row per caregiver
-----------------------------
BEGIN;
INSERT INTO Caregiver_Contact (email, caregiver_id)
VALUES
('cg1_contact@example.com', 1),
('cg2_contact@example.com', 2),
('cg3_contact@example.com', 3),
('cg4_contact@example.com', 4),
('cg5_contact@example.com', 5),
('cg6_contact@example.com', 6);
COMMIT;

-----------------------------
-- 29) CAREGIVER ADDRESS
-----------------------------
BEGIN;
INSERT INTO Caregiver_Address (address, city, postalCode, caregiver_id)
VALUES
('123 Care St', 'New York', '10002', 1),
('456 Help Ave', 'New York', '10003', 2),
('789 Aid Rd', 'New York', '10004', 3),
('321 Support Ln', 'Los Angeles', '90002', 4),
('654 Assist Blvd', 'Los Angeles', '90003', 5),
('987 Serve Dr', 'Los Angeles', '90004', 6);
COMMIT;

-----------------------------
-- 30) CAREGIVER PHONE
--     Each phone references the corresponding Caregiver_Contact(contact_id)
-----------------------------
BEGIN;
INSERT INTO Caregiver_Phone (phone_number, contact_id)
VALUES
('111-111-1111', 1),
('222-222-2222', 2),
('333-333-3333', 3),
('444-444-4444', 4),
('555-555-5555', 5),
('666-666-6666', 6);
COMMIT;

-----------------------------
-- 31) EDUCATION QUALIFICATIONS
-----------------------------
BEGIN;
INSERT INTO Education_Qualification (edu_qualification, caregiver_id)
VALUES
('High School Diploma', 1),
('Nursing Assistant Certificate', 2),
('High School Diploma', 3),
('Associate in Nursing', 4),
('High School Diploma', 5),
('Bachelor in Healthcare', 6);
COMMIT;

-----------------------------
-- 32) PROFESSIONAL QUALIFICATIONS
-----------------------------
BEGIN;
INSERT INTO Professional_Qualification (professional_qualification, caregiver_id)
VALUES
('CPR Certified', 1),
('First Aid Certified', 2),
('CNA License', 3),
('CPR and First Aid', 4),
('CNA License', 5),
('CPR Certified', 6);
COMMIT;

-----------------------------
-- 33) CAREGIVER EXPERIENCE
-----------------------------
BEGIN;
INSERT INTO Caregiver_Experience (years, rate, past_clients, caregiver_id)
VALUES
(2, 15.00, 5, 1),
(3, 18.00, 8, 2),
(1, 12.00, 3, 3),
(5, 20.00, 10, 4),
(4, 19.50, 9, 5),
(2, 16.00, 6, 6);
COMMIT;

-----------------------------
-- 34) SOFT SKILLS
-----------------------------
BEGIN;
INSERT INTO Soft_Skills (soft_skill, caregiver_id)
VALUES
('Compassion', 1),
('Patience', 2),
('Good Communication', 3),
('Empathy', 4),
('Time Management', 5),
('Active Listening', 6);
COMMIT;

-----------------------------
-- 35) SPECIALTIES
-----------------------------
BEGIN;
INSERT INTO Speciality (speciality_name, caregiver_id)
VALUES
('Elderly Care', 1),
('Dementia Care', 2),
('Disability Support', 3),
('Hospice Care', 4),
('Post-surgery Rehab', 5),
('Palliative Care', 6);
COMMIT;

-----------------------------
-- 36) SECURITY
-----------------------------
BEGIN;
INSERT INTO Security (
    verification_status,
    police_report,
    last_visit,
    background_status,
    criminal_records,
    last_img_update,
    caregiver_id
)
VALUES
(true,  'police_report1.pdf', '2023-01-01', 'clear',         NULL,           '2023-02-01', 1),
(true,  'police_report2.pdf', '2023-01-05', 'clear',         NULL,           '2023-02-05', 2),
(true,  'police_report3.pdf', '2023-01-10', 'clear',         NULL,           '2023-02-10', 3),
(true,  'police_report4.pdf', '2023-01-15', 'clear',         NULL,           '2023-02-15', 4),
(true,  'police_report5.pdf', '2023-01-20', 'clear',         NULL,           '2023-02-20', 5),
(false, 'police_report6.pdf', '2023-01-25', 'under review',  'minor offense','2023-02-25', 6);
COMMIT;

-----------------------------
-- 37) AVAILABLE WORK SCHEDULE
-----------------------------
BEGIN;
INSERT INTO Available_Work_Schedule (on_Call_Available, caregiver_id)
VALUES
(true, 1),
(false, 2),
(true, 3),
(true, 4),
(false, 5),
(true, 6);
COMMIT;

-----------------------------
-- 38) AVAILABLE WORK DAY
--     One entry per caregiver's available schedule
-----------------------------
BEGIN;
INSERT INTO Available_Work_Day (day_of_week, start_time, end_time, available_work_schedule_id)
VALUES
(1, '08:00', '16:00', 1),
(2, '09:00', '17:00', 2),
(3, '10:00', '14:00', 3),
(4, '09:00', '13:00', 4),
(5, '08:00', '12:00', 5),
(6, '08:00', '16:00', 6);
COMMIT;

-----------------------------
-- 39) CAREGIVER SCHEDULE
-----------------------------
BEGIN;
INSERT INTO Caregiver_Schedule (start_date, end_date, caregiver_id)
VALUES
('2023-03-01', '2023-04-01', 1),
('2023-03-05', '2023-05-01', 2),
('2023-03-10', '2023-04-10', 3),
('2023-04-01', '2023-06-01', 4),
('2023-04-05', '2023-05-05', 5),
('2023-04-10', '2023-05-10', 6);
COMMIT;

-----------------------------
-- 40) CAREGIVER SCHEDULE DAYS
--     2 days each for demonstration
-----------------------------
BEGIN;
INSERT INTO Caregiver_Schedule_Days (day_of_week, start_time, end_time, caregiver_schedule_id)
VALUES
(1, '08:00', '12:00', 1),
(3, '12:00', '16:00', 1),
(2, '09:00', '13:00', 2),
(4, '13:00', '17:00', 2),
(1, '10:00', '14:00', 3),
(5, '14:00', '18:00', 3),
(2, '08:00', '12:00', 4),
(3, '12:00', '16:00', 4),
(4, '09:00', '13:00', 5),
(6, '13:00', '17:00', 5),
(1, '10:00', '14:00', 6),
(7, '14:00', '18:00', 6);
COMMIT;

--------------------------------------------------------------------------------
-- AGREEMENTS (Only 4 caregivers have clients)
-- Caregivers #1, #2 => Agency 1
-- Caregivers #4, #5 => Agency 2
--------------------------------------------------------------------------------

-----------------------------
-- 41) AGREEMENTS
--     Link (agency_id, care_recipient_ref_id, caregiver_id)
-----------------------------
-- Caregiver #1 with household #1 (Agency #1)
BEGIN;
INSERT INTO Agreement (
    start_date,
    end_date,
    payment_type,
    price,
    transaction_method,
    received_date,
    issued_date,
    household_submitted_date,
    agency_accepted_date,
    digital_receipt,
    agency_id,
    care_recipient_ref_id,
    caregiver_id
)
VALUES
('2023-03-01', '2023-06-01', 'hourly', 500.00, 'cash',
 '2023-02-25', '2023-02-28', '2023-02-26', '2023-02-28',
 'receipt1.pdf', 1, 1, 1);
COMMIT;

-- Caregiver #2 with household #2 (Agency #1)
BEGIN;
INSERT INTO Agreement (
    start_date,
    end_date,
    payment_type,
    price,
    transaction_method,
    received_date,
    issued_date,
    household_submitted_date,
    agency_accepted_date,
    digital_receipt,
    agency_id,
    care_recipient_ref_id,
    caregiver_id
)
VALUES
('2023-04-01', '2023-07-01', 'daily', 1500.00, 'card',
 '2023-03-25', '2023-03-28', '2023-03-26', '2023-03-28',
 'receipt2.pdf', 1, 2, 2);
COMMIT;

-- Caregiver #4 with household #3 (Agency #2)
BEGIN;
INSERT INTO Agreement (
    start_date,
    end_date,
    payment_type,
    price,
    transaction_method,
    received_date,
    issued_date,
    household_submitted_date,
    agency_accepted_date,
    digital_receipt,
    agency_id,
    care_recipient_ref_id,
    caregiver_id
)
VALUES
('2023-05-01', '2023-08-01', 'hourly', 600.00, 'cash',
 '2023-04-25', '2023-04-28', '2023-04-26', '2023-04-28',
 'receipt3.pdf', 2, 3, 4);
COMMIT;

-- Caregiver #5 with household #4 (Agency #2)
BEGIN;
INSERT INTO Agreement (
    start_date,
    end_date,
    payment_type,
    price,
    transaction_method,
    received_date,
    issued_date,
    household_submitted_date,
    agency_accepted_date,
    digital_receipt,
    agency_id,
    care_recipient_ref_id,
    caregiver_id
)
VALUES
('2023-06-01', '2023-09-01', 'daily', 1800.00, 'card',
 '2023-05-25', '2023-05-28', '2023-05-26', '2023-05-28',
 'receipt4.pdf', 2, 4, 5);
COMMIT;

-----------------------------
-- 42) SPECIAL CONDITIONS
-----------------------------
BEGIN;
INSERT INTO Special_Condition (
    condition_description,
    condition_by,
    agreement_id
)
VALUES
('Client requires wheelchair assistance', 'Household', 1),
('Daily medication reminders needed',     'Household', 2),
('Care recipient has dietary restrictions','Household', 3),
('Frequent doctor visits scheduled',      'Household', 4);
COMMIT;

-----------------------------
-- 43) CARE SCHEDULE (for each Agreement)
-----------------------------
BEGIN;
INSERT INTO Care_Schedule (starting_date, end_date, agreement_id)
VALUES
('2023-03-01', '2023-06-01', 1),
('2023-04-01', '2023-07-01', 2),
('2023-05-01', '2023-08-01', 3),
('2023-06-01', '2023-09-01', 4);
COMMIT;

-----------------------------
-- 44) CARE SCHEDULED DAYS
-----------------------------
BEGIN;
INSERT INTO Care_Scheduled_Days (
    day_of_week,
    start_time,
    end_time,
    care_schedule_id
)
VALUES
(1, '08:00', '12:00', 1),
(3, '12:00', '16:00', 1),

(2, '09:00', '17:00', 2),
(4, '10:00', '14:00', 2),

(1, '08:00', '14:00', 3),
(5, '14:00', '18:00', 3),

(2, '09:00', '13:00', 4),
(6, '13:00', '17:00', 4);
COMMIT;

-----------------------------
-- 45) TASKS (per Agreement)
-----------------------------
BEGIN;
INSERT INTO Task (task, agreement_id)
VALUES
('Morning Exercise', 1),
('Medication Reminder', 1),

('Bathing Assistance', 2),
('Meal Preparation', 2),

('Physical Therapy', 3),
('Doctor Appointment Coordination', 3),

('Medication Purchase', 4),
('Nutrition Monitoring', 4);
COMMIT;

-----------------------------
-- 46) CAREGIVER SHIFTS
--     Only caregivers with clients (1,2,4,5) referencing their recipients
-----------------------------
BEGIN;
INSERT INTO Caregiver_Shifts (
    CSR,
    shift_success,
    caregiver_id,
    care_recipient_ref_id
)
VALUES
(4.5, 'completed', 1, 1),
(4.2, 'completed', 2, 2),
(4.7, 'completed', 4, 3),
(4.6, 'completed', 5, 4);
COMMIT;

-----------------------------
-- 47) CAREGIVER NOTES
--     Each caregiver can have notes referencing the correct agency
--     Caregivers 1,2,3 -> Agency 1; Caregivers 4,5,6 -> Agency 2
-----------------------------
BEGIN;
INSERT INTO Caregiver_Notes (
    time,
    content,
    caregiver_id,
    agency_id
)
VALUES
('2023-03-02 10:00:00', 'Note for caregiver1', 1, 1),
('2023-03-03 11:00:00', 'Note for caregiver2', 2, 1),
('2023-03-04 12:00:00', 'Note for caregiver3', 3, 1),
('2023-04-02 10:00:00', 'Note for caregiver4', 4, 2),
('2023-04-03 11:00:00', 'Note for caregiver5', 5, 2),
('2023-04-04 12:00:00', 'Note for caregiver6', 6, 2);
COMMIT;

-----------------------------
-- 48) CAREGIVER REVIEWS
--     For the 4 caregivers who actually have household clients
-----------------------------
BEGIN;
INSERT INTO Caregiver_Reviews (
    rate,
    review,
    household_ref_id,
    caregiver_id
)
VALUES
(5.0, 'Excellent service!',          1, 1),
(4.5, 'Very caring and attentive',   2, 2),
(4.8, 'Went above and beyond',       3, 4),
(4.6, 'Friendly and reliable',       4, 5);
COMMIT;

-----------------------------
-- 49) AGENCY REVIEWS
--     Households #1,2 belong to Agency #1; Households #3,4 belong to Agency #2
-----------------------------
-- Agency #1 reviews
BEGIN;
INSERT INTO Agency_Reviews (
    rate,
    review,
    household_ref_id,
    agency_id
)
VALUES
(4.8, 'Agency1 is great!',      1, 1),
(4.7, 'Satisfied with Agency1', 2, 1);
COMMIT;

-- Agency #2 reviews
BEGIN;
INSERT INTO Agency_Reviews (
    rate,
    review,
    household_ref_id,
    agency_id
)
VALUES
(4.9, 'Agency2 is outstanding!', 3, 2),
(4.6, 'Very professional staff', 4, 2);
COMMIT;
