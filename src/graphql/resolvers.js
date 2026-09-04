import { Alumno } from '../models/Alumno.js';

export const resolvers = {
  Query: {
    alumnos: async (_, { filtro }) => {
      const query = {};
      if (filtro) {
        if (filtro.idiomaNativo) query.idiomaNativo = filtro.idiomaNativo.toLowerCase();
        if (filtro.nivelAsignado !== undefined) query.nivelAsignado = filtro.nivelAsignado;
        if (filtro.activo !== undefined) query.activo = filtro.activo;
      }
      return await Alumno.find(query);
    },
  },
};