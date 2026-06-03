import os
from PIL import Image

def measure_screenshot():
    # The new screenshot is the latest media artifact in the brain folder
    # Let's search the artifacts directory for the latest png file
    artifacts_dir = r"C:\Users\Amaan\.gemini\antigravity\brain\a560f167-0818-4009-a21f-ab6aad534b99"
    # Find the most recently modified png artifact
    png_files = [f for f in os.listdir(artifacts_dir) if f.endswith(".png") and f.startswith("media_")]
    png_files.sort(key=lambda x: os.path.getmtime(os.path.join(artifacts_dir, x)))
    
    if not png_files:
        print("No media artifacts found")
        return
        
    latest_png = png_files[-1]
    path = os.path.join(artifacts_dir, latest_png)
    print(f"Analyzing latest screenshot: {latest_png} (path={path})")
    
    with Image.open(path) as img:
        img = img.convert("RGB")
        w, h = img.size
        print(f"Size: {w} x {h}")
        
        # Let's find the left and right margins of Eiden 21 (at y = h // 10)
        # Eiden 21 has a cyan background (which has high blue/green, low red)
        # Let's scan row y = 50 for the cyan background bounds
        y_21 = 50
        cyan_left = -1
        cyan_right = -1
        for x in range(w):
            r, g, b = img.getpixel((x, y_21))
            # Cyan is typically low R (e.g. < 50), high B and G (e.g. > 150)
            # Or we can check if it is not black/dark background (which has R, G, B < 30)
            if r > 40 or g > 40 or b > 40:
                if cyan_left == -1:
                    cyan_left = x
                cyan_right = x
                
        print(f"Image 21 (Stickers pack) bounds: Left={cyan_left}, Right={cyan_right}, Width={cyan_right - cyan_left + 1} ({100 * (cyan_right - cyan_left + 1)/w:.1f}%)")
        
        # Let's find the left and right margins of Eiden 22 (at y = h // 3, e.g. y = 180)
        # Eiden 22 is the laptop mockup which has a grey frame
        # Let's scan row y = 200 for non-black pixels
        y_22 = 200
        mockup_left = -1
        mockup_right = -1
        for x in range(w):
            r, g, b = img.getpixel((x, y_22))
            if r > 40 or g > 40 or b > 40:
                if mockup_left == -1:
                    mockup_left = x
                mockup_right = x
                
        print(f"Image 22 (Laptop banner) bounds: Left={mockup_left}, Right={mockup_right}, Width={mockup_right - mockup_left + 1} ({100 * (mockup_right - mockup_left + 1)/w:.1f}%)")

measure_screenshot()
