from pathlib import Path

import yaml
from mat3ra.utils import object as object_utils


def get_content_by_reference_path(path_in_manifest_yaml: str) -> str:
    # Package directory (source checkout or site-packages); `data` is vendored or symlinked here.
    package_dir = Path(__file__).resolve().parent

    manifest = yaml.safe_load((package_dir / "manifest.yml").read_text(encoding="utf-8"))

    path_from_top_level = object_utils.get(manifest, path_in_manifest_yaml).strip("/")

    return (package_dir / path_from_top_level).read_text(encoding="utf-8")
