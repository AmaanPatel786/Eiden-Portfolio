import os
from PIL import Image

public_dir = r"C:\Users\Amaan\Downloads\Eiden Portfolio\public"

def check_borders(filename):
    path = os.path.join(public_dir, filename)
    if not os.path.exists(path):
        print(f"{filename} does not exist")
        return
    
    with Image.open(path) as img:
        width, height = img.size
        # Load pixels
        pixels = img.convert("RGB")
        
        # Check from left
        left_black_cols = 0
        for x in range(width):
            is_col_black = True
            for y in range(height):
                r, g, b = pixels.getpixel((x, y))
                # Consider black if RGB values are all very low (e.g. < 15)
                if r > 15 or g > 15 or b > 15:
                    is_col_black = False
                    break
            if is_col_black:
                left_black_cols += 1
            else:
                break
                
        # Check from right
        right_black_cols = 0
        for x in range(width - 1, -1, -1):
            is_col_black = True
            for y in range(height):
                r, g, b = pixels.getpixel((x, y))
                if r > 15 or g > 15 or b > 15:
                    is_col_black = False
                    break
            if is_col_black:
                right_black_cols += 1
            else:
                break
                
        print(f"{filename}: size={width}x{height}, left black cols={left_black_cols}, right black cols={right_black_cols}, active width={width - left_black_cols - right_black_cols}")

check_borders("Eiden 12.png")
check_borders("Eiden 13.png")
check_borders("Eiden 14.png")
check_borders("Eiden 15.png")
