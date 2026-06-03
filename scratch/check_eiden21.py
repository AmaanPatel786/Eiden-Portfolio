import os
from PIL import Image

image_path = r"C:\Users\Amaan\Downloads\Eiden Portfolio\public\Eiden 21.png"
if os.path.exists(image_path):
    with Image.open(image_path) as img:
        print(f"Eiden 21.png: size={img.size}, format={img.format}, mode={img.mode}")
        # Let's inspect the four corner pixels to see if they are transparent or black
        pixels = img.convert("RGBA")
        width, height = img.size
        corners = [
            ("Top-Left (0,0)", pixels.getpixel((0, 0))),
            (f"Top-Right ({width-1},0)", pixels.getpixel((width - 1, 0))),
            (f"Bottom-Left (0,{height-1})", pixels.getpixel((0, height - 1))),
            (f"Bottom-Right ({width-1},{height-1})", pixels.getpixel((width - 1, height - 1)))
        ]
        for name, pix in corners:
            print(f"{name}: {pix}")
            
        # Check some pixel in the middle
        print(f"Center ({width//2},{height//2}): {pixels.getpixel((width // 2, height // 2))}")
else:
    print("Eiden 21.png does not exist")
