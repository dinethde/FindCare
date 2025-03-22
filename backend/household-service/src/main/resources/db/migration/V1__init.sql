-- 1) HOUSEHOLD
CREATE TABLE household (
                           household_id     BIGSERIAL PRIMARY KEY,
                           auth0_identifier VARCHAR(255),
                           use_for          VARCHAR(255),
                           name             VARCHAR(255),
                           username         VARCHAR(255),
                           email            VARCHAR(255),
                           preferred_language VARCHAR(100)
);

-- 2) NOK (Next of Kin), referencing household
CREATE TABLE nok (
                     nok_id         BIGSERIAL PRIMARY KEY,
                     nok_relationship VARCHAR(255),
                     household_id   BIGINT NOT NULL,
                     CONSTRAINT fk_nok_household
                         FOREIGN KEY (household_id)
                             REFERENCES household(household_id)
                             ON DELETE CASCADE
);

CREATE TABLE phone (
                       phone_id     BIGSERIAL PRIMARY KEY,
                       phone_number VARCHAR(50) NOT NULL,
                       household_id BIGINT NOT NULL,
                       CONSTRAINT fk_phone_household
                           FOREIGN KEY (household_id)
                               REFERENCES household(household_id)
                               ON DELETE CASCADE
);

-- Add missing contact table
CREATE TABLE contact (
                         contact_id   BIGSERIAL PRIMARY KEY,
                         email        VARCHAR(255)
);

-- 6) BRIDGING NOK ↔ Contact
--    Allows a NOK to have multiple contacts (or vice versa).
CREATE TABLE nok_contact (
                             nok_id     BIGINT NOT NULL,
                             contact_id BIGINT NOT NULL,
                             PRIMARY KEY (nok_id, contact_id),
                             CONSTRAINT fk_nok_contact_nok
                                 FOREIGN KEY (nok_id)
                                     REFERENCES nok(nok_id)
                                     ON DELETE CASCADE,
                             CONSTRAINT fk_nok_contact_contact
                                 FOREIGN KEY (contact_id)
                                     REFERENCES contact(contact_id)
                                     ON DELETE CASCADE
);

-- 7) ADDRESS (no direct FK to household or nok; bridging used)
CREATE TABLE address (
                         address_id BIGSERIAL PRIMARY KEY,
                         address    VARCHAR(255),
                         city       VARCHAR(100),
                         postalcode VARCHAR(50)
);

-- 8) BRIDGING Household ↔ Address
CREATE TABLE household_address (
                                   household_id BIGINT NOT NULL,
                                   address_id   BIGINT NOT NULL,
                                   PRIMARY KEY (household_id, address_id),
                                   CONSTRAINT fk_hh_addr_household
                                       FOREIGN KEY (household_id)
                                           REFERENCES household(household_id)
                                           ON DELETE CASCADE,
                                   CONSTRAINT fk_hh_addr_address
                                       FOREIGN KEY (address_id)
                                           REFERENCES address(address_id)
                                           ON DELETE CASCADE
);

-- 9) BRIDGING NOK ↔ Address
CREATE TABLE nok_address (
                             nok_id     BIGINT NOT NULL,
                             address_id BIGINT NOT NULL,
                             PRIMARY KEY (nok_id, address_id),
                             CONSTRAINT fk_nok_addr_nok
                                 FOREIGN KEY (nok_id)
                                     REFERENCES nok(nok_id)
                                     ON DELETE CASCADE,
                             CONSTRAINT fk_nok_addr_address
                                 FOREIGN KEY (address_id)
                                     REFERENCES address(address_id)
                                     ON DELETE CASCADE
);

