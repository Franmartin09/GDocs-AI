# GDocs-AI

GDocsAI is a web application designed to automatically generate detailed and structured software project documentation. Built with **Next.js** on the frontend and a **Python-based API** powered by **Groq**, utilizing the **Mixtral-8x7b-32768** Large Language Model (LLM), GDocsAI streamlines documentation generation while ensuring accuracy and comprehensiveness. The system also leverages **Pydantic** for robust data validation, enhancing reliability and performance.

## Key Features:

- **Automated Documentation Generation**  
  Effortlessly generate well-structured documentation for software projects, reducing manual effort and improving workflow efficiency.
  
- **Next.js Frontend**  
  A modern, responsive, and performant UI powered by Next.js, delivering a seamless and intuitive user experience.
  
- **Python API with Groq (Mixtral-8x7b-32768)**  
  The backend leverages **Groq** with the **Mixtral-8x7b-32768** LLM to process and understand code, generating highly relevant and accurate documentation tailored to your project's specifics.
  
- **Pydantic for Robustness**  
  Pydantic is used to ensure strong data validation and parsing, enhancing the overall reliability and robustness of the application by ensuring data integrity across the system.
  
- **Scalable and Extensible Architecture**  
  Designed to support projects of varying complexity, GDocsAI is flexible and easily integrates into existing development workflows.
  
- **Docker Compose for Easy Deployment**  
  The application is containerized and managed using **Docker Compose**, ensuring a smooth setup, scalability, and consistency across development and production environments.

## Getting Started

### Prerequisites:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/GDocsAI.git
   cd GDocsAI
   ```

2. Start the application using Docker Compose:
   ```bash
   docker-compose up --build
   ```

3. Access the web app at `http://localhost:3000`.

### Environment Variables:

Ensure you configure the necessary environment variables in the `.env` file for Groq, the Mixtral model, and other settings.

```bash
# Example .env
API_KEY=your-api-key-here
LLM_API_URL=http://your-llm-api-url
```
