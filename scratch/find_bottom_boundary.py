import os
from PIL import Image

def find_bottom_boundary():
    path = r"C:\Users\Amaan\.gemini\antigravity\brain\a560f167-0818-4009-a21f-ab6aad534b99\media__1780469306031.png"
    if os.path.exists(path):
        with Image.open(path) as img:
            img = img.convert("RGB")
            w, h = img.size
            # Let's scan column x=w//4 (middle of pink card) from y=400 to h-1
            print("Left Column (x=w//4) transition to bottom:")
            for y in range(450, h):
                r, g, b = img.getpixel((w//4, y))
                print(f"  y={y}: RGB=({r},{g},{b})")
            # Let's scan column x=10 (close to left edge) from y=400 to h-1
            print("\nFar Left Column (x=10) transition to bottom:")
            for y in range(450, h):
                r, g, b = img.getpixel((10, y))
                print(f"  y={y}: RGB=({r},{g},{b})")

find_bottom_boundary()
