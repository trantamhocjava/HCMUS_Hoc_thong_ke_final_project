# Câu cần dịch
sentence = "Hello, is everything ok"

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)
inputs = tokenizer(sentence, return_tensors="pt", padding=True, truncation=True)
inputs = {key: value.to(device) for key, value in inputs.items()}
with torch.no_grad():
    translated = model.generate(**inputs, max_length=512, num_beams=4, early_stopping=True)
translated_text = tokenizer.decode(translated[0], skip_special_tokens=True)

print(f"Original: {sentence}")
print(f"Translated: {translated_text}")