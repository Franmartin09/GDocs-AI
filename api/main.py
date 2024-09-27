import os
from dotenv import load_dotenv
import json
from groq import Groq
from classes import SoftwareProjectDocumentation, TitleInput, GeneralDefinition, Requirements, SystemArchitecture, DataModel, ServiceDescription, ApiSpecification, RelevantAspects
from out import json_to_md
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import time


app = FastAPI()
# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

load_dotenv()

api_key = os.environ.get("GROQ_API_KEY")

if not api_key:
    raise ValueError("La clave API de Groq no está configurada correctamente.")

client = Groq(api_key=api_key)


def get_general(project: str, client):
    json_schema = json.dumps(GeneralDefinition.model_json_schema(), indent=2)

    system_message = (
        "You are an expert in software development and systems architecture. "
        "Return software documentation in JSON format using the following schema:\n"
        f"{json_schema}\n"
        "Make sure the JSON is valid and properly formatted."
    )
    
    user_message = f"Fetch general information for {project}"

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": system_message,
            },
            {
                "role": "user",
                "content": user_message,
            },
        ],
        model="mixtral-8x7b-32768",
        temperature=0,
        stream=False,
        response_format={"type": "json_object"},
    )
    
    return GeneralDefinition.model_validate_json(chat_completion.choices[0].message.content)

def get_requirements(project: str, client, general):
    json_schema = json.dumps(Requirements.model_json_schema(), indent=2)

    system_message = (
        "You are an expert in software development and systems architecture. "
        "Return software documentation in JSON format using the following schema:\n"
        f"{json_schema}\n"
        "Make sure the JSON is valid and properly formatted."
    )
    
    user_message = f"Fetch info of documentation for {project} knowing that {general}"

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": system_message,
            },
            {
                "role": "user",
                "content": user_message,
            },
        ],
        model="mixtral-8x7b-32768",
        temperature=0,
        stream=False,
        response_format={"type": "json_object"},
    )
    
    return Requirements.model_validate_json(chat_completion.choices[0].message.content)

def get_arquitecture(project: str, client, requirements):
    json_schema = json.dumps(SystemArchitecture.model_json_schema(), indent=2)

    system_message = (
        "You are an expert in software development and systems architecture. "
        "Return software documentation in JSON format using the following schema:\n"
        f"{json_schema}\n"
        "Make sure the JSON is valid and properly formatted."
    )
    
    user_message = f"Fetch info of documentation for {project} knowing that {requirements}"

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": system_message,
            },
            {
                "role": "user",
                "content": user_message,
            },
        ],
        model="mixtral-8x7b-32768",
        temperature=0,
        stream=False,
        response_format={"type": "json_object"},
    )
    
    return SystemArchitecture.model_validate_json(chat_completion.choices[0].message.content)

def get_service(project: str, client):
    json_schema = json.dumps(ServiceDescription.model_json_schema(), indent=2)

    system_message = (
        "You are an expert in software development and systems architecture. "
        "Return software documentation in JSON format using the following schema:\n"
        f"{json_schema}\n"
        "Make sure the final JSON is valid and properly formatted. Pay attention on the type of each value, There are string arrays or string, try to don't use Dicts for the results."
    )
    
    user_message = f"Fetch info of documentation for {project}"

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": system_message,
            },
            {
                "role": "user",
                "content": user_message,
            },
        ],
        model="mixtral-8x7b-32768",
        temperature=0,
        stream=False,
        response_format={"type": "json_object"},
    )
    
    return ServiceDescription.model_validate_json(chat_completion.choices[0].message.content)

def get_api(project: str, client):
    json_schema = json.dumps(ApiSpecification.model_json_schema(), indent=2)

    system_message = (
        "You are an expert in software development and systems architecture. "
        "Return software documentation in JSON format using the following schema:\n"
        f"{json_schema}\n"
        "Make sure the final JSON is valid and properly formatted. Pay attention on the type of each value, There are string arrays or string, try to don't use Dicts for the results"
    )
    
    user_message = f"Fetch info of documentation for {project}"

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": system_message,
            },
            {
                "role": "user",
                "content": user_message,
            },
        ],
        model="mixtral-8x7b-32768",
        temperature=0,
        stream=False,
        response_format={"type": "json_object"},
    )
    
    return ApiSpecification.model_validate_json(chat_completion.choices[0].message.content)

def get_relevant_aspect(project: str, client):
    json_schema = json.dumps(RelevantAspects.model_json_schema(), indent=2)

    system_message = (
        "You are an expert in software development and systems architecture. "
        "Return software documentation in JSON format using the following schema:\n"
        f"{json_schema}\n"
        "Make sure the final JSON is valid and properly formatted. Pay attention on the type of each value, There are string arrays or string, try to don't use Dicts for the results."
    )
    
    user_message = f"Fetch info of documentation for {project}"

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": system_message,
            },
            {
                "role": "user",
                "content": user_message,
            },
        ],
        model="mixtral-8x7b-32768",
        temperature=0,
        stream=False,
        response_format={"type": "json_object"},
    )
    
    return RelevantAspects.model_validate_json(chat_completion.choices[0].message.content)

def get_document(project: str, client) -> SoftwareProjectDocumentation:
    json_schema = json.dumps(SoftwareProjectDocumentation.model_json_schema(), indent=2)

    system_message = (
        "You are an expert in software development and systems architecture. "
        "Return software documentation in JSON format using the following schema:\n"
        f"{json_schema}\n"
        "Make sure the JSON is valid and properly formatted."
    )
    
    user_message = f"Fetch info of documentation for {project}"

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": system_message,
            },
            {
                "role": "user",
                "content": user_message,
            },
        ],
        model="mixtral-8x7b-32768",
        temperature=0,
        stream=False,
        response_format={"type": "json_object"},
    )
    
    return SoftwareProjectDocumentation.model_validate_json(chat_completion.choices[0].message.content)

def get_data(title):
    general = get_general(title, client)
    requirements = get_requirements(title, client, general)
    arquitectura = get_arquitecture(title, client, requirements)
    # modelo_datos = get_modelo_datos(title, client)
    procesos = get_service(title, client)
    api = get_api(title, client)
    relevant_aspect = get_relevant_aspect(title, client)
    

    data = SoftwareProjectDocumentation(
        general_definition= general,
        requirements= requirements,
        system_architecture = arquitectura,
        # data_model = data_model_instance,
        service_description = procesos,
        tecnic_documentation = api,
        relevant_aspects = relevant_aspect
    )

    # json_to_md(data, filename="output.md")
    return data

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI"}

@app.post("/input")
def read_root(data: TitleInput):
    title = data.title
    data = get_data(title)
    return data


# "Web page with Angular for Beauty Salon Landing page"








