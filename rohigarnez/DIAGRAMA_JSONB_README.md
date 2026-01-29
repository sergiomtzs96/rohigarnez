# 📊 Diagrama de Estructura JSONB - ROHIGARNEZ

## Descripción

Este diagrama DBML representa la estructura de base de datos normalizada para todos los datos de las páginas de ROHIGARNEZ. Incluye la información completa sobre servicios, proyectos, equipo, contacto y más.

## 📁 Archivos generados

1. **pages_database_diagram.dbml** - Diagrama ER en formato DBML (compatible con dbdiagram.io)
2. **pages_data_structure.json** - Estructura JSONB con ejemplos de datos reales

## 🔗 Cómo visualizar en dbdiagram.io

### Opción 1: Importar el archivo DBML
1. Ve a https://dbdiagram.io/
2. Clic en `File` → `Import` → `Import from file`
3. Selecciona `pages_database_diagram.dbml`
4. ¡Listo! El diagrama se cargará automáticamente

### Opción 2: Copiar y pegar el código
1. Ve a https://dbdiagram.io/
2. Copia todo el contenido de `pages_database_diagram.dbml`
3. Pégalo en el editor de dbdiagram.io
4. El diagrama se renderizará automáticamente

## 📋 Estructura de Tablas

### Tablas Principales

#### `pages`
- Registro principal de todas las páginas
- Campos: `page_id`, `page_type`, `page_name`, `created_at`, `updated_at`, `data` (JSONB)

#### `services`
- Servicios disponibles en diferentes páginas
- Relación: muchos servicios → una página
- Incluye: título, descripción, imagen, categoría, precio

#### `projects`
- Proyectos completados
- Relación: muchos proyectos → una página
- Incluye: título, cliente, ubicación, año, duración, detalles técnicos

#### `team_members`
- Integrantes del equipo
- Relación: muchos miembros → una página
- Incluye: nombre, rol, experiencia, bio, contacto

#### `service_packages`
- Paquetes de servicios con precios
- Incluye: nombre, precio, características, cumplimiento normativo

#### `contact_forms`
- Formularios de contacto enviados
- Campos: nombre, email, teléfono, empresa, servicio, mensaje

### Tablas de Relación

#### `specialties` (Team Members)
- Especialidades de cada miembro del equipo

#### `certifications` (Team Members)
- Certificaciones de cada miembro del equipo

#### `service_categories` (Services)
- Categorías de productos/servicios

#### `category_items`
- Items dentro de cada categoría

#### `package_features`
- Características de cada paquete de servicio

#### `highlights` (Projects)
- Puntos destacados de cada proyecto

#### `project_specs` (Projects)
- Especificaciones técnicas de cada proyecto

#### `company_values`
- Valores y métricas de la empresa

#### `testimonials`
- Reseñas y testimonios de clientes

#### `brands`
- Partners y marcas asociadas

#### `contact_info`
- Información de contacto por página

#### `locations`
- Ubicaciones/sedes

#### `users`
- Usuarios del sistema

#### `user_page_data`
- Datos personalizados de usuarios por página

## 🔄 Relaciones Principales

```
pages (1) ─────────────── (N) services
pages (1) ─────────────── (N) projects
pages (1) ─────────────── (N) team_members
pages (1) ─────────────── (N) service_packages
pages (1) ─────────────── (N) contact_forms
pages (1) ─────────────── (N) company_values
pages (1) ─────────────── (N) testimonials
pages (1) ─────────────── (N) brands
pages (1) ─────────────── (N) contact_info
pages (1) ─────────────── (N) locations
pages (1) ─────────────── (N) service_categories

team_members (1) ─────────── (N) specialties
team_members (1) ─────────── (N) certifications

projects (1) ─────────── (N) highlights
projects (1) ─────────── (N) project_specs

service_packages (1) ─────────── (N) package_features
service_packages (1) ─────────── (N) specialized_services

service_categories (1) ─────────── (N) category_items

users (1) ─────────── (N) user_page_data
pages (1) ──────── (N) user_page_data
```

## 📊 Estructura JSONB

Cada página almacena datos estructurados en formato JSONB:

### HomePage JSONB
```json
{
  "features": [...],
  "services": [...]
}
```

### ProjectsPage JSONB
```json
{
  "categories": [...],
  "projects": [{
    "id": "...",
    "title": "...",
    "highlights": [...],
    "specs": {...}
  }]
}
```

### TeamPage JSONB
```json
{
  "teamMembers": [{
    "name": "...",
    "specialties": [...],
    "certifications": [...]
  }],
  "companyValues": [...]
}
```

### ServicesPage JSONB
```json
{
  "packages": [{
    "name": "...",
    "services": [...],
    "benefits": [...],
    "features": [...]
  }]
}
```

## 🎯 Casos de Uso

### 1. Mostrar todos los servicios de una página
```sql
SELECT data->'services' FROM pages WHERE page_type = 'HomePage';
```

### 2. Buscar proyectos por categoría
```sql
SELECT data->'projects' FROM pages 
WHERE page_type = 'ProjectsPage' 
AND data->'projects'->0->>'category' = 'construction';
```

### 3. Obtener info de un miembro del equipo
```sql
SELECT data->'teamMembers' FROM pages 
WHERE page_type = 'TeamPage' 
AND data->'teamMembers'->0->>'name' = 'Carlos Rodríguez';
```

### 4. Registrar un contacto
```sql
INSERT INTO contact_forms (page_id, name, email, phone, company, service, message, status)
VALUES (uuid, 'Juan', 'juan@email.com', '+34...', 'Empresa X', 'Mantenimiento', 'Consulta', 'pending');
```

## 💡 Ventajas de esta estructura

✅ **Normalización**: Datos relacionales bien organizados  
✅ **Flexibilidad**: JSONB para datos semiestructurados  
✅ **Escalabilidad**: Fácil agregar nuevas páginas y servicios  
✅ **Rendimiento**: Índices optimizados en campos principales  
✅ **Integridad**: Relaciones y restricciones bien definidas  

## 🔒 Campos importantes

- `JSONB` - Permite almacenar datos complejos con validación parcial
- `UUID` - Identificadores únicos por página/tabla
- `Timestamp` - Trazabilidad de cambios
- `Boolean` - Estados binarios (recomendado, crítico, etc)
- `Decimal` - Precios precisos sin pérdida de datos

## 🚀 Próximos pasos

1. Exportar el diagrama en diferentes formatos (SQL, JSON, etc)
2. Generar las migraciones SQL para crear la BD
3. Implementar los modelos en la aplicación
4. Crear APIs REST para cada tabla

---

**Nota**: Puedes compartir el enlace de dbdiagram.io después de importar el diagrama con otros miembros del equipo para colaborar en tiempo real.
