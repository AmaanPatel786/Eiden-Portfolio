import os
from PIL import Image

def analyze_colors():
    path = r"C:\Users\Amaan\.gemini\antigravity\brain\a560f167-0818-4009-a21f-ab6aad534b99\media__1780469306031.png"
    if os.path.exists(path):
        with Image.open(path) as img:
            img = img.convert("RGB")
            w, h = img.size
            # Let's inspect column color at x = w // 4 (left side) from y=0 to h-1
            # and x = 3 * w // 4 (right side) from y=0 to h-1
            print("Left Column (x=w//4) colors at intervals:")
            for y in range(0, h, h // 10):
                print(f"  y={y}: {img.getpixel((w//4, y))}")
            print("\nRight Column (x=3*w//4) colors at intervals:")
            for y in range(0, h, h // 10):
                print(f"  y={y}: {img.getpixel((3*w//4, y))}")
            print("\nCenter Column (x=w//2) colors at intervals:")
            for y in range(0, h, h // 10):
                print(f"  y={y}: {img.getpixel((w//2, y))}")

analyze_colors()
