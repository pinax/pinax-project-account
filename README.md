pinax-project-account
=====================

a starter project the incorporates account features from django-user-accounts


Usage:

    django-admin.py startproject --template=https://github.com/pinax/pinax-project-account/zipball/master <project_name>

Getting Started:

    pip install virtualenv
    virtualenv mysiteenv
    source mysiteenv/bin/activate
    pip install Django==1.6.2
    django-admin.py startproject --template=https://github.com/pinax/pinax-project-account/zipball/master mysite
    cd mysite
    pip install -r requirements.txt
    python manage.py syncdb
    python manage.py runserver
