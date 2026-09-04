export const typeDefs = `#graphql
  type Contacto {
    email: String
    telefono: String
  }

  type FamiliarInscrito {
    tieneFamiliar: Boolean
    matriculaFamiliar: String
  }

  type Tarjeta {
    numeroEnmascarado: String
    titular: String
    expiracion: String
  }

  type Alumno {
    id: ID!
    nombre: String!
    domicilio: String!
    idiomaNativo: String!
    contacto: Contacto!
    quienRecomendo: String
    familiarInscrito: FamiliarInscrito
    tarjetaPorDefecto: Tarjeta!
    nivelAsignado: Int!
    activo: Boolean!
    createdAt: String
    updatedAt: String
  }

  input FiltroAlumnoInput {
    idiomaNativo: String
    nivelAsignado: Int
    activo: Boolean
  }

  type Query {
    alumnos(filtro: FiltroAlumnoInput): [Alumno]
  }
`;