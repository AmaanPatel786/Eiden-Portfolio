import os
from PIL import Image

def check_alpha(name):
    path = os.path.join(r"C:\Users\Amaan\Downloads\Eiden Portfolio\public", name)
    if os.path.exists(path):
        with Image.open(path) as img:
            print(f"\n{name} (mode={img.mode}):")
            if img.mode == 'RGBA':
                w, h = img.size
                print(f"Top-Left Alpha (0,0): {img.getpixel((0,0))[3]}")
                print(f"Top-Right Alpha ({w-1},0): {img.getpixel((w-1,0))[3]}")
                print(f"Bottom-Left Alpha (0,{h-1}): {img.getpixel((0,h-1))[3]}")
                print(f"Bottom-Right Alpha ({w-1},{h-1}): {img.getpixel((w-1,h-1))[3]}")
                # check some other points along the edges to see if there is alpha
                print(f"Top-Center Alpha ({w//2}, 0): {img.getpixel((w//2,0))[3]}")
                print(f"Bottom-Center Alpha ({w//2}, {h-1}): {img.getpixel((w//2,h-1))[3]}")
            else:
                print("Not RGBA")

check_alpha("Eiden 22.png")
