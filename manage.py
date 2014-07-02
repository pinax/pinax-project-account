#!/usr/bin/env python

import os
import sys


if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "{{ project_name }}.settings")
    from django.core.management import execute_from_command_line
    import {{ project_name }}.startup as startup
    startup.run()
    execute_from_command_line(sys.argv)
