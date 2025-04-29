import torch
import pickle
import numpy as np
import pandas as pd
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import os

# class TranslationPipeline:
#     def __init__(self):
#         pass

#     def translate(self, text):
#         model_id = "trantamjava/machine_translation_en_to_vie_statistics_learning_model"
#         model = AutoModelForSeq2SeqLM.from_pretrained(model_id)
#         tokenizer = AutoTokenizer.from_pretrained(model_id)

#         device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
#         model.to(device)
#         inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True)
#         inputs = {key: value.to(device) for key, value in inputs.items()}
#         with torch.no_grad():
#             translated = model.generate(
#                 **inputs, max_length=512, num_beams=4, early_stopping=True
#             )
#         translated_text = tokenizer.decode(translated[0], skip_special_tokens=True)

#         return translated_text
class TranslationPipeline:
    _instance = None
    _model = None
    _tokenizer = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(TranslationPipeline, cls).__new__(cls)
        return cls._instance
    
    def _load_model_if_needed(self):
        if self._model is None or self._tokenizer is None:
            # Load your model and tokenizer here
            import torch
            from transformers import AutoModelForSeq2SeqLM, AutoTokenizer
            
            self._tokenizer = AutoTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-vi")
            self._model = AutoModelForSeq2SeqLM.from_pretrained("Helsinki-NLP/opus-mt-en-vi")
            
            # Use CPU to save memory
            self.device = torch.device("cpu")
            self._model.to(self.device)
    
    def translate(self, text):
        if not text:
            return None
            
        self._load_model_if_needed()
        
        # Translation logic
        inputs = self._tokenizer(text, return_tensors="pt", padding=True, truncation=True)
        inputs = {k: v.to(self.device) for k, v in inputs.items()}

        with torch.no_grad():
            translated = self._model.generate(**inputs, max_length=512, num_beams=4, early_stopping=True)
        
        translated_text = self._tokenizer.decode(translated[0], skip_special_tokens=True)

        if self.device.type == "cuda":
            torch.cuda.empty_cache()

        return translated_text