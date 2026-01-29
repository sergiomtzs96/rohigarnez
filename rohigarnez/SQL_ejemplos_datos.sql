-- ROHIGARNEZ - Ejemplos de datos para Supabase
-- Insertar datos en las tablas creadas
-- Nota: Los UUIDs aquí son de ejemplo, Supabase generará los reales

-- ============================================================
-- 1. CUSTOMERS - Clientes/Urbanizaciones
-- ============================================================
INSERT INTO customers (name, email, phone, company, address, city, postal_code, region, coordinates, notes) 
VALUES 
  ('Urbanización Bellavista', 'admin@bellavista.es', '+34 915 123 456', 'Bellavista S.L.', 'Calle Principal, 45', 'Sevilla', '41007', 'Andalucía', '40.34767870154099, -4.024039427803234', 'Comunidad de vecinos, más de 150 viviendas'),
  ('Comunidad Residencial Las Flores', 'info@lasflores.es', '+34 914 567 890', 'Las Flores Urbanización', 'Avenida del Parque, 23', 'Madrid', '28005', 'Madrid', '40.41731, -3.69467', 'Piscina comunitaria, 80 viviendas'),
  ('Hotel Rural Agua Azul', 'reservas@aguaazul.com', '+34 952 234 567', 'Agua Azul S.L.', 'Carretera Nacional, 5km', 'Marbella', '29600', 'Andalucía', '36.51149, -4.77375', 'Piscina de hotel con zona de spa'),
  ('Residencia Privada García', 'garcia@email.com', '+34 933 456 789', 'Familia García', 'Villa Privada, 12', 'Barcelona', '08002', 'Cataluña', '41.38879, 2.16901', 'Vivienda privada con piscina 8x4');

-- ============================================================
-- 2. TEAM MEMBERS - Personal y Técnicos
-- ============================================================
INSERT INTO team_members (first_name, last_name, email, phone, role, specialization, certifications, years_experience, hire_date)
VALUES
  ('Juan', 'Martínez', 'juan.martinez@rohigarnez.es', '+34 686 53 16 94', 'Technician', 'Maintenance', '["Certificado Técnico Piscinas", "Manejo químicos", "Reparaciones básicas"]', 15, '2009-03-15'),
  ('María', 'López', 'maria.lopez@rohigarnez.es', '+34 686 53 16 95', 'Lifeguard', 'Lifeguard', '["Socorrista profesional", "Primeros auxilios", "Salvamento acuático"]', 8, '2016-06-01'),
  ('Carlos', 'Rodríguez', 'carlos.rodriguez@rohigarnez.es', '+34 686 53 16 96', 'Technician', 'Repair', '["Reparaciones equipos", "Bombas y filtros", "Electricidad piscinas"]', 12, '2012-01-10'),
  ('Ana', 'Fernández', 'ana.fernandez@rohigarnez.es', '+34 686 53 16 97', 'Supervisor', 'Installation', '["Instalación sistemas", "Diseño piscinas", "Dirección técnica"]', 18, '2006-09-20'),
  ('Pedro', 'González', 'pedro.gonzalez@rohigarnez.es', '+34 686 53 16 98', 'Manager', 'Maintenance', '["Gestión de contratos", "Supervisión de equipo"]', 20, '2004-01-01');

