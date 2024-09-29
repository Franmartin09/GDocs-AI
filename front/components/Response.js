import React, { useState } from 'react';
import styles from '../styles/Response.module.css';
import { FaPencilAlt } from 'react-icons/fa'; // Using react-icons for the pencil
import { FaPrint } from "react-icons/fa";


const Response = ({ data }) => {
  const [isEditable, setIsEditable] = useState(false);

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
  };
  
  // Handle printing the document
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.container}>
      <div className={styles.document}>
        {/* Print Button */}
        <button className={styles.printButton} onClick={handlePrint}>
          <FaPrint />
        </button>

        {/* Edit Button */}
        <button className={styles.editButton} onClick={handleEditToggle}>
          <FaPencilAlt />
        </button>

        <h1 className={styles.title} contentEditable={isEditable}>Software Project Documentation</h1>
        <h3 className={styles.subtitle} contentEditable={isEditable}>{data.title.title}</h3>

        {/* Section: General Definition */}
        <h2 className={styles.module_h1} contentEditable={isEditable}>General Definition</h2>
        <p contentEditable={isEditable}>{data.general_definition.general_idea}</p>
        <h3 contentEditable={isEditable}>Goals:</h3>
        <ul contentEditable={isEditable}>
          {data.general_definition.goals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
        <h3 contentEditable={isEditable}>Users:</h3>
        <ul contentEditable={isEditable}>
          {data.general_definition.users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>

        {/* Sección: Requisitos */}
        <h2 className={styles.module_h1} contentEditable={isEditable}>Requirements</h2>
        <h3 contentEditable={isEditable}>Requirements Especification:</h3>
        <h4 contentEditable={isEditable}>General Requirements:</h4>
        <ul contentEditable={isEditable}>
          {data.requirements.requirements_especification.general_requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul >
        <h4 contentEditable={isEditable}>Functional Requirements:</h4>
        <ul contentEditable={isEditable}>
          {data.requirements.requirements_especification.functional_requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
        <h4 contentEditable={isEditable}>System Scope:</h4>
        <ul contentEditable={isEditable}>
          {data.requirements.requirements_especification.system_scope.map((scope, index) => (
            <li key={index}>{scope}</li>
          ))}
        </ul>
        <p contentEditable={isEditable}><strong>Legality:</strong> {data.requirements.requirements_especification.legality_information}</p>
        


         {/* Sección: Especificación de Procedimientos */}
        <h3 className={styles.module_h1} contentEditable={isEditable}>Procedure Specification:</h3>
        <p contentEditable={isEditable}><strong>Development Procedures:</strong> {data.requirements.procedure_especification.development_procedures}</p>
        <h4 contentEditable={isEditable}>Tools:</h4>
        <ul contentEditable={isEditable}>
          {data.requirements.procedure_especification.tools_used.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
        <p contentEditable={isEditable}><strong>Planification:</strong> {data.requirements.procedure_especification.planification}</p>
        <h4 contentEditable={isEditable}>Non Functional Requirements:</h4>
        <ul contentEditable={isEditable}>
          {data.requirements.procedure_especification.non_functional_requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
        <p contentEditable={isEditable}><strong>Test Execution Specifications:</strong> {data.requirements.procedure_especification.test_execution_specifications}</p>
        
        {/* Sección: Arquitectura del Sistema */}
        <h2 className={styles.module_h1} contentEditable={isEditable}>System Architecture</h2>
        <p contentEditable={isEditable}>{data.system_architecture.hierarchy_description}</p>
        {data.system_architecture.modules.map((module, index) => (
          <div key={index} className={styles.module_architecture} >
            <h3>{module.module_name}</h3>
            <p>{module.description}</p>
            <p><strong>Responsability:</strong> {module.responsability}</p>
            <p><strong>Implementation:</strong> {module.implementation}</p>
            <h5>Module Dependencies:</h5>
            <ul>
              {module.dependencies.length > 0 ? (
                module.dependencies.map((dep, depIndex) => (
                  <li key={depIndex}>{dep}</li>
                ))
              ) : (
                <li>Nothing</li>
              )}
            </ul>
            <h5>Extern Dependencies:</h5>
            <ul>
              {module.extern_dependencies.map((dep, depIndex) => (
                <li key={depIndex}>{dep}</li>
              ))}
            </ul>
          </div>
        ))}

        <h2 className={styles.module_h1} contentEditable={isEditable}>Data Model:</h2>
        <h4 contentEditable={isEditable}>Input Data:</h4>
        <ul contentEditable={isEditable}>
          {data.system_architecture.data_model.input_data.map((input, index) => (
            <li key={index}>{input}</li>
          ))}
        </ul>
        <h4 contentEditable={isEditable}>Intern Data:</h4>
        <ul contentEditable={isEditable}>
          {data.system_architecture.data_model.intern_data.map((intern, index) => (
            <li key={index}>{intern}</li>
          ))}
        </ul>
        <h4 contentEditable={isEditable}>Output Data:</h4>
        <ul contentEditable={isEditable}>
          {data.system_architecture.data_model.output_data.map((output, index) => (
            <li key={index}>{output}</li>
          ))}
        </ul>
        

        {/* Sección: Descripción del Servicio */}
        <h2 className={styles.module_h1} contentEditable={isEditable}>Service Description</h2>
        <p contentEditable={isEditable}><strong>Process Description:</strong> {data.service_description.process_description}</p>
        <p contentEditable={isEditable}><strong>Description of Services:</strong> {data.service_description.services_description}</p>

        {/* Sección: Documentación Técnica */}
        <h2 className={styles.module_h1} contentEditable={isEditable}>Tecnical Documentation </h2>
        <p contentEditable={isEditable}>{data.tecnic_documentation.api_description}</p>
        <h3 contentEditable={isEditable}>Endpoints:</h3>
        <ul contentEditable={isEditable}>
          {data.tecnic_documentation.endpoints_especifications.map((endpoint, index) => (
            <li key={index}>{endpoint}</li>
          ))}
        </ul>
        <p contentEditable={isEditable}><strong>Autenticación:</strong> {data.tecnic_documentation.autentication}</p>
        <h3 contentEditable={isEditable}>Examples:</h3>
        <pre contentEditable={isEditable}>{data.tecnic_documentation.examples}</pre>

        {/* Sección: Aspectos Relevantes */}
        <h2 className={styles.module_h1} contentEditable={isEditable}>Relevant Aspects:</h2>
        <ul contentEditable={isEditable}>
          {data.relevant_aspects.relevant_aspects.map((aspect, index) => (
            <li key={index}>{aspect}</li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default Response;


