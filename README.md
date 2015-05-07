# pinax-project-account

[![Join the chat at https://gitter.im/pinax/pinax-project-account](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/pinax/pinax-project-account?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

In addition to what is provided by the "zero" project, this project provides
thorough integration with django-user-accounts, adding comprehensive account
management functionality. It is a foundation suitable for most sites that have
user accounts.


Usage:

```
django-admin.py startproject --template=https://github.com/pinax/pinax-project-account/zipball/master <project_name>
```

Getting Started:

```
pip install virtualenv
virtualenv mysiteenv
source mysiteenv/bin/activate
pip install Django==1.8.1
django-admin.py startproject --template=https://github.com/pinax/pinax-project-account/zipball/master mysite
cd mysite
chmod +x manage.py
pip install -r requirements.txt
./manage.py migrate
./manage.py loaddata sites
./manage.py runserver
```