-- ============================================================
-- 3. SERVICES - Servicios Ofrecidos
-- ============================================================
INSERT INTO services (name, description, category, icon, slug)
VALUES
  ('Limpieza y Aspirado', 'Limpieza completa del vaso, fondo y paredes', 'Maintenance', 'Droplet', 'limpieza-aspirado'),
  ('Análisis Químico', 'Control de pH, cloro y otros parámetros del agua', 'Maintenance', 'Beaker', 'analisis-quimico'),
  ('Limpieza de Filtros', 'Mantenimiento y limpieza del sistema de filtración', 'Maintenance', 'Filter', 'limpieza-filtros'),
  ('Reparación de Fugas', 'Detección y reparación de fugas en tuberías', 'Repair', 'Wrench', 'reparacion-fugas'),
  ('Detección de Fugas', 'Inspección profesional para localizar fugas', 'Testing', 'Zap', 'deteccion-fugas'),
  ('Prueba de Presión', 'Test de presión en tuberías y sistemas', 'Testing', 'Gauge', 'prueba-presion'),
  ('Reparación de Grietas', 'Reparación de grietas en estructura de piscina', 'Repair', 'AlertCircle', 'reparacion-grietas'),
  ('Cambio de Arena Filtro', 'Reemplazo de arena en filtros', 'Maintenance', 'Package', 'cambio-arena-filtro'),
  ('Instalación Clorador Salino', 'Instalación de sistema de cloración por sal', 'Installation', 'Zap', 'instalacion-clorador'),
  ('Instalación Bomba Calor', 'Instalación de bomba de calor para climatización', 'Installation', 'Flame', 'instalacion-bomba-calor'),
  ('Instalación Cobertor Piscina', 'Instalación de lonas y cobertores', 'Installation', 'Layout', 'instalacion-cobertor'),
  ('Construcción Piscina', 'Construcción completa de piscinas', 'Installation', 'Home', 'construccion-piscina'),
  ('Vigilancia - Socorrista', 'Servicio de socorrista cualificado', 'Maintenance', 'Eye', 'vigilancia-socorrista'),
  ('Primeros Auxilios', 'Atención de emergencias y primeros auxilios', 'Maintenance', 'Heart', 'primeros-auxilios');

-- ============================================================
-- 4. SERVICE PACKAGES - Paquetes de Servicios
-- ============================================================
INSERT INTO service_packages (name, description, subtitle, price_min, price_period, is_recommended, compliance)
VALUES
  ('Sin Socorrista', 
   'Mantenimiento especializado para piscinas pequeñas sin necesidad de vigilancia profesional', 
   'Piscinas de profundidad ≤ 1,5m', 
   220, '/mes', false, 'Cumple RD 742/2013'),
  
  ('Con Socorrista', 
   'Servicio completo incluyendo socorrista titulado y vigilancia profesional', 
   'Piscinas de profundidad > 1,5m', 
   580, '/mes', true, 'Cumple toda la normativa'),
  
  ('Premium Integral', 
   'Solución integral con equipo completo, gestión avanzada y servicio 24/7', 
   'Gestión completa todo incluido', 
   850, '/mes', false, 'Excelencia normativa'),
  
  ('Reparación Básica', 
   'Diagnóstico y reparación de averías comunes', 
   'Servicio a demanda', 
   150, '/visita', false, 'Garantía 1 año'),
  
  ('Rehabilitación Completa', 
   'Restauración integral de piscina con renovación de sistemas', 
   'Proyecto personalizado', 
   null, 'presupuesto', false, 'Garantía 5 años');

-- ============================================================
-- 5. PACKAGE FEATURES - Características de Paquetes
-- ============================================================
INSERT INTO package_features (package_id, feature, order_index)
VALUES
  ((SELECT id FROM service_packages WHERE name = 'Sin Socorrista'), 'Control químico diario reforzado', 1),
  ((SELECT id FROM service_packages WHERE name = 'Sin Socorrista'), 'Limpieza diaria en temporada alta', 2),
  ((SELECT id FROM service_packages WHERE name = 'Sin Socorrista'), 'Registros oficiales completos', 3),
  ((SELECT id FROM service_packages WHERE name = 'Sin Socorrista'), 'Control de temperatura continuo', 4),
  ((SELECT id FROM service_packages WHERE name = 'Sin Socorrista'), 'Informes semanales', 5),
  ((SELECT id FROM service_packages WHERE name = 'Sin Socorrista'), 'Cumplimiento normativo garantizado', 6),
  
  ((SELECT id FROM service_packages WHERE name = 'Con Socorrista'), 'Socorrista titulado en horario de apertura', 1),
  ((SELECT id FROM service_packages WHERE name = 'Con Socorrista'), 'Control químico automatizado', 2),
  ((SELECT id FROM service_packages WHERE name = 'Con Socorrista'), 'Limpieza y mantenimiento diario', 3),
  ((SELECT id FROM service_packages WHERE name = 'Con Socorrista'), 'Primeros auxilios certificados', 4),
  ((SELECT id FROM service_packages WHERE name = 'Con Socorrista'), 'Control de aforo y seguridad', 5),
  ((SELECT id FROM service_packages WHERE name = 'Con Socorrista'), 'Registros oficiales digitalizados', 6),
  
  ((SELECT id FROM service_packages WHERE name = 'Premium Integral'), 'Equipo de socorristas (2+ personas)', 1),
  ((SELECT id FROM service_packages WHERE name = 'Premium Integral'), 'Sistemas de control automatizados', 2),
  ((SELECT id FROM service_packages WHERE name = 'Premium Integral'), 'Mantenimiento preventivo semanal', 3),
  ((SELECT id FROM service_packages WHERE name = 'Premium Integral'), 'Gestión de químicos y productos', 4),
  ((SELECT id FROM service_packages WHERE name = 'Premium Integral'), 'Asesoramiento legal continuo', 5),
  ((SELECT id FROM service_packages WHERE name = 'Premium Integral'), 'Servicio 24/7 todo el año', 6);

