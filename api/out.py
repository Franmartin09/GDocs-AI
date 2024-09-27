def json_to_md(data, filename="output.md"):
    with open(filename, "w", encoding="utf-8") as f:
        # General Definition
        f.write(f"# General Definition\n\n")
        f.write(f"## General Idea\n")
        f.write(f"{data.general_definition.general_idea}\n\n")
        
        f.write(f"## Goals\n")
        for goal in data.general_definition.goals:
            f.write(f"- {goal}\n")
        f.write("\n")

        f.write(f"## Users\n")
        for user in data.general_definition.users:
            f.write(f"- {user}\n")
        f.write("\n")

        # Requirements
        f.write(f"# Requirements\n\n")
        f.write(f"## General Requirements\n")
        for req in data.requirements.requirements_especification.general_requirements:
            f.write(f"- {req}\n")
        f.write("\n")

        f.write(f"## Functional Requirements\n")
        for req in data.requirements.requirements_especification.functional_requirements:
            f.write(f"- {req}\n")
        f.write("\n")

        f.write(f"## System Scope\n")
        for scope in data.requirements.requirements_especification.system_scope:
            f.write(f"- {scope}\n")
        f.write("\n")

        f.write(f"## Author Information\n")
        f.write(f"{data.requirements.requirements_especification.author_information}\n\n")

        # Procedure Specifications
        f.write(f"# Procedure Specifications\n\n")
        f.write(f"## Development Procedures\n")
        f.write(f"{data.requirements.procedure_especification.development_procedures}\n\n")

        f.write(f"## Tools Used\n")
        for tool in data.requirements.procedure_especification.tools_used:
            f.write(f"- {tool}\n")
        f.write("\n")

        # f.write(f"## Planification\n")
        # for plan in data.requirements.procedure_especification.planification:
        #     f.write(f"- {plan}\n")
        # f.write("\n")

        f.write(f"## Planification\n")
        f.write(f"- {data.requirements.procedure_especification.planification}\n")
        f.write("\n")

        f.write(f"## Non-functional Requirements\n")
        for req in data.requirements.procedure_especification.non_functional_requirements:
            f.write(f"- {req}\n")
        f.write("\n")

        f.write(f"## Test Execution Specifications\n")
        f.write(f"{data.requirements.procedure_especification.test_execution_specifications}\n\n")

        # System Architecture
        f.write(f"# System Architecture\n\n")
        f.write(f"## Hierarchy Description\n")
        f.write(f"{data.system_architecture.hierarchy_description}\n\n")

        f.write(f"## Modules\n")
        for module in data.system_architecture.modules:
            f.write(f"### {module.module_name}\n")
            f.write(f"- **Description**: {module.description}\n")
            f.write(f"- **Responsibility**: {module.responsability}\n")
            f.write(f"- **Dependencies**: {', '.join(module.dependencies) if module.dependencies else 'None'}\n")
            f.write(f"- **External Dependencies**: {', '.join(module.extern_dependencies) if module.extern_dependencies else 'None'}\n\n")

        # Data Model
        f.write(f"# Data Model\n\n")
        f.write(f"## Input Data\n")
        for input_data in data.data_model.input_data:
            f.write(f"- {input_data}\n")
        f.write("\n")

        f.write(f"## Internal Data\n")
        for intern_data in data.data_model.intern_data:
            f.write(f"- {intern_data}\n")
        f.write("\n")

        f.write(f"## Output Data\n")
        for output_data in data.data_model.output_data:
            f.write(f"- {output_data}\n")
        f.write("\n")

        # Service Description
        f.write(f"# Service Description\n\n")
        f.write(f"## Process Description\n")
        f.write(f"{data.service_description.process_description}\n\n")

        f.write(f"## Services Description\n")
        f.write(f"{data.service_description.services_description}\n\n")

        # Technical Documentation
        f.write(f"# Technical Documentation\n\n")
        f.write(f"## API Description\n")
        f.write(f"{data.tecnic_documentation.api_description}\n\n")

        f.write(f"## Endpoints Specifications\n")
        for endpoint in data.tecnic_documentation.endpoints_especifications:
            f.write(f"- {endpoint}\n")
        f.write("\n")

        f.write(f"## Authentication\n")
        f.write(f"{data.tecnic_documentation.autentication}\n\n")

        f.write(f"## Examples\n")
        f.write(f"{data.tecnic_documentation.examples}\n\n")

        # Relevant Aspects
        f.write(f"# Relevant Aspects\n\n")
        for aspect in data.relevant_aspects.relevant_aspects:
            f.write(f"- {aspect}\n")
        f.write("\n")

    print(f"Markdown file '{filename}' has been generated.")