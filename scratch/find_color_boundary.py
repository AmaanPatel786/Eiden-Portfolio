import os
from PIL import Image

def find_boundary():
    path = r"C:\Users\Amaan\.gemini\antigravity\brain\a560f167-0818-4009-a21f-ab6aad534b99\media__1780469306031.png"
    if os.path.exists(path):
        with Image.open(path) as img:
            img = img.convert("RGB")
            w, h = img.size
            # Let's scan row y=300 (middle of the sticker cards) from left to right
            # and print the RGB values around the middle of the image (x from w//2 - 30 to w//2 + 30)
            y = 300
            print(f"Scanning row y={y} for boundary (w={w}):")
            for x in range(w//2 - 30, w//2 + 30):
                r, g, b = img.getpixel((x, y))
                # Print color and a quick label
                label = "pink" if r > 150 and b < 180 else "blue" if b > 150 and r < 120 else "other"
                print(f"  x={x}: RGB=({r},{g},{b}) ({label})")

find_boundary()
