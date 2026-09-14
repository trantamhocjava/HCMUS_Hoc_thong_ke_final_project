# English–Vietnamese Machine Translation

This project is an end-to-end **English-to-Vietnamese Neural Machine Translation (NMT)** application built with a Transformer-based model from Hugging Face.

The system includes:

- A **Flask backend** that exposes a REST API for translation.
- A **React + Vite frontend** that provides a simple web interface.
- A translation pipeline implemented with **PyTorch** and **Hugging Face Transformers**.
- Automatic use of **GPU (CUDA)** when available, with CPU fallback.

## Project Structure

```text
src/
├── backend/
│   ├── src/
│   │   ├── __init__.py
│   │   └── translate_pipeline.py
│   ├── .gitignore
│   ├── README.md
│   ├── package.json
│   ├── requirements.txt
│   ├── server.py
│   └── setup.py
│
├── frontend/
│   ├── public/
│   │   └── logo.png
│   ├── src/
│   │   ├── assets/
│   │   │   └── no-projects.png
│   │   ├── components/
│   │   │   └── TranslatorBox.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── README.md
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── code_du_doan.py
└── README.md
```

## Directory Description

### `backend/`

Contains the server-side application and the machine translation inference pipeline.

#### `backend/server.py`

Creates a Flask server and exposes the following endpoint:

```text
POST /translate
```

The endpoint accepts English text in JSON format:

```json
{
  "text": "Hello, how are you?"
}
```

and returns the Vietnamese translation:

```json
{
  "translated_text": "Xin chào, bạn khỏe không?"
}
```

The server runs locally on:

```text
http://localhost:5000
```

#### `backend/src/translate_pipeline.py`

Defines the `TranslationPipeline` class.

The pipeline:

1. Loads the tokenizer and sequence-to-sequence translation model from Hugging Face.
2. Automatically selects CUDA when a GPU is available.
3. Tokenizes the input English text.
4. Generates the translated sequence using beam search.
5. Decodes the generated tokens into Vietnamese text.

The current model is:

```text
trantamjava/machine_translation_en_to_vie_statistics_learning_model
```

#### `backend/requirements.txt`

Contains the Python dependencies required by the backend, including:

- PyTorch
- Transformers
- NumPy
- Pandas
- Flask
- Flask-CORS
- SentencePiece

The final line:

```text
-e .
```

installs the backend package in editable mode so that the following import works correctly:

```python
from src.translate_pipeline import TranslationPipeline
```

#### `backend/setup.py`

Defines the local Python package configuration for the backend source code.

---

### `frontend/`

Contains the user interface implemented with **React**, **Vite**, and **Tailwind CSS**.

#### `frontend/src/App.jsx`

Main application component.

It:

- Stores the input English text.
- Sends translation requests to the Flask backend.
- Displays a loading state while translation is running.
- Displays the Vietnamese translation returned by the backend.

The frontend communicates with:

```text
http://localhost:5000/translate
```

using Axios.

#### `frontend/src/components/TranslatorBox.jsx`

Reusable text-area component used for:

- English input.
- Vietnamese translation output.

#### `frontend/src/main.jsx`

Initializes the React application and renders the main `App` component.

#### `frontend/src/index.css`

Loads Tailwind CSS layers:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### `code_du_doan.py`

Contains a simple example of model inference for translating an English sentence into Vietnamese.

Example input:

```text
Hello, is everything ok
```

The script demonstrates the main inference steps:

- Move the model to GPU or CPU.
- Tokenize the input.
- Generate a translation.
- Decode the generated output.

## Backend Setup

Open a terminal in the `backend` directory.

It is recommended to create and activate a Python virtual environment first.

Install the required dependencies:

```bash
pip install -r requirements.txt
```

Run the backend server:

```bash
python server.py
```

The Flask API will start at:

```text
http://localhost:5000
```

## Frontend Setup

Open another terminal in the `frontend` directory.

Install the Node.js dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed by Vite in your browser.

## Running the Full Application

The backend and frontend must run at the same time.

### Terminal 1 — Backend

```bash
cd backend
pip install -r requirements.txt
python server.py
```

### Terminal 2 — Frontend

```bash
cd frontend
npm install
npm run dev
```

Then open the frontend in your browser, enter an English sentence, and click **Translate**.

The request flow is:

```text
English text
    ↓
React frontend
    ↓
POST /translate
    ↓
Flask backend
    ↓
TranslationPipeline
    ↓
Hugging Face Transformer model
    ↓
Vietnamese translation
    ↓
React frontend
```

## Technology Stack

| Component           | Technology                      |
| ------------------- | ------------------------------- |
| Machine Translation | Transformer-based Seq2Seq model |
| Deep Learning       | PyTorch                         |
| NLP Library         | Hugging Face Transformers       |
| Backend             | Flask                           |
| API Communication   | Axios                           |
| Frontend            | React                           |
| Build Tool          | Vite                            |
| Styling             | Tailwind CSS                    |

## Notes

- The first translation request may take longer because the Hugging Face model and tokenizer need to be loaded.
- The application automatically uses CUDA when available.
- The frontend currently expects the backend to run on port `5000`.
- Internet access may be required the first time the Hugging Face model is downloaded.

## Purpose

This project demonstrates an end-to-end machine translation workflow, including:

- Transformer-based English–Vietnamese translation.
- Model inference with PyTorch and Hugging Face Transformers.
- REST API development with Flask.
- Frontend integration with React.
- Real-time translation through a web interface.