-- ============================================================
-- 6. POOLS - Piscinas/Propiedades
-- ============================================================
INSERT INTO pools (customer_id, name, address, city, pool_type, depth_m, volume_m3, dimensions, equipment, construction_date, last_renovation, notes)
VALUES
  ((SELECT id FROM customers WHERE name = 'Urbanización Bellavista'), 
   'Piscina Principal Bellavista', 
   'Calle Principal, 45', 
   'Sevilla', 
   'Community', 
   1.8, 
   240, 
   '20m x 12m x 1.8m', 
   '["Bomba filtración 20cv", "Filtro de arena 1000mm", "Skimmer automático", "Bomba calor 12kW", "Clorador salino"]', 
   '2008-06-15', 
   '2020-03-10', 
   'Piscina comunitaria con zona infantil'),

  ((SELECT id FROM customers WHERE name = 'Comunidad Residencial Las Flores'), 
   'Piscina Las Flores', 
   'Avenida del Parque, 23', 
   'Madrid', 
   'Community', 
   1.5, 
   150, 
   '15m x 10m x 1.5m', 
   '["Bomba filtración 15cv", "Filtro de arena 800mm", "Limpiador automático"]', 
   '2015-07-01', 
   '2022-05-20', 
   'Piscina comunitaria de zona residencial'),

  ((SELECT id FROM customers WHERE name = 'Hotel Rural Agua Azul'), 
   'Piscina Hotel Agua Azul', 
   'Carretera Nacional, 5km', 
   'Marbella', 
   'Commercial', 
   2.0, 
   320, 
   '16m x 10m x 2.0m', 
   '["Bomba filtración 25cv", "Filtro cartucho", "Spa jets", "Bomba calor 15kW", "Sistema automatizado"]', 
   '2010-04-01', 
   '2021-09-15', 
   'Piscina de hotel con zona de hidroterapia'),

  ((SELECT id FROM customers WHERE name = 'Residencia Privada García'), 
   'Piscina Villa García', 
   'Villa Privada, 12', 
   'Barcelona', 
   'Residential', 
   1.4, 
   45, 
   '8m x 4m x 1.4m', 
   '["Bomba filtración 5cv", "Filtro de cartucho", "Limpiador manual"]', 
   '2018-05-10', 
   '2023-06-01', 
   'Piscina privada residencial');

