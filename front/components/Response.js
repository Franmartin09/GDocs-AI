import React from 'react';

const Response = ({ data }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Documentación del Proyecto de Software</h1>

      {/* Sección: General Definition */}
      <h2>Definición General</h2>
      <p><strong>Idea General:</strong> {data.general_definition.general_idea}</p>
      <h3>Objetivos:</h3>
      <ul>
        {data.general_definition.goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
      <h3>Usuarios:</h3>
      <ul>
        {data.general_definition.users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>

      {/* Sección: Requisitos */}
      <h2>Requisitos</h2>
      <h3>Especificación de Requisitos:</h3>
      <h4>Requisitos Generales:</h4>
      <ul>
        {data.requirements.requirements_especification.general_requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
      <h4>Requisitos Funcionales:</h4>
      <ul>
        {data.requirements.requirements_especification.functional_requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
      <h4>Alcance del Sistema:</h4>
      <ul>
        {data.requirements.requirements_especification.system_scope.map((scope, index) => (
          <li key={index}>{scope}</li>
        ))}
      </ul>
      <p><strong>Información del Autor:</strong> {data.requirements.requirements_especification.author_information}</p>

      {/* Sección: Especificación de Procedimientos */}
      <h3>Especificación de Procedimientos:</h3>
      <p><strong>Procedimientos de Desarrollo:</strong> {data.requirements.procedure_especification.development_procedures}</p>
      <h4>Herramientas Usadas:</h4>
      <ul>
        {data.requirements.procedure_especification.tools_used.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
      <p><strong>Planificación:</strong> {data.requirements.procedure_especification.planification}</p>
      <h4>Requisitos No Funcionales:</h4>
      <ul>
        {data.requirements.procedure_especification.non_functional_requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
      <p><strong>Especificaciones de Ejecución de Pruebas:</strong> {data.requirements.procedure_especification.test_execution_specifications}</p>

      {/* Sección: Arquitectura del Sistema */}
      <h2>Arquitectura del Sistema</h2>
      <p><strong>Descripción de la Jerarquía:</strong> {data.system_architecture.hierarchy_description}</p>
      <h3>Módulos:</h3>
      {data.system_architecture.modules.map((module, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h4>{module.module_name}</h4>
          <p><strong>Descripción:</strong> {module.description}</p>
          <p><strong>Responsabilidad:</strong> {module.responsability}</p>
          <p><strong>Dependencias:</strong> {module.dependencies.join(', ') || 'Ninguna'}</p>
          <p><strong>Implementación:</strong> {module.implementation}</p>
          <h5>Dependencias Externas:</h5>
          <ul>
            {module.extern_dependencies.map((dep, depIndex) => (
              <li key={depIndex}>{dep}</li>
            ))}
          </ul>
        </div>
      ))}
      <h3>Modelo de Datos:</h3>
      <h4>Datos de Entrada:</h4>
      <ul>
        {data.system_architecture.data_model.input_data.map((input, index) => (
          <li key={index}>{input}</li>
        ))}
      </ul>
      <h4>Datos Internos:</h4>
      <ul>
        {data.system_architecture.data_model.intern_data.map((intern, index) => (
          <li key={index}>{intern}</li>
        ))}
      </ul>
      <h4>Datos de Salida:</h4>
      <ul>
        {data.system_architecture.data_model.output_data.map((output, index) => (
          <li key={index}>{output}</li>
        ))}
      </ul>

      {/* Sección: Descripción del Servicio */}
      <h2>Descripción del Servicio</h2>
      <p><strong>Descripción del Proceso:</strong> {data.service_description.process_description}</p>
      <p><strong>Descripción de los Servicios:</strong> {data.service_description.services_description}</p>

      {/* Sección: Documentación Técnica */}
      <h2>Documentación Técnica</h2>
      <p><strong>Descripción de la API:</strong> {data.tecnic_documentation.api_description}</p>
      <h3>Especificaciones de Endpoints:</h3>
      <ul>
        {data.tecnic_documentation.endpoints_especifications.map((endpoint, index) => (
          <li key={index}>{endpoint}</li>
        ))}
      </ul>
      <p><strong>Autenticación:</strong> {data.tecnic_documentation.autentication}</p>
      <h3>Ejemplos:</h3>
      <pre>{data.tecnic_documentation.examples}</pre>

      {/* Sección: Aspectos Relevantes */}
      <h2>Aspectos Relevantes</h2>
      <ul>
        {data.relevant_aspects.relevant_aspects.map((aspect, index) => (
          <li key={index}>{aspect}</li>
        ))}
      </ul>
    </div>
  );
};

export default Response;
