import os
from PIL import Image

def inspect_pixels_near_edge(name):
    path = os.path.join(r"C:\Users\Amaan\Downloads\Eiden Portfolio\public", name)
    if os.path.exists(path):
        with Image.open(path) as img:
            print(f"\n{name} mode={img.mode} size={img.size}")
            # Let's inspect a few pixels along the top edge (y=10) and left edge (x=10)
            # to see if there's a border color (usually dark or grey)
            pixels = img.convert("RGBA")
            w, h = img.size
            print("Top row (y=10) alpha & RGB values at x=10, 50, 100, 200:")
            for x in [10, 50, 100, 200]:
                print(f"  ({x}, 10): {pixels.getpixel((x, 10))}")
            print("Left col (x=10) alpha & RGB values at y=10, 50, 100, 200:")
            for y in [10, 50, 100, 200]:
                print(f"  (10, {y}): {pixels.getpixel((10, y))}")

inspect_pixels_near_edge("Eiden 22.png")