-- ============================================================
-- 7. CONTRACTS - Contratos
-- ============================================================
INSERT INTO contracts (customer_id, pool_id, package_id, contract_number, status, start_date, end_date, renewal_date, lifeguard_required, lifeguard_count, price_monthly, price_annual, payment_method, payment_day, terms_accepted, signed_at)
VALUES
  ((SELECT id FROM customers WHERE name = 'Urbanización Bellavista'), 
   (SELECT id FROM pools WHERE name = 'Piscina Principal Bellavista'), 
   (SELECT id FROM service_packages WHERE name = 'Con Socorrista'),
   'ROHIG-001-2024', 
   'Active', 
   '2024-01-15', 
   null, 
   '2025-01-15', 
   true, 
   2, 
   580, 
   6960, 
   'Bank transfer', 
   15, 
   true, 
   '2023-12-20 10:30:00'),

  ((SELECT id FROM customers WHERE name = 'Comunidad Residencial Las Flores'), 
   (SELECT id FROM pools WHERE name = 'Piscina Las Flores'), 
   (SELECT id FROM service_packages WHERE name = 'Sin Socorrista'),
   'ROHIG-002-2024', 
   'Active', 
   '2024-03-01', 
   null, 
   '2025-03-01', 
   false, 
   0, 
   220, 
   2640, 
   'Bank transfer', 
   1, 
   true, 
   '2024-02-15 14:00:00'),

  ((SELECT id FROM customers WHERE name = 'Hotel Rural Agua Azul'), 
   (SELECT id FROM pools WHERE name = 'Piscina Hotel Agua Azul'), 
   (SELECT id FROM service_packages WHERE name = 'Premium Integral'),
   'ROHIG-003-2024', 
   'Active', 
   '2024-01-01', 
   null, 
   '2025-01-01', 
   true, 
   3, 
   850, 
   10200, 
   'Bank transfer', 
   5, 
   true, 
   '2023-11-30 09:00:00'),

  ((SELECT id FROM customers WHERE name = 'Residencia Privada García'), 
   (SELECT id FROM pools WHERE name = 'Piscina Villa García'), 
   (SELECT id FROM service_packages WHERE name = 'Sin Socorrista'),
   'ROHIG-004-2024', 
   'Paused', 
   '2023-06-01', 
   '2024-09-30', 
   null, 
   false, 
   0, 
   150, 
   1800, 
   'Card', 
   10, 
   true, 
   '2023-05-20 11:00:00');

-- ============================================================
-- 8. CONTRACT SERVICES - Servicios Incluidos en Contrato
-- ============================================================
INSERT INTO contract_services (contract_id, service_id, frequency, included, additional_cost)
VALUES
  ((SELECT id FROM contracts WHERE contract_number = 'ROHIG-001-2024'), 
   (SELECT id FROM services WHERE name = 'Limpieza y Aspirado'), 
   'Daily', true, 0),
  ((SELECT id FROM contracts WHERE contract_number = 'ROHIG-001-2024'), 
   (SELECT id FROM services WHERE name = 'Análisis Químico'), 
   'Daily', true, 0),
  ((SELECT id FROM contracts WHERE contract_number = 'ROHIG-001-2024'), 
   (SELECT id FROM services WHERE name = 'Vigilancia - Socorrista'), 
   'Daily', true, 0),
  ((SELECT id FROM contracts WHERE contract_number = 'ROHIG-001-2024'), 
   (SELECT id FROM services WHERE name = 'Limpieza de Filtros'), 
   'Weekly', true, 0),

  ((SELECT id FROM contracts WHERE contract_number = 'ROHIG-002-2024'), 
   (SELECT id FROM services WHERE name = 'Limpieza y Aspirado'), 
   'Weekly', true, 0),
  ((SELECT id FROM contracts WHERE contract_number = 'ROHIG-002-2024'), 
   (SELECT id FROM services WHERE name = 'Análisis Químico'), 
   'Weekly', true, 0),
  ((SELECT id FROM contracts WHERE contract_number = 'ROHIG-002-2024'), 
   (SELECT id FROM services WHERE name = 'Limpieza de Filtros'), 
   'Monthly', true, 0),

  ((SELECT id FROM contracts WHERE contract_number = 'ROHIG-003-2024'), 
   (SELECT id FROM services WHERE name = 'Limpieza y Aspirado'), 
   'Daily', true, 0),
  ((SELECT id FROM contracts WHERE contract_number = 'ROHIG-003-2024'), 
   (SELECT id FROM services WHERE name = 'Análisis Químico'), 
   'Daily', true, 0),
  ((SELECT id FROM contracts WHERE contract_number = 'ROHIG-003-2024'), 
   (SELECT id FROM services WHERE name = 'Vigilancia - Socorrista'), 
   'Daily', true, 0),
  ((SELECT id FROM contracts WHERE contract_number = 'ROHIG-003-2024'), 
   (SELECT id FROM services WHERE name = 'Limpieza de Filtros'), 
   'Weekly', true, 0),
  ((SELECT id FROM contracts WHERE contract_number = 'ROHIG-003-2024'), 
   (SELECT id FROM services WHERE name = 'Primeros Auxilios'), 
   'Daily', true, 0);

