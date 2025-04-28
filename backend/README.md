Các bước set up thư viện
- Activate môi trường ảo
- Chạy lệnh sau: 
```
pip install -r requirements.txt
```

Lưu ý: trong file requirements.txt có dòng **-e .** ở cuối là để set up môi trường cho project, khi đó mới chạy được lệnh sau trong file server.py
```
from src.translate_pipeline import TranslationPipeline
```
