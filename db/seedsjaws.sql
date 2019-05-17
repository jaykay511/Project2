USE r48w73ggi8b8i85s;

INSERT INTO Doctors (first_name, last_name, specialty, createdAt, updatedAt) VALUES ("Jane", "Doe", "Primary Care", NOW(), NOW()); 
INSERT INTO Doctors (first_name, last_name, specialty, createdAt, updatedAt) VALUES ("Abraham", "Lincoln", "Primary Care", NOW(), NOW());
INSERT INTO Doctors (first_name, last_name, specialty, createdAt, updatedAt) VALUES ("Kobe", "Bryant", "Primary Care", NOW(), NOW());

-- INSERT INTO Patients (first_name, last_name, address, phone, email, createdAt, updatedAt) VALUES ("Jenn", "Woo", "1234 Main St.", "555-555-5555", "jw@email.com", NOW(), NOW());
-- INSERT INTO Patients (first_name, last_name, address, phone, email, createdAt, updatedAt) VALUES ("Cindy", "Nikolai", "2358 Daisy St.", "777-868-5555", "cn@email.com", NOW(), NOW());
-- INSERT INTO Patients (first_name, last_name, address, phone, email, createdAt, updatedAt) VALUES ("Jake", "Huang", "3485 Airplane St.", "888-252-5555", "jj@email.com", NOW(), NOW());

INSERT INTO TimeSlots (timeslot, DoctorId, PatientId, createdAt, updatedAt) VALUES (NOW(), 1, 1, NOW(), NOW());

INSERT INTO Prescriptions (name, createdAt, updatedAt) VALUES ("Omeprazole", NOW(), NOW());
INSERT INTO Prescriptions (name, createdAt, updatedAt) VALUES ("Amoxicillin", NOW(), NOW());
INSERT INTO Prescriptions (name, createdAt, updatedAt) VALUES ("Ibuprofen", NOW(), NOW());

INSERT INTO PrescriptionsPatients (createdAt, updatedAt, PatientId, PrescriptionId) VALUES (NOW(), NOW(), 1, 1);
INSERT INTO PrescriptionsPatients (createdAt, updatedAt, PatientId, PrescriptionId) VALUES (NOW(), NOW(), 1, 2);