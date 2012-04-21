from django.conf.urls import patterns, include, url
from django.views.generic.simple import direct_to_template

# handler500 = "pinax.views.server_error"


urlpatterns = patterns("",
    url(r"^$", direct_to_template, {
        "template": "homepage.html",
    }, name="home"),
    
    url(r"^account/", include("account.urls")),
)