-- ============================================================
-- 9. MAINTENANCE LOGS - Registros de Mantenimiento
-- ============================================================
INSERT INTO maintenance_logs (contract_id, pool_id, service_id, technician_id, scheduled_date, completed_date, status, water_ph, water_chlorine, water_temperature, water_clarity, chemical_products_used, equipment_checked, work_performed, hours_worked, notes)
VALUES
  ((SELECT id FROM contracts WHERE contract_number = 'ROHIG-001-2024'),
   (SELECT id FROM pools WHERE name = 'Piscina Principal Bellavista'),
   (SELECT id FROM services WHERE name = 'Análisis Químico'),
   (SELECT id FROM team_members WHERE first_name = 'Juan'),
   '2024-01-15',
   '2024-01-15',
   'Completed',
   7.2,
   1.5,
   25.5,
   'Clear',
   '["Cloro líquido", "pH menos", "Estabilizador"]',
   '["Skimmer", "Bomba filtración", "Manómetro filtro"]',
   'Control químico diario, aspirado completo, cepillado de paredes, limpieza de skimmers',
   2.5,
   'Parámetros dentro de lo normal, piscina en perfecto estado'),
   
  ((SELECT id FROM contracts WHERE contract_number = 'ROHIG-002-2024'),
   (SELECT id FROM pools WHERE name = 'Piscina Las Flores'),
   (SELECT id FROM services WHERE name = 'Limpieza y Aspirado'),
   (SELECT id FROM team_members WHERE first_name = 'Carlos'),
   '2024-03-08',
   '2024-03-08',
   'Completed',
   7.1,
   1.3,
   22.0,
   'Clear',
   '["Cloro granulado"]',
   '["Filtro", "Bomba", "Tuberías"]',
   'Limpieza del vaso, aspirado, cepillado, limpieza de filtros',
   3.0,
   'Revisión general: todo funciona correctamente'),
   
  ((SELECT id FROM contracts WHERE contract_number = 'ROHIG-003-2024'),
   (SELECT id FROM pools WHERE name = 'Piscina Hotel Agua Azul'),
   (SELECT id FROM services WHERE name = 'Análisis Químico'),
   (SELECT id FROM team_members WHERE first_name = 'Ana'),
   '2024-01-16',
   '2024-01-16',
   'Completed',
   7.3,
   1.6,
   26.0,
   'Clear',
   '["Cloro", "pH más", "Test reactivos"]',
   '["Sistema automatizado", "Sensores", "Bombas calor"]',
   'Control químico exhaustivo, calibración de sensores, revisión spa',
   3.5,
   'Sistema automatizado funcionando perfectamente');

-- ============================================================
-- 10. REPAIRS - Reparaciones
-- ============================================================
INSERT INTO repairs (pool_id, customer_id, reported_date, issue_type, severity, description, status, completion_date, technician_id, repair_method, materials_used, cost, warranty_months)
VALUES
  ((SELECT id FROM pools WHERE name = 'Piscina Principal Bellavista'),
   (SELECT id FROM customers WHERE name = 'Urbanización Bellavista'),
   '2024-01-10',
   'Leak',
   'High',
   'Fuga en tubería de retorno principal',
   'Completed',
   '2024-01-12',
   (SELECT id FROM team_members WHERE first_name = 'Carlos'),
   'Cambio de sección de tubería con conexión PVC',
   '["Tubería PVC 75mm", "Conexiones", "Sellante",  "Abrazaderas"]',
   450.00,
   12),

  ((SELECT id FROM pools WHERE name = 'Piscina Las Flores'),
   (SELECT id FROM customers WHERE name = 'Comunidad Residencial Las Flores'),
   '2024-02-05',
   'Equipment',
   'Medium',
   'Bomba de filtración con ruidos anormales',
   'Completed',
   '2024-02-08',
   (SELECT id FROM team_members WHERE first_name = 'Carlos'),
   'Cambio de rodamientos y sellos',
   '["Rodamientos", "Sellos mecánicos", "Grasa")']',
   320.00,
   6),

  ((SELECT id FROM pools WHERE name = 'Piscina Villa García'),
   (SELECT id FROM customers WHERE name = 'Residencia Privada García'),
   '2024-01-20',
   'Crack',
   'Low',
   'Microgrieta pequeña en pared',
   'Completed',
   '2024-01-22',
   (SELECT id FROM team_members WHERE first_name = 'Juan'),
   'Reparación con resina epoxi',
   '["Resina epoxi", "Tela de vidrio", "Sellador"]',
   150.00,
   24);

