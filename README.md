# Pinax Project Account

[![Join us on Slack](http://slack.pinaxproject.com/badge.svg)](http://slack.pinaxproject.com/)

In addition to what is provided by the [zero project](https://github.com/pinax/pinax-projects/blob/master/README.md#pinax-project-zero), this project provides thorough integration with [django-user-accounts](https://github.com/pinax/django-user-accounts), adding comprehensive account management functionality. It is a foundation suitable for most sites that have user accounts.

The source code for this project template has moved to the [account branch](https://github.com/pinax/pinax-projects/tree/account) of [pinax-projects](https://github.com/pinax/pinax-projects/).

##### Prerequisites

* pip
* npm


##### Getting Started

You can get started with this project by doing the following:

```
pip install virtualenv
virtualenv mysiteenv
source mysiteenv/bin/activate
pip install Django==1.8.3
django-admin.py startproject --template=https://github.com/pinax/pinax-project/zipball/account mysite -n webpack.config.js
cd mysite
chmod +x manage.py
pip install -r requirements.txt
npm install
./manage.py migrate
./manage.py loaddata sites
./manage.py runserver
```

##### Static Media

Static media is managed by `webpack`, and is configured out of the box to watch
and rebuild on change by running:

```
npm run watch
```

We recommend running that in a separate terminal window than `manage.py runserver`
if and when you are editing `js` or `less` files.
