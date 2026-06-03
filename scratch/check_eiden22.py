import os
from PIL import Image

def check_img(name):
    path = os.path.join(r"C:\Users\Amaan\Downloads\Eiden Portfolio\public", name)
    if os.path.exists(path):
        with Image.open(path) as img:
            print(f"{name}: size={img.size}, mode={img.mode}")
    else:
        print(f"{name} not found")

check_img("Eiden 22.png")
check_img("Eiden 23.png")
check_img("Eiden 24.png")