-- ============================================================
-- 11. CONTACT SUBMISSIONS - Consultas de Contacto
-- ============================================================
INSERT INTO contact_submissions (name, email, phone, company, reference, service, message, status)
VALUES
  ('Javier Ruiz', 'javier@example.com', '+34 912 345 678', 'Residencial Nueva Esperanza', 'Recomendación de cliente', 'Mantenimiento sin socorrista', 'Interesado en contratar servicio de mantenimiento para piscina comunitaria de 15x8m', 'Responded'),
  
  ('Isabel Martín', 'isabel@hotelbeach.com', '+34 956 234 567', 'Hotel Beach Resort', 'Google', 'Servicios de reparación', 'Tenemos un problema de fuga en la piscina exterior, necesitamos servicio de emergencia', 'New'),
  
  ('Fernando López', 'fernando@gmail.com', '+34 933 567 890', null, 'Directo', 'Construcción de piscina', 'Nos gustaría construir una piscina en casa, ¿cuál sería el presupuesto aproximado?', 'New');

-- ============================================================
-- 12. QUOTES - Presupuestos
-- ============================================================
INSERT INTO quotes (customer_id, contact_submission_id, quote_number, description, services_quoted, total_amount, validity_days, valid_until, status, notes)
VALUES
  ((SELECT id FROM customers WHERE name = 'Residencia Privada García'),
   (SELECT id FROM contact_submissions WHERE name = 'Javier Ruiz'),
   'QUOTE-001-2024',
   'Presupuesto mantenimiento anual piscina comunitaria',
   '[{"service": "Limpieza y aspirado", "frequency": "semanal", "price": 60}, {"service": "Análisis químico", "frequency": "semanal", "price": 40}, {"service": "Limpieza filtros", "frequency": "mensual", "price": 80}]',
   2640.00,
   30,
   '2024-02-15',
   'Sent',
   'Contrato por 12 meses');

-- ============================================================
-- 13. PROJECTS - Galería/Proyectos
-- ============================================================
INSERT INTO projects (customer_id, pool_id, title, description, challenge, solution, results, status, start_date, completion_date, featured, testimonial, customer_name, customer_role, customer_rating)
VALUES
  ((SELECT id FROM customers WHERE name = 'Urbanización Bellavista'),
   (SELECT id FROM pools WHERE name = 'Piscina Principal Bellavista'),
   'Mantenimiento Anual Residencial Bellavista',
   'Gestión completa del mantenimiento de piscina comunitaria con más de 150 viviendas',
   'El cliente requería un servicio de mantenimiento confiable que garantizara agua cristalina y sistemas funcionando correctamente durante todo el año',
   'Implementamos un plan de mantenimiento preventivo con visitas programadas, análisis químico continuo mediante sonda digital y limpieza automática con robot de última generación',
   'Renovación completa finalizada según cronograma, cliente completamente satisfecho, mejora significativa en calidad del agua, sistema optimizado y eficiente',
   'Completed',
   '2023-06-01',
   '2024-01-31',
   true,
   'Excelente servicio, muy profesionales y puntuales. Recomendado!',
   'Presidente Comunidad',
   'Bellavista Admin',
   5.0);

-- ============================================================
-- 14. INVOICES - Facturas
-- ============================================================
INSERT INTO invoices (contract_id, customer_id, invoice_number, issue_date, due_date, amount, description, paid_amount, status, payment_date, payment_method)
VALUES
  ((SELECT id FROM contracts WHERE contract_number = 'ROHIG-001-2024'),
   (SELECT id FROM customers WHERE name = 'Urbanización Bellavista'),
   'INV-001-2024',
   '2024-01-15',
   '2024-02-15',
   580.00,
   'Mantenimiento enero 2024 - Socorrista + Mantenimiento',
   580.00,
   'Paid',
   '2024-02-10',
   'Bank transfer'),

  ((SELECT id FROM contracts WHERE contract_number = 'ROHIG-002-2024'),
   (SELECT id FROM customers WHERE name = 'Comunidad Residencial Las Flores'),
   'INV-002-2024',
   '2024-03-01',
   '2024-04-01',
   220.00,
   'Mantenimiento marzo 2024',
   220.00,
   'Paid',
   '2024-03-15',
   'Bank transfer'),

  ((SELECT id FROM contracts WHERE contract_number = 'ROHIG-003-2024'),
   (SELECT id FROM customers WHERE name = 'Hotel Rural Agua Azul'),
   'INV-003-2024',
   '2024-01-05',
   '2024-02-05',
   850.00,
   'Mantenimiento enero 2024 - Premium Integral',
   0.00,
   'Overdue',
   null,
   'Bank transfer');

