# Fixtures

A dual repository (JavaScript and Python) containing basic utils for development.

Minimum external dependencies should be used in order to keep the repository lightweight.

## Overview

This repository contains the fixtures for the common applications, formats, databases that contain data.

### Folder Structure

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
