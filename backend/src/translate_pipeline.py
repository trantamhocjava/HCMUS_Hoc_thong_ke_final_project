import torch
import pickle
import numpy as np
import pandas as pd
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import os


class TranslationPipeline:
    def __init__(self):
        pass

    def translate(self, text):
        model = AutoModelForSeq2SeqLM.from_pretrained("model_47")
        tokenizer = AutoTokenizer.from_pretrained("tokenizer")

        device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        model.to(device)
        inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True)
        inputs = {key: value.to(device) for key, value in inputs.items()}
        with torch.no_grad():
            translated = model.generate(
                **inputs, max_length=512, num_beams=4, early_stopping=True
            )
        translated_text = tokenizer.decode(translated[0], skip_special_tokens=True)

        return translated_text

    def demo_setup(self):
        print("Set up được rồi nhen !!!!!!!")
