from PIL import Image

def remove_checkerboard(img_path, out_path):
    try:
        img = Image.open(img_path).convert("RGBA")
        data = img.getdata()

        new_data = []
        for item in data:
            r, g, b, a = item
            # Checkerboard is usually perfect grey/white. We'll tolerate a small variance.
            # Typical grey is around 204, white is 255.
            if abs(r - g) < 10 and abs(g - b) < 10 and r > 190:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)

        img.putdata(new_data)
        img.save(out_path, "PNG")
        print("Success")
    except Exception as e:
        print("Error:", e)

remove_checkerboard('public/doctor-hero.png', 'public/doctor-hero-transparent.png')
