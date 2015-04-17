THEME_PATH = `/usr/bin/env python -c "import os, pinax_theme_bootstrap; print(os.path.dirname(pinax_theme_bootstrap.__file__))"`
THEME_STATIC_PATH = $(THEME_PATH)/static
BOOTSTRAP_JS_PATH = $(THEME_STATIC_PATH)/bootstrap/js
LESS_INCLUDE_PATH = $(THEME_STATIC_PATH)
LESS_COMPRESSOR ?= `which lessc`
SITE_LESS = ./less/site.less
JS_OUTPUT_PATH = ../js
CSS_OUTPUT_PATH = ../css
JS_OUTPUT_FILENAME = $(JS_OUTPUT_PATH)/bootstrap.min.js
CSS_OUTPUT_FILENAME = $(CSS_OUTPUT_PATH)/site.css

define BOOTSTRAP_LICENSE_BANNER
/*!
 * Bootstrap (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
endef
export BOOTSTRAP_LICENSE_BANNER

#
# BUILD SITE STATIC
# npm install -g uglify-js less
#

build:
	mkdir -p ${JS_OUTPUT_PATH}
	cat ${BOOTSTRAP_JS_PATH}/affix.js ${BOOTSTRAP_JS_PATH}/alert.js ${BOOTSTRAP_JS_PATH}/button.js ${BOOTSTRAP_JS_PATH}/carousel.js ${BOOTSTRAP_JS_PATH}/collapse.js ${BOOTSTRAP_JS_PATH}/dropdown.js ${BOOTSTRAP_JS_PATH}/modal.js ${BOOTSTRAP_JS_PATH}/tooltip.js ${BOOTSTRAP_JS_PATH}/popover.js ${BOOTSTRAP_JS_PATH}/scrollspy.js ${BOOTSTRAP_JS_PATH}/tab.js ${BOOTSTRAP_JS_PATH}/transition.js > ${JS_OUTPUT_PATH}/bootstrap.js
	rm -f ${JS_OUTPUT_FILENAME}
	echo "$$BOOTSTRAP_LICENSE_BANNER" > ${JS_OUTPUT_FILENAME}
	uglifyjs ${JS_OUTPUT_PATH}/bootstrap.js -nc >> ${JS_OUTPUT_FILENAME}
	rm -f ${JS_OUTPUT_PATH}/bootstrap.js
	mkdir -p ${CSS_OUTPUT_PATH}
	lessc --compress --include-path=${LESS_INCLUDE_PATH} ${SITE_LESS} > ${CSS_OUTPUT_FILENAME}
