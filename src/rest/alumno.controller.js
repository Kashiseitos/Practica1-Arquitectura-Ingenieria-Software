import { Alumno } from '../models/Alumno.js';

export const crearAlumno = async (req, res) => {
  try {
    const nuevoAlumno = new Alumno(req.body);
    const alumnoGuardado = await nuevoAlumno.save();
    return res.status(201).json({
      mensaje: 'Alumno registrado exitosamente',
      alumno: alumnoGuardado,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};