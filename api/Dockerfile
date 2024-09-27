# Usa una imagen de Python
FROM python:3.9

# Establece el directorio de trabajo
WORKDIR /app

RUN pip install --upgrade pip

# Copia el archivo de requerimientos y la aplicación
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

# Expone el puerto 8000 y ejecuta la aplicación
EXPOSE 80

