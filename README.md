# Fixtures

A dual repository (JavaScript and Python) containing basic utils for development.

Minimum external dependencies should be used in order to keep the repository lightweight.

## 1. Overview

This repository contains the fixtures for the common applications, formats, databases that contain data.

## 2. Usage

### 2.1. Python

See example [test](tests/py/unit/test_get_from_manifest.py).

The files can be directly accessed through the filesystem, otherwise the content can be extracted by (a shortened) reference ("object path") from the top-level [manifest.yml](src/py/mat3ra/fixtures/manifest.yml).

```py
from mat3ra.fixtures import get_content_by_reference_path

PATH_IN_MANIFEST = "applications/espresso/v5.4.0/stdin"

content = get_content_by_reference_path(PATH_IN_MANIFEST)
print(content)
```

### 2.2. JavaScript/TypeScript

This package can be installed via npm:

```bash
npm install @mat3ra/fixtures
```

The package exports utilities to access the data folder. Only server-side (Node.js) runtime is supported due to having to rely on the filesystem.

#### Getting the Data Folder Path

You can access the data folder path in several ways:

**TypeScript/ES6 Modules:**

```typescript
import { getDataPath, DATA_PATH } from '@mat3ra/fixtures';
import * as fs from 'fs';
import * as path from 'path';

// Using the function
const dataPath = getDataPath();

// Using the constant
const manifestPath = path.join(DATA_PATH, 'applications/espresso/5.4.0/manifest.yml');
const manifest = fs.readFileSync(manifestPath, 'utf-8');

// Using default export
import dataPath from '@mat3ra/fixtures';
const filePath = path.join(dataPath, 'applications/espresso/5.4.0/case-001/pw-scf.in');
```

**CommonJS:**

```javascript
const { getDataPath, DATA_PATH } = require('@mat3ra/fixtures');
const fs = require('fs');
const path = require('path');

// Using the function
const dataPath = getDataPath();

// Using the constant
const manifestPath = path.join(DATA_PATH, 'applications/espresso/5.4.0/manifest.yml');
const manifest = fs.readFileSync(manifestPath, 'utf-8');
```

#### Direct Data Folder Access

You can also access the data folder directly using the package exports:

```typescript
// Access specific files in the data folder
import '@mat3ra/fixtures/data/applications/espresso/5.4.0/manifest.yml';
```

#### Example: Reading a File from the Data Folder

```typescript
import { DATA_PATH } from '@mat3ra/fixtures';
import * as fs from 'fs';
import * as path from 'path';

// Read a manifest file
const manifestPath = path.join(
  DATA_PATH,
  'applications/espresso/5.4.0/manifest.yml'
);
const manifest = fs.readFileSync(manifestPath, 'utf-8');

// Read an input file
const inputPath = path.join(
  DATA_PATH,
  'applications/espresso/5.4.0/case-001/pw-scf.in'
);
const inputContent = fs.readFileSync(inputPath, 'utf-8');
```

## 3. Development

### 3.1. Folder Structure

Here's the folder structure of the repository:

```txt
data
├── applications
│   └── espresso
│       └── 5.4.0
│           ├── case-001
│           ├── case-002
│           ├── case-003
│           └── manifest.yml
├── db
└── formats
```

For each version of the application, there are multiple cases. Each case contains the data that is used for testing.  The manifest file is a YAML file that contains the metadata about all the cases.
