import os
from PIL import Image

def inspect_corners_rgb(name):
    path = os.path.join(r"C:\Users\Amaan\Downloads\Eiden Portfolio\public", name)
    if os.path.exists(path):
        with Image.open(path) as img:
            pixels = img.convert("RGB")
            width, height = img.size
            print(f"\n{name}:")
            print(f"Top-Left (0,0): {pixels.getpixel((0,0))}")
            print(f"Top-Right ({width-1},0): {pixels.getpixel((width-1,0))}")
            print(f"Bottom-Left (0,{height-1}): {pixels.getpixel((0,height-1))}")
            print(f"Bottom-Right ({width-1},{height-1}): {pixels.getpixel((width-1,height-1))}")
            print(f"Center ({width//2},{height//2}): {pixels.getpixel((width//2,height//2))}")

inspect_corners_rgb("Eiden 22.png")
inspect_corners_rgb("Eiden 23.png")
inspect_corners_rgb("Eiden 24.png")