-- 10) CARE_RECIPIENT, referencing household
--     Currently "one household can have only one patient," but
--     this design can be extended to 1:many if needed.
CREATE TABLE care_recipient (
                                care_recipient_id BIGSERIAL PRIMARY KEY,
                                f_name            VARCHAR(100) NOT NULL,
                                l_name            VARCHAR(100) NOT NULL,
                                dob               DATE,
                                age               INT,
                                gender            VARCHAR(20),
                                weight            NUMERIC(5,2),
                                height            NUMERIC(5,2),
                                about             TEXT,
                                image             TEXT,
                                household_id      BIGINT,
                                CONSTRAINT fk_cr_household
                                    FOREIGN KEY (household_id)
                                        REFERENCES household(household_id)
                                        ON DELETE CASCADE
);

-- 11) MEDICAL_RECORDS, referencing care_recipient
CREATE TABLE medical_records (
                                 medical_record_id  BIGSERIAL PRIMARY KEY,
                                 record_date        DATE,
                                 hospital           VARCHAR(100),
                                 notes              TEXT,
                                 medical_documents  TEXT,
                                 care_recipient_id  BIGINT NOT NULL,
                                 CONSTRAINT fk_medical_records_cr
                                     FOREIGN KEY (care_recipient_id)
                                         REFERENCES care_recipient(care_recipient_id)
                                         ON DELETE CASCADE
);

-- 12) HEALTH_INFO, referencing care_recipient
CREATE TABLE health_info (
                             health_info_id    BIGSERIAL PRIMARY KEY,
                             disease           VARCHAR(100),
                             disease_id        VARCHAR(50),
                             care_recipient_id BIGINT NOT NULL,
                             CONSTRAINT fk_health_info_cr
                                 FOREIGN KEY (care_recipient_id)
                                     REFERENCES care_recipient(care_recipient_id)
                                     ON DELETE CASCADE
);

-- 13) CARE_REQUIREMENTS (no direct FK to care_recipient, bridging used)
CREATE TABLE care_requirements (
                                   care_requirement_id BIGSERIAL PRIMARY KEY,
                                   requirement         VARCHAR(255)
);

-- 14) BRIDGE TABLE: care_recipient ↔ care_requirements (Many-to-Many)
CREATE TABLE care_recipient_care_requirements (
                                                  care_recipient_id    BIGINT NOT NULL,
                                                  care_requirement_id  BIGINT NOT NULL,
                                                  PRIMARY KEY (care_recipient_id, care_requirement_id),
                                                  CONSTRAINT fk_crcr_cr
                                                      FOREIGN KEY (care_recipient_id)
                                                          REFERENCES care_recipient(care_recipient_id)
                                                          ON DELETE CASCADE,
                                                  CONSTRAINT fk_crcr_req
                                                      FOREIGN KEY (care_requirement_id)
                                                          REFERENCES care_requirements(care_requirement_id)
                                                          ON DELETE CASCADE
);

-- 15) CAREGIVER_REQUIREMENTS
CREATE TABLE caregiver_requirements (
                                        caregiver_requirement_id BIGSERIAL PRIMARY KEY,
                                        requirement              VARCHAR(255)
);

-- 16) BRIDGE TABLE: care_recipient ↔ caregiver_requirements
CREATE TABLE care_recipient_caregiver_requirements (
                                                       care_recipient_id         BIGINT NOT NULL,
                                                       caregiver_requirement_id  BIGINT NOT NULL,
                                                       PRIMARY KEY (care_recipient_id, caregiver_requirement_id),
                                                       CONSTRAINT fk_cr_cgr_cr
                                                           FOREIGN KEY (care_recipient_id)
                                                               REFERENCES care_recipient(care_recipient_id)
                                                               ON DELETE CASCADE,
                                                       CONSTRAINT fk_cr_cgr_cgr
                                                           FOREIGN KEY (caregiver_requirement_id)
                                                               REFERENCES caregiver_requirements(caregiver_requirement_id)
                                                               ON DELETE CASCADE
);

-- 17) SPECIALIZATIONS
CREATE TABLE specializations (
                                 specialization_id BIGSERIAL PRIMARY KEY,
                                 specialization    VARCHAR(255)
);

