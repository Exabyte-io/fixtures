from pathlib import Path

import mat3ra.fixtures
from mat3ra.fixtures import get_content_by_reference_path

PATH_IN_MANIFEST = "applications/espresso/v5.4.0/stdin"
EXPECTED_FILE = Path(mat3ra.fixtures.__file__).resolve().parent / "data/applications/espresso/5.4.0/case-001/pw-scf.in"


def test_get_content_by_reference_path():
    content = get_content_by_reference_path(PATH_IN_MANIFEST)
    original = EXPECTED_FILE.read_text(encoding="utf-8")
    assert content == original