-- ============================================================
-- 15. CHEMICALS INVENTORY - Inventario de Químicos
-- ============================================================
INSERT INTO chemicals_inventory (product_name, product_type, brand, quantity_current, quantity_unit, quantity_minimum, cost_per_unit, supplier, expiry_date, location)
VALUES
  ('Cloro Líquido 12%', 'Chlorine', 'Aquachim', 500, 'L', 100, 2.50, 'Químicos García S.L.', '2025-06-30', 'Almacén principal'),
  ('Cloro Granulado', 'Chlorine', 'Bayrol', 250, 'kg', 50, 8.00, 'Piscina Plus', '2025-12-31', 'Almacén principal'),
  ('pH Menos (ácido muriático)', 'pH adjuster', 'Aquachim', 200, 'L', 50, 1.80, 'Químicos García S.L.', '2025-06-30', 'Almacén principal'),
  ('pH Más (Carbonato sódico)', 'pH adjuster', 'Bayrol', 150, 'kg', 30, 3.50, 'Piscina Plus', '2026-01-31', 'Almacén principal'),
  ('Estabilizador (Cianurato)', 'Stabilizer', 'Aquachim', 100, 'kg', 20, 6.00, 'Químicos García S.L.', '2025-12-31', 'Almacén principal'),
  ('Algaecida', 'Algaecide', 'Bayrol', 80, 'L', 20, 12.00, 'Piscina Plus', '2025-06-30', 'Almacén principal'),
  ('Test kit reactivos', 'Test kit', 'Lamotte', 50, 'units', 10, 45.00, 'Distribuidor técnico', '2025-03-31', 'Oficina');

-- ============================================================
-- 16. COMPLIANCE STANDARDS - Normativas
-- ============================================================
INSERT INTO compliance_standards (code, title, description, region, requirements, last_updated)
VALUES
  ('RD 742/2013', 
   'Criterios técnico-sanitarios de piscinas',
   'Regulación española sobre requisitos técnicos y sanitarios para instalaciones de piscinas',
   'Spain',
   '[
      "Cloro libre residual 0.5-1.5 mg/L",
      "pH entre 7.2-7.6",
      "Temperatura: mínimo 24°C",
      "Turbidez: máximo 1 UNF",
      "Cambio total de agua: mínimo cada 10 años",
      "Filtración continua durante horario de apertura",
      "Registro de parámetros diarios obligatorio",
      "Socorrista profesional si profundidad > 1.5m"
   ]',
   '2023-01-01'),
   
  ('Normativa CE 1107/2009',
   'Productos fitosanitarios - Biocidas',
   'Regulación sobre productos químicos y desinfectantes para piscinas',
   'EU',
   '[
      "Homologación oficial de productos",
      "Fichas de seguridad requeridas",
      "Almacenamiento en lugar ventilado",
      "Prohibición de ciertos productos obsoletos",
      "Trazabilidad de productos"
   ]',
   '2022-06-15');

-- ============================================================
-- 17. COMPANY SETTINGS - Configuración del Sistema
-- ============================================================
INSERT INTO company_settings (setting_key, setting_value, description, setting_type)
VALUES
  ('company_name', 'ROHIGARNEZ S.L.', 'Nombre de la empresa', 'string'),
  ('company_phone', '+34 686 53 16 94', 'Teléfono principal', 'string'),
  ('company_email', 'slnpiscinas22@gmail.com', 'Email principal', 'string'),
  ('company_address', 'C/ Santa Bárbara, 6', 'Dirección sede', 'string'),
  ('company_city', 'Sevilla La Nueva', 'Ciudad sede', 'string'),
  ('company_postal_code', '28609', 'Código postal', 'string'),
  ('company_tax_id', 'ES-B12345678', 'NIF/CIF de la empresa', 'string'),
  ('default_invoice_terms', 30, 'Días para pagar factura por defecto', 'number'),
  ('invoice_prefix', 'INV', 'Prefijo para facturas', 'string'),
  ('quote_validity_days', 30, 'Días de validez por defecto para presupuestos', 'number'),
  ('quote_prefix', 'QUOTE', 'Prefijo para presupuestos', 'string'),
  ('contract_prefix', 'ROHIG', 'Prefijo para contratos', 'string'),
  ('maintenance_log_retention_days', 2555, 'Días para mantener registros (7 años)', 'number'),
  ('enable_automated_reports', true, 'Enviar reportes automatizados', 'boolean'),
  ('invoice_notes', 'Gracias por su confianza. Para consultas contacte con administración', 'Notas por defecto en facturas', 'string');

