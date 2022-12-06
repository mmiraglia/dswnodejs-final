# dswnodejs-tp2

Trabajo práctico 2 para el curso de Desarrollo de Servicios Web con NODEJS

## Relaciones del modelo de datos

Se presentan 4 modelos para manejar el sistema de turnos del hospital
- Paciente: información relativa al paciente
  - id
  - nombre
  - apellido
  - email
  - fecha_nacimiento

- Médico: información relativa al médico
  - id
  - nombre
  - apellido
  - especialidad

- Tratamiento: información tabulada sobre los tratamientos posibles
  - id
  - descripción

- Turnos: información sobre la relación entre el paciente, el médico y el tratamiento (si lo hubiese)
  - id
  - fecha
  - observaciones

![](Relaciones.png)
