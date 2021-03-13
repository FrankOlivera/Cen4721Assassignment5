import sys
import os
from google.cloud import translate_v2 as translate

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = r"y.json"

translate_client = translate.Client()

text = sys.argv[1]
target = sys.argv[2]

output = translate_client.translate(
    text,
    target_language=target)

print(output["translatedText"])
