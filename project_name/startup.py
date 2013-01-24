import copy

from django.conf import settings
from django.utils.importlib import import_module
from django.utils.module_loading import module_has_submodule


def autoload(submodules):
    for app in settings.INSTALLED_APPS:
        mod = import_module(app)
        for submodule in submodules:
            try:
                import_module("{}.{}".format(app, submodule))
            except:
                if module_has_submodule(mod, submodule):
                    raise


def run():
    autoload(["receivers"])
