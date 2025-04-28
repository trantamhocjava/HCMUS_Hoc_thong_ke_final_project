from flask import Flask, request, jsonify
from flask_cors import CORS
from src.translate_pipeline import TranslationPipeline

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.config["CORS_HEADERS"] = "Content-Type"


@app.route("/translate", methods=["POST"])
def translate_text():
    data = request.json
    text = data.get("text") if data else None

    translation = TranslationPipeline()
    translated_text = translation.translate(text)

    if not translated_text:
        return jsonify({"error": "No text provided"}), 400
    return jsonify({"translated_text": translated_text})


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
