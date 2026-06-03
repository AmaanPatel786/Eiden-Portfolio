import os
from PIL import Image

def inspect_screenshot():
    path = r"C:\Users\Amaan\.gemini\antigravity\brain\a560f167-0818-4009-a21f-ab6aad534b99\media__1780469306031.png"
    if os.path.exists(path):
        with Image.open(path) as img:
            print(f"Screenshot size: {img.size}, mode: {img.mode}")
    else:
        print("Screenshot not found at path:", path)

inspect_screenshot()
