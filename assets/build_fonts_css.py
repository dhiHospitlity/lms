import base64
from pathlib import Path

ASSETS = Path(__file__).parent
OUT = ASSETS / "fonts.css"

FACES = [
    ("DusitDisplay", "DusitDisplay-Regular.ttf", 400, "normal"),
    ("DusitDisplay", "DusitDisplay-Bold.ttf",    700, "normal"),
    ("DusitDisplay", "DusitDisplay-Italic.ttf",  400, "italic"),
    ("DusitText",    "DusitText-Regular.ttf",    400, "normal"),
    ("DusitText",    "DusitText-Bold.ttf",       700, "normal"),
]

lines = []
for family, filename, weight, style in FACES:
    data = (ASSETS / filename).read_bytes()
    b64 = base64.b64encode(data).decode("ascii")
    lines.append(
        f"@font-face{{font-family:'{family}';"
        f"src:url(data:font/ttf;base64,{b64}) format('truetype');"
        f"font-weight:{weight};font-style:{style};font-display:swap;}}"
    )

OUT.write_text("\n".join(lines), encoding="utf-8")
print(f"Wrote {OUT} ({OUT.stat().st_size:,} bytes)")