-- ============================================================
-- 18. USERS - Usuarios del Sistema
-- ============================================================
INSERT INTO users (email, role, is_active)
VALUES
  ('admin@rohigarnez.es', 'Admin', true),
  ('director@rohigarnez.es', 'Manager', true),
  ('juan.martinez@rohigarnez.es', 'Technician', true),
  ('maria.lopez@rohigarnez.es', 'Technician', true),
  ('carlos.rodriguez@rohigarnez.es', 'Technician', true),
  ('cliente@bellavista.es', 'Viewer', true);

-- ============================================================
-- NOTAS IMPORTANTES PARA USAR ESTOS DATOS
-- ============================================================
/*

1. CLIENTES (customers):
   - Guardar datos de urbanizaciones, hoteles, residencias privadas
   - Email, teléfono, dirección exacta
   - Coordenadas GPS para ubicar en mapa
   - Notas sobre características especiales

2. EQUIPO (team_members):
   - Técnicos, socorristas, supervisores, managers
   - Certificaciones y experiencia
   - Fecha de contratación
   - Especialidades

3. SERVICIOS (services):
   - Todos los servicios que ofreces
   - Categoría (Mantenimiento, Reparación, Instalación, Testing)
   - Slug para URLs

4. PAQUETES (service_packages):
   - Sin Socorrista, Con Socorrista, Premium
   - Precios mensuales/anuales
   - Normativa que cumplen

5. CARACTERÍSTICAS DE PAQUETES (package_features):
   - Qué incluye cada paquete
   - Orden de presentación

6. PISCINAS (pools):
   - Datos técnicos: tamaño, profundidad, volumen
   - Equipamiento instalado
   - Última renovación
   - Fotos (URLs en JSON)

7. CONTRATOS (contracts):
   - Vigentes, pausados, terminados
   - Número de socorristas requeridos
   - Precios mensuales y anuales
   - Fecha de renovación

8. SERVICIOS DE CONTRATO (contract_services):
   - Qué servicios incluye cada contrato
   - Frecuencia (diaria, semanal, mensual)

9. REGISTROS DE MANTENIMIENTO (maintenance_logs):
   - Parámetros químicos (pH, cloro, temperatura)
   - Qué se hizo en cada visita
   - Horas trabajadas
   - Fotos del trabajo

10. REPARACIONES (repairs):
    - Problemas reportados (fugas, grietas, equipos)
    - Estado (reportado, en progreso, completado)
    - Costo de reparación
    - Garantía

11. CONSULTAS DE CONTACTO (contact_submissions):
    - Formularios del website
    - Estado de respuesta (New, Responded, Archived)

12. PRESUPUESTOS (quotes):
    - Presupuestos enviados
    - Servicios incluidos en JSON
    - Vigencia del presupuesto
    - Estado (Draft, Sent, Accepted, Rejected)

13. PROYECTOS (projects):
    - Galería de trabajos completados
    - Descripción, fotos, testimonios
    - Rating del cliente (1-5 estrellas)

14. FACTURAS (invoices):
    - Relacionadas con contratos
    - Estado de pago
    - Método de pago

15. INVENTARIO QUÍMICO (chemicals_inventory):
    - Stock actual
    - Cantidad mínima de alerta
    - Fecha de caducidad
    - Proveedor

16. NORMATIVAS (compliance_standards):
    - Requisitos legales por país/región
    - Parámetros técnicos obligatorios

17. CONFIGURACIÓN (company_settings):
    - Datos de la empresa
    - Configuración del sistema

18. USUARIOS (users):
    - Acceso al dashboard
    - Roles: Admin, Manager, Technician, Viewer

*/
