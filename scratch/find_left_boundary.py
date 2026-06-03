import os
from PIL import Image

def find_left_boundary():
    path = r"C:\Users\Amaan\.gemini\antigravity\brain\a560f167-0818-4009-a21f-ab6aad534b99\media__1780469306031.png"
    if os.path.exists(path):
        with Image.open(path) as img:
            img = img.convert("RGB")
            w, h = img.size
            # Scan row y=300 from x=0 to w//2
            y = 300
            print(f"Scanning row y={y} from left to right:")
            for x in range(0, w//2, 10):
                r, g, b = img.getpixel((x, y))
                print(f"  x={x}: RGB=({r},{g},{b})")

find_left_boundary()
