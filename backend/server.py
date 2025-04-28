from flask import Flask, request, jsonify
from flask_cors import CORS
from src.translate_pipeline import TranslationPipeline

app = Flask(__name__)
cors = CORS(app, origin="*")


@app.route("/api/users", methods=["GET"])
def get_users():
    return jsonify({"users": ["Alice", "Bob", "Charlie"]})


@app.route("/translate", methods=["POST"])
def translate_text():
    text = request.form.get("")


if __name__ == "__main__":
    app.run(debug=True, port=5000)
