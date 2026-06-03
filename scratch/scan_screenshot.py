import os
from PIL import Image

screenshot_path = r"C:\Users\Amaan\.gemini\antigravity\brain\a560f167-0818-4009-a21f-ab6aad534b99\media__1780465708770.jpg"

with Image.open(screenshot_path) as img:
    width, height = img.size
    pixels = img.convert("RGB")
    
    # We want to print the horizontal range of non-black content for several rows
    # Let's inspect every 20 pixels vertically
    for y in range(0, height, 20):
        # Find continuous spans of non-black pixels (threshold RGB > 20)
        spans = []
        in_span = False
        start_x = -1
        for x in range(width):
            r, g, b = pixels.getpixel((x, y))
            is_non_black = (r > 20 or g > 20 or b > 20)
            if is_non_black and not in_span:
                in_span = True
                start_x = x
            elif not is_non_black and in_span:
                in_span = False
                spans.append((start_x, x - 1))
        if in_span:
            spans.append((start_x, width - 1))
        
        # Filter spans that are too small (less than 10 pixels wide)
        spans = [s for s in spans if (s[1] - s[0]) > 10]
        if spans:
            print(f"y={y:03d}: spans={spans}")
