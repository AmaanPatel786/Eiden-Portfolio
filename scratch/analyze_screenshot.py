import os
from PIL import Image

screenshot_path = r"C:\Users\Amaan\Downloads\Eiden Portfolio\media__1780465708770.jpg"
if not os.path.exists(screenshot_path):
    # Try the artifact path
    screenshot_path = r"C:\Users\Amaan\.gemini\antigravity\brain\a560f167-0818-4009-a21f-ab6aad534b99\media__1780465708770.jpg"

if os.path.exists(screenshot_path):
    with Image.open(screenshot_path) as img:
        print(f"Screenshot size: {img.size}")
else:
    print("Screenshot not found in either path")
