import os
from PIL import Image

def analyze_margins(name):
    path = os.path.join(r"C:\Users\Amaan\Downloads\Eiden Portfolio\public", name)
    if os.path.exists(path):
        with Image.open(path) as img:
            if img.mode != 'RGBA':
                print(f"{name} is not RGBA (mode={img.mode})")
                return
            w, h = img.size
            # Find margins
            left_margin = 0
            for x in range(w):
                if any(img.getpixel((x, y))[3] > 0 for y in range(h)):
                    left_margin = x
                    break
            right_margin = 0
            for x in range(w-1, -1, -1):
                if any(img.getpixel((x, y))[3] > 0 for y in range(h)):
                    right_margin = w - 1 - x
                    break
            top_margin = 0
            for y in range(h):
                if any(img.getpixel((x, y))[3] > 0 for x in range(w)):
                    top_margin = y
                    break
            bottom_margin = 0
            for y in range(h-1, -1, -1):
                if any(img.getpixel((x, y))[3] > 0 for x in range(w)):
                    bottom_margin = h - 1 - y
                    break
            print(f"{name} margins:")
            print(f"  Left: {left_margin} px")
            print(f"  Right: {right_margin} px")
            print(f"  Top: {top_margin} px")
            print(f"  Bottom: {bottom_margin} px")

analyze_margins("Eiden 22.png")
