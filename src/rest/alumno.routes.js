import { Router } from 'express';
import { crearAlumno } from './alumno.controller.js';

const router = Router();

// POST /api/alumnos
router.post('/', crearAlumno);

export default router;