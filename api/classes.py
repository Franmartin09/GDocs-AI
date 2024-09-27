from pydantic import BaseModel
from typing import List, Optional

# 1. Definición general del proyecto
class GeneralDefinition(BaseModel):
    general_idea: str
    goals: List[str]
    users: List[str]


# 2. Requisitos
class GeneralRequirements(BaseModel):
    general_requirements: List[str] 
    functional_requirements: List[str] 
    system_scope: List[str]
    author_information: str


class ProcedureSpecifications(BaseModel):
    development_procedures: str
    tools_used: List[str]
    planification: str
    non_functional_requirements: List[str] 
    test_execution_specifications: str


class Requirements(BaseModel):
    requirements_especification: GeneralRequirements
    procedure_especification: ProcedureSpecifications

# 3. Arquitectura del sistema
class ModuleDescription(BaseModel):
    module_name: str 
    description: str 
    responsability: str 
    restrictions: Optional[str] 
    dependencies: List[str] 
    implementation: str 
    extern_dependencies: List[str] 

# 4. Diseño del modelo de datos
class DataModel(BaseModel):
    input_data: List[str]
    intern_data: List[str]
    output_data: List[str]

class SystemArchitecture(BaseModel):
    hierarchy_description: str 
    diagram_modules: Optional[str] 
    modules: List[ModuleDescription] 
    data_model: Optional[DataModel]


# 5. Descripción de procesos y servicios ofrecidos por el sistema
class ServiceDescription(BaseModel):
    process_description: str 
    services_description: str 


# 6. Documentación técnica - Especificación API
class ApiSpecification(BaseModel):
    api_description: str 
    endpoints_especifications : List[str]
    autentication: Optional[str]
    examples: Optional[str]


# 7. Aspectos relevantes
class RelevantAspects(BaseModel):
    relevant_aspects: List[str] 


# Clase principal que agrupa toda la documentación del proyecto
class SoftwareProjectDocumentation(BaseModel):
    general_definition: GeneralDefinition
    requirements: Requirements
    system_architecture: SystemArchitecture
    # data_model: DataModel
    service_description: ServiceDescription
    tecnic_documentation: ApiSpecification
    relevant_aspects: Optional[RelevantAspects] = None



# Define the Pydantic model for the input data
class TitleInput(BaseModel):
    title: str