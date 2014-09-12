from django.apps import AppConfig as BaseAppConfig
from django.utils.importlib import import_module


class AppConfig(BaseAppConfig):

    name = "{{ project_name }}"

    def ready(self):
        import_module("{{ project_name }}.receivers")
