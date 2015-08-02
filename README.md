# pinax-project-account

[![Join the chat at https://gitter.im/pinax/pinax-project-account](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/pinax/pinax-project-account?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

In addition to what is provided by the "zero" project, this project provides
thorough integration with django-user-accounts, adding comprehensive account
management functionality. It is a foundation suitable for most sites that have
user accounts.


#### Usage

```
django-admin.py startproject --template=https://github.com/pinax/pinax-project-account/zipball/master <project_name>
```

#### Getting Started

```
pip install virtualenv
virtualenv mysiteenv
source mysiteenv/bin/activate
pip install Django==1.8.3
django-admin.py startproject --template=https://github.com/pinax/pinax-project-account/zipball/master mysite
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
webpack      # this will build everything according to the configuration we've provided in webpack.config.js
```

#### Setting up a watcher

You can run `webpack -w` in a terminal to watch the file system and rebuild just
what is needed when you save changes. This will work for any `less` or `js`
changes.
