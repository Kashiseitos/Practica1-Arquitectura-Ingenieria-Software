import mongoose from 'mongoose';

const AlumnoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    domicilio: { type: String, required: true },
    idiomaNativo: { type: String, required: true, lowercase: true },
    contacto: {
      email: { type: String, required: true, unique: true },
      telefono: { type: String, required: true },
    },
    quienRecomendo: { type: String, default: null },
    familiarInscrito: {
      tieneFamiliar: { type: Boolean, default: false },
      matriculaFamiliar: { type: String, default: null },
    },
    tarjetaPorDefecto: {
      numeroEnmascarado: { type: String, required: true },
      titular: { type: String, required: true },
      expiracion: { type: String, required: true },
    },
    nivelAsignado: { type: Number, default: 1 },
    activo: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Alumno = mongoose.model('Alumno', AlumnoSchema);