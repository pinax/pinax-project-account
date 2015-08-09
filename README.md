# pinax-project-account

[![Join us on Slack](http://slack.pinaxproject.com/badge.svg)](http://slack.pinaxproject.com/)

In addition to what is provided by the "zero" project, this project provides
thorough integration with django-user-accounts, adding comprehensive account
management functionality. It is a foundation suitable for most sites that have
user accounts.


#### Usage

```
django-admin.py startproject --template=https://github.com/pinax/pinax-project-account/zipball/master <project_name> --extensions=py,js
```

#### Getting Started

```
pip install virtualenv
virtualenv mysiteenv
source mysiteenv/bin/activate
pip install Django==1.8.3
django-admin.py startproject --template=https://github.com/pinax/pinax-project-account/zipball/master mysite --extensions=py,js
cd mysite
chmod +x manage.py
pip install -r requirements.txt
./manage.py migrate
./manage.py loaddata sites
./manage.py runserver
```

#### Modifying static assets

We rely on the Node Package Manager (`npm`), which comes with `node`. If on the
Mac, you can just `brew install node`. Otherwise, you can find [documentation](https://docs.npmjs.com/getting-started/installing-node)
on how to install it for your operating system or desired setup.

```
npm install  # this will install all the dependencies in package.json
npm run watch  # run a watcher
npm run build  # just build the media
```

#### Setting up a watcher

You can run `npm run watch` in a terminal to watch the file system and rebuild just
what is needed when you save changes. This will work for any `less` or `js`
changes.
