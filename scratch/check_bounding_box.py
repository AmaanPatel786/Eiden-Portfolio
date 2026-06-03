import os
from PIL import Image

def find_bbox(name):
    path = os.path.join(r"C:\Users\Amaan\Downloads\Eiden Portfolio\public", name)
    if os.path.exists(path):
        with Image.open(path) as img:
            print(f"\n{name} size: {img.size}")
            if img.mode == 'RGBA':
                bbox = img.getbbox()
                print(f"Bounding Box: {bbox}")
                # check if there are pixels outside the bbox
                w, h = img.size
                # print alpha values around the bottom edge to see if they are transparent
                print("Bottom-left corner alpha (0 to 100, h-1):")
                print([img.getpixel((x, h-1))[3] for x in range(0, 100, 10)])
            else:
                print("Not RGBA")

find_bbox("Eiden 22.png")