-- 18) BRIDGE TABLE: care_recipient ↔ specializations
CREATE TABLE care_recipient_specializations (
                                                care_recipient_id  BIGINT NOT NULL,
                                                specialization_id  BIGINT NOT NULL,
                                                PRIMARY KEY (care_recipient_id, specialization_id),
                                                CONSTRAINT fk_cr_spec_cr
                                                    FOREIGN KEY (care_recipient_id)
                                                        REFERENCES care_recipient(care_recipient_id)
                                                        ON DELETE CASCADE,
                                                CONSTRAINT fk_cr_spec_spec
                                                    FOREIGN KEY (specialization_id)
                                                        REFERENCES specializations(specialization_id)
                                                        ON DELETE CASCADE
);

-- 19) SOFT_SKILLS
CREATE TABLE soft_skills (
                             soft_skill_id BIGSERIAL PRIMARY KEY,
                             soft_skill    VARCHAR(255)
);

-- 20) BRIDGE TABLE: care_recipient ↔ soft_skills
CREATE TABLE care_recipient_soft_skills (
                                            care_recipient_id BIGINT NOT NULL,
                                            soft_skill_id     BIGINT NOT NULL,
                                            PRIMARY KEY (care_recipient_id, soft_skill_id),
                                            CONSTRAINT fk_cr_ss_cr
                                                FOREIGN KEY (care_recipient_id)
                                                    REFERENCES care_recipient(care_recipient_id)
                                                    ON DELETE CASCADE,
                                            CONSTRAINT fk_cr_ss_ss
                                                FOREIGN KEY (soft_skill_id)
                                                    REFERENCES soft_skills(soft_skill_id)
                                                    ON DELETE CASCADE
);

-- 21) CARE_SCHEDULE
CREATE TABLE care_schedule (
                               schedule_id      BIGSERIAL PRIMARY KEY,
                               starting_date    DATE NOT NULL,
                               end_date         DATE,
                               care_recipient_id BIGINT NOT NULL,
                               CONSTRAINT fk_care_schedule_cr
                                   FOREIGN KEY (care_recipient_id)
                                       REFERENCES care_recipient(care_recipient_id)
                                       ON DELETE CASCADE
);

-- 22) SCHEDULED_DAYS
CREATE TABLE scheduled_days (
                                schedule_day_id BIGSERIAL PRIMARY KEY,
                                day_of_week     VARCHAR(20),
                                start_time      TIME,
                                end_time        TIME,
                                schedule_id     BIGINT NOT NULL,
                                CONSTRAINT fk_scheduled_days_sched
                                    FOREIGN KEY (schedule_id)
                                        REFERENCES care_schedule(schedule_id)
                                        ON DELETE CASCADE
);

-- 23) TASKS
--     schedule_day_id can be NULL to mean "every day."
CREATE TABLE tasks (
                       task_id            BIGSERIAL PRIMARY KEY,
                       schedule_day_id    BIGINT,
                       care_recipient_id  BIGINT NOT NULL,
                       task               TEXT,
                       created_at         TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       CONSTRAINT fk_tasks_scheduled_days
                           FOREIGN KEY (schedule_day_id)
                               REFERENCES scheduled_days(schedule_day_id)
                               ON DELETE SET NULL,
                       CONSTRAINT fk_tasks_care_recipient
                           FOREIGN KEY (care_recipient_id)
                               REFERENCES care_recipient(care_recipient_id)
                               ON DELETE CASCADE
);

-- 24) DESCRIPTIONS
--     Storing user-supplied descriptive text about care/caregiver requirements, etc.
CREATE TABLE descriptions (
                              description_id             BIGSERIAL PRIMARY KEY,
                              care_recipient_id          BIGINT NOT NULL,
                              care_requirement_desc      TEXT,
                              caregiver_requirement_desc TEXT,
    -- Add other text fields here if needed
                              CONSTRAINT fk_descriptions_cr
                                  FOREIGN KEY (care_recipient_id)
                                      REFERENCES care_recipient(care_recipient_id)
                                      ON DELETE CASCADE
);
